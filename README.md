# Dois Lados

Site para quem quer se informar sobre temas de política. Cada tema é uma pasta com um resumo do debate, artigos a favor e contra e uma tabela com os pontos em disputa.

## Como rodar

Não precisa instalar nada. Abra `index.html` no navegador, ou sirva a pasta:

```sh
python3 -m http.server 8000
```

## Como adicionar um tema

Todo o conteúdo fica em `dados/temas.js`. Copie o bloco de um tema existente, troque os campos e salve. O layout (`app.js` e `style.css`) não precisa mudar.

Os artigos atuais são textos de exemplo e devem ser trocados por artigos reais, com autoria e fontes.
