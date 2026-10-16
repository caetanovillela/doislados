#!/usr/bin/env python3
"""Atualiza o bloco "Em alta agora" a partir dos feeds RSS de veículos de imprensa.

Lê os feeds de FONTES, procura manchetes das últimas 48 horas que falem de algum
tema do site (TERMOS) e escolhe o tema que mais veículos diferentes estão cobrindo.
Grava o resultado em dados/em-alta.js, que a página inicial lê.

Roda sozinho pelo GitHub Actions (.github/workflows/em-alta.yml). Só usa a
biblioteca padrão do Python. Para rodar à mão: python3 ferramentas/em_alta.py

Ao criar um tema novo em dados/temas.js, acrescente os termos dele em TERMOS.
Termos são expressões regulares aplicadas ao título e ao resumo da notícia,
já sem acentos e em minúsculas.
"""
import datetime as dt
import email.utils
import html
import json
import os
import re
import sys
import unicodedata
import urllib.request
import xml.etree.ElementTree as ET

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SAIDA = os.path.join(RAIZ, "dados", "em-alta.js")

# Imprensa de circulação nacional e agências públicas. Cada veículo conta uma
# vez só, mesmo com vários feeds, para nenhum deles pesar mais que os outros.
FONTES = [
    ("Folha de S.Paulo", "https://feeds.folha.uol.com.br/poder/rss091.xml"),
    ("Folha de S.Paulo", "https://feeds.folha.uol.com.br/mercado/rss091.xml"),
    ("Folha de S.Paulo", "https://feeds.folha.uol.com.br/cotidiano/rss091.xml"),
    ("Metrópoles", "https://www.metropoles.com/feed"),
    ("g1", "https://g1.globo.com/rss/g1/politica/"),
    ("g1", "https://g1.globo.com/rss/g1/economia/"),
    ("Estadão", "https://www.estadao.com.br/arc/outboundfeeds/feeds/rss/sections/politica/"),
    ("Estadão", "https://www.estadao.com.br/arc/outboundfeeds/feeds/rss/sections/economia/"),
    ("Poder360", "https://www.poder360.com.br/feed/"),
    ("CNN Brasil", "https://www.cnnbrasil.com.br/feed/"),
    ("BBC News Brasil", "https://feeds.bbci.co.uk/portuguese/rss.xml"),
    ("Agência Brasil", "https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml"),
    ("Agência Senado", "https://www12.senado.leg.br/noticias/rss"),
    ("Agência Câmara", "https://www.camara.leg.br/noticias/rss/ultimas-noticias"),
]

TERMOS = {
    "escala-6x1": [r"\b6 ?x ?1\b", r"\b5 ?x ?2\b", r"fim da escala", r"reducao da jornada", r"jornada de trabalho", r"pec 221", r"40 horas semanais"],
    "reforma-tributaria": [r"reforma tributaria", r"\bibs\b", r"\bcbs\b", r"imposto seletivo", r"split payment", r"comite gestor"],
    "maioridade-penal": [r"maioridade penal", r"pec 171", r"imputabilidade penal"],
    "tarifa-zero": [r"tarifa zero", r"passe livre", r"(onibus|transporte) (publico )?gratuito", r"gratuidade (no|do) transporte"],
    "bolsa-familia": [r"bolsa familia", r"cadastro unico", r"\bcadunico\b"],
    "armas": [r"armas? de fogo", r"estatuto do desarmamento", r"\bcacs?\b", r"(porte|posse) de armas?", r"decreto (de|das) armas"],
    "cameras-corporais": [r"cameras? corporai?s", r"body ?cams?", r"cameras? (nas|em) (fardas|uniformes)"],
    "privatizacoes": [r"privatiz", r"desestatiz"],
    "maconha": [r"maconha", r"cannabis", r"lei de drogas", r"pec das drogas", r"porte de drogas"],
    "super-ricos": [r"super-?ricos", r"taxacao dos (super-?)?ricos", r"imposto minimo", r"isencao do (imposto de renda|ir)\b", r"(tributacao|taxacao) (de|dos) dividendos", r"lei 15\.?270", r"alta renda"],
    "cotas-universidades": [r"lei de cotas", r"cotas (raciais|sociais)", r"cotas? (nas|em) universidades", r"cotistas?", r"acoes? afirmativas?", r"heteroidentificacao"],
    "civico-militares": [r"civico-?militar", r"escolas? militar", r"\bpecim\b"],
    "aborto": [r"\baborto", r"adpf 442", r"interrupcao (voluntaria )?da gravidez", r"pec 164", r"nascituro"],
    "redes-sociais": [r"regula\w* (das|de) (redes|plataformas|big ?techs)", r"big ?techs?", r"marco civil da internet", r"pl das fake news", r"pl 2\.?630", r"plataformas digitais", r"eca digital"],
    "marco-temporal": [r"marco temporal", r"terras? indigenas?", r"demarcac\w+ (de|das) terras", r"lei 14\.?701", r"pec 48"],
    "foz-amazonas": [r"foz do amazonas", r"margem equatorial", r"bloco 59", r"fz-?m-?59"],
}

JANELA_HORAS = 48
MINIMO_VEICULOS = 2   # abaixo disso, a página volta para o destaque escrito à mão
MAX_MANCHETES = 4


