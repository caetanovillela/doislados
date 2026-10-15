/*
  Navegação pelo endereço (#):
    (vazio)        -> início: busca, categorias e índice de temas
    #escala-6x1    -> dossiê do tema
*/
(function () {
  const temas = window.TEMAS || [];
  const categorias = window.CATEGORIAS || [];
  const raiz = document.getElementById("app");
  const estado = { filtro: "todos", busca: "", categoria: "todas" };

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const normal = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const LETRA = { favoravel: "A", contrario: "B" };
  const numero = (tema) => String(temas.indexOf(tema) + 1).padStart(2, "0");
  const nomeCategoria = (id) => (categorias.find((c) => c.id === id) || {}).nome || "";
  const doLado = (tema, pos) => (tema.leituras || []).filter((a) => a.posicao === pos);
  const rotulo = (tema, pos) => (tema.rotulos && tema.rotulos[pos]) || (pos === "favoravel" ? "A favor" : "Contra");
  const sinal = (pos) => `<span class="lado-sinal ${LETRA[pos].toLowerCase()}" aria-hidden="true">${LETRA[pos]}</span>`;
  const codigo = (tema, a) => LETRA[a.posicao] + (doLado(tema, a.posicao).indexOf(a) + 1);
  const dataBR = (iso) => (iso ? iso.split("-").reverse().join("/") : "");

  /* ---------- Cartão de leitura (link para o texto da instituição) ---------- */

  // Versão enxuta, usada quando os dois lados aparecem juntos.
  function leituraCurta(tema, a) {
    return `
      <article class="leitura curta" id="l-${a.id}">
        <span class="cod">${codigo(tema, a)}</span>
        <div class="curta-corpo">
          <span class="inst">${esc(a.instituicao)}</span>
          <h3><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.titulo)}<span class="seta" aria-hidden="true"> ↗</span></a></h3>
          <span class="mono apagado">${esc(a.tipo)} · ${esc(a.data)}${a.formato === "PDF" ? " · PDF" : ""}</span>
          <button type="button" class="botao-texto detalhes" data-detalhe="${a.posicao}" data-alvo="${a.id}">Ver resumo e números</button>
        </div>
      </article>`;
  }

  function leitura(tema, a) {
    const lista = (xs) => `<ul>${xs.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    return `
      <article class="leitura" id="l-${a.id}">
        <header class="leitura-cab">
          <span class="cod">${codigo(tema, a)}</span>
          <div>
            <span class="inst">${esc(a.instituicao)}</span>
            <span class="mono apagado">${esc(a.natureza)}</span>
          </div>
        </header>
        <h3><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.titulo)}</a></h3>
        <span class="mono apagado">${esc(a.tipo)} · ${esc(a.autores)} · ${esc(a.data)}</span>
        <p class="tese">${esc(a.tese)}</p>
        ${a.numero ? `<p class="destaque"><strong>${esc(a.numero.valor)}</strong> <span>${esc(a.numero.legenda)}</span></p>` : ""}
        ${a.premissas || a.pergunte ? `
        <details class="critica">
          <summary>Leitura crítica</summary>
          ${a.premissas ? `<h4>O argumento parte de que</h4>${lista(a.premissas)}` : ""}
          ${a.pergunte ? `<h4>Pergunte-se</h4>${lista(a.pergunte)}` : ""}
        </details>` : ""}
        <a class="ir-fonte" href="${esc(a.url)}" target="_blank" rel="noopener">Ler o texto original${a.formato === "PDF" ? " (PDF)" : ""}</a>
      </article>`;
  }

  /* ---------- Início ---------- */

  function filtrarTemas() {
    const termos = normal(estado.busca).split(/\s+/).filter(Boolean);
    return temas.filter((t) => {
      if (estado.categoria !== "todas" && t.categoria !== estado.categoria) return false;
      const fontes = (t.leituras || []).map((l) => l.instituicao).join(" ");
      const alvo = normal([t.titulo, t.pergunta, t.resumo, nomeCategoria(t.categoria), fontes, ...(t.tags || [])].join(" "));
      return termos.every((x) => alvo.includes(x));
    });
  }

  function linhasIndice() {
    const lista = filtrarTemas();
    const cat = estado.categoria !== "todas" ? ` em ${nomeCategoria(estado.categoria)}` : "";
    const busca = estado.busca.trim() ? ` para “${esc(estado.busca.trim())}”` : "";
    const meta = `<div class="indice-cab mono apagado"><span>${lista.length} ${lista.length === 1 ? "tema" : "temas"}${cat}${busca}</span><span class="so-largo">Leituras por lado</span></div>`;
    if (!lista.length) {
      return meta + `<div class="vazio"><p>Nenhum tema encontrado. Tente outra palavra ou veja todas as categorias.</p>
        <button type="button" class="botao-texto" data-limpar>Limpar busca e filtros</button></div>`;
    }
    if (estado.categoria === "todas" && !estado.busca.trim()) {
      // Sem filtro: um grupo fechado por categoria, para a tela inicial não virar uma lista enorme.
      return categorias.map((c) => {
        const doGrupo = lista.filter((t) => t.categoria === c.id);
        if (!doGrupo.length) return "";
        return `<details class="grupo">
          <summary><span class="grupo-nome">${esc(c.nome)}</span><span class="grupo-temas apagado">${doGrupo.map((t) => esc(t.titulo)).join(" · ")}</span><span class="grupo-conta mono">${doGrupo.length}</span></summary>
          <div class="grupo-lista">${doGrupo.map((t) => linhaTema(t)).join("")}<a class="grupo-ver botao-texto" href="#categoria/${c.id}">Ver a página de ${esc(c.nome)}</a></div>
        </details>`;
      }).join("");
    }
    return meta + lista.map((t) => linhaTema(t)).join("");
  }

  function linhaTema(t, comResumo) {
      const corpo = `
        <span class="num">${numero(t)}</span>
        <span class="linha-txt">
          <span class="mono apagado">${esc(nomeCategoria(t.categoria))}</span>
          <span class="nome">${esc(t.titulo)}</span>
          <span class="perg">${esc(t.pergunta)}</span>
          ${comResumo && t.resumo ? `<span class="resumo-linha">${esc(t.resumo)}</span>` : ""}
        </span>`;
      if (t.emBreve) return `<div class="linha em-breve">${corpo}<span class="placar mono">Em preparação</span></div>`;
      return `<a class="linha" href="#${t.id}">${corpo}
        <span class="placar">
          <span title="${esc(rotulo(t, "favoravel"))}">${sinal("favoravel")}${doLado(t, "favoravel").length}</span>
          <span title="${esc(rotulo(t, "contrario"))}">${sinal("contrario")}${doLado(t, "contrario").length}</span>
        </span></a>`;
  }

  // Barra do topo: busca e menu de categorias valem em qualquer página e levam ao índice filtrado.
  function pintarCategorias() {
    const painel = document.getElementById("menu-painel");
    if (!painel) return;
    const conta = (id) => temas.filter((t) => id === "todas" || t.categoria === id).length;
    const atual = categoriaDaRota();
    const todos = `<li><button type="button" class="menu-cat" data-categoria="todas" aria-pressed="${!atual && !location.hash.replace(/^#/, "")}">Todos os temas<span>${conta("todas")}</span></button></li>`;
    const item = (c) => `<li><a class="menu-cat" href="#categoria/${c.id}" data-fechar${atual === c.id ? ' aria-current="page"' : ""}>${esc(c.nome)}<span>${conta(c.id)}</span></a></li>`;
    painel.innerHTML = `<ul class="menu-lista">${todos}${categorias.map(item).join("")}</ul>`;
  }

  function irParaIndice() {
    if (location.hash.replace(/^#/, "")) {
      try { history.pushState(null, "", location.pathname + location.search); rotear(); } catch (e) { location.hash = ""; }
    }
    const ind = document.getElementById("indice");
    if (ind) {
      ind.innerHTML = linhasIndice();
      const topo = ind.getBoundingClientRect().top;
      if (topo < 0 || topo > window.innerHeight * 0.6) ind.scrollIntoView({ block: "start" });
    }
    pintarCategorias();
  }

  function ligarBarra() {
    const campo = document.getElementById("busca-global");
    const form = document.getElementById("form-busca");
    if (campo) {
      campo.addEventListener("input", () => { estado.busca = campo.value; irParaIndice(); });
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const unico = filtrarTemas().filter((t) => !t.emBreve);
        if (unico.length === 1) { campo.blur(); location.hash = unico[0].id; }
      });
    }
    const botao = document.getElementById("menu-botao");
    const painel = document.getElementById("menu-painel");
    if (botao && painel) {
      const abrir = (sim) => {
        painel.hidden = !sim;
        botao.setAttribute("aria-expanded", String(sim));
        if (sim) { pintarCategorias(); const f = painel.querySelector("button, a"); if (f) f.focus(); }
      };
      botao.addEventListener("click", () => abrir(painel.hidden));
      painel.addEventListener("click", (e) => {
        const c = e.target.closest("[data-categoria]");
        if (c) { estado.categoria = c.dataset.categoria; abrir(false); irParaIndice(); return; }
        if (e.target.closest("[data-fechar]")) abrir(false);
      });
      document.addEventListener("click", (e) => {
        if (!painel.hidden && !painel.contains(e.target) && !botao.contains(e.target)) abrir(false);
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !painel.hidden) { abrir(false); botao.focus(); }
      });
    }
    pintarCategorias();
  }

  function emAlta() {
    const e = window.EM_ALTA;
    const tema = e && temas.find((t) => t.id === e.tema && !t.emBreve);
    if (!tema) return "";
    return `
      <section class="em-alta" aria-labelledby="em-alta-titulo">
        <div class="em-alta-selo mono"><span class="pulso" aria-hidden="true"></span>Em alta agora<span class="apagado">· ${esc(e.selo)} · ${esc(e.data)}</span></div>
        <h2 id="em-alta-titulo"><a href="#${tema.id}">${esc(e.titulo)}</a></h2>
        <p>${esc(e.texto)}</p>
        <div class="em-alta-acoes">
          <a class="botao" href="#${tema.id}">Entenda os dois lados</a>
          <span class="mono apagado">${doLado(tema, "favoravel").length + doLado(tema, "contrario").length} estudos · ${esc(nomeCategoria(tema.categoria))}</span>
          ${e.fonte ? `<a class="botao-texto" href="${esc(e.fonte.url)}" target="_blank" rel="noopener">Ver a notícia ↗</a>` : ""}
        </div>
      </section>`;
  }

  function paginaInicio() {
    raiz.innerHTML = `
      <section class="capa capa-foto">
        <img class="banner-foto" src="img/capa/congresso.jpg" alt="Congresso Nacional, em Brasília, à noite" decoding="async" fetchpriority="high">
        <h1>Duvide.<br><span class="grifo">Compare.</span><br>Decida.</h1>
        <p class="sub">Cada tema reúne estudos das principais universidades e instituições do país, de um lado e do outro, com quem fez cada um e de onde ele parte.</p>
        <p class="capa-credito mono">Congresso Nacional, Brasília · Foto: Rodolfo Stuckert/Câmara dos Deputados · <a href="https://creativecommons.org/licenses/by/3.0" target="_blank" rel="noopener">CC BY 3.0</a> · <a href="https://commons.wikimedia.org/wiki/File:Congresso_Nacional_do_Brasil_em_noite_de_lua_cheia.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></p>
      </section>
      ${emAlta()}
      <section class="metodo" aria-labelledby="metodo-titulo">
        <h2 id="metodo-titulo" class="mono apagado">Como usar</h2>
        <ol>
          <li><strong>Escolha um tema.</strong> Use a busca ou o menu de categorias no topo. Cada tema é um dossiê com o contexto e os números.</li>
          <li><strong>Leia os dois lados.</strong> Cada lado traz estudos de universidades, institutos e entidades, com quem os fez e o que defendem.</li>
          <li><strong>Vá na fonte.</strong> Os links levam ao texto original. A leitura crítica mostra as premissas de cada estudo.</li>
        </ol>
      </section>
      <section class="temas" aria-labelledby="temas-titulo"><h2 id="temas-titulo">Temas</h2><div id="indice">${linhasIndice()}</div></section>
`;
    raiz.onclick = (e) => {
      if (!e.target.closest("[data-limpar]")) return;
      estado.busca = ""; estado.categoria = "todas";
      const campo = document.getElementById("busca-global");
      if (campo) { campo.value = ""; campo.focus(); }
      irParaIndice();
    };
  }

  /* ---------- Dossiê ---------- */

  const SECOES = [
    ["contexto", "Contexto"],
    ["leituras", "Os dois lados"],
    ["ponto-a-ponto", "Ponto a ponto"],
    ["videos", "Vídeos"],
    ["glossario", "Glossário"],
    ["fontes", "Fontes"],
  ];

  // Foto de topo do dossiê, sempre com autor, licença e link para a origem.
  function creditoFoto(f) {
    const autor = f.autor ? esc(f.autor) : "Autor desconhecido";
    const licenca = f.licenca_url ? `<a href="${esc(f.licenca_url)}" target="_blank" rel="noopener">${esc(f.licenca)}</a>` : esc(f.licenca || "");
    return `<p class="banner-credito mono">${f.legenda ? `<span>${esc(f.legenda)}</span>` : ""}<span>Foto: ${autor} · ${licenca} · <a href="${esc(f.fonte_url)}" target="_blank" rel="noopener">Wikimedia Commons</a></span></p>`;
  }

  // Fim do dossiê: sugere temas vizinhos para a pessoa seguir lendo
  const RELACIONADOS = {
    "escala-6x1": ["reforma-tributaria", "bolsa-familia", "super-ricos"],
    "reforma-tributaria": ["privatizacoes", "super-ricos", "escala-6x1"],
    "maioridade-penal": ["cameras-corporais", "armas", "civico-militares"],
    "tarifa-zero": ["bolsa-familia", "privatizacoes", "super-ricos"],
    "bolsa-familia": ["super-ricos", "escala-6x1", "tarifa-zero"],
    "armas": ["cameras-corporais", "maioridade-penal", "maconha"],
    "cameras-corporais": ["armas", "maioridade-penal", "maconha"],
    "privatizacoes": ["reforma-tributaria", "foz-amazonas", "tarifa-zero"],
    "maconha": ["aborto", "armas", "maioridade-penal"],
    "super-ricos": ["reforma-tributaria", "bolsa-familia", "escala-6x1"],
    "cotas-universidades": ["civico-militares", "marco-temporal", "bolsa-familia"],
    "civico-militares": ["cotas-universidades", "maioridade-penal", "redes-sociais"],
    "aborto": ["maconha", "redes-sociais", "marco-temporal"],
    "redes-sociais": ["aborto", "civico-militares", "cameras-corporais"],
    "marco-temporal": ["foz-amazonas", "cotas-universidades", "aborto"],
    "foz-amazonas": ["marco-temporal", "privatizacoes", "reforma-tributaria"],
  };
  function continueLendo(tema) {
    const pronto = (t) => t && t.id !== tema.id && !t.emBreve;
    const achar = (id) => window.TEMAS.find((t) => t.id === id);
    let lista = (RELACIONADOS[tema.id] || []).map(achar).filter(pronto);
    for (const t of window.TEMAS) {
      if (lista.length >= 3) break;
      if (pronto(t) && !lista.includes(t) && t.categoria === tema.categoria) lista.push(t);
    }
    for (const t of window.TEMAS) {
      if (lista.length >= 3) break;
      if (pronto(t) && !lista.includes(t)) lista.push(t);
    }
    if (!lista.length) return "";
    return `
      <section class="bloco continue" aria-labelledby="continue-h">
        <div class="bloco-cab"><h2 id="continue-h">Continue lendo</h2><span class="mono apagado">Outros temas em debate</span></div>
        <div class="continue-grade">
          ${lista.slice(0, 3).map((t) => `
          <a class="continue-cartao" href="#${t.id}">
            ${t.imagem ? `<img src="${esc(t.imagem.arquivo)}" alt="" loading="lazy" decoding="async" style="object-position:${esc(t.imagem.posicao || "50% 50%")}">` : ""}
            <span class="mono apagado">${esc(nomeCategoria(t.categoria))}</span>
            <strong>${esc(t.titulo)}</strong>
            <span class="perg">${esc(t.pergunta)}</span>
            <span class="mono continue-ir">Abrir dossiê →</span>
          </a>`).join("")}
        </div>
      </section>`;
  }

  function paginaTema(tema) {
    raiz.onclick = null;
    const ctx = tema.contexto;
    const coluna = (pos) => `
      <div class="lado">
        <div class="lado-cab">${sinal(pos)}<strong>Lado ${LETRA[pos]}</strong><span class="mono apagado">${esc(rotulo(tema, pos))}</span></div>
        ${doLado(tema, pos).map((a) => (estado.filtro === "todos" ? leituraCurta(tema, a) : leitura(tema, a))).join("") || `<p class="vazio">Nenhuma leitura selecionada ainda.</p>`}
      </div>`;
    const colunas = () => (estado.filtro === "todos" ? coluna("favoravel") + coluna("contrario") : coluna(estado.filtro));
    const botao = (valor, texto) =>
      `<button type="button" data-filtro="${valor}" aria-pressed="${estado.filtro === valor}">${esc(texto)}</button>`;
    const tem = {
      contexto: !!ctx, leituras: true, "ponto-a-ponto": !!(tema.pontos && tema.pontos.length),
      videos: !!(tema.videos && tema.videos.length),
      glossario: !!((tema.glossario && tema.glossario.length) || (tema.incertezas && tema.incertezas.length)),
      fontes: !!(tema.fontes && tema.fontes.length),
    };
    const instituicoes = [...new Set((tema.leituras || []).map((l) => l.instituicao.split(" · ")[0]))];

    raiz.innerHTML = `
      <nav class="migalha mono"><a href="#">Início</a><span>/</span><a href="#categoria/${tema.categoria}">${esc(nomeCategoria(tema.categoria))}</a><span>/</span><span>${esc(tema.titulo)}</span></nav>
      ${tema.imagem ? `<div class="banner">
        <img class="banner-foto" src="${esc(tema.imagem.arquivo)}" alt="${esc(tema.imagem.alt || "")}" style="object-position:${esc(tema.imagem.posicao || "50% 50%")}" decoding="async" fetchpriority="high">
        <div class="banner-miolo">      <header class="dossie dossie-banner">
        <span class="mono apagado">Dossiê ${numero(tema)} · ${esc(nomeCategoria(tema.categoria))}${tema.atualizado ? " · atualizado em " + dataBR(tema.atualizado) : ""}</span>
        <h1>${esc(tema.pergunta)}</h1>
        <p>${esc(tema.resumo)}</p>
        ${instituicoes.length ? `<p class="quem mono">Leituras de ${instituicoes.map(esc).join(", ")}</p>` : ""}
      </header></div>
      </div>
      ${creditoFoto(tema.imagem)}` : `      <header class="dossie">
        <span class="mono apagado">Dossiê ${numero(tema)} · ${esc(nomeCategoria(tema.categoria))}${tema.atualizado ? " · atualizado em " + dataBR(tema.atualizado) : ""}</span>
        <h1>${esc(tema.pergunta)}</h1>
        <p>${esc(tema.resumo)}</p>
        ${instituicoes.length ? `<p class="quem mono">Leituras de ${instituicoes.map(esc).join(", ")}</p>` : ""}
      </header>`}
      ${ctx && ctx.fatos ? `<dl class="numeros">${ctx.fatos.map((f) => `<div><dt>${esc(f.rotulo)}</dt><dd>${esc(f.valor)}</dd></div>`).join("")}</dl>` : ""}

      <nav class="sumario" aria-label="Seções do dossiê">
        <div class="sumario-trilho">
          ${SECOES.filter(([id]) => tem[id]).map(([id, nome]) => `<button type="button" data-ir="${id}">${nome}</button>`).join("")}
        </div>
      </nav>

      ${ctx ? `
      <section class="bloco" id="s-contexto">
        <div class="bloco-cab"><h2>${esc(ctx.titulo)}</h2></div>
        <div class="texto-corrido">${ctx.paragrafos.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      </section>` : ""}

      <section class="bloco" id="s-leituras">
        <div class="bloco-cab">
          <div>
            <h2>Os dois lados</h2>
            <p class="bloco-sub" id="dica-lados"></p>
          </div>
          <div class="filtro" role="group" aria-label="Mostrar">
            ${botao("todos", "Os dois lados")}${botao("favoravel", "Só lado A")}${botao("contrario", "Só lado B")}
          </div>
        </div>
        <div class="lados ${estado.filtro === "todos" ? "" : "um"}" id="lados">${colunas()}</div>
      </section>

      ${tem["ponto-a-ponto"] ? `
      <section class="bloco" id="s-ponto-a-ponto">
        <div class="bloco-cab"><h2>Ponto a ponto</h2><span class="mono apagado">Onde os lados discordam</span></div>
        <div class="tabela-rolagem">
          <table>
            <thead><tr>
              <th>Questão</th>
              <th><span>${sinal("favoravel")}${esc(rotulo(tema, "favoravel"))}</span></th>
              <th><span>${sinal("contrario")}${esc(rotulo(tema, "contrario"))}</span></th>
            </tr></thead>
            <tbody>
              ${tema.pontos.map((p) => `<tr><th scope="row">${esc(p.tema)}</th><td data-lado="A" data-rotulo="${esc(rotulo(tema, "favoravel"))}">${esc(p.favoravel)}</td><td data-lado="B" data-rotulo="${esc(rotulo(tema, "contrario"))}">${esc(p.contrario)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>` : ""}

      ${tem.videos ? `
      <section class="bloco" id="s-videos">
        <div class="bloco-cab"><h2>Vídeos</h2><span class="mono apagado">Curtos, de canais que pensam diferente</span></div>
        ${secaoVideos(tema)}
      </section>` : ""}

      ${tem.glossario ? `
      <section class="bloco duas" id="s-glossario">
        ${tema.glossario ? `<div>
          <div class="bloco-cab"><h2>Glossário</h2></div>
          <dl class="glossario">${tema.glossario.map((g) => `<div><dt>${esc(g.termo)}</dt><dd>${esc(g.definicao)}</dd></div>`).join("")}</dl>
        </div>` : ""}
        ${tema.incertezas ? `<div>
          <div class="bloco-cab"><h2>O que ninguém sabe ainda</h2></div>
          <ol class="duvidas">${tema.incertezas.map((q) => `<li><span>${esc(q)}</span></li>`).join("")}</ol>
        </div>` : ""}
      </section>` : ""}

      ${tem.fontes ? `
      <section class="bloco" id="s-fontes">
        <div class="bloco-cab"><h2>Vá na fonte</h2><span class="mono apagado">Documentos e reportagens</span></div>
        <ul class="fontes">
          ${tema.fontes.map((f) => `<li><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a></li>`).join("")}
        </ul>
      </section>` : ""}
      ${continueLendo(tema)}`;

    // Filtro de lados: com os dois lados, cartões enxutos; com um lado só, cartões completos
    const DICAS = {
      todos: "Estudos de instituições do país, lado a lado. Escolha um lado para ver o resumo, os números e a leitura crítica de cada um.",
      favoravel: "Resumo, números e premissas de cada estudo do lado A. Os links levam ao texto original.",
      contrario: "Resumo, números e premissas de cada estudo do lado B. Os links levam ao texto original.",
    };
    const aplicarFiltro = (valor, alvo) => {
      estado.filtro = valor;
      try { localStorage.setItem("filtro", estado.filtro); } catch (e) {}
      raiz.querySelectorAll("[data-filtro]").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.filtro === estado.filtro)));
      const lados = document.getElementById("lados");
      lados.className = "lados " + (estado.filtro === "todos" ? "" : "um");
      lados.innerHTML = colunas();
      document.getElementById("dica-lados").textContent = DICAS[estado.filtro];
      const el = alvo && document.getElementById("l-" + alvo);
      if (el) el.scrollIntoView({ block: "start" });
    };
    document.getElementById("dica-lados").textContent = DICAS[estado.filtro];
    raiz.querySelectorAll("[data-filtro]").forEach((b) => b.addEventListener("click", () => aplicarFiltro(b.dataset.filtro)));
    document.getElementById("lados").addEventListener("click", (e) => {
      const b = e.target.closest("[data-detalhe]");
      if (b) aplicarFiltro(b.dataset.detalhe, b.dataset.alvo);
    });

    // Sumário: rolar até a seção e marcar a seção atual
    const botoes = [...raiz.querySelectorAll("[data-ir]")];
    botoes.forEach((b) => b.addEventListener("click", () => irPara(b.dataset.ir)));
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entradas) => {
        entradas.forEach((en) => {
          if (!en.isIntersecting) return;
          const id = en.target.id.slice(2);
          botoes.forEach((b) => b.toggleAttribute("aria-current", b.dataset.ir === id));
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      raiz.querySelectorAll("section[id^='s-']").forEach((s) => obs.observe(s));
    }

    ligarVideos();
  }

  function irPara(id) {
    const s = document.getElementById("s-" + id);
    if (!s) return;
    const reduzir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    s.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
  }

  /* ---------- Vídeos ---------- */

  // A prévia roda dentro de um quadro que bloqueia o YouTube: lá os vídeos abrem em outra aba.
  const podeIncorporar = (() => { try { return window.self === window.top; } catch (e) { return false; } })();

  // Miniatura salva no próprio site (img/videos); se faltar, tenta a do YouTube.
  function cartaoVideo(v) {
    const id = encodeURIComponent(v.id);
    return `
      <figure class="video">
        <a class="video-capa" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" data-video="${esc(v.id)}" aria-label="Assistir: ${esc(v.titulo)}">
          <img src="img/videos/${id}.jpg" alt="" loading="lazy" onerror="if(!this.dataset.yt){this.dataset.yt=1;this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'}else{this.remove()}">
          <span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>
          ${v.duracao ? `<span class="video-tempo mono">${esc(v.duracao)}</span>` : ""}
        </a>
        <figcaption>
          <strong>${esc(v.titulo)}</strong>
          ${v.nota ? `<span>${esc(v.nota)}</span>` : ""}
          <span class="mono apagado">${[v.canal, v.data].filter(Boolean).map(esc).join(" · ")}${podeIncorporar ? "" : " · abre no YouTube"}</span>
        </figcaption>
      </figure>`;
  }

  function secaoVideos(tema) {
    const lados = ["favoravel", "contrario"].map((pos) => {
      const lista = tema.videos.filter((v) => v.lado === pos);
      if (!lista.length) return "";
      return `
        <div class="videos-lado">
          <div class="lado-cab">${sinal(pos)}<strong>Lado ${LETRA[pos]}</strong><span class="mono apagado">${esc(rotulo(tema, pos))}</span></div>
          <div class="videos">${lista.map(cartaoVideo).join("")}</div>
        </div>`;
    }).join("");
    const soltos = tema.videos.filter((v) => !v.lado);
    return `<div class="videos-lados">${lados}</div>${soltos.length ? `<div class="videos">${soltos.map(cartaoVideo).join("")}</div>` : ""}`;
  }

  function ligarVideos() {
    if (!podeIncorporar) return;
    raiz.querySelectorAll("[data-video]").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const id = encodeURIComponent(a.dataset.video);
        const f = document.createElement("iframe");
        f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        f.title = a.getAttribute("aria-label");
        f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        f.allowFullscreen = true;
        f.className = "video-capa";
        a.replaceWith(f);
      })
    );
  }

  /* ---------- Página da categoria ---------- */

  function paginaCategoria(cat) {
    raiz.onclick = null;
    const lista = temas.filter((t) => t.categoria === cat.id);
    const prontos = lista.filter((t) => !t.emBreve);
    const estudos = prontos.reduce((n, t) => n + (t.leituras || []).length, 0);
    const videos = prontos.reduce((n, t) => n + (t.videos || []).length, 0);
    const outras = categorias.filter((c) => c.id !== cat.id && temas.some((t) => t.categoria === c.id));
    raiz.innerHTML = `
      <nav class="migalha mono"><a href="#">Início</a><span>/</span><span>Categorias</span><span>/</span><span>${esc(cat.nome)}</span></nav>
      <header class="dossie categoria-cab">
        <span class="mono apagado">Categoria</span>
        <h1>${esc(cat.nome)}</h1>
        ${cat.descricao ? `<p>${esc(cat.descricao)}</p>` : ""}
      </header>
      <dl class="numeros numeros-3">
        <div><dt>Temas</dt><dd>${lista.length}</dd></div>
        <div><dt>Estudos e leituras</dt><dd>${estudos}</dd></div>
        <div><dt>Vídeos</dt><dd>${videos}</dd></div>
      </dl>
      <section class="temas categoria-temas" aria-label="Temas de ${esc(cat.nome)}">
        <div class="indice-cab mono apagado"><span>${lista.length} ${lista.length === 1 ? "tema" : "temas"}</span><span class="so-largo">Leituras por lado</span></div>
        ${lista.map((t) => linhaTema(t, true)).join("")}
      </section>
      ${outras.length ? `<section class="outras-cats" aria-labelledby="outras-titulo">
        <h2 id="outras-titulo" class="mono apagado">Outras categorias</h2>
        <ul>${outras.map((c) => `<li><a href="#categoria/${c.id}">${esc(c.nome)}<span class="mono">${temas.filter((t) => t.categoria === c.id).length}</span></a></li>`).join("")}</ul>
      </section>` : ""}`;
  }

  /* ---------- Rotas ---------- */

  function categoriaDaRota() {
    const m = decodeURIComponent(location.hash.replace(/^#/, "")).match(/^categoria\/([\w-]+)$/);
    return m && categorias.some((c) => c.id === m[1]) ? m[1] : null;
  }

  function pintarRota() {
    const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
    const tema = temas.find((t) => t.id === hash.split(".")[0] && !t.emBreve);
    const cat = categoriaDaRota();
    if (tema) paginaTema(tema);
    else if (cat) paginaCategoria(categorias.find((c) => c.id === cat));
    else paginaInicio();
    pintarCategorias();
    window.scrollTo(0, 0);
  }

  // Troca de página com transição leve: crossfade nativo quando o navegador permite, senão um fade simples.
  let primeiraRota = true;
  function rotear() {
    const calmo = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (primeiraRota || calmo) { primeiraRota = false; pintarRota(); return; }
    if (document.startViewTransition) { document.startViewTransition(pintarRota); return; }
    pintarRota();
    raiz.classList.remove("entra"); void raiz.offsetWidth; raiz.classList.add("entra");
  }

  /* ---------- Modo claro / escuro ---------- */

  const html = document.documentElement;
  // O site abre sempre no modo claro; o escuro só vale se a pessoa escolher.
  const temaAtual = () => html.dataset.theme === "dark" ? "dark" : "light";
  const botaoTema = document.getElementById("alternar-tema");
  function pintarBotao() {
    if (!botaoTema) return;
    const escuro = temaAtual() === "dark";
    botaoTema.setAttribute("aria-pressed", String(escuro));
    const rotuloTema = escuro ? "Mudar para o modo claro" : "Mudar para o modo escuro";
    botaoTema.setAttribute("aria-label", rotuloTema);
    botaoTema.title = rotuloTema;
  }
  try { const salvo = localStorage.getItem("tema"); if (salvo === "dark" || salvo === "light") html.dataset.theme = salvo; } catch (e) {}
  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      html.dataset.theme = temaAtual() === "dark" ? "light" : "dark";
      try { localStorage.setItem("tema", html.dataset.theme); } catch (e) {}
      pintarBotao();
    });
    new MutationObserver(pintarBotao).observe(html, { attributes: true, attributeFilter: ["data-theme"] });
    pintarBotao();
  }

  try { estado.filtro = localStorage.getItem("filtro") || "todos"; } catch (e) {}
  if (!["todos", "favoravel", "contrario"].includes(estado.filtro)) estado.filtro = "todos";
  window.addEventListener("hashchange", rotear);
  window.addEventListener("popstate", rotear);
  ligarBarra();
  rotear();
})();
