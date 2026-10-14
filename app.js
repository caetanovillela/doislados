/*
  Navegação pelo endereço (#):
    (vazio)              -> lista de temas
    #escala-6x1          -> página do tema
    #escala-6x1.slug     -> artigo
*/
(function () {
  const temas = window.TEMAS || [];
  const raiz = document.getElementById("app");
  let filtro = "todos";
  let busca = "";

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const contar = (tema, pos) => tema.artigos.filter((a) => a.posicao === pos).length;
  const rotulo = (tema, pos) => (tema.rotulos && tema.rotulos[pos]) || (pos === "favoravel" ? "A favor" : "Contra");
  const selo = (tema, pos) => `<span class="selo ${pos}">${esc(rotulo(tema, pos))}</span>`;

  function cartao(tema, a) {
    return `
      <a class="cartao" href="#${tema.id}.${a.id}">
        <h3>${esc(a.titulo)}</h3>
        <p>${esc(a.resumo)}</p>
        <span class="meta">${esc(a.autor)} · ${a.leitura} min de leitura</span>
      </a>`;
  }

  function paginaInicio() {
    const termo = busca.trim().toLowerCase();
    const lista = temas.filter((t) => !termo || (t.titulo + " " + t.pergunta + " " + t.resumo).toLowerCase().includes(termo));
    const pastas = lista
      .map((t) => {
        if (t.emBreve) {
          return `
          <div class="pasta em-breve" data-aba="Em preparação">
            <h2>${esc(t.titulo)}</h2>
            <p class="pergunta">${esc(t.pergunta)}</p>
          </div>`;
        }
        return `
          <a class="pasta" href="#${t.id}" data-aba="${t.artigos.length} artigos">
            <h2>${esc(t.titulo)}</h2>
            <p class="pergunta">${esc(t.pergunta)}</p>
            <p>${esc(t.resumo)}</p>
            <div class="pasta-lados">
              <span class="selo favoravel">${contar(t, "favoravel")} a favor</span>
              <span class="selo contrario">${contar(t, "contrario")} contra</span>
            </div>
          </a>`;
      })
      .join("");

    raiz.innerHTML = `
      <section class="abertura">
        <h1>Escolha um tema. Leia os dois lados.</h1>
        <p>Cada tema é uma pasta com um resumo do debate e artigos que defendem posições opostas, para você formar a sua opinião.</p>
        <label class="busca" for="busca-temas">
          <span class="rotulo">Buscar tema</span>
          <input id="busca-temas" type="search" placeholder="Ex.: jornada de trabalho" value="${esc(busca)}" autocomplete="off">
        </label>
      </section>
      <section class="pastas" aria-label="Temas">
        ${pastas || `<p class="vazio">Nenhum tema encontrado para “${esc(busca)}”.</p>`}
      </section>`;

    const campo = document.getElementById("busca-temas");
    campo.addEventListener("input", () => {
      busca = campo.value;
      const pos = campo.selectionStart;
      paginaInicio();
      const novo = document.getElementById("busca-temas");
      novo.focus();
      novo.setSelectionRange(pos, pos);
    });
  }

  function paginaTema(tema) {
    const ctx = tema.contexto;
    const coluna = (pos) => `
      <div class="lado">
        <div class="lado-cab ${pos}">${esc(rotulo(tema, pos))}</div>
        ${tema.artigos.filter((a) => a.posicao === pos).map((a) => cartao(tema, a)).join("")}
      </div>`;
    const colunas = filtro === "todos" ? coluna("favoravel") + coluna("contrario") : coluna(filtro);
    const botao = (valor, texto) =>
      `<button type="button" data-filtro="${valor}" aria-pressed="${filtro === valor}">${esc(texto)}</button>`;

    raiz.innerHTML = `
      <nav class="migalha"><a href="#">Temas</a><span>/</span><span>${esc(tema.titulo)}</span></nav>
      <header class="tema-cab">
        <span class="rotulo">${esc(tema.titulo)}</span>
        <h1>${esc(tema.pergunta)}</h1>
        <p>${esc(tema.resumo)}</p>
      </header>

      ${ctx ? `
      <section class="contexto">
        <div>
          <h2>${esc(ctx.titulo)}</h2>
          <div class="leitura">${ctx.paragrafos.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        </div>
        <dl class="fatos">
          ${ctx.fatos.map((f) => `<div><dt>${esc(f.rotulo)}</dt><dd>${esc(f.valor)}</dd></div>`).join("")}
        </dl>
      </section>` : ""}

      <section class="secao">
        <div class="secao-cab">
          <h2>Artigos</h2>
          <div class="filtro" role="group" aria-label="Filtrar por posição">
            ${botao("todos", "Os dois lados")}${botao("favoravel", "A favor")}${botao("contrario", "Contra")}
          </div>
        </div>
        <div class="lados ${filtro === "todos" ? "" : "um"}">${colunas}</div>
      </section>

      ${tema.pontos && tema.pontos.length ? `
      <section class="secao">
        <div class="secao-cab"><h2>Pontos em disputa</h2></div>
        <div class="tabela-rolagem">
          <table>
            <thead><tr><th>Questão</th><th class="favoravel">${esc(rotulo(tema, "favoravel"))}</th><th class="contrario">${esc(rotulo(tema, "contrario"))}</th></tr></thead>
            <tbody>
              ${tema.pontos.map((p) => `<tr><th scope="row">${esc(p.tema)}</th><td>${esc(p.favoravel)}</td><td>${esc(p.contrario)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>` : ""}

      ${tema.fontes && tema.fontes.length ? `
      <section class="secao">
        <div class="secao-cab"><h2>Para aprofundar</h2></div>
        <ul class="fontes">
          ${tema.fontes.map((f) => `<li><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a></li>`).join("")}
        </ul>
      </section>` : ""}`;

    raiz.querySelectorAll("[data-filtro]").forEach((b) =>
      b.addEventListener("click", () => {
        filtro = b.dataset.filtro;
        try { localStorage.setItem("filtro", filtro); } catch (e) {}
        paginaTema(tema);
      })
    );
  }

  function paginaArtigo(tema, a) {
    const oposto = a.posicao === "favoravel" ? "contrario" : "favoravel";
    const outros = tema.artigos.filter((x) => x.posicao === oposto);
    raiz.innerHTML = `
      <nav class="migalha"><a href="#">Temas</a><span>/</span><a href="#${tema.id}">${esc(tema.titulo)}</a></nav>
      <article class="artigo">
        <header class="artigo-cab">
          ${selo(tema, a.posicao)}
          <h1>${esc(a.titulo)}</h1>
          <p class="linha-fina">${esc(a.resumo)}</p>
          <span class="meta">${esc(a.autor)} · ${a.leitura} min de leitura</span>
        </header>
        <div class="leitura">${a.corpo.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <p class="aviso">Este é um texto de exemplo, escrito para demonstrar o site. Na versão final, cada artigo terá autor identificado e fontes.</p>
        ${outros.length ? `
        <section class="outro-lado">
          <span class="rotulo">Leia o outro lado</span>
          ${outros.map((x) => cartao(tema, x)).join("")}
        </section>` : ""}
      </article>`;
  }

  function rotear() {
    const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
    const [temaId, artigoId] = hash.split(".");
    const tema = temas.find((t) => t.id === temaId && !t.emBreve);
    const artigo = tema && artigoId && tema.artigos.find((a) => a.id === artigoId);
    if (artigo) paginaArtigo(tema, artigo);
    else if (tema) paginaTema(tema);
    else paginaInicio();
    window.scrollTo(0, 0);
  }

  try { filtro = localStorage.getItem("filtro") || "todos"; } catch (e) {}
  if (!["todos", "favoravel", "contrario"].includes(filtro)) filtro = "todos";
  window.addEventListener("hashchange", rotear);
  rotear();
})();