def normalizar(texto):
    sem_acento = unicodedata.normalize("NFKD", texto)
    sem_acento = "".join(c for c in sem_acento if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", sem_acento.lower())


def limpar(texto):
    texto = re.sub(r"<[^>]+>", " ", html.unescape(texto or ""))
    return re.sub(r"\s+", " ", html.unescape(texto)).strip()


def ler_data(texto):
    if not texto:
        return None
    texto = texto.strip()
    try:
        d = email.utils.parsedate_to_datetime(texto)
    except (TypeError, ValueError):
        try:
            d = dt.datetime.fromisoformat(texto.replace("Z", "+00:00"))
        except ValueError:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=dt.timezone(dt.timedelta(hours=-3)))  # horário de Brasília
    return d.astimezone(dt.timezone.utc)


def filho(el, *nomes):
    for n in nomes:
        for c in el:
            if c.tag.split("}")[-1] == n and (c.text or c.get("href")):
                return c.text if c.text and c.text.strip() else c.get("href")
    return ""


def baixar(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (DoisLados; +https://caetanovillela.github.io/doislados/)"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.read()


def itens_do_feed(conteudo):
    raiz = ET.fromstring(conteudo)
    for el in raiz.iter():
        if el.tag.split("}")[-1] not in ("item", "entry"):
            continue
        yield {
            "titulo": limpar(filho(el, "title")),
            "resumo": limpar(filho(el, "description", "summary", "content")),
            "url": (filho(el, "link") or "").strip(),
            "data": ler_data(filho(el, "pubDate", "published", "updated", "date")),
        }


def temas_da_noticia(titulo, resumo):
    alvo_titulo = normalizar(titulo)
    alvo = alvo_titulo + " " + normalizar(resumo)
    achados = []
    for tema, termos in TERMOS.items():
        if any(re.search(t, alvo_titulo) for t in termos):
            achados.append((tema, 1.0))      # aparece na manchete
        elif any(re.search(t, alvo) for t in termos):
            achados.append((tema, 0.4))      # aparece só no resumo
    return achados


def main():
    agora = dt.datetime.now(dt.timezone.utc)
    limite = agora - dt.timedelta(hours=JANELA_HORAS)
    noticias, vistos, relatorio = [], set(), []

    for veiculo, url in FONTES:
        try:
            itens = list(itens_do_feed(baixar(url)))
        except Exception as erro:  # um feed fora do ar não derruba os outros
            relatorio.append(f"FALHOU  {veiculo:18} {url}  ({type(erro).__name__}: {erro})")
            continue
        recentes = 0
        for it in itens:
            if not it["titulo"] or not it["url"].startswith("http") or it["url"] in vistos:
                continue
            if it["data"] is None or it["data"] < limite or it["data"] > agora + dt.timedelta(hours=1):
                continue
            vistos.add(it["url"])
            recentes += 1
            for tema, peso in temas_da_noticia(it["titulo"], it["resumo"]):
                noticias.append({**it, "veiculo": veiculo, "tema": tema, "peso": peso})
        relatorio.append(f"ok      {veiculo:18} {len(itens):3} itens, {recentes:3} nas últimas {JANELA_HORAS}h  {url}")

    print("\n".join(relatorio))

    placar = {}
    for n in noticias:
        horas = (agora - n["data"]).total_seconds() / 3600
        recencia = 1.0 if horas < 12 else 0.6 if horas < 24 else 0.3
        p = placar.setdefault(n["tema"], {"pontos": 0.0, "veiculos": set(), "noticias": []})
        p["pontos"] += n["peso"] * recencia
        if n["peso"] == 1.0:
            p["veiculos"].add(n["veiculo"])
        p["noticias"].append(n)
    for tema, p in placar.items():
        p["pontos"] += 2 * len(p["veiculos"])

    ranking = sorted(placar.items(), key=lambda kv: kv[1]["pontos"], reverse=True)
    print("\nRanking:")
    for tema, p in ranking[:6]:
        print(f"  {tema:20} {p['pontos']:6.1f} pontos, {len(p['veiculos'])} veículos, {len(p['noticias'])} notícias")

    dados = {"tema": None}
    if ranking and len(ranking[0][1]["veiculos"]) >= MINIMO_VEICULOS:
        tema, p = ranking[0]
        manchetes, usados = [], set()
        for n in sorted(p["noticias"], key=lambda n: (n["peso"], n["data"]), reverse=True):
            if n["veiculo"] in usados or n["peso"] < 1:
                continue
            usados.add(n["veiculo"])
            manchetes.append({
                "veiculo": n["veiculo"],
                "titulo": n["titulo"],
                "url": n["url"],
                "data": n["data"].isoformat(timespec="minutes"),
            })
            if len(manchetes) == MAX_MANCHETES:
                break
        manchetes.sort(key=lambda m: m["data"], reverse=True)
        dados = {
            "tema": tema,
            "veiculos": len(p["veiculos"]),
            "noticias": sum(1 for n in p["noticias"] if n["peso"] == 1.0),
            "manchetes": manchetes,
        }

    # Grava sempre, mesmo sem mudança de tema: "atualizado" é a hora em que o robô conferiu
    # os feeds, e é ela que o selo "Atualizado há X" mostra no site.
    dados["atualizado"] = agora.isoformat(timespec="minutes")
    with open(SAIDA, "w", encoding="utf-8") as f:
        f.write("/* Gerado por ferramentas/em_alta.py a partir dos feeds da imprensa. Não edite à mão:\n"
                "   para fixar um destaque escrito à mão, use EM_ALTA em dados/temas.js com \"fixar\": true. */\n")
        f.write("window.EM_ALTA_AUTO = " + json.dumps(dados, ensure_ascii=False, indent=2) + ";\n")
    print(f"\nGravado: {dados['tema']}")


if __name__ == "__main__":
    sys.exit(main())
