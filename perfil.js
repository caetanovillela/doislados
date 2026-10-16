/*
  Perfil: o que a pessoa salvou para ler depois e o que já leu.

  Sem conta, tudo fica no próprio navegador (localStorage). Com conta (Supabase, configurado em
  dados/supabase.js), o mesmo conteúdo é guardado na tabela `perfis` e aparece em qualquer aparelho.
  A conversa com o Supabase usa só fetch (auth/v1 e rest/v1), sem biblioteca externa.

  Chaves dos itens:
    t:<tema>              tema (dossiê)
    l:<tema>:<leitura>    estudo / leitura
    v:<tema>:<vídeo>      vídeo
*/
(function () {
  const temas = window.TEMAS || [];
  const CHAVE = "dois-lados-perfil";
  const CHAVE_SESSAO = "dois-lados-sessao";
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const dataBR = (iso) => (iso ? iso.slice(0, 10).split("-").reverse().join("/") : "");
  const agora = () => new Date().toISOString();

  const vazio = () => ({ versao: 1, conta: null, itens: {}, historico: [] });

  const armazem = {
    ler() {
      try {
        const d = JSON.parse(localStorage.getItem(CHAVE) || "null");
        if (d && typeof d === "object" && d.itens) return Object.assign(vazio(), d);
      } catch (e) {}
      return vazio();
    },
    gravar(d) {
      try { localStorage.setItem(CHAVE, JSON.stringify(d)); return true; } catch (e) { return false; }
    },
  };

  let dados = armazem.ler();
  const salvar = () => { armazem.gravar(dados); pintarBotoes(); pintarTopo(); agendarEnvio(); };

  // Junta outro perfil ao atual; em caso de conflito, vale a marcação mais recente.
  function mesclar(d) {
    if (!d || typeof d !== "object") return;
    for (const [k, v] of Object.entries(d.itens || {})) {
      if (!/^[tlv]:/.test(k) || !v) continue;
      const atual = dados.itens[k];
      const em = String(v.em || "");
      if (atual && (atual.em || "") >= em) continue;
      if (v.estado === "quero" || v.estado === "lido") dados.itens[k] = { estado: v.estado, em };
      else if (v.estado === null && atual) delete dados.itens[k];
    }
    if (Array.isArray(d.historico)) {
      const todos = [...d.historico, ...dados.historico].filter((h) => h && typeof h.tema === "string");
      todos.sort((a, b) => String(b.em || "").localeCompare(String(a.em || "")));
      dados.historico = todos.filter((h, i) => todos.findIndex((x) => x.tema === h.tema) === i).slice(0, 30);
    }
  }

  /* ---------- Conta (Supabase) ---------- */

  const SB = window.SUPABASE || {};
  const nuvem = !!(SB.url && SB.chave);
  const base = String(SB.url || "").replace(/\/+$/, "");
  const siteRetorno = SB.site || location.origin + location.pathname;
  let sessao = null;
  try { sessao = nuvem ? JSON.parse(localStorage.getItem(CHAVE_SESSAO) || "null") : null; } catch (e) {}
  const conta = { modo: "criar", msg: "", erro: false, ocupado: false, sincronia: "", campos: {} };

  const ERROS = [
    [/invalid login credentials/i, "E-mail ou senha incorretos."],
    [/already registered|already exists/i, "Esse e-mail já tem conta. Use “Já tenho conta” para entrar."],
    [/not confirmed/i, "Falta confirmar o e-mail: abra o link que enviamos para você."],
    [/password.*(6|short|weak)|weak_password/i, "A senha precisa ter pelo menos 6 caracteres."],
    [/rate limit|too many|over_email_send_rate_limit/i, "Muitas tentativas seguidas. Espere alguns minutos e tente de novo."],
    [/invalid.*email|email_address_invalid/i, "Esse e-mail não parece válido."],
    [/signups not allowed|signup_disabled/i, "Os cadastros estão fechados no momento."],
    [/same_password|different from the old/i, "A nova senha precisa ser diferente da anterior."],
    [/^rede$/, "Não deu para falar com o servidor. Confira sua internet e tente de novo."],
  ];
  const traduzir = (e) => {
    const t = String((e && e.message) || e || "");
    const achado = ERROS.find(([re]) => re.test(t) || re.test(String(e && e.codigo)));
    return achado ? achado[1] : "Algo deu errado. Tente de novo em instantes.";
  };

  async function api(caminho, { metodo = "GET", corpo, token, prefer } = {}) {
    const h = { apikey: SB.chave, "Content-Type": "application/json" };
    if (token) h.Authorization = "Bearer " + token;
    if (prefer) h.Prefer = prefer;
    let r;
    try {
      r = await fetch(base + caminho, { method: metodo, headers: h, body: corpo ? JSON.stringify(corpo) : undefined });
    } catch (e) { throw new Error("rede"); }
    const texto = await r.text();
    let j = null;
    try { j = texto ? JSON.parse(texto) : null; } catch (e) {}
    if (!r.ok) {
      const err = new Error((j && (j.error_description || j.msg || j.message || j.error)) || "HTTP " + r.status);
      err.status = r.status;
      err.codigo = j && (j.error_code || j.code);
      throw err;
    }
    return j;
  }

  function guardarSessao(j, usuario) {
    const u = usuario || j.user || {};
    sessao = {
      access_token: j.access_token,
      refresh_token: j.refresh_token,
      expires_at: Number(j.expires_at) || Math.floor(Date.now() / 1000) + Number(j.expires_in || 3600),
      user: { id: u.id, email: u.email, nome: (u.user_metadata && u.user_metadata.nome) || "" },
    };
    try { localStorage.setItem(CHAVE_SESSAO, JSON.stringify(sessao)); } catch (e) {}
  }

  function esquecerSessao() {
    sessao = null;
    try { localStorage.removeItem(CHAVE_SESSAO); } catch (e) {}
  }

  // Token válido, renovando quando está perto de vencer. Sem sessão (ou renovação negada), devolve null.
  async function token() {
    if (!sessao) return null;
    if (sessao.expires_at * 1000 - Date.now() > 60000) return sessao.access_token;
    try {
      const j = await api("/auth/v1/token?grant_type=refresh_token", { metodo: "POST", corpo: { refresh_token: sessao.refresh_token } });
      guardarSessao(j);
      return sessao.access_token;
    } catch (e) {
      if (e.message === "rede") return null;
      esquecerSessao();
      dados.conta = null;
      armazem.gravar(dados);
      pintarTopo();
      return null;
    }
  }

  // Ao entrar: traz o perfil da conta, junta com o que já estava salvo neste navegador e grava os dois.
  async function puxar() {
    const t = await token();
    if (!t) return;
    const linhas = await api(`/rest/v1/perfis?select=nome,dados&id=eq.${encodeURIComponent(sessao.user.id)}`, { token: t });
    const remoto = Array.isArray(linhas) ? linhas[0] : null;
    if (remoto) mesclar(remoto.dados);
    const antes = (remoto && remoto.dados && remoto.dados.conta) || dados.conta || {};
    dados.conta = {
      nome: (remoto && remoto.nome) || sessao.user.nome || antes.nome || String(sessao.user.email || "").split("@")[0],
      desde: antes.desde || agora(),
      email: sessao.user.email,
    };
    armazem.gravar(dados);
    pintarBotoes();
    pintarTopo();
    await enviar();
  }

  let envioTimer;
  function agendarEnvio() {
    if (!sessao) return;
    clearTimeout(envioTimer);
    conta.sincronia = "salvando";
    pintarSincronia();
    envioTimer = setTimeout(() => enviar().catch(() => {}), 700);
  }

  async function enviar() {
    const t = await token();
    if (!t) { conta.sincronia = sessao ? "erro" : ""; pintarSincronia(); return; }
    try {
      await api("/rest/v1/perfis?on_conflict=id", {
        metodo: "POST", token: t, prefer: "resolution=merge-duplicates,return=minimal",
        corpo: { id: sessao.user.id, nome: (dados.conta && dados.conta.nome) || "", dados, atualizado_em: agora() },
      });
      conta.sincronia = "ok";
    } catch (e) {
      conta.sincronia = "erro";
    }
    pintarSincronia();
  }

  function pintarSincronia() {
    const el = document.getElementById("perfil-sincronia");
    if (!el) return;
    el.textContent = { ok: "Salvo na sua conta", salvando: "Salvando…", erro: "Sem conexão: fica salvo aqui e sobe depois" }[conta.sincronia] || "Guardado na sua conta";
  }

  async function cadastrar(nome, email, senha) {
    const j = await api("/auth/v1/signup?redirect_to=" + encodeURIComponent(siteRetorno + "#perfil"), {
      metodo: "POST", corpo: { email, password: senha, data: { nome } },
    });
    dados.conta = Object.assign({ desde: agora() }, dados.conta, { nome });
    armazem.gravar(dados);
    if (j && j.access_token) { guardarSessao(j); await puxar(); return "dentro"; }
    // Projeto com confirmação de e-mail: a conta só vale depois do link.
    return "confirmar";
  }

  async function entrar(email, senha) {
    const j = await api("/auth/v1/token?grant_type=password", { metodo: "POST", corpo: { email, password: senha } });
    guardarSessao(j);
    await puxar();
  }

  async function sair(semAvisarServidor) {
    const t = sessao && sessao.access_token;
    clearTimeout(envioTimer);
    if (t && !semAvisarServidor) api("/auth/v1/logout", { metodo: "POST", token: t }).catch(() => {});
    esquecerSessao();
    // Quem sai não deixa o que salvou à vista de quem usar o aparelho depois.
    dados = vazio();
    armazem.gravar(dados);
    conta.sincronia = "";
    pintarBotoes();
    pintarTopo();
  }

  async function apagarConta() {
    const t = await token();
    if (!t) throw new Error("rede");
    await api("/rest/v1/rpc/apagar_conta", { metodo: "POST", token: t, corpo: {} });
    await sair(true);
  }

  // Links dos e-mails do Supabase voltam com o resultado no endereço (#access_token=... ou #error=...).
  // Isso é lido antes do app.js montar a página, e o endereço vira #perfil.
  let retorno = null;
  if (nuvem && /(^#|&)(access_token|error)=/.test(location.hash)) {
    const p = new URLSearchParams(location.hash.slice(1));
    retorno = Object.fromEntries(p.entries());
    try { history.replaceState(null, "", location.pathname + location.search + "#perfil"); } catch (e) { location.hash = "perfil"; }
  }

  async function tratarRetorno() {
    if (!retorno) return;
    if (retorno.error) {
      conta.erro = true;
      conta.modo = "entrar";
      conta.msg = /expired/i.test(retorno.error_code || retorno.error_description || "")
        ? "Esse link expirou. Peça outro abaixo."
        : "Não deu para usar esse link. Tente de novo.";
      if (/recovery|expired/i.test(retorno.error_description || "")) conta.modo = "esqueci";
      repintarPerfil();
      return;
    }
    try {
      const u = await api("/auth/v1/user", { token: retorno.access_token });
      guardarSessao(retorno, u);
      if (retorno.type === "recovery") {
        conta.modo = "nova-senha";
        conta.msg = "";
      } else {
        conta.msg = "";
      }
      await puxar();
    } catch (e) {
      conta.erro = true;
      conta.msg = traduzir(e);
    }
    repintarPerfil();
  }

  /* ---------- Itens ---------- */

  // Encontra o conteúdo de uma chave no catálogo atual do site.
  function achar(chave) {
    const [tipo, idTema, id] = chave.split(":");
    const tema = temas.find((t) => t.id === idTema && !t.emBreve);
    if (!tema) return null;
    if (tipo === "t") return { tipo, tema, titulo: tema.titulo, sub: tema.pergunta, href: "#" + tema.id };
    if (tipo === "l") {
      const a = (tema.leituras || []).find((x) => x.id === id);
      return a && { tipo, tema, item: a, titulo: a.titulo, sub: a.instituicao, href: a.url, fora: true, lado: a.posicao };
    }
    if (tipo === "v") {
      const v = (tema.videos || []).find((x) => x.id === id);
      return v && { tipo, tema, item: v, titulo: v.titulo, sub: v.canal, href: "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id), fora: true, lado: v.lado };
    }
    return null;
  }

  const estadoDe = (chave) => (dados.itens[chave] || {}).estado || null;

  // Itens removidos ficam como estado null (com data) para a remoção valer também nos outros aparelhos.
  function marcar(chave, estado) {
    if (!estado) {
      if (sessao) dados.itens[chave] = { estado: null, em: agora() };
      else delete dados.itens[chave];
    } else dados.itens[chave] = { estado, em: agora() };
    salvar();
  }

  /* ---------- Botões nas páginas ---------- */

  const ICONE = {
    quero: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4.5L6 21z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    lido: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5 9.5 18 20 6.5" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>',
  };
  const TEXTO = {
    t: { quero: "Ler depois", lido: "Já li" },
    l: { quero: "Ler depois", lido: "Já li" },
    v: { quero: "Ver depois", lido: "Já vi" },
  };

  // HTML dos botões "Ler depois" e "Já li" de um item. `compacto` deixa só a linha discreta.
  function botoes(chave, compacto) {
    const tipo = chave[0];
    const est = estadoDe(chave);
    const b = (acao) =>
      `<button type="button" class="salvar-botao" data-salvar="${acao}" data-chave="${esc(chave)}" aria-pressed="${est === acao}">${ICONE[acao]}<span>${TEXTO[tipo][acao]}</span></button>`;
    return `<span class="salvar${compacto ? " compacto" : ""}">${b("quero")}${b("lido")}</span>`;
  }

  function pintarBotoes() {
    document.querySelectorAll("[data-salvar]").forEach((b) => {
      b.setAttribute("aria-pressed", String(estadoDe(b.dataset.chave) === b.dataset.salvar));
    });
  }

  // Ícone do topo: mostra a inicial do nome quando o perfil tem nome.
  function pintarTopo() {
    const a = document.getElementById("perfil-botao");
    if (!a) return;
    const nome = dados.conta && dados.conta.nome;
    a.classList.toggle("com-nome", !!nome);
    a.querySelector(".perfil-inicial").textContent = nome ? nome.trim()[0].toUpperCase() : "";
    const rot = nome ? `Seu perfil, ${nome}` : nuvem ? "Entrar ou criar conta" : "Seu perfil: o que salvou e o que já leu";
    a.setAttribute("aria-label", rot);
    a.title = rot;
    a.toggleAttribute("aria-current", location.hash === "#perfil");
  }

  /* ---------- Aviso rápido (com desfazer) ---------- */

  let avisoTimer;
  function avisar(texto, desfazer) {
    let el = document.getElementById("aviso-perfil");
    if (!el) {
      el = document.createElement("div");
      el.id = "aviso-perfil";
      el.className = "aviso";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    const noPerfil = location.hash === "#perfil";
    el.innerHTML = `<span>${esc(texto)}</span>${desfazer ? '<button type="button" class="botao-texto">Desfazer</button>' : ""}${noPerfil ? "" : '<a class="botao-texto" href="#perfil">Ver perfil</a>'}`;
    if (desfazer) el.querySelector("button").onclick = () => { desfazer(); el.classList.remove("visivel"); };
    el.classList.add("visivel");
    clearTimeout(avisoTimer);
    avisoTimer = setTimeout(() => el.classList.remove("visivel"), 4500);
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-salvar]");
    if (b) {
      const chave = b.dataset.chave, acao = b.dataset.salvar;
      const antes = estadoDe(chave);
      marcar(chave, antes === acao ? null : acao);
      if (antes !== acao) {
        avisar(acao === "quero" ? "Salvo para depois no seu perfil." : "Marcado como lido no seu perfil.", () => marcar(chave, antes));
      }
      return;
    }
    // Abrir o texto original de um estudo ou tocar um vídeo conta como lido.
    const cartao = e.target.closest("[data-chave-auto]");
    const link = e.target.closest("a[href^='http'], [data-video]");
    if (cartao && link && cartao.contains(link)) {
      const chave = cartao.dataset.chaveAuto;
      const antes = estadoDe(chave);
      if (antes !== "lido") {
        marcar(chave, "lido");
        avisar(chave[0] === "v" ? "Vídeo marcado como visto no seu perfil." : "Estudo marcado como lido no seu perfil.", () => marcar(chave, antes));
      }
    }
  });

  // Histórico: últimos temas abertos.
  function registrarVisita() {
    const id = decodeURIComponent(location.hash.replace(/^#/, "")).split(".")[0];
    if (temas.some((t) => t.id === id && !t.emBreve)) {
      dados.historico = [{ tema: id, em: agora() }, ...dados.historico.filter((h) => h.tema !== id)].slice(0, 30);
      armazem.gravar(dados);
      agendarEnvio();
    }
    pintarTopo();
  }
  window.addEventListener("hashchange", registrarVisita);
  window.addEventListener("storage", (e) => {
    if (e.key === CHAVE) { dados = armazem.ler(); pintarBotoes(); pintarTopo(); }
    if (e.key === CHAVE_SESSAO) { try { sessao = JSON.parse(e.newValue || "null"); } catch (er) {} pintarTopo(); }
  });

  /* ---------- Página do perfil ---------- */

  const NOME_TIPO = { t: "Tema", l: "Estudo", v: "Vídeo" };
  const LETRA = { favoravel: "A", contrario: "B" };
  const ABAS = [["quero", "Para depois"], ["lido", "Já li"], ["equilibrio", "Seu equilíbrio"], ["historico", "Histórico"]];
  let aba = "quero";
  try { aba = localStorage.getItem("perfil-aba") || "quero"; } catch (e) {}
  let raizAtual = null;
  const repintarPerfil = () => { if (raizAtual && location.hash === "#perfil") pagina(raizAtual); };

  function listaDe(estado) {
    return Object.entries(dados.itens)
      .filter(([, v]) => v.estado === estado)
      .sort((a, b) => (b[1].em || "").localeCompare(a[1].em || ""))
      .map(([chave, v]) => ({ chave, em: v.em, info: achar(chave) }))
      .filter((x) => x.info);
  }

  function linhaItem({ chave, em, info }) {
    const lado = info.lado && LETRA[info.lado]
      ? `<span class="lado-sinal ${LETRA[info.lado].toLowerCase()}" title="Lado ${LETRA[info.lado]}">${LETRA[info.lado]}</span>` : `<span class="lado-sinal vazio-sinal" aria-hidden="true"></span>`;
    return `
      <li class="item-salvo">
        ${lado}
        <div class="item-corpo">
          <span class="mono apagado">${NOME_TIPO[info.tipo]} · <a href="#${esc(info.tema.id)}">${esc(info.tema.titulo)}</a> · ${dataBR(em)}</span>
          <a class="item-titulo" href="${esc(info.href)}"${info.fora ? ' target="_blank" rel="noopener"' : ""}>${esc(info.titulo)}${info.fora ? '<span class="seta" aria-hidden="true"> ↗</span>' : ""}</a>
          ${info.sub ? `<span class="item-sub">${esc(info.sub)}</span>` : ""}
        </div>
        <span class="item-acoes">${botoes(chave, true)}<button type="button" class="botao-texto remover" data-remover="${esc(chave)}">Remover</button></span>
      </li>`;
  }

  // Quantos estudos de cada lado a pessoa leu, por tema: o site existe para ler os dois.
  function equilibrio() {
    const linhas = temas.filter((t) => !t.emBreve).map((t) => {
      const contar = (pos) => {
        const todos = (t.leituras || []).filter((a) => a.posicao === pos);
        return { lidos: todos.filter((a) => estadoDe(`l:${t.id}:${a.id}`) === "lido").length, total: todos.length };
      };
      return { t, a: contar("favoravel"), b: contar("contrario") };
    }).filter((x) => x.a.lidos + x.b.lidos > 0);
    if (!linhas.length) {
      return `<div class="vazio"><p>Quando você abrir os estudos de um tema, aparece aqui quantos leu de cada lado.</p><a class="botao-texto" href="#">Escolher um tema</a></div>`;
    }
    const barra = (x, letra) => `
      <span class="eq-lado"><span class="lado-sinal ${letra.toLowerCase()}">${letra}</span>
        <span class="eq-trilho"><span style="width:${x.total ? Math.round((x.lidos / x.total) * 100) : 0}%"></span></span>
        <span class="mono">${x.lidos}/${x.total}</span></span>`;
    return `<ul class="lista-equilibrio">${linhas.map(({ t, a, b }) => {
      const falta = a.lidos && !b.lidos ? "B" : b.lidos && !a.lidos ? "A" : "";
      const rot = falta && t.rotulos ? t.rotulos[falta === "A" ? "favoravel" : "contrario"] : "";
      return `<li>
        <a class="eq-nome" href="#${t.id}">${esc(t.titulo)}</a>
        <div class="eq-barras">${barra(a, "A")}${barra(b, "B")}</div>
        ${falta ? `<p class="eq-dica">Você só leu um lado. <a href="#${t.id}">Leia o Lado ${falta}${rot ? ` (${esc(rot)})` : ""}</a>.</p>` : ""}
      </li>`;
    }).join("")}</ul>`;
  }

  function historico() {
    const lista = dados.historico.map((h) => ({ h, t: temas.find((t) => t.id === h.tema && !t.emBreve) })).filter((x) => x.t);
    if (!lista.length) return `<div class="vazio"><p>Os temas que você abrir vão aparecer aqui.</p><a class="botao-texto" href="#">Ver os temas</a></div>`;
    return `<ul class="lista-salvos">${lista.map(({ h, t }) => `
      <li class="item-salvo">
        <span class="lado-sinal vazio-sinal" aria-hidden="true"></span>
        <div class="item-corpo">
          <span class="mono apagado">Aberto em ${dataBR(h.em)}</span>
          <a class="item-titulo" href="#${t.id}">${esc(t.titulo)}</a>
          <span class="item-sub">${esc(t.pergunta)}</span>
        </div>
        <span class="item-acoes">${botoes("t:" + t.id, true)}</span>
      </li>`).join("")}</ul>
      <button type="button" class="botao-texto remover" data-limpar-historico>Limpar histórico</button>`;
  }

  function conteudoAba() {
    if (aba === "equilibrio") return equilibrio();
    if (aba === "historico") return historico();
    const lista = listaDe(aba);
    if (!lista.length) {
      return `<div class="vazio"><p>${aba === "quero"
        ? "Nada guardado ainda. Nos temas, estudos e vídeos, toque em “Ler depois” para guardar aqui."
        : "Nada marcado ainda. Ao abrir o texto original de um estudo ou assistir a um vídeo, ele entra aqui sozinho. Também dá para marcar com “Já li”."}</p><a class="botao-texto" href="#">Ver os temas</a></div>`;
    }
    return `<ul class="lista-salvos">${lista.map(linhaItem).join("")}</ul>`;
  }

  // Formulário de conta: criar, entrar, esqueci a senha e nova senha.
  function formConta() {
    const m = conta.modo;
    // O formulário é redesenhado a cada passo; o que a pessoa digitou fica em conta.campos.
    const campo = (id, rotulo, attrs) => `<label class="campo"><span class="mono apagado">${rotulo}</span><input id="${id}" name="${id}" ${attrs}${conta.campos[id] != null ? ` value="${esc(conta.campos[id])}"` : ""}></label>`;
    const aviso = conta.msg ? `<p class="conta-msg${conta.erro ? " erro" : ""}" role="${conta.erro ? "alert" : "status"}">${esc(conta.msg)}</p>` : "";
    if (m === "confirmar") {
      return `<div class="conta-form">${aviso}<button type="button" class="botao-texto" data-modo="entrar">Já confirmei, quero entrar</button></div>`;
    }
    if (m === "nova-senha") {
      return `<form class="conta-form" id="conta-form" data-acao="nova-senha" novalidate>
        <p class="perfil-nota">Escolha uma senha nova para a sua conta.</p>
        ${campo("senha", "Nova senha", 'type="password" autocomplete="new-password" minlength="6" required')}
        ${aviso}
        <div class="conta-linha"><button class="botao" type="submit"${conta.ocupado ? " disabled" : ""}>Salvar senha</button></div>
      </form>`;
    }
    const abas = `<div class="filtro conta-abas" role="group" aria-label="Conta">
      <button type="button" data-modo="criar" aria-pressed="${m === "criar"}">Criar conta</button>
      <button type="button" data-modo="entrar" aria-pressed="${m === "entrar" || m === "esqueci"}">Já tenho conta</button>
    </div>`;
    if (m === "esqueci") {
      return `${abas}<form class="conta-form" id="conta-form" data-acao="esqueci" novalidate>
        <p class="perfil-nota">Mandamos um link para você criar uma senha nova.</p>
        ${campo("email", "E-mail", 'type="email" autocomplete="email" required')}
        ${aviso}
        <div class="conta-linha"><button class="botao" type="submit"${conta.ocupado ? " disabled" : ""}>Enviar link</button>
        <button type="button" class="botao-texto" data-modo="entrar">Voltar</button></div>
      </form>`;
    }
    const criar = m === "criar";
    return `${abas}<form class="conta-form" id="conta-form" data-acao="${criar ? "criar" : "entrar"}" novalidate>
      ${criar ? campo("nome", "Como quer ser chamado", 'maxlength="40" autocomplete="nickname" required') : ""}
      ${campo("email", "E-mail", 'type="email" autocomplete="email" required')}
      ${campo("senha", criar ? "Crie uma senha (mínimo 6 caracteres)" : "Senha", `type="password" autocomplete="${criar ? "new-password" : "current-password"}" minlength="6" required`)}
      ${aviso}
      <div class="conta-linha"><button class="botao" type="submit"${conta.ocupado ? " disabled" : ""}>${conta.ocupado ? "Um instante…" : criar ? "Criar conta" : "Entrar"}</button>
      ${criar ? "" : '<button type="button" class="botao-texto" data-modo="esqueci">Esqueci a senha</button>'}</div>
      <p class="perfil-nota apagado">${criar
        ? "O e-mail serve só para entrar. O que você salvar fica na sua conta e aparece em qualquer aparelho."
        : "Ao entrar, o que você já salvou neste navegador vai junto para a sua conta."}</p>
    </form>`;
  }

  async function enviarConta(form) {
    const v = (n) => (form.elements[n] ? form.elements[n].value.trim() : "");
    const acao = form.dataset.acao;
    const email = v("email"), senha = form.elements.senha ? form.elements.senha.value : "", nome = v("nome").slice(0, 40);
    const falta = (acao === "criar" && !nome) ? "Diga como quer ser chamado."
      : (acao !== "nova-senha" && !/^\S+@\S+\.\S+$/.test(email)) ? "Digite um e-mail válido."
      : (acao !== "esqueci" && senha.length < 6) ? "A senha precisa ter pelo menos 6 caracteres." : "";
    if (falta) { conta.erro = true; conta.msg = falta; repintarPerfil(); return; }
    conta.ocupado = true; conta.erro = false; conta.msg = "";
    repintarPerfil();
    try {
      if (acao === "criar") {
        const r = await cadastrar(nome, email, senha);
        if (r === "confirmar") { conta.modo = "confirmar"; conta.msg = `Quase lá: enviamos um link para ${email}. Abra o e-mail e toque no link para ativar a conta.`; }
        else avisar(`Conta criada. Bem-vindo, ${nome}!`);
      } else if (acao === "entrar") {
        await entrar(email, senha);
        avisar("Você entrou na sua conta.");
      } else if (acao === "esqueci") {
        await api("/auth/v1/recover?redirect_to=" + encodeURIComponent(siteRetorno + "#perfil"), { metodo: "POST", corpo: { email } });
        conta.msg = `Se existir uma conta com ${email}, o link para trocar a senha chega em instantes.`;
      } else if (acao === "nova-senha") {
        const t = await token();
        await api("/auth/v1/user", { metodo: "PUT", token: t, corpo: { password: senha } });
        conta.modo = "entrar";
        avisar("Senha trocada.");
      }
    } catch (e) {
      conta.erro = true;
      conta.msg = traduzir(e);
    }
    conta.ocupado = false;
    if (!conta.erro) conta.campos.senha = null;
    repintarPerfil();
  }

  function pagina(raiz) {
    raizAtual = raiz;
    const logado = !!sessao;
    const perfil = dados.conta;
    const lidos = listaDe("lido");
    const ladoLido = (l) => lidos.filter((x) => x.info.tipo === "l" && x.info.lado === l).length;
    const mostrarConta = nuvem && (!logado || conta.modo === "nova-senha");
    let cab;
    if (mostrarConta) {
      cab = `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil</span>
          <h1>${conta.modo === "nova-senha" ? "Nova <span class=\"grifo\">senha</span>." : conta.modo === "entrar" || conta.modo === "esqueci" ? "Que bom te <span class=\"grifo\">ver</span>." : "Crie seu <span class=\"grifo\">perfil</span>."}</h1>
          <p>Guarde temas, estudos e vídeos para ler depois e acompanhe o que já leu de cada lado, em qualquer aparelho.</p>
          <div class="perfil-form">${formConta()}</div>
        </header>`;
    } else if (perfil && perfil.nome) {
      cab = `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil · desde ${dataBR(perfil.desde)}${logado && sessao.user.email ? " · " + esc(sessao.user.email) : ""}</span>
          <h1>Oi, <span class="grifo">${esc(perfil.nome)}</span>.</h1>
          <p>O que você guardou para depois, o que já leu e quanto leu de cada lado.</p>
        </header>`;
    } else {
      cab = `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil</span>
          <h1>Crie seu <span class="grifo">perfil</span>.</h1>
          <p>Guarde temas, estudos e vídeos para ler depois e acompanhe o que já leu de cada lado.</p>
          <form class="perfil-form" id="perfil-criar">
            <label for="perfil-nome" class="mono apagado">Como quer ser chamado</label>
            <div class="perfil-form-linha">
              <input id="perfil-nome" name="nome" maxlength="40" autocomplete="nickname" placeholder="Seu nome ou apelido" required>
              <button class="botao" type="submit">Criar perfil</button>
            </div>
            <p class="perfil-nota apagado">O perfil fica salvo neste navegador. Para levar a outro aparelho, use “Exportar” lá embaixo.</p>
          </form>
        </header>`;
    }

    const blocoDados = logado
      ? `<section class="bloco perfil-conta" aria-labelledby="conta-h">
        <div class="bloco-cab"><h2 id="conta-h">Sua conta</h2><span class="mono apagado" id="perfil-sincronia"></span></div>
        <div class="perfil-conta-grade">
          <form class="perfil-form" id="perfil-renomear">
            <label for="perfil-novo-nome" class="mono apagado">Nome no perfil</label>
            <div class="perfil-form-linha">
              <input id="perfil-novo-nome" name="nome" maxlength="40" value="${esc((perfil && perfil.nome) || "")}" required>
              <button class="botao" type="submit">Salvar</button>
            </div>
          </form>
          <div class="perfil-acoes">
            <p class="apagado">Entrou como ${esc(sessao.user.email)}.</p>
            <div class="perfil-botoes">
              <button type="button" class="botao" data-sair>Sair</button>
              <button type="button" class="botao botao-claro" data-exportar>Baixar meus dados</button>
              <button type="button" class="botao-texto remover" data-apagar-conta>Apagar minha conta</button>
            </div>
          </div>
        </div>
      </section>`
      : `<section class="bloco perfil-conta" aria-labelledby="conta-h">
        <div class="bloco-cab"><h2 id="conta-h">Seus dados</h2><span class="mono apagado">${nuvem ? "Sem conta, ficam só neste navegador" : "Ficam só neste navegador"}</span></div>
        <div class="perfil-conta-grade">
          ${perfil && perfil.nome && !nuvem ? `<form class="perfil-form" id="perfil-renomear">
            <label for="perfil-novo-nome" class="mono apagado">Nome no perfil</label>
            <div class="perfil-form-linha">
              <input id="perfil-novo-nome" name="nome" maxlength="40" value="${esc(perfil.nome)}" required>
              <button class="botao" type="submit">Salvar</button>
            </div>
          </form>` : ""}
          <div class="perfil-acoes">
            <p class="apagado">${nuvem ? "Crie uma conta para ver isto em qualquer aparelho, ou exporte o arquivo e importe em outro navegador." : "Para usar em outro aparelho, exporte o arquivo aqui e importe lá."}</p>
            <div class="perfil-botoes">
              <button type="button" class="botao" data-exportar>Exportar</button>
              <label class="botao botao-claro">Importar<input type="file" accept="application/json,.json" data-importar hidden></label>
              <button type="button" class="botao-texto remover" data-apagar>Apagar o que salvei</button>
            </div>
          </div>
        </div>
      </section>`;

    raiz.onclick = null;
    raiz.innerHTML = `
      <nav class="migalha mono"><a href="#">Início</a><span>/</span><span>Perfil</span></nav>
      ${cab}
      <dl class="numeros">
        <div><dt>Para depois</dt><dd>${listaDe("quero").length}</dd></div>
        <div><dt>Já li ou vi</dt><dd>${lidos.length}</dd></div>
        <div><dt>Temas abertos</dt><dd>${dados.historico.filter((h) => temas.some((t) => t.id === h.tema)).length}</dd></div>
        <div><dt>Estudos A · B</dt><dd>${ladoLido("favoravel")} · ${ladoLido("contrario")}</dd></div>
      </dl>
      <section class="bloco perfil-listas">
        <div class="filtro abas" role="tablist" aria-label="Seu perfil">
          ${ABAS.map(([id, nome]) => `<button type="button" role="tab" data-aba="${id}" aria-pressed="${aba === id}" aria-selected="${aba === id}">${nome}</button>`).join("")}
        </div>
        <div id="perfil-aba" role="tabpanel">${conteudoAba()}</div>
      </section>
      ${blocoDados}`;
    pintarSincronia();

    const repintar = () => pagina(raiz);
    raiz.onclick = (e) => {
      const t = e.target.closest("[data-aba]");
      if (t) {
        aba = t.dataset.aba;
        try { localStorage.setItem("perfil-aba", aba); } catch (er) {}
        raiz.querySelectorAll("[data-aba]").forEach((x) => { x.setAttribute("aria-pressed", String(x === t)); x.setAttribute("aria-selected", String(x === t)); });
        document.getElementById("perfil-aba").innerHTML = conteudoAba();
        return;
      }
      const modo = e.target.closest("[data-modo]");
      if (modo) {
        conta.modo = modo.dataset.modo; conta.msg = ""; conta.erro = false; conta.campos.senha = null;
        repintar();
        const primeiro = raiz.querySelector("#conta-form input");
        if (primeiro) primeiro.focus();
        return;
      }
      const r = e.target.closest("[data-remover]");
      if (r) { const k = r.dataset.remover, antes = estadoDe(k); marcar(k, null); repintar(); avisar("Removido do perfil.", () => { marcar(k, antes); repintar(); }); return; }
      if (e.target.closest("[data-salvar]")) { setTimeout(repintar, 0); return; }
      if (e.target.closest("[data-limpar-historico]")) { dados.historico = []; salvar(); repintar(); return; }
      if (e.target.closest("[data-exportar]")) { exportar(); return; }
      if (e.target.closest("[data-sair]")) { sair().then(() => { conta.modo = "entrar"; repintar(); avisar("Você saiu da sua conta."); }); return; }
      if (e.target.closest("[data-apagar-conta]")) {
        if (confirm("Apagar sua conta e tudo o que você salvou? Isso não pode ser desfeito.")) {
          apagarConta().then(() => { conta.modo = "criar"; repintar(); avisar("Conta apagada."); })
            .catch((er) => avisar(traduzir(er)));
        }
        return;
      }
      if (e.target.closest("[data-apagar]")) {
        if (confirm("Apagar tudo o que foi salvo neste navegador?")) { dados = vazio(); salvar(); repintar(); }
      }
    };
    const formConta_ = document.getElementById("conta-form");
    if (formConta_) {
      if (formConta_.elements.nome && !formConta_.elements.nome.value && dados.conta) formConta_.elements.nome.value = dados.conta.nome || "";
      formConta_.addEventListener("input", (e) => { if (e.target.name) conta.campos[e.target.name] = e.target.value; });
      formConta_.addEventListener("submit", (e) => { e.preventDefault(); enviarConta(formConta_); });
    }
    const formNome = document.getElementById("perfil-criar") || document.getElementById("perfil-renomear");
    if (formNome) formNome.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = formNome.nome.value.trim().slice(0, 40);
      if (!nome) return;
      dados.conta = Object.assign({ desde: agora() }, dados.conta, { nome });
      salvar();
      repintar();
      if (sessao) avisar("Nome salvo.");
    });
    const imp = raiz.querySelector("[data-importar]");
    if (imp) imp.addEventListener("change", () => importar(imp.files[0], repintar));
  }

  function exportar() {
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "dois-lados-perfil.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  function importar(arquivo, depois) {
    if (!arquivo) return;
    const leitor = new FileReader();
    leitor.onload = () => {
      try {
        const d = JSON.parse(leitor.result);
        if (!d || typeof d.itens !== "object") throw new Error("formato");
        mesclar(d);
        if (!dados.conta && d.conta && typeof d.conta.nome === "string") dados.conta = { nome: d.conta.nome.slice(0, 40), desde: String(d.conta.desde || agora()) };
        salvar();
        depois();
        avisar("Perfil importado.");
      } catch (e) {
        avisar("Não deu para ler esse arquivo. Use o que foi exportado pelo Dois Lados.");
      }
    };
    leitor.readAsText(arquivo);
  }

  window.Perfil = { botoes, pagina, pintarBotoes };
  registrarVisita();
  if (nuvem) {
    if (!sessao && dados.conta && dados.conta.email) conta.modo = "entrar";
    if (retorno) tratarRetorno();
    // Traz o que mudou em outros aparelhos.
    else if (sessao) puxar().then(() => { pintarBotoes(); repintarPerfil(); }).catch(() => {});
  }
})();
