/*
  Conexão com o Supabase (login e perfis).
  A chave "publishable" é feita para ficar no site: ela só deixa cada pessoa ler e gravar
  o próprio perfil, por causa das regras em supabase/perfis.sql. Nunca coloque aqui a chave "secret".
  Com `url` vazio, o perfil funciona só no navegador.
*/
window.SUPABASE = {
  url: "",
  chave: "sb_publishable_OlG7g0kxgDETYGWCOzTojw_jvzWG4RJ",
  // Para onde os links de e-mail (confirmar conta, trocar senha) levam a pessoa.
  site: "https://caetanovillela.github.io/doislados/",
};
