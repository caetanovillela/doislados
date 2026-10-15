"""Busca fotos de licença livre no Wikimedia Commons.

ferramentas/imagens_busca.txt: linhas "tema | termos" -> candidatas em img/candidatas/<tema>/ (miniatura 480px)
ferramentas/imagens_escolha.txt: linhas "tema | File:Nome.jpg" -> img/temas/<tema>.jpg (1600px) + dados em imagens.json
"""
import json, os, re, urllib.parse, urllib.request, html

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "DoisLadosBot/1.0 (https://caetanovillela.github.io/doislados/)"}
BRASIL = ("agência brasil", "agencia brasil", "abr", "agência senado", "agencia senado", "câmara dos deputados", "agência petrobras", "governo", "prefeitura", "fiocruz", "ufjf",
          "marcelo camargo", "fernando frazão", "tânia rêgo", "rovena rosa", "valter campanato", "josé cruz", "pozzebom", "marcello casal", "antonio cruz",
          "tomaz silva", "joédson alves", "elza fiúza", "wilson dias", "paulo pinto", "lula marques", "ricardo stuckert", "pedro frança", "geraldo magela", "roque de sá")
LIVRES = ("cc0", "public domain", "pd", "cc by", "cc-by", "cc by-sa", "cc-by-sa")

def get(params):
    url = API + "?" + urllib.parse.urlencode(dict(params, format="json"))
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        return json.load(r)

def baixar(url, dest):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r, open(dest, "wb") as f:
        f.write(r.read())

def limpar(t):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", t or ""))).strip()

def info(titulos, largura):
    d = get({"action": "query", "titles": "|".join(titulos), "prop": "imageinfo",
             "iiprop": "url|extmetadata|size|mime", "iiurlwidth": largura})
    out = []
    for p in d.get("query", {}).get("pages", {}).values():
        ii = (p.get("imageinfo") or [{}])[0]
        m = ii.get("extmetadata", {})
        lic = limpar(m.get("LicenseShortName", {}).get("value"))
        out.append({"arquivo": p.get("title"), "thumb": ii.get("thumburl"), "pagina": ii.get("descriptionurl"),
                    "largura": ii.get("width"), "altura": ii.get("height"), "mime": ii.get("mime"),
                    "autor": limpar(m.get("Artist", {}).get("value"))[:160], "licenca": lic,
                    "licenca_url": m.get("LicenseUrl", {}).get("value"),
                    "descricao": limpar(m.get("ImageDescription", {}).get("value"))[:300],
                    "credito": limpar(m.get("Credit", {}).get("value"))[:160],
                    "livre": any(lic.lower().startswith(x) for x in LIVRES)})
    return out

def ler(nome):
    p = os.path.join("ferramentas", nome)
    if not os.path.exists(p): return []
    return [tuple(x.strip() for x in l.split("|", 1)) for l in open(p, encoding="utf-8") if "|" in l and not l.startswith("#")]

saida = {}
if os.path.exists("ferramentas/imagens.json"):
    saida = json.load(open("ferramentas/imagens.json", encoding="utf-8"))
saida["candidatas"] = {}
cands = saida["candidatas"]
for tema, termos in ler("imagens_busca.txt"):
    try:
        r = get({"action": "query", "list": "search", "srsearch": termos + " filetype:bitmap", "srnamespace": 6, "srlimit": 50})
        titulos = [x["title"] for x in r["query"]["search"]]
        if not titulos: continue
        lista = []
        for k in range(0, len(titulos), 25):
            lista += [i for i in info(titulos[k:k+25], 480) if i["livre"] and i["mime"] == "image/jpeg" and (i["largura"] or 0) >= 1200
                      and any(b in (i["autor"] + " " + i.get("credito", "")).lower() for b in BRASIL)]
        lista = lista[:14]
        for n, i in enumerate(lista):
            nome = f"{tema}/{re.sub(r'[^a-z0-9]+', '-', termos.lower())[:30]}-{n}.jpg"
            try: baixar(i["thumb"], "img/candidatas/" + nome); i["local"] = nome
            except Exception as e: i["erro"] = str(e)
        cands.setdefault(tema, {})[termos] = lista
        print(tema, termos, len(lista))
    except Exception as e:
        print("ERRO", tema, termos, e)
esc = saida.setdefault("escolhidas", {})
for tema, arq in ler("imagens_escolha.txt"):
    try:
        i = info([arq], 1600)[0]
        baixar(i["thumb"], f"img/temas/{tema}.jpg")
        esc[tema] = i
        print("ok", tema, i["licenca"], i["autor"])
    except Exception as e:
        print("ERRO", tema, arq, e)
json.dump(saida, open("ferramentas/imagens.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
