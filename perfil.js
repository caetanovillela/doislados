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

  /* ---------- Campos do perfil ---------- */

  // Só aceita valores destas listas; o banco tem as mesmas regras (supabase/perfis.sql).
  const NIVEIS = [
    ["medio", "Ensino médio"], ["cursinho", "Cursinho ou pré-vestibular"], ["graduacao", "Graduação"],
    ["pos", "Pós-graduação"], ["formado", "Já me formei"], ["nao-estuda", "Não estou estudando"],
  ];
  const UFS = "AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO".split(" ");
  const INSTITUICOES = ["UFJF", "USP", "Unicamp", "Unesp", "UFRJ", "UFF", "UERJ", "UFMG", "UnB", "UFBA", "UFPE", "UFC", "UFRGS", "UFSC", "UFPR", "UFG", "UFPA", "UFAM", "PUC-Rio", "PUC-SP", "PUC Minas", "FGV", "Insper", "Mackenzie", "Ibmec", "IFSP", "Colégio Pedro II", "Escola estadual", "Escola particular"];
  const categoriasSite = () => (window.CATEGORIAS || []).filter((c) => temas.some((t) => t.categoria === c.id));
  const limpo = (v, max) => String(v ?? "").replace(/[\u0000-\u001f\u007f<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max);

  // Devolve só campos conhecidos e válidos, venham do formulário, do arquivo importado ou da conta.
  function perfilSeguro(p) {
    p = p && typeof p === "object" ? p : {};
    const ids = (window.CATEGORIAS || []).map((c) => c.id);
    return {
      nome: limpo(p.nome, 40),
      instituicao: limpo(p.instituicao, 80),
      nivel: NIVEIS.some(([id]) => id === p.nivel) ? p.nivel : "",
      uf: UFS.includes(p.uf) ? p.uf : "",
      interesses: Array.isArray(p.interesses) ? [...new Set(p.interesses.filter((x) => ids.includes(x)))].slice(0, 20) : [],
    };
  }

  /* ---------- Ícones de perfil (desenhados para o site) ---------- */

  // Cada ícone brinca com a ideia de dois lados. Cores pelo tema: av-t (tinta), av-g (lilás), av-p (papel).
  const AVATARES = [
    ["metade", "Metade e metade", '<rect class="av-p" width="48" height="48"/><path class="av-t" d="M24 9a15 15 0 0 0 0 30z"/><path class="av-g" d="M24 9a15 15 0 0 1 0 30z"/>'],
    ["diagonal", "Diagonal", '<rect class="av-t" width="48" height="48"/><path class="av-g" d="M48 0v48H0z"/>'],
    ["eclipse", "Eclipse", '<rect class="av-g" width="48" height="48"/><circle class="av-t" cx="19" cy="24" r="11"/><circle class="av-ts" cx="29" cy="24" r="11" fill="none" stroke-width="3"/>'],
    ["balanca", "Balança", '<rect class="av-p" width="48" height="48"/><path class="av-ts" fill="none" stroke-width="3" d="M24 11v25M11 16h26M16 37h16"/><path class="av-ts" fill="none" stroke-width="1.6" d="M11 16 6 27M11 16l5 11M37 16l-5 11M37 16l5 11"/><path class="av-t" d="M5 27h12a6 6 0 0 1-12 0z"/><path class="av-g" d="M31 27h12a6 6 0 0 1-12 0z"/>'],
    ["baloes", "Conversa", '<rect class="av-p" width="48" height="48"/><path class="av-t" d="M6 9h21v15H15l-6 6v-6H6z"/><path class="av-g" d="M42 21H21v15h12l6 6v-6h3z"/>'],
    ["livro", "Livro aberto", '<rect class="av-p" width="48" height="48"/><path class="av-t" d="M24 15c-4-3-10-4-17-3v24c7-1 13 0 17 3z"/><path class="av-g" d="M24 15c4-3 10-4 17-3v24c-7-1-13 0-17 3z"/>'],
    ["aspas", "Aspas", '<rect class="av-g" width="48" height="48"/><path class="av-t" d="M9 33V23c0-7 4-11 10-12l1.5 3.5C17 15.5 15.5 18 15.5 21H20v12zM27 33V23c0-7 4-11 10-12l1.5 3.5C35 15.5 33.5 18 33.5 21H38v12z"/>'],
    ["setas", "Ida e volta", '<rect class="av-g" width="48" height="48"/><path class="av-ts" fill="none" stroke-width="3.5" stroke-linecap="square" d="M9 18h28m-7-7 7 7-7 7M39 31H11m7-7-7 7 7 7"/>'],
    ["lupa", "Lupa", '<rect class="av-p" width="48" height="48"/><circle class="av-g" cx="21" cy="21" r="10"/><circle class="av-ts" cx="21" cy="21" r="10" fill="none" stroke-width="3.5"/><path class="av-ts" stroke-width="5.5" d="M28.5 28.5l10 10"/>'],
    ["listras", "Listras", '<rect class="av-t" width="48" height="48"/><path class="av-gs" stroke-width="5" d="M-4 20 20-4M-4 36 36-4M4 52 52 4M20 52 52 20M36 52 52 36"/>'],
    ["pontos", "Pontos", '<rect class="av-p" width="48" height="48"/>' + [9, 19, 29, 39].map((y) => [9, 19, 29, 39].map((x) => `<circle class="${x < 24 ? "av-t" : "av-g"}" cx="${x}" cy="${y}" r="4"/>`).join("")).join("")],
    ["ab", "A e B", '<rect class="av-t" width="24" height="48"/><rect class="av-g" x="24" width="24" height="48"/><path class="av-p" fill-rule="evenodd" d="M5.5 34 10.6 14h3.8l5.1 20h-3.6l-1.1-4.6H10.2L9.1 34zm5.4-7.8h3.2L12.5 19z"/><path class="av-t" fill-rule="evenodd" d="M29 14h7.2c3.3 0 5.3 1.8 5.3 4.7 0 1.9-1 3.3-2.6 3.9 2 .5 3.3 2.1 3.3 4.4 0 3.2-2.3 5-5.8 5H29zm3.5 3v5.3h3.3c1.6 0 2.5-1 2.5-2.7 0-1.6-.9-2.6-2.5-2.6zm0 8.2V31h3.7c1.8 0 2.8-1.1 2.8-2.9s-1-2.9-2.8-2.9z"/>'],
  ];
  const svgAvatar = (id) => {
    const a = AVATARES.find((x) => x[0] === id) || AVATARES[0];
    return `<svg viewBox="0 0 48 48" aria-hidden="true" class="avatar-svg">${a[2]}</svg>`;
  };
  // Ícone padrão: escolhido pelo nome, para cada pessoa já começar com um diferente.
  const avatarPadrao = (semente) => AVATARES[[...String(semente || "")].reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 7) % AVATARES.length][0];

  // Preferências do site; o padrão é tudo ligado e o tema claro.
  const PREFS_PADRAO = { autoLido: true, paraVoce: true, historico: true, tema: "light" };
  const prefs = () => Object.assign({}, PREFS_PADRAO, (dados.conta && dados.conta.prefs) || {});

  // Aparência e preferências, também só com valores conhecidos.
  function extrasSeguros(c) {
    c = c && typeof c === "object" ? c : {};
    const p = c.prefs && typeof c.prefs === "object" ? c.prefs : {};
    const prefsOk = {};
    for (const k of ["autoLido", "paraVoce", "historico"]) if (typeof p[k] === "boolean") prefsOk[k] = p[k];
    if (p.tema === "light" || p.tema === "dark") prefsOk.tema = p.tema;
    return {
      avatar: AVATARES.some((a) => a[0] === c.avatar) ? c.avatar : "",
      foto: typeof c.foto === "string" && /^\d{4}-\d\d-\d\dT[\d:.]+Z$/.test(c.foto) ? c.foto : "",
      prefs: prefsOk,
    };
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
    [/password.*(short|weak|characters)|weak_password/i, "Senha fraca: use pelo menos 8 caracteres, com letras e números."],
    [/pwned|leaked|compromised/i, "Essa senha já apareceu em vazamentos na internet. Escolha outra."],
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
    const filtro = `&id=eq.${encodeURIComponent(sessao.user.id)}`;
    // Se o banco ainda não tem as colunas do perfil completo, lê só o básico (os campos também vão dentro de `dados`).
    const linhas = await api("/rest/v1/perfis?select=nome,instituicao,nivel,uf,interesses,dados" + filtro, { token: t })
      .catch((e) => { if (e.status === 400) return api("/rest/v1/perfis?select=nome,dados" + filtro, { token: t }); throw e; });
    const remoto = Array.isArray(linhas) ? linhas[0] : null;
    if (remoto) mesclar(remoto.dados);
    const antes = (remoto && remoto.dados && remoto.dados.conta) || dados.conta || {};
    const cheio = (v) => (Array.isArray(v) ? v.length : !!v);
    const colunas = {};
    for (const k of ["nome", "instituicao", "nivel", "uf", "interesses"]) if (remoto && cheio(remoto[k])) colunas[k] = remoto[k];
    const campos = perfilSeguro(Object.assign({}, antes, colunas));
    dados.conta = Object.assign(campos, {
      nome: campos.nome || limpo(sessao.user.nome, 40) || String(sessao.user.email || "").split("@")[0].slice(0, 40),
      desde: antes.desde || agora(),
      aceite: antes.aceite || (dados.conta && dados.conta.aceite) || "",
      pulou: !!(antes.pulou || (dados.conta && dados.conta.pulou)),
    }, extrasSeguros(remoto && remoto.dados && remoto.dados.conta ? antes : Object.assign({}, dados.conta, antes)));
    armazem.gravar(dados);
    aplicarTema();
    pintarBotoes();
    pintarTopo();
    await enviar();
    if (dados.conta.foto && fotoCache().v !== dados.conta.foto) baixarFoto().catch(() => {});
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
      const gravar = (corpo) => api("/rest/v1/perfis?on_conflict=id", {
        metodo: "POST", token: t, prefer: "resolution=merge-duplicates,return=minimal", corpo,
      });
      const p = perfilSeguro(dados.conta);
      const basico = { id: sessao.user.id, nome: p.nome, dados: paraEnvio(), atualizado_em: agora() };
      await gravar(Object.assign({}, basico, p)).catch((e) => {
        if (e.status === 400 && /column|PGRST204/i.test(e.message + e.codigo)) return gravar(basico);
        throw e;
      });
      conta.sincronia = "ok";
    } catch (e) {
      conta.sincronia = "erro";
    }
    pintarSincronia();
  }

  // O que vai para o banco: só o necessário (o e-mail já fica no login, não se repete aqui).
  function paraEnvio() {
    const c = dados.conta || {};
    return { versao: 1, conta: Object.assign(perfilSeguro(c), extrasSeguros(c), { desde: c.desde || "", aceite: c.aceite || "", pulou: !!c.pulou }), itens: dados.itens, historico: dados.historico };
  }

  function pintarSincronia() {
    const el = document.getElementById("perfil-sincronia");
    if (!el) return;
    el.textContent = { ok: "Salvo na sua conta", salvando: "Salvando…", erro: "Sem conexão: fica salvo aqui e sobe depois" }[conta.sincronia] || "Guardado na sua conta";
  }

  async function cadastrar(nome, email, senha) {
    const j = await api("/auth/v1/signup?redirect_to=" + encodeURIComponent(siteRetorno), {
      metodo: "POST", corpo: { email, password: senha, data: { nome } },
    });
    dados.conta = Object.assign({ desde: agora() }, dados.conta, { nome, aceite: agora() });
    conta.completar = true;
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
    // Quem sai não deixa o que salvou (nem a foto) à vista de quem usar o aparelho depois.
    try { localStorage.removeItem(CHAVE_FOTO); } catch (e) {}
    dados = vazio();
    armazem.gravar(dados);
    conta.sincronia = "";
    pintarBotoes();
    pintarTopo();
  }

  async function apagarConta() {
    const t = await token();
    if (!t) throw new Error("rede");
    // A foto fica no armazenamento de arquivos, que não é apagado junto com o login: sai primeiro.
    await arquivo("DELETE", t).catch(() => {});
    await api("/rest/v1/rpc/apagar_conta", { metodo: "POST", token: t, corpo: {} });
    await sair(true);
  }

  /* ---------- Foto de perfil ---------- */

  // A foto fica num balde privado do Supabase, em <id da pessoa>/avatar.jpg: só a dona consegue ler ou trocar.
  const CHAVE_FOTO = "dois-lados-foto";
  const caminhoFoto = () => `/storage/v1/object/avatares/${encodeURIComponent(sessao.user.id)}/avatar.jpg`;
  async function arquivo(metodo, t, corpo) {
    let r;
    try {
      r = await fetch(base + (metodo === "GET" ? caminhoFoto().replace("/object/", "/object/authenticated/") : caminhoFoto()), {
        method: metodo,
        headers: Object.assign({ apikey: SB.chave, Authorization: "Bearer " + t }, corpo ? { "Content-Type": "image/jpeg", "x-upsert": "true" } : {}),
        body: corpo,
      });
    } catch (e) { throw new Error("rede"); }
    if (!r.ok) {
      const texto = await r.text().catch(() => "");
      const err = new Error(/bucket not found/i.test(texto) ? "sem-balde" : texto || "HTTP " + r.status);
      err.status = r.status;
      throw err;
    }
    return r;
  }
  function fotoCache() {
    try {
      const f = JSON.parse(localStorage.getItem(CHAVE_FOTO) || "null");
      if (f && sessao && f.uid === sessao.user.id && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(f.url)) return f;
    } catch (e) {}
    return {};
  }
  function guardarFotoCache(v, url) {
    try { localStorage.setItem(CHAVE_FOTO, JSON.stringify({ uid: sessao.user.id, v, url })); } catch (e) {}
  }
  const paraDataUrl = (blob) => new Promise((ok, falha) => {
    const r = new FileReader();
    r.onload = () => ok(r.result);
    r.onerror = falha;
    r.readAsDataURL(blob);
  });
  async function baixarFoto() {
    const t = await token();
    if (!t || !dados.conta.foto) return;
    const r = await arquivo("GET", t);
    // Força o tipo: o que vier do servidor só é usado como imagem JPEG.
    const url = await paraDataUrl(new Blob([await r.arrayBuffer()], { type: "image/jpeg" }));
    guardarFotoCache(dados.conta.foto, url);
    pintarTopo();
    repintarPerfil();
  }

  // Recorta no centro, reduz para 320×320 e salva de novo como JPEG. Isso descarta os dados escondidos
  // da foto original (localização GPS, modelo do celular, data) e qualquer coisa que não seja a imagem.
  async function prepararFoto(arq) {
    if (!arq || !/^image\/(jpeg|png|webp)$/.test(arq.type)) throw new Error("Use uma foto JPG, PNG ou WebP.");
    if (arq.size > 15 * 1024 * 1024) throw new Error("Essa foto é grande demais. Use uma de até 15 MB.");
    let img;
    try { img = await createImageBitmap(arq, { imageOrientation: "from-image" }); }
    catch (e) { try { img = await createImageBitmap(arq); } catch (er) { throw new Error("Não deu para abrir essa imagem."); } }
    const lado = Math.min(img.width, img.height);
    const tela = document.createElement("canvas");
    tela.width = tela.height = 320;
    const ctx = tela.getContext("2d");
    ctx.drawImage(img, (img.width - lado) / 2, (img.height - lado) / 2, lado, lado, 0, 0, 320, 320);
    if (img.close) img.close();
    const gerar = (q) => new Promise((ok) => tela.toBlob(ok, "image/jpeg", q));
    let blob = await gerar(0.85);
    if (blob && blob.size > 280000) blob = await gerar(0.7);
    if (!blob) throw new Error("Não deu para preparar essa imagem.");
    return { blob, url: tela.toDataURL("image/jpeg", 0.85) };
  }

  async function enviarFoto(arq) {
    const t = await token();
    if (!t) throw new Error("Entre na sua conta para enviar uma foto.");
    const { blob, url } = await prepararFoto(arq);
    try { await arquivo("POST", t, blob); }
    catch (e) { throw new Error(e.message === "sem-balde" ? "O envio de fotos ainda não foi liberado no servidor." : e.message === "rede" ? "Não deu para falar com o servidor." : "Não deu para enviar a foto. Tente outra."); }
    dados.conta.foto = agora();
    dados.conta.avatar = "";
    guardarFotoCache(dados.conta.foto, url);
    salvar();
  }

  async function removerFoto() {
    const t = await token();
    if (t) await arquivo("DELETE", t).catch(() => {});
    dados.conta.foto = "";
    try { localStorage.removeItem(CHAVE_FOTO); } catch (e) {}
    salvar();
  }

  // Imagem de perfil pronta para o HTML: foto (se houver) ou ícone.
  function avatarHTML(c) {
    c = c || dados.conta || {};
    const foto = sessao && c.foto ? fotoCache() : {};
    if (foto.url && foto.v === c.foto) return `<img class="avatar-foto" src="${esc(foto.url)}" alt="">`;
    return svgAvatar(c.avatar || avatarPadrao((sessao && sessao.user.id) || c.nome));
  }

  /* ---------- Tema (preferência que acompanha a conta) ---------- */

  const raizHtml = document.documentElement;
  function aplicarTema() {
    const t = sessao && dados.conta && dados.conta.prefs && dados.conta.prefs.tema;
    if (t && raizHtml.dataset.theme !== t) {
      raizHtml.dataset.theme = t;
      try { localStorage.setItem("tema", t); } catch (e) {}
    }
  }
  // O botão de lua/sol do topo também vale como preferência da conta.
  new MutationObserver(() => {
    if (!sessao || !dados.conta) return;
    const t = raizHtml.dataset.theme === "dark" ? "dark" : "light";
    if (prefs().tema !== t) { dados.conta.prefs = Object.assign({}, dados.conta.prefs, { tema: t }); salvar(); }
  }).observe(raizHtml, { attributes: true, attributeFilter: ["data-theme"] });

  // Links dos e-mails do Supabase voltam com o resultado no endereço (#access_token=... ou #error=...).
  // Isso é lido antes do app.js montar a página, e o endereço vira #perfil.
  let retorno = null;
  if (nuvem) {
    const h = location.hash, i = h.search(/(access_token|error|error_code)=/);
    const q = new URLSearchParams(location.search);
    if (i >= 0) retorno = Object.fromEntries(new URLSearchParams(h.slice(i)).entries());
    else if (q.get("error")) retorno = { error: q.get("error"), error_code: q.get("error_code") || "", error_description: q.get("error_description") || "" };
    // Tira o token do endereço na hora, para ele não ficar no histórico nem ir junto se a pessoa copiar o link.
    if (retorno) { try { history.replaceState(null, "", location.pathname + "#perfil"); } catch (e) { location.hash = "perfil"; } }
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
      conta.msg = "";
      if (retorno.type === "recovery") conta.modo = "nova-senha";
      else if (retorno.type === "signup") { conta.completar = true; avisar("E-mail confirmado. Sua conta está ativa."); }
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

  // Ícone do topo: a foto ou o ícone escolhido, quando a pessoa tem perfil.
  const ICONE_PESSOA = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  function pintarTopo() {
    const a = document.getElementById("perfil-botao");
    if (!a) return;
    const nome = dados.conta && dados.conta.nome;
    a.classList.toggle("com-nome", !!nome);
    a.innerHTML = nome ? `<span class="avatar">${avatarHTML()}</span>` : ICONE_PESSOA;
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
    if (cartao && link && cartao.contains(link) && prefs().autoLido) {
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
    if (prefs().historico && temas.some((t) => t.id === id && !t.emBreve)) {
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
        ${campo("senha", "Nova senha (mínimo 8 caracteres, com letras e números)", 'type="password" autocomplete="new-password" minlength="8" required')}
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
      ${campo("senha", criar ? "Crie uma senha (mínimo 8 caracteres, com letras e números)" : "Senha", `type="password" autocomplete="${criar ? "new-password" : "current-password"}" minlength="${criar ? 8 : 6}" required`)}
      ${criar ? `<label class="aceite"><input type="checkbox" name="aceite"${conta.campos.aceite ? " checked" : ""}> <span>Li e aceito a <a href="#privacidade" target="_blank" rel="noopener">política de privacidade</a>.</span></label>` : ""}
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
    const novaSenha = acao === "criar" || acao === "nova-senha";
    const falta = (acao === "criar" && !limpo(nome, 40)) ? "Diga como quer ser chamado."
      : (acao !== "nova-senha" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? "Digite um e-mail válido."
      : (acao === "entrar" && !senha) ? "Digite sua senha."
      : (novaSenha && (senha.length < 8 || !/[A-Za-zÀ-ÿ]/.test(senha) || !/\d/.test(senha))) ? "A senha precisa ter pelo menos 8 caracteres, com letras e números."
      : (novaSenha && senha.length > 72) ? "Use uma senha de até 72 caracteres."
      : (acao === "criar" && !form.elements.aceite.checked) ? "Para criar a conta, aceite a política de privacidade." : "";
    if (falta) { conta.erro = true; conta.msg = falta; repintarPerfil(); return; }
    conta.ocupado = true; conta.erro = false; conta.msg = "";
    repintarPerfil();
    try {
      if (acao === "criar") {
        const r = await cadastrar(limpo(nome, 40), email, senha);
        if (r === "confirmar") { conta.modo = "confirmar"; conta.msg = `Quase lá: enviamos um link para ${email}. Abra o e-mail e toque no link para ativar a conta.`; }
        else avisar(`Conta criada. Bem-vindo, ${nome}!`);
      } else if (acao === "entrar") {
        await entrar(email, senha);
        avisar("Você entrou na sua conta.");
      } else if (acao === "esqueci") {
        await api("/auth/v1/recover?redirect_to=" + encodeURIComponent(siteRetorno), { metodo: "POST", corpo: { email } });
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
    const completar = logado && perfil && (conta.completar || (!(perfil.interesses || []).length && !perfil.pulou));
    let cab;
    if (mostrarConta) {
      cab = `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil</span>
          <h1>${conta.modo === "nova-senha" ? "Nova <span class=\"grifo\">senha</span>." : conta.modo === "entrar" || conta.modo === "esqueci" ? "Que bom te <span class=\"grifo\">ver</span>." : "Crie seu <span class=\"grifo\">perfil</span>."}</h1>
          <p>Guarde temas, estudos e vídeos para ler depois e acompanhe o que já leu de cada lado, em qualquer aparelho.</p>
          <div class="perfil-form">${formConta()}</div>
        </header>`;
    } else if (perfil && perfil.nome) {
      const resumo = [nomeNivel(perfil.nivel), perfil.instituicao, perfil.uf].filter(Boolean).map(esc).join(" · ");
      const ints = (perfil.interesses || []).map(nomeCategoria).filter(Boolean);
      cab = `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil · desde ${dataBR(perfil.desde)}</span>
          <div class="perfil-titulo"><span class="avatar avatar-grande">${avatarHTML(perfil)}</span><h1>Oi, <span class="grifo">${esc(perfil.nome)}</span>.</h1></div>
          ${resumo ? `<p class="perfil-resumo">${resumo}</p>` : ""}
          ${ints.length ? `<ul class="chips" aria-label="Seus interesses">${ints.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
          <p>O que você guardou para depois, o que já leu e quanto leu de cada lado.</p>
        </header>
        ${completar ? `
        <section class="completar" aria-labelledby="completar-h">
          <h2 id="completar-h">Complete seu perfil</h2>
          <p>Conte onde você estuda e o que mais te interessa. Assim o Dois Lados mostra primeiro os temas da sua área. Tudo é opcional.</p>
          ${formPerfil(perfil, "completar")}
        </section>` : ""}`;
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
        <div class="bloco-cab"><h2 id="conta-h">Seu perfil</h2><span class="mono apagado" id="perfil-sincronia"></span></div>
        <div class="perfil-conta-grade">
          <div class="perfil-coluna">
            ${blocoAparencia(perfil || {})}
            ${completar ? `<p class="apagado">Preencha seu perfil no quadro lá em cima.</p>` : formPerfil(perfil || {}, "editar")}
          </div>
          <div class="perfil-coluna">
          ${blocoPreferencias()}
          <div class="perfil-acoes">
            <h3 class="mono apagado">Conta</h3>
            <p class="apagado">Entrou como ${esc(sessao.user.email)}. Só você vê o seu perfil. <a href="#privacidade">Como cuidamos dos seus dados</a>.</p>
            <div class="perfil-botoes">
              <button type="button" class="botao" data-sair>Sair</button>
              <button type="button" class="botao botao-claro" data-exportar>Baixar meus dados</button>
              <button type="button" class="botao-texto remover" data-apagar-conta>Apagar minha conta</button>
            </div>
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
      formConta_.addEventListener("input", (e) => { if (e.target.name) conta.campos[e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value; });
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
    raiz.querySelectorAll("[data-form-perfil]").forEach((f) => f.addEventListener("submit", (e) => {
      e.preventDefault();
      const novo = perfilSeguro({
        nome: f.elements.nome.value, instituicao: f.elements.instituicao.value, nivel: f.elements.nivel.value, uf: f.elements.uf.value,
        interesses: [...f.querySelectorAll("input[name=interesses]:checked")].map((x) => x.value),
      });
      if (!novo.nome) { avisar("Diga como quer ser chamado."); return; }
      dados.conta = Object.assign({ desde: agora() }, dados.conta, novo);
      conta.completar = false;
      salvar();
      repintar();
      avisar("Perfil salvo.");
    }));
    raiz.querySelectorAll("[data-avatar]").forEach((b) => b.addEventListener("click", async () => {
      if (dados.conta.foto && !confirm("Usar este ícone no lugar da sua foto? A foto será apagada.")) return;
      if (dados.conta.foto) await removerFoto();
      dados.conta.avatar = b.dataset.avatar;
      salvar();
      repintar();
      avisar("Ícone trocado.");
    }));
    const foto = raiz.querySelector("[data-foto]");
    if (foto) foto.addEventListener("change", async () => {
      const arq = foto.files[0];
      foto.value = "";
      if (!arq) return;
      avisar("Enviando a foto…");
      try { await enviarFoto(arq); repintar(); avisar("Foto atualizada."); }
      catch (e) { avisar(e.message); }
    });
    const tirar = raiz.querySelector("[data-remover-foto]");
    if (tirar) tirar.addEventListener("click", async () => { await removerFoto(); repintar(); avisar("Foto removida."); });
    raiz.querySelectorAll("[data-pref]").forEach((x) => x.addEventListener("change", () => {
      const k = x.dataset.pref;
      const valor = k === "tema" ? (x.checked ? "dark" : "light") : x.checked;
      dados.conta.prefs = Object.assign({}, dados.conta.prefs, { [k]: valor });
      if (k === "historico" && !valor) dados.historico = [];
      if (k === "tema") aplicarTema();
      salvar();
      avisar(k === "historico" && !valor ? "Histórico desligado e apagado." : "Preferência salva.");
    }));
    const pular = raiz.querySelector("[data-pular]");
    if (pular) pular.addEventListener("click", () => { conta.completar = false; dados.conta.pulou = true; salvar(); repintar(); });
    const imp = raiz.querySelector("[data-importar]");
    if (imp) imp.addEventListener("change", () => importar(imp.files[0], repintar));
  }

  function blocoAparencia(p) {
    const temFoto = !!(p.foto && fotoCache().v === p.foto);
    const atual = temFoto ? "" : p.avatar || avatarPadrao((sessao && sessao.user.id) || p.nome);
    return `<div class="aparencia">
      <h3 class="mono apagado">Sua imagem</h3>
      <div class="aparencia-atual">
        <span class="avatar avatar-grande">${avatarHTML(p)}</span>
        <div class="aparencia-acoes">
          ${sessao ? `<label class="botao botao-claro">${temFoto ? "Trocar foto" : "Enviar foto"}<input type="file" accept="image/jpeg,image/png,image/webp" data-foto hidden></label>` : ""}
          ${temFoto ? '<button type="button" class="botao-texto remover" data-remover-foto>Remover foto</button>' : ""}
          <p class="perfil-nota apagado">${sessao ? "A foto é recortada, reduzida e limpa de dados escondidos (como a localização) antes de sair do seu aparelho. Só você vê." : "Escolha um ícone."}</p>
        </div>
      </div>
      <div class="avatar-grade" role="group" aria-label="Ou escolha um ícone">
        ${AVATARES.map(([id, nome]) => `<button type="button" class="avatar avatar-opcao" data-avatar="${id}" aria-pressed="${id === atual}" title="${esc(nome)}" aria-label="${esc(nome)}">${svgAvatar(id)}</button>`).join("")}
      </div>
    </div>`;
  }

  function blocoPreferencias() {
    const p = prefs();
    const chave = (k, texto, marcado) => `<label class="chave"><input type="checkbox" role="switch" data-pref="${k}"${marcado ? " checked" : ""}><span class="chave-trilho" aria-hidden="true"></span><span>${texto}</span></label>`;
    return `<div class="preferencias">
      <h3 class="mono apagado">Preferências</h3>
      ${chave("autoLido", "Marcar como lido quando eu abrir um estudo ou vídeo", p.autoLido)}
      ${chave("paraVoce", "Mostrar “Para você” na página inicial", p.paraVoce)}
      ${chave("historico", "Guardar os temas que eu abro (histórico)", p.historico)}
      ${chave("tema", "Usar o modo escuro", (raizHtml.dataset.theme || p.tema) === "dark")}
    </div>`;
  }

  const nomeNivel = (id) => (NIVEIS.find(([x]) => x === id) || [])[1] || "";
  const nomeCategoria = (id) => ((window.CATEGORIAS || []).find((c) => c.id === id) || {}).nome || "";

  // Formulário do perfil: nome, onde estuda, nível, estado e áreas de interesse.
  function formPerfil(p, onde) {
    const id = (x) => `${onde}-${x}`;
    const sel = (nome, opcoes, atual, vazio) => `<select id="${id(nome)}" name="${nome}"><option value="">${vazio}</option>${opcoes.map(([v, t]) => `<option value="${esc(v)}"${v === atual ? " selected" : ""}>${esc(t)}</option>`).join("")}</select>`;
    const ints = p.interesses || [];
    return `<form class="perfil-form form-perfil" data-form-perfil novalidate>
      <label class="campo"><span class="mono apagado">Nome no perfil</span><input name="nome" maxlength="40" autocomplete="nickname" required value="${esc(p.nome || "")}"></label>
      <label class="campo"><span class="mono apagado">Onde você estuda ou estudou</span><input name="instituicao" maxlength="80" list="${id("inst")}" autocomplete="organization" placeholder="Ex.: UFJF, Colégio Pedro II" value="${esc(p.instituicao || "")}"></label>
      <datalist id="${id("inst")}">${INSTITUICOES.map((x) => `<option value="${esc(x)}">`).join("")}</datalist>
      <div class="campo-par">
        <label class="campo"><span class="mono apagado">Nível</span>${sel("nivel", NIVEIS, p.nivel, "Prefiro não dizer")}</label>
        <label class="campo"><span class="mono apagado">Estado</span>${sel("uf", UFS.map((u) => [u, u]), p.uf, "—")}</label>
      </div>
      <fieldset class="campo interesses">
        <legend class="mono apagado">Áreas que mais te interessam</legend>
        <div class="chips-escolha">${categoriasSite().map((c) => `<label><input type="checkbox" name="interesses" value="${esc(c.id)}"${ints.includes(c.id) ? " checked" : ""}><span>${esc(c.nome)}</span></label>`).join("")}</div>
      </fieldset>
      <div class="conta-linha"><button class="botao" type="submit">Salvar perfil</button>${onde === "completar" ? '<button type="button" class="botao-texto" data-pular>Agora não</button>' : ""}</div>
    </form>`;
  }

  /* ---------- Política de privacidade ---------- */

  function privacidade(raiz) {
    raiz.onclick = null;
    const secao = (t, corpo) => `<section class="bloco"><div class="bloco-cab"><h2>${t}</h2></div><div class="texto-corrido">${corpo}</div></section>`;
    raiz.innerHTML = `
      <nav class="migalha mono"><a href="#">Início</a><span>/</span><a href="#perfil">Perfil</a><span>/</span><span>Privacidade</span></nav>
      <header class="dossie">
        <span class="mono apagado">Atualizada em 16/10/2026</span>
        <h1>Seus dados, <span class="grifo">só seus</span>.</h1>
        <p>O que o Dois Lados guarda quando você cria uma conta, para quê, e como você controla tudo. Escrito para ser lido, não para esconder nada.</p>
      </header>
      ${secao("O que guardamos", `
        <p><strong>Para a conta:</strong> seu e-mail e sua senha. A senha é guardada pelo Supabase, o serviço de login que usamos, de forma embaralhada (com hash bcrypt). Nem nós conseguimos ver qual é.</p>
        <p><strong>No perfil, se você quiser preencher:</strong> nome ou apelido, onde estuda, nível de estudo, estado e áreas de interesse. Tudo é opcional, menos o nome.</p>
        <p><strong>Foto de perfil, se você enviar:</strong> antes de sair do seu aparelho, a foto é recortada, reduzida e salva de novo, o que apaga os dados escondidos nela (como a localização GPS e o modelo do celular). Ela fica numa área privada: só você consegue abrir. Se preferir, use um dos ícones do site.</p>
        <p><strong>Suas preferências:</strong> como o site se comporta para você (modo escuro, histórico, marcação automática).</p>
        <p><strong>O que você faz no site:</strong> os temas, estudos e vídeos que salvou para depois, os que marcou como lidos e os temas que abriu.</p>
        <p><strong>O que não guardamos:</strong> CPF, telefone, endereço, data de nascimento, localização, contatos ou qualquer dado de cartão. Não há anúncios, nem rastreadores, nem cookies de propaganda.</p>`)}
      ${secao("Para que usamos", `
        <p>Só para fazer o seu perfil funcionar: mostrar o que você salvou em qualquer aparelho e sugerir primeiro os temas das áreas que você escolheu.</p>
        <p>Seus dados não são vendidos, alugados nem compartilhados com ninguém. Ninguém do site lê o que você salvou.</p>`)}
      ${secao("Quem pode ver", `
        <p>Só você. O banco de dados tem uma regra que só entrega um perfil para quem está logado nele (Row Level Security). Mesmo quem souber o endereço do banco não consegue ler o perfil de outra pessoa.</p>
        <p>O tráfego entre o site e o banco é sempre criptografado (HTTPS).</p>`)}
      ${secao("Seus direitos (LGPD)", `
        <p>Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode a qualquer momento:</p>
        <ul>
          <li><strong>ver e baixar</strong> tudo o que está guardado, pelo botão “Baixar meus dados” no seu perfil;</li>
          <li><strong>corrigir</strong> seu perfil, na própria página do perfil;</li>
          <li><strong>apagar sua conta</strong>, pelo botão “Apagar minha conta”. O login, a foto e tudo o que você salvou são apagados na hora, sem volta.</li>
          <li><strong>desligar o histórico</strong> nas preferências do perfil, o que também apaga o que já estava guardado.</li>
        </ul>
        <p>Dúvidas ou pedidos: fale com o responsável pelo projeto em <a href="https://caetanovillela.com.br/" target="_blank" rel="noopener">caetanovillela.com.br</a>.</p>`)}
      ${secao("Cuidados que você pode tomar", `
        <ul>
          <li>Use uma senha que você não usa em nenhum outro site.</li>
          <li>Em computador compartilhado, toque em “Sair” ao terminar. Ao sair, o site apaga do navegador o que estava salvo.</li>
          <li>Nunca pedimos sua senha por e-mail ou mensagem.</li>
        </ul>`)}`;
  }

  // Página inicial: temas das áreas de interesse, primeiro os que a pessoa ainda não leu.
  function paraVoce() {
    const p = dados.conta;
    const ints = (p && p.interesses) || [];
    if (!ints.length || !prefs().paraVoce) return "";
    const lidosDoTema = (t) => (t.leituras || []).filter((a) => estadoDe(`l:${t.id}:${a.id}`) === "lido").length;
    const lista = temas.filter((t) => !t.emBreve && ints.includes(t.categoria))
      .map((t, i) => ({ t, i, lidos: lidosDoTema(t), total: (t.leituras || []).length }))
      .sort((a, b) => (a.lidos >= a.total) - (b.lidos >= b.total) || a.lidos - b.lidos || a.i - b.i)
      .slice(0, 3);
    if (!lista.length) return "";
    return `
      <section class="bloco continue para-voce" aria-labelledby="para-voce-h">
        <div class="bloco-cab"><h2 id="para-voce-h">Para você, ${esc(p.nome)}</h2><span class="mono apagado">Pelos seus interesses: ${ints.map(nomeCategoria).filter(Boolean).map(esc).join(", ")} · <a href="#perfil">mudar</a></span></div>
        <div class="continue-grade">
          ${lista.map(({ t, lidos, total }) => `
          <a class="continue-cartao" href="#${esc(t.id)}">
            ${t.imagem ? `<img src="${esc(t.imagem.arquivo)}" alt="" loading="lazy" decoding="async" style="object-position:${esc(t.imagem.posicao || "50% 50%")}">` : ""}
            <span class="mono apagado">${esc(nomeCategoria(t.categoria))}${lidos ? ` · ${lidos} de ${total} estudos lidos` : ""}</span>
            <strong>${esc(t.titulo)}</strong>
            <span class="perg">${esc(t.pergunta)}</span>
            <span class="mono continue-ir">${lidos ? "Continuar →" : "Abrir dossiê →"}</span>
          </a>`).join("")}
        </div>
      </section>`;
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
        if (!dados.conta && d.conta && typeof d.conta.nome === "string") dados.conta = Object.assign(perfilSeguro(d.conta), { desde: limpo(d.conta.desde, 30) || agora() });
        salvar();
        depois();
        avisar("Perfil importado.");
      } catch (e) {
        avisar("Não deu para ler esse arquivo. Use o que foi exportado pelo Dois Lados.");
      }
    };
    leitor.readAsText(arquivo);
  }

  window.Perfil = { botoes, pagina, pintarBotoes, paraVoce, privacidade };
  aplicarTema();
  registrarVisita();
  if (nuvem) {
    if (!sessao && dados.conta && dados.conta.email) conta.modo = "entrar";
    if (retorno) tratarRetorno();
    // Traz o que mudou em outros aparelhos.
    else if (sessao) puxar().then(() => { pintarBotoes(); repintarPerfil(); }).catch(() => {});
  }
})();
