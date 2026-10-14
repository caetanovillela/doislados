"""Confere os vídeos listados em ferramentas/videos.txt: título, canal, duração, descrição e miniatura.
Roda no GitHub Actions (a rede de lá alcança o YouTube). Salva img/videos/<id>.jpg e ferramentas/videos.json."""
import json, os, re, time, urllib.request

ids = open("ferramentas/videos.txt").read().split()
os.makedirs("img/videos", exist_ok=True)
saida = {}
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def pedir(url, dados=None, cab=None):
    h = {"User-Agent": UA, "Accept-Language": "pt-BR", "Cookie": "CONSENT=YES+cb; SOCS=CAI"}
    h.update(cab or {})
    req = urllib.request.Request(url, data=dados, headers=h)
    return urllib.request.urlopen(req, timeout=30).read()

CLIENTES = [
    {"clientName": "TVHTML5_SIMPLY_EMBEDDED_PLAYER", "clientVersion": "2.0"},
    {"clientName": "WEB_EMBEDDED_PLAYER", "clientVersion": "1.20240101.00.00"},
    {"clientName": "ANDROID_VR", "clientVersion": "1.57.29", "androidSdkVersion": 32},
    {"clientName": "WEB", "clientVersion": "2.20240101.00.00"},
]

def detalhes(vid):
    for c in CLIENTES:
        corpo = {"videoId": vid, "context": {"client": dict(c, hl="pt", gl="BR")},
                 "thirdParty": {"embedUrl": "https://www.youtube.com/"}}
        try:
            j = json.loads(pedir("https://www.youtube.com/youtubei/v1/player?prettyPrint=false",
                                 json.dumps(corpo).encode(), {"Content-Type": "application/json"}))
            d = j.get("videoDetails") or {}
            if d.get("lengthSeconds"):
                mf = (j.get("microformat") or {}).get("playerMicroformatRenderer") or {}
                return {"segundos": int(d["lengthSeconds"]), "canal": d.get("author"),
                        "descricao": (d.get("shortDescription") or "")[:500],
                        "data": mf.get("publishDate"), "via": c["clientName"]}
        except Exception:
            pass
    try:
        html = pedir(f"https://www.youtube.com/watch?v={vid}").decode("utf-8", "ignore")
        m = re.search(r'"lengthSeconds":"(\d+)"', html)
        if m:
            out = {"segundos": int(m.group(1)), "via": "pagina"}
            m = re.search(r'"publishDate":"([^"]+)"', html)
            if m: out["data"] = m.group(1)
            m = re.search(r'"shortDescription":"((?:[^"\\]|\\.)*)"', html)
            if m: out["descricao"] = json.loads('"' + m.group(1) + '"')[:500]
            return out
    except Exception as e:
        return {"erro": str(e)}
    return {"erro": "sem duração"}

for vid in ids:
    info = {"id": vid}
    try:
        o = json.loads(pedir(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"))
        info.update(titulo=o.get("title"), canal=o.get("author_name"))
    except Exception as e:
        info["erro_oembed"] = str(e)
    if not os.path.exists(f"img/videos/{vid}.jpg"):
        for q in ("hqdefault", "mqdefault"):
            try:
                open(f"img/videos/{vid}.jpg", "wb").write(pedir(f"https://i.ytimg.com/vi/{vid}/{q}.jpg"))
                break
            except Exception:
                pass
    d = detalhes(vid)
    canal = info.get("canal")
    info.update(d)
    info["canal"] = canal or d.get("canal")
    saida[vid] = info
    print(vid, info.get("segundos"), info.get("via"), info.get("canal"), info.get("titulo"))
    time.sleep(1.5)

json.dump(saida, open("ferramentas/videos.json", "w"), ensure_ascii=False, indent=1)
