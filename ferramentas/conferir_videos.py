"""Confere os vídeos listados em ferramentas/videos.txt: título, canal, duração e miniatura.
Roda no GitHub Actions (a rede de lá alcança o YouTube). Salva img/videos/<id>.jpg e ferramentas/videos.json."""
import json, os, re, subprocess, urllib.request

ids = open("ferramentas/videos.txt").read().split()
os.makedirs("img/videos", exist_ok=True)
saida = {}

def baixar(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "pt-BR"})
    return urllib.request.urlopen(req, timeout=30).read()

for vid in ids:
    info = {"id": vid}
    try:
        o = json.loads(baixar(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"))
        info.update(titulo=o.get("title"), canal=o.get("author_name"))
    except Exception as e:
        info["erro_oembed"] = str(e)
    for q in ("hqdefault", "mqdefault"):
        try:
            open(f"img/videos/{vid}.jpg", "wb").write(baixar(f"https://i.ytimg.com/vi/{vid}/{q}.jpg"))
            info["miniatura"] = q
            break
        except Exception:
            pass
    try:
        r = subprocess.run(["yt-dlp", "--skip-download", "-J", f"https://www.youtube.com/watch?v={vid}"],
                           capture_output=True, text=True, timeout=90)
        if r.returncode == 0:
            j = json.loads(r.stdout)
            info.update(segundos=j.get("duration"), data=j.get("upload_date"),
                        canal=j.get("channel") or info.get("canal"), descricao=(j.get("description") or "")[:400])
        else:
            info["erro_ytdlp"] = r.stderr.strip().splitlines()[-1:]
    except Exception as e:
        info["erro_ytdlp"] = str(e)
    if not info.get("segundos"):
        try:
            html = baixar(f"https://www.youtube.com/watch?v={vid}").decode("utf-8", "ignore")
            m = re.search(r'"lengthSeconds":"(\d+)"', html)
            if m: info["segundos"] = int(m.group(1))
            m = re.search(r'"publishDate":"([^"]+)"', html)
            if m: info["data"] = m.group(1)
        except Exception as e:
            info["erro_pagina"] = str(e)
    saida[vid] = info
    print(vid, info.get("segundos"), info.get("canal"), info.get("titulo"))

json.dump(saida, open("ferramentas/videos.json", "w"), ensure_ascii=False, indent=1)
