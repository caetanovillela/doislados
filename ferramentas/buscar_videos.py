"""Busca vídeos no YouTube (pela API interna da página de busca) para cada linha de ferramentas/buscas.txt.
Formato da linha: <tema> | <busca>. Salva ferramentas/buscas.json com id, título, canal, duração e data."""
import json, time, urllib.request

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
CTX = {"client": {"clientName": "WEB", "clientVersion": "2.20240101.00.00", "hl": "pt", "gl": "BR"}}

def buscar(q):
    corpo = json.dumps({"context": CTX, "query": q}).encode()
    req = urllib.request.Request("https://www.youtube.com/youtubei/v1/search?prettyPrint=false", data=corpo,
                                 headers={"User-Agent": UA, "Content-Type": "application/json", "Accept-Language": "pt-BR"})
    j = json.loads(urllib.request.urlopen(req, timeout=30).read())
    achados = []
    def andar(n):
        if isinstance(n, dict):
            v = n.get("videoRenderer")
            if v and v.get("videoId"):
                txt = lambda k: "".join(r.get("text", "") for r in (v.get(k) or {}).get("runs", [])) or (v.get(k) or {}).get("simpleText", "")
                dono = (v.get("ownerText") or {}).get("runs", [{}])[0]
                achados.append({"id": v["videoId"], "titulo": txt("title"), "canal": dono.get("text"),
                                "canal_id": dono.get("navigationEndpoint", {}).get("browseEndpoint", {}).get("browseId"),
                                "duracao": txt("lengthText"), "quando": txt("publishedTimeText"), "views": txt("viewCountText")})
            for x in n.values(): andar(x)
        elif isinstance(n, list):
            for x in n: andar(x)
    andar(j)
    return achados

saida = []
for linha in open("ferramentas/buscas.txt", encoding="utf-8"):
    if "|" not in linha: continue
    tema, q = [p.strip() for p in linha.split("|", 1)]
    try:
        r = buscar(q)
    except Exception as e:
        r = [{"erro": str(e)}]
    saida.append({"tema": tema, "busca": q, "resultados": r[:15]})
    print(tema, q, len(r))
    time.sleep(1)
json.dump(saida, open("ferramentas/buscas.json", "w"), ensure_ascii=False, indent=1)
