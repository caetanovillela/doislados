/*
  Perfil: o que a pessoa salvou para ler depois e o que já leu.

  Por enquanto tudo fica no próprio navegador (localStorage). O acesso aos dados passa só
  por `armazem.ler()` e `armazem.gravar()`: para contas de verdade, entre aparelhos, basta
  trocar essas duas funções por chamadas a um serviço de login e banco (Supabase, Firebase...).

  Chaves dos itens:
    t:<tema>              tema (dossiê)
    l:<tema>:<leitura>    estudo / leitura
    v:<tema>:<vídeo>      vídeo
*/
(function () {
  const temas = window.TEMAS || [];
  const CHAVE = "dois-lados-perfil";
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const dataBR = (iso) => (iso ? iso.slice(0, 10).split("-").reverse().join("/") : "");

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
  const salvar = () => { armazem.gravar(dados); pintarBotoes(); pintarTopo(); };

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

  function marcar(chave, estado) {
    if (!estado) delete dados.itens[chave];
    else dados.itens[chave] = { estado, em: new Date().toISOString() };
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
    const rot = nome ? `Seu perfil, ${nome}` : "Seu perfil: o que salvou e o que já leu";
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
    el.innerHTML = `<span>${esc(texto)}</span>${desfazer ? '<button type="button" class="botao-texto">Desfazer</button>' : ""}<a class="botao-texto" href="#perfil">Ver perfil</a>`;
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
      dados.historico = [{ tema: id, em: new Date().toISOString() }, ...dados.historico.filter((h) => h.tema !== id)].slice(0, 30);
      armazem.gravar(dados);
    }
    pintarTopo();
  }
  window.addEventListener("hashchange", registrarVisita);
  window.addEventListener("storage", (e) => { if (e.key === CHAVE) { dados = armazem.ler(); pintarBotoes(); pintarTopo(); } });

  /* ---------- Página do perfil ---------- */

  const NOME_TIPO = { t: "Tema", l: "Estudo", v: "Vídeo" };
  const LETRA = { favoravel: "A", contrario: "B" };
  const ABAS = [["quero", "Para depois"], ["lido", "Já li"], ["equilibrio", "Seu equilíbrio"], ["historico", "Histórico"]];
  let aba = "quero";
  try { aba = localStorage.getItem("perfil-aba") || "quero"; } catch (e) {}

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
      const conta = (pos) => {
        const todos = (t.leituras || []).filter((a) => a.posicao === pos);
        return { lidos: todos.filter((a) => estadoDe(`l:${t.id}:${a.id}`) === "lido").length, total: todos.length };
      };
      return { t, a: conta("favoravel"), b: conta("contrario") };
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
      const rot = (pos) => (t.rotulos && t.rotulos[pos]) || "";
      return `<li>
        <a class="eq-nome" href="#${t.id}">${esc(t.titulo)}</a>
        <div class="eq-barras">${barra(a, "A")}${barra(b, "B")}</div>
        ${falta ? `<p class="eq-dica">Você só leu um lado. <a href="#${t.id}">Leia o Lado ${falta}${rot(falta === "A" ? "favoravel" : "contrario") ? ` (${esc(rot(falta === "A" ? "favoravel" : "contrario"))})` : ""}</a>.</p>` : ""}
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

  function pagina(raiz) {
    const conta = dados.conta;
    const lidos = listaDe("lido");
    const ladoLido = (l) => lidos.filter((x) => x.info.tipo === "l" && x.info.lado === l).length;
    const cab = conta
      ? `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil · desde ${dataBR(conta.desde)}</span>
          <h1>Oi, <span class="grifo">${esc(conta.nome)}</span>.</h1>
          <p>O que você guardou para depois, o que já leu e quanto leu de cada lado.</p>
        </header>`
      : `<header class="dossie perfil-cab">
          <span class="mono apagado">Perfil</span>
          <h1>Crie seu <span class="grifo">perfil</span>.</h1>
          <p>Guarde temas, estudos e vídeos para ler depois e acompanhe o que já leu de cada lado.</p>
          <form class="perfil-form" id="perfil-criar">
            <label for="perfil-nome" class="mono apagado">Como quer ser chamado</label>
            <div class="perfil-form-linha">
              <input id="perfil-nome" name="nome" maxlength="40" autocomplete="nickname" placeholder="Seu nome ou apelido" required>
              <button class="botao" type="submit">Criar perfil</button>
            </div>
            <p class="perfil-nota apagado">Sem e-mail e sem senha: o perfil fica salvo neste navegador. Para levar a outro aparelho, use “Exportar” lá embaixo.</p>
          </form>
        </header>`;

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
      <section class="bloco perfil-conta" aria-labelledby="conta-h">
        <div class="bloco-cab"><h2 id="conta-h">Seus dados</h2><span class="mono apagado">Ficam só neste navegador</span></div>
        <div class="perfil-conta-grade">
          ${conta ? `<form class="perfil-form" id="perfil-renomear">
            <label for="perfil-novo-nome" class="mono apagado">Nome no perfil</label>
            <div class="perfil-form-linha">
              <input id="perfil-novo-nome" name="nome" maxlength="40" value="${esc(conta.nome)}" required>
              <button class="botao" type="submit">Salvar</button>
            </div>
          </form>` : ""}
          <div class="perfil-acoes">
            <p class="apagado">Para usar em outro aparelho, exporte o arquivo aqui e importe lá.</p>
            <div class="perfil-botoes">
              <button type="button" class="botao" data-exportar>Exportar</button>
              <label class="botao botao-claro">Importar<input type="file" accept="application/json,.json" data-importar hidden></label>
              <button type="button" class="botao-texto remover" data-apagar>Apagar perfil</button>
            </div>
          </div>
        </div>
      </section>`;

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
      const r = e.target.closest("[data-remover]");
      if (r) { const k = r.dataset.remover, antes = estadoDe(k); marcar(k, null); repintar(); avisar("Removido do perfil.", () => { marcar(k, antes); repintar(); }); return; }
      if (e.target.closest("[data-salvar]")) { setTimeout(repintar, 0); return; }
      if (e.target.closest("[data-limpar-historico]")) { dados.historico = []; salvar(); repintar(); return; }
      if (e.target.closest("[data-exportar]")) { exportar(); return; }
      if (e.target.closest("[data-apagar]")) {
        if (confirm("Apagar o perfil e tudo o que foi salvo neste navegador?")) { dados = vazio(); salvar(); repintar(); }
      }
    };
    const criar = document.getElementById("perfil-criar") || document.getElementById("perfil-renomear");
    if (criar) criar.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = criar.nome.value.trim().slice(0, 40);
      if (!nome) return;
      dados.conta = Object.assign({ desde: new Date().toISOString() }, dados.conta, { nome });
      salvar();
      repintar();
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

  // Junta o arquivo importado ao que já existe; em caso de conflito, vale a marcação mais recente.
  function importar(arquivo, depois) {
    if (!arquivo) return;
    const leitor = new FileReader();
    leitor.onload = () => {
      try {
        const d = JSON.parse(leitor.result);
        if (!d || typeof d.itens !== "object") throw new Error("formato");
        for (const [k, v] of Object.entries(d.itens)) {
          if (!/^[tlv]:/.test(k) || !v || !["quero", "lido"].includes(v.estado)) continue;
          const atual = dados.itens[k];
          if (!atual || (v.em || "") > (atual.em || "")) dados.itens[k] = { estado: v.estado, em: String(v.em || "") };
        }
        if (Array.isArray(d.historico)) {
          const todos = [...d.historico, ...dados.historico].filter((h) => h && typeof h.tema === "string");
          todos.sort((a, b) => String(b.em || "").localeCompare(String(a.em || "")));
          dados.historico = todos.filter((h, i) => todos.findIndex((x) => x.tema === h.tema) === i).slice(0, 30);
        }
        if (!dados.conta && d.conta && typeof d.conta.nome === "string") dados.conta = { nome: d.conta.nome.slice(0, 40), desde: String(d.conta.desde || new Date().toISOString()) };
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
})();
