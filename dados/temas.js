/*
  Conteúdo do site. O layout (app.js e style.css) não precisa mudar para adicionar conteúdo.

  EM_ALTA: destaque escrito à mão para o topo da página inicial. Normalmente quem manda é
    dados/em-alta.js, que um robô atualiza sozinho a partir dos feeds da imprensa
    (ferramentas/em_alta.py). Este bloco só aparece se o robô não achar nada, ou se tiver "fixar": true.
    tema   id do tema que o botão abre
    data   quando aconteceu (aparece no selo)

  CATEGORIAS: lista de categorias usadas nos filtros da página inicial.

  TEMAS: cada tema tem
    categoria   id de uma categoria acima
    tags        palavras extras que a busca encontra
    emBreve     true para mostrar o tema como "em preparação"
    rotulos     nome de cada lado (lado A = "favoravel", lado B = "contrario")
    contexto, glossario, incertezas, fontes
    pontos      { tema, favoravel, contrario, fonte_favoravel, fonte_contrario }: cada lado sai de uma leitura
                do próprio tema (o id vai em fonte_*, e o código A1/B2 entra no fim do texto).
    leituras    textos de instituições: posicao ("favoravel" | "contrario"), instituicao, natureza,
                tipo, titulo, autores, data, formato, url, tese, numero, premissas, pergunte
    videos      { id: código do YouTube (o que vem depois de watch?v=), titulo, canal, nota, duracao opcional }
                Uma lista só, sem divisão por lado: vídeos curtos e técnicos, de canais variados.
                A miniatura fica em img/videos/<id>.jpg.

  Antes de adicionar uma leitura, confira o link, a data e a posição do texto.
*/
window.EM_ALTA = {
  "tema": "escala-6x1",
  "data": "14/10/2026",
  "selo": "Votação no Senado",
  "titulo": "O Senado aprovou em primeiro turno a PEC que acaba com a escala 6x1",
  "texto": "O texto que veio da Câmara reduz a jornada de 44 para 40 horas semanais e garante duas folgas por semana. O presidente do Senado, Davi Alcolumbre, disse que o segundo turno pode ser votado em seguida, se os senadores aprovarem um calendário especial. Se passar sem mudanças, a emenda é promulgada.",
  "fonte": {
    "titulo": "O Tempo: Senado aprova em primeiro turno PEC do fim da escala 6x1",
    "url": "https://www.otempo.com.br/politica/congresso/2026/10/14/senado-aprova-em-primeiro-turno-pec-do-fim-da-escala-6x1"
  }
};

window.CATEGORIAS = [
  {
    "id": "trabalho",
    "nome": "Trabalho",
    "descricao": "Jornada, escala, salário e direitos de quem trabalha. Como as regras do emprego deveriam mudar, e quem paga a conta de cada mudança."
  },
  {
    "id": "economia",
    "nome": "Economia",
    "descricao": "Impostos, contas públicas e o papel do Estado na economia. Quem deve pagar mais, o que deve ser público ou privado e o que isso muda no seu bolso."
  },
  {
    "id": "seguranca",
    "nome": "Segurança pública",
    "descricao": "Crime, polícia, prisões e drogas. O que reduz a violência de verdade, e até onde vai o poder do Estado para combatê-la."
  },
  {
    "id": "educacao",
    "nome": "Educação",
    "descricao": "Quem entra na universidade, como a escola pública é gerida e o que de fato melhora o aprendizado."
  },
  {
    "id": "cidades",
    "nome": "Cidades e transporte",
    "descricao": "Transporte, moradia e a vida nas cidades. Quem deve pagar pelos serviços urbanos e quem tem acesso a eles."
  },
  {
    "id": "assistencia",
    "nome": "Assistência social",
    "descricao": "Programas de renda e combate à pobreza. Como ajudar quem precisa sem criar dependência, e quanto isso custa."
  },
  {
    "id": "direitos",
    "nome": "Direitos e liberdades",
    "descricao": "Liberdades individuais, direitos de minorias e os limites entre o que decide o STF e o que decide o Congresso."
  },
  {
    "id": "ambiente",
    "nome": "Meio ambiente e energia",
    "descricao": "Petróleo, floresta, clima e energia. Como conciliar crescimento econômico com a proteção do meio ambiente."
  },
  {
    "id": "instituicoes",
    "nome": "Política e instituições",
    "descricao": "Eleições, Congresso, Orçamento e a relação entre os Poderes. Como as regras do jogo político funcionam e quem decide o quê."
  }
];

window.TEMAS = [
  {
    "id": "escala-6x1",
    "titulo": "Escala 6x1",
    "categoria": "trabalho",
    "pergunta": "A escala 6x1 deve acabar?",
    "resumo": "Seis dias de trabalho para um de folga. A Câmara aprovou uma PEC que acaba com esse modelo, e o Senado aprovou o texto em primeiro turno em 14/10/2026.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor do fim da 6x1",
      "contrario": "Contra o fim ou com ressalvas"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Na escala 6x1, a pessoa trabalha seis dias seguidos e folga um. É comum no comércio, em supermercados, restaurantes, telemarketing e outros serviços que funcionam todos os dias.",
        "A Constituição de 1988 (art. 7º, XIII) limita a jornada a 8 horas por dia e 44 horas por semana. Antes de 1988 o limite era de 48 horas. A CLT garante uma folga semanal de 24 horas seguidas, de preferência aos domingos, mas não proíbe a 6x1.",
        "O debate ganhou força em 2024 com o movimento Vida Além do Trabalho (VAT). Duas propostas tramitaram juntas na Câmara: a PEC 221/2019, de Reginaldo Lopes (PT-MG), e a PEC 8/2025, de Erika Hilton (PSOL-SP), que previa 36 horas e quatro dias de trabalho. O relator, Leo Prates (Republicanos-BA), juntou as duas num texto só.",
        "Em 27 de maio de 2026, a Câmara aprovou esse texto em dois turnos (461 votos a 19 no segundo). Ele reduz a jornada de 44 para 40 horas semanais, sem corte de salário, e garante duas folgas por semana, uma de preferência no domingo. A redução é gradual: 42 horas a partir de 60 dias após a promulgação e 40 horas um ano depois. Uma lei complementar poderá criar regras de transição para MEIs, micro e pequenas empresas.",
        "Em 14 de outubro de 2026, o Senado aprovou a PEC em primeiro turno. Para passar, ela precisa de 49 dos 81 senadores em cada um dos dois turnos. Se o Senado aprovar sem mudar o conteúdo, a emenda é promulgada; se mudar, o texto volta para a Câmara."
      ],
      "fatos": [
        {
          "rotulo": "Limite atual",
          "valor": "44 h/semana"
        },
        {
          "rotulo": "Texto da Câmara",
          "valor": "40 h/semana"
        },
        {
          "rotulo": "Placar na Câmara (2º turno)",
          "valor": "461 × 19"
        },
        {
          "rotulo": "Votos para passar no Senado",
          "valor": "49 de 81"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Emprego",
        "favoravel": "Quando a Constituição de 1988 reduziu a jornada, o salário por hora subiu e a chance de desemprego dos trabalhadores afetados não aumentou. (A4)",
        "contrario": "A CNC estima 631 mil empregos formais a menos só no comércio, setor em que quase todos passam de 40 horas. (B3)",
        "fonte_favoravel": "rbe-1988",
        "fonte_contrario": "cnc-parecer"
      },
      {
        "tema": "Custo para as empresas",
        "favoravel": "O custo médio do trabalhador CLT subiria 7,84%, o que representa menos de 1% do custo total da indústria e do comércio. Limpeza, segurança e pequenos negócios precisariam de mais tempo. (A3)",
        "contrario": "Sem ganho de produtividade, o custo extra chegaria a R$ 267 bilhões por ano no cenário mais alto e iria para o preço final. (B4)",
        "fonte_favoravel": "ipea-nota-tecnica",
        "fonte_contrario": "cni-custo"
      },
      {
        "tema": "Benefícios e custo para a economia",
        "favoravel": "72,8% dos jovens ocupados de 14 a 29 anos trabalham 40 horas ou mais, o que tira o estudo da lista de prioridades. (A1)",
        "contrario": "A FGV reconhece que os benefícios sociais podem ser grandes, mas calcula um custo imediato de 2,6% do PIB com 40 horas semanais. (B1)",
        "fonte_favoravel": "unicamp-juventude",
        "fonte_contrario": "fgv-impacto-imediato"
      }
    ],
    "glossario": [
      {
        "termo": "PEC",
        "definicao": "Proposta de Emenda à Constituição. Muda o texto da Constituição e precisa de três quintos dos votos, em dois turnos, na Câmara e no Senado."
      },
      {
        "termo": "Jornada",
        "definicao": "Tempo de trabalho contratado por dia ou por semana, sem contar horas extras."
      },
      {
        "termo": "Escala",
        "definicao": "Como os dias de trabalho e de folga se organizam: 6x1, 5x2, 12x36 e outras."
      },
      {
        "termo": "Negociação coletiva",
        "definicao": "Acordo entre sindicatos e empresas que define regras para uma categoria inteira, como escala e reajuste."
      },
      {
        "termo": "Produtividade do trabalho",
        "definicao": "Quanto se produz, em valor, por hora trabalhada. É a base para comparar países e setores."
      },
      {
        "termo": "Informalidade",
        "definicao": "Trabalho sem carteira assinada, fora das proteções da CLT, inclusive do limite de jornada."
      }
    ],
    "incertezas": [
      "Quanto a mudança custaria de verdade. As estimativas vão de menos de 1% do custo total das empresas (Ipea) a até 13% nos preços do comércio (CNC). A diferença está nas premissas sobre produtividade, repasse aos preços e reação do emprego.",
      "Se os resultados dos testes de semana de quatro dias, feitos sobretudo em escritórios, valem para comércio e serviços presenciais.",
      "Como a lei complementar vai tratar MEIs, micro e pequenas empresas durante a transição. O texto aprovado na Câmara prevê essa lei, mas deixa os detalhes para depois.",
      "Se o Senado vai confirmar o texto no segundo turno como veio da Câmara ou mudar o conteúdo, o que faria a PEC voltar para os deputados."
    ],
    "fontes": [
      {
        "titulo": "Constituição Federal, art. 7º (direitos dos trabalhadores)",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
      },
      {
        "titulo": "Consolidação das Leis do Trabalho (CLT)",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
      },
      {
        "titulo": "Câmara dos Deputados: busca de propostas e andamento",
        "url": "https://www.camara.leg.br/busca-portal/proposicoes/pesquisa-simplificada"
      },
      {
        "titulo": "Agência Brasil: Câmara aprova, em dois turnos, a PEC pelo fim da escala 6x1 (27/05/2026)",
        "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2026-05/camara-aprova-em-dois-turnos-pec-pelo-fim-da-escala-6x1"
      },
      {
        "titulo": "Rádio Senado: PEC que acaba com a escala 6x1 deve ser votada nesta quarta (13/10/2026)",
        "url": "https://www12.senado.leg.br/radio/1/noticia/2026/10/13/pec-que-acaba-com-a-escala-6x1-deve-ser-votada-nesta-quarta-feira"
      },
      {
        "titulo": "Agência Brasil: Fim da escala 6x1, estudos divergem sobre impactos no PIB e inflação (28/04/2026)",
        "url": "https://agenciabrasil.ebc.com.br/economia/noticia/2026-04/fim-da-escala-6-1-estudos-divergem-sobre-impactos-no-pib-e-inflacao"
      }
    ],
    "tags": [
      "jornada",
      "CLT",
      "PEC 221/2019",
      "5x2",
      "folga",
      "Senado",
      "Câmara"
    ],
    "videos": [
      {
        "id": "jJziTJdnjrw",
        "titulo": "Fim da escala 6x1 não deve trazer ganhos de produtividade, diz economista",
        "canal": "CNN Brasil",
        "nota": "Economista questiona a ideia de que folga a mais aumenta a produtividade."
      },
      {
        "id": "_uZzA37vAvw",
        "titulo": "Economista alerta para riscos do fim da escala 6x1 nos negócios",
        "canal": "Jovem Pan News",
        "nota": "Os efeitos sobre pequenas empresas e preços.",
        "duracao": "11:07"
      },
      {
        "id": "4WXQY1Yq5rs",
        "titulo": "Redução da jornada de trabalho e fim da escala 6x1",
        "canal": "DIEESE",
        "nota": "O departamento de estudos dos sindicatos explica por que defende jornadas menores.",
        "duracao": "13:20"
      },
      {
        "id": "HS7033HJAj8",
        "titulo": "Especialista explica impactos da PEC que acaba com a escala 6x1",
        "canal": "SBT News",
        "nota": "O que muda para empresas e trabalhadores, em detalhe.",
        "duracao": "8:34"
      },
      {
        "id": "TobOP0ZXdUE",
        "titulo": "Como funciona a escala de trabalho em outros países?",
        "canal": "InfoMoney",
        "nota": "Comparação rápida com as jornadas lá fora.",
        "duracao": "1:54"
      }
    ],
    "leituras": [
      {
        "id": "unicamp-juventude",
        "posicao": "favoravel",
        "instituicao": "Unicamp · CESIT",
        "natureza": "Centro de pesquisa de universidade pública",
        "tipo": "Artigo",
        "titulo": "O impacto da escala 6×1 para a juventude brasileira e a necessidade da redução da jornada de trabalho",
        "autores": "Débora de Araújo Costa e Ezequiela Zanco Scapini",
        "data": "16/10/2025",
        "formato": "Página",
        "url": "https://pesquisa.ie.unicamp.br/cesit/dossie-fim-da-escala-6x1/o-impacto-da-escala-6x1-para-a-juventude-brasileira-e-a-necessidade-da-reducao-da-jornada-de-trabalho-artigo-3/",
        "tese": "Jovens trabalham demais e em condições precárias, o que tira o estudo da lista de prioridades. Reduzir a jornada seria condição para que eles entrem e fiquem na escola ou na faculdade.",
        "numero": {
          "valor": "72,8%",
          "legenda": "dos jovens ocupados de 14 a 29 anos trabalham 40 horas ou mais"
        },
        "premissas": [
          "Horas a menos no trabalho virariam horas de estudo."
        ],
        "pergunte": [
          "O dado separa quem trabalha 40 horas de quem trabalha 44? A PEC só muda a vida do segundo grupo."
        ]
      },
      {
        "id": "unicamp-dossie",
        "posicao": "favoravel",
        "instituicao": "Unicamp · CESIT",
        "natureza": "Centro de pesquisa de universidade pública",
        "tipo": "Coletânea",
        "titulo": "Dossiê Fim da escala 6×1",
        "autores": "Vários autores",
        "data": "jan. a abr. 2026",
        "formato": "Página",
        "url": "https://pesquisa.ie.unicamp.br/centros-e-nucleos/cesit/dossie-fim-da-escala-6x1/",
        "tese": "Reúne mais de uma dezena de textos sobre viabilidade econômica, saúde mental, trabalho de cuidado e experiências de outros países, como Chile e México.",
        "premissas": [
          "O excesso de trabalho é causa relevante de adoecimento e de desigualdade de gênero."
        ],
        "pergunte": [
          "Os textos estimam o custo da mudança para micro e pequenas empresas?"
        ]
      },
      {
        "id": "ipea-nota-tecnica",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Fundação pública ligada ao governo federal",
        "tipo": "Nota técnica",
        "titulo": "Nota técnica sobre a redução da jornada para 40 horas semanais",
        "autores": "Felipe Pateo e outros",
        "data": "fev. 2026",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/server/api/core/bitstreams/7083c3f2-81ee-48e6-a525-c9fe4b56d5e7/content",
        "tese": "O mercado de trabalho consegue absorver o fim da 6x1. O custo da mão de obra sobe, mas pesa pouco no custo total da maioria das empresas. Limpeza, segurança e pequenos negócios precisariam de transição mais longa.",
        "numero": {
          "valor": "+7,84%",
          "legenda": "no custo médio do trabalhador CLT; menos de 1% no custo total da indústria e do comércio"
        },
        "premissas": [
          "O salário pesa pouco no custo total das empresas grandes.",
          "Aumentos de custo parecidos, como os do salário mínimo em 2001 e 2012, não reduziram o emprego."
        ],
        "pergunte": [
          "A comparação com o salário mínimo vale para setores em que o trabalho é quase todo o custo?"
        ]
      },
      {
        "id": "rbe-1988",
        "posicao": "favoravel",
        "instituicao": "PUC-Rio e USP",
        "natureza": "Artigo acadêmico revisado por pares (Revista Brasileira de Economia, FGV)",
        "tipo": "Artigo acadêmico",
        "titulo": "Os efeitos da redução da jornada de trabalho de 48 para 44 horas semanais em 1988",
        "autores": "Gustavo Gonzaga, Naércio Menezes Filho e José Márcio Camargo",
        "data": "2003",
        "formato": "Página",
        "url": "https://periodicos.fgv.br/rbe/article/view/843",
        "tese": "A redução feita pela Constituição de 1988 diminuiu as horas trabalhadas e aumentou o salário por hora, sem elevar a chance de desemprego dos trabalhadores afetados no ano seguinte.",
        "premissas": [
          "O que aconteceu em 1988 diz algo sobre a economia de hoje."
        ],
        "pergunte": [
          "O estudo olha só os 12 meses seguintes. O que se sabe sobre o longo prazo?"
        ]
      },
      {
        "id": "fgv-impacto-imediato",
        "posicao": "contrario",
        "instituicao": "FGV · Ibre",
        "natureza": "Instituto de pesquisa de fundação privada (texto assinado pelo autor)",
        "tipo": "Artigo",
        "titulo": "O impacto econômico imediato do fim da escala de trabalho 6x1",
        "autores": "Daniel Duque",
        "data": "27/11/2024",
        "formato": "Página",
        "url": "https://blogdoibre.fgv.br/posts/o-impacto-economico-imediato-do-fim-da-escala-de-trabalho-6x1",
        "tese": "Simula a perda de PIB com jornadas de 40 e 36 horas. Reconhece que os benefícios sociais podem ser grandes, mas mostra que o custo econômico imediato é relevante e precisa entrar na conta.",
        "numero": {
          "valor": "−2,6%",
          "legenda": "do PIB no cenário base com 40 horas; até −3,3% e cerca de 1 milhão de empregos a menos no cenário pessimista"
        },
        "premissas": [
          "Produtividade e emprego reagem pouco à redução da jornada."
        ],
        "pergunte": [
          "Quanto ganho de produtividade seria preciso para zerar a perda?"
        ]
      },
      {
        "id": "fgv-potenciais-custos",
        "posicao": "contrario",
        "instituicao": "FGV · Ibre",
        "natureza": "Instituto de pesquisa de fundação privada (texto assinado pelo autor)",
        "tipo": "Artigo",
        "titulo": "Potenciais custos do fim da jornada 6x1",
        "autores": "Fernando de Holanda Barbosa Filho",
        "data": "14/04/2025",
        "formato": "Página",
        "url": "https://blogdoibre.fgv.br/posts/potenciais-custos-do-fim-da-jornada-6x1",
        "tese": "Com a produtividade brasileira estagnada, é improvável que ela cresça o bastante para compensar menos horas de trabalho. O resultado seria uma perda significativa de produção.",
        "numero": {
          "valor": "−3,8% a −6,9%",
          "legenda": "no valor produzido pela economia, conforme o efeito sobre o emprego (cenário com 36 horas)"
        },
        "premissas": [
          "A produtividade continuará estagnada como nos últimos anos."
        ],
        "pergunte": [
          "As simulações usam 36 horas. O texto aprovado na Câmara prevê 40. Como os números mudam?"
        ]
      },
      {
        "id": "cnc-parecer",
        "posicao": "contrario",
        "instituicao": "CNC",
        "natureza": "Entidade que representa empresas do comércio, serviços e turismo",
        "tipo": "Parecer técnico",
        "titulo": "Análise dos impactos do fim da jornada 6×1 no Brasil",
        "autores": "Confederação Nacional do Comércio",
        "data": "23/02/2026",
        "formato": "PDF",
        "url": "https://portal-bucket.azureedge.net/wp-content/2026/02/Jornada6x1_Geade.pdf",
        "tese": "O comércio seria o setor mais atingido, porque quase todos os seus trabalhadores passam de 40 horas. O custo extra pressionaria preços e cortaria vagas formais.",
        "numero": {
          "valor": "R$ 122,4 bi",
          "legenda": "por ano de custo para o comércio (+21% na folha); preços até 13% maiores e 631 mil empregos formais a menos"
        },
        "premissas": [
          "As empresas cobririam as horas perdidas contratando ou pagando hora extra, sem reorganizar as escalas.",
          "A maior parte do custo seria repassada aos preços."
        ],
        "pergunte": [
          "Por que a estimativa da CNC para o comércio é tão maior que a do Ipea?",
          "Quem encomendou o estudo representa o setor afetado. Que dados independentes confirmam os números?"
        ]
      },
      {
        "id": "cni-custo",
        "posicao": "contrario",
        "instituicao": "CNI",
        "natureza": "Entidade que representa a indústria",
        "tipo": "Estudo",
        "titulo": "Redução da jornada de trabalho pode aumentar custo empresarial em até R$ 267 bilhões ao ano",
        "autores": "Confederação Nacional da Indústria",
        "data": "2026",
        "formato": "Página",
        "url": "https://noticias.portaldaindustria.com.br/noticias/economia/reducao-da-jornada-de-trabalho-pode-aumentar-custo-empresarial-em-ate-r-267-bilhoes-ao-ano/",
        "tese": "Reduzir a jornada de 44 para 40 horas sem ganho de produtividade encareceria a produção, diminuiria o PIB e chegaria ao bolso do consumidor.",
        "numero": {
          "valor": "R$ 267 bi",
          "legenda": "por ano de custo adicional para as empresas, no cenário mais alto"
        },
        "premissas": [
          "O custo é calculado sem ganhos de produtividade."
        ],
        "pergunte": [
          "Quem fez o estudo representa o setor afetado. Que dados independentes confirmam os números?"
        ]
      }
    ],
    "imagem": {
      "arquivo": "img/temas/escala-6x1.jpg",
      "autor": "Marcello Casal Jr./Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Carteiradetrabalho.jpg",
      "legenda": "Carteira de trabalho sendo preenchida em Brasília.",
      "alt": "Carteira de trabalho aberta sobre uma mesa enquanto alguém escreve com caneta",
      "posicao": "50% 45%"
    }
  },
  {
    "id": "reforma-tributaria",
    "titulo": "Reforma tributária",
    "categoria": "economia",
    "tags": [
      "IBS",
      "CBS",
      "IVA",
      "impostos",
      "imposto seletivo",
      "consumo",
      "EC 132"
    ],
    "pergunta": "A reforma dos impostos sobre o consumo é boa para o país?",
    "resumo": "Cinco tributos sobre o consumo vão virar um imposto sobre valor agregado dividido em dois, o IBS e a CBS. A transição começa em 2026 e vai até 2033.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor da reforma",
      "contrario": "Críticas à reforma"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "O Brasil cobra cinco tributos diferentes sobre o consumo: PIS, Cofins e IPI, que são federais, o ICMS, dos estados, e o ISS, dos municípios. Cada um tem regras próprias, o que gera custo para as empresas, disputas na Justiça e a chamada guerra fiscal entre estados.",
        "A Emenda Constitucional 132, promulgada em dezembro de 2023, troca esses tributos por um imposto sobre valor agregado (IVA) dual: a CBS, federal, e o IBS, de estados e municípios. Também cria o Imposto Seletivo, sobre produtos que fazem mal à saúde ou ao meio ambiente.",
        "A regulamentação veio com a Lei Complementar 214, de janeiro de 2025. A transição começa em 2026 com alíquotas de teste e termina em 2033, quando os tributos antigos deixam de existir.",
        "O debate hoje é sobre o tamanho da alíquota, quem paga mais e quem paga menos. Serviços, que pagavam menos no sistema antigo, tendem a pagar mais. Há exceções e regimes especiais para saúde, educação, alimentos e outros setores, o que eleva a alíquota de quem fica na regra geral."
      ],
      "fatos": [
        {
          "rotulo": "Tributos substituídos",
          "valor": "5"
        },
        {
          "rotulo": "Novos tributos",
          "valor": "IBS + CBS"
        },
        {
          "rotulo": "Fim da transição",
          "valor": "2033"
        },
        {
          "rotulo": "Ganho de PIB (Ipea)",
          "valor": "+2,4%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Quem paga",
        "favoravel": "Trocar os tributos atuais por um IVA deixa o sistema um pouco menos injusto com os mais pobres. Hoje 26% do benefício da cesta básica isenta vai para os 20% mais ricos. (A3)",
        "contrario": "Quase metade da arrecadação (49,7%) vem do consumo, contra 32,4% na média da OCDE. Simplificar não muda esse peso. (B3)",
        "fonte_favoravel": "ufpe-distributivo",
        "fonte_contrario": "anfip-fenafisco"
      },
      {
        "tema": "Exceções e setores",
        "favoravel": "As exceções do texto aprovado reduzem o ganho de PIB (de 5,75% para 2,39%), mas diminuem as perdas de alguns setores e regiões. (A2)",
        "contrario": "Com IVA de 25%, a carga sobre serviços subiria em média 84% em 30 segmentos, porque o setor usa muita mão de obra e tem pouco imposto a abater. (B1)",
        "fonte_favoravel": "ipea-impactos",
        "fonte_contrario": "cnc-servicos"
      },
      {
        "tema": "Justiça fiscal",
        "favoravel": "A crítica de que o IVA é regressivo estaria errada: devolver imposto às famílias pobres funciona melhor que dar desconto em produtos. (A1)",
        "contrario": "A reforma não enfrenta a cobrança concentrada no consumo, e por isso não basta para os objetivos do Estado social. (B2)",
        "fonte_favoravel": "insper-sete-mitos",
        "fonte_contrario": "ufjf-justica-fiscal"
      }
    ],
    "glossario": [
      {
        "termo": "IVA",
        "definicao": "Imposto sobre valor agregado. Cada etapa da produção paga imposto só sobre o valor que acrescentou, abatendo o que já foi pago antes."
      },
      {
        "termo": "IBS e CBS",
        "definicao": "Os dois novos tributos. A CBS é federal e o IBS é de estados e municípios. Juntos formam o IVA dual."
      },
      {
        "termo": "Cumulatividade",
        "definicao": "Quando imposto é cobrado sobre imposto ao longo da cadeia. O IVA foi pensado para acabar com isso."
      },
      {
        "termo": "Regressivo",
        "definicao": "Imposto que pesa proporcionalmente mais no orçamento de quem ganha menos."
      },
      {
        "termo": "Guerra fiscal",
        "definicao": "Disputa entre estados que oferecem descontos de ICMS para atrair empresas."
      },
      {
        "termo": "Cashback",
        "definicao": "Devolução de parte do imposto pago para famílias de baixa renda, prevista na reforma."
      }
    ],
    "incertezas": [
      "Qual será a alíquota final. Ela depende de quantas exceções sobrarem e de quanto a arrecadação precisa render.",
      "Se os preços dos serviços vão subir na prática, ou se o crédito de imposto vai compensar parte do aumento.",
      "Se o ganho de crescimento estimado vai aparecer, já que ele depende de as empresas mudarem como produzem e investem."
    ],
    "fontes": [
      {
        "titulo": "Emenda Constitucional 132/2023",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm"
      },
      {
        "titulo": "Instituição Fiscal Independente (Senado): Estudo Especial 19, reforma tributária, contexto e impactos (2024)",
        "url": "https://www2.senado.leg.br/bdsf/bitstream/handle/id/647648/EE19_2024.pdf"
      }
    ],
    "leituras": [
      {
        "id": "insper-sete-mitos",
        "posicao": "favoravel",
        "instituicao": "Insper",
        "natureza": "Instituição de ensino e pesquisa privada",
        "tipo": "Estudo",
        "titulo": "Sete mitos sobre a reforma tributária",
        "autores": "Marcos Lisboa, Marcos Mendes, Sérgio Gobetti (Ipea) e Breno Vasconcelos",
        "data": "fev. 2021",
        "formato": "PDF",
        "url": "https://repositorio-api.insper.edu.br/server/api/core/bitstreams/589ed23a-b017-4878-a04f-8ee49ffe030e/content",
        "tese": "Responde às sete críticas mais comuns ao IVA, como a de que ele seria regressivo ou prejudicaria estados pobres, e argumenta que todas estão erradas.",
        "premissas": [
          "Isenções setoriais distorcem mais a economia do que protegem os mais pobres.",
          "A devolução de imposto às famílias pobres funcionaria melhor que descontos em produtos."
        ],
        "pergunte": [
          "O texto é de 2021. Quanto das exceções aprovadas depois mudam a conclusão?"
        ]
      },
      {
        "id": "ipea-impactos",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Fundação pública ligada ao governo federal",
        "tipo": "Carta de Conjuntura",
        "titulo": "Propostas de reforma tributária e seus impactos: uma avaliação comparativa",
        "autores": "João Maria de Oliveira",
        "data": "06/07/2023",
        "formato": "PDF",
        "url": "https://www.ipea.gov.br/cartadeconjuntura/wp-content/uploads/2023/07/230706_cc_60_nota_01_reforma_tributaria.pdf",
        "tese": "Todas as versões da reforma aumentam o PIB, a produtividade e o emprego. A versão mais próxima da aprovada ganha menos que a original, porque mantém exceções, mas reduz perdas regionais e setoriais.",
        "numero": {
          "valor": "+2,39%",
          "legenda": "no PIB ao fim da transição, na versão que serviu de base ao texto aprovado (+5,75% na proposta original)"
        },
        "premissas": [
          "O modelo assume que a economia se reorganiza conforme os novos preços relativos."
        ],
        "pergunte": [
          "Por que as exceções reduzem tanto o ganho? Quem se beneficia delas?"
        ]
      },
      {
        "id": "cnc-servicos",
        "posicao": "contrario",
        "instituicao": "CNC",
        "natureza": "Entidade que representa empresas do comércio, serviços e turismo",
        "tipo": "Estudo",
        "titulo": "Tributação de serviços na reforma tributária",
        "autores": "Confederação Nacional do Comércio",
        "data": "16/02/2023",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2023/02/cnc-estudo-tributacao-servicos.pdf",
        "tese": "Com um IVA de 25%, a carga sobre os serviços subiria muito, porque o setor usa muita mão de obra e tem pouco imposto a abater. Isso desestimularia contratações e encareceria serviços.",
        "numero": {
          "valor": "até +188%",
          "legenda": "na carga de tributos de alguns serviços; média de +84% em 30 segmentos"
        },
        "premissas": [
          "A alíquota seria de 25% sem tratamento diferenciado para serviços.",
          "Todo o aumento seria repassado aos preços."
        ],
        "pergunte": [
          "O texto aprovado criou regimes especiais para vários serviços. Quanto isso muda os números?"
        ]
      },
      {
        "id": "ufjf-justica-fiscal",
        "posicao": "contrario",
        "instituicao": "UFJF",
        "natureza": "Universidade pública (trabalho de conclusão de curso da Faculdade de Direito)",
        "tipo": "Trabalho acadêmico",
        "titulo": "Reforma tributária e justiça fiscal à luz do Estado social",
        "autores": "Caio Vinícius Ribeiro Guimarães, orientado por Elizabete Rosa de Mello",
        "data": "2020",
        "formato": "PDF",
        "url": "https://repositorio.ufjf.br/jspui/bitstream/ufjf/12467/1/caioviniciusribeiroguimaraes.pdf",
        "tese": "O sistema brasileiro cobra sobretudo do consumo, e não da renda e do patrimônio. As propostas de reforma discutidas não resolvem essa injustiça e por isso não bastam para os objetivos do Estado social.",
        "premissas": [
          "Justiça fiscal exige tributar mais a renda e o patrimônio, e não só simplificar o consumo."
        ],
        "pergunte": [
          "Simplificar o consumo e tributar mais a renda são caminhos opostos ou complementares?",
          "O trabalho é anterior à emenda de 2023. O que ele diria do texto final?"
        ]
      },
      {
        "id": "ufpe-distributivo",
        "posicao": "favoravel",
        "instituicao": "UFPE e Fiocruz",
        "natureza": "Universidade pública e fundação pública de pesquisa",
        "tipo": "Artigo",
        "titulo": "Impacto distributivo potencial de reformas na tributação indireta no Brasil: simulações baseadas na PEC 45/2019",
        "autores": "Rozane Bezerra de Siqueira e José Ricardo Bezerra Nogueira (UFPE) e Carlos Feitosa Luna (Fiocruz)",
        "data": "04/2024",
        "formato": "PDF",
        "url": "https://arxiv.org/pdf/2404.07651",
        "tese": "Trocar os tributos atuais por um IVA torna o sistema um pouco menos injusto com os mais pobres. O efeito é modesto, e seria maior sem tantas alíquotas reduzidas, que beneficiam mais os ricos do que os pobres.",
        "numero": {
          "valor": "26%",
          "legenda": "do benefício da cesta básica isenta vai para os 20% mais ricos; menos de 16% para os 20% mais pobres"
        },
        "premissas": [
          "As famílias não mudam o consumo por causa dos impostos.",
          "As simulações aproximam a lei, que ainda dependia de regulamentação."
        ],
        "pergunte": [
          "Se o efeito é modesto, a reforma deve ser julgada pela justiça social ou pela eficiência?"
        ]
      },
      {
        "id": "anfip-fenafisco",
        "posicao": "contrario",
        "instituicao": "Anfip e Fenafisco (coordenação na Unicamp)",
        "natureza": "Associações de auditores fiscais, com estudo coordenado por professor da Unicamp",
        "tipo": "Estudo",
        "titulo": "A reforma tributária necessária: justiça fiscal é possível",
        "autores": "Eduardo Fagnani (Unicamp), organizador, com mais de 40 especialistas",
        "data": "2018",
        "formato": "PDF",
        "url": "https://static.congressoemfoco.com.br/2019/09/Livros_17_10_2018_19_49_54.pdf",
        "tese": "Simplificar os impostos sobre o consumo não basta. O Brasil tributa pouco a renda e o patrimônio e muito o consumo, e só uma reforma que mude esse peso reduziria a desigualdade.",
        "numero": {
          "valor": "49,7%",
          "legenda": "da arrecadação vem do consumo no Brasil, contra 32,4% na média da OCDE"
        },
        "premissas": [
          "A carga total pode ficar igual, mudando só quem paga.",
          "Tributar mais a renda alta não prejudica o crescimento."
        ],
        "pergunte": [
          "O estudo é anterior à reforma aprovada. A isenção do IR até R$ 5 mil, de 2025, vai na direção que ele defende?"
        ]
      }
    ],
    "videos": [
      {
        "id": "XKXSNKXxsUo",
        "titulo": "O que muda com a reforma tributária? Entenda com Bernard Appy",
        "canal": "Valor Econômico",
        "nota": "O principal formulador da reforma explica o novo sistema.",
        "duracao": "1:39:11"
      },
      {
        "id": "VssJp5eDXsI",
        "titulo": "Setor de serviços será mais impactado pela nova reforma tributária, diz especialista",
        "canal": "CNN Brasil Money",
        "nota": "Por que serviços tendem a pagar mais imposto."
      },
      {
        "id": "cXXZE8-6rFQ",
        "titulo": "Livro reúne críticas e aponta riscos na reforma tributária",
        "canal": "Band Jornalismo",
        "nota": "Reportagem sobre as críticas de tributaristas ao texto aprovado."
      },
      {
        "id": "LM7bFbphX_I",
        "titulo": "A maior reforma tributária da história, com Fernando Haddad",
        "canal": "Cortes do Flow",
        "nota": "O ministro da Fazenda defende a reforma no Flow.",
        "duracao": "6:38"
      },
      {
        "id": "hBKfSw-zcdY",
        "titulo": "O que não te contaram sobre a reforma tributária no Brasil",
        "canal": "Cortes do Flow",
        "nota": "Os pontos da reforma que pesam no bolso de quem consome.",
        "duracao": "8:26"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/reforma-tributaria.jpg",
      "autor": "Isack Ryuji Minowa",
      "licenca": "CC BY-SA 3.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/3.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Feira_livre_de_s%C3%A1bado_em_Jaguari%C3%BAna_-_2011-09-09_-_Isack_-_panoramio.jpg",
      "legenda": "Feira livre em Jaguariúna (SP).",
      "alt": "Feirantes e clientes numa feira livre com bancas de frutas",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "maioridade-penal",
    "titulo": "Maioridade penal",
    "categoria": "seguranca",
    "tags": [
      "ECA",
      "adolescentes",
      "crime",
      "PEC 171",
      "imputabilidade",
      "medidas socioeducativas"
    ],
    "pergunta": "A maioridade penal deve cair para 16 anos?",
    "resumo": "Hoje, menores de 18 anos não respondem ao Código Penal e cumprem medidas do ECA. Propostas no Congresso querem baixar esse limite para 16 anos em crimes graves.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor da redução",
      "contrario": "Contra a redução"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "O artigo 228 da Constituição diz que menores de 18 anos são penalmente inimputáveis. Isso não significa que fiquem sem punição: quem comete um ato infracional responde pelo Estatuto da Criança e do Adolescente (ECA), de 1990.",
        "O ECA prevê medidas socioeducativas, da advertência à internação. A internação, a mais dura, dura no máximo três anos, e o jovem precisa ser liberado aos 21.",
        "Em 2015, a Câmara aprovou a PEC 171/1993, que reduz a maioridade para 16 anos em crimes hediondos, homicídio doloso e lesão corporal seguida de morte. O texto foi para o Senado e não foi votado em definitivo.",
        "Há também uma discussão jurídica: parte dos juristas considera o artigo 228 uma cláusula pétrea, que não poderia ser mudada por emenda. Outra parte discorda."
      ],
      "fatos": [
        {
          "rotulo": "Maioridade penal hoje",
          "valor": "18 anos"
        },
        {
          "rotulo": "Proposta da PEC 171",
          "valor": "16 anos"
        },
        {
          "rotulo": "Internação máxima (ECA)",
          "valor": "3 anos"
        },
        {
          "rotulo": "Crimes graves entre atos de internos (2013)",
          "valor": "12,7%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Responsabilidade",
        "favoravel": "Jovens de 16 e 17 anos entendem o que fazem. Pela proporcionalidade, quem comete crime hediondo deveria responder como adulto. (A1)",
        "contrario": "Adolescentes respondem por 0,5% a 2% dos homicídios ou crimes hediondos e são sobretudo vítimas. O caminho seria cumprir o ECA e investir em prevenção. (B3)",
        "fonte_favoravel": "mprj-capez",
        "fonte_contrario": "sbp-2026"
      },
      {
        "tema": "Efeito na violência",
        "favoravel": "Para o relator da PEC, jovens de 16 e 17 anos cometem crimes tão graves quanto adultos, e punição maior desestimula o crime. (A3)",
        "contrario": "Comparando 197 países, não aparece relação entre idade penal mais baixa e menos violência. Se há alguma, é a contrária. (B2)",
        "fonte_favoravel": "camara-pec-32-2015",
        "fonte_contrario": "ufpe-comparado"
      },
      {
        "tema": "Impunidade",
        "favoravel": "Em vez de baixar a idade para todos, o Ministério Público poderia pedir, caso a caso, que jovens de 16 e 17 anos respondam como adultos em crimes graves. (A2)",
        "contrario": "A impunidade é um mito: o ECA já responsabiliza o adolescente, e a internação é usada até mais do que a lei prevê. (B1)",
        "fonte_favoravel": "senado-pec-33-2012",
        "fonte_contrario": "ipea-adolescente"
      }
    ],
    "glossario": [
      {
        "termo": "Inimputável",
        "definicao": "Quem não pode ser responsabilizado pelo Código Penal. É o caso de menores de 18 anos."
      },
      {
        "termo": "Ato infracional",
        "definicao": "Conduta de um adolescente que, se fosse cometida por adulto, seria crime."
      },
      {
        "termo": "Medida socioeducativa",
        "definicao": "Resposta prevista no ECA ao ato infracional: advertência, prestação de serviços, liberdade assistida, semiliberdade ou internação."
      },
      {
        "termo": "Crime hediondo",
        "definicao": "Crime considerado de extrema gravidade pela Lei 8.072/1990, como latrocínio e estupro, com regras mais duras."
      },
      {
        "termo": "Cláusula pétrea",
        "definicao": "Parte da Constituição que não pode ser abolida nem por emenda, como os direitos e garantias individuais."
      }
    ],
    "incertezas": [
      "Se reduzir a maioridade diminuiria a violência no Brasil. Os estudos comparados entre países mostram correlações, não causa e efeito.",
      "Se o Supremo aceitaria a mudança, já que a discussão sobre cláusula pétrea nunca foi decidida.",
      "Onde os jovens condenados cumpririam pena, diante da superlotação do sistema prisional."
    ],
    "fontes": [
      {
        "titulo": "Constituição Federal, art. 228",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
      },
      {
        "titulo": "Estatuto da Criança e do Adolescente (Lei 8.069/1990)",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm"
      },
      {
        "titulo": "Câmara dos Deputados, Consultoria Legislativa: texto base com os argumentos dos dois lados (2013)",
        "url": "https://www2.camara.leg.br/atividade-legislativa/estudos-e-notas-tecnicas/fiquePorDentro/temas/maioridade-penal/texto-base-da-conle-pdf"
      },
      {
        "titulo": "Poder360: CCJ aprova redução da maioridade penal de 18 para 16 anos (10/06/2026)",
        "url": "https://www.poder360.com.br/poder-congresso/ccj-aprova-reducao-da-maioridade-penal-de-18-para-16-anos/"
      }
    ],
    "leituras": [
      {
        "id": "mprj-capez",
        "posicao": "favoravel",
        "instituicao": "Ministério Público do RJ",
        "natureza": "Revista do Ministério Público do Rio de Janeiro (artigo assinado)",
        "tipo": "Artigo",
        "titulo": "A questão da diminuição da maioridade penal",
        "autores": "Fernando Capez, mestre em Direito Penal pela USP e então promotor de justiça licenciado",
        "data": "2007",
        "formato": "PDF",
        "url": "https://www.mprj.mp.br/documents/20184/2740997/Fernando_Capez.pdf",
        "tese": "Jovens de 16 e 17 anos têm plena capacidade de entender o que fazem. Pela proporcionalidade, quem comete crime hediondo deveria responder como adulto. Como alternativa, propõe ampliar o tempo de internação.",
        "premissas": [
          "Entender que algo é errado basta para responder como adulto.",
          "Penas mais duras desestimulam crimes."
        ],
        "pergunte": [
          "O autor era deputado estadual quando escreveu. Isso muda como você lê o texto?",
          "Que dados mostram que punir mais cedo reduz crimes?"
        ]
      },
      {
        "id": "ipea-adolescente",
        "posicao": "contrario",
        "instituicao": "Ipea",
        "natureza": "Fundação pública ligada ao governo federal",
        "tipo": "Nota técnica",
        "titulo": "O adolescente em conflito com a lei e o debate sobre a redução da maioridade penal: esclarecimentos necessários",
        "autores": "Enid Rocha Andrade da Silva e Raissa Menezes de Oliveira",
        "data": "2015",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstreams/183ecbc0-950a-4d5d-b3fd-1372f48f1644/download",
        "tese": "A ideia de impunidade é um mito: o ECA já responsabiliza o adolescente, e a internação é usada até mais do que a lei prevê. A redução não ataca as causas da violência juvenil, ligadas à pobreza e à falta de escola.",
        "numero": {
          "valor": "12,7%",
          "legenda": "dos atos dos adolescentes internados em 2013 eram crimes graves contra a vida ou a pessoa; furto, roubo e tráfico somavam 67%"
        },
        "premissas": [
          "Atacar as causas sociais reduz mais a violência do que punir mais cedo."
        ],
        "pergunte": [
          "Os dados são de 2013. O perfil mudou desde então?"
        ]
      },
      {
        "id": "ufpe-comparado",
        "posicao": "contrario",
        "instituicao": "UFPE",
        "natureza": "Artigo acadêmico revisado por pares (revista Opinião Pública, Unicamp)",
        "tipo": "Artigo acadêmico",
        "titulo": "A redução da maioridade penal diminui a violência? Evidências de um estudo comparado",
        "autores": "Rodrigo Lins, Dalson Figueiredo Filho e Lucas Silva",
        "data": "2016",
        "formato": "Página",
        "url": "https://www.scielo.br/j/op/a/bhwWJbhzNBSrHN8ssQVdWmm/?lang=pt",
        "tese": "Comparando 197 países, os autores não encontram relação entre maioridade penal mais baixa e menos violência. Se há alguma relação, é a contrária: onde a idade é menor, a violência tende a ser maior.",
        "numero": {
          "valor": "197",
          "legenda": "países comparados"
        },
        "premissas": [
          "Comparar países ajuda a prever o efeito de uma mudança dentro do Brasil."
        ],
        "pergunte": [
          "Os próprios autores dizem que vários resultados não são estatisticamente significativos. O que isso permite concluir?"
        ]
      },
      {
        "id": "senado-pec-33-2012",
        "posicao": "favoravel",
        "instituicao": "Senado Federal",
        "natureza": "Proposta legislativa (PEC 33/2012, de Aloysio Nunes, PSDB-SP)",
        "tipo": "Proposta de emenda",
        "titulo": "PEC 33/2012: desconsideração da inimputabilidade de jovens de 16 e 17 anos",
        "autores": "Senador Aloysio Nunes Ferreira e outros",
        "data": "2012",
        "formato": "Página",
        "url": "https://www12.senado.leg.br/ecidadania/visualizacaomateria?id=106330",
        "tese": "Em vez de baixar a maioridade para todos, a proposta deixa o Ministério Público pedir que jovens de 16 e 17 anos respondam como adultos em casos graves, definidos em lei. A ideia é punir crimes violentos sem mudar a regra geral.",
        "numero": {
          "valor": "81%",
          "legenda": "de apoio na consulta pública do Senado (12.303 sim e 2.881 não)"
        },
        "premissas": [
          "Jovens de 16 e 17 anos podem ter discernimento para crimes graves.",
          "A análise caso a caso evita punir todos os adolescentes do mesmo jeito."
        ],
        "pergunte": [
          "Consulta pública do Senado mede opinião de quem votou no site, não da população. O que ela permite concluir?",
          "Quem decidiria se o jovem tem maturidade, e com que critério?"
        ]
      },
      {
        "id": "camara-pec-32-2015",
        "posicao": "favoravel",
        "instituicao": "Câmara dos Deputados",
        "natureza": "Parecer aprovado na Comissão de Constituição e Justiça",
        "tipo": "Documento legislativo",
        "titulo": "PEC 32/2015: redução da maioridade penal para 16 anos (parecer da CCJ)",
        "autores": "Relator: deputado Coronel Assis (PL-MT)",
        "data": "10/06/2026",
        "formato": "Página",
        "url": "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=1228863",
        "tese": "Jovens de 16 e 17 anos cometem crimes tão graves quanto adultos e devem responder como adultos. A CCJ aprovou a admissibilidade da proposta por 44 votos a 18, e o relator citou pesquisa em que 90% apoiam a redução.",
        "numero": {
          "valor": "44 a 18",
          "legenda": "placar da aprovação na CCJ da Câmara em junho de 2026"
        },
        "premissas": [
          "Punição maior desestimula o crime.",
          "A opinião majoritária da população deve orientar a lei."
        ],
        "pergunte": [
          "O parecer apresenta dados sobre o efeito da redução no crime, ou só sobre a opinião pública?",
          "A maioridade penal é cláusula pétrea? Esse é um dos pontos em disputa."
        ]
      },
      {
        "id": "sbp-2026",
        "posicao": "contrario",
        "instituicao": "Sociedade Brasileira de Pediatria",
        "natureza": "Entidade médica",
        "tipo": "Posicionamento",
        "titulo": "Posicionamento da SBP sobre a PEC para redução da maioridade penal",
        "autores": "Sociedade Brasileira de Pediatria",
        "data": "10/08/2026",
        "formato": "PDF",
        "url": "https://www.sbp.com.br/wp-content/uploads/2026/08/PEC-DIMINUICAO-DA-IDADE-PENALPOSICIONAMENTO-DA-SOCIEDADE-BRASILEIRA-DE-PEDIATRIA-1-1.pdf",
        "tese": "Não há evidência consistente de que reduzir a idade penal diminua a criminalidade juvenil. Adolescentes respondem por uma parcela pequena dos homicídios e são, sobretudo, vítimas. O caminho seria cumprir o ECA e investir em prevenção.",
        "numero": {
          "valor": "0,5% a 2%",
          "legenda": "dos homicídios ou crimes hediondos atribuídos a menores de 18 anos, conforme a metodologia"
        },
        "premissas": [
          "Adolescentes ainda estão em desenvolvimento e respondem melhor a medidas educativas.",
          "A experiência internacional serve de referência para o Brasil."
        ],
        "pergunte": [
          "A própria SBP diz que não há dados consensuais no Brasil. Isso enfraquece os dois lados?"
        ]
      }
    ],
    "videos": [
      {
        "id": "vZINcut0CrM",
        "titulo": "Argumento: redução da maioridade penal, com Sérgio Souza",
        "canal": "TV Senado",
        "nota": "Parlamentar explica por que defende a mudança."
      },
      {
        "id": "BmpWjuXtVZA",
        "titulo": "Redução da maioridade penal",
        "canal": "Drauzio Varella",
        "nota": "O médico, que atendeu por anos em presídios, fala dos efeitos da prisão em jovens.",
        "duracao": "2:38"
      },
      {
        "id": "sTi55E33SSg",
        "titulo": "Maioridade penal não diminui violência, mas reduziria a percepção de impunidade, diz ex-Bope",
        "canal": "UOL",
        "nota": "Ex-policial do Bope avalia o efeito real da medida sobre o crime."
      },
      {
        "id": "Fc-ffSyxZcA",
        "titulo": "Derrite sobre redução da maioridade penal: “Sou 100% favorável”",
        "canal": "Jovem Pan News",
        "nota": "O ex-secretário de Segurança de SP defende a redução.",
        "duracao": "2:29"
      },
      {
        "id": "xOlbW1o44R4",
        "titulo": "Liberação de armas e maioridade penal no Brasil, com Reinaldo Azevedo",
        "canal": "Cortes do Flow",
        "nota": "O jornalista explica por que é contra reduzir a maioridade.",
        "duracao": "15:07"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/maioridade-penal.jpg",
      "autor": "Fabio Rodrigues Pozzebom/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:FRP-MaioridadePenal-20150701-15.jpg",
      "legenda": "Votação da PEC da maioridade penal na Câmara, julho de 2015.",
      "alt": "Deputados no plenário da Câmara erguendo cartazes durante a votação",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "tarifa-zero",
    "titulo": "Tarifa zero no transporte",
    "categoria": "cidades",
    "tags": [
      "transporte público",
      "ônibus",
      "passe livre",
      "mobilidade urbana",
      "SUS do transporte",
      "vale-transporte"
    ],
    "pergunta": "O ônibus deve ser de graça para todo mundo?",
    "resumo": "Mais de 140 cidades já não cobram passagem de ônibus, e o governo federal estuda um programa nacional. A dúvida é quem paga a conta e se o serviço aguenta mais passageiros.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor da tarifa zero",
      "contrario": "Críticas à tarifa zero"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "No modelo mais comum no Brasil, quem paga o ônibus é o passageiro: a tarifa cobre a maior parte do custo do sistema. Quando a passagem sobe, parte das pessoas deixa de usar o ônibus, a receita cai e a tarifa sobe de novo.",
        "A tarifa zero inverte essa lógica: o transporte passa a ser pago por impostos, taxas cobradas de empresas ou outras fontes, como acontece com a saúde e a educação públicas. Segundo a NTU, que reúne as empresas de ônibus, 143 municípios tinham tarifa zero universal em junho de 2026, quase todos de pequeno e médio porte.",
        "O governo federal encomendou ao Ministério da Fazenda um estudo sobre um programa nacional, apelidado de “SUS do transporte”. Uma das ideias em discussão é trocar o vale-transporte por uma contribuição paga pelas empresas.",
        "O debate gira em torno de três perguntas: quanto custa, quem paga e se a qualidade se mantém quando mais gente passa a andar de ônibus. Oito cidades já voltaram atrás, segundo a mesma pesquisa da NTU."
      ],
      "fatos": [
        {
          "rotulo": "Cidades com tarifa zero",
          "valor": "143"
        },
        {
          "rotulo": "Custo anual dos ônibus urbanos (NTU)",
          "valor": "R$ 75,7 bi"
        },
        {
          "rotulo": "Custo com tarifa zero no país (NTU)",
          "valor": "R$ 90,7 bi"
        },
        {
          "rotulo": "Cidades que desistiram",
          "valor": "8"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Renda",
        "favoravel": "Com tarifa zero nas 27 capitais e regiões metropolitanas, R$ 45,6 bilhões por ano ficariam no bolso da população. (A1)",
        "contrario": "O próprio Ministério das Cidades prefere primeiro baratear a passagem e melhorar o serviço. A tarifa zero nacional custaria cerca de R$ 57 bilhões por ano. (B3)",
        "fonte_favoravel": "unb-distribuicao-renda",
        "fonte_contrario": "semob-modicidade"
      },
      {
        "tema": "Quem paga",
        "favoravel": "Pagar as empresas pelo custo do serviço, e não por passageiro, e financiar o sistema com impostos progressivos, como se faz com a coleta de lixo. (A2)",
        "contrario": "Em Belo Horizonte, a taxa sobre as empresas não cobriria o custo, e até 19,4% do orçamento da prefeitura ficaria comprometido. (B1)",
        "fonte_favoravel": "unicamp-gregori",
        "fonte_contrario": "fiemg-bh"
      },
      {
        "tema": "Escala",
        "favoravel": "Em Paris, a passagem já cobre só cerca de um terço do custo. Como a vacina, o transporte pode ser pago por todos via impostos. (A3)",
        "contrario": "A gratuidade avança quase só em cidades pequenas, e oito já desistiram. No país todo, exigiria 20% mais ônibus e R$ 15 bilhões a mais por ano. (B2)",
        "fonte_favoravel": "usp-zilbovicius",
        "fonte_contrario": "ntu-2026"
      }
    ],
    "glossario": [
      {
        "termo": "Tarifa zero universal",
        "definicao": "Quando ninguém paga passagem, em todos os horários. É diferente de gratuidades parciais, como a dos idosos ou a de domingo."
      },
      {
        "termo": "Vale-transporte",
        "definicao": "Benefício pago pelo empregador para o deslocamento do trabalhador, que pode ter até 6% do salário descontado."
      },
      {
        "termo": "Subsídio",
        "definicao": "Dinheiro público que cobre parte do custo de um serviço para baixar o preço para o usuário."
      },
      {
        "termo": "Remuneração por passageiro",
        "definicao": "Modelo em que a empresa de ônibus ganha conforme o número de passageiros pagantes. É o mais usado no Brasil."
      },
      {
        "termo": "NTU",
        "definicao": "Associação Nacional das Empresas de Transportes Urbanos, que representa as operadoras de ônibus."
      }
    ],
    "incertezas": [
      "Se a demanda aumenta muito com a gratuidade e quanto isso encarece o sistema.",
      "Se a cobrança das empresas no lugar do vale-transporte seria suficiente, e como ela afetaria o emprego formal.",
      "Se a experiência de cidades pequenas vale para capitais e regiões metropolitanas."
    ],
    "fontes": [
      {
        "titulo": "NTU: Pesquisa Temática Tarifa Zero 2026",
        "url": "https://www.ntu.org.br/publicacoes?title=Pesquisa%20Tem%C3%A1tica%20-%20Tarifa%20Zero%202026"
      },
      {
        "titulo": "Portal do Trânsito: tarifa zero perde fôlego, revela estudo da NTU (jun/2026)",
        "url": "https://www.portaldotransito.com.br/noticias/mobilidade-e-tecnologia/transporte-coletivo/tarifa-zero-no-transporte-publico-perde-folego-revela-estudo-da-ntu/"
      },
      {
        "titulo": "Diário do Transporte: Haddad deve entregar estudo da tarifa zero a Lula (fev/2026)",
        "url": "https://diariodotransporte.com.br/2026/02/23/tarifa-zero-haddad-deve-entregar-estudo-a-lula-antes-de-deixar-ministerio-em-abril-e-presidente-vai-usar-nome-sus-do-transporte-coletivo-como-propaganda-eleitoral/"
      }
    ],
    "leituras": [
      {
        "id": "unb-distribuicao-renda",
        "posicao": "favoravel",
        "instituicao": "UnB",
        "natureza": "Universidade pública (Instituto de Ciência Política, com pesquisador da UFRJ)",
        "tipo": "Estudo",
        "titulo": "A tarifa zero no transporte público como política de distribuição de renda",
        "autores": "Daniel Caribé, Gustavo Serafim, João Lucas Machado Campos, Juciano Martins Rodrigues, Paulo Henrique da Silva Santarém e Thiago Trindade",
        "data": "05/2026",
        "formato": "PDF",
        "url": "https://tarifazero.unb.br/wp-content/uploads/2026/05/TARIFA-ZERO-maio.pdf",
        "tese": "A tarifa zero deve ser vista como política de renda, além de política de mobilidade. A passagem exclui pessoas do trabalho, da escola e da saúde, e o dinheiro que deixa de ir para a catraca volta para a economia.",
        "numero": {
          "valor": "R$ 45,6 bi",
          "legenda": "por ano a mais no bolso da população com tarifa zero nas 27 capitais e regiões metropolitanas"
        },
        "premissas": [
          "O transporte é um direito social, como saúde e educação.",
          "O custo pode ser coberto por fontes fora da tarifa sem prejudicar a economia."
        ],
        "pergunte": [
          "O estudo calcula o dinheiro que fica com as famílias. Quanto custaria para quem vai pagar a conta?",
          "O que acontece com a qualidade se a demanda crescer muito?"
        ]
      },
      {
        "id": "unicamp-gregori",
        "posicao": "favoravel",
        "instituicao": "Unicamp",
        "natureza": "Universidade pública (Instituto de Economia), em revista acadêmica",
        "tipo": "Entrevista acadêmica",
        "titulo": "Mobilidade urbana e direito à cidade: uma entrevista com Lúcio Gregori sobre transporte coletivo e tarifa zero",
        "autores": "Mariana Fix, Giovani Espíndola Ribeiro e André Doca Prado (Revista Brasileira de Estudos Urbanos e Regionais)",
        "data": "2015",
        "formato": "PDF",
        "url": "https://www.redalyc.org/pdf/5139/513951514011.pdf",
        "tese": "O ex-secretário que propôs a tarifa zero em São Paulo nos anos 1990 explica a ideia: pagar as empresas pelo custo do serviço, e não por passageiro, e financiar o transporte com impostos progressivos, como se faz com a coleta de lixo.",
        "premissas": [
          "O modelo de pagamento por passageiro cria um ciclo de tarifa alta e serviço ruim.",
          "Impostos sobre patrimônio e veículos podem bancar o sistema."
        ],
        "pergunte": [
          "A proposta é de 1990. O que mudou no custo e no financiamento do transporte desde então?"
        ]
      },
      {
        "id": "fiemg-bh",
        "posicao": "contrario",
        "instituicao": "FIEMG",
        "natureza": "Federação que representa as indústrias de Minas Gerais",
        "tipo": "Estudo",
        "titulo": "Impactos econômicos decorrentes dos custos com a tarifa zero em Belo Horizonte",
        "autores": "Gerência de Economia e Finanças Empresariais da FIEMG",
        "data": "06/2025",
        "formato": "PDF",
        "url": "https://www.fiemg.com.br/wp-content/uploads/2025/10/ESTUDO-TARIFA-ZERO.pdf",
        "tese": "A taxa cobrada das empresas no projeto de BH não cobriria o custo do sistema, que tende a crescer com mais passageiros. A conta passaria para o setor produtivo e para o orçamento da prefeitura.",
        "numero": {
          "valor": "até 19,4%",
          "legenda": "do orçamento de BH de 2024 seria comprometido nos cenários de maior demanda"
        },
        "premissas": [
          "A demanda pelo ônibus cresce bastante com a gratuidade.",
          "O custo extra recai sobre as empresas e a prefeitura."
        ],
        "pergunte": [
          "A FIEMG representa quem pagaria a taxa. Como isso pesa na leitura do estudo?",
          "O estudo considera os ganhos, como menos trânsito, ou só os custos?"
        ]
      },
      {
        "id": "ntu-2026",
        "posicao": "contrario",
        "instituicao": "NTU",
        "natureza": "Associação que representa as empresas de ônibus urbano",
        "tipo": "Pesquisa",
        "titulo": "Pesquisa Temática: Tarifa Zero 2026",
        "autores": "Associação Nacional das Empresas de Transportes Urbanos",
        "data": "06/2026",
        "formato": "Página",
        "url": "https://www.ntu.org.br/publicacoes?title=Pesquisa%20Tem%C3%A1tica%20-%20Tarifa%20Zero%202026",
        "tese": "A tarifa zero avança devagar e quase só em cidades pequenas. Oito municípios já desistiram. Levar a gratuidade a todo o país exigiria ampliar a frota e aumentar bastante o custo do sistema.",
        "numero": {
          "valor": "+R$ 15 bi",
          "legenda": "por ano: de R$ 75,7 bi para R$ 90,7 bi, com 20% mais ônibus"
        },
        "premissas": [
          "Sem fonte de dinheiro estável, a gratuidade não se sustenta.",
          "Mais passageiros exigem mais ônibus."
        ],
        "pergunte": [
          "As empresas de ônibus ganham ou perdem com a tarifa zero? Depende de como serão pagas.",
          "Por que as oito cidades desistiram: falta de dinheiro ou outra razão?"
        ]
      },
      {
        "id": "usp-zilbovicius",
        "posicao": "favoravel",
        "instituicao": "USP",
        "natureza": "Universidade pública (Escola Politécnica), artigo no Jornal da USP",
        "tipo": "Artigo de opinião",
        "titulo": "Tarifa zero: viável, necessária, contra a exclusão social. Quem paga? Por que paga?",
        "autores": "Mauro Zilbovicius, professor da Escola Politécnica da USP",
        "data": "29/04/2024",
        "formato": "Página",
        "url": "https://jornal.usp.br/artigos/tarifa-zero-viavel-necessaria-contra-a-exclusao-social-quem-paga-por-que-paga/",
        "tese": "A tarifa é um mecanismo que exclui quem não pode pagar. Como saúde e vacina, o transporte deveria ser pago por todos via impostos. Em Paris, a passagem já cobre só cerca de um terço do custo.",
        "premissas": [
          "O transporte coletivo beneficia toda a cidade, inclusive quem não usa.",
          "Há fontes de dinheiro públicas suficientes para cobrir o sistema."
        ],
        "pergunte": [
          "Paris subsidia, mas não zera a tarifa. O exemplo apoia a tarifa zero ou só mais subsídio?"
        ]
      },
      {
        "id": "semob-modicidade",
        "posicao": "contrario",
        "instituicao": "Ministério das Cidades",
        "natureza": "Governo federal (Secretaria Nacional de Mobilidade Urbana)",
        "tipo": "Declaração",
        "titulo": "Antes de tarifa zero, é necessário buscar modicidade tarifária, defende secretário nacional de mobilidade",
        "autores": "Denis Eduardo Andia, secretário nacional de Mobilidade Urbana (reportagem do Diário do Transporte)",
        "data": "05/11/2025",
        "formato": "Página",
        "url": "https://diariodotransporte.com.br/2025/11/05/antes-de-tarifa-zero-e-necessario-buscar-modicidade-tarifaria-defende-secretario-nacional-de-mobilidade-do-governo-lula/",
        "tese": "Até dentro do governo há cautela: o secretário defende primeiro baratear a passagem e melhorar o serviço, com financiamento federal permanente, antes de falar em tarifa zero nacional.",
        "numero": {
          "valor": "R$ 57 bi",
          "legenda": "por ano para tarifa zero todos os dias no país, segundo estimativa da XP citada na reportagem"
        },
        "premissas": [
          "Não há dinheiro garantido no orçamento federal para zerar a tarifa.",
          "Qualidade do serviço importa tanto quanto o preço."
        ],
        "pergunte": [
          "Baratear aos poucos é um caminho para a tarifa zero ou uma alternativa a ela?"
        ]
      }
    ],
    "videos": [
      {
        "id": "g4Rgqyx4fro",
        "titulo": "Lúcio Gregori fala sobre a tarifa zero",
        "canal": "Coletivo Maruim",
        "nota": "O ex-secretário que criou a proposta em São Paulo explica a ideia."
      },
      {
        "id": "7idbokYAhR4",
        "titulo": "Tarifa zero: quais são os custos do transporte?",
        "canal": "Rádio BandNews FM",
        "nota": "Quanto custa o sistema e quem teria de pagar.",
        "duracao": "3:46"
      },
      {
        "id": "6KERqXKCzkA",
        "titulo": "Vantagens e desvantagens da tarifa zero",
        "canal": "Via Trolebus",
        "nota": "Mostra os riscos: lotação, queda de qualidade e dependência do orçamento.",
        "duracao": "7:31"
      },
      {
        "id": "dB9252ZQwew",
        "titulo": "Tarifa zero pode beneficiar pessoas de baixa renda e desempregados",
        "canal": "Rádio Bandeirantes",
        "nota": "Quem mais ganha com o ônibus de graça.",
        "duracao": "3:34"
      },
      {
        "id": "qVxj49bdrbU",
        "titulo": "Secretário municipal explica por que projeto de tarifa zero foi rejeitado na Câmara de BH",
        "canal": "Itatiaia",
        "nota": "Os motivos financeiros que barraram a proposta em Belo Horizonte."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/tarifa-zero.jpg",
      "autor": "Gabriel Fernandes",
      "licenca": "CC BY-SA 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Ato_pela_tarifa_zero_(14275132479).jpg",
      "legenda": "Ato pela tarifa zero em São Paulo, junho de 2014.",
      "alt": "Manifestantes caminham por uma avenida de São Paulo",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "bolsa-familia",
    "titulo": "Bolsa Família",
    "categoria": "assistencia",
    "tags": [
      "transferência de renda",
      "pobreza",
      "Cadastro Único",
      "Auxílio Brasil",
      "mercado de trabalho",
      "porta de saída"
    ],
    "pergunta": "O Bolsa Família deve continuar como está?",
    "resumo": "O programa paga em média cerca de R$ 700 por mês a quase 19 milhões de famílias. O debate é se ele reduz a pobreza sem afastar as pessoas do trabalho.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor do modelo atual",
      "contrario": "Críticas ao modelo atual"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Criado em 2003, o Bolsa Família paga um valor mensal a famílias pobres inscritas no Cadastro Único. Em troca, as famílias precisam manter as crianças na escola e em dia com vacinas e consultas.",
        "Entre 2021 e 2022 o programa virou Auxílio Brasil e teve o piso elevado para R$ 600. Em 2023 voltou a se chamar Bolsa Família, com adicionais por criança. O custo subiu de cerca de R$ 35 bilhões por ano antes da pandemia para perto de R$ 170 bilhões.",
        "Em janeiro de 2026, segundo o governo, 18,8 milhões de famílias recebiam o benefício, com valor médio de R$ 697,77.",
        "Quase ninguém no debate público defende acabar com o programa. A disputa é sobre o desenho: se um valor maior tira as pessoas do mercado de trabalho, se faltam portas de saída e para quem o dinheiro deveria ir primeiro."
      ],
      "fatos": [
        {
          "rotulo": "Famílias atendidas (jan/2026)",
          "valor": "18,8 mi"
        },
        {
          "rotulo": "Valor médio",
          "valor": "R$ 698"
        },
        {
          "rotulo": "Piso por família",
          "valor": "R$ 600"
        },
        {
          "rotulo": "Criado em",
          "valor": "2003"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Resultado e foco",
        "favoravel": "Com menos de 0,5% do PIB, o programa reduziu a pobreza extrema em mais de 25% e respondeu por quase 10% da queda da desigualdade entre 2001 e 2015. (A1)",
        "contrario": "Em visitas a 2.662 famílias, o TCU viu que 22,5% não se enquadravam nas regras do programa. (B3)",
        "fonte_favoravel": "ipea-15-anos",
        "fonte_contrario": "tcu-cadunico"
      },
      {
        "tema": "Trabalho",
        "favoravel": "O aumento para R$ 600 reduziu a participação no trabalho em 2,2 a 4,7 pontos, sobretudo de quem estava desempregado ou em trabalho precário, sem efeito sobre a formalidade. (A2)",
        "contrario": "Quem passou a ter direito ao benefício reduziu em 11% a participação no mercado de trabalho, sobretudo homens jovens do Norte e Nordeste. (B1)",
        "fonte_favoravel": "ipea-nt-78",
        "fonte_contrario": "fgv-ibre-duque"
      },
      {
        "tema": "Efeito nas famílias",
        "favoravel": "64% dos jovens que recebiam o benefício em 2005 já não dependiam de programas federais em 2019. (A3)",
        "contrario": "As condicionalidades jogam sobre as mães todo o cuidado com os filhos, sem remuneração, e limitam a autonomia delas. (B2)",
        "fonte_favoravel": "imds-geracoes",
        "fonte_contrario": "ufjf-mulheres"
      }
    ],
    "glossario": [
      {
        "termo": "Transferência condicionada",
        "definicao": "Pagamento em dinheiro que exige contrapartidas, como frequência escolar e vacinação."
      },
      {
        "termo": "Cadastro Único",
        "definicao": "Registro do governo federal com as famílias de baixa renda. É a porta de entrada para o Bolsa Família e outros programas."
      },
      {
        "termo": "Regra de proteção",
        "definicao": "Permite que a família que aumenta a renda continue recebendo metade do benefício por um tempo, para não ter medo de perder o auxílio ao conseguir emprego."
      },
      {
        "termo": "Oferta de trabalho",
        "definicao": "Quantas pessoas estão trabalhando ou procurando trabalho, e quantas horas querem trabalhar."
      },
      {
        "termo": "Porta de saída",
        "definicao": "Políticas que ajudam a família a ganhar renda própria e deixar de precisar do benefício."
      }
    ],
    "incertezas": [
      "O tamanho real do efeito sobre o trabalho. Os estudos da FGV Ibre e do Ipea medem coisas parecidas e chegam a leituras diferentes.",
      "Quanto da saída do mercado de trabalho é desincentivo e quanto é fuga de empregos precários ou cuidado com a família.",
      "Qual o efeito de longo prazo sobre os filhos de beneficiários, em escolaridade e renda futura."
    ],
    "fontes": [
      {
        "titulo": "Conexão Tocantins: Bolsa Família chega a 18,77 milhões de beneficiários com valor médio de R$ 697,77 (jan/2026)",
        "url": "https://conexaoto.com.br/2026/01/19/bolsa-familia-chega-a-18-77-milhoes-de-beneficiarios-com-valor-medio-de-r-697-77"
      }
    ],
    "leituras": [
      {
        "id": "ipea-15-anos",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Texto para discussão",
        "titulo": "Os efeitos do Programa Bolsa Família sobre a pobreza e a desigualdade: um balanço dos primeiros quinze anos",
        "autores": "Pedro H. G. Ferreira de Souza, Rafael Guerreiro Osorio, Luis Henrique Paiva e Sergei Soares",
        "data": "2019",
        "formato": "PDF (resumo)",
        "url": "https://ipcig.org/sites/default/files/pub/pt-br/OP429PT_Os_efeitos_do_programa_Bolsa_Familia_sobre_a_pobreza_e_a_desigualdade.pdf",
        "tese": "Com menos de 0,5% do PIB, o programa reduziu a pobreza extrema em mais de 25% e respondeu por quase 10% da queda da desigualdade entre 2001 e 2015.",
        "numero": {
          "valor": "3,4 mi",
          "legenda": "de pessoas fora da extrema pobreza em 2017 por causa do programa"
        },
        "premissas": [
          "Compara a renda das famílias com e sem o benefício, sem medir efeitos sobre o trabalho."
        ],
        "pergunte": [
          "O estudo é anterior ao aumento do benefício. Os números valem para o programa de hoje, que custa quatro vezes mais?"
        ]
      },
      {
        "id": "ipea-nt-78",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Nota técnica",
        "titulo": "O efeito do aumento no valor das transferências de renda sobre a inserção dos beneficiários no mercado de trabalho",
        "autores": "Ricardo Campante Vale e Fábio Veras Soares",
        "data": "2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/10/NT_Dinte_78_O_Efeito_aumento_valor_transferencias_renda_Publicacao.pdf",
        "tese": "O aumento para R$ 600 reduziu um pouco a participação no mercado de trabalho, mas quem saiu estava sobretudo desempregado ou em trabalho precário, e muitas vezes eram mulheres cuidando dos filhos. Seria uma fuga da precariedade, não preguiça.",
        "numero": {
          "valor": "2,2 a 4,7 p.p.",
          "legenda": "de queda na participação no mercado de trabalho, sem efeito sobre a formalidade"
        },
        "premissas": [
          "Acompanha as mesmas pessoas ao longo do tempo na PNAD Contínua.",
          "Sair de um trabalho precário para cuidar da família não é necessariamente ruim."
        ],
        "pergunte": [
          "O estudo também encontra queda na participação. O que muda é a interpretação. Qual parece mais convincente?"
        ]
      },
      {
        "id": "fgv-ibre-duque",
        "posicao": "contrario",
        "instituicao": "FGV Ibre",
        "natureza": "Instituto privado de pesquisa econômica",
        "tipo": "Artigo",
        "titulo": "Bolsa Família ampliado reduz oferta de trabalho, mas pode ser aperfeiçoado",
        "autores": "Luiz Guilherme Schymura, sobre pesquisa de Daniel Duque (Carta do Ibre, Conjuntura Econômica)",
        "data": "13/08/2025",
        "formato": "Página",
        "url": "https://blogdoibre.fgv.br/node/2108",
        "tese": "O benefício ampliado reduziu a oferta de trabalho e o emprego formal entre homens, sobretudo jovens do Norte e Nordeste. O programa deveria ser redesenhado, com piso menor e mais dinheiro para mães de crianças pequenas e jovens que estudam.",
        "numero": {
          "valor": "-11%",
          "legenda": "na participação no mercado de trabalho de quem passou a ser elegível, frente aos não elegíveis"
        },
        "premissas": [
          "Usa a mudança de regra de 2023 como experimento natural.",
          "Menos gente procurando emprego é um custo para a economia."
        ],
        "pergunte": [
          "O efeito aparece entre homens e não entre mulheres. Por que essa diferença?",
          "A proposta é redesenhar, não cortar. Quem ganharia e quem perderia?"
        ]
      },
      {
        "id": "ufjf-mulheres",
        "posicao": "contrario",
        "instituicao": "UFJF",
        "natureza": "Universidade pública (mestrado em Psicologia)",
        "tipo": "Dissertação",
        "titulo": "O que cabe às mulheres no Programa Bolsa Família? Uma história de muitas Marias, Mahins, Marielles e Malês",
        "autores": "Camila Borges Machado",
        "data": "2019",
        "formato": "Página",
        "url": "https://repositorio.ufjf.br/jspui/handle/ufjf/10544",
        "tese": "Pesquisa com beneficiárias de um CRAS de Juiz de Fora. O programa ajuda as famílias e dá às mulheres mais voz em casa, mas as condicionalidades jogam sobre as mães todo o cuidado com os filhos, sem remuneração, e limitam a autonomia delas.",
        "premissas": [
          "Uma crítica pelo lado do desenho e do gênero, não contra a existência do programa.",
          "Estudo qualitativo, com grupo de 18 mulheres e quatro entrevistas."
        ],
        "pergunte": [
          "Como seria um programa que reduz a pobreza sem reforçar que cuidar é tarefa só da mãe?"
        ]
      },
      {
        "id": "imds-geracoes",
        "posicao": "favoravel",
        "instituicao": "Imds",
        "natureza": "Instituto privado de pesquisa sobre mobilidade social",
        "tipo": "Estudo",
        "titulo": "Primeiras gerações do Bolsa Família (versão acadêmica publicada na World Development Perspectives)",
        "autores": "Instituto Mobilidade e Desenvolvimento Social",
        "data": "08/2024",
        "formato": "Página",
        "url": "https://imdsbrasil.org/en/em_pauta/edition-51-project-first-generations-of-bolsa-familia-yields-scientific-publication-to-imds/",
        "tese": "Acompanhando crianças e jovens que recebiam o Bolsa Família em 2005, o estudo mostra que a maioria deixou de depender de programas sociais quando adulta. É um dado contra a ideia de dependência entre gerações.",
        "numero": {
          "valor": "64%",
          "legenda": "dos jovens beneficiários em 2005 já não dependiam de programas federais em 2019"
        },
        "premissas": [
          "Sair do Cadastro Único indica melhora de renda.",
          "O acompanhamento por registros administrativos capta bem a trajetória das pessoas."
        ],
        "pergunte": [
          "E os outros 36%? O que explica quem continuou no programa?"
        ]
      },
      {
        "id": "tcu-cadunico",
        "posicao": "contrario",
        "instituicao": "TCU",
        "natureza": "Tribunal de Contas da União, órgão de controle do Congresso",
        "tipo": "Auditoria",
        "titulo": "Auditoria aponta falhas no CadÚnico com prejuízo potencial de R$ 34 bilhões até dezembro",
        "autores": "Tribunal de Contas da União (Acórdão 2342/2023, Plenário)",
        "data": "22/11/2023",
        "formato": "Página",
        "url": "https://portal.tcu.gov.br/imprensa/noticias/auditoria-aponta-falhas-no-cadunico-com-prejuizo-potencial-de-r-34-bilhoes-ate-dezembro",
        "tese": "Visitas a 2.662 famílias mostraram que muitos cadastros têm renda ou composição familiar diferentes da realidade. O TCU estimou que uma parte grande dos pagamentos foi para quem não cumpria as regras.",
        "numero": {
          "valor": "22,5%",
          "legenda": "das famílias visitadas não se enquadravam nas regras do programa"
        },
        "premissas": [
          "A amostra representa o conjunto dos beneficiários.",
          "Diferença no cadastro indica pagamento indevido, e não apenas desatualização."
        ],
        "pergunte": [
          "Falhas no cadastro são um argumento contra o programa ou a favor de fiscalizar melhor?"
        ]
      }
    ],
    "videos": [
      {
        "id": "lMRUN7Kq_IQ",
        "titulo": "Bolsa Família deixa as pessoas preguiçosas? A verdade baseada em estudos",
        "canal": "Daniel Martins de Barros",
        "nota": "Psiquiatra revisa o que as pesquisas dizem sobre trabalho e benefício.",
        "duracao": "8:55"
      },
      {
        "id": "KwBEofa-xBE",
        "titulo": "Luciano Huck x Bolsa Família: estudos desmentem falas sobre dependência",
        "canal": "UOL",
        "nota": "O que as pesquisas dizem sobre a dependência do programa.",
        "duracao": "12:53"
      },
      {
        "id": "Q2vYC_GRjHs",
        "titulo": "Economista critica tese de que Bolsa Família afasta pessoas do trabalho",
        "canal": "VEJA+",
        "nota": "Economista contesta a ideia de que o benefício desestimula o emprego."
      },
      {
        "id": "sYCPsoAHpMI",
        "titulo": "Paulo Rabello de Castro analisa impacto do Bolsa Família no mercado de trabalho",
        "canal": "Rádio Bandeirantes",
        "nota": "O ex-presidente do IBGE e do BNDES discute os efeitos sobre o emprego.",
        "duracao": "6:56"
      },
      {
        "id": "ObiyT9Bt9bk",
        "titulo": "Bolsa Família ainda busca eficiência e porta de saída",
        "canal": "CNN Brasil",
        "nota": "Os desafios de focalizar o programa e ajudar as famílias a sair dele.",
        "duracao": "5:16"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/bolsa-familia.jpg",
      "autor": "Ministério do Desenvolvimento Social",
      "licenca": "CC BY-SA 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Bolsa_Fam%C3%ADlia_(16262553222).jpg",
      "legenda": "Beneficiária do Bolsa Família em Mâncio Lima (AC), 2014.",
      "alt": "Mulher sorri segurando o cartão do Bolsa Família",
      "posicao": "50% 30%"
    }
  },
  {
    "id": "armas",
    "titulo": "Acesso a armas de fogo",
    "categoria": "seguranca",
    "tags": [
      "Estatuto do Desarmamento",
      "posse",
      "porte",
      "CAC",
      "legítima defesa",
      "violência",
      "referendo de 2005"
    ],
    "pergunta": "Deve ficar mais fácil para o cidadão comum ter e portar uma arma?",
    "resumo": "Entre 2019 e 2022 as regras para comprar armas foram afrouxadas, e em 2023 voltaram a ser apertadas. A dúvida é se armas nas mãos de cidadãos protegem ou aumentam a violência.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de facilitar o acesso",
      "contrario": "A favor de mais controle"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Desde o Estatuto do Desarmamento, de 2003, comprar uma arma no Brasil exige ter pelo menos 25 anos, ficha limpa, curso de tiro, exame psicológico e justificar a necessidade à Polícia Federal. Andar armado na rua, o chamado porte, é proibido para a maioria dos civis.",
        "Em 2005, um referendo perguntou se a venda de armas e munição deveria ser proibida. O Não venceu com 63,9% dos votos válidos, em todos os estados.",
        "Entre 2019 e 2022, uma série de decretos facilitou a compra, sobretudo para caçadores, atiradores e colecionadores (os CACs), e aumentou a quantidade de armas e munição que cada pessoa podia ter. Em 2023, um novo decreto voltou a restringir e passou o controle dos CACs do Exército para a Polícia Federal.",
        "O debate opõe o direito de se defender às pesquisas que ligam mais armas em circulação a mais homicídios e ao desvio de armas legais para o crime."
      ],
      "fatos": [
        {
          "rotulo": "Estatuto do Desarmamento",
          "valor": "2003"
        },
        {
          "rotulo": "Votaram Não no referendo de 2005",
          "valor": "63,9%"
        },
        {
          "rotulo": "Apreensões de pistolas 9mm no Sudeste, 2018 a 2023",
          "valor": "+119%"
        },
        {
          "rotulo": "Idade mínima para comprar",
          "valor": "25 anos"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Homicídios",
        "favoravel": "Entre 2017 e 2019, os registros de armas de civis subiram 65,6% enquanto os homicídios caíram 30,9%. O autor ressalva que correlação não prova causa. (A3)",
        "contrario": "Nos municípios paulistas, a redução de armas depois do Estatuto ajudou a derrubar os homicídios: 1% a mais de armas acompanha cerca de 2% a mais de homicídios. (B1)",
        "fonte_favoravel": "rebelo-cepedes-datasus",
        "fonte_contrario": "ipea-td-1721"
      },
      {
        "tema": "Efeito do Estatuto",
        "favoravel": "O Estatuto não reduziu a violência como prometia. Polícia fraca, tráfico, prisões lotadas e Justiça lenta anularam os efeitos da lei. (A1)",
        "contrario": "Nas capitais, mais armas em circulação andam junto com mais homicídios por arma de fogo, com efeito maior entre homens e vítimas negras. (B2)",
        "fonte_favoravel": "senado-td-234",
        "fonte_contrario": "ufv-dutra"
      },
      {
        "tema": "Arma legal e crime",
        "favoravel": "A ligação entre acesso legal a armas e crimes não está provada. Quem compra arma legalmente não é quem comete a maior parte dos crimes. (A2)",
        "contrario": "Depois de 2019, as apreensões de pistolas 9mm com criminosos no Sudeste subiram 119%, sinal de desvio de armas compradas legalmente. (B3)",
        "fonte_favoravel": "conjur-sannini",
        "fonte_contrario": "sou-da-paz-arsenal"
      }
    ],
    "glossario": [
      {
        "termo": "Posse",
        "definicao": "Autorização para manter a arma em casa ou no local de trabalho."
      },
      {
        "termo": "Porte",
        "definicao": "Autorização para andar com a arma fora de casa. É restrita a algumas profissões e casos excepcionais."
      },
      {
        "termo": "CAC",
        "definicao": "Caçadores, atiradores desportivos e colecionadores. Têm regras próprias e podem ter mais armas que o cidadão comum."
      },
      {
        "termo": "Estatuto do Desarmamento",
        "definicao": "Lei 10.826, de 2003, que define as regras de compra, registro, posse e porte de armas no país."
      },
      {
        "termo": "Elasticidade",
        "definicao": "Quanto uma coisa muda quando outra muda 1%. Uma elasticidade de 2 entre armas e homicídios quer dizer que 1% a mais de armas acompanha 2% a mais de homicídios."
      }
    ],
    "incertezas": [
      "Quanto da queda dos homicídios depois de 2018 tem a ver com armas, e quanto com mudanças na população, nas facções e no policiamento.",
      "Em que escala armas compradas legalmente chegam ao crime.",
      "Se resultados medidos em São Paulo nos anos 2000 valem para o país de hoje."
    ],
    "fontes": [
      {
        "titulo": "Congresso em Foco: Não vence referendo com 63,94% (out/2005)",
        "url": "https://www.congressoemfoco.com.br/noticia/103497/referendo-diferenca-final-do-nao-foi-de-quase-26-milhoes-de-votos"
      },
      {
        "titulo": "JB: flexibilização de armas em 2019 levou a desvio de pistolas para o crime (dez/2025)",
        "url": "https://www.jb.com.br/brasil/2025/12/1057912-flexibilizacao-de-armas-em-2019-levou-a-desvio-de-pistolas-para-crime.html"
      }
    ],
    "leituras": [
      {
        "id": "senado-td-234",
        "posicao": "favoravel",
        "instituicao": "Senado Federal",
        "natureza": "Consultoria Legislativa do Senado (estudo técnico, não é a posição oficial da Casa)",
        "tipo": "Texto para discussão",
        "titulo": "Desarmamento: o que ele tem a ver com vigilantes, prisões lotadas, tribunais congestionados e pequenos traficantes de drogas?",
        "autores": "Tiago Ivo Odon",
        "data": "06/2017",
        "formato": "Página",
        "url": "https://www12.senado.leg.br/publicacoes/estudos-legislativos/tipos-de-estudos/textos-para-discussao/td234",
        "tese": "O Estatuto do Desarmamento não reduziu a violência como prometia. O autor diz não tomar partido sobre o desarmamento em si, mas conclui que polícia fraca, tráfico, prisões lotadas e Justiça lenta anularam os efeitos da lei.",
        "premissas": [
          "O problema da violência está mais na estrutura de segurança e Justiça do que na arma do cidadão."
        ],
        "pergunte": [
          "Se a lei não funcionou por causa de outros fatores, isso prova que liberar armas ajudaria?"
        ]
      },
      {
        "id": "conjur-sannini",
        "posicao": "favoravel",
        "instituicao": "ConJur",
        "natureza": "Artigo de opinião de delegado de polícia e professor universitário, em revista jurídica",
        "tipo": "Artigo",
        "titulo": "Armas e crimes",
        "autores": "Francisco Sannini",
        "data": "29/11/2022",
        "formato": "Página",
        "url": "https://www.conjur.com.br/2022-nov-29/francisco-sannini-armas-crimes-ou-armas-crimes/",
        "tese": "A ligação entre acesso legal a armas e crimes é contestada e não está provada. O autor lembra que a população decidiu no referendo de 2005 manter o direito de comprar armas.",
        "premissas": [
          "Quem compra arma legalmente não é quem comete a maior parte dos crimes."
        ],
        "pergunte": [
          "Que tipo de dado seria preciso para resolver essa disputa?"
        ]
      },
      {
        "id": "ipea-td-1721",
        "posicao": "contrario",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Texto para discussão",
        "titulo": "Menos armas, menos crimes",
        "autores": "Daniel Cerqueira e João Manoel Pinho de Mello",
        "data": "03/2012",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/2927/1/TD_1721.pdf",
        "tese": "Nos 645 municípios paulistas, a redução de armas depois do Estatuto ajudou a derrubar os homicídios. Não houve efeito parecido sobre roubos e tráfico.",
        "numero": {
          "valor": "≈ 2",
          "legenda": "de elasticidade: 1% a mais de armas acompanha cerca de 2% a mais de homicídios"
        },
        "premissas": [
          "Mede a quantidade de armas pela proporção de suicídios cometidos com arma de fogo, um método usado na literatura internacional."
        ],
        "pergunte": [
          "Os dados são de São Paulo entre 2001 e 2007. O resultado vale para outros estados e para hoje?"
        ]
      },
      {
        "id": "ufv-dutra",
        "posicao": "contrario",
        "instituicao": "UFV",
        "natureza": "Universidade pública (mestrado em Economia Aplicada)",
        "tipo": "Dissertação",
        "titulo": "Análise da relação entre acesso a armas de fogo e homicídios no Brasil",
        "autores": "Gilson José Dutra",
        "data": "08/2017",
        "formato": "Página",
        "url": "https://locus.ufv.br/items/09bcfa48-f9f3-4498-bcee-7e089196201c",
        "tese": "Nas capitais brasileiras, mais armas em circulação andam junto com mais homicídios por arma de fogo. O efeito é maior entre vítimas negras e homens.",
        "numero": {
          "valor": "3,9",
          "legenda": "de elasticidade média entre armas e homicídios por arma de fogo nas capitais"
        },
        "premissas": [
          "Usa o mesmo método do estudo do Ipea, com dados de todas as capitais."
        ],
        "pergunte": [
          "Andar junto prova que uma coisa causa a outra? O que mais poderia explicar a relação?"
        ]
      },
      {
        "id": "sou-da-paz-arsenal",
        "posicao": "contrario",
        "instituicao": "Instituto Sou da Paz",
        "natureza": "Organização da sociedade civil que defende o controle de armas",
        "tipo": "Estudo",
        "titulo": "Arsenal do Crime",
        "autores": "Instituto Sou da Paz (reportagem de Bruno de Freitas Moura)",
        "data": "12/2025",
        "formato": "Reportagem",
        "url": "https://www.jb.com.br/brasil/2025/12/1057912-flexibilizacao-de-armas-em-2019-levou-a-desvio-de-pistolas-para-crime.html",
        "tese": "Depois da flexibilização de 2019, a pistola 9mm, antes de uso restrito, virou uma das armas mais apreendidas com criminosos no Sudeste. Para o instituto, é sinal de desvio de armas compradas legalmente.",
        "numero": {
          "valor": "+119%",
          "legenda": "de apreensões de pistolas 9mm no ES, MG, RJ e SP entre 2018 e 2023"
        },
        "premissas": [
          "O aumento das apreensões reflete armas que saíram do mercado legal."
        ],
        "pergunte": [
          "O Sou da Paz é uma ONG pelo controle de armas. Que dado mostraria de onde vieram as pistolas apreendidas?"
        ]
      },
      {
        "id": "rebelo-cepedes-datasus",
        "posicao": "favoravel",
        "instituicao": "CEPEDES",
        "natureza": "Centro de Pesquisa em Direito e Segurança, entidade privada favorável ao acesso a armas",
        "tipo": "Artigo",
        "titulo": "DATASUS consolida indicadores e ratifica maior queda de homicídios em 40 anos",
        "autores": "Fabricio Rebelo",
        "data": "04/03/2021",
        "formato": "Página",
        "url": "https://jus.com.br/artigos/88927/datasus-consolida-indicadores-e-ratifica-maior-queda-de-homicidios-em-40-anos",
        "tese": "Com dados oficiais de saúde e da Polícia Federal, mostra que entre 2017 e 2019 os registros de armas de civis subiram 65,6% enquanto os homicídios caíram 30,9%. Para o autor, isso contradiz a ideia de que mais armas legais levam a mais mortes. Ele mesmo ressalva que correlação não prova causa.",
        "numero": {
          "valor": "+65,6%",
          "legenda": "de armas registradas por civis entre 2017 e 2019, com homicídios caindo 30,9%"
        },
        "premissas": [
          "Se mais armas causassem mais mortes, os homicídios teriam subido."
        ],
        "pergunte": [
          "Que outros fatores, como a trégua entre facções, podem explicar a queda no mesmo período?"
        ]
      }
    ],
    "videos": [
      {
        "id": "UyHRBY2PAXs",
        "titulo": "A liberação das armas de fogo é equivocada, afirma Daniel Cerqueira",
        "canal": "Exame",
        "nota": "O autor do estudo do Ipea explica por que mais armas trazem mais mortes.",
        "duracao": "4:12"
      },
      {
        "id": "UTXIMe7bJEM",
        "titulo": "Armas para a população resultam em menos crimes? Veja os mitos da segurança pública",
        "canal": "Estadão",
        "nota": "O que os dados dizem sobre armas e criminalidade.",
        "duracao": "3:54"
      },
      {
        "id": "uV7mOtZqclQ",
        "titulo": "Maior rigor na posse de armas teria evitado mais de seis mortes por dia, diz estudo",
        "canal": "Jornalismo TV Cultura",
        "nota": "Estimativa de vidas que um controle mais rígido teria poupado.",
        "duracao": "2:44"
      },
      {
        "id": "xxXdY5in8s0",
        "titulo": "“Temos um avanço no direito de defesa do cidadão”, diz especialista sobre decreto de armas",
        "canal": "Balanço Geral Florianópolis",
        "nota": "Especialista defende o decreto que facilitou a posse em 2019.",
        "duracao": "5:26"
      },
      {
        "id": "-qkYuJvzCbo",
        "titulo": "Bene Barbosa refuta as críticas ao armamento",
        "canal": "Cortes do Flow",
        "nota": "O presidente do Movimento Viva Brasil rebate os argumentos do desarmamento.",
        "duracao": "6:15"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/armas.jpg",
      "autor": "José Reynaldo da Fonseca",
      "licenca": "CC BY-SA 3.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/3.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Campeonato_Club_tiro_160411_REFON_10.JPG",
      "legenda": "Campeonato de tiro esportivo em Avaré (SP).",
      "alt": "Atirador em uma pista de tiro esportivo com um árbitro ao lado",
      "posicao": "50% 35%"
    }
  },
  {
    "id": "cameras-corporais",
    "titulo": "Câmeras corporais na polícia",
    "categoria": "seguranca",
    "tags": [
      "Olho Vivo",
      "PM de São Paulo",
      "letalidade policial",
      "Derrite",
      "gravação contínua",
      "Ministério da Justiça",
      "uso da força"
    ],
    "pergunta": "Policiais devem usar câmeras que gravam todo o turno de trabalho?",
    "resumo": "Em São Paulo, as câmeras ajudaram a derrubar as mortes em ações da PM. O governo Tarcísio trocou a gravação contínua por câmeras que o policial ou a central acionam, e o debate voltou.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor da gravação contínua",
      "contrario": "Contra ou com ressalvas"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "As câmeras corporais ficam presas à farda e filmam as abordagens. São Paulo começou o programa Olho Vivo em 2020, com câmeras que gravavam o turno inteiro, sem que o policial pudesse desligar.",
        "Estudos da FGV e do Fórum Brasileiro de Segurança Pública mostraram que as mortes em ações da PM caíram muito mais nos batalhões com câmeras. Em 2023, o secretário Guilherme Derrite disse que reveria o programa, e a nova compra de 2024 trocou a gravação contínua por câmeras acionadas pelo policial ou pela central.",
        "Em 2024, o Ministério da Justiça publicou regras nacionais para o uso das câmeras, e outros estados passaram a adotar o equipamento.",
        "Quem defende diz que a câmera protege o cidadão e o bom policial. Quem critica diz que a gravação contínua expõe a intimidade e a tática dos policiais, gera desconfiança e deixa a tropa hesitante."
      ],
      "fatos": [
        {
          "rotulo": "Queda da letalidade nos batalhões com câmera (FGV/FBSP)",
          "valor": "−77%"
        },
        {
          "rotulo": "Paulistanos a favor das câmeras (Datafolha 2024)",
          "valor": "88%"
        },
        {
          "rotulo": "Queda do uso da força em teste em SC",
          "valor": "−61%"
        },
        {
          "rotulo": "Início do programa em SP",
          "valor": "2020"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Mortes",
        "favoravel": "Nos batalhões que receberam câmeras, as mortes em ações da PM caíram 77%, contra 47% nos demais. (A1)",
        "contrario": "Quase nenhum estado mede resultados. O Acre não viu mudança nos índices, e o efeito de São Paulo não pode ser tomado como garantido em outros lugares. (B2)",
        "fonte_favoravel": "fgv-fbsp-2022",
        "fonte_contrario": "pucrs-ibccrim-implementacao"
      },
      {
        "tema": "Gravação contínua",
        "favoravel": "A letalidade policial em SP caiu 62,7% entre 2019 e 2022. Acabar com a gravação contínua ameaça o principal ganho do programa. (A2)",
        "contrario": "Boa parte do que é gravado não é aproveitado e encarece armazenamento e bateria. O novo contrato prevê economia de 30% a 50%. (B3)",
        "fonte_favoravel": "nev-nota-2024",
        "fonte_contrario": "ssp-sp-edital-2024"
      },
      {
        "tema": "Efeito sobre o policial",
        "favoravel": "Em Santa Catarina, policiais sorteados para usar câmera recorreram 61% menos à força, e as ocorrências registradas aumentaram. (A3)",
        "contrario": "A gravação contínua expõe o policial 24 horas, inclusive em momentos privados, e o programa não tem lei própria, só normas internas. (B1)",
        "fonte_favoravel": "sc-uso-forca-2021",
        "fonte_contrario": "genghini-privacidade-cop"
      }
    ],
    "glossario": [
      {
        "termo": "Câmera corporal",
        "definicao": "Câmera presa ao uniforme que grava imagem e som das ações do policial."
      },
      {
        "termo": "Gravação contínua",
        "definicao": "Modelo em que a câmera grava o turno todo, sem o policial poder desligar."
      },
      {
        "termo": "Acionamento intencional",
        "definicao": "Modelo em que o policial ou a central liga a gravação em momentos específicos."
      },
      {
        "termo": "Letalidade policial",
        "definicao": "Número de mortes causadas por policiais em serviço."
      },
      {
        "termo": "Uso da força",
        "definicao": "Toda ação física do policial sobre alguém, de imobilizar e algemar até atirar."
      }
    ],
    "incertezas": [
      "Se o modelo de acionamento pelo policial mantém os resultados da gravação contínua.",
      "Quanto da queda das mortes em SP veio das câmeras e quanto de outras mudanças na PM.",
      "O efeito das câmeras sobre a coragem dos policiais em ocorrências de risco, que é difícil de medir."
    ],
    "fontes": [
      {
        "titulo": "Conjur: secretário de Segurança de SP diz que vai rever câmeras da PM (jan/2023)",
        "url": "https://www.conjur.com.br/2023-jan-04/secretario-seguranca-sp-rever-cameras-pm/"
      },
      {
        "titulo": "Correio Braziliense: Datafolha, 88% dos paulistanos são a favor das câmeras corporais (mar/2024)",
        "url": "https://www.correiobraziliense.com.br/brasil/2024/03/6820473-datafolha-88-dos-paulistanos-sao-a-favor-das-cameras-corporais-da-pm.html"
      }
    ],
    "leituras": [
      {
        "id": "fgv-fbsp-2022",
        "posicao": "favoravel",
        "instituicao": "FGV EAESP e FBSP",
        "natureza": "Escola de Administração de Empresas da FGV e Fórum Brasileiro de Segurança Pública",
        "tipo": "Estudo",
        "titulo": "Em São Paulo, câmeras corporais contribuem para redução de mortes em intervenções da PM",
        "autores": "Renato Sérgio de Lima, Samira Bueno, Isabela Sobral e Dennis Pacheco",
        "data": "22/12/2022",
        "formato": "Página",
        "url": "https://eaesp.fgv.br/administracao-publica/politicas-publicas/em-sao-paulo-cameras-corporais-contribuem-para-reducao-de-mortes-em-intervencoes-da-pm",
        "tese": "Nos batalhões que receberam câmeras, as mortes causadas por policiais caíram 77% contra 47% nos demais. Os autores estimam que cerca de 88 mortes foram evitadas.",
        "numero": {
          "valor": "−77%",
          "legenda": "de mortes em ações da PM nos batalhões com câmera"
        },
        "premissas": [
          "Compara batalhões com e sem câmera no mesmo período."
        ],
        "pergunte": [
          "Os batalhões escolhidos primeiro eram os mais letais. Isso pode exagerar o efeito?"
        ]
      },
      {
        "id": "nev-nota-2024",
        "posicao": "favoravel",
        "instituicao": "NEV-USP e organizações da sociedade civil",
        "natureza": "Nota técnica publicada pelo Núcleo de Estudos da Violência da USP",
        "tipo": "Nota técnica",
        "titulo": "Nota técnica sobre as câmeras corporais da PM de São Paulo",
        "autores": "NEV-USP e outras organizações",
        "data": "05/2024",
        "formato": "PDF",
        "url": "https://nev.prp.usp.br/wp-content/uploads/2024/05/nota-tecnica-cameras.pdf",
        "tese": "A letalidade policial em SP caiu 62,7% entre 2019 e 2022, a população apoia as câmeras, e a nova compra, ao acabar com a gravação contínua, ameaça o principal ganho do programa.",
        "numero": {
          "valor": "−62,7%",
          "legenda": "de letalidade policial em SP entre 2019 e 2022"
        },
        "premissas": [
          "Se o policial escolhe quando gravar, a câmera perde força justamente nos casos de abuso."
        ],
        "pergunte": [
          "Existe meio-termo entre gravar tudo e deixar o policial decidir?"
        ]
      },
      {
        "id": "sc-uso-forca-2021",
        "posicao": "favoravel",
        "instituicao": "PUC-Rio, Queen Mary, Warwick e LSE",
        "natureza": "Experimento de universidades com a Polícia Militar de Santa Catarina",
        "tipo": "Estudo",
        "titulo": "Câmeras reduzem uso da força por PMs, diz estudo",
        "autores": "Pedro Souza (Queen Mary) e coautores (relato do Estadão, reproduzido pela IstoÉ Dinheiro)",
        "data": "01/10/2021",
        "formato": "Reportagem",
        "url": "https://istoedinheiro.com.br/cameras-reduzem-uso-da-forca-por-pms-diz-estudo",
        "tese": "Em Santa Catarina, cerca de 150 policiais sorteados usaram câmeras e 300 não. Quem usava câmera recorreu muito menos à força, e as ocorrências registradas aumentaram.",
        "numero": {
          "valor": "−61%",
          "legenda": "no uso da força por policiais com câmera"
        },
        "premissas": [
          "O sorteio de quem recebe a câmera permite comparar grupos parecidos."
        ],
        "pergunte": [
          "Os policiais sabiam que faziam parte de um estudo. Isso pode ter mudado o comportamento?"
        ]
      },
      {
        "id": "genghini-privacidade-cop",
        "posicao": "contrario",
        "instituicao": "Revista de Direitos e Garantias Fundamentais (FDV)",
        "natureza": "Artigo em revista jurídica acadêmica com revisão por pares",
        "tipo": "Artigo científico",
        "titulo": "O uso da câmera operacional portátil na Polícia Militar do Estado de São Paulo: um diálogo entre segurança, privacidade e cidadania",
        "autores": "Marco Aurélio Barberato Genghini, Diogenes Wagner S. E. de Oliveira e Humberto Barrionuevo Fabretti",
        "data": "12/2023",
        "formato": "PDF",
        "url": "https://sisbib.emnuvens.com.br/direitosegarantias/article/download/2310/651",
        "tese": "Reconhece a utilidade das câmeras para a transparência e a prova, mas aponta que o programa vive só de normas internas, sem lei. A gravação contínua expõe o policial 24 horas, inclusive em momentos privados; o cidadão só obtém as imagens na Justiça; e a LGPD não cobre dados de segurança pública. Pede que o Legislativo regule o tema.",
        "numero": {
          "valor": "62 de 135",
          "legenda": "batalhões da PM-SP usavam câmeras no fim de 2022"
        },
        "premissas": [
          "A privacidade do policial em serviço também merece proteção."
        ],
        "pergunte": [
          "Uma lei resolveria os problemas apontados sem acabar com a gravação contínua?"
        ]
      },
      {
        "id": "pucrs-ibccrim-implementacao",
        "posicao": "contrario",
        "instituicao": "PUCRS (Boletim IBCCRIM)",
        "natureza": "Pesquisadores de universidade privada; boletim do Instituto Brasileiro de Ciências Criminais",
        "tipo": "Artigo (resultados preliminares)",
        "titulo": "A implementação das câmeras corporais nas polícias brasileiras",
        "autores": "Augusto Jobim do Amaral, Eduardo Baldissera Carvalho Salles e Paula Fernanda F. A. de Oliveira",
        "data": "07/2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/11/IMPLEMENTACAO-CAMERAS-POLICIAS-PUC-RS-20-NOV-2025.pdf",
        "tese": "Levantou os programas de todo o país e concluiu que quase nenhum estado mede resultados. Onde há relatórios, são parciais ou frágeis: o Acre não viu mudança nos índices, Santa Catarina encerrou o projeto sem avaliação pública e Rondônia deixou os aparelhos caírem em desuso. O efeito visto em São Paulo não pode ser tomado como garantido em outros lugares.",
        "numero": {
          "valor": "28.182",
          "legenda": "câmeras em uso nas polícias militares do país"
        },
        "premissas": [
          "Sem avaliação, não dá para saber se o dinheiro gasto traz resultado."
        ],
        "pergunte": [
          "O problema está na câmera ou na forma como os estados implantam e avaliam o programa?"
        ]
      },
      {
        "id": "ssp-sp-edital-2024",
        "posicao": "contrario",
        "instituicao": "Secretaria da Segurança Pública de SP",
        "natureza": "Órgão do governo paulista (gestão Tarcísio de Freitas)",
        "tipo": "Justificativa oficial de edital",
        "titulo": "Novo edital de câmeras corporais: gravação acionada em vez de contínua",
        "autores": "SSP-SP, citada pelo Poder360",
        "data": "22/05/2024",
        "formato": "Página",
        "url": "https://www.poder360.com.br/seguranca-publica/gestao-tarcisio-quer-cameras-corporais-que-podem-ser-desligadas-por-pms/",
        "tese": "O governo paulista justificou trocar a gravação ininterrupta pela acionada pelo policial ou pela central: boa parte do material não é aproveitada e encarece o armazenamento, a bateria falha mais, e gravar o tempo todo violaria a privacidade do policial. Prevê 12 mil câmeras novas e economia de 30% a 50% em relação ao contrato anterior.",
        "numero": {
          "valor": "30% a 50%",
          "legenda": "de economia prevista pelo governo com o novo contrato"
        },
        "premissas": [
          "A câmera acionada mantém os benefícios da gravação contínua."
        ],
        "pergunte": [
          "Os estudos que mediram queda de mortes avaliaram a gravação contínua. O efeito se mantém se o policial puder escolher quando gravar?"
        ]
      }
    ],
    "videos": [
      {
        "id": "B8jQF5COuEU",
        "titulo": "O uso de câmeras corporais pela polícia, explicado",
        "canal": "Headline Brasil",
        "nota": "Melina Risso, do Instituto Igarapé, explica o que as pesquisas mostram.",
        "duracao": "3:04"
      },
      {
        "id": "BjSbk1i6r2Q",
        "titulo": "Uso de câmeras em uniformes de PMs reduziu mais de 50% das mortes em ações",
        "canal": "SBT News",
        "nota": "A reportagem mostra os números do programa paulista.",
        "duracao": "2:31"
      },
      {
        "id": "Ei1SHiBwQuI",
        "titulo": "Igor e Sargento Castro discutem sobre o uso de câmera em policiais",
        "canal": "Cortes do Flow",
        "nota": "O policial e youtuber explica por que vê problemas na câmera.",
        "duracao": "8:56"
      },
      {
        "id": "E2URnRXAers",
        "titulo": "Pesquisador fala sobre o uso de câmeras corporais na PM",
        "canal": "CNN Brasil",
        "nota": "O que as pesquisas mostram sobre o efeito das câmeras.",
        "duracao": "5:24"
      },
      {
        "id": "aSLcBo6-UIQ",
        "titulo": "Não é para todos os policiais usarem câmeras corporais, diz coronel José Vicente",
        "canal": "Jornalismo Novabrasil",
        "nota": "Coronel da reserva da PM defende um uso mais seletivo das câmeras.",
        "duracao": "9:27"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/cameras-corporais.jpg",
      "autor": "Rovena Rosa/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Manifesta%C3%A7%C3%A3o_Fora_Temer_na_Avenida_Paulista_1040924-29.08.2016_rrs-8022.jpg",
      "legenda": "Policiais militares na Avenida Paulista, São Paulo, 2016.",
      "alt": "Policiais militares com capacetes em linha numa avenida à noite",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "privatizacoes",
    "titulo": "Privatização de estatais",
    "categoria": "economia",
    "tags": [
      "Eletrobras",
      "Sabesp",
      "Correios",
      "Petrobras",
      "saneamento",
      "concessão",
      "desestatização"
    ],
    "pergunta": "O governo deve vender suas empresas?",
    "resumo": "Eletrobras e Sabesp foram privatizadas nos últimos anos, e Correios e Petrobras sempre voltam à discussão. A dúvida é se a empresa privada entrega serviço melhor e mais barato, ou se o país perde o controle de áreas essenciais.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor de privatizar",
      "contrario": "Contra ou com ressalvas"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A União controla dezenas de empresas, como Petrobras, Banco do Brasil, Caixa e Correios. Os estados também têm as suas, sobretudo de água, esgoto e energia.",
        "Nos anos 1990, o Programa Nacional de Desestatização vendeu siderúrgicas, a Vale e as empresas de telefonia. Em 2022 a Eletrobras foi privatizada por capitalização: o governo vendeu ações na bolsa e deixou de ser o dono majoritário. Em 2024, São Paulo privatizou a Sabesp, a maior empresa de saneamento do país.",
        "O marco legal do saneamento, de 2020, facilitou a entrada de empresas privadas no setor. Segundo o Instituto Trata Brasil, 1.557 municípios já tinham contrato com operadoras privadas em 2025. Do lado federal, o governo retirou os Correios e outras estatais da lista de privatizações em 2023.",
        "A discussão não se resume a vender ou não. Pesa também como vender, quem fiscaliza depois e o que acontece com as tarifas e com quem mora onde o serviço não dá lucro."
      ],
      "fatos": [
        {
          "rotulo": "Eletrobras privatizada em",
          "valor": "2022"
        },
        {
          "rotulo": "Sabesp privatizada em",
          "valor": "2024"
        },
        {
          "rotulo": "Municípios com saneamento privado (2025)",
          "valor": "1.557"
        },
        {
          "rotulo": "Serviços reestatizados por cidades no mundo, 2000 a 2019",
          "valor": "311"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Saneamento",
        "favoravel": "Nos municípios que passaram o esgoto para empresas privadas, o acesso à rede cresceu 26% a mais. Na água, não houve ganho claro. (A2)",
        "contrario": "Não há evidência de que a empresa privada universalize mais rápido ou mais barato. Entre 2000 e 2019, 311 cidades no mundo retomaram o serviço. (B1)",
        "fonte_favoravel": "ppe-saneamento",
        "fonte_contrario": "manifesto-saneamento"
      },
      {
        "tema": "Eletrobras",
        "favoravel": "Depois da capitalização, o investimento da empresa deu um salto e a dívida passou a ter prazos mais longos. O lucro não mudou de forma significativa. (A3)",
        "contrario": "A venda foi menos transparente que um leilão, e os “jabutis” da lei favorecem usinas a gás e podem encarecer a energia. (B2)",
        "fonte_favoravel": "ufu-eletrobras",
        "fonte_contrario": "ufmg-eletrobras"
      },
      {
        "tema": "Eficiência e investimento",
        "favoravel": "As empresas vendidas desde 1991 passaram a lucrar mais e ficaram mais eficientes. Os efeitos sobre investimento e impostos não ficaram claros. (A1)",
        "contrario": "Cinco anos depois do novo marco do saneamento, o investimento é de R$ 126 por habitante ao ano, contra R$ 224 necessários. (B3)",
        "fonte_favoravel": "rbe-privatizadas",
        "fonte_contrario": "trata-brasil-2025"
      }
    ],
    "glossario": [
      {
        "termo": "Desestatização",
        "definicao": "Quando o governo vende uma empresa ou passa um serviço para a iniciativa privada."
      },
      {
        "termo": "Capitalização",
        "definicao": "Venda de novas ações na bolsa que dilui a participação do governo até ele perder o controle. Foi o modelo da Eletrobras."
      },
      {
        "termo": "Concessão",
        "definicao": "O governo continua dono do serviço, mas uma empresa privada o opera por um prazo, seguindo metas de contrato."
      },
      {
        "termo": "Golden share",
        "definicao": "Ação especial que dá ao governo poder de veto em algumas decisões, mesmo depois da privatização."
      },
      {
        "termo": "Monopólio natural",
        "definicao": "Serviço em que só faz sentido ter uma rede, como canos de água ou fios de energia. Por isso precisa de regulação forte."
      },
      {
        "termo": "Remunicipalização",
        "definicao": "Quando uma cidade retoma um serviço que tinha sido entregue a uma empresa privada."
      }
    ],
    "incertezas": [
      "Os efeitos da privatização da Eletrobras e da Sabesp sobre tarifas e investimentos, que ainda são recentes.",
      "Se as metas do marco do saneamento para 2033 serão cumpridas, com operadoras públicas ou privadas.",
      "Se os ganhos medidos nas privatizações dos anos 1990 se repetem em serviços regulados de hoje."
    ],
    "fontes": [
      {
        "titulo": "Agência Brasil: estudo aponta estagnação no saneamento cinco anos após novo marco legal (ago/2025)",
        "url": "https://agenciabrasil.ebc.com.br/direitos-humanos/noticia/2025-08/estudo-aponta-estagnacao-no-saneamento-5-anos-apos-novo-marco-legal"
      },
      {
        "titulo": "Gazeta do Povo: privatização deslancha investimentos em saneamento (ago/2022)",
        "url": "https://www.gazetadopovo.com.br/economia/privatizacao-deslancha-investimentos-em-saneamento-o-que-vem-por-ai/"
      }
    ],
    "leituras": [
      {
        "id": "rbe-privatizadas",
        "posicao": "favoravel",
        "instituicao": "FGV",
        "natureza": "Revista Brasileira de Economia, da FGV, com autores da USP e da FGV",
        "tipo": "Artigo acadêmico",
        "titulo": "Os efeitos da privatização sobre o desempenho econômico e financeiro das empresas privatizadas",
        "autores": "Francisco Anuatti-Neto, Milton Barossi-Filho, Antonio Gledson de Carvalho e Roberto Macedo",
        "data": "2005",
        "formato": "PDF",
        "url": "https://www.scielo.br/j/rbe/a/TVjgv545MGj565LfWVRGc5M/?format=pdf&lang=pt",
        "tese": "As empresas vendidas desde 1991 passaram a lucrar mais, ficaram mais eficientes e reduziram dívidas. Os efeitos sobre investimento, produção e impostos pagos não ficaram claros.",
        "premissas": [
          "Compara 15 indicadores das mesmas empresas antes e depois da venda."
        ],
        "pergunte": [
          "Lucro maior é bom para quem? Para o acionista, para o consumidor ou para os dois?"
        ]
      },
      {
        "id": "ppe-saneamento",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Revista Pesquisa e Planejamento Econômico, do Ipea, com autores da UFU, do Insper e da UnB",
        "tipo": "Artigo acadêmico",
        "titulo": "Privatização e equidade no acesso a serviços de saneamento básico no Brasil",
        "autores": "Carlos Cesar Santejo Saiani, Paulo Furquim de Azevedo e Rafael Terra de Menezes",
        "data": "08/2023",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/14444/2/PPE_v53_n2_artigo1_privatizacao_e_equipe.pdf",
        "tese": "Nos municípios que passaram o esgoto para empresas privadas, o acesso à rede cresceu mais que nos outros, e mais onde ele era pior. No abastecimento de água, não houve ganho claro.",
        "numero": {
          "valor": "+26%",
          "legenda": "de acesso à rede de esgoto com concessão privada (6,1 pontos percentuais)"
        },
        "premissas": [
          "Compara municípios parecidos com e sem concessão privada usando os Censos de 1991, 2000 e 2010."
        ],
        "pergunte": [
          "Os autores notam que o ganho cresce com a renda. A empresa privada prioriza quem pode pagar mais?"
        ]
      },
      {
        "id": "ufu-eletrobras",
        "posicao": "favoravel",
        "instituicao": "UFU",
        "natureza": "Universidade pública (curso de Ciências Contábeis)",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "Efeitos da privatização por capitalização no desempenho econômico-financeiro da Eletrobras",
        "autores": "João Victor Vieira da Silva",
        "data": "06/2026",
        "formato": "PDF",
        "url": "https://repositorio.ufu.br/bitstream/123456789/49706/1/EfeitosPrivatiza%c3%a7%c3%a3oCapitaliza%c3%a7%c3%a3o.pdf",
        "tese": "Logo depois da capitalização, o investimento da Eletrobras deu um salto e a dívida passou a ter prazos mais longos. A lucratividade não mudou de forma significativa.",
        "premissas": [
          "Compara os indicadores antes e depois de 2022 com dados trimestrais."
        ],
        "pergunte": [
          "O próprio estudo mostra que o investimento perdeu força depois do salto inicial. Dá para concluir algo com três anos de dados?"
        ]
      },
      {
        "id": "manifesto-saneamento",
        "posicao": "contrario",
        "instituicao": "Ondas e 116 pesquisadores",
        "natureza": "Manifesto assinado por pesquisadores da UFRJ, USP, UFMG, Unicamp, Fiocruz e outras instituições",
        "tipo": "Manifesto",
        "titulo": "Acesso ao saneamento é direito humano",
        "autores": "Observatório Nacional dos Direitos à Água e ao Saneamento (Ondas) e signatários",
        "data": "06/01/2023",
        "formato": "PDF",
        "url": "https://ondasbrasil.org/wp-content/uploads/2023/01/Manifesto-Saneamento-Comunidade-Academica-06012023.pdf",
        "tese": "Não há evidência de que a empresa privada universalize o saneamento mais rápido ou mais barato. Água e esgoto são monopólio natural, difícil de regular, e a busca por lucro pode subir tarifas. Pelo mundo, a tendência é as cidades retomarem o serviço.",
        "numero": {
          "valor": "311",
          "legenda": "casos de cidades que retomaram o serviço de água e esgoto entre 2000 e 2019"
        },
        "premissas": [
          "Saneamento é um direito, não uma mercadoria.",
          "Municípios pequenos não têm força para fiscalizar grandes grupos."
        ],
        "pergunte": [
          "O manifesto cita casos ruins. Há casos em que a concessão privada deu certo no Brasil?"
        ]
      },
      {
        "id": "ufmg-eletrobras",
        "posicao": "contrario",
        "instituicao": "UFMG",
        "natureza": "Universidade pública (curso de Administração, campus Montes Claros)",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "Análise crítica sobre a privatização da Eletrobrás",
        "autores": "Jéssica Santos Felix",
        "data": "01/2025",
        "formato": "PDF",
        "url": "https://www.ufmg.br/montesclaros/tccs/2024/TCC-JessicaSantosFelix.pdf",
        "tese": "A capitalização da Eletrobras foi menos transparente que um leilão e pode ter rendido menos ao governo. Os “jabutis” da lei favorecem usinas a gás e podem encarecer a energia, e a empresa deixou de ser obrigada a apoiar programas como o Luz para Todos.",
        "premissas": [
          "Leilão aberto traria mais concorrência e mais dinheiro.",
          "A estatal cumpria funções sociais que o mercado não cumpre."
        ],
        "pergunte": [
          "O estudo não mede tarifas diretamente. Que dado mostraria se a conta de luz subiu por causa da privatização?"
        ]
      },
      {
        "id": "trata-brasil-2025",
        "posicao": "contrario",
        "instituicao": "Instituto Trata Brasil",
        "natureza": "Organização da sociedade civil dedicada ao saneamento",
        "tipo": "Estudo",
        "titulo": "Avanços do Marco Legal do Saneamento Básico no Brasil 2025",
        "autores": "Instituto Trata Brasil, com dados do Ministério das Cidades",
        "data": "08/2025",
        "formato": "Reportagem",
        "url": "https://agenciabrasil.ebc.com.br/direitos-humanos/noticia/2025-08/estudo-aponta-estagnacao-no-saneamento-5-anos-apos-novo-marco-legal",
        "tese": "Cinco anos depois do marco que abriu o setor às empresas privadas, o acesso à água ficou praticamente parado e o investimento está bem abaixo do necessário para cumprir as metas de 2033.",
        "numero": {
          "valor": "R$ 126",
          "legenda": "por habitante ao ano investidos, contra R$ 224 necessários"
        },
        "premissas": [
          "O próprio estudo diz que cinco anos é pouco para obras de saneamento darem resultado."
        ],
        "pergunte": [
          "O problema é a privatização ou a falta de investimento em geral, público e privado?"
        ]
      }
    ],
    "videos": [
      {
        "id": "o_OlzlpfqTA",
        "titulo": "“É muito positivo”, diz Wilson Ferreira Jr. sobre a privatização da Eletrobras",
        "canal": "Roda Viva",
        "nota": "O ex-presidente da Eletrobras explica o que muda com a venda.",
        "duracao": "2:48"
      },
      {
        "id": "KTXHt1OQj_o",
        "titulo": "Privatização da Eletrobras deve aumentar conta de energia, alertam debatedores",
        "canal": "TV Senado",
        "nota": "Especialistas apontam o risco de alta nas tarifas.",
        "duracao": "5:25"
      },
      {
        "id": "vroVI314kGc",
        "titulo": "Salim Mattar explica a diferença entre empresa estatal e privada",
        "canal": "Jovem Pan News",
        "nota": "O ex-secretário de Desestatização expõe a lógica da privatização.",
        "duracao": "2:51"
      },
      {
        "id": "PbxfQAxbl_I",
        "titulo": "Por que a privatização da Sabesp era necessária",
        "canal": "Tarcísio de Freitas",
        "nota": "O governador de SP defende a venda da empresa de saneamento.",
        "duracao": "9:31"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/privatizacoes.jpg",
      "autor": "Corretor Carvalho",
      "licenca": "CC BY-SA 3.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/3.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_de_Tratamento_de_Esgoto_SABESP_-_S%C3%83O_MIGUEL_-_panoramio.jpg",
      "legenda": "Estação de tratamento de esgoto da Sabesp em São Miguel Paulista (SP).",
      "alt": "Vista de uma estação de tratamento de esgoto com uma caixa-d'água ao fundo",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "maconha",
    "titulo": "Descriminalização da maconha",
    "categoria": "seguranca",
    "tags": [
      "drogas",
      "STF",
      "PEC das drogas",
      "Lei de Drogas",
      "usuário",
      "tráfico",
      "encarceramento",
      "saúde mental"
    ],
    "pergunta": "Portar maconha para uso próprio deve deixar de ser crime?",
    "resumo": "Em 2024 o STF decidiu que portar até 40 gramas de maconha para consumo próprio não é crime, e o Senado aprovou uma emenda à Constituição que diz o contrário. O debate envolve prisões, saúde pública e o tráfico.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor de descriminalizar",
      "contrario": "Contra descriminalizar"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Lei de Drogas, de 2006, já não manda prender quem carrega droga para uso próprio: as penas são advertência, serviço comunitário e curso. Mas portar continua sendo crime, e a lei não diz que quantidade separa o usuário do traficante. Na prática, quem decide é a polícia e o juiz.",
        "Em junho de 2024, o STF decidiu que portar até 40 gramas de maconha, ou seis plantas fêmeas, para consumo próprio deixa de ser crime e passa a ser infração administrativa. Vender continua proibido, e a polícia ainda pode apreender a droga.",
        "Em abril de 2024, o Senado aprovou por 53 votos a 9 a PEC 45/2023, que coloca na Constituição que portar qualquer quantidade de droga é crime. O texto seguiu para a Câmara.",
        "Descriminalizar não é legalizar: a venda segue ilegal. A dúvida é se tirar o usuário da esfera criminal reduz prisões injustas e libera a polícia para o tráfico, ou se aumenta o consumo e fortalece as facções."
      ],
      "fatos": [
        {
          "rotulo": "Limite fixado pelo STF",
          "valor": "40 g"
        },
        {
          "rotulo": "Votação da PEC no Senado",
          "valor": "53 a 9"
        },
        {
          "rotulo": "Uso de maconha no último ano, 2012 → 2023",
          "valor": "2,8% → 6%"
        },
        {
          "rotulo": "Réus por tráfico com quantidade de usuário (Ipea)",
          "valor": "23% a 35%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Critério de quantidade",
        "favoravel": "No cenário mais conservador, 31% dos processos por tráfico com maconha poderiam ser presumidos como uso pessoal. (A2)",
        "contrario": "A diferença entre usuário e traficante deve olhar as circunstâncias de cada caso, não só a quantidade. O usuário teria pena alternativa, sem prisão. (B2)",
        "fonte_favoravel": "ipea-criterios-2023",
        "fonte_contrario": "senado-pec-45"
      },
      {
        "tema": "Saúde",
        "favoravel": "Tirar o uso da esfera criminal ajudaria a garantir tratamento a pacientes e a combater o encarceramento em massa. (A3)",
        "contrario": "A maconha causa dependência grave e pode desencadear psicoses. Facilitar o uso tende a aumentar o consumo. (B1)",
        "fonte_favoravel": "ufjf-possato",
        "fonte_contrario": "cfm-abp-nota"
      },
      {
        "tema": "Efeitos esperados",
        "favoravel": "De 23% a 35% dos réus por tráfico levavam quantidade de uso pessoal. Com um critério objetivo, milhares deixariam de ser presos. (A1)",
        "contrario": "O uso no último ano passou de 2,8% para 6% dos brasileiros entre 2012 e 2023, e muitos jovens acham que experimentar quase não tem risco. (B3)",
        "fonte_favoravel": "ipea-stf-2024",
        "fonte_contrario": "lenad-iii"
      }
    ],
    "glossario": [
      {
        "termo": "Descriminalizar",
        "definicao": "Deixar de tratar uma conduta como crime. Ela pode continuar proibida e punida com sanções administrativas."
      },
      {
        "termo": "Legalizar",
        "definicao": "Permitir e regular a produção e a venda, como acontece com álcool e cigarro."
      },
      {
        "termo": "Despenalizar",
        "definicao": "Manter como crime, mas sem pena de prisão. É o que a Lei de Drogas fez com o usuário em 2006."
      },
      {
        "termo": "Artigo 28",
        "definicao": "Trecho da Lei de Drogas que trata de quem porta droga para consumo próprio. Foi ele que o STF julgou."
      },
      {
        "termo": "PEC",
        "definicao": "Proposta de Emenda à Constituição. Precisa de 3/5 dos votos, em dois turnos, na Câmara e no Senado."
      }
    ],
    "incertezas": [
      "Se a decisão do STF muda o consumo. Não há ainda dados brasileiros sobre o período depois de 2024.",
      "Quantas pessoas presas hoje como traficantes seriam consideradas usuárias pelo novo critério.",
      "Se a PEC 45 será aprovada na Câmara e como ficaria a decisão do STF nesse caso."
    ],
    "fontes": [
      {
        "titulo": "Migalhas: Senado aprova PEC que criminaliza porte de drogas (abr/2024)",
        "url": "https://www.migalhas.com.br/quentes/405614/senado-aprova-pec-que-criminaliza-porte-de-drogas-texto-vai-a-camara"
      },
      {
        "titulo": "Alma Preta: até 35% dos réus por tráfico poderiam ser considerados usuários (jun/2024)",
        "url": "https://almapreta.com.br/sessao/cotidiano/descriminalizacao-da-maconha-ate-35-dos-reus-por-trafico-poderiam-ser-considerados-usuarios/"
      },
      {
        "titulo": "Revista Pesquisa Fapesp: consumo de drogas ilícitas cresceu cerca de 80% de 2012 a 2023",
        "url": "https://revistapesquisa.fapesp.br/consumo-de-drogas-ilicitas-cresceu-cerca-de-80-no-brasil-de-2012-a-2023/"
      }
    ],
    "leituras": [
      {
        "id": "ipea-stf-2024",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Estudo",
        "titulo": "Impactos da descriminalização do porte de maconha para uso pessoal",
        "autores": "Milena Karla Soares (Ipea)",
        "data": "06/2024",
        "formato": "Reportagem",
        "url": "https://almapreta.com.br/sessao/cotidiano/descriminalizacao-da-maconha-ate-35-dos-reus-por-trafico-poderiam-ser-considerados-usuarios/",
        "tese": "Uma parte grande dos réus por tráfico carregava quantidades compatíveis com uso pessoal. Com um critério objetivo, milhares de pessoas deixariam de ser presas, e o Estado economizaria bilhões.",
        "numero": {
          "valor": "23% a 35%",
          "legenda": "dos réus por tráfico tinham quantidade compatível com uso pessoal"
        },
        "premissas": [
          "A quantidade apreendida é um bom indicador de quem é usuário."
        ],
        "pergunte": [
          "Só com maconha, o efeito estimado cai para 1% a 2,4% dos presos. O impacto é grande ou pequeno?"
        ]
      },
      {
        "id": "ipea-criterios-2023",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Estudo",
        "titulo": "Critérios objetivos no processamento criminal por tráfico de drogas",
        "autores": "Ipea",
        "data": "05/2023",
        "formato": "Reportagem",
        "url": "https://abcdoabc.com.br/pesquisa-do-ipea-aponta-falha-em-acoes-criminais-por-trafico-de-drogas/",
        "tese": "Os processos por tráfico registram mal as quantidades apreendidas, e boa parte deles envolve pouca droga. Um critério objetivo de quantidade evitaria tratar usuários como traficantes.",
        "numero": {
          "valor": "31%",
          "legenda": "dos processos com maconha poderiam ser presumidos como uso pessoal, no cenário mais conservador"
        },
        "premissas": [
          "Analisa processos de tráfico julgados no primeiro semestre de 2019 em todo o país."
        ],
        "pergunte": [
          "Quem decide hoje se a pessoa é usuária ou traficante, e com que critério?"
        ]
      },
      {
        "id": "ufjf-possato",
        "posicao": "favoravel",
        "instituicao": "UFJF",
        "natureza": "Universidade pública (Faculdade de Direito)",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "Uma análise das políticas regulatórias da posse de drogas para consumo pessoal",
        "autores": "Arthur Navarro Possato (orientação de Wagner Silveira Rezende)",
        "data": "03/2021",
        "formato": "Página",
        "url": "https://repositorio.ufjf.br/jspui/handle/ufjf/12862",
        "tese": "O artigo 28 da Lei de Drogas é inconstitucional. Tirar o uso de maconha da esfera criminal ajudaria a combater o tráfico e o hiperencarceramento, e a garantir tratamento a pacientes.",
        "premissas": [
          "Compara políticas de drogas de vários países.",
          "O Estado não deve punir condutas que afetam só a própria pessoa."
        ],
        "pergunte": [
          "Que país tem a política de drogas mais parecida com a que o autor defende, e como estão os resultados lá?"
        ]
      },
      {
        "id": "cfm-abp-nota",
        "posicao": "contrario",
        "instituicao": "CFM e ABP",
        "natureza": "Conselho Federal de Medicina e Associação Brasileira de Psiquiatria",
        "tipo": "Nota técnica",
        "titulo": "CFM e ABP publicam nota contra a descriminalização da maconha no país",
        "autores": "Conselho Federal de Medicina e Associação Brasileira de Psiquiatria",
        "data": "16/08/2023",
        "formato": "Página",
        "url": "https://portal.cfm.org.br/noticias/na-vespera-de-debate-no-senado-o-cfm-e-a-abp-publicam-nota-contra-a-descriminalizacao-da-maconha-no-pais/",
        "tese": "A maconha causa dependência grave e pode desencadear psicoses, algumas irreversíveis. Facilitar o uso tende a aumentar o consumo, acidentes, homicídios e suicídios, e a fortalecer o tráfico.",
        "premissas": [
          "Menos restrição leva a mais consumo.",
          "O Estado deve investir em prevenção e tratamento, não em flexibilizar."
        ],
        "pergunte": [
          "A nota não apresenta fontes para seus números. Que estudos sustentariam essas previsões?",
          "Riscos à saúde justificam tratar o usuário como criminoso?"
        ]
      },
      {
        "id": "senado-pec-45",
        "posicao": "contrario",
        "instituicao": "Senado Federal",
        "natureza": "Decisão do Senado (votação em plenário)",
        "tipo": "Proposta legislativa",
        "titulo": "PEC 45/2023: posse e porte de qualquer quantidade de droga como crime",
        "autores": "Senador Rodrigo Pacheco (autor)",
        "data": "16/04/2024",
        "formato": "Reportagem",
        "url": "https://www.migalhas.com.br/quentes/405614/senado-aprova-pec-que-criminaliza-porte-de-drogas-texto-vai-a-camara",
        "tese": "Cabe ao Congresso, e não ao STF, decidir o que é crime. A PEC mantém o porte de qualquer quantidade como crime, mas prevê penas alternativas e tratamento, sem prisão, para o usuário.",
        "numero": {
          "valor": "53 a 9",
          "legenda": "votos no Senado no primeiro turno"
        },
        "premissas": [
          "A distinção entre usuário e traficante deve olhar as circunstâncias de cada caso, não só a quantidade."
        ],
        "pergunte": [
          "Sem um critério de quantidade, como evitar que pessoas parecidas sejam tratadas de forma diferente?"
        ]
      },
      {
        "id": "lenad-iii",
        "posicao": "contrario",
        "instituicao": "Unifesp",
        "natureza": "Universidade pública (Levantamento Nacional de Álcool e Drogas)",
        "tipo": "Pesquisa",
        "titulo": "3º Levantamento Nacional de Álcool e Drogas (Lenad III): cannabis",
        "autores": "Pesquisadores da Unifesp, coordenação de Clarice Sandi Madruga",
        "data": "2023 (dados)",
        "formato": "Reportagem",
        "url": "https://revistapesquisa.fapesp.br/consumo-de-drogas-ilicitas-cresceu-cerca-de-80-no-brasil-de-2012-a-2023/",
        "tese": "O uso de maconha mais que dobrou no país entre 2012 e 2023, e muitos jovens acham que experimentar quase não tem risco. Para os críticos da descriminalização, sinalizar tolerância tende a agravar esse quadro.",
        "numero": {
          "valor": "2,8% → 6%",
          "legenda": "dos brasileiros usaram maconha no último ano, de 2012 para 2023"
        },
        "premissas": [
          "O levantamento mede consumo e percepção de risco. Ele não avalia a decisão do STF, que é posterior."
        ],
        "pergunte": [
          "O consumo subiu antes da decisão do STF. O que explica essa alta?"
        ]
      }
    ],
    "videos": [
      {
        "id": "SR23ET60M-g",
        "titulo": "“Proibir maconha é a mesma lógica que proibir cachorro”, diz o neurocientista Sidarta Ribeiro",
        "canal": "Santa Cannabis",
        "nota": "O pesquisador da UFRN critica a proibição.",
        "duracao": "2:51"
      },
      {
        "id": "Z_7TODf5JSs",
        "titulo": "Maconha e adolescência: depressão e suicídio",
        "canal": "Dr Ronaldo Laranjeira",
        "nota": "O psiquiatra da Unifesp fala dos riscos para quem começa cedo.",
        "duracao": "2:44"
      },
      {
        "id": "XE4gBkkKEvw",
        "titulo": "Prejuízos da maconha na infância e adolescência",
        "canal": "Café com o Psiquiatra",
        "nota": "Os efeitos do uso precoce no cérebro em formação.",
        "duracao": "4:43"
      },
      {
        "id": "unZcDsqrgEM",
        "titulo": "A legalização resolveria a superlotação dos presídios?",
        "canal": "Cortes do Flow",
        "nota": "Convidados discutem um dos argumentos centrais de quem defende a mudança: tirar usuários e pequenos traficantes das cadeias.",
        "duracao": "14:08"
      },
      {
        "id": "pRoqORpoB6I",
        "titulo": "Descriminalização da maconha: entenda a diferença entre usuário e traficante",
        "canal": "CNN Brasil",
        "nota": "Como o STF passou a separar quem usa de quem vende.",
        "duracao": "4:51"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/maconha.jpg",
      "autor": "Fronteira",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:12%C2%AA_Marcha_da_Maconha,_Pra%C3%A7a_Universit%C3%A1ria,_Goi%C3%A2nia,_junho_de_2024_(2).jpg",
      "legenda": "Marcha da Maconha em Goiânia, junho de 2024.",
      "alt": "Pessoas reunidas numa praça arborizada durante uma marcha",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "super-ricos",
    "titulo": "Imposto mínimo para os super-ricos",
    "categoria": "economia",
    "tags": [
      "imposto de renda",
      "isenção até R$ 5 mil",
      "dividendos",
      "alta renda",
      "Lei 15.270",
      "desigualdade",
      "tributação"
    ],
    "pergunta": "Quem ganha muito deve pagar um imposto mínimo de 10%?",
    "resumo": "Desde 2026, quem ganha até R$ 5 mil por mês não paga imposto de renda, e quem ganha mais de R$ 1,2 milhão por ano paga no mínimo 10%. A dúvida é se a conta fecha e se a cobrança afasta investimentos.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor do imposto mínimo",
      "contrario": "Contra ou com ressalvas"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Desde 1996, lucros e dividendos que as empresas pagam aos sócios não têm imposto de renda no Brasil. Como os mais ricos recebem boa parte da renda assim, eles acabam pagando, proporcionalmente, menos que muitos assalariados.",
        "A Lei 15.270, sancionada em novembro de 2025, isentou do imposto quem ganha até R$ 5 mil por mês e reduziu o imposto de quem ganha até R$ 7.350. Para compensar, criou um imposto mínimo que sobe aos poucos a partir de R$ 600 mil por ano e chega a 10% para rendas acima de R$ 1,2 milhão. Também passou a reter 10% dos dividendos acima de R$ 50 mil por mês.",
        "Segundo o governo, 20 milhões de pessoas ficam sem pagar imposto de renda e cerca de 140 mil contribuintes de alta renda são atingidos pelo imposto mínimo.",
        "Em julho de 2026, a Receita reduziu de R$ 28 bilhões para R$ 17,2 bilhões a previsão de arrecadação com os dividendos neste ano. O debate agora é se a compensação funciona e se a cobrança prejudica o investimento."
      ],
      "fatos": [
        {
          "rotulo": "Isenção do IR",
          "valor": "até R$ 5 mil/mês"
        },
        {
          "rotulo": "Imposto mínimo acima de R$ 1,2 mi/ano",
          "valor": "10%"
        },
        {
          "rotulo": "Contribuintes atingidos",
          "valor": "≈ 140 mil"
        },
        {
          "rotulo": "Previsão com dividendos em 2026",
          "valor": "R$ 17,2 bi"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Quem paga mais",
        "favoravel": "O 0,01% mais rico paga uma alíquota efetiva de 12,9%, menor que os 14,2% de quem ganha R$ 6 mil por mês. (A1)",
        "contrario": "O lucro já paga até 34% na empresa. Somando o dividendo, o Brasil ficaria entre os que mais tributam o capital na OCDE. (B3)",
        "fonte_favoravel": "ipea-progressividade",
        "fonte_contrario": "ibdt-dividendos"
      },
      {
        "tema": "Arrecadação",
        "favoravel": "Um imposto mínimo de 15% sobre milionários renderia até R$ 90 bilhões por ano e pagaria a isenção para quem ganha até R$ 5 mil. (A2)",
        "contrario": "A arrecadação com dividendos deve ficar R$ 10,8 bilhões abaixo do previsto no orçamento de 2026. (B2)",
        "fonte_favoravel": "made-usp-minimo",
        "fonte_contrario": "receita-2026"
      },
      {
        "tema": "Economia",
        "favoravel": "Voltar a tributar dividendos, reduzindo impostos sobre o consumo, diminuiria a desigualdade de forma significativa. (A3)",
        "contrario": "Cobrar 10% sobre dividendos enviados ao exterior afastaria investimento: 34,5 mil empregos a menos até 2035, segundo a simulação. (B1)",
        "fonte_favoravel": "ipea-td-2449",
        "fonte_contrario": "amcham-ufmg"
      }
    ],
    "glossario": [
      {
        "termo": "Dividendos",
        "definicao": "Parte do lucro que a empresa distribui aos sócios e acionistas."
      },
      {
        "termo": "Alíquota efetiva",
        "definicao": "O quanto de imposto a pessoa paga de fato, em relação a toda a sua renda, depois de isenções e deduções."
      },
      {
        "termo": "Imposto mínimo",
        "definicao": "Regra que garante que rendas muito altas paguem pelo menos um percentual, somando tudo o que a pessoa recebe."
      },
      {
        "termo": "Progressividade",
        "definicao": "Quando quem ganha mais paga uma parcela maior da renda em impostos."
      },
      {
        "termo": "Bitributação",
        "definicao": "Cobrar imposto duas vezes sobre a mesma renda, como no lucro da empresa e depois no dividendo do sócio."
      }
    ],
    "incertezas": [
      "Quanto o imposto mínimo vai arrecadar de verdade, já que a primeira declaração com a regra nova só acontece em 2027.",
      "Quanto os contribuintes vão mudar a forma de receber renda para pagar menos.",
      "Se o efeito sobre investimento estrangeiro previsto pelas câmaras de comércio vai aparecer nos dados."
    ],
    "fontes": [
      {
        "titulo": "Reforma Tributária: Lula sanciona isenção do IR até R$ 5 mil e cria imposto mínimo (nov/2025)",
        "url": "https://www.reformatributaria.com/governo/lula-sanciona-isencao-do-ir-ate-r-5-000-mes-e-cria-imposto-minimo-a-rendas-acima-de-r-600-ano-entenda-regras/"
      },
      {
        "titulo": "O Povo: Receita prevê arrecadar R$ 17,2 bilhões com IR sobre dividendos (jul/2026)",
        "url": "https://www.opovo.com.br/noticias/economia/2026/07/24/amp/receita-preve-arrecadar-rs-172-bilhoes-com-ir-sobre-dividendos.html"
      }
    ],
    "leituras": [
      {
        "id": "ipea-progressividade",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Nota técnica",
        "titulo": "Progressividade tributária: diagnóstico para uma proposta de reforma",
        "autores": "Sérgio Wulff Gobetti",
        "data": "10/2024",
        "formato": "Reportagem",
        "url": "https://www.infomoney.com.br/?p=2655062",
        "tese": "A alíquota efetiva sobe até rendas de cerca de R$ 500 mil por ano e depois cai. O 0,01% mais rico paga proporcionalmente menos que um assalariado de R$ 6 mil por mês.",
        "numero": {
          "valor": "12,9% x 14,2%",
          "legenda": "alíquota efetiva do 0,01% mais rico x a de quem ganha R$ 6 mil por mês"
        },
        "premissas": [
          "Soma o imposto pago pela empresa e pela pessoa para comparar."
        ],
        "pergunte": [
          "Mesmo contando o imposto da empresa, o topo paga menos. O que explicaria isso?"
        ]
      },
      {
        "id": "made-usp-minimo",
        "posicao": "favoravel",
        "instituicao": "Made/USP",
        "natureza": "Centro de Pesquisa em Macroeconomia das Desigualdades, da FEA-USP",
        "tipo": "Estudo",
        "titulo": "Imposto mínimo sobre milionários",
        "autores": "Made-USP (relato do Sindifisco-MS, a partir da Folha de S.Paulo)",
        "data": "10/2024",
        "formato": "Reportagem",
        "url": "https://sindifisco-ms.org.br/tributos/imposto-de-milionarios-reduz-desigualdade-e-pode-chegar-a-r-90-bi-diz-centro-da-usp",
        "tese": "Um imposto mínimo sobre milionários pagaria a isenção para quem ganha até R$ 5 mil e ainda reduziria a desigualdade. Quem ganha entre R$ 3 mil e R$ 29 mil por mês sairia ganhando.",
        "numero": {
          "valor": "até R$ 90 bi",
          "legenda": "por ano com alíquota mínima de 15%"
        },
        "premissas": [
          "Simula alíquotas de 12% e 15%, maiores que os 10% aprovados."
        ],
        "pergunte": [
          "Com 10%, a arrecadação seria bem menor que a simulada. A conta ainda fecha?"
        ]
      },
      {
        "id": "ipea-td-2449",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal, com autores da UFMG",
        "tipo": "Texto para discussão",
        "titulo": "Imposto de renda e distribuição de renda no Brasil",
        "autores": "Rodrigo Cardoso Fernandes, Bernardo Campolina e Fernando Gaiger Silveira",
        "data": "02/2019",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/9136/2/TD_2449_sumex.pdf",
        "tese": "O sistema brasileiro é regressivo porque cobra muito no consumo e pouco na renda e no patrimônio. Voltar a tributar dividendos, reduzindo impostos sobre consumo, diminuiria a desigualdade de forma significativa.",
        "premissas": [
          "O 10% mais rico concentra mais da metade da renda do país."
        ],
        "pergunte": [
          "A lei aprovada tributa dividendos, mas não reduziu impostos sobre consumo. O efeito seria o mesmo?"
        ]
      },
      {
        "id": "amcham-ufmg",
        "posicao": "contrario",
        "instituicao": "Amcham e Britcham",
        "natureza": "Câmaras de comércio Brasil-EUA e Brasil-Reino Unido, com modelo de professor da UFMG",
        "tipo": "Estudo",
        "titulo": "Impactos da tributação de dividendos remetidos ao exterior",
        "autores": "Amcham e Britcham, modelo de Edson Paulo Domingues (UFMG)",
        "data": "08/2025",
        "formato": "Reportagem",
        "url": "https://netcpa.com.br/colunas/proposta-de-taxar-remessas-de-dividendos-ao-exterior-pode-causar-perdas-de-r-68-bi-no-pib-em-dez-anos-aponta-estudo/26152",
        "tese": "Cobrar 10% sobre dividendos enviados ao exterior encarece o capital e afasta investimento estrangeiro. Para cada real arrecadado, a economia perderia 70 centavos.",
        "numero": {
          "valor": "34,5 mil",
          "legenda": "empregos a menos até 2035, segundo a simulação"
        },
        "premissas": [
          "Investidores estrangeiros reagem ao custo extra levando o dinheiro para outros países."
        ],
        "pergunte": [
          "Quem encomendou o estudo representa empresas estrangeiras. Como isso pesa?",
          "Uma perda de 0,06% do PIB em dez anos é grande ou pequena?"
        ]
      },
      {
        "id": "receita-2026",
        "posicao": "contrario",
        "instituicao": "Receita Federal",
        "natureza": "Órgão do governo federal (relatório bimestral de receitas)",
        "tipo": "Dado oficial",
        "titulo": "Previsão de arrecadação com IR sobre dividendos em 2026",
        "autores": "Receita Federal (relato do O Povo)",
        "data": "24/07/2026",
        "formato": "Reportagem",
        "url": "https://www.opovo.com.br/noticias/economia/2026/07/24/amp/receita-preve-arrecadar-rs-172-bilhoes-com-ir-sobre-dividendos.html",
        "tese": "A arrecadação com dividendos deve ficar bem abaixo do previsto no orçamento. Para os críticos, é sinal de que os mais ricos se ajustam e de que a isenção pode não ter compensação suficiente.",
        "numero": {
          "valor": "−R$ 10,8 bi",
          "legenda": "abaixo do previsto no orçamento de 2026"
        },
        "premissas": [
          "O governo diz que outras receitas estão compensando e que é cedo para concluir."
        ],
        "pergunte": [
          "O imposto mínimo anual só aparece na declaração de 2027. Dá para julgar a lei agora?"
        ]
      },
      {
        "id": "ibdt-dividendos",
        "posicao": "contrario",
        "instituicao": "IBDT",
        "natureza": "Revista Direito Tributário Atual, do Instituto Brasileiro de Direito Tributário",
        "tipo": "Artigo acadêmico",
        "titulo": "A tributação dos dividendos: análise comparativa da incidência do imposto de renda das empresas no Brasil com os países membros da OCDE",
        "autores": "Gileno G. Barreto",
        "data": "c. 2018",
        "formato": "PDF",
        "url": "https://revista.ibdt.org.br/index.php/RDTA/article/download/1503/925/4810",
        "tese": "Quem diz que o Brasil tributa pouco o capital olha só para o dividendo e esquece que o lucro já paga até 34% na empresa. Somando tudo, tributar também o dividendo poria o país entre os que mais cobram do capital na OCDE.",
        "premissas": [
          "O imposto da empresa recai, no fim, sobre o sócio."
        ],
        "pergunte": [
          "O artigo analisa uma proposta de 2015, mais pesada que a lei aprovada. As conclusões valem para a regra atual?"
        ]
      }
    ],
    "videos": [
      {
        "id": "sxRE7OlCRcg",
        "titulo": "Bilionários: como os super-ricos escapam dos impostos no Brasil",
        "canal": "Politize!",
        "nota": "Uma explicação didática das brechas usadas pelo topo.",
        "duracao": "7:45"
      },
      {
        "id": "SWX7BzmUXTI",
        "titulo": "“Quem ganha 600 mil por ano não é super-rico”, diz Kim Kataguiri",
        "canal": "BBC News Brasil",
        "nota": "A crítica à linha de corte do imposto mínimo.",
        "duracao": "0:58"
      },
      {
        "id": "prWlxQXWMM8",
        "titulo": "Taxar dividendos é um erro",
        "canal": "Luiz Barsi",
        "nota": "O investidor explica por que vê a cobrança como prejudicial.",
        "duracao": "2:05"
      },
      {
        "id": "yJLt5aiPWhk",
        "titulo": "Precisamos taxar os mais ricos",
        "canal": "Cortes do Flow",
        "nota": "Convidado do Flow defende cobrar mais de quem está no topo.",
        "duracao": "11:49"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/super-ricos.jpg",
      "autor": "Agent010",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Avenida_Brigadeiro_Faria_Lima8.jpg",
      "legenda": "Avenida Brigadeiro Faria Lima, centro financeiro de São Paulo.",
      "alt": "Prédios de escritórios espelhados na Avenida Faria Lima",
      "posicao": "50% 40%"
    }
  },
  {
    "id": "cotas-universidades",
    "titulo": "Cotas nas universidades",
    "categoria": "educacao",
    "tags": [
      "Lei de Cotas",
      "ações afirmativas",
      "cotas raciais",
      "UFJF",
      "ensino superior",
      "Lei 12.711"
    ],
    "pergunta": "As cotas raciais nas universidades devem continuar?",
    "resumo": "Desde 2012, metade das vagas das universidades federais é reservada a alunos de escola pública, com parte para pretos, pardos, indígenas e pessoas com deficiência. O debate é se o critério racial deve continuar.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor das cotas raciais",
      "contrario": "Contra ou com ressalvas"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Lei 12.711, de 2012, reserva 50% das vagas das universidades e institutos federais para quem estudou o ensino médio em escola pública. Dentro dessa reserva, há vagas para estudantes de baixa renda e para pretos, pardos e indígenas, na proporção da população de cada estado.",
        "Em 2023, a lei foi revista: passou a incluir quilombolas, mudou a forma de preencher as vagas e manteve a avaliação a cada dez anos.",
        "Os defensores dizem que as cotas mudaram a cara das universidades sem piorar a qualidade. Os críticos dizem que o critério racial divide a sociedade, que é difícil definir quem é negro no Brasil e que o problema principal é a renda, já coberto pela cota social.",
        "Há também quem apoie as cotas, mas aponte problemas: falta de apoio para os cotistas se manterem no curso e fraudes na autodeclaração."
      ],
      "fatos": [
        {
          "rotulo": "Vagas reservadas nas federais",
          "valor": "50%"
        },
        {
          "rotulo": "Pretos, pardos e indígenas no ensino superior público (2001)",
          "valor": "31%"
        },
        {
          "rotulo": "Mesmo grupo em 2020",
          "valor": "52%"
        },
        {
          "rotulo": "Lei de Cotas",
          "valor": "2012"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Desempenho",
        "favoravel": "No Enade de 2017, as cotas ampliaram o acesso sem prejudicar o desempenho dos cursos. No conjunto do país, cotistas foram até melhor. (A1)",
        "contrario": "Na UFJF, 70% dos cotistas negros tiveram ao menos uma reprovação, contra 54% dos não cotistas. A universidade não se preparou para recebê-los. (B3)",
        "fonte_favoravel": "ipea-enade-cotas",
        "fonte_contrario": "ufjf-eficacia"
      },
      {
        "tema": "Quem entra",
        "favoravel": "Pretos, pardos e indígenas passaram de 31% para 52% dos alunos do ensino superior público entre 2001 e 2020. (A3)",
        "contrario": "Boa parte da desigualdade racial é de renda. Cotas para escola pública e baixa renda já incluiriam mais negros sem classificar ninguém por cor. (B1)",
        "fonte_favoravel": "gemaa-10-anos",
        "fonte_contrario": "ufmg-color-blind"
      },
      {
        "tema": "Permanência",
        "favoravel": "Na UFPE, cotistas abandonam menos, trancam menos e se formam mais no prazo. (A2)",
        "contrario": "Classificar as pessoas por raça obriga o país a fazer uma separação que nunca fez, e políticas universais combateriam melhor a desigualdade. (B2)",
        "fonte_favoravel": "ipea-ufpe-cotas",
        "fonte_contrario": "ufrj-maggie"
      }
    ],
    "glossario": [
      {
        "termo": "Ação afirmativa",
        "definicao": "Política que dá tratamento diferenciado a um grupo para corrigir uma desigualdade histórica."
      },
      {
        "termo": "PPI",
        "definicao": "Pretos, pardos e indígenas, o grupo atendido pela cota racial."
      },
      {
        "termo": "Autodeclaração",
        "definicao": "Quando o próprio candidato informa sua cor ou raça. Muitas universidades confirmam com bancas de heteroidentificação."
      },
      {
        "termo": "Heteroidentificação",
        "definicao": "Verificação, feita por uma comissão, de que o candidato é visto socialmente como negro, para evitar fraudes."
      },
      {
        "termo": "Evasão",
        "definicao": "Quando o aluno abandona o curso antes de terminar."
      }
    ],
    "incertezas": [
      "O efeito das cotas sobre a renda e a carreira dos cotistas depois de formados.",
      "Quanto da inclusão de negros viria só com cotas sociais, sem o critério racial.",
      "Se as bancas de heteroidentificação resolvem as fraudes sem criar injustiças."
    ],
    "fontes": [
      {
        "titulo": "Lei 12.711/2012 (Lei de Cotas)",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12711.htm"
      },
      {
        "titulo": "Poder360: ingresso nas universidades aumenta 205% com Lei de Cotas, segundo estudo do Lepes/UFRJ e Ação Educativa (2022)",
        "url": "https://www.poder360.com.br/educacao/ingresso-de-negros-em-universidades-aumenta-205-com-lei-de-cotas/"
      }
    ],
    "leituras": [
      {
        "id": "ipea-enade-cotas",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal (revista Planejamento e Políticas Públicas)",
        "tipo": "Artigo",
        "titulo": "Impacto das cotas no desempenho de estudantes no curso e no longo prazo",
        "autores": "Artigo publicado na revista PPP, n. 64",
        "data": "10/2023",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/12388/3/ppp_n64_Artigo2_impacto_das_cotas_no_desempenho.pdf",
        "tese": "Com dados do Enade de 2017, o estudo conclui que as cotas ampliaram o acesso ao ensino superior sem prejudicar o desempenho dos cursos. No conjunto do país, cotistas foram até melhor.",
        "premissas": [
          "A nota no Enade mede bem o aprendizado no fim do curso."
        ],
        "pergunte": [
          "Em letras, matemática e engenharias não houve diferença. Por que o efeito varia tanto entre cursos?"
        ]
      },
      {
        "id": "ipea-ufpe-cotas",
        "posicao": "favoravel",
        "instituicao": "UFPE e Ufal (revista do Ipea)",
        "natureza": "Universidades públicas, artigo na revista PPP do Ipea",
        "tipo": "Artigo",
        "titulo": "Avaliação do desempenho de cotistas e não cotistas na UFPE entre 2018 e 2022",
        "autores": "Felipe Lucena Carneiro de Albuquerque (UFPE) e Anderson Moreira Aristides dos Santos (Ufal)",
        "data": "2024",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstreams/b333dc79-6dfe-4ceb-8df5-3759ce04eb16/download",
        "tese": "Com 345 mil registros de alunos da UFPE, o estudo mostra que cotistas abandonam menos, trancam menos e se formam mais no prazo. As notas são um pouco menores, mas a diferença tem pouca importância prática.",
        "numero": {
          "valor": "-9,7 p.p.",
          "legenda": "na chance de o cotista se formar com atraso, frente ao não cotista"
        },
        "premissas": [
          "Medicina ficou de fora da análise.",
          "Os resultados de uma universidade ajudam a entender as demais."
        ],
        "pergunte": [
          "Cotistas reprovam um pouco mais, mas se formam mais no prazo. Como as duas coisas convivem?"
        ]
      },
      {
        "id": "gemaa-10-anos",
        "posicao": "favoravel",
        "instituicao": "Gemaa/UERJ",
        "natureza": "Grupo de pesquisa da UERJ, no Consórcio de Acompanhamento das Ações Afirmativas",
        "tipo": "Relatório",
        "titulo": "10 perguntas para entender a primeira década da Lei de Cotas",
        "autores": "Consórcio de Acompanhamento das Ações Afirmativas",
        "data": "08/2022",
        "formato": "PDF",
        "url": "https://teste.gemaa.iesp.uerj.br/wp-content/uploads/2022/08/CAA_cartilha_08_bxa.pdf",
        "tese": "Em dez anos, a universidade pública ficou mais parecida com o Brasil: pretos, pardos e indígenas viraram maioria, e os mais pobres também. Os cotistas têm desempenho equivalente e evadem menos.",
        "numero": {
          "valor": "31% → 52%",
          "legenda": "de pretos, pardos e indígenas no ensino superior público entre 2001 e 2020"
        },
        "premissas": [
          "A mudança no perfil dos alunos se deve em boa parte às cotas, e não só à expansão das vagas."
        ],
        "pergunte": [
          "As vagas também cresceram muito no período (Reuni). Como separar o efeito das cotas do efeito da expansão?"
        ]
      },
      {
        "id": "ufmg-color-blind",
        "posicao": "contrario",
        "instituicao": "UFMG",
        "natureza": "Universidade pública (Cedeplar), em revista acadêmica da UFF",
        "tipo": "Artigo",
        "titulo": "Como combater o racismo de forma eficaz: a reação da democracia racial e a instituição de políticas color-blind",
        "autores": "Alvaro Alberto Ferreira Mendes Junior (doutorando em Economia, Cedeplar/UFMG)",
        "data": "2015",
        "formato": "PDF",
        "url": "https://periodicos.uff.br/revistaeconomica/article/download/34968/20222/117354",
        "tese": "Raça não tem base biológica e classificar pessoas por cor gera fraudes e tribunais raciais. Boa parte da desigualdade racial é de renda, e cotas para escola pública e baixa renda já aumentariam o número de negros sem usar a raça.",
        "premissas": [
          "A desigualdade entre brancos e negros é explicada sobretudo pela classe social.",
          "O ideal da democracia racial ainda é útil para combater o racismo."
        ],
        "pergunte": [
          "Se a cota social já inclui muitos negros, por que a desigualdade racial persiste entre pessoas de mesma renda?"
        ]
      },
      {
        "id": "ufrj-maggie",
        "posicao": "contrario",
        "instituicao": "UFRJ",
        "natureza": "Universidade pública (antropologia), em revista acadêmica espanhola",
        "tipo": "Artigo",
        "titulo": "Em breve um país dividido? O Brasil do século XXI e as novas políticas públicas com base na raça",
        "autores": "Yvonne Maggie, professora de antropologia da UFRJ",
        "data": "2006",
        "formato": "Página",
        "url": "https://raco.cat/index.php/Periferia/article/view/146545",
        "tese": "O Brasil nunca separou as pessoas em duas raças, e as cotas obrigam o país a fazer isso. A autora acompanha o debate que dividiu intelectuais e movimentos sociais e a carta pública que defendeu políticas universais.",
        "premissas": [
          "A classificação racial oficial muda a forma como as pessoas se veem.",
          "Políticas universais combatem melhor a desigualdade."
        ],
        "pergunte": [
          "O texto é de 2006, antes da lei. Os temores de divisão se confirmaram nesses anos?"
        ]
      },
      {
        "id": "ufjf-eficacia",
        "posicao": "contrario",
        "instituicao": "UFJF",
        "natureza": "Universidade pública (professores e então pró-reitor de graduação)",
        "tipo": "Artigo",
        "titulo": "Política de cotas na UFJF: eficácia e eficiência",
        "autores": "Antonio Fernando de Castro Alves Beraldo e Eduardo Magrone (UFJF), Revista de Ciências Humanas (UFV)",
        "data": "2012",
        "formato": "PDF",
        "url": "https://periodicos.ufv.br/RCH/article/download/3447/Pol%C3%ADtica%20de%20Cotas%20na%20UFJF%3A%20Efic%C3%A1cia%20e%20Efici%C3%AAncia/16075",
        "tese": "Avaliação crítica da própria UFJF: as cotas ampliaram o acesso, mas a universidade não se preparou para receber os cotistas, que reprovaram mais em algumas áreas. E a parcela de alunos negros não chegou à meta.",
        "numero": {
          "valor": "70%",
          "legenda": "dos cotistas negros tiveram ao menos uma reprovação, contra 54% dos não cotistas"
        },
        "premissas": [
          "É uma crítica à execução, não ao princípio das cotas.",
          "Dados de uma única universidade, antes da Lei de Cotas."
        ],
        "pergunte": [
          "O problema está nas cotas ou na falta de apoio aos alunos depois que entram?"
        ]
      }
    ],
    "videos": [
      {
        "id": "-m7eO7hPkOA",
        "titulo": "Por que precisamos de cotas raciais no Brasil?",
        "canal": "Nem 5 Minutos",
        "nota": "Desigualdade e representatividade em cinco minutos.",
        "duracao": "5:01"
      },
      {
        "id": "71TfULwLyHk",
        "titulo": "Professor Paulo Cruz explica por que é contra as cotas raciais",
        "canal": "Pânico Jovem Pan",
        "nota": "Professor negro e conservador expõe seus argumentos.",
        "duracao": "4:53"
      },
      {
        "id": "4c5HPYMzo-g",
        "titulo": "Helio de La Peña diz por que mudou de ideia sobre cotas raciais",
        "canal": "UOL",
        "nota": "O humorista, que já foi contra, explica por que passou a defender.",
        "duracao": "9:53"
      },
      {
        "id": "Q_TDtYatslI",
        "titulo": "À CNN, Renan pede fim de cotas raciais: “injustas” e atendem a classe média",
        "canal": "CNN Brasil",
        "nota": "Candidato defende trocar as cotas raciais por foco na escola básica.",
        "duracao": "7:59"
      },
      {
        "id": "P5nTR282gwE",
        "titulo": "A importância das cotas",
        "canal": "Cortes do Flow",
        "nota": "Por que as cotas fazem diferença na vida de quem entra pela reserva.",
        "duracao": "4:28"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/cotas-universidades.jpg",
      "autor": "Marcelo Camargo/Agência Brasil",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:ENEM_2017_(37652558774).jpg",
      "legenda": "Candidatos chegam para o Enem em Brasília, 2017.",
      "alt": "Estudantes passam pelos portões de um local de prova",
      "posicao": "50% 40%"
    }
  },
  {
    "id": "civico-militares",
    "titulo": "Escolas cívico-militares",
    "categoria": "educacao",
    "tags": [
      "Pecim",
      "Tarcísio",
      "Paraná",
      "disciplina",
      "Ideb",
      "STF",
      "militarização",
      "gestão escolar"
    ],
    "pergunta": "Escolas públicas devem ter militares na gestão e na disciplina?",
    "resumo": "O governo federal encerrou seu programa em 2023, mas estados como São Paulo e Paraná criaram os próprios. O STF julga se o modelo paulista é constitucional, e o julgamento está suspenso.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor do modelo",
      "contrario": "Contra o modelo"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Na escola cívico-militar, a escola continua pública e as aulas seguem com professores civis, mas policiais ou militares da reserva cuidam da disciplina, da organização e de atividades cívicas, como hino e uniforme. É diferente do colégio militar, que é mantido pelas Forças Armadas ou pela PM.",
        "O programa federal (Pecim) foi criado em 2019 e chegou a cerca de 200 escolas. O governo Lula o encerrou em 2023. Vários estados mantiveram ou criaram programas próprios. O Paraná tem mais de 300 escolas no modelo, e São Paulo aprovou o seu em 2024 (Lei Complementar 1.398).",
        "A lei paulista é questionada no STF. Em maio de 2026, o relator Gilmar Mendes votou para mantê-la, desde que a direção continue civil, a parte pedagógica fique com os professores e haja outra escola por perto para quem não quiser o modelo. Cristiano Zanin pediu vista, e o julgamento parou.",
        "Defensores falam em mais disciplina, segurança e melhora nas notas. Críticos dizem que os dados são fracos, que militares não são educadores e que o modelo pode limitar a liberdade de expressão de alunos e professores."
      ],
      "fatos": [
        {
          "rotulo": "Escolas no modelo no Paraná",
          "valor": "312"
        },
        {
          "rotulo": "Aprovação entre pais no Paraná (pesquisa do governo)",
          "valor": "89%"
        },
        {
          "rotulo": "Escolas do programa federal até o fim, em 2023",
          "valor": "≈ 200"
        },
        {
          "rotulo": "Situação no STF",
          "valor": "Suspenso"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Aprendizado",
        "favoravel": "Em Goiás, escolas com gestão militar tiveram, em média, 15 pontos a mais em matemática no Saeb que escolas parecidas. (A1)",
        "contrario": "No DF, só 6 das 14 escolas do modelo tinham Ideb comparável. Dessas, 4 subiram e 2 caíram. (B1)",
        "fonte_favoravel": "enap-goias",
        "fonte_contrario": "undf-ideb"
      },
      {
        "tema": "Gestão da escola",
        "favoravel": "89% dos pais das escolas do Paraná aprovam o modelo e dizem ver mais disciplina e mais aprendizado. (A3)",
        "contrario": "Para mais de 100 entidades, o modelo viola a gestão democrática prevista na Constituição e tira policiais da segurança pública. (B2)",
        "fonte_favoravel": "parana-pesquisa-2025",
        "fonte_contrario": "carta-entidades-2026"
      },
      {
        "tema": "Limites",
        "favoravel": "O STF aceita o modelo se a direção for civil, a parte pedagógica ficar com os professores e houver outra escola por perto. (A2)",
        "contrario": "O modelo padroniza comportamentos, pune a diferença e troca o diálogo pela obediência, afastando os alunos que mais precisam da escola. (B3)",
        "fonte_favoravel": "stf-gilmar-2026",
        "fonte_contrario": "ihu-catarina"
      }
    ],
    "glossario": [
      {
        "termo": "Pecim",
        "definicao": "Programa Nacional das Escolas Cívico-Militares, criado pelo governo federal em 2019 e encerrado em 2023."
      },
      {
        "termo": "Colégio militar",
        "definicao": "Escola mantida pelas Forças Armadas ou pela Polícia Militar, com processo seletivo próprio. Não é o mesmo que a cívico-militar."
      },
      {
        "termo": "Ideb",
        "definicao": "Índice do MEC que junta as notas das provas nacionais e a taxa de aprovação das escolas."
      },
      {
        "termo": "Distorção idade-série",
        "definicao": "Quando o aluno está dois ou mais anos atrasado em relação à série esperada para a idade."
      },
      {
        "termo": "Pedido de vista",
        "definicao": "Quando um ministro pede mais tempo para analisar o processo, o que suspende o julgamento."
      }
    ],
    "incertezas": [
      "Se a melhora nas notas vem do modelo ou de mais verba, seleção de escolas e saída de alunos com dificuldade.",
      "Como o STF vai decidir sobre a lei de São Paulo depois do pedido de vista.",
      "Que efeito o modelo tem, a longo prazo, sobre a formação cidadã dos alunos."
    ],
    "fontes": [
      {
        "titulo": "Brasil de Fato: Zanin pede vista e suspende julgamento sobre escolas cívico-militares de SP (mai/2026)",
        "url": "https://www.brasildefato.com.br/2026/05/26/zanin-pede-vista-e-suspende-julgamento-sobre-escolas-civico-militares-de-sao-paulo/"
      }
    ],
    "leituras": [
      {
        "id": "enap-goias",
        "posicao": "favoravel",
        "instituicao": "Enap",
        "natureza": "Escola Nacional de Administração Pública (Cadernos Enap)",
        "tipo": "Estudo",
        "titulo": "Caderno 124: o efeito das escolas militarizadas de Goiás sobre o desempenho dos alunos",
        "autores": "Jevuks Matheus de Araújo",
        "data": "2021",
        "formato": "PDF",
        "url": "https://bibliotecadigital.enap.gov.br/bitstream/1/7587/1/Sum%c3%a1rio%20Executivo%20Caderno%20124%20Final.pdf",
        "tese": "Escolas estaduais de Goiás que passaram à gestão militar tiveram notas maiores em matemática e português e menos alunos atrasados do que escolas parecidas que não mudaram.",
        "numero": {
          "valor": "+15 pontos",
          "legenda": "em matemática no Saeb, em média"
        },
        "premissas": [
          "Compara as mesmas escolas antes e depois, contra um grupo de escolas semelhantes."
        ],
        "pergunte": [
          "Os colégios militares de Goiás recebem mais verba. Dá para separar esse efeito do efeito da disciplina?"
        ]
      },
      {
        "id": "stf-gilmar-2026",
        "posicao": "favoravel",
        "instituicao": "STF",
        "natureza": "Voto do relator no Supremo Tribunal Federal (ADIs 7662 e 7675)",
        "tipo": "Voto",
        "titulo": "Gilmar Mendes vota pela validade das escolas cívico-militares de São Paulo, com condições",
        "autores": "Gilmar Mendes (relato do Brasil de Fato)",
        "data": "26/05/2026",
        "formato": "Reportagem",
        "url": "https://www.brasildefato.com.br/2026/05/26/zanin-pede-vista-e-suspende-julgamento-sobre-escolas-civico-militares-de-sao-paulo/",
        "tese": "O estado pode adotar o modelo, desde que a direção seja civil, a parte pedagógica fique com os professores e as famílias tenham outra escola próxima como alternativa.",
        "premissas": [
          "A Constituição permite aos estados organizar suas redes de ensino."
        ],
        "pergunte": [
          "As condições do voto bastam para responder às críticas sobre liberdade e formação dos militares?"
        ]
      },
      {
        "id": "parana-pesquisa-2025",
        "posicao": "favoravel",
        "instituicao": "Governo do Paraná",
        "natureza": "Pesquisa da Paraná Pesquisas encomendada pela Secretaria de Educação do estado",
        "tipo": "Pesquisa de opinião",
        "titulo": "Modelo cívico-militar na educação do Paraná é aprovado por 90% de pais e professores",
        "autores": "Paraná Pesquisas (Agência Estadual de Notícias)",
        "data": "06/11/2025",
        "formato": "Página",
        "url": "https://www.parana.pr.gov.br/Audio/Modelo-civico-militar-na-educacao-do-Parana-e-aprovado-por-90-de-pais-e-professores",
        "tese": "Pais e professores das escolas cívico-militares do Paraná aprovam o modelo e dizem ver mais disciplina e mais aprendizado.",
        "numero": {
          "valor": "89%",
          "legenda": "dos pais e responsáveis aprovam o modelo"
        },
        "premissas": [
          "A satisfação de quem vive a escola é um bom indicador do resultado."
        ],
        "pergunte": [
          "A pesquisa foi encomendada pelo próprio governo que criou o programa. Isso muda como você lê os números?"
        ]
      },
      {
        "id": "undf-ideb",
        "posicao": "contrario",
        "instituicao": "UnDF e Inep",
        "natureza": "Artigo de pesquisadores da Universidade do Distrito Federal e do Inep, na revista Inter-Ação (UFG)",
        "tipo": "Artigo",
        "titulo": "Escolas cívico-militares do Distrito Federal e o Ideb",
        "autores": "Lima e Oliveira (revista Inter-Ação)",
        "data": "2025",
        "formato": "PDF",
        "url": "https://revistas.ufg.br/interacao/article/download/82994/43991/429375",
        "tese": "Das 14 escolas que adotaram o modelo no DF, só 6 tinham dados comparáveis no Ideb. Dessas, 4 subiram e 2 caíram. Os dados não sustentam a promessa de melhora garantida.",
        "numero": {
          "valor": "6 de 14",
          "legenda": "escolas tinham Ideb comparável"
        },
        "premissas": [
          "Uma política deve ser avaliada pelos indicadores oficiais, não só pela percepção."
        ],
        "pergunte": [
          "Com tão poucas escolas comparáveis, o estudo prova que o modelo não funciona ou só que ainda não dá para saber?"
        ]
      },
      {
        "id": "carta-entidades-2026",
        "posicao": "contrario",
        "instituicao": "Inesc e mais de 100 entidades",
        "natureza": "Carta de organizações da sociedade civil ao STF",
        "tipo": "Carta aberta",
        "titulo": "Carta pela desmilitarização das escolas, enviada ao julgamento do STF",
        "autores": "Mais de 100 entidades (documento hospedado pelo Inesc)",
        "data": "05/2026",
        "formato": "PDF",
        "url": "https://inesc.org.br/wp-content/uploads/2026/05/carta-desmilitarizacao-_-julgamento-stf.pdf",
        "tese": "Militarizar escolas desvia policiais da segurança pública, viola a gestão democrática prevista na Constituição e expõe alunos a regras e punições incompatíveis com a educação.",
        "numero": {
          "valor": "100+",
          "legenda": "entidades assinam a carta"
        },
        "premissas": [
          "A Constituição exige gestão democrática do ensino público."
        ],
        "pergunte": [
          "Se a família escolhe a escola, a gestão continua sendo democrática?"
        ]
      },
      {
        "id": "ihu-catarina",
        "posicao": "contrario",
        "instituicao": "UnB",
        "natureza": "Entrevista com professora da Faculdade de Educação da UnB ao Instituto Humanitas Unisinos",
        "tipo": "Entrevista",
        "titulo": "A escola militarizada é a escola que nega as diferenças",
        "autores": "Catarina de Almeida Santos (IHU Unisinos)",
        "data": "24/08/2024",
        "formato": "Página",
        "url": "https://www.ihu.unisinos.br/642850-a-escola-militarizada-e-a-escola-que-nega-as-diferencas-entrevista-com-catarina-de-almeida-santos",
        "tese": "O modelo padroniza corpos e comportamentos, pune a diferença e troca o diálogo pela obediência. Isso afasta justamente os alunos que mais precisam da escola.",
        "premissas": [
          "Escola pública deve acolher a diversidade, não uniformizá-la."
        ],
        "pergunte": [
          "Regras de cabelo e uniforme são questão de disciplina ou de identidade?"
        ]
      }
    ],
    "videos": [
      {
        "id": "Wq9q0S6CeII",
        "titulo": "“Crianças não são soldados; escolas não são quartéis”",
        "canal": "UOL",
        "nota": "A pesquisadora Catarina de Almeida Santos (UnB) explica por que é contra.",
        "duracao": "7:28"
      },
      {
        "id": "E3QnSCtQ7Rc",
        "titulo": "A violência da militarização das escolas no Brasil",
        "canal": "Laboratório de Políticas Públicas",
        "nota": "Daniel Cara, professor da USP, resume as críticas.",
        "duracao": "8:22"
      },
      {
        "id": "nu0uKLuQ6-k",
        "titulo": "“Escolas cívico-militares não preparam para um mundo mais pacífico”",
        "canal": "Estadão",
        "nota": "Especialista em educação critica o modelo.",
        "duracao": "2:34"
      },
      {
        "id": "19x1L0j5RW8",
        "titulo": "Como funciona uma escola cívico-militar",
        "canal": "Tenente Coimbra",
        "nota": "O deputado autor da lei paulista mostra o dia a dia do modelo.",
        "duracao": "6:52"
      },
      {
        "id": "1-Xu1sn65cc",
        "titulo": "Fim das escolas militares? Tarcísio de Freitas",
        "canal": "Cortes do Flow",
        "nota": "O governador de São Paulo explica por que criou o programa paulista.",
        "duracao": "4:08"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/civico-militares.jpg",
      "autor": "Governo do Estado de São Paulo",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Visita_%C3%A0_Escola_Estadual_Heckel_Tavares_e_almo%C3%A7o_com_professores_e_alunos._(52034860972).jpg",
      "legenda": "Alunos de escola estadual em São Paulo.",
      "alt": "Grupo de alunos sorrindo no pátio de uma escola",
      "posicao": "50% 40%"
    }
  },
  {
    "id": "aborto",
    "titulo": "Descriminalização do aborto",
    "categoria": "direitos",
    "tags": [
      "ADPF 442",
      "STF",
      "12 semanas",
      "saúde da mulher",
      "nascituro",
      "PEC 164",
      "pró-vida",
      "pró-escolha"
    ],
    "pergunta": "Interromper a gravidez até a 12ª semana deve deixar de ser crime?",
    "resumo": "Dois ministros do STF já votaram para descriminalizar o aborto até a 12ª semana, e o julgamento está parado. Na Câmara, avança uma proposta que vai no sentido oposto.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de descriminalizar",
      "contrario": "Contra descriminalizar"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "No Brasil, o aborto é crime previsto no Código Penal, com pena de prisão para a gestante e para quem faz o procedimento. Ele só é permitido em três casos: gravidez causada por estupro, risco de vida para a gestante e feto anencéfalo, este último liberado pelo STF em 2012.",
        "Em 2017, o PSOL pediu ao STF que deixasse de ser crime o aborto feito até a 12ª semana (ADPF 442). A relatora, Rosa Weber, votou a favor em 2023. Luís Roberto Barroso votou no mesmo sentido em outubro de 2025, antes de se aposentar. Gilmar Mendes pediu que o caso fosse ao plenário físico, e o julgamento está suspenso com 2 votos a 0.",
        "No Congresso, a Comissão de Constituição e Justiça da Câmara aprovou em novembro de 2024, por 35 a 15, a admissibilidade da PEC 164/2012, que garante o direito à vida “desde a concepção”. Se aprovada, pode proibir o aborto também nos casos hoje permitidos.",
        "O debate opõe dois valores: a proteção da vida desde a concepção e a autonomia da mulher sobre o próprio corpo, junto com o argumento de saúde pública, já que abortos clandestinos continuam acontecendo."
      ],
      "fatos": [
        {
          "rotulo": "Placar no STF (julgamento suspenso)",
          "valor": "2 a 0"
        },
        {
          "rotulo": "Mulheres que já abortaram até os 40 anos",
          "valor": "≈ 1 em 7"
        },
        {
          "rotulo": "Querem manter a lei como está (Datafolha 2024)",
          "valor": "42%"
        },
        {
          "rotulo": "Casos em que o aborto é legal hoje",
          "valor": "3"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Saúde pública",
        "favoravel": "Cerca de 1 em cada 7 mulheres já fez um aborto até os 40 anos, mesmo sendo crime, e quase metade precisa ser internada. (A1)",
        "contrario": "O aborto só deve ocorrer nos casos previstos em lei, e o Estado deve investir em planejamento familiar, educação e saúde. (B2)",
        "fonte_favoravel": "pna-2021",
        "fonte_contrario": "cfm-nota-2023"
      },
      {
        "tema": "Quem decide",
        "favoravel": "Direito reprodutivo é fundamental e não depende de maioria política. A punição atinge sobretudo mulheres pobres. (A2)",
        "contrario": "Criar uma nova exceção ao Código Penal seria o STF legislando no lugar do Congresso. Os precedentes usados tratavam de casos sem chance de vida. (B3)",
        "fonte_favoravel": "stf-barroso-2025",
        "fonte_contrario": "torres-mpgo-adpf442"
      },
      {
        "tema": "Direitos em jogo",
        "favoravel": "Mulheres pretas internadas por aborto tiveram 1,6 vez mais dificuldade para conseguir leito. A criminalização soma estigma ao racismo. (A3)",
        "contrario": "A Constituição deve garantir o direito à vida desde a concepção. (B1)",
        "fonte_favoravel": "fiocruz-ufba-racismo",
        "fonte_contrario": "pec-164-ccj"
      }
    ],
    "glossario": [
      {
        "termo": "ADPF 442",
        "definicao": "Ação no STF que pede para excluir do Código Penal o aborto feito até a 12ª semana."
      },
      {
        "termo": "Descriminalizar",
        "definicao": "Deixar de punir como crime. Não obriga ninguém a abortar nem cria, sozinha, um serviço público."
      },
      {
        "termo": "Nascituro",
        "definicao": "O ser humano já concebido que ainda não nasceu. O Código Civil protege alguns direitos dele."
      },
      {
        "termo": "Aborto legal",
        "definicao": "Os três casos em que a lei brasileira já permite interromper a gravidez."
      },
      {
        "termo": "Pedido de destaque",
        "definicao": "Quando um ministro tira um julgamento do plenário virtual e o leva para o plenário físico. A votação recomeça lá."
      }
    ],
    "incertezas": [
      "Quantos abortos acontecem de fato no país. Os números vêm de pesquisas por amostra, porque o procedimento é clandestino.",
      "Se a descriminalização aumentaria ou reduziria o número de abortos no Brasil. Outros países tiveram resultados diferentes.",
      "Quando o STF retoma o julgamento e como votarão os novos ministros."
    ],
    "fontes": [
      {
        "titulo": "Congresso em Foco: Barroso vota por descriminalizar aborto e Gilmar suspende julgamento (out/2025)",
        "url": "https://www.congressoemfoco.com.br/noticia/113066/barroso-vota-por-descriminalizar-aborto-e-gilmar-suspende-julgamento"
      },
      {
        "titulo": "Poder360: CCJ aprova PEC que pode proibir o aborto em todos os casos (nov/2024)",
        "url": "https://www.poder360.com.br/poder-congresso/ccj-aprova-pec-que-pode-proibir-o-aborto-em-todos-os-casos/"
      }
    ],
    "leituras": [
      {
        "id": "pna-2021",
        "posicao": "favoravel",
        "instituicao": "UnB",
        "natureza": "Pesquisa de pesquisadores da UnB, publicada na revista Ciência & Saúde Coletiva",
        "tipo": "Pesquisa",
        "titulo": "Pesquisa Nacional de Aborto – Brasil, 2021",
        "autores": "Debora Diniz, Marcelo Medeiros e Alberto Madeiro",
        "data": "05/2023",
        "formato": "Página",
        "url": "https://www.scielo.br/j/csc/a/mDCFKkqkyPbXtHXY9qcpMqD/",
        "tese": "O aborto é comum entre mulheres de todas as classes e religiões no Brasil, mesmo sendo crime. Quase metade das que abortam precisa ser internada, e mais da metade fez o primeiro aborto com 19 anos ou menos.",
        "numero": {
          "valor": "≈ 1 em 7",
          "legenda": "mulheres já fez ao menos um aborto até os 40 anos"
        },
        "premissas": [
          "Entrevista 2.000 mulheres de 18 a 39 anos em cidades, com urna para garantir o sigilo das respostas."
        ],
        "pergunte": [
          "A pesquisa mostra que o aborto já acontece. Isso responde à pergunta sobre se ele deve ser crime?"
        ]
      },
      {
        "id": "stf-barroso-2025",
        "posicao": "favoravel",
        "instituicao": "STF",
        "natureza": "Voto de ministro do Supremo Tribunal Federal na ADPF 442",
        "tipo": "Voto",
        "titulo": "Voto do ministro Barroso pela descriminalização do aborto até 12 semanas",
        "autores": "Luís Roberto Barroso (relato do Congresso em Foco)",
        "data": "17/10/2025",
        "formato": "Reportagem",
        "url": "https://www.congressoemfoco.com.br/noticia/113066/barroso-vota-por-descriminalizar-aborto-e-gilmar-suspende-julgamento",
        "tese": "O aborto deve ser tratado como questão de saúde pública, não de polícia. A punição atinge sobretudo mulheres pobres, e o Estado deve evitar abortos com educação sexual, contracepção e apoio às mulheres.",
        "premissas": [
          "Liberdade sexual e reprodutiva é direito fundamental e não depende de maioria política.",
          "Ser contra o aborto por razões morais ou religiosas é legítimo, mas não justifica prender quem pensa diferente."
        ],
        "pergunte": [
          "Quem deve decidir esse tema: o STF ou o Congresso?"
        ]
      },
      {
        "id": "fiocruz-ufba-racismo",
        "posicao": "favoravel",
        "instituicao": "UFBA e Fiocruz",
        "natureza": "Pesquisa de universidades públicas e da Fiocruz, apresentada em congresso da Abrasco",
        "tipo": "Artigo",
        "titulo": "Barreiras de acesso à atenção ao aborto inseguro pelas mulheres negras: evidências do racismo institucional no Brasil",
        "autores": "Emanuelle Freitas Goes, Greice Menezes, Estela Aquino e outras",
        "data": "2019",
        "formato": "Página",
        "url": "https://www.arca.fiocruz.br/handle/icict/38456",
        "tese": "Entre 2.640 mulheres internadas por aborto em Salvador, Recife e São Luís, as pretas esperaram mais e tiveram mais dificuldade para conseguir leito, mesmo em condições parecidas. A criminalização soma estigma ao racismo.",
        "numero": {
          "valor": "1,6 vez",
          "legenda": "mais chance de mulheres pretas terem dificuldade para ser internadas"
        },
        "premissas": [
          "Compara mulheres em situação clínica parecida para isolar o efeito da cor."
        ],
        "pergunte": [
          "O problema apontado é o atendimento depois do aborto. Ele se resolve só com descriminalização?"
        ]
      },
      {
        "id": "pec-164-ccj",
        "posicao": "contrario",
        "instituicao": "Câmara dos Deputados",
        "natureza": "Decisão da Comissão de Constituição e Justiça",
        "tipo": "Proposta legislativa",
        "titulo": "PEC 164/2012: direito à vida desde a concepção",
        "autores": "Eduardo Cunha (autor) e Chris Tonietto (relatora)",
        "data": "27/11/2024",
        "formato": "Reportagem",
        "url": "https://www.poder360.com.br/poder-congresso/ccj-aprova-pec-que-pode-proibir-o-aborto-em-todos-os-casos/",
        "tese": "A Constituição deve garantir o direito à vida desde a concepção. Para os defensores, o tema cabe ao Congresso, e não ao STF.",
        "numero": {
          "valor": "35 a 15",
          "legenda": "votos na CCJ da Câmara"
        },
        "premissas": [
          "A CCJ só julgou se a proposta respeita a Constituição. O mérito ainda vai a uma comissão especial e ao plenário."
        ],
        "pergunte": [
          "A PEC pode proibir até os abortos hoje permitidos, como em caso de estupro. Isso muda sua avaliação?"
        ]
      },
      {
        "id": "cfm-nota-2023",
        "posicao": "contrario",
        "instituicao": "Conselho Federal de Medicina",
        "natureza": "Autarquia federal que regula a profissão médica",
        "tipo": "Nota oficial",
        "titulo": "Nota aos brasileiros sobre o julgamento da ADPF 442",
        "autores": "Conselho Federal de Medicina",
        "data": "21/09/2023",
        "formato": "PDF",
        "url": "https://portal.cfm.org.br/wp-content/uploads/2023/09/NOTA-AOS-BRASILEIROS-CFM-ABORTO-1.pdf",
        "tese": "Às vésperas do voto de Rosa Weber, o conselho dos médicos pediu que o STF levasse o caso ao plenário presencial e defendeu que a decisão cabe ao Congresso, que representa a população. Reafirma que o aborto só deve ocorrer nos casos já previstos em lei e que o Estado deve investir em planejamento familiar, educação e saúde.",
        "premissas": [
          "Um tema com tanta divergência moral deve ser decidido por quem é eleito."
        ],
        "pergunte": [
          "A nota fala de quem deve decidir, não do mérito. O que o CFM diz sobre as mortes por aborto inseguro?"
        ]
      },
      {
        "id": "torres-mpgo-adpf442",
        "posicao": "contrario",
        "instituicao": "Ministério Público de Goiás (Revista do MPRJ)",
        "natureza": "Artigo de procurador de Justiça em revista do Ministério Público do Rio",
        "tipo": "Artigo jurídico",
        "titulo": "A descriminalização do aborto até a 12ª semana de gravidez: inconstitucionalidade da ADPF 442",
        "autores": "Benedito Torres Neto",
        "data": "09/2020",
        "formato": "PDF",
        "url": "https://bdjur.stj.jus.br/jspui/bitstream/2011/152178/descriminalizacao_aborto_12_torres.pdf",
        "tese": "Defende que a ação no STF seja rejeitada. Os casos de anencefalia e de embriões congelados, usados como precedente, tratavam de situações sem chance de vida, o que não vale para uma gestação saudável. O Código Civil e o STJ já reconhecem direitos ao nascituro, e criar uma nova exceção ao Código Penal seria o Supremo legislando no lugar do Congresso.",
        "numero": {
          "valor": "3",
          "legenda": "Constituições (1946, 1967 e 1988) mantiveram o aborto como crime"
        },
        "premissas": [
          "O direito à vida do nascituro pesa mais que a autonomia da gestante.",
          "Se o Congresso não muda a lei, não há omissão a corrigir."
        ],
        "pergunte": [
          "Se o Congresso nunca votar o tema, quem decide sobre os direitos em conflito?"
        ]
      }
    ],
    "videos": [
      {
        "id": "tyKDUrx7ZzM",
        "titulo": "Por que o aborto é um problema de saúde pública?",
        "canal": "Drauzio Varella",
        "nota": "O médico explica o que acontece com as mulheres que abortam na clandestinidade.",
        "duracao": "13:38"
      },
      {
        "id": "rpoIqxlaFvg",
        "titulo": "Falar de aborto é falar de uma necessidade de saúde da mulher, diz Debora Diniz",
        "canal": "TV Senado",
        "nota": "A pesquisadora da UnB apresenta seus argumentos no Senado.",
        "duracao": "10:29"
      },
      {
        "id": "Jd8b-ZEesWY",
        "titulo": "Aborto: quando começa a vida humana?",
        "canal": "Brasil Paralelo",
        "nota": "O argumento de que a vida começa na fecundação.",
        "duracao": "5:20"
      },
      {
        "id": "vvEgKoc5vNI",
        "titulo": "Rosa Weber vota pela descriminalização do aborto até a 12ª semana",
        "canal": "SBT News",
        "nota": "O voto que abriu o julgamento no STF.",
        "duracao": "1:38"
      },
      {
        "id": "qAdOMJ5RKJ0",
        "titulo": "Aborto: a visão de especialistas, ativistas, parlamentares e mulheres",
        "canal": "TV Senado",
        "nota": "Reportagem que ouve quem defende e quem critica a descriminalização.",
        "duracao": "6:28"
      },
      {
        "id": "4eDUsa6I_xM",
        "titulo": "Em Discussão: a legalização do aborto (bloco 1)",
        "canal": "TV Senado",
        "nota": "Debate com convidados dos dois lados no programa do Senado.",
        "duracao": "12:48"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/aborto.jpg",
      "autor": "José Cruz/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:ADPF_153_-_Plen%C3%A1rio.jpg",
      "legenda": "Plenário do Supremo Tribunal Federal.",
      "alt": "Ministros do STF sentados no plenário durante uma sessão",
      "posicao": "50% 25%"
    }
  },
  {
    "id": "redes-sociais",
    "titulo": "Regulação das redes sociais",
    "categoria": "direitos",
    "tags": [
      "Marco Civil da Internet",
      "artigo 19",
      "big techs",
      "fake news",
      "PL 2630",
      "liberdade de expressão",
      "censura",
      "STF"
    ],
    "pergunta": "As redes sociais devem responder pelo que os usuários publicam?",
    "resumo": "Em 2025 o STF decidiu que as plataformas podem ser punidas por conteúdos ilegais que não removerem depois de avisadas. Uns veem proteção contra golpes e ataques; outros, risco de censura.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor de responsabilizar as redes",
      "contrario": "Contra ou com ressalvas"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "O Marco Civil da Internet, de 2014, dizia no artigo 19 que uma plataforma só podia ser punida por um post de usuário se descumprisse uma ordem judicial para tirá-lo do ar. A ideia era proteger a liberdade de expressão e não transformar as empresas em censoras.",
        "O Congresso tentou criar regras novas com o PL 2630, o “PL das Fake News”, aprovado no Senado em 2020. Na Câmara, a votação foi adiada em 2023 sob forte pressão das plataformas, e o projeto parou.",
        "Em junho de 2025, por 8 votos a 3, o STF decidiu que o artigo 19 é parcialmente inconstitucional. A ordem judicial continua exigida para crimes contra a honra, como calúnia. Nos demais casos ilegais, a plataforma pode ser responsabilizada se não remover o conteúdo depois de notificada, e tem deveres maiores com anúncios pagos e redes de robôs.",
        "O debate é sobre o equilíbrio: proteger as pessoas de golpes, ataques e desinformação sem levar as empresas a apagar conteúdo legítimo por precaução."
      ],
      "fatos": [
        {
          "rotulo": "Placar no STF (jun/2025)",
          "valor": "8 a 3"
        },
        {
          "rotulo": "Marco Civil da Internet",
          "valor": "2014"
        },
        {
          "rotulo": "Apoiam novas regras para as redes (Nexus, 2025)",
          "valor": "60%"
        },
        {
          "rotulo": "Anúncios de golpe achados em 11 dias (NetLab/UFRJ)",
          "valor": "1.770"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Dever das plataformas",
        "favoravel": "Em 11 dias, o NetLab achou 1.770 anúncios de golpe no Facebook e no Instagram. A empresa lucra com eles e não os barra. (A1)",
        "contrario": "A decisão criou deveres vagos e sem período de transição, e as empresas pequenas sofrem mais. (B3)",
        "fonte_favoravel": "netlab-golpes",
        "fonte_contrario": "camara-e-net"
      },
      {
        "tema": "Liberdade de expressão",
        "favoravel": "Exigir ordem judicial antes de qualquer responsabilidade deixava as vítimas desprotegidas. (A2)",
        "contrario": "Com medo de punição, as plataformas vão remover conteúdo legal por precaução, e grupos podem usar notificações em massa para calar opiniões. (B1)",
        "fonte_favoravel": "ufu-art19",
        "fonte_contrario": "artigo19-nota"
      },
      {
        "tema": "Quem decide",
        "favoravel": "78% dos brasileiros acham que as redes devem ter mais responsabilidade pelo que fazem. (A3)",
        "contrario": "O artigo 19 do Marco Civil é constitucional. Trocar de modelo é escolha política, que cabe ao Congresso, não ao STF. (B2)",
        "fonte_favoravel": "nexus-opiniao",
        "fonte_contrario": "streck-conjur"
      }
    ],
    "glossario": [
      {
        "termo": "Artigo 19",
        "definicao": "Trecho do Marco Civil que exigia ordem judicial antes de punir a plataforma por um conteúdo de usuário."
      },
      {
        "termo": "Notificação extrajudicial",
        "definicao": "Aviso feito direto à plataforma, sem passar pela Justiça, pedindo a retirada de um conteúdo."
      },
      {
        "termo": "Dever de cuidado",
        "definicao": "Obrigação de a empresa prevenir riscos de forma ativa, e não só reagir quando avisada."
      },
      {
        "termo": "Big techs",
        "definicao": "As grandes empresas de tecnologia, como Google, Meta, X e TikTok."
      },
      {
        "termo": "Efeito inibidor",
        "definicao": "Quando as pessoas deixam de se expressar, ou as empresas removem demais, por medo de punição."
      }
    ],
    "incertezas": [
      "Se a decisão do STF vai levar a remoções em excesso ou só aos conteúdos ilegais. Ainda há pouca medição.",
      "Quem fiscaliza as novas obrigações, já que não há agência reguladora definida.",
      "Se o Congresso vai aprovar uma lei própria e como ela conviverá com a decisão do STF."
    ],
    "fontes": [
      {
        "titulo": "Jornal do Comércio: por 8 votos a 3, STF decide responsabilizar plataformas (jun/2025)",
        "url": "https://www.jornaldocomercio.com/politica/2025/06/1208239-por-8-votos-a-3-ministros-do-stf-decidem-responsabilizar-plataformas.html"
      },
      {
        "titulo": "Olhar Digital: maioria dos brasileiros apoia regulação das redes sociais (fev/2025)",
        "url": "https://olhardigital.com.br/2025/02/05/internet-e-redes-sociais/maioria-dos-brasileiros-apoia-regulacao-das-redes-sociais-diz-pesquisa/"
      }
    ],
    "leituras": [
      {
        "id": "netlab-golpes",
        "posicao": "favoravel",
        "instituicao": "NetLab/UFRJ",
        "natureza": "Laboratório de pesquisa da Universidade Federal do Rio de Janeiro",
        "tipo": "Estudo",
        "titulo": "Anúncios maliciosos nas plataformas da Meta",
        "autores": "NetLab UFRJ (relato da Agência Brasil)",
        "data": "02/2025",
        "formato": "Reportagem",
        "url": "https://teletime.com.br/07/02/2025/redes-da-meta-facilitam-aplicacao-de-golpes-financeiros-aponta-estudo/",
        "tese": "Em 11 dias de janeiro de 2025, o laboratório achou 1.770 anúncios de golpe no Facebook e no Instagram, muitos fingindo ser do governo e feitos com inteligência artificial. A empresa lucra com eles e não os barra.",
        "numero": {
          "valor": "70%",
          "legenda": "dos anúncios maliciosos usavam inteligência artificial, inclusive deepfakes"
        },
        "premissas": [
          "Anúncio pago é diferente de post comum: a plataforma recebe para exibir."
        ],
        "pergunte": [
          "Se a Meta fosse responsável por anúncios de golpe, o que mudaria na prática?"
        ]
      },
      {
        "id": "ufu-art19",
        "posicao": "favoravel",
        "instituicao": "UFU",
        "natureza": "Universidade pública (Faculdade de Direito)",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "Ativismo judicial ou defesa constitucional? Os limites da atuação do STF frente ao artigo 19 do Marco Civil da Internet",
        "autores": "Gabriel Furin Vasconcelos",
        "data": "07/2026",
        "formato": "Página",
        "url": "https://repositorio.ufu.br/handle/123456789/49616",
        "tese": "As plataformas deixaram de ser murais passivos e passaram a escolher e lucrar com o que circula. Exigir ordem judicial antes de qualquer responsabilidade deixava as vítimas desprotegidas, e o STF agiu diante da omissão do Congresso.",
        "premissas": [
          "O Estado tem o dever de não deixar direitos sem proteção suficiente."
        ],
        "pergunte": [
          "O autor diz que o STF não tomou o lugar do Congresso. Você concorda?"
        ]
      },
      {
        "id": "nexus-opiniao",
        "posicao": "favoravel",
        "instituicao": "Nexus",
        "natureza": "Instituto privado de pesquisa de opinião",
        "tipo": "Pesquisa de opinião",
        "titulo": "Maioria dos brasileiros apoia regulação das redes sociais",
        "autores": "Nexus – Inteligência e Pesquisa de Dados (relato do Olhar Digital)",
        "data": "02/2025",
        "formato": "Reportagem",
        "url": "https://olhardigital.com.br/2025/02/05/internet-e-redes-sociais/maioria-dos-brasileiros-apoia-regulacao-das-redes-sociais-diz-pesquisa/",
        "tese": "Seis em cada dez brasileiros querem novas regras para as redes, e quase oito em cada dez acham que elas deveriam ter mais responsabilidade pelo que fazem.",
        "numero": {
          "valor": "78%",
          "legenda": "acham que as redes devem ter mais responsabilidade"
        },
        "premissas": [
          "A opinião pública deve pesar na decisão."
        ],
        "pergunte": [
          "Quando a pergunta menciona liberdade de expressão, o apoio cai para 30%. O que isso revela?"
        ]
      },
      {
        "id": "artigo19-nota",
        "posicao": "contrario",
        "instituicao": "ARTIGO 19",
        "natureza": "Organização de direitos humanos dedicada à liberdade de expressão",
        "tipo": "Nota técnica",
        "titulo": "Julgamento da constitucionalidade do artigo 19 do Marco Civil da Internet pelo STF",
        "autores": "ARTIGO 19 Brasil",
        "data": "07/2025",
        "formato": "PDF",
        "url": "https://artigo19.org/wp-content/blogs.dir/24/files/2025/08/NOTA-TECNICA_MCI_A19_pt-1.pdf",
        "tese": "Com medo de punição, as plataformas vão remover conteúdos legais por precaução, e grupos organizados podem usar notificações em massa para calar opiniões. O problema de fundo é o algoritmo e a concentração de mercado, não a falta de remoção.",
        "premissas": [
          "Restringir a expressão deve ser exceção, decidida por juiz.",
          "Empresas privadas não deveriam fazer papel de tribunal."
        ],
        "pergunte": [
          "A organização também defende regular as big techs, mas de outro jeito. Qual seria a alternativa?"
        ]
      },
      {
        "id": "streck-conjur",
        "posicao": "contrario",
        "instituicao": "ConJur",
        "natureza": "Artigo de opinião de jurista e professor de Direito Constitucional",
        "tipo": "Artigo",
        "titulo": "Escolhas do legislador e dignidade do Marco Civil da Internet",
        "autores": "Lenio Streck",
        "data": "27/03/2023",
        "formato": "Página",
        "url": "https://www.conjur.com.br/2023-mar-27/lenio-streck-escolhas-legislador-dignidade-marco-civil-internet/",
        "tese": "O artigo 19 é constitucional e protege a liberdade de expressão. Achar que outro modelo seria melhor é questão de conveniência, que cabe ao Congresso, não ao STF.",
        "premissas": [
          "Quem deve decidir se um conteúdo é ilegal é o juiz, não a empresa."
        ],
        "pergunte": [
          "O texto é de antes da decisão de 2025. Os argumentos ainda valem depois do 8 de janeiro e da onda de golpes?"
        ]
      },
      {
        "id": "camara-e-net",
        "posicao": "contrario",
        "instituicao": "Camara-e.net",
        "natureza": "Entidade que reúne empresas da economia digital, como Google, Meta, Amazon e Mercado Livre",
        "tipo": "Nota",
        "titulo": "Nota sobre a decisão do STF a respeito do artigo 19",
        "autores": "Câmara Brasileira da Economia Digital (relato do Poder360)",
        "data": "28/06/2025",
        "formato": "Reportagem",
        "url": "https://www.poder360.com.br/poder-tech/big-techs-dizem-que-stf-criou-inseguranca-juridica-no-brasil/",
        "tese": "A decisão criou deveres vagos e sem período de transição, tornando o Brasil um dos ambientes mais instáveis do mundo democrático. A tendência é remover conteúdo legítimo por precaução, e as empresas pequenas sofrem mais.",
        "premissas": [
          "Regras pouco claras levam a excesso de cautela."
        ],
        "pergunte": [
          "A entidade representa as empresas afetadas. Como isso pesa na leitura?"
        ]
      }
    ],
    "videos": [
      {
        "id": "pjwUbbHFye0",
        "titulo": "Eugênio Bucci debate a regulação das redes e como responsabilizar as big techs",
        "canal": "Roda Viva",
        "nota": "O professor da USP defende regras para as plataformas.",
        "duracao": "4:12"
      },
      {
        "id": "dlI9Yk-9Hp4",
        "titulo": "“A lei ficou insuficiente”, diz especialista sobre regulação das redes",
        "canal": "CNN Brasil",
        "nota": "Por que o Marco Civil de 2014 não daria mais conta.",
        "duracao": "7:02"
      },
      {
        "id": "MTN-jbFyjX8",
        "titulo": "Advogado do Google critica regulação no STF: “risco de censura”",
        "canal": "Correio Braziliense",
        "nota": "A posição das plataformas no julgamento.",
        "duracao": "2:18"
      },
      {
        "id": "3DwkDMzGmiU",
        "titulo": "Telegram critica PL das Fake News e o considera censura",
        "canal": "Jovem Pan News",
        "nota": "Comentaristas analisam a reação das empresas ao projeto.",
        "duracao": "5:07"
      },
      {
        "id": "pj33wColNGA",
        "titulo": "Igor solta o verbo sobre a regulação das redes sociais",
        "canal": "Cortes do Flow",
        "nota": "O apresentador do Flow critica a regulação e fala em risco de censura.",
        "duracao": "15:22"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/redes-sociais.jpg",
      "autor": "Agência Senado",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Senado_Verifica_%E2%80%93_Fato_ou_Fake%3F_(54789294291).jpg",
      "legenda": "Campanha do Senado contra a desinformação.",
      "alt": "Mão segurando um celular com a palavra desinformação na tela",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "marco-temporal",
    "titulo": "Marco temporal das terras indígenas",
    "categoria": "direitos",
    "tags": [
      "indígenas",
      "demarcação",
      "agronegócio",
      "STF",
      "PEC 48",
      "Lei 14.701",
      "Funai",
      "segurança jurídica"
    ],
    "pergunta": "Os indígenas só devem ter direito às terras que ocupavam em 1988?",
    "resumo": "O STF já derrubou duas vezes a tese do marco temporal, e o Senado aprovou uma emenda para colocá-la na Constituição. Está em jogo a segurança de quem produz no campo e o direito dos povos indígenas à terra.",
    "atualizado": "2026-10-14",
    "rotulos": {
      "favoravel": "A favor do marco temporal",
      "contrario": "Contra o marco temporal"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Constituição de 1988 garante aos indígenas as terras que eles “tradicionalmente ocupam” e manda a União demarcá-las. A tese do marco temporal diz que só valem as terras que estavam ocupadas por eles, ou em disputa, em 5 de outubro de 1988, dia em que a Constituição foi promulgada.",
        "A ideia apareceu no julgamento da Raposa Serra do Sol, em 2009. Em 2023, o STF rejeitou a tese. O Congresso reagiu no mesmo ano com a Lei 14.701, que a incluiu na lei. Em dezembro de 2025, por 9 votos a 1, o STF derrubou esse trecho da lei e propôs um prazo de dez anos para concluir as demarcações pendentes.",
        "No mesmo mês, o Senado aprovou por 52 a 14 a PEC 48/2023, que põe o marco temporal na Constituição e prevê indenização prévia a quem ocupa as terras. O texto está na Câmara, onde precisa de 308 votos em dois turnos.",
        "Produtores rurais pedem segurança jurídica sobre terras que compraram e cultivam há décadas. Indígenas e pesquisadores lembram que muitos povos tinham sido expulsos antes de 1988, e que as terras indígenas são as mais preservadas do país."
      ],
      "fatos": [
        {
          "rotulo": "Data de corte da tese",
          "valor": "05/10/1988"
        },
        {
          "rotulo": "Placar no STF (dez/2025)",
          "valor": "9 a 1"
        },
        {
          "rotulo": "Votação da PEC no Senado",
          "valor": "52 a 14"
        },
        {
          "rotulo": "Território nacional em terras indígenas",
          "valor": "13,9%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Segurança jurídica",
        "favoravel": "O marco temporal é um critério objetivo que o próprio STF fixou no caso Raposa Serra do Sol. Mudá-lo traz insegurança. (A1)",
        "contrario": "Por 9 a 1, o STF decidiu que fixar 1988 viola o direito às terras tradicionalmente ocupadas, e propôs dez anos para concluir as demarcações. (B2)",
        "fonte_favoravel": "agu-sustentacao",
        "fonte_contrario": "stf-dez-2025"
      },
      {
        "tema": "Propriedade e história",
        "favoravel": "A lei protege o direito de propriedade e evita que famílias com título legítimo percam suas terras. (A2)",
        "contrario": "A tese mantém uma estrutura fundiária concentrada, herdada de séculos de expulsão de povos indígenas. (B3)",
        "fonte_favoravel": "cna-stf",
        "fonte_contrario": "ufjf-racismo-fundiario"
      },
      {
        "tema": "O que está em jogo",
        "favoravel": "Pôr a data de 1988 na Constituição evita disputas retroativas e garante indenização prévia a quem ocupa terras demarcadas. (A3)",
        "contrario": "Entre 1990 e 2020, as terras indígenas perderam 1% da vegetação nativa, contra 20,6% nas áreas privadas. (B1)",
        "fonte_favoravel": "senado-pec-48",
        "fonte_contrario": "mapbiomas-tis"
      }
    ],
    "glossario": [
      {
        "termo": "Demarcação",
        "definicao": "Processo da Funai e da União para identificar e oficializar os limites de uma terra indígena."
      },
      {
        "termo": "Direito originário",
        "definicao": "Direito que existe antes de qualquer título, por ser anterior à formação do Estado. É como a Constituição trata a terra indígena."
      },
      {
        "termo": "Esbulho renitente",
        "definicao": "Quando os indígenas foram expulsos e continuavam disputando a terra em 1988. É a exceção prevista na tese."
      },
      {
        "termo": "Lei 14.701/2023",
        "definicao": "Lei aprovada pelo Congresso que incluiu o marco temporal. O trecho foi derrubado pelo STF em 2025."
      },
      {
        "termo": "PEC 48/2023",
        "definicao": "Proposta de emenda que coloca o marco temporal na Constituição. Foi aprovada no Senado e está na Câmara."
      }
    ],
    "incertezas": [
      "Se a PEC 48 será aprovada na Câmara e se o STF poderá derrubar uma emenda constitucional sobre o tema.",
      "Quanto custariam as indenizações aos ocupantes de boa-fé e quem pagaria.",
      "Quantas demarcações pendentes seriam afetadas por cada uma das regras."
    ],
    "fontes": [
      {
        "titulo": "Tribuna do Sertão: STF consolida rejeição ao marco temporal por 9 a 1 (dez/2025)",
        "url": "https://www.tribunadosertao.com.br/geral/2025/12/19/834292-stf-consolida-rejeicao-ao-marco-temporal-por-9-a-1-e-define-prazos-para-demarcacoes"
      },
      {
        "titulo": "Compre Rural: Senado aprova em dois turnos PEC do marco temporal (dez/2025)",
        "url": "https://comprerural.com/senado-aprova-em-dois-turnos-pec-do-marco-temporal-que-agora-segue-para-a-camara/"
      }
    ],
    "leituras": [
      {
        "id": "agu-sustentacao",
        "posicao": "favoravel",
        "instituicao": "AGU",
        "natureza": "Advocacia-Geral da União, em defesa da posição do governo federal no STF",
        "tipo": "Sustentação oral",
        "titulo": "Roteiro de sustentação oral no RE 1.017.365",
        "autores": "Advocacia-Geral da União (Secretaria-Geral de Contencioso)",
        "data": "c. 2021",
        "formato": "PDF",
        "url": "https://www.conjur.com.br/wp-content/uploads/2023/09/agu-indios.pdf",
        "tese": "O marco temporal é um critério objetivo que o próprio STF fixou no caso Raposa Serra do Sol e aplicou em decisões seguintes. Mudá-lo traz insegurança, e o tema deve esperar a decisão do Congresso.",
        "premissas": [
          "Terra tradicionalmente ocupada não é o mesmo que posse imemorial.",
          "Ocupantes de boa-fé têm posse legítima até serem indenizados."
        ],
        "pergunte": [
          "A posição da AGU mudou com o governo seguinte. O que isso diz sobre o tema?"
        ]
      },
      {
        "id": "cna-stf",
        "posicao": "favoravel",
        "instituicao": "CNA",
        "natureza": "Confederação da Agricultura e Pecuária do Brasil, que representa produtores rurais",
        "tipo": "Nota",
        "titulo": "CNA vai ao STF defender lei que estabelece marco temporal",
        "autores": "Confederação da Agricultura e Pecuária do Brasil",
        "data": "01/02/2024",
        "formato": "Página",
        "url": "https://cnabrasil.org.br/noticias/cna-vai-ao-stf-defender-lei-que-estabelece-marco-temporal",
        "tese": "A lei do marco temporal dá segurança jurídica ao campo, protege o direito de propriedade e evita que milhares de famílias percam suas terras. Cabe ao Congresso, e não ao STF, pacificar o tema.",
        "premissas": [
          "Quem comprou terra com título legítimo não pode ser surpreendido por uma demarcação."
        ],
        "pergunte": [
          "A nota fala em milhares de famílias, sem números. Que dado ajudaria a medir esse impacto?"
        ]
      },
      {
        "id": "senado-pec-48",
        "posicao": "favoravel",
        "instituicao": "Senado Federal",
        "natureza": "Decisão do Senado (votação em plenário)",
        "tipo": "Proposta legislativa",
        "titulo": "PEC 48/2023: marco temporal na Constituição",
        "autores": "Dr. Hiran (autor) e Esperidião Amin (relator)",
        "data": "09/12/2025",
        "formato": "Reportagem",
        "url": "https://comprerural.com/senado-aprova-em-dois-turnos-pec-do-marco-temporal-que-agora-segue-para-a-camara/",
        "tese": "Colocar a data de 1988 na Constituição evita disputas fundiárias retroativas e reduz conflitos. O texto prevê indenização prévia a quem ocupa terras que venham a ser demarcadas.",
        "numero": {
          "valor": "52 a 14",
          "legenda": "votos no primeiro turno no Senado"
        },
        "premissas": [
          "Uma regra na Constituição dá estabilidade que decisões judiciais não dão."
        ],
        "pergunte": [
          "Se o STF já disse que a tese viola direitos garantidos, uma emenda pode mudar isso?"
        ]
      },
      {
        "id": "mapbiomas-tis",
        "posicao": "contrario",
        "instituicao": "MapBiomas",
        "natureza": "Rede de universidades, ONGs e empresas de tecnologia que mapeia o uso da terra no Brasil",
        "tipo": "Estudo",
        "titulo": "Fatos sobre o papel das terras indígenas na proteção das florestas",
        "autores": "MapBiomas",
        "data": "2023",
        "formato": "PDF",
        "url": "https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2023/09/Fatos_sobre_o_Papel_das_Terras_Indigenas_18.04.pdf",
        "tese": "Entre 1990 e 2020, as terras indígenas perderam cerca de 1% da vegetação nativa, enquanto as áreas privadas perderam mais de 20%. Proteger esses territórios é proteger a floresta.",
        "numero": {
          "valor": "1% x 20,6%",
          "legenda": "de vegetação nativa perdida em terras indígenas x em áreas privadas"
        },
        "premissas": [
          "Imagens de satélite medem a cobertura do solo ano a ano."
        ],
        "pergunte": [
          "A preservação ambiental deve pesar numa decisão sobre direito à terra?"
        ]
      },
      {
        "id": "stf-dez-2025",
        "posicao": "contrario",
        "instituicao": "STF",
        "natureza": "Decisão do plenário do Supremo Tribunal Federal",
        "tipo": "Decisão",
        "titulo": "STF declara inconstitucional o marco temporal da Lei 14.701",
        "autores": "Gilmar Mendes (relator) e plenário (relato da Tribuna do Sertão)",
        "data": "18/12/2025",
        "formato": "Reportagem",
        "url": "https://www.tribunadosertao.com.br/geral/2025/12/19/834292-stf-consolida-rejeicao-ao-marco-temporal-por-9-a-1-e-define-prazos-para-demarcacoes",
        "tese": "Fixar 1988 como data obrigatória viola o direito dos indígenas às terras que tradicionalmente ocupam. A Corte propôs prazo de dez anos para a União concluir as demarcações e discutiu indenizar ocupantes de boa-fé.",
        "numero": {
          "valor": "9 a 1",
          "legenda": "votos pela inconstitucionalidade"
        },
        "premissas": [
          "O direito indígena à terra é anterior à Constituição, que apenas o reconhece."
        ],
        "pergunte": [
          "Só um ministro votou contra. O STF e o Congresso podem continuar em lados opostos por quanto tempo?"
        ]
      },
      {
        "id": "ufjf-racismo-fundiario",
        "posicao": "contrario",
        "instituicao": "UFJF",
        "natureza": "Universidade pública (curso de Direito, campus Governador Valadares)",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "A inconstitucionalidade do marco temporal de ocupação de territórios indígenas: uma perspectiva crítica do seu papel na persistência do racismo fundiário",
        "autores": "Ana Carolina Assumpção Soares (orientação de Luciana Tasse Ferreira)",
        "data": "12/2023",
        "formato": "Página",
        "url": "https://repositorio.ufjf.br/jspui/handle/ufjf/16410",
        "tese": "A tese é inconstitucional e ajuda a manter uma estrutura fundiária concentrada, herdada de séculos de expulsão de povos indígenas, em benefício da expansão do agronegócio.",
        "premissas": [
          "A história de expulsões explica por que muitos povos não estavam nas terras em 1988."
        ],
        "pergunte": [
          "Como reparar uma injustiça histórica sem criar outra para quem comprou a terra de boa-fé?"
        ]
      }
    ],
    "videos": [
      {
        "id": "izZmxp6QXMY",
        "titulo": "O que é o marco temporal?",
        "canal": "Greenpeace Brasil",
        "nota": "A tese explicada por quem é contra, em um minuto.",
        "duracao": "1:17"
      },
      {
        "id": "eMy_KN7Ypts",
        "titulo": "“Marco temporal é a única maneira de preservar a segurança jurídica no país”",
        "canal": "Rádio Bandeirantes",
        "nota": "Defensor da tese explica o argumento da segurança jurídica.",
        "duracao": "15:17"
      },
      {
        "id": "r7Bz3z878QM",
        "titulo": "Quem é beneficiado pelo marco temporal? Pedro Lupion opina",
        "canal": "Pânico Jovem Pan",
        "nota": "O presidente da Frente Parlamentar da Agropecuária defende a tese.",
        "duracao": "3:44"
      },
      {
        "id": "KW4EtANXwBE",
        "titulo": "Marco temporal é inconstitucional, diz Ailton Krenak",
        "canal": "UOL",
        "nota": "O pensador indígena explica por que é contra.",
        "duracao": "4:22"
      },
      {
        "id": "DmBHXVHe2S0",
        "titulo": "Presidente da Funai: aprovação do marco temporal seria retrocesso",
        "canal": "CNN Brasil",
        "nota": "Joenia Wapichana, primeira mulher indígena a presidir a Funai, explica por que é contra.",
        "duracao": "2:36"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/marco-temporal.jpg",
      "autor": "Agência Senado",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Acampamento_Terra_Livre_2024_(53677903352).jpg",
      "legenda": "Acampamento Terra Livre em Brasília, 2024.",
      "alt": "Indígenas marcham em frente ao Congresso Nacional",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "foz-amazonas",
    "titulo": "Petróleo na Foz do Amazonas",
    "categoria": "ambiente",
    "tags": [
      "Margem Equatorial",
      "Petrobras",
      "Ibama",
      "Amapá",
      "licenciamento",
      "transição energética",
      "COP30",
      "royalties"
    ],
    "pergunta": "O Brasil deve explorar petróleo na Margem Equatorial, perto da foz do Amazonas?",
    "resumo": "O Ibama liberou a perfuração em 2025 e a Petrobras anunciou petróleo no Amapá em agosto de 2026. Agora o debate é se vale abrir uma nova fronteira de petróleo numa das regiões mais sensíveis do litoral.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de explorar",
      "contrario": "Contra explorar"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Margem Equatorial é a faixa do litoral que vai do Amapá ao Rio Grande do Norte. A parte mais disputada fica no mar do Amapá, na chamada bacia da Foz do Amazonas, perto de manguezais, de recifes de corais pouco estudados e de comunidades que vivem da pesca.",
        "A Petrobras comprou o bloco FZA-M-59 em 2013. Em 2023, o Ibama negou a licença por falhas no plano de resposta a vazamentos. Depois de novos testes, o órgão emitiu a licença em 20 de outubro de 2025, embora a área técnica tivesse recomendado a rejeição um ano antes.",
        "Em 14 de agosto de 2026, a Petrobras anunciou que encontrou petróleo no poço Morpho, a cerca de 175 km da costa do Amapá e em quase 2.900 metros de profundidade de água. Ainda não se sabe se a reserva é grande o bastante para virar produção comercial.",
        "De um lado, o governo e os estados do Norte veem empregos, royalties e uma forma de pagar a transição energética. De outro, ambientalistas, cientistas e povos indígenas apontam o risco de vazamento e a contradição de abrir petróleo novo no país que sediou a COP30."
      ],
      "fatos": [
        {
          "rotulo": "Distância do poço até a costa do Amapá",
          "valor": "≈ 175 km"
        },
        {
          "rotulo": "Licença do Ibama para perfurar",
          "valor": "20/10/2025"
        },
        {
          "rotulo": "Empregos projetados pela CNI se houver produção",
          "valor": "≈ 326 mil"
        },
        {
          "rotulo": "Técnicos do Ibama que recomendaram negar a licença (2024)",
          "valor": "26"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Ganhos e riscos",
        "favoravel": "Se a região produzir petróleo, o PIB pode ganhar R$ 65 bilhões por ano, sobretudo no Norte e no Nordeste. (A1)",
        "contrario": "Manguezais, recifes e comunidades de pesca são muito vulneráveis a um vazamento, e ainda se conhece pouco sobre a região. (B1)",
        "fonte_favoravel": "cni-margem",
        "fonte_contrario": "unifap-riscos"
      },
      {
        "tema": "Energia e clima",
        "favoravel": "A produção brasileira deve atingir o pico por volta de 2030, e com as reservas atuais o país tem petróleo para só 13 anos. (A2)",
        "contrario": "A licença foi dada sem consulta prévia aos povos da costa do Amapá e sem avaliar o efeito do petróleo extraído sobre o clima. (B3)",
        "fonte_favoravel": "fgv-energia-precioso",
        "fonte_contrario": "acao-entidades-2025"
      },
      {
        "tema": "Licenciamento",
        "favoravel": "A região só deve ser explorada com licenciamento rigoroso, salvaguardas para a pesca e operações de baixo carbono. (A3)",
        "contrario": "Os técnicos do Ibama recomendaram negar a licença porque o plano de resgate de fauna atingida por óleo era insuficiente. (B2)",
        "fonte_favoravel": "fgv-energia-oportunidades",
        "fonte_contrario": "ibama-parecer-2024"
      }
    ],
    "glossario": [
      {
        "termo": "Margem Equatorial",
        "definicao": "Área do litoral norte do Brasil, do Amapá ao Rio Grande do Norte, vista como nova fronteira de petróleo."
      },
      {
        "termo": "Licença de operação",
        "definicao": "Autorização do Ibama para uma atividade começar, depois de avaliar os riscos e os planos de controle."
      },
      {
        "termo": "Poço exploratório",
        "definicao": "Perfuração feita para descobrir se há petróleo. Não é ainda a produção comercial."
      },
      {
        "termo": "Royalties",
        "definicao": "Compensação paga pelas petroleiras à União, a estados e a municípios pelo petróleo extraído."
      },
      {
        "termo": "Plano de emergência",
        "definicao": "Conjunto de equipamentos e procedimentos para conter um vazamento e resgatar fauna atingida."
      }
    ],
    "incertezas": [
      "Se a reserva encontrada é grande e viável o bastante para produção comercial.",
      "Quanto dos empregos e da arrecadação projetados ficaria de fato no Amapá.",
      "Como reagiriam as correntes e os recifes da região a um vazamento real."
    ],
    "fontes": [
      {
        "titulo": "eixos: área técnica do Ibama recomenda rejeição de licença na Foz do Amazonas (out/2024)",
        "url": "https://eixos.com.br/petroleo-e-gas/mercado-offshore/area-tecnica-do-ibama-recomenda-rejeicao-de-licenca-para-poco-na-foz-do-amazonas/"
      },
      {
        "titulo": "Portal da Indústria: projeção da CNI para a Margem Equatorial",
        "url": "https://noticias.portaldaindustria.com.br/noticias/economia/producao-de-petroleo-na-margem-equatorial-brasileira-pode-criar-mais-de-320-mil-empregos-projeta-cni/"
      }
    ],
    "leituras": [
      {
        "id": "cni-margem",
        "posicao": "favoravel",
        "instituicao": "CNI",
        "natureza": "Confederação Nacional da Indústria (Observatório Nacional da Indústria)",
        "tipo": "Estudo",
        "titulo": "Produção de petróleo na Margem Equatorial pode criar mais de 320 mil empregos",
        "autores": "Observatório Nacional da Indústria (relato da Agência de Notícias da Indústria)",
        "data": "2025",
        "formato": "Reportagem",
        "url": "https://noticias.portaldaindustria.com.br/noticias/economia/producao-de-petroleo-na-margem-equatorial-brasileira-pode-criar-mais-de-320-mil-empregos-projeta-cni/",
        "tese": "Se a região produzir petróleo, a atividade pode gerar centenas de milhares de empregos e dezenas de bilhões de reais no PIB, sobretudo em estados do Norte e Nordeste.",
        "numero": {
          "valor": "R$ 65 bi",
          "legenda": "de acréscimo ao PIB por ano no cenário da CNI"
        },
        "premissas": [
          "Supõe produção de 100 mil barris por dia, com o barril a US$ 80."
        ],
        "pergunte": [
          "O cálculo parte de uma produção que ainda não existe. O que acontece se a reserva for menor?"
        ]
      },
      {
        "id": "unifap-riscos",
        "posicao": "contrario",
        "instituicao": "Unifap",
        "natureza": "Universidade Federal do Amapá (revista Planeta Amazônia)",
        "tipo": "Artigo",
        "titulo": "Riscos da exploração de petróleo na foz do Amazonas",
        "autores": "Tadaiesky e outros (revista Planeta Amazônia, nº 17)",
        "data": "2025",
        "formato": "PDF",
        "url": "https://periodicos.unifap.br/planetaamazonia/article/download/1588/1077/4855",
        "tese": "A região reúne manguezais, recifes e comunidades pesqueiras muito vulneráveis a um vazamento, e ainda há pouco conhecimento científico sobre ela para avaliar o risco com segurança.",
        "premissas": [
          "Falta de dados é motivo para cautela, não para avançar."
        ],
        "pergunte": [
          "Quanto conhecimento seria suficiente para liberar a exploração?"
        ]
      },
      {
        "id": "ibama-parecer-2024",
        "posicao": "contrario",
        "instituicao": "Ibama",
        "natureza": "Parecer da área técnica do órgão federal de licenciamento ambiental",
        "tipo": "Parecer técnico",
        "titulo": "Área técnica do Ibama recomenda rejeição de licença para poço na Foz do Amazonas",
        "autores": "26 técnicos do Ibama (relato da agência eixos)",
        "data": "29/10/2024",
        "formato": "Reportagem",
        "url": "https://eixos.com.br/petroleo-e-gas/mercado-offshore/area-tecnica-do-ibama-recomenda-rejeicao-de-licenca-para-poco-na-foz-do-amazonas/",
        "tese": "O plano da Petrobras para atender fauna atingida por óleo continuava insuficiente, sobretudo pela distância até a base de resgate. Os técnicos recomendaram negar a licença.",
        "numero": {
          "valor": "26",
          "legenda": "técnicos assinaram a recomendação de rejeição"
        },
        "premissas": [
          "O tempo de resposta a um vazamento decide o tamanho do estrago."
        ],
        "pergunte": [
          "A direção do Ibama liberou a licença um ano depois. O que mudou entre o parecer e a decisão?"
        ]
      },
      {
        "id": "acao-entidades-2025",
        "posicao": "contrario",
        "instituicao": "Apib, Observatório do Clima e outras",
        "natureza": "Ação judicial de oito entidades ambientais e indígenas",
        "tipo": "Ação judicial",
        "titulo": "Ação contra a licença de perfuração na Foz do Amazonas",
        "autores": "Apib, Observatório do Clima, Greenpeace, WWF-Brasil e outras (documento publicado pelo Poder360)",
        "data": "22/10/2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/10/PR-Judicializa-Foz-do-Amazonas1.pdf",
        "tese": "A licença foi dada sem consulta prévia aos povos indígenas e comunidades tradicionais da costa do Amapá e sem avaliar o efeito do petróleo extraído sobre o clima.",
        "numero": {
          "valor": "8",
          "legenda": "entidades assinam a ação"
        },
        "premissas": [
          "Povos afetados têm direito a ser consultados antes da decisão.",
          "O impacto climático da queima do petróleo deve entrar no licenciamento."
        ],
        "pergunte": [
          "Se a Justiça exigir consulta, a decisão final passa a ser dos povos consultados?"
        ]
      },
      {
        "id": "fgv-energia-precioso",
        "posicao": "favoravel",
        "instituicao": "FGV Energia",
        "natureza": "Centro de estudos de energia da Fundação Getulio Vargas (privada); coluna de opinião",
        "tipo": "Artigo de opinião",
        "titulo": "O petróleo da Margem Equatorial é precioso, quando explorado",
        "autores": "Pesquisadores da FGV Energia",
        "data": "06/2024",
        "formato": "PDF",
        "url": "https://fgvenergia.fgv.br/sites/fgvenergia.fgv.br/files/o_petroleo_da_margem_equatorial_e_precioso_quando_explorado_fgv_energia.pdf",
        "tese": "Com as reservas atuais, o Brasil teria petróleo para só 13 anos de produção, e a produção deve atingir o pico por volta de 2030. Explorar a Margem Equatorial manteria a autossuficiência, levaria renda ao Norte e ao Nordeste e ajudaria a pagar a transição energética, desde que com segurança ambiental.",
        "numero": {
          "valor": "13 anos",
          "legenda": "de reservas no ritmo atual de produção, segundo a ANP"
        },
        "premissas": [
          "O mundo ainda vai consumir muito petróleo em 2050.",
          "A renda do petróleo será usada na transição."
        ],
        "pergunte": [
          "O que garante que os royalties vão financiar a transição e não só o orçamento comum?"
        ]
      },
      {
        "id": "fgv-energia-oportunidades",
        "posicao": "favoravel",
        "instituicao": "FGV Energia",
        "natureza": "Centro de estudos de energia da Fundação Getulio Vargas (privada); coluna de opinião",
        "tipo": "Artigo de opinião",
        "titulo": "Oportunidades e desafios para a exploração petrolífera na Margem Equatorial amazônica",
        "autores": "Gabriel Lobato Cardoso, Karina Farias Neves e João Victor Marques Cardoso",
        "data": "12/2023",
        "formato": "PDF",
        "url": "https://fgvenergia.fgv.br/sites/fgvenergia.fgv.br/files/artigo_opiniao_-_gabriel_karina_joao_-_13-12-23_-_versao_final.pdf",
        "tese": "A região pode repor as reservas do país, com 20 a 30 bilhões de barris estimados, mas só deve ser explorada com licenciamento rigoroso, salvaguardas para as comunidades de pesca e operações de baixo carbono. É a posição \"sim, com condições\".",
        "numero": {
          "valor": "20 a 30 bi",
          "legenda": "de barris de petróleo estimados na Margem Equatorial"
        },
        "premissas": [
          "As salvaguardas propostas serão de fato cumpridas."
        ],
        "pergunte": [
          "Quem paga se um vazamento atingir os mangues e a pesca do Amapá?"
        ]
      },
      {
        "id": "anp-saboia-2023",
        "posicao": "favoravel",
        "instituicao": "ANP",
        "natureza": "Agência federal que regula o setor de petróleo",
        "tipo": "Apresentação oficial",
        "titulo": "Perspectivas da exploração e produção de petróleo e gás no Brasil",
        "autores": "Rodolfo Saboia, diretor-geral da ANP",
        "data": "23/08/2023",
        "formato": "PDF",
        "url": "https://www.gov.br/anp/pt-br/centrais-de-conteudo/apresentacoes-palestras/2023/arquivos/2023-08-23-rodolfo-saboia-perspectivas.pdf",
        "tese": "O regulador mostra que, sem novas descobertas, a produção brasileira começa a cair depois de 2030. Para evitar isso, defende acelerar a exploração em novas fronteiras, como a Margem Equatorial.",
        "numero": {
          "valor": "14,9 bi",
          "legenda": "de barris em reservas provadas do país"
        },
        "premissas": [
          "Manter a produção alta é de interesse do país."
        ],
        "pergunte": [
          "A queda depois de 2030 seria um problema se o consumo também cair com a transição?"
        ]
      }
    ],
    "videos": [
      {
        "id": "SNcmRFfKP5c",
        "titulo": "Magda Chambriard: produção de petróleo vai continuar aumentando",
        "canal": "CNN Brasil",
        "nota": "A presidente da Petrobras sobre a necessidade de novas reservas.",
        "duracao": "3:40"
      },
      {
        "id": "4lS8xI2Awq4",
        "titulo": "O Amapá tem margem equatorial e potencial para extrair petróleo",
        "canal": "Assembleia Legislativa do Amapá",
        "nota": "A visão de quem vive no estado e espera o desenvolvimento.",
        "duracao": "3:57"
      },
      {
        "id": "I8PH_WHoja4",
        "titulo": "Riscos da exploração de petróleo na foz do Amazonas",
        "canal": "PROAM",
        "nota": "Especialistas apontam falhas no licenciamento.",
        "duracao": "8:37"
      },
      {
        "id": "uSDVFcHqkec",
        "titulo": "Marina Silva reforça que negativa do Ibama à Petrobras é técnica",
        "canal": "TV Senado",
        "nota": "A ministra do Meio Ambiente defende a cautela do Ibama.",
        "duracao": "5:48"
      },
      {
        "id": "ExZYH-LWu6w",
        "titulo": "Quais os impactos da exploração de petróleo na foz do Amazonas?",
        "canal": "Brasil de Fato",
        "nota": "Os riscos para o mar, os mangues e quem vive da pesca.",
        "duracao": "3:53"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/foz-amazonas.jpg",
      "autor": "Petrobras/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Oil_platform_P-51_(Brazil)-2.jpg",
      "legenda": "Plataforma de petróleo P-51 da Petrobras.",
      "alt": "Plataforma de petróleo em alto-mar",
      "posicao": "50% 55%"
    }
  },
  {
    "id": "trabalho-aplicativos",
    "titulo": "Trabalho por aplicativo",
    "categoria": "trabalho",
    "tags": [
      "Uber",
      "iFood",
      "99",
      "entregadores",
      "motoristas",
      "uberização",
      "PLP 152/2025",
      "vínculo de emprego",
      "CLT",
      "autônomo",
      "STF"
    ],
    "pergunta": "Motoristas e entregadores de aplicativo devem ter mais direitos garantidos por lei?",
    "resumo": "Mais de 2 milhões de pessoas trabalham com Uber, 99, iFood e outros apps. O Congresso discute uma lei para elas e o STF julga se existe vínculo de emprego.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de mais direitos e regras",
      "contrario": "A favor de manter a autonomia"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Quem dirige ou entrega por aplicativo hoje é tratado como autônomo: escolhe quando trabalha, pode usar vários apps ao mesmo tempo e não tem carteira assinada. Em troca, não tem salário mínimo garantido, férias, 13º nem FGTS, e paga sozinho os custos do carro ou da moto.",
        "Segundo o IBGE, cerca de 1,7 milhão de pessoas trabalhavam por meio de aplicativos em 2024. Um levantamento do Cebrap com dados das empresas contou 1,72 milhão de motoristas e 455 mil entregadores ativos naquele ano.",
        "Em 2024, o governo enviou ao Congresso o PLP 12/2024, que criava uma remuneração mínima por hora para motoristas. O texto enfrentou protestos da própria categoria e não andou. A discussão passou para o PLP 152/2025, na Câmara. O parecer do relator, Augusto Coutinho (Republicanos-PE), publicado em abril de 2026, cria a figura do \"trabalhador autônomo plataformizado\": sem vínculo de emprego, mas com contribuição ao INSS, limite de 30% na taxa média cobrada pelas plataformas, piso de R$ 8,50 por entrega curta e seguro de vida. A votação na comissão foi cancelada em 14 de abril de 2026 e ficou sem data.",
        "Ao mesmo tempo, o STF julga se existe vínculo de emprego entre motoristas e plataformas (casos da Uber e da Rappi, com repercussão geral). A PGR se manifestou contra o vínculo em 2025. Em junho de 2026, o julgamento foi adiado sem nova data, depois que a OIT aprovou uma convenção sobre trabalho em plataformas digitais.",
        "No centro da disputa estão duas ideias: para uns, a autonomia é em boa parte aparente, porque o algoritmo define preço, corridas e punições; para outros, a flexibilidade é justamente o que atrai os trabalhadores, e regras rígidas encareceriam o serviço e reduziriam as vagas."
      ],
      "fatos": [
        {
          "rotulo": "Trabalhadores por app (IBGE, 2024)",
          "valor": "1,7 mi"
        },
        {
          "rotulo": "Taxa máxima no parecer do PLP 152",
          "valor": "30%"
        },
        {
          "rotulo": "Jornada média de motoristas de app (Ipea)",
          "valor": "48 h/sem"
        },
        {
          "rotulo": "Julgamento no STF",
          "valor": "Sem data"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Autonomia",
        "favoravel": "Uber, 99 e iFood tiraram zero em cinco princípios de trabalho justo. O relatório aponta bloqueios sem explicação e riscos jogados sobre o trabalhador. (A2)",
        "contrario": "42% dos motoristas usam o aplicativo como complemento de renda, e a maioria prefere continuar autônoma. (B1)",
        "fonte_favoravel": "fairwork-brasil-2025",
        "fonte_contrario": "cebrap-amobitec-2024"
      },
      {
        "tema": "Custos",
        "favoravel": "Quem roda em tempo integral gasta mais de R$ 5 mil por mês com o carro, e a jornada passa da média do setor privado. (A3)",
        "contrario": "Com carteira assinada, os preços subiriam, a procura cairia e 1,3 milhão de pessoas sairiam dos aplicativos, segundo a simulação. (B2)",
        "fonte_favoravel": "tst-custos-motoristas-2026",
        "fonte_contrario": "ecoa-vinculo-desemprego"
      },
      {
        "tema": "Proteção e lei",
        "favoravel": "Só 22% dos motoristas de aplicativo contribuíam para o INSS em 2022, contra 44% dos taxistas. (A1)",
        "contrario": "O trabalho por aplicativo pode existir fora da CLT, já que o STF aceitou outras formas de contratação além do emprego tradicional. (B3)",
        "fonte_favoravel": "ipea-bmt77-plataformas",
        "fonte_contrario": "pgr-parecer-uber"
      }
    ],
    "glossario": [
      {
        "termo": "Uberização",
        "definicao": "Nome dado ao modelo em que empresas contratam serviços por aplicativo, pagando por tarefa, sem vínculo de emprego."
      },
      {
        "termo": "Vínculo de emprego",
        "definicao": "Relação de trabalho com carteira assinada, regida pela CLT, com direitos como férias, 13º, FGTS e salário mínimo."
      },
      {
        "termo": "PLP",
        "definicao": "Projeto de lei complementar. Exige maioria absoluta para ser aprovado (257 deputados e 41 senadores)."
      },
      {
        "termo": "Gestão algorítmica",
        "definicao": "Quando um programa decide quem recebe cada corrida, quanto ela paga e quem é bloqueado, sem um chefe humano visível."
      },
      {
        "termo": "Repercussão geral",
        "definicao": "Quando o STF decide um caso que passa a valer para todos os processos parecidos no país."
      }
    ],
    "incertezas": [
      "Quanto um motorista ganha de verdade depois de pagar combustível, manutenção e depreciação. Os estudos usam premissas de custo diferentes e chegam a números distantes.",
      "Quantas vagas sumiriam se houvesse vínculo ou piso mais alto. As projeções disponíveis foram encomendadas pelas próprias empresas.",
      "O que o STF vai decidir e se a decisão sai antes de o Congresso votar uma lei."
    ],
    "fontes": [
      {
        "titulo": "Câmara dos Deputados: Cancelada reunião para votar regulamentação do trabalho por aplicativo; conheça a proposta (14/04/2026)",
        "url": "https://www.camara.leg.br/noticias/1261809-comissao-pode-votar-regulamentacao-do-trabalho-por-aplicativo-conheca-a-proposta/"
      },
      {
        "titulo": "Agência Brasil: Supremo Tribunal Federal adia julgamento sobre uberização (24/06/2026)",
        "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/supremo-tribunal-federal-adia-julgamento-sobre-uberizacao"
      }
    ],
    "leituras": [
      {
        "id": "ipea-bmt77-plataformas",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Artigo do Boletim Mercado de Trabalho",
        "titulo": "Plataformização e precarização do trabalho de motoristas e entregadores no Brasil",
        "autores": "Sandro Sacchet de Carvalho e Mauro Oddo Nogueira",
        "data": "04/2024",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/13810/1/BMT_77_PDRT_A1.pdf",
        "tese": "Com dados da PNAD Contínua, mostra que motoristas e entregadores de aplicativo trabalham mais horas e contribuem menos para a previdência que colegas fora dos apps. Defende incluí-los em contratos que já existem, com direitos completos, e não numa categoria nova com menos proteção.",
        "numero": {
          "valor": "22%",
          "legenda": "dos motoristas de aplicativo contribuíam para o INSS em 2022, contra 44% dos taxistas"
        },
        "premissas": [
          "A PNAD capta bem quem trabalha por aplicativo.",
          "Comparar com taxistas e entregadores sem app mostra o efeito das plataformas."
        ],
        "pergunte": [
          "Se a renda média é parecida com a dos taxistas, o problema está na renda ou na falta de proteção?"
        ]
      },
      {
        "id": "fairwork-brasil-2025",
        "posicao": "favoravel",
        "instituicao": "Fairwork Brasil (UFRGS, UFRJ, UnB, UFPR)",
        "natureza": "Projeto de pesquisa de universidades públicas, ligado à Universidade de Oxford",
        "tipo": "Relatório anual",
        "titulo": "Endividamento e precariedade: o retrato do trabalho em plataforma no Brasil",
        "autores": "Equipe Fairwork Brasil",
        "data": "09/2025",
        "formato": "PDF",
        "url": "https://abet-trabalho.org.br/wp-content/uploads/2025/09/Fairwork-Brazil-Report-PT-2025-V4-FINALFINAL1.pdf",
        "tese": "Avalia dez plataformas em cinco princípios de trabalho justo (pagamento, condições, contratos, gestão e representação). Uber, 99, iFood, Rappi e Loggi tiraram zero. O relatório aponta bloqueios sem explicação, riscos jogados sobre o trabalhador e novas formas de endividamento, como aluguel de carro ligado à conta.",
        "numero": {
          "valor": "0 de 10",
          "legenda": "nota de Uber, 99 e iFood na avaliação de 2025"
        },
        "premissas": [
          "Os critérios de trabalho justo do Fairwork são uma boa régua.",
          "A plataforma precisa provar que cumpre cada princípio para ganhar o ponto."
        ],
        "pergunte": [
          "Uma nota zero mede condições ruins ou falta de comprovação pelas empresas?"
        ]
      },
      {
        "id": "tst-custos-motoristas-2026",
        "posicao": "favoravel",
        "instituicao": "TST",
        "natureza": "Tribunal Superior do Trabalho, cúpula da Justiça do Trabalho",
        "tipo": "Levantamento técnico",
        "titulo": "Precarização na atividade de transporte individual de passageiros no Brasil",
        "autores": "Conselho Superior da Justiça do Trabalho (supervisão do juiz Rodrigo Trindade)",
        "data": "23/06/2026",
        "formato": "PDF",
        "url": "https://www.tst.jus.br/documents/d/guest/-diagramacao-_precarizacao-na-atividade-de-transporte-individual-de-passageiros-no-brasil_v2-pdf",
        "tese": "Calcula quanto custa trabalhar com o próprio carro: combustível, manutenção, depreciação, seguro, internet e multas. Conclui que os custos passam de R$ 5 mil por mês para quem trabalha em tempo integral e que a jornada é maior que a média do setor privado.",
        "numero": {
          "valor": "R$ 5 mil+",
          "legenda": "de custo mensal estimado para o motorista que roda 8 horas por dia, 22 dias por mês"
        },
        "premissas": [
          "O motorista típico roda 8 horas por dia a 25 km/h.",
          "Custos como depreciação e multas entram na conta."
        ],
        "pergunte": [
          "A associação das empresas diz que o estudo não tem amostragem. Uma estimativa de custos precisa de amostra?"
        ]
      },
      {
        "id": "cebrap-amobitec-2024",
        "posicao": "contrario",
        "instituicao": "Cebrap",
        "natureza": "Centro privado de pesquisa social; estudo patrocinado pela Amobitec, associação das empresas de apps",
        "tipo": "Pesquisa",
        "titulo": "Mobilidade urbana e logística de entregas: um panorama sobre o trabalho de motoristas e entregadores com aplicativos (2ª edição)",
        "autores": "Victor Callil e Monise Picanço",
        "data": "2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/06/motoristas-aplicativos-pesquisa-cebrap.pdf",
        "tese": "Combina dados das plataformas e entrevistas. Mostra que muitos usam o app como renda extra, poucas horas por mês, e que a maioria prefere continuar autônoma. A desconfiança em relação à CLT é forte, sobretudo entre os mais velhos.",
        "numero": {
          "valor": "42%",
          "legenda": "dos motoristas usam o aplicativo como complemento de renda"
        },
        "premissas": [
          "Os dados enviados pelas empresas são completos.",
          "O que os trabalhadores dizem preferir deve pesar na lei."
        ],
        "pergunte": [
          "O estudo foi pago pelas empresas. Isso muda a forma como você lê os números?",
          "Quem trabalha 50 horas por semana no app tem as mesmas preferências de quem faz bico?"
        ]
      },
      {
        "id": "ecoa-vinculo-desemprego",
        "posicao": "contrario",
        "instituicao": "Ecoa Consultoria Econômica",
        "natureza": "Consultoria privada; estudo encomendado pela Amobitec",
        "tipo": "Estudo apresentado na Câmara",
        "titulo": "Por que vínculo de emprego em trabalho por aplicativo pode aumentar o desemprego no Brasil",
        "autores": "Cláudia Viegas (doutora pela FEA-USP, ex-subsecretária da Seae/Fazenda)",
        "data": "16/09/2025",
        "formato": "PDF",
        "url": "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-temporarias/especiais/57a-legislatura/comissao-especial-sobre-transporte-e-entrega-por-plataformas-digitais-plp-152-25/apresentacoes-em-eventos/16.09.25ClaudiaViegas.pdf",
        "tese": "Simula o que aconteceria se motoristas e entregadores virassem empregados com carteira: os custos subiriam, o preço das corridas e entregas aumentaria e a procura cairia. Defende um modelo novo de regulação, e não aplicar as regras antigas da CLT.",
        "numero": {
          "valor": "1,3 mi",
          "legenda": "de trabalhadores sairiam dos aplicativos com o vínculo, segundo a simulação"
        },
        "premissas": [
          "Todo o custo extra seria repassado ao consumidor.",
          "A procura por corridas é sensível ao preço."
        ],
        "pergunte": [
          "A simulação compara com o vínculo pela CLT. E se a lei for um meio-termo, como o PLP 152?"
        ]
      },
      {
        "id": "pgr-parecer-uber",
        "posicao": "contrario",
        "instituicao": "PGR",
        "natureza": "Procuradoria-Geral da República, chefia do Ministério Público da União",
        "tipo": "Parecer ao STF",
        "titulo": "PGR é contra vínculo trabalhista entre motoristas e aplicativos",
        "autores": "Paulo Gonet, procurador-geral da República (relato do Poder360)",
        "data": "30/09/2025",
        "formato": "Página",
        "url": "https://www.poder360.com.br/poder-justica/pgr-e-contra-vinculo-trabalhista-entre-motoristas-e-aplicativos/",
        "tese": "No caso da Uber no STF, a PGR defende que o trabalho por aplicativo pode existir fora da CLT. Para Gonet, o próprio Supremo já aceitou várias formas de contratação distintas do emprego tradicional, e a decisão do TST que reconheceu o vínculo contraria esse entendimento.",
        "premissas": [
          "As decisões anteriores do STF sobre terceirização e contratos flexíveis valem para os apps."
        ],
        "pergunte": [
          "Não ter vínculo pela CLT impede que uma lei crie outros direitos para a categoria?"
        ]
      }
    ],
    "videos": [
      {
        "id": "dM1UFJyZ2x8",
        "titulo": "Aplicativos e relações de trabalho",
        "canal": "TRT da 2ª Região",
        "nota": "O tribunal do trabalho de São Paulo explica o que está em discussão sobre o vínculo.",
        "duracao": "5:56"
      },
      {
        "id": "qOhJ8af_HD4",
        "titulo": "Uberização: STF define se motoristas de aplicativo têm vínculo de emprego",
        "canal": "CNN Brasil",
        "nota": "O caso que o Supremo vai julgar e o que pode mudar.",
        "duracao": "3:47"
      },
      {
        "id": "qZiCmvmZonE",
        "titulo": "Motoristas de aplicativo: quais são os benefícios do PLP 12/2024?",
        "canal": "TRT da 7ª Região (Ceará)",
        "nota": "O que o projeto do governo garantiria a quem dirige por aplicativo.",
        "duracao": "2:58"
      },
      {
        "id": "BzCppYvVcss",
        "titulo": "Uber e iFood: autônomos também têm direitos mínimos, diz presidente do TST",
        "canal": "UOL",
        "nota": "A visão de quem preside o Tribunal Superior do Trabalho.",
        "duracao": "3:20"
      },
      {
        "id": "E-uHfuf7eCk",
        "titulo": "STF julga vínculo com aplicativos; iFood defende autonomia",
        "canal": "SBT News",
        "nota": "A posição da empresa: proteção sem carteira assinada.",
        "duracao": "7:36"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/trabalho-aplicativos.jpg",
      "autor": "Gabrielle Lopes Fernandes",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:O_mundo_da_entrega_-_Gabrielle_Lopes_Fernandes_-_vista_da_minha_vizinhan%C3%A7a.jpg",
      "legenda": "Entregador de aplicativo na Avenida Engenheiro Caetano Álvares, em São Paulo, em 2021.",
      "alt": "Entregador de moto com mochila térmica em uma avenida de São Paulo",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "voto-obrigatorio",
    "titulo": "Voto obrigatório",
    "categoria": "instituicoes",
    "tags": [
      "eleições",
      "abstenção",
      "voto facultativo",
      "TSE",
      "título de eleitor",
      "democracia",
      "participação",
      "PEC"
    ],
    "pergunta": "O voto no Brasil deve continuar obrigatório?",
    "resumo": "No primeiro turno de 2026, 21% dos eleitores não foram votar, a maior abstenção desde 1998. A cada eleição volta a pergunta: obrigar a votar fortalece ou enfraquece a democracia?",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de manter obrigatório",
      "contrario": "A favor do voto facultativo"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Constituição de 1988 (art. 14) torna o voto obrigatório para quem tem entre 18 e 70 anos e facultativo para quem tem 16 e 17 anos, mais de 70 ou não sabe ler e escrever. A obrigação existe desde o Código Eleitoral de 1932.",
        "Quem não vota e não justifica paga uma multa pequena, de poucos reais. Sem quitar a pendência, a pessoa pode ter problemas para tirar passaporte, tomar posse em concurso público ou renovar matrícula em universidade pública. Três ausências seguidas sem justificativa levam ao cancelamento do título.",
        "Mesmo assim, a abstenção cresce. No primeiro turno de 4 de outubro de 2026, 33,4 milhões de eleitores (21,08%) não compareceram, segundo o TSE. Foi o maior índice desde 1998. Em 2022, tinha sido 20,95%.",
        "Só cerca de um em cada oito países do mundo obriga a votar, mas a regra é comum na América do Sul. Propostas de emenda à Constituição para acabar com a obrigação já foram apresentadas várias vezes no Congresso e nunca avançaram."
      ],
      "fatos": [
        {
          "rotulo": "Abstenção no 1º turno de 2026",
          "valor": "21,08%"
        },
        {
          "rotulo": "Eleitores ausentes",
          "valor": "33,4 mi"
        },
        {
          "rotulo": "Voto obrigatório desde",
          "valor": "1932"
        },
        {
          "rotulo": "Idade da obrigação",
          "valor": "18 a 70"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Quem votaria",
        "favoravel": "Sem obrigação, só 45% votariam com certeza, e quem tem ensino superior teria muito mais chance de ir. (A2)",
        "contrario": "A obrigação aumenta o comparecimento dos mais escolarizados (6,7%) quase o dobro dos menos escolarizados (3,4%). (B1)",
        "fonte_favoravel": "aguiar-casalecchi-facultativo",
        "fonte_contrario": "cepaluni-hidalgo-desigualdade"
      },
      {
        "tema": "Representação",
        "favoravel": "Onde o voto é livre, os mais pobres votam menos e os governos investem menos em políticas sociais. (A1)",
        "contrario": "A obrigação não acabou com abstenções, brancos e nulos, e a maioria das democracias consolidadas usa o voto livre. (B2)",
        "fonte_favoravel": "ribeiro-voto-compulsorio",
        "fonte_contrario": "costa-ufrn-facultativo"
      },
      {
        "tema": "A regra hoje",
        "favoravel": "Obrigar a comparecer não obriga a escolher, e as punições são tão leves que o voto já é quase facultativo. (A3)",
        "contrario": "Cerca de 40% dos eleitores já fogem do voto de algum jeito. A proposta é um plebiscito para testar o voto facultativo. (B3)",
        "fonte_favoravel": "romao-tse-reforma",
        "fonte_contrario": "nobre-quem-tem-medo"
      }
    ],
    "glossario": [
      {
        "termo": "Abstenção",
        "definicao": "Quando o eleitor não vai votar. É diferente do voto em branco ou nulo, em que a pessoa vai à urna."
      },
      {
        "termo": "Voto facultativo",
        "definicao": "Sistema em que votar é opcional, como nos Estados Unidos, no Chile desde 2012 (o país voltou a obrigar em 2022) e na maior parte da Europa."
      },
      {
        "termo": "Justificativa eleitoral",
        "definicao": "Declaração de que o eleitor não pôde votar. Pode ser feita no dia da eleição ou até 60 dias depois, inclusive pelo aplicativo e-Título."
      },
      {
        "termo": "PEC",
        "definicao": "Proposta de emenda à Constituição. Precisa de 3/5 dos votos na Câmara e no Senado, em dois turnos em cada Casa."
      }
    ],
    "incertezas": [
      "Quantas pessoas deixariam de votar com o voto facultativo. Pesquisas sugerem que cerca de metade continuaria votando, mas o que se diz numa pesquisa nem sempre se faz no dia.",
      "Quem deixaria de votar. Os estudos brasileiros divergem sobre se seriam mais os pobres ou mais os escolarizados.",
      "Se partidos e candidatos mudariam o jeito de fazer campanha para convencer as pessoas a sair de casa."
    ],
    "fontes": [
      {
        "titulo": "Poder360: Abstenção no 1º turno foi de 21,08% em 2026, a maior desde 1998 (04/10/2026)",
        "url": "https://www.poder360.com.br/poder-eleicoes-2026/abstencao-no-1o-turno-cresce-e-vai-a-2108-em-2026/"
      },
      {
        "titulo": "Senado Federal: Vantagens e desvantagens do voto obrigatório e do voto facultativo (Texto para Discussão nº 6, 2004)",
        "url": "https://www12.senado.leg.br/publicacoes/estudos-legislativos/tipos-de-estudos/textos-para-discussao/td-6-vantagens-e-desvantagens-do-voto-obrigatorio-e-do-voto-facultativo"
      }
    ],
    "leituras": [
      {
        "id": "ribeiro-voto-compulsorio",
        "posicao": "favoravel",
        "instituicao": "UEM",
        "natureza": "Universidade pública (Universidade Estadual de Maringá)",
        "tipo": "Artigo",
        "titulo": "Voto compulsório: a desigualdade na participação política",
        "autores": "Ednaldo Ribeiro (revista Em Debate, da UFMG)",
        "data": "10/2013",
        "formato": "PDF",
        "url": "https://bibliotecadigital.tse.jus.br/bitstreams/4cc37040-80f2-4b4c-8c84-4b272a80eecc/download",
        "tese": "Revisa a literatura internacional e defende manter a obrigação. Onde o voto é livre, os mais pobres votam menos, seus interesses ficam sub-representados e os governos investem menos em políticas sociais. A obrigação aumenta o comparecimento e reduz esse viés.",
        "numero": {
          "valor": "+8%",
          "legenda": "de comparecimento médio em países com voto obrigatório"
        },
        "premissas": [
          "Quem não vota tem seus interesses menos atendidos pelos políticos.",
          "Resultados de outros países valem para o Brasil."
        ],
        "pergunte": [
          "O próprio autor admite que alguns estudos não acham redução da desigualdade. O argumento se sustenta sem isso?"
        ]
      },
      {
        "id": "aguiar-casalecchi-facultativo",
        "posicao": "favoravel",
        "instituicao": "UFMG e UFSCar",
        "natureza": "Universidades públicas; artigo na revista Opinião Pública (Unicamp)",
        "tipo": "Artigo científico",
        "titulo": "E se o voto fosse facultativo? Expectativas de participação eleitoral voluntária no Brasil e o papel do status socioeconômico",
        "autores": "Natália Nunes Aguiar e Gabriel Casalecchi",
        "data": "2021",
        "formato": "Página",
        "url": "https://doi.org/10.1590/1807-01912021271261",
        "tese": "Usa a pesquisa eleitoral Eseb para estimar quem votaria se o voto fosse livre. Só 45% disseram que votariam com certeza, e ter ensino superior aumenta muito essa chance. Sem a obrigação, a participação ficaria mais desigual.",
        "numero": {
          "valor": "45%",
          "legenda": "dos entrevistados disseram que votariam mesmo sem obrigação"
        },
        "premissas": [
          "A resposta a uma pergunta hipotética antecipa o comportamento real."
        ],
        "pergunte": [
          "Esse resultado conversa com o estudo de Cepaluni e Hidalgo, que diz o contrário. Por que os dois chegam a conclusões diferentes?"
        ]
      },
      {
        "id": "romao-tse-reforma",
        "posicao": "favoravel",
        "instituicao": "TSE (revista Estudos Eleitorais)",
        "natureza": "Revista da Escola Judiciária Eleitoral do Tribunal Superior Eleitoral; autor da USP",
        "tipo": "Artigo",
        "titulo": "Considerações sobre o voto obrigatório no contexto da reforma política de 2015",
        "autores": "Luis Fernando de França Romão",
        "data": "12/2015",
        "formato": "PDF",
        "url": "https://bibliotecadigital.tse.jus.br/bitstreams/65a04e21-ba2a-4a60-b6c6-3fb1e4cee185/download",
        "tese": "Lembra que a obrigação nasceu em 1932 para combater o coronelismo e a fraude. Argumenta que obrigar a comparecer não obriga a escolher, já que o voto branco e nulo existe, e que as punições são tão leves que o voto já é quase facultativo. O problema da democracia estaria nos partidos, não na regra.",
        "premissas": [
          "A história de 1932 ainda explica a regra hoje.",
          "Sanções leves tornam a obrigação pouco custosa."
        ],
        "pergunte": [
          "Se a punição é tão leve, a obrigação ainda faz diferença?"
        ]
      },
      {
        "id": "cepaluni-hidalgo-desigualdade",
        "posicao": "contrario",
        "instituicao": "Unesp e MIT (divulgado pelo Cepesp/FGV)",
        "natureza": "Universidades; artigo na revista Political Analysis",
        "tipo": "Artigo científico",
        "titulo": "Compulsory Voting Can Increase Political Inequality: Evidence from Brazil",
        "autores": "Gabriel Cepaluni e F. Daniel Hidalgo",
        "data": "2016",
        "formato": "Página (em inglês)",
        "url": "https://repositorio.unesp.br/handle/11449/158857",
        "tese": "Compara eleitores logo abaixo e logo acima dos 18 e dos 70 anos, idades em que a obrigação começa e termina, com o cadastro de mais de 140 milhões de eleitores. A obrigação aumenta o comparecimento, mas aumenta quase o dobro entre os mais escolarizados, porque as punições (passaporte, concurso, crédito) pesam mais para eles. Ou seja, a regra pode aumentar a desigualdade.",
        "numero": {
          "valor": "6,7% x 3,4%",
          "legenda": "de aumento no comparecimento entre mais e menos escolarizados"
        },
        "premissas": [
          "Quem está perto dos 18 ou dos 70 anos se comporta como o resto do eleitorado."
        ],
        "pergunte": [
          "O resultado é um argumento contra a obrigação ou a favor de mudar as punições?"
        ]
      },
      {
        "id": "costa-ufrn-facultativo",
        "posicao": "contrario",
        "instituicao": "UFRN",
        "natureza": "Universidade pública (Departamento de Ciências Sociais); texto no Jornal da OAB-SP",
        "tipo": "Artigo de opinião",
        "titulo": "Em defesa do voto facultativo",
        "autores": "Homero de Oliveira Costa",
        "data": "09/2010",
        "formato": "PDF",
        "url": "https://www.dhnet.org.br/direitos/militantes/homero_costa/homero_025_em_defesa_do_voto_facultativo.pdf",
        "tese": "O cientista político argumenta que a obrigação não eliminou abstenções, brancos e nulos, que a maioria das democracias consolidadas usa o voto livre e que campanhas de marketing despolitizam mais do que educam. Para ele, legitimidade não se garante com obrigação.",
        "premissas": [
          "A experiência das democracias ricas vale para o Brasil."
        ],
        "pergunte": [
          "O texto é de 2010. A abstenção crescente de lá para cá reforça ou enfraquece o argumento?"
        ]
      },
      {
        "id": "nobre-quem-tem-medo",
        "posicao": "contrario",
        "instituicao": "Justiça & Cidadania (ex-conselheiro do CNJ)",
        "natureza": "Revista jurídica; autor foi conselheiro do Conselho Nacional de Justiça",
        "tipo": "Artigo",
        "titulo": "Quem tem medo do voto facultativo?",
        "autores": "Marcelo Nobre",
        "data": "06/2014",
        "formato": "PDF",
        "url": "https://bdjur.stj.jus.br/jspui/bitstream/2011/157032/quem_tem_medo_nobre.pdf",
        "tese": "Propõe um plebiscito em duas etapas: se o eleitor escolher o voto facultativo, ele seria testado por algumas eleições e depois confirmado ou não. Argumenta que, depois de décadas de democracia, a obrigação já não é necessária e que cerca de 40% dos eleitores já fogem do voto de algum jeito.",
        "premissas": [
          "A democracia brasileira está madura o bastante para dispensar a obrigação."
        ],
        "pergunte": [
          "Um teste por algumas eleições seria suficiente para medir os efeitos?"
        ]
      }
    ],
    "videos": [
      {
        "id": "5fkiuYg0hbg",
        "titulo": "O voto deve ser facultativo ou obrigatório no Brasil?",
        "canal": "Centro de Estudos Legislativos UFMG",
        "nota": "Cientistas políticos da UFMG apresentam os argumentos e as pesquisas.",
        "duracao": "8:20"
      },
      {
        "id": "ePt6le_Vy8M",
        "titulo": "Qual é a diferença entre voto obrigatório e voto facultativo",
        "canal": "TRE do Paraná",
        "nota": "A regra atual explicada pela Justiça Eleitoral.",
        "duracao": "1:36"
      },
      {
        "id": "AiKa5CzSO2I",
        "titulo": "Entenda por que o voto é obrigatório e a importância da democracia",
        "canal": "Portal Correio",
        "nota": "A origem da obrigação e o argumento de quem quer mantê-la.",
        "duracao": "3:07"
      },
      {
        "id": "5p6S4NsCPZE",
        "titulo": "Argumento: fim do voto obrigatório, com Alvaro Dias",
        "canal": "TV Senado",
        "nota": "O autor de uma proposta de voto facultativo apresenta suas razões.",
        "duracao": "10:08"
      },
      {
        "id": "pIKLwYpSh3M",
        "titulo": "Voto: facultativo ou obrigatório? Kim e Guga debatem",
        "canal": "Jovem Pan News",
        "nota": "Debate entre um deputado favorável ao voto livre e um jornalista contrário.",
        "duracao": "14:30"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/voto-obrigatorio.jpg",
      "autor": "Agência Senado",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Elei%C3%A7%C3%B5es_2026_-_Primeiro_turno_(55569056826).jpg",
      "legenda": "Eleitores na fila para votar no primeiro turno de 4 de outubro de 2026.",
      "alt": "Fila de eleitores de várias idades diante de uma escola em dia de eleição",
      "posicao": "50% 40%"
    }
  },
  {
    "id": "emendas-parlamentares",
    "titulo": "Emendas parlamentares",
    "categoria": "instituicoes",
    "tags": [
      "orçamento",
      "emendas Pix",
      "orçamento secreto",
      "emendas impositivas",
      "Congresso",
      "Flávio Dino",
      "STF",
      "TCU",
      "transparência",
      "prefeituras"
    ],
    "pergunta": "Deputados e senadores devem continuar decidindo uma fatia tão grande do Orçamento?",
    "resumo": "O Orçamento de 2026 reserva cerca de R$ 61 bilhões para emendas de deputados e senadores. Para uns, é o jeito de o dinheiro chegar às cidades; para outros, virou uma máquina de desperdício e falta de transparência.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor das emendas",
      "contrario": "Contra o modelo atual"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Emendas parlamentares são a parte do Orçamento federal em que deputados e senadores indicam para onde vai o dinheiro, em geral para obras, hospitais e serviços nas cidades da sua base eleitoral.",
        "Desde 2015, uma série de emendas à Constituição tornou boa parte delas obrigatória: o governo é obrigado a pagar. Em 2019 surgiram as \"emendas Pix\" (transferências especiais), em que o dinheiro cai direto na conta da prefeitura ou do estado sem um projeto definido. Entre 2020 e 2022, as emendas de relator, apelidadas de orçamento secreto, escondiam quem indicava o gasto, até o STF derrubá-las.",
        "As emendas pagas passaram de cerca de R$ 3,9 bilhões em 2015 para R$ 48,3 bilhões em 2024, em valores corrigidos. Elas já ocupam perto de um quarto dos gastos livres do governo federal, o dinheiro que não está carimbado para salários, aposentadorias e outras despesas obrigatórias. A lei do Orçamento de 2026 prevê cerca de R$ 61 bilhões em emendas.",
        "Desde 2024, o ministro Flávio Dino, do STF, vem exigindo regras de transparência e rastreio, e chegou a bloquear repasses e mandar a Polícia Federal investigar desvios. Em julho de 2026, o TCU encontrou falhas em 82% das emendas Pix que auditou. Do outro lado, prefeitos e a cúpula do Congresso defendem as emendas como a forma mais rápida de levar dinheiro federal aos municípios."
      ],
      "fatos": [
        {
          "rotulo": "Emendas no Orçamento de 2026",
          "valor": "R$ 61 bi"
        },
        {
          "rotulo": "Emendas pagas em 2015",
          "valor": "R$ 3,9 bi"
        },
        {
          "rotulo": "Fatia dos gastos livres (2024)",
          "valor": "~24%"
        },
        {
          "rotulo": "Emendas Pix com falhas (TCU)",
          "valor": "82%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Efeito nas políticas",
        "favoravel": "As emendas tiveram efeito positivo sobre a educação nos municípios, sobretudo no Norte, Nordeste e Sul. (A3)",
        "contrario": "83% do aumento do custeio do SUS entre 2019 e 2024 veio de emendas, distribuídas de forma muito desigual entre os estados. (B1)",
        "fonte_favoravel": "enap-pork-para-quem-precisa",
        "fonte_contrario": "ipea-td3149-sus-emendas"
      },
      {
        "tema": "Burocracia e controle",
        "favoravel": "A emenda Pix tirou a burocracia dos convênios e acabou com taxas de 2,5% a 11,7% que a Caixa cobrava. (A2)",
        "contrario": "Em 100 emendas Pix auditadas, o TCU estimou R$ 49 milhões de prejuízo, cerca de um quarto do valor. (B3)",
        "fonte_favoravel": "mascarenhas-pge-transferencias",
        "fonte_contrario": "tcu-emendas-pix-2026"
      },
      {
        "tema": "Quem decide",
        "favoravel": "Quem está perto da população sabe quais obras e serviços são prioridade, e as emendas ajudam os prefeitos a administrar. (A1)",
        "contrario": "Nenhum de 11 países ricos dá ao Parlamento poder parecido. Em 2024, 24% dos gastos livres do governo foram para emendas. (B2)",
        "fonte_favoravel": "motta-marcha-prefeitos-2026",
        "fonte_contrario": "insper-ocde-emendas"
      }
    ],
    "glossario": [
      {
        "termo": "Emenda individual",
        "definicao": "Indicada por cada deputado ou senador. É de pagamento obrigatório e metade precisa ir para a saúde."
      },
      {
        "termo": "Emenda de bancada",
        "definicao": "Indicada em conjunto pelos parlamentares de um mesmo estado."
      },
      {
        "termo": "Emenda de comissão",
        "definicao": "Indicada por comissões temáticas da Câmara ou do Senado. Não é obrigatória, mas virou objeto de negociação."
      },
      {
        "termo": "Emenda Pix",
        "definicao": "Nome popular da transferência especial: o dinheiro vai direto para a conta do estado ou município, sem convênio nem projeto prévio."
      },
      {
        "termo": "Orçamento secreto",
        "definicao": "Apelido das emendas de relator (RP9), usadas de 2020 a 2022 sem identificar o parlamentar que pediu o gasto. O STF as considerou inconstitucionais em 2022."
      },
      {
        "termo": "Despesa discricionária",
        "definicao": "Gasto que o governo pode decidir se faz ou não, como investimentos e custeio de programas. É o oposto da despesa obrigatória."
      }
    ],
    "incertezas": [
      "Quanto do dinheiro das emendas vira obra ou serviço que de fato melhora a vida das pessoas. Faltam avaliações de impacto.",
      "Se as regras de transparência exigidas pelo STF vão funcionar ou só mudar o caminho do dinheiro.",
      "Qual seria o tamanho certo das emendas num país com o sistema político do Brasil, em que o presidente precisa de coalizões grandes."
    ],
    "fontes": [
      {
        "titulo": "Câmara dos Deputados: Orçamento 2026 é sancionado com veto a R$ 400 milhões em emendas (15/01/2026)",
        "url": "https://www.camara.leg.br/noticias/1238564-orcamento-2026-e-sancionado-com-veto-a-r-400-milhoes-em-emendas/"
      },
      {
        "titulo": "TCU: Tribunal consolida auditorias sobre emendas parlamentares (31/07/2026)",
        "url": "https://portal.tcu.gov.br/imprensa/minuto-do-tcu/ybfgsj9mq2s65i6htnsd42yo"
      }
    ],
    "leituras": [
      {
        "id": "motta-marcha-prefeitos-2026",
        "posicao": "favoravel",
        "instituicao": "Câmara dos Deputados",
        "natureza": "Discurso do presidente da Câmara, relatado pela Agência Câmara",
        "tipo": "Declaração oficial",
        "titulo": "Hugo Motta defende pauta municipalista e destaca apoio da Câmara a prefeituras",
        "autores": "Hugo Motta (Republicanos-PB), presidente da Câmara",
        "data": "19/05/2026",
        "formato": "Página",
        "url": "https://www.camara.leg.br/noticias/1273795-hugo-motta-defende-pauta-municipalista-e-destaca-apoio-da-camara-a-prefeituras/",
        "tese": "Na Marcha dos Prefeitos, Motta apresentou as emendas como a ponte entre o Orçamento federal e as necessidades das cidades. Para ele, quem está perto da população sabe quais obras e serviços são prioridade, e as emendas ajudam os prefeitos a administrar.",
        "premissas": [
          "Parlamentares e prefeitos sabem melhor que Brasília o que cada cidade precisa."
        ],
        "pergunte": [
          "É um discurso para prefeitos, que recebem o dinheiro. Que dados sustentariam esse argumento?"
        ]
      },
      {
        "id": "mascarenhas-pge-transferencias",
        "posicao": "favoravel",
        "instituicao": "Revista da PGE-RJ",
        "natureza": "Revista jurídica da Procuradoria-Geral do Estado do Rio; autor é procurador do MS e doutorando da USP",
        "tipo": "Artigo",
        "titulo": "Orçamento impositivo e as transferências do artigo 166-A da Constituição: notas sobre regime jurídico, accountability e corrupção",
        "autores": "Caio Gama Mascarenhas",
        "data": "2023",
        "formato": "PDF",
        "url": "https://revistaeletronica.pge.rj.gov.br/index.php/pge/article/download/340/269",
        "tese": "Defende que as emendas Pix são constitucionais e trouxeram ganhos: menos burocracia que os convênios, que deixavam obras paradas, e fim das taxas que a Caixa cobrava para gerir os repasses. Reconhece que é preciso garantir transparência e reforçar o controle.",
        "numero": {
          "valor": "2,5% a 11,7%",
          "legenda": "era a taxa que a Caixa cobrava sobre emendas por convênio"
        },
        "premissas": [
          "Boa parte das críticas vale para qualquer repasse federal, não só para as emendas Pix."
        ],
        "pergunte": [
          "Se o problema é transparência, ele se resolve com regras ou exige mudar o modelo?"
        ]
      },
      {
        "id": "enap-pork-para-quem-precisa",
        "posicao": "favoravel",
        "instituicao": "Enap (UnB)",
        "natureza": "Artigo vencedor do Prêmio SOF, da Escola Nacional de Administração Pública; autores ligados à UnB",
        "tipo": "Artigo premiado",
        "titulo": "Pork para quem precisa? Determinantes da alocação de emendas e efeitos em indicadores sociais no contexto de impositividade",
        "autores": "Frederico Bertholini, Lucio Rennó e João Gabriel Pessanha Leal",
        "data": "2026",
        "formato": "Página",
        "url": "https://repositorio.enap.gov.br/handle/1/9897",
        "tese": "Analisa as emendas de 2015 a 2024 e encontra efeito causal positivo sobre a educação nos municípios, sobretudo no Norte, Nordeste e Sul. É o argumento mais forte a favor. Mas o mesmo estudo mostra que o dinheiro vai mais para cidades que já estão melhores e não melhora a cobertura de saúde: \"os recursos podem até funcionar quando chegam, mas não chegam onde mais funcionariam\".",
        "premissas": [
          "O método de variáveis instrumentais isola o efeito das emendas."
        ],
        "pergunte": [
          "Se as emendas funcionam quando chegam, o problema é a existência delas ou o critério de quem recebe?"
        ]
      },
      {
        "id": "ipea-td3149-sus-emendas",
        "posicao": "contrario",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa do governo federal",
        "tipo": "Texto para discussão",
        "titulo": "Financiamento do SUS e emendas parlamentares: uma análise da desigualdade das transferências de incremento ao custeio de serviços no período de 2019 a 2024",
        "autores": "Filipe Matheus Silva Cavalcanti",
        "data": "2025",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstreams/bf9e3f79-9f73-49fe-96d7-87acf1e7d1df/download",
        "tese": "Mostra que quase todo o dinheiro extra do Ministério da Saúde para custear serviços em estados e municípios passou a depender de emendas, com distribuição muito desigual entre estados e parte relevante indo para entidades privadas sem fins lucrativos, que não aparecem com clareza nas bases públicas.",
        "numero": {
          "valor": "83%",
          "legenda": "do incremento ao custeio do SUS entre 2019 e 2024 veio de emendas"
        },
        "premissas": [
          "Distribuição desigual entre estados indica alocação sem critério de necessidade."
        ],
        "pergunte": [
          "Se o SUS depende tanto de emendas, o que aconteceria se elas fossem cortadas de uma vez?"
        ]
      },
      {
        "id": "insper-ocde-emendas",
        "posicao": "contrario",
        "instituicao": "Insper",
        "natureza": "Instituição privada de ensino e pesquisa",
        "tipo": "Estudo",
        "titulo": "É assim em todo lugar? Emendas parlamentares no Brasil e em 11 países da OCDE",
        "autores": "Hélio Tollini (ex-secretário de Orçamento Federal) e Marcos Mendes",
        "data": "09/2024",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/01/e-assim-em-todo-lugar-emendas-parlamentares-brasil-ocde-insper-2024.pdf",
        "tese": "Compara o Brasil com 11 países ricos e conclui que nenhum dá ao Parlamento um poder parecido sobre o Orçamento. Nos outros países, as emendas costumam ser pequenas e nenhum governo é obrigado a reservar dinheiro para elas. O modelo brasileiro pressiona as contas e pulveriza o gasto em projetos locais.",
        "numero": {
          "valor": "24%",
          "legenda": "dos gastos livres do governo foram para emendas em 2024, contra 2% em 2015"
        },
        "premissas": [
          "Países da OCDE são uma boa comparação, mesmo com sistemas políticos diferentes."
        ],
        "pergunte": [
          "O Brasil é presidencialista e muitos dos países comparados são parlamentaristas. Isso muda a comparação?"
        ]
      },
      {
        "id": "tcu-emendas-pix-2026",
        "posicao": "contrario",
        "instituicao": "TCU",
        "natureza": "Tribunal de Contas da União, órgão de controle ligado ao Congresso",
        "tipo": "Auditoria",
        "titulo": "TCU consolida auditorias sobre emendas parlamentares",
        "autores": "Tribunal de Contas da União (auditoria pedida pelo STF)",
        "data": "29/07/2026",
        "formato": "Página",
        "url": "https://portal.tcu.gov.br/imprensa/minuto-do-tcu/ybfgsj9mq2s65i6htnsd42yo",
        "tese": "A maior auditoria já feita sobre emendas Pix examinou 100 transferências para 73 municípios e dois estados, somando R$ 198 milhões. Encontrou prestação de contas falha, pagamentos sem comprovante, obras inacabadas, sobrepreço e indícios de fraude em licitações.",
        "numero": {
          "valor": "R$ 49 mi",
          "legenda": "de prejuízo estimado, cerca de um quarto do valor auditado"
        },
        "premissas": [
          "A amostra de 100 transferências representa o conjunto das emendas Pix."
        ],
        "pergunte": [
          "Os problemas são das emendas em si ou da capacidade das prefeituras de gastar bem?"
        ]
      }
    ],
    "videos": [
      {
        "id": "vQefDDA5-G8",
        "titulo": "Debate na Comissão de Orçamento expõe falta de fiscalização das emendas",
        "canal": "TV Senado",
        "nota": "O que os técnicos e parlamentares dizem sobre o controle do dinheiro.",
        "duracao": "4:28"
      },
      {
        "id": "qO3jb0wIVjc",
        "titulo": "Senador Anibal Diniz defende a liberação de emendas parlamentares",
        "canal": "TV Senado",
        "nota": "O argumento de que as emendas levam recursos a cidades esquecidas.",
        "duracao": "2:12"
      },
      {
        "id": "jzFBr_X1rHE",
        "titulo": "Hugo Motta acusa STF de intervir no Legislativo e defende emendas",
        "canal": "SBT News",
        "nota": "O presidente da Câmara defende o poder do Congresso sobre o Orçamento.",
        "duracao": "2:54"
      },
      {
        "id": "nmg-XK6huYc",
        "titulo": "Análise: defesa de Alcolumbre às emendas parlamentares é institucional",
        "canal": "CNN Brasil",
        "nota": "Comentaristas analisam a posição do presidente do Senado.",
        "duracao": "3:42"
      },
      {
        "id": "sBhTYFyJcRg",
        "titulo": "Dino manda PF apurar quadro generalizado de ilicitudes em emendas Pix",
        "canal": "Metrópoles",
        "nota": "O que o STF encontrou nas transferências sem destino definido.",
        "duracao": "2:43"
      },
      {
        "id": "OtptNLM2A04",
        "titulo": "A verdade sobre as emendas parlamentares",
        "canal": "Cortes do Flow",
        "nota": "Conversa sobre como as emendas funcionam e por que viraram polêmica.",
        "duracao": "8:25"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/emendas-parlamentares.jpg",
      "autor": "Agência Senado",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Lan%C3%A7amento_do_novo_Portal_do_Or%C3%A7amento_do_Congresso_(54750453449).jpg",
      "legenda": "Lançamento do novo Portal do Orçamento do Congresso.",
      "alt": "Evento de lançamento do portal do Orçamento no Congresso Nacional",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "novo-ensino-medio",
    "titulo": "Novo ensino médio",
    "categoria": "educacao",
    "tags": [
      "itinerários formativos",
      "BNCC",
      "reforma do ensino médio",
      "Lei 14.945",
      "ensino técnico",
      "Enem",
      "escola pública",
      "tempo integral"
    ],
    "pergunta": "O ensino médio deve ser flexível, com parte do currículo escolhida pelo aluno?",
    "resumo": "A reforma de 2017 criou os itinerários formativos e cortou as aulas comuns. Depois de muita crítica, uma lei de 2024 refez a reforma, que está sendo aplicada em 2025 e 2026. A disputa é sobre quanto o aluno deve escolher.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor da flexibilização",
      "contrario": "Críticas à flexibilização"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Até 2017, todo aluno do ensino médio cursava as mesmas 13 disciplinas obrigatórias. A reforma daquele ano (Lei 13.415, que veio de uma medida provisória de 2016) limitou a parte comum a no máximo 1.800 horas e criou os itinerários formativos: aprofundamentos em uma área ou formação técnica, escolhidos pelo estudante.",
        "A implantação começou em 2022 e gerou muita reclamação. Escolas pequenas ofereciam só dois itinerários, faltavam professores, surgiram disciplinas como \"projeto de vida\" sem preparo e muitos alunos sentiram que perderam aulas de matérias cobradas no Enem. Entidades de estudantes e professores pediram a revogação.",
        "Em 2024, o Congresso aprovou uma nova lei (Lei 14.945) que refez a reforma sem acabar com ela. A parte comum voltou a ter no mínimo 2.400 horas (2.100 para quem faz curso técnico), os itinerários passaram a ter diretrizes nacionais e toda escola deve oferecer pelo menos dois. A implantação ocorre em 2025 e 2026, e o Enem deve mudar a partir de 2027.",
        "A discussão continua: para uns, a flexibilidade e o ensino técnico são o caminho para manter o jovem na escola; para outros, num país desigual, a escolha só existe no papel e a escola pública precisa garantir uma formação comum sólida a todos."
      ],
      "fatos": [
        {
          "rotulo": "Parte comum na reforma de 2017",
          "valor": "máx. 1.800 h"
        },
        {
          "rotulo": "Parte comum na lei de 2024",
          "valor": "mín. 2.400 h"
        },
        {
          "rotulo": "Carga total do ensino médio",
          "valor": "3.000 h"
        },
        {
          "rotulo": "Novo Enem previsto para",
          "valor": "2027"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Escolha",
        "favoravel": "A lei de 2024 mantém a flexibilidade e corrige erros: a parte comum volta a ter no mínimo 2.400 horas e os itinerários ganham diretrizes nacionais. (A1)",
        "contrario": "Em São Paulo, mais de um terço das escolas ofereceu só dois itinerários, e 22% das aulas estavam sem professor em abril de 2022. (B1)",
        "fonte_favoravel": "tpe-analise-pl-5230",
        "fonte_contrario": "repu-nem-sp"
      },
      {
        "tema": "Ensino técnico",
        "favoravel": "Para quem para no ensino médio, a formação técnica aumenta o salário em 14% a 16% e a chance de emprego com carteira. (A3)",
        "contrario": "Na escola-piloto do Ceará, faltou apoio da Secretaria para formar professores e montar os itinerários. (B3)",
        "fonte_favoravel": "fgv-biondi-ensino-tecnico",
        "fonte_contrario": "ufjf-itinerarios-ceara"
      },
      {
        "tema": "Condições da escola",
        "favoravel": "Pernambuco saiu do 21º lugar para o melhor Ideb do ensino médio apostando em tempo integral, com valorização dos professores e boa gestão. (A2)",
        "contrario": "Numa escola de Campinas, alunos dizem ter perdido matérias e temem o vestibular, e professores relatam sobrecarga. (B2)",
        "fonte_favoravel": "priscila-cruz-poder360",
        "fonte_contrario": "unesp-unicamp-flexibilizacao"
      }
    ],
    "glossario": [
      {
        "termo": "Itinerário formativo",
        "definicao": "Parte do currículo em que o aluno aprofunda uma área (linguagens, matemática, ciências da natureza ou humanas) ou faz um curso técnico."
      },
      {
        "termo": "Formação geral básica",
        "definicao": "A parte comum do currículo, igual para todos, definida pela BNCC."
      },
      {
        "termo": "BNCC",
        "definicao": "Base Nacional Comum Curricular. Documento que define o que todo estudante brasileiro deve aprender em cada etapa."
      },
      {
        "termo": "Ensino técnico integrado",
        "definicao": "Quando o aluno faz o ensino médio e um curso técnico ao mesmo tempo, na mesma escola, como nos institutos federais."
      }
    ],
    "incertezas": [
      "Se a versão de 2024 vai resolver os problemas de oferta, já que a falta de professores e de estrutura não muda por lei.",
      "Qual o efeito da reforma no aprendizado. Ainda não há avaliação nacional da nova versão.",
      "Como o Enem vai cobrar os itinerários a partir de 2027."
    ],
    "fontes": [
      {
        "titulo": "Agência Gov: Sancionada lei que reestrutura o ensino médio (08/2024)",
        "url": "https://agenciagov.ebc.com.br/noticias/202408/sancionada-lei-que-reestrutura-o-ensino-medio"
      }
    ],
    "leituras": [
      {
        "id": "tpe-analise-pl-5230",
        "posicao": "favoravel",
        "instituicao": "Todos Pela Educação",
        "natureza": "Organização da sociedade civil, financiada por fundações empresariais",
        "tipo": "Análise técnica",
        "titulo": "Novo Ensino Médio: análise do projeto de lei aprovado no Congresso Nacional",
        "autores": "Todos Pela Educação",
        "data": "07/2024",
        "formato": "PDF",
        "url": "https://todospelaeducacao.org.br/wordpress/wp-content/uploads/2024/07/novo-ensino-medio-analise-do-todos-pela-educacao.pdf",
        "tese": "Avalia o texto que virou a Lei 14.945 como \"um grande avanço\": mantém os princípios da reforma de 2017, como mais horas na escola e a flexibilidade, e corrige os erros de desenho, devolvendo horas à parte comum e criando diretrizes nacionais para os itinerários.",
        "numero": {
          "valor": "1.800 → 2.400 h",
          "legenda": "de parte comum: o máximo de 2017 vira o mínimo de 2024"
        },
        "premissas": [
          "A flexibilidade é boa em si; o problema estava na execução."
        ],
        "pergunte": [
          "Se a parte comum voltou às 2.400 horas de antes, o que sobra de flexível na prática?"
        ]
      },
      {
        "id": "priscila-cruz-poder360",
        "posicao": "favoravel",
        "instituicao": "Todos Pela Educação",
        "natureza": "Artigo da presidente-executiva da organização",
        "tipo": "Artigo de opinião",
        "titulo": "A chance para um verdadeiro Novo Ensino Médio",
        "autores": "Priscila Cruz",
        "data": "22/03/2023",
        "formato": "Página",
        "url": "https://www.poder360.com.br/opiniao/chance-para-um-verdadeiro-novo-ensino-medio/",
        "tese": "Escrito no auge dos pedidos de revogação, defende corrigir a reforma em vez de jogá-la fora. Cita Pernambuco, que apostou em escolas de tempo integral e saiu do 21º lugar para o melhor Ideb do ensino médio do país, como prova de que mudar o modelo funciona quando vem junto com valorização docente e boa gestão.",
        "numero": {
          "valor": "+18%",
          "legenda": "de salário médio para egressos de escolas de tempo integral em Pernambuco, segundo pesquisas citadas"
        },
        "premissas": [
          "O exemplo de Pernambuco pode ser replicado em outros estados."
        ],
        "pergunte": [
          "O sucesso de Pernambuco veio do tempo integral ou da flexibilização do currículo?"
        ]
      },
      {
        "id": "fgv-biondi-ensino-tecnico",
        "posicao": "favoravel",
        "instituicao": "FGV EESP",
        "natureza": "Escola de economia da Fundação Getulio Vargas (privada)",
        "tipo": "Tese de doutorado",
        "titulo": "Três ensaios em economia da educação",
        "autores": "Roberta Loboda Biondi, orientada por Sergio Firpo",
        "data": "10/2015",
        "formato": "PDF",
        "url": "https://observatoriodeeducacao.institutounibanco.org.br/api/assets/d161302d-3590-4830-ab6c-5f99e4ed5997",
        "tese": "Mede quanto o ensino técnico de nível médio muda a vida profissional. Para quem para no ensino médio, ter formação técnica aumenta o salário e a chance de emprego com carteira. É uma das bases do argumento de que o itinerário técnico vale a pena.",
        "numero": {
          "valor": "+14% a 16%",
          "legenda": "de salário para quem tem formação técnica e no máximo o ensino médio"
        },
        "premissas": [
          "Os métodos estatísticos separam o efeito do curso do perfil de quem escolhe fazê-lo."
        ],
        "pergunte": [
          "O estudo é anterior à reforma. Um itinerário técnico numa escola sem estrutura teria o mesmo efeito de um bom curso técnico?"
        ]
      },
      {
        "id": "repu-nem-sp",
        "posicao": "contrario",
        "instituicao": "REPU (UFABC, USP e outras)",
        "natureza": "Rede de pesquisadores de universidades públicas",
        "tipo": "Nota técnica",
        "titulo": "Novo Ensino Médio e indução de desigualdades escolares na rede estadual de São Paulo",
        "autores": "Ana Paula Corti, Débora Cristina Goulart e Fernando Cássio",
        "data": "06/2022",
        "formato": "PDF",
        "url": "https://anec.org.br/wp-content/uploads/2021/09/NT_NEM_REPU.pdf",
        "tese": "Com dados da própria Secretaria de Educação, mostra que na maior rede do país a escolha era limitada: mais de um terço das escolas ofereceu só dois itinerários, faltavam professores e quase toda a ampliação de carga horária foi feita a distância, sobretudo para quem estuda à noite.",
        "numero": {
          "valor": "22%",
          "legenda": "das aulas do novo ensino médio estavam sem professor em abril de 2022"
        },
        "premissas": [
          "O que aconteceu em São Paulo se repete em outras redes."
        ],
        "pergunte": [
          "Esses problemas são da ideia de flexibilizar ou de como São Paulo a implantou?"
        ]
      },
      {
        "id": "unesp-unicamp-flexibilizacao",
        "posicao": "contrario",
        "instituicao": "Unesp e Unicamp",
        "natureza": "Universidades públicas paulistas",
        "tipo": "Artigo (preprint)",
        "titulo": "A flexibilização curricular do Novo Ensino Médio na experiência de docentes e estudantes",
        "autores": "Márcia Lopes Reis e Amanda Hebling do Amaral",
        "data": "09/2024",
        "formato": "PDF",
        "url": "https://preprints.scielo.org/index.php/scielo/preprint/download/9736/18073/18688",
        "tese": "Observação e entrevistas numa escola estadual de tempo integral em Campinas. Alunos dizem ter perdido matérias importantes e temem o vestibular; professores relatam sobrecarga e disciplinas fragmentadas. Para as autoras, a flexibilização aprofunda a desigualdade da escola pública.",
        "premissas": [
          "Uma escola revela problemas que se repetem em outras.",
          "Estudo preliminar e qualitativo, com amostra pequena."
        ],
        "pergunte": [
          "O que os alunos de escolas que gostaram dos itinerários diriam?"
        ]
      },
      {
        "id": "ufjf-itinerarios-ceara",
        "posicao": "contrario",
        "instituicao": "UFJF",
        "natureza": "Universidade pública (mestrado profissional em Gestão e Avaliação da Educação, CAEd)",
        "tipo": "Dissertação",
        "titulo": "A tradução da política dos itinerários formativos em uma escola-piloto do Ceará no contexto da proposta do Novo Ensino Médio",
        "autores": "José Wilson Freitas de Miranda Filho",
        "data": "11/2021",
        "formato": "PDF",
        "url": "https://mestrado-hmg.caeddigital.net/wp-content/uploads/2025/02/Dissertacao-revisada_final.pdf",
        "tese": "Acompanha uma das 29 escolas-piloto do Ceará. A escola se esforçou, mas teve pouco apoio da Secretaria para entender a política, formar professores e montar os itinerários. O autor questiona se a escolha do aluno é real quando a oferta local é limitada.",
        "premissas": [
          "Os problemas de uma escola-piloto antecipam os da implantação em larga escala."
        ],
        "pergunte": [
          "Com mais apoio do estado, a mesma escola teria feito a reforma funcionar?"
        ]
      }
    ],
    "videos": [
      {
        "id": "Vc-j43hMyNI",
        "titulo": "O que é o Novo Ensino Médio? Entenda as mudanças da reforma",
        "canal": "Nova Escola",
        "nota": "Explicação didática feita por uma revista de educação.",
        "duracao": "5:22"
      },
      {
        "id": "DEJdLYp7mic",
        "titulo": "Novo Ensino Médio: os benefícios e malefícios do modelo",
        "canal": "Rádio Bandeirantes",
        "nota": "Prós e contras discutidos com especialistas.",
        "duracao": "5:34"
      },
      {
        "id": "_RIQbkvjI14",
        "titulo": "Mendonça Filho fala sobre a importância do Novo Ensino Médio",
        "canal": "Mendonça Filho",
        "nota": "O ministro que lançou a reforma em 2016 resume a ideia.",
        "duracao": "0:38"
      },
      {
        "id": "Tdhx3esnA60",
        "titulo": "Novo Ensino Médio: a opinião de nossos alunos",
        "canal": "SENAI Nacional",
        "nota": "Estudantes de cursos técnicos contam como foi a experiência.",
        "duracao": "2:02"
      },
      {
        "id": "5MuVVYPf5JA",
        "titulo": "Por que o Novo Ensino Médio é ruim? Entenda as críticas",
        "canal": "geo ilustrada",
        "nota": "As principais críticas à reforma, explicadas por um professor.",
        "duracao": "9:23"
      },
      {
        "id": "qgb88aj58w8",
        "titulo": "Professor manda a real sobre a reforma do ensino médio",
        "canal": "Cortes do Flow",
        "nota": "Um professor conta o que viu da reforma dentro da sala de aula.",
        "duracao": "7:19"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/novo-ensino-medio.jpg",
      "autor": "Gabinete do senador Aécio Neves",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:A%C3%A9cio_Neves_-_Boas-vindas_aos_estudantes_do_programa_Jovem_Senador_-_17_11_2015_(23095237335).jpg",
      "legenda": "Estudantes de ensino médio de escolas públicas no programa Jovem Senador, no plenário do Senado, em 2015.",
      "alt": "Estudantes de camiseta laranja de costas, diante da mesa do plenário do Senado",
      "posicao": "50% 75%"
    }
  },
  {
    "id": "bets",
    "titulo": "Proibição das bets",
    "categoria": "economia",
    "tags": [
      "apostas online",
      "apostas esportivas",
      "jogo do tigrinho",
      "cassino online",
      "MP 1.394",
      "vício em jogo",
      "endividamento",
      "Lei 14.790",
      "mercado ilegal"
    ],
    "pergunta": "As apostas online devem continuar proibidas no Brasil?",
    "resumo": "Em setembro de 2026, o governo proibiu as bets por medida provisória, menos de dois anos depois de regulamentá-las. O Congresso tem 120 dias para confirmar ou derrubar a decisão.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor da proibição",
      "contrario": "A favor de regular, não proibir"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "As apostas esportivas online foram legalizadas em 2018, mas ficaram anos sem regras. A Lei 14.790, de 2023, criou a regulamentação: desde 1º de janeiro de 2025, só podiam operar empresas autorizadas pelo Ministério da Fazenda, que pagaram R$ 30 milhões cada pela licença. Cassinos online, como o \"jogo do tigrinho\", também foram liberados.",
        "O mercado explodiu. Em 2024, o Banco Central estimou que cerca de 24 milhões de pessoas mandavam perto de R$ 20 bilhões por mês para as bets via Pix, e que 5 milhões de pessoas de famílias do Bolsa Família enviaram R$ 3 bilhões só em agosto daquele ano. Uma CPI no Senado investigou influenciadores e manipulação de jogos.",
        "Em 25 de setembro de 2026, o governo editou a Medida Provisória 1.394, que proíbe apostas de quota fixa e cassinos online em todo o país. Os depósitos foram bloqueados na hora, os sites saíram do ar em 6 de outubro e os saldos dos apostadores devem ser devolvidos pelos bancos. O governo também anunciou um projeto de lei com pena de prisão para quem explorar apostas.",
        "A MP já vale, mas perde efeito se o Congresso não a aprovar em até 120 dias. As empresas autorizadas dizem que vão à Justiça, clubes de futebol perdem patrocínios e economistas alertam para a migração dos apostadores a sites ilegais. A decisão veio no meio da campanha eleitoral, o que também entrou na discussão."
      ],
      "fatos": [
        {
          "rotulo": "Medida provisória",
          "valor": "MP 1.394/2026"
        },
        {
          "rotulo": "Sites fora do ar desde",
          "valor": "06/10/2026"
        },
        {
          "rotulo": "Pix para bets em ago/2024 (BC)",
          "valor": "R$ 20,8 bi"
        },
        {
          "rotulo": "Prazo para o Congresso",
          "valor": "120 dias"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Alcance",
        "favoravel": "Em agosto de 2024, 5 milhões de pessoas do Bolsa Família enviaram R$ 3 bilhões às bets. (A1)",
        "contrario": "A maior parte do valor apostado volta como prêmio. O gasto líquido seria de cerca de 0,35% do PIB por mês. (B1)",
        "fonte_favoravel": "bcb-nt-513-apostas",
        "fonte_contrario": "werlang-regular-nao-proibir"
      },
      {
        "tema": "Saúde",
        "favoravel": "10,9 milhões de brasileiros apostam de forma arriscada, e 55% dos adolescentes que apostam estão em risco de transtorno do jogo. (A2)",
        "contrario": "O risco está no desenho das plataformas, como bônus e notificações. A regulação deveria mirar esse desenho. (B3)",
        "fonte_favoravel": "unifesp-lenad-apostas",
        "fonte_contrario": "idp-economia-comportamental-bets"
      },
      {
        "tema": "Economia e mercado ilegal",
        "favoravel": "O varejo deixou de vender cerca de R$ 143 bilhões em 2024 e 2025. A CNC fala em associação, não em causa plena. (A3)",
        "contrario": "A fatia das apostas em sites ilegais caiu com a regulação, e o mercado autorizado pagou quase R$ 10 bilhões em impostos no primeiro ano. (B2)",
        "fonte_favoravel": "cnc-bets-varejo",
        "fonte_contrario": "lca-locomotiva-ilegal"
      }
    ],
    "glossario": [
      {
        "termo": "Aposta de quota fixa",
        "definicao": "Aposta em que o prêmio é definido no momento em que se aposta, como nas apostas esportivas. É o nome legal das bets."
      },
      {
        "termo": "Medida provisória",
        "definicao": "Norma do presidente que vale na hora, mas precisa ser aprovada pelo Congresso em até 120 dias para não perder a validade."
      },
      {
        "termo": "Ludopatia",
        "definicao": "Transtorno do jogo: quando a pessoa perde o controle sobre as apostas, mesmo com prejuízo à vida financeira, familiar ou profissional."
      },
      {
        "termo": "Outorga",
        "definicao": "Valor pago ao governo por uma empresa para receber autorização de explorar uma atividade."
      }
    ],
    "incertezas": [
      "Quantos apostadores vão migrar para sites ilegais e se o bloqueio de pagamentos vai funcionar.",
      "Se o Congresso vai aprovar, mudar ou derrubar a medida provisória, e o que a Justiça vai decidir sobre as licenças pagas.",
      "Quanto do aumento do endividamento das famílias se deve às bets e quanto a outros fatores, como juros altos."
    ],
    "fontes": [
      {
        "titulo": "Metrópoles: Fim das bets: Lula assina MP e caso agora vai ao Congresso. Veja prazos (25/09/2026)",
        "url": "https://www.metropoles.com/brasil/fim-das-bets-lula-assina-mp-e-caso-agora-vai-ao-congresso-veja-prazos"
      },
      {
        "titulo": "InfoMoney: Governo anuncia MP que proíbe bets no Brasil; veja o que muda (26/09/2026)",
        "url": "https://www.infomoney.com.br/politica/governo-anuncia-mp-das-bets/"
      }
    ],
    "leituras": [
      {
        "id": "bcb-nt-513-apostas",
        "posicao": "favoravel",
        "instituicao": "Banco Central",
        "natureza": "Autoridade monetária do país",
        "tipo": "Nota técnica",
        "titulo": "Análise técnica sobre o mercado de apostas online no Brasil e o perfil dos apostadores (Nota Técnica 513/2024)",
        "autores": "Banco Central do Brasil",
        "data": "23/09/2024",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2024/09/estudo-apostas-bc-24set2024.pdf",
        "tese": "Primeiro retrato oficial do tamanho das bets, a partir das transferências via Pix. Mostra um mercado de cerca de R$ 20 bilhões por mês, concentrado em jovens de 20 a 30 anos, e que alcançava famílias pobres: 17% das pessoas do Bolsa Família apostaram em agosto de 2024. O estudo é descritivo, mas virou a principal base de quem defende restringir ou proibir.",
        "numero": {
          "valor": "R$ 3 bi",
          "legenda": "enviados às bets por 5 milhões de pessoas do Bolsa Família em agosto de 2024"
        },
        "premissas": [
          "O Pix capta a maior parte do dinheiro que vai para as bets.",
          "Estimativas preliminares, como o próprio BC avisa."
        ],
        "pergunte": [
          "O BC calcula que cerca de 85% do valor apostado volta como prêmio. Isso muda a leitura dos R$ 3 bilhões?"
        ]
      },
      {
        "id": "unifesp-lenad-apostas",
        "posicao": "favoravel",
        "instituicao": "Unifesp",
        "natureza": "Universidade pública federal (Levantamento Nacional de Álcool e Drogas, Lenad III)",
        "tipo": "Pesquisa nacional",
        "titulo": "Quase 11 milhões de brasileiros apostam de modo a pôr em risco a saúde e as finanças",
        "autores": "Clarice Sandi Madruga e Ronaldo Laranjeira (relato da revista Pesquisa Fapesp)",
        "data": "04/2025",
        "formato": "Página",
        "url": "https://revistapesquisa.fapesp.br/quase-11-milhoes-de-brasileiros-apostam-de-modo-a-por-em-risco-a-saude-e-as-financas/",
        "tese": "Entrevistou quase 5 mil pessoas em 349 municípios. Encontrou 10,9 milhões de brasileiros com 14 anos ou mais apostando de forma arriscada e 1,4 milhão com padrão de transtorno do jogo. Entre adolescentes que apostam, mais da metade está em risco.",
        "numero": {
          "valor": "55%",
          "legenda": "dos adolescentes que apostam estão em risco de transtorno do jogo, contra 38% dos adultos"
        },
        "premissas": [
          "A escala PGSI mede bem o risco de vício.",
          "As pessoas respondem com sinceridade sobre o próprio jogo."
        ],
        "pergunte": [
          "Adolescentes já eram proibidos de apostar. Isso indica que proibir funciona ou que não funciona?"
        ]
      },
      {
        "id": "cnc-bets-varejo",
        "posicao": "favoravel",
        "instituicao": "CNC",
        "natureza": "Confederação Nacional do Comércio, entidade patronal do varejo",
        "tipo": "Estudo",
        "titulo": "Bets prejudicaram o varejo em R$ 143 bilhões, afirma CNC",
        "autores": "Confederação Nacional do Comércio (relato da Fenacon)",
        "data": "2025",
        "formato": "Página",
        "url": "https://fenacon.org.br/?p=50948",
        "tese": "Com dados da sua pesquisa de endividamento, a CNC associa o crescimento das apostas ao aumento da inadimplência grave e estima que o varejo deixou de vender cerca de R$ 143 bilhões em 2024 e 2025. O efeito seria maior nas famílias de até cinco salários mínimos.",
        "numero": {
          "valor": "R$ 143 bi",
          "legenda": "em vendas perdidas pelo varejo em dois anos, segundo a CNC"
        },
        "premissas": [
          "O método separa o efeito das bets de juros, desemprego e inflação.",
          "A própria CNC diz que mostra associação, não causa plena."
        ],
        "pergunte": [
          "A CNC representa o comércio, que concorre com as bets pelo dinheiro das famílias. Isso pesa na leitura?"
        ]
      },
      {
        "id": "werlang-regular-nao-proibir",
        "posicao": "contrario",
        "instituicao": "FGV EPGE",
        "natureza": "Escola de economia da Fundação Getulio Vargas; autor foi diretor do Banco Central",
        "tipo": "Artigo",
        "titulo": "Apostas online: regular, mas não proibir",
        "autores": "Sérgio Werlang",
        "data": "08/10/2024",
        "formato": "PDF",
        "url": "https://iepecdg.com.br/wp-content/uploads/2024/10/ARTIGO_SERGIO-WERLANG_-APOSTAS-ONLINE-REGULAR-MAS-NAO-PROIBIR.pdf",
        "tese": "Usa os próprios números do Banco Central para dizer que o gasto líquido das famílias é bem menor do que parece, porque a maior parte do valor apostado volta como prêmio. Propõe regular duro: limitar a publicidade, identificar e bloquear quem tem vício e pôr um teto de apostas para famílias de baixa renda. Proibir algo que milhões querem consumir, diz, causaria perda de bem-estar.",
        "numero": {
          "valor": "0,35% do PIB",
          "legenda": "seria o gasto líquido mensal com bets, cerca de R$ 3,2 bilhões"
        },
        "premissas": [
          "As pessoas apostam porque valorizam a diversão, e não só por vício."
        ],
        "pergunte": [
          "Se o gasto líquido é pequeno na média, ele também é pequeno para quem tem vício?"
        ]
      },
      {
        "id": "lca-locomotiva-ilegal",
        "posicao": "contrario",
        "instituicao": "LCA Consultores e Instituto Locomotiva",
        "natureza": "Consultoria econômica e instituto de pesquisa privados; estudo encomendado pelo IBJR, entidade das empresas de apostas",
        "tipo": "Estudo",
        "titulo": "Estudo aponta queda do mercado ilegal de apostas no Brasil",
        "autores": "LCA e Locomotiva (relato da Máquina do Esporte)",
        "data": "11/08/2026",
        "formato": "Página",
        "url": "https://maquinadoesporte.com.br/apostas/estudo-aponta-queda-do-mercado-ilegal-de-apostas-no-brasil/",
        "tese": "Com entrevistas feitas em maio de 2026, estima que a fatia das apostas em sites ilegais caiu desde que a regulamentação entrou em vigor, e que o mercado regulado pagou quase R$ 10 bilhões em impostos no primeiro ano. É o principal argumento de que a regulação estava funcionando e de que proibir devolveria o mercado à ilegalidade.",
        "numero": {
          "valor": "38% a 44%",
          "legenda": "das apostas online ainda iam para sites ilegais no 1º semestre de 2026, contra 41% a 51% em 2025"
        },
        "premissas": [
          "Apostadores sabem dizer se o site que usam é autorizado."
        ],
        "pergunte": [
          "O estudo foi pago pelo setor. Mesmo assim, ele mostra que quase metade das apostas era ilegal com a lei em vigor. Isso ajuda qual lado?"
        ]
      },
      {
        "id": "idp-economia-comportamental-bets",
        "posicao": "contrario",
        "instituicao": "IDP",
        "natureza": "Instituição privada de ensino e pesquisa em Brasília",
        "tipo": "Artigo",
        "titulo": "A economia comportamental das bets: arquitetura de escolha e regulação baseada nas apostas online no Brasil",
        "autores": "Iasmim Azevêdo Cardoso (Boletim Economia Empírica)",
        "data": "2026",
        "formato": "PDF",
        "url": "https://www.portaldeperiodicos.idp.edu.br/bee/article/download/9167/3853/32907",
        "tese": "Não defende proibir. Argumenta que a lei de 2023 foi um avanço, mas olhou só para licenças, pagamentos e lavagem de dinheiro. O risco está no desenho das plataformas (bônus, notificações, mensagens de urgência), que explora vieses como a aversão à perda. A regulação deveria mirar esse desenho.",
        "premissas": [
          "Mudar o design das plataformas reduz o dano sem acabar com a atividade."
        ],
        "pergunte": [
          "Regular o design de apps estrangeiros é viável na prática?"
        ]
      }
    ],
    "videos": [
      {
        "id": "x9bRVsTzxlU",
        "titulo": "Vício em jogos de aposta: o que fazer?",
        "canal": "Drauzio Varella",
        "nota": "O médico explica como o vício em apostas funciona e onde buscar ajuda.",
        "duracao": "2:39"
      },
      {
        "id": "r96MnQvLjjo",
        "titulo": "Banco Central não regula apostas, mas estuda impacto na economia",
        "canal": "TV Senado",
        "nota": "O que o Banco Central sabe sobre o dinheiro gasto em bets.",
        "duracao": "1:40"
      },
      {
        "id": "58dNNCV86pc",
        "titulo": "Campos Neto: Banco Central avalia impacto de bets na inadimplência",
        "canal": "CNN Brasil Economia",
        "nota": "O então presidente do BC fala do risco para o endividamento.",
        "duracao": "1:32"
      },
      {
        "id": "hLrsJK032Mc",
        "titulo": "Análise: governo que turbinou bets agora quer proibir",
        "canal": "CNN Brasil",
        "nota": "Crítica à mudança de rumo, da regulação de 2023 à proibição.",
        "duracao": "2:04"
      },
      {
        "id": "PNyhJvg4M8k",
        "titulo": "Clubes e bets se unem contra possível restrição ao setor",
        "canal": "Band Jornalismo",
        "nota": "O peso das apostas no patrocínio do futebol.",
        "duracao": "3:21"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/bets.jpg",
      "autor": "Agência Senado",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:CPIMJAE_-_CPI_da_Manipula%C3%A7%C3%A3o_de_Jogos_e_Apostas_Esportivas_(53846739673).jpg",
      "legenda": "Reunião da CPI da Manipulação de Jogos e Apostas Esportivas, no Senado.",
      "alt": "Senadores reunidos em sala de comissão parlamentar de inquérito",
      "posicao": "50% 45%"
    }
  },
  {
    "id": "ajuste-fiscal",
    "titulo": "Gastos públicos e dívida",
    "categoria": "economia",
    "tags": [
      "arcabouço fiscal",
      "teto de gastos",
      "dívida pública",
      "ajuste fiscal",
      "austeridade",
      "corte de gastos",
      "déficit",
      "juros",
      "IFI",
      "Tesouro"
    ],
    "pergunta": "O governo precisa cortar gastos para controlar a dívida pública?",
    "resumo": "A dívida bruta chegou a 82,9% do PIB em agosto de 2026 e as despesas obrigatórias crescem mais que o limite do arcabouço fiscal. O debate é se a saída é cortar gastos ou crescer mais.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de cortar gastos",
      "contrario": "Contra cortes como prioridade"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Desde 2014, o governo federal fechou quase todos os anos no vermelho, mesmo sem contar os juros. A diferença é coberta com dívida. A dívida bruta do governo geral chegou a 82,9% do PIB em agosto de 2026, cerca de R$ 11,1 trilhões, segundo o Banco Central.",
        "Em 2016, a Emenda Constitucional 95 criou o teto de gastos, que congelava a despesa federal em termos reais por 20 anos. Ele foi furado várias vezes e, em 2023, foi trocado pelo arcabouço fiscal (Lei Complementar 200), que deixa a despesa crescer entre 0,6% e 2,5% acima da inflação por ano, conforme a arrecadação, e fixa metas de resultado primário.",
        "O problema apontado por órgãos técnicos é que despesas obrigatórias, como aposentadorias, BPC e precatórios, crescem mais rápido que esse limite. Sobra cada vez menos para investimentos e custeio. A Instituição Fiscal Independente (IFI), do Senado, projeta a dívida acima de 100% do PIB em 2032 sem ajustes.",
        "Há duas visões principais. Uma diz que é preciso cortar ou frear gastos, inclusive revendo regras como a ligação de benefícios ao salário mínimo e os pisos de saúde e educação, para baixar os juros e evitar uma crise. A outra diz que cortar gasto social e investimento derruba o crescimento e piora a própria relação entre dívida e PIB, e que o ajuste deveria vir de impostos sobre os mais ricos, de juros menores e de mais crescimento."
      ],
      "fatos": [
        {
          "rotulo": "Dívida bruta (ago/2026)",
          "valor": "82,9% do PIB"
        },
        {
          "rotulo": "Projeção da IFI para 2032",
          "valor": "102% do PIB"
        },
        {
          "rotulo": "Superávit que estabiliza a dívida (IFI)",
          "valor": "2,1% do PIB"
        },
        {
          "rotulo": "Aposentadorias do INSS em 2026",
          "valor": "8,3% do PIB"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Dívida",
        "favoravel": "No cenário da IFI, a dívida passa de 100% do PIB em 2032 e chega a 115% em 2036. Estabilizar exigiria superávit de 2,1% do PIB ao ano. (A1)",
        "contrario": "Austeridade em economia fraca reduz o crescimento, aumenta a dívida e atinge mais os vulneráveis. (B3)",
        "fonte_favoravel": "ifi-raf-113",
        "fonte_contrario": "fes-austeridade-educacao"
      },
      {
        "tema": "Onde mexer",
        "favoravel": "Desligar aposentadorias e benefícios do salário mínimo, rever os pisos de saúde e educação e reduzir a complementação ao Fundeb. (A3)",
        "contrario": "Investimento público e benefícios sociais são os gastos que mais movem o PIB. Dá para trocar subsídios por esses gastos e reduzir a dívida. (B1)",
        "fonte_favoravel": "salto-arcabouco-obrigatorias",
        "fonte_contrario": "usp-ajuste-receita-gasto"
      },
      {
        "tema": "Espaço no orçamento",
        "favoravel": "Aposentadorias, BPC e precatórios crescem acima do limite, e os gastos livres caem de 1,7% para 1,4% do PIB entre 2025 e 2035. (A2)",
        "contrario": "Contando o valor da saúde e da educação públicas, 20 anos de austeridade aumentariam a desigualdade. O gasto com educação seria 19% menor em 2037. (B2)",
        "fonte_favoravel": "tesouro-rpf-2025",
        "fonte_contrario": "nemea-ufmg-austeridade"
      }
    ],
    "glossario": [
      {
        "termo": "Resultado primário",
        "definicao": "Diferença entre o que o governo arrecada e o que gasta, sem contar os juros da dívida. Superávit quando sobra, déficit quando falta."
      },
      {
        "termo": "Dívida bruta do governo geral",
        "definicao": "Tudo o que União, estados e municípios devem. É o indicador mais usado para comparar países."
      },
      {
        "termo": "Arcabouço fiscal",
        "definicao": "Regra criada em 2023 que limita o crescimento das despesas federais e fixa metas de resultado primário."
      },
      {
        "termo": "Despesa obrigatória",
        "definicao": "Gasto que o governo é obrigado a fazer por lei ou pela Constituição, como aposentadorias, salários de servidores e o BPC."
      },
      {
        "termo": "Multiplicador fiscal",
        "definicao": "Quanto o PIB muda para cada real a mais ou a menos de gasto público. É no tamanho dele que economistas mais discordam."
      }
    ],
    "incertezas": [
      "Qual o tamanho dos multiplicadores fiscais no Brasil hoje. Disso depende se cortar gasto reduz ou aumenta a dívida em relação ao PIB.",
      "Quanto o nível da dívida influencia os juros cobrados pelo mercado.",
      "Qual o limite de dívida que um país emergente como o Brasil aguenta sem crise."
    ],
    "fontes": [
      {
        "titulo": "CNN Brasil: BC: Dívida bruta do governo geral avança para 82,9% do PIB em agosto (30/09/2026)",
        "url": "https://www.cnnbrasil.com.br/economia/money/macroeconomia/bc-divida-bruta-do-governo-geral-avanca-para-829-do-pib-em-agosto/"
      }
    ],
    "leituras": [
      {
        "id": "ifi-raf-113",
        "posicao": "favoravel",
        "instituicao": "IFI (Senado Federal)",
        "natureza": "Instituição Fiscal Independente, órgão técnico do Senado",
        "tipo": "Relatório de Acompanhamento Fiscal",
        "titulo": "Relatório de Acompanhamento Fiscal nº 113",
        "autores": "Instituição Fiscal Independente",
        "data": "25/06/2026",
        "formato": "PDF",
        "url": "https://www12.senado.leg.br/ifi/pdf/raf113_jun2026.pdf",
        "tese": "Projeta déficits primários persistentes e a dívida bruta passando de 100% do PIB em 2032 e chegando a 115% em 2036. Para estabilizar a dívida, seria preciso um superávit de 2,1% do PIB ao ano. A IFI considera esse nível de dívida extremamente elevado para um país emergente e vê um cenário desafiador para o próximo governo.",
        "numero": {
          "valor": "115%",
          "legenda": "do PIB seria a dívida bruta em 2036, no cenário base da IFI"
        },
        "premissas": [
          "Juros e crescimento seguem perto do que o mercado espera hoje."
        ],
        "pergunte": [
          "A IFI aponta o problema, mas não diz onde cortar. Que escolhas um superávit de 2% do PIB exigiria?"
        ]
      },
      {
        "id": "tesouro-rpf-2025",
        "posicao": "favoravel",
        "instituicao": "Tesouro Nacional",
        "natureza": "Secretaria do Ministério da Fazenda que administra a dívida pública",
        "tipo": "Relatório de Projeções Fiscais",
        "titulo": "Relatório de Projeções Fiscais (2º semestre de 2025)",
        "autores": "Secretaria do Tesouro Nacional",
        "data": "12/2025",
        "formato": "PDF",
        "url": "https://cdn.tesouro.gov.br/sistemas-internos/apex/producao/sistemas/thot/arquivos/publicacoes/53580_2492838/RPF-dez25.pdf",
        "tese": "Mesmo o próprio governo projeta a dívida subindo até 88,6% do PIB em 2032. O relatório mostra que, a partir de 2030, despesas como aposentadorias, BPC e precatórios crescem mais que o limite do arcabouço, espremendo os gastos livres. Para estabilizar a dívida já, seria preciso um superávit maior que o previsto.",
        "numero": {
          "valor": "1,7% → 1,4%",
          "legenda": "do PIB para gastos livres do governo entre 2025 e 2035"
        },
        "premissas": [
          "As metas fiscais serão cumpridas, com novas medidas de arrecadação."
        ],
        "pergunte": [
          "O Tesouro prevê cumprir as metas com mais arrecadação. Aumentar imposto é alternativa a cortar gasto?"
        ]
      },
      {
        "id": "salto-arcabouco-obrigatorias",
        "posicao": "favoravel",
        "instituicao": "Warren Investimentos (ex-IFI)",
        "natureza": "Entrevista de economista que dirigiu a IFI; hoje no setor privado",
        "tipo": "Entrevista",
        "titulo": "Arcabouço fiscal não sobreviverá sem medidas para conter gastos, diz economista",
        "autores": "Felipe Salto (relato do InfoMoney)",
        "data": "02/07/2024",
        "formato": "Página",
        "url": "https://www.infomoney.com.br/?p=2516426",
        "tese": "As despesas obrigatórias crescem mais que o limite da regra e vão espremer o resto até o arcabouço ser abandonado. Salto sugere desligar aposentadorias e benefícios assistenciais do salário mínimo, rever os pisos de saúde e educação e reduzir a complementação da União ao Fundeb.",
        "premissas": [
          "Sem regra crível, os juros sobem e o custo para a economia é maior que o dos cortes."
        ],
        "pergunte": [
          "Desligar benefícios do salário mínimo reduz o poder de compra de quem os recebe. Quem perde e quem ganha com essa troca?"
        ]
      },
      {
        "id": "usp-ajuste-receita-gasto",
        "posicao": "contrario",
        "instituicao": "USP",
        "natureza": "Universidade pública; artigo na revista Estudos Econômicos",
        "tipo": "Artigo científico",
        "titulo": "Ajuste via receita ou via gasto? Cenários de ajuste fiscal considerando estimativas de efeitos multiplicadores",
        "autores": "Hiaman Santos, Guilherme Klein Martins (Universidade de Leeds) e Marina Sanches",
        "data": "03/2026",
        "formato": "Página",
        "url": "https://revistas.usp.br/ee/article/view/229421",
        "tese": "Estima os multiplicadores fiscais do Brasil e conclui que investimento público e benefícios sociais são os gastos que mais movem o PIB. Por isso, cortá-los pode piorar a relação entre dívida e PIB. Seria possível reduzir a dívida e crescer ao mesmo tempo trocando subsídios por investimento e gasto social.",
        "premissas": [
          "Os efeitos estimados no passado continuam valendo."
        ],
        "pergunte": [
          "Se o investimento tem efeito tão alto, por que ele é o primeiro a ser cortado quando falta dinheiro?"
        ]
      },
      {
        "id": "nemea-ufmg-austeridade",
        "posicao": "contrario",
        "instituicao": "UFMG (Cedeplar)",
        "natureza": "Universidade pública; Núcleo de Estudos em Modelagem Econômica e Ambiental Aplicada",
        "tipo": "Nota técnica",
        "titulo": "Austeridade fiscal no Brasil: impactos na renda das famílias e na atividade econômica",
        "autores": "Guilherme Silva Cardoso, Débora Freire Cardoso e Edson Paulo Domingues",
        "data": "09/2019",
        "formato": "PDF",
        "url": "https://pesquisas.face.ufmg.br/nemea/wp-content/uploads/sites/20/2019/09/NEMEA_Austeridade.pdf",
        "tese": "Simula 20 anos de teto de gastos. Olhando só a renda em dinheiro, a desigualdade até cai. Mas, quando se conta o valor da saúde e da educação públicas que as famílias deixam de receber, a austeridade aumenta a desigualdade e não gera crescimento extra.",
        "numero": {
          "valor": "-19%",
          "legenda": "de gasto público com educação em 2037 no cenário de austeridade, frente ao cenário base"
        },
        "premissas": [
          "O modelo econômico simula bem 20 anos de economia.",
          "Serviços públicos devem ser contados como parte da renda das famílias."
        ],
        "pergunte": [
          "O estudo simula o teto de 2016, que já acabou. As conclusões valem para o arcabouço?"
        ]
      },
      {
        "id": "fes-austeridade-educacao",
        "posicao": "contrario",
        "instituicao": "Fundação Friedrich Ebert (autores da Unicamp)",
        "natureza": "Fundação alemã ligada à social-democracia; autores pesquisadores da Unicamp",
        "tipo": "Análise",
        "titulo": "Austeridade e impactos no Brasil: ajuste fiscal, teto de gastos e o financiamento da educação pública",
        "autores": "Pedro Rossi, Ana Luiza Matos de Oliveira e Flávio Arantes",
        "data": "09/2017",
        "formato": "PDF",
        "url": "https://collections.fes.de/publikationen/download/pdf/459214",
        "tese": "Argumenta que austeridade em recessão é contraproducente: reduz o crescimento, aumenta a dívida e atinge mais os vulneráveis. Critica o teto de 2016 por transformar um ajuste de curto prazo num encolhimento do Estado por 20 anos, contrário ao projeto da Constituição de 1988.",
        "premissas": [
          "Em economia fraca, o gasto público puxa o crescimento."
        ],
        "pergunte": [
          "O argumento vale do mesmo jeito com a economia crescendo e desemprego baixo?"
        ]
      }
    ],
    "videos": [
      {
        "id": "b4SoNx0XRSM",
        "titulo": "Desafio é equilibrar dívida pública em relação ao PIB, diz Felipe Salto",
        "canal": "CNN Brasil Economia",
        "nota": "O ex-diretor da IFI do Senado explica a conta da dívida.",
        "duracao": "12:29"
      },
      {
        "id": "mm7lQ1bwryQ",
        "titulo": "Arcabouço fiscal não limitou crescimento da dívida pública, diz professor",
        "canal": "CNN Brasil Money",
        "nota": "Por que a regra atual não segurou a dívida.",
        "duracao": "9:30"
      },
      {
        "id": "knYjWl9fnkg",
        "titulo": "Corte de despesas exige condução firme, diz economista-chefe da XP",
        "canal": "CNN Brasil Money",
        "nota": "A visão do mercado financeiro sobre onde cortar.",
        "duracao": "2:30"
      },
      {
        "id": "oSGYSfUKNO0",
        "titulo": "Problema fiscal não será resolvido só com corte de gastos, diz Kayath",
        "canal": "CNN Brasil",
        "nota": "O argumento de que também é preciso mexer na arrecadação.",
        "duracao": "5:22"
      },
      {
        "id": "Oufcg6z8H6I",
        "titulo": "A verdade sobre o arcabouço fiscal, com Juliane Furno",
        "canal": "Opera Mundi",
        "nota": "A economista Juliane Furno critica limitar o gasto público.",
        "duracao": "9:45"
      },
      {
        "id": "uxRTLqpdvGk",
        "titulo": "Juros, inflação e gastos: Igor questiona Haddad",
        "canal": "Cortes do Flow",
        "nota": "O ministro da Fazenda responde sobre gastos e dívida.",
        "duracao": "9:30"
      }
    ],
    "imagem": {
      "arquivo": "img/temas/ajuste-fiscal.jpg",
      "autor": "Pedro França/Agência Senado",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Imagens_de_Bras%C3%ADlia_(52652558481).jpg",
      "legenda": "Prédio do Ministério da Fazenda, na Esplanada dos Ministérios, em Brasília.",
      "alt": "Fachada do prédio do Ministério da Fazenda em Brasília",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "previdencia-salario-minimo",
    "titulo": "Aposentadorias e salário mínimo",
    "categoria": "economia",
    "tags": [
      "previdência",
      "reforma da previdência",
      "salário mínimo",
      "desvinculação",
      "aposentadoria",
      "bpc",
      "inss",
      "piso previdenciário",
      "gasto público",
      "arcabouço fiscal"
    ],
    "pergunta": "As aposentadorias e o BPC devem deixar de acompanhar o salário mínimo?",
    "resumo": "Cerca de 29,3 milhões de beneficiários do INSS recebem exatamente um salário mínimo, que é de R$ 1.621 em 2026. Uma parte dos candidatos e economistas quer separar esses benefícios do mínimo para conter o gasto, e outra parte vê nisso um corte na renda dos mais pobres.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de desvincular",
      "contrario": "Contra desvincular"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Constituição diz que nenhuma aposentadoria ou pensão que substitui o salário pode ser menor que o salário mínimo (artigo 201). O BPC, benefício pago a idosos e pessoas com deficiência de baixa renda, também vale um salário mínimo. Por isso, quando o mínimo sobe acima da inflação, o gasto da Previdência e da assistência sobe junto.",
        "Desde 2023 o mínimo é corrigido pela inflação (INPC) mais o crescimento do PIB de dois anos antes. No fim de 2024, o Congresso limitou esse ganho real a 2,5% ao ano, dentro do arcabouço fiscal. Em 2026 o mínimo passou a R$ 1.621. Segundo o DIEESE, cada R$ 1 a mais no mínimo custa cerca de R$ 380 milhões por ano à Previdência.",
        "Na campanha de 2026, a ideia de uma nova reforma da Previdência voltou. Grupos de especialistas ligados ao CDPP e ao IMDS propuseram idade mínima de 67 anos, e parte deles defende corrigir benefícios só pela inflação. Representantes de Renan Santos (Missão) e Ronaldo Caiado (PSD) apoiaram a desvinculação. Romeu Zema (Novo) tratou como possibilidade. O governo Lula diz que não discute o tema.",
        "Quem defende a mudança diz que o vínculo faz a despesa obrigatória crescer sozinha e espreme o resto do orçamento, e que o salário mínimo não é a melhor ferramenta contra a pobreza. Quem é contra diz que esses benefícios são a renda principal de milhões de famílias, ajudaram a reduzir a desigualdade e que parte do custo volta como imposto. Há ainda o debate jurídico: um benefício abaixo do mínimo pode ferir a Constituição."
      ],
      "fatos": [
        {
          "rotulo": "Salário mínimo em 2026",
          "valor": "R$ 1.621"
        },
        {
          "rotulo": "Beneficiários do INSS que recebem o piso",
          "valor": "29,3 milhões"
        },
        {
          "rotulo": "Custo anual de cada R$ 1 a mais no mínimo (Previdência)",
          "valor": "R$ 380,5 milhões"
        },
        {
          "rotulo": "Gasto com BPC em 2025 (IFI)",
          "valor": "R$ 127,2 bilhões, cerca de 1% do PIB"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Custo fiscal",
        "favoravel": "O ganho real do mínimo, repassado a aposentadorias e BPC, aumentou o gasto em cerca de R$ 165 bilhões entre 2023 e 2026, e só em 2026 foram R$ 64 bilhões. (A2)",
        "contrario": "O reajuste de 2026 custa R$ 39,1 bilhões a mais à Previdência, mas coloca R$ 81,7 bilhões na economia, e parte disso volta ao governo como imposto. (B1)",
        "fonte_favoravel": "ibre-giambiagi-indexacao-sm",
        "fonte_contrario": "dieese-nt289-salario-minimo"
      },
      {
        "tema": "Desigualdade",
        "favoravel": "Se o piso estivesse desvinculado desde 2012, seria de cerca de R$ 1.180 em 2023, e a economia somaria R$ 400 bilhões até 2035. A proteção aos mais vulneráveis viria de outros programas. (A1)",
        "contrario": "Entre 1995 e 2014, o mínimo explicou 72,4% da queda da desigualdade, e o maior pedaço veio das aposentadorias ligadas a ele. (B2)",
        "fonte_favoravel": "clp-diagnostico-previdencia",
        "fonte_contrario": "made-usp-npe30-salario-minimo"
      },
      {
        "tema": "BPC e direitos",
        "favoravel": "No BPC, cada aumento real do mínimo eleva o valor e também o limite de renda para entrar. De 2021 a 2025, a despesa real subiu 50%. (A3)",
        "contrario": "Para muitas famílias o benefício é a renda da casa, e a Constituição proíbe aposentadoria abaixo do mínimo. Dá para discutir o ganho real, não o piso. (B3)",
        "fonte_favoravel": "ifi-raf110-bpc",
        "fonte_contrario": "ieprev-badari-aposentadoria-minimo"
      }
    ],
    "glossario": [
      {
        "termo": "Piso previdenciário",
        "definicao": "Menor valor que uma aposentadoria ou pensão do INSS pode ter. Hoje é igual ao salário mínimo."
      },
      {
        "termo": "BPC",
        "definicao": "Benefício de Prestação Continuada. Paga um salário mínimo por mês a idosos com 65 anos ou mais e a pessoas com deficiência de famílias de baixa renda, mesmo sem contribuição ao INSS."
      },
      {
        "termo": "Desvinculação",
        "definicao": "Separar o valor dos benefícios do salário mínimo. Os benefícios passariam a ser corrigidos por outro índice, em geral só pela inflação."
      },
      {
        "termo": "Ganho real",
        "definicao": "Aumento acima da inflação. Desde 2024 o ganho real do salário mínimo está limitado a 2,5% ao ano."
      },
      {
        "termo": "INPC",
        "definicao": "Índice de inflação do IBGE usado para corrigir o salário mínimo e os benefícios do INSS acima do piso."
      }
    ],
    "incertezas": [
      "Se uma emenda que deixe benefícios abaixo do mínimo seria aceita pelo STF, já que pode ser vista como cláusula pétrea.",
      "Quanto do gasto extra com o mínimo volta aos cofres como imposto, por causa do consumo maior das famílias.",
      "Qual seria o efeito sobre a pobreza de idosos se o piso ficasse para trás do mínimo por vários anos."
    ],
    "fontes": [
      {
        "titulo": "Viva: Aposentadorias e salário mínimo: o que defendem os presidenciáveis (16/09/2026)",
        "url": "https://viva.com.br/politica/aposentadorias-e-salario-minimo-o-que-defendem-os-presidenciaveis.html"
      },
      {
        "titulo": "Folhapress/Bahia Notícias: Propostas de reforma da Previdência defendem aumento da idade mínima, mudança no MEI e bônus para mulher (19/07/2026)",
        "url": "https://www.bahianoticias.com.br/folha/noticia/401363-propostas-de-reforma-da-previdencia-defendem-aumento-da-idade-minima-mudanca-no-mei-e-bonus-para-mulher"
      }
    ],
    "leituras": [
      {
        "id": "clp-diagnostico-previdencia",
        "posicao": "favoravel",
        "instituicao": "CLP (Centro de Liderança Pública)",
        "natureza": "Organização privada sem fins lucrativos, de orientação liberal, que defende reformas do Estado",
        "tipo": "Nota técnica",
        "titulo": "Um diagnóstico sobre o sistema previdenciário do Brasil",
        "autores": "Daniel Duque",
        "data": "17/05/2024",
        "formato": "Página",
        "url": "https://clp.org.br/um-diagnostico-sobre-o-sistema-previdenciario-do-brasil/",
        "tese": "Mostra que Previdência e benefícios custaram cerca de R$ 1,1 trilhão em 2023, perto de 10% do PIB, e que o regime geral é onde há mais espaço para economia. Propõe soltar o piso dos benefícios do salário mínimo. Se isso valesse desde 2012, o piso seria de cerca de R$ 1.180 em 2023. A economia começaria em R$ 6 bilhões em 2026 e somaria cerca de R$ 400 bilhões até 2035.",
        "numero": {
          "valor": "R$ 400 bi",
          "legenda": "de economia acumulada entre 2026 e 2035 com a desvinculação do piso, segundo o CLP"
        },
        "premissas": [
          "O salário mínimo segue com ganho real perto de 1,5% ao ano.",
          "A proteção aos mais vulneráveis pode ser mantida com outros programas sociais."
        ],
        "pergunte": [
          "O texto não calcula o efeito sobre a pobreza. Quanto renda perderiam os idosos que vivem só do benefício?"
        ]
      },
      {
        "id": "ibre-giambiagi-indexacao-sm",
        "posicao": "favoravel",
        "instituicao": "FGV Ibre (revista Conjuntura Econômica)",
        "natureza": "Centro de pesquisa privado da Fundação Getulio Vargas; o autor é um dos principais defensores de nova reforma da Previdência",
        "tipo": "Artigo",
        "titulo": "Efeito da regra de indexação do salário mínimo: R$ 165 bilhões em quatro anos",
        "autores": "Fabio Giambiagi",
        "data": "09/2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/09/revista-conjuntura-economica.pdf",
        "tese": "Calcula que o ganho real do salário mínimo, ao passar para aposentadorias e BPC, aumentou o gasto em cerca de R$ 165 bilhões entre 2023 e 2026, sendo R$ 64 bilhões só em 2026. Mantida a regra, seriam mais R$ 182 bilhões de 2027 a 2030. O autor diz que isso torna o orçamento quase impossível de cumprir e propõe corrigir o mínimo só pela inflação a partir de 2027. Ele cita a desvinculação por emenda constitucional como alternativa, mas alerta para o risco de o STF barrar a medida.",
        "numero": {
          "valor": "R$ 165 bi",
          "legenda": "de gasto extra com INSS e BPC entre 2023 e 2026 por causa do ganho real do mínimo"
        },
        "premissas": [
          "O dinheiro economizado iria para reduzir a dívida, e não para outros gastos."
        ],
        "pergunte": [
          "A proposta principal congela o mínimo de todos os trabalhadores, não só dos benefícios. É melhor isso ou separar os dois?"
        ]
      },
      {
        "id": "ifi-raf110-bpc",
        "posicao": "favoravel",
        "instituicao": "IFI (Senado Federal)",
        "natureza": "Instituição Fiscal Independente, órgão técnico do Senado; o texto não propõe desvinculação, mas mostra o mecanismo de custo usado por quem a defende",
        "tipo": "Relatório de Acompanhamento Fiscal",
        "titulo": "Evolução da despesa com o Benefício de Prestação Continuada (BPC), no Relatório de Acompanhamento Fiscal nº 110",
        "autores": "Rafael Bacciotti",
        "data": "19/03/2026",
        "formato": "PDF",
        "url": "https://www12.senado.leg.br/ifi/pdf/raf110_mar2026.pdf",
        "tese": "O BPC custou R$ 127,2 bilhões em 2025, cerca de 1% do PIB, para 6,4 milhões de benefícios. Como o valor e o limite de renda para entrar no programa são ligados ao mínimo, cada aumento real faz o benefício ficar mais caro e mais gente ter direito. Entre 2021 e 2025, o mínimo subiu 10,1% acima da inflação, o número de benefícios subiu 35,1% e a despesa real subiu 50%. A projeção é chegar a 1,2% a 1,4% do PIB em 2035.",
        "numero": {
          "valor": "+50%",
          "legenda": "de alta real na despesa com BPC entre 2021 e 2025"
        },
        "premissas": [
          "As tendências de concessão e de judicialização dos últimos anos continuam."
        ],
        "pergunte": [
          "Cerca de 70% da alta veio do número de beneficiários, não do valor. Desvincular resolveria o principal motor do gasto?"
        ]
      },
      {
        "id": "dieese-nt289-salario-minimo",
        "posicao": "contrario",
        "instituicao": "DIEESE",
        "natureza": "Departamento de estudos mantido por centrais sindicais; defende a valorização do salário mínimo",
        "tipo": "Nota técnica",
        "titulo": "Impactos do aumento do salário mínimo para R$ 1.621,00 em 2026 (Nota Técnica nº 289)",
        "autores": "DIEESE",
        "data": "22/12/2025",
        "formato": "PDF",
        "url": "https://www.dieese.org.br/notatecnica/2025/notaTec289salarioMinimo.pdf",
        "tese": "Cerca de 61,9 milhões de pessoas têm renda ligada ao mínimo, entre elas 29,3 milhões de beneficiários do INSS. O reajuste de 2026 custa cerca de R$ 39,1 bilhões a mais por ano à Previdência, mas injeta R$ 81,7 bilhões na economia. Para o DIEESE, essa renda vira consumo, emprego e crescimento, e parte do custo volta ao governo como imposto.",
        "numero": {
          "valor": "61,9 milhões",
          "legenda": "de pessoas com renda referenciada no salário mínimo em 2026"
        },
        "premissas": [
          "O dinheiro a mais na mão de quem ganha pouco é gasto quase todo em consumo no Brasil."
        ],
        "pergunte": [
          "A nota diz que parte do custo volta como imposto, mas não calcula quanto. Isso cobre o gasto extra?"
        ]
      },
      {
        "id": "made-usp-npe30-salario-minimo",
        "posicao": "contrario",
        "instituicao": "Made-USP",
        "natureza": "Centro de pesquisa da USP (universidade pública) sobre macroeconomia das desigualdades, de linha heterodoxa",
        "tipo": "Nota de Política Econômica",
        "titulo": "Impactos distributivos do salário mínimo: uma estimativa para o período 2014-2021 (Nota nº 030)",
        "autores": "Rikelme Duarte Gomes, Matias Rebello Cardomingo, Marina da Silva Sanches, Gustavo Pereira Serra, Alessandra Scalioni Brito e Celia Lessa Kerstenetzky",
        "data": "23/01/2023",
        "formato": "PDF",
        "url": "https://madeusp.com.br/wp-content/uploads/2023/01/npe_30_vf.pdf",
        "tese": "Lembra que, entre 1995 e 2014, o salário mínimo explicou 72,4% da queda da desigualdade de renda das famílias, e que o maior pedaço disso (37,7 pontos) veio das aposentadorias ligadas ao mínimo. Entre 2014 e 2021, com o mercado de trabalho em crise, a desigualdade subiu, mas as aposentadorias continuaram puxando no sentido contrário. Para os autores, a ligação dos benefícios ao mínimo é peça central da redução da desigualdade.",
        "numero": {
          "valor": "37,7 pontos",
          "legenda": "dos 72,4% de queda da desigualdade explicados pelo mínimo (1995-2014) vieram das aposentadorias"
        },
        "premissas": [
          "Os efeitos medidos no passado continuam valendo com a população mais velha."
        ],
        "pergunte": [
          "O próprio estudo diz que famílias com alguém ganhando um mínimo já não estão entre as mais pobres. O dinheiro chega a quem mais precisa?"
        ]
      },
      {
        "id": "ieprev-badari-aposentadoria-minimo",
        "posicao": "contrario",
        "instituicao": "IEPREV (Instituto de Estudos Previdenciários)",
        "natureza": "Associação privada de advogados e estudiosos de direito previdenciário, que atua na defesa dos segurados",
        "tipo": "Artigo de opinião",
        "titulo": "A aposentadoria não pode valer menos que o mínimo",
        "autores": "João Badari",
        "data": "15/09/2026",
        "formato": "Página",
        "url": "https://ieprev.com.br/blog/a-aposentadoria-nao-pode-valer-menos-que-o-minimo",
        "tese": "Aceita discutir custo, fraudes e se os benefícios devem ter o mesmo ganho real do mínimo. Mas diz que deixar uma aposentadoria abaixo do salário mínimo esbarra no artigo 201 da Constituição. Para muitas famílias, o benefício é a renda da casa, usada em comida, remédio, luz e aluguel. Uma reforma pode mudar idade e cálculo, mas não esse piso.",
        "premissas": [
          "O piso igual ao mínimo é um direito protegido pela Constituição, que não pode ser retirado por emenda."
        ],
        "pergunte": [
          "O autor separa reduzir o ganho real de deixar o piso abaixo do mínimo. Na prática, a proposta em debate faz qual das duas coisas?"
        ]
      }
    ],
    "videos": [
      {
        "id": "gKiUL-_dAkE",
        "titulo": "Novo salário mínimo vai impactar contas públicas? Economista explica",
        "canal": "Jovem Pan News",
        "duracao": "8:50",
        "nota": "Como cada real a mais no mínimo pesa na Previdência e no BPC."
      },
      {
        "id": "v6T_1mGSEmw",
        "titulo": "Por que outra reforma da Previdência será inevitável, segundo Felipe Salto",
        "canal": "BM&C News",
        "duracao": "7:32",
        "nota": "O ex-diretor da IFI explica por que vê a conta crescendo além do limite."
      },
      {
        "id": "PCZyLvywURI",
        "titulo": "E se os aposentados ganharem menos de um salário mínimo?",
        "canal": "Rascunhos Econômicos",
        "duracao": "18:49",
        "nota": "Um canal de economia simula o que mudaria com a desvinculação."
      },
      {
        "id": "JRUeVYuKssk",
        "titulo": "Dieese: novo salário mínimo impacta R$ 39,1 bi nas contas da Previdência",
        "canal": "CNN Brasil",
        "duracao": "0:53",
        "nota": "O número do Dieese, que defende a valorização do mínimo."
      },
      {
        "id": "MACSN8AW5Vs",
        "titulo": "Lula descarta desvincular piso das aposentadorias do salário mínimo",
        "canal": "SBT News",
        "duracao": "2:35",
        "nota": "A posição do governo em 2024."
      },
      {
        "id": "zuv335ZI17o",
        "titulo": "Câmara aprova limite ao salário mínimo e restrição ao BPC",
        "canal": "SBT News",
        "duracao": "1:51",
        "nota": "O pacote de 2024 que pôs um teto no aumento real do mínimo."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/previdencia-salario-minimo.jpg",
      "autor": "Elza Fiúza/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br/",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Instituto_Nacional_do_Seguro_Social.JPG",
      "legenda": "Atendimento em agência da Previdência Social, em Brasília.",
      "alt": "Guichês de atendimento numerados em uma agência do INSS",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "autonomia-banco-central",
    "titulo": "Autonomia financeira do Banco Central",
    "categoria": "economia",
    "tags": [
      "banco central",
      "autonomia financeira",
      "pec 65",
      "senhoriagem",
      "orçamento",
      "pix",
      "galípolo",
      "política monetária",
      "senado",
      "dívida pública"
    ],
    "pergunta": "O Banco Central deve ter autonomia financeira e orçamentária, além da autonomia que já tem?",
    "resumo": "A PEC 65/2023 daria ao Banco Central orçamento próprio, pago com receitas como a senhoriagem, que rendeu em média R$ 23,3 bilhões por ano entre 2017 e 2025, contra um orçamento de R$ 4,8 bilhões. Aprovada na CCJ do Senado em junho de 2026, a proposta aguarda votação no Plenário.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor da autonomia financeira",
      "contrario": "Contra a PEC 65"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "O Banco Central (BC) cuida da inflação, fiscaliza os bancos e opera o Pix. Desde 2021, a Lei Complementar 179 garante mandatos fixos de quatro anos para o presidente e os diretores, que não coincidem com o do presidente da República. Isso é a autonomia operacional: o governo não pode demitir a diretoria por discordar dos juros. Mas o dinheiro para salários, sistemas e concursos ainda depende do Orçamento federal, aprovado pelo Congresso e sujeito a cortes do governo.",
        "A PEC 65/2023, do senador Vanderlan Cardoso (PSD-GO), quer mudar isso. No texto aprovado, o BC deixa de ser autarquia e vira uma entidade pública de natureza especial. Ele aprovaria o próprio orçamento, pago com receitas próprias, como o rendimento das reservas internacionais e a senhoriagem, o ganho que vem de emitir moeda. Hoje esse ganho vai para o Tesouro. O texto também põe o Pix na Constituição e proíbe que ele seja vendido ou concedido.",
        "A Comissão de Constituição e Justiça (CCJ) do Senado aprovou o texto do relator Plínio Valério (PSDB-AM) em 10 de junho de 2026, em votação simbólica. Desde então, a PEC está pronta para o Plenário, onde precisa de 49 dos 81 votos em dois turnos, antes de ir à Câmara. Até outubro de 2026 ela não foi votada. O Ministério da Fazenda pediu ajustes e o governo apresentou um texto alternativo, que manteria o BC como autarquia.",
        "Quem defende diz que o BC ganhou tarefas, como o Pix e a fiscalização de novas empresas financeiras, mas perdeu servidores e verba, e que sem dinheiro garantido a autonomia de 2021 fica incompleta. Quem critica diz que a senhoriagem é receita do Estado e hoje ajuda a abater a dívida pública, que a PEC reduz o controle do Congresso sobre o BC e que ela pode deixar o banco mais exposto à influência do mercado que ele fiscaliza."
      ],
      "fatos": [
        {
          "rotulo": "Senhoriagem média por ano (2017-2025)",
          "valor": "R$ 23,3 bilhões"
        },
        {
          "rotulo": "Orçamento médio do BC por ano (2017-2025)",
          "valor": "R$ 4,8 bilhões"
        },
        {
          "rotulo": "Servidores efetivos do BC (vagas criadas)",
          "valor": "cerca de 3.400 (6.470)"
        },
        {
          "rotulo": "Votos necessários no Plenário do Senado",
          "valor": "49 de 81, em dois turnos"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Falta de pessoal",
        "favoravel": "Desde 2011, o BC perdeu cerca de 1.400 servidores, 35% do quadro, e hoje só 32 pessoas operam, regulam e fiscalizam o Pix, que tem mais de 6 bilhões de transações por mês. (A2)",
        "contrario": "Das 911 saídas de servidores entre 2016 e 2023, só 296 foram voluntárias, e os gastos administrativos do BC subiram 4,5% em 2023. Não haveria a debandada nem a falta de dinheiro que justificam a PEC. (B1)",
        "fonte_favoravel": "anbcb-nota-pec65-2025",
        "fonte_contrario": "ufpr-dornelas-bkr-2024"
      },
      {
        "tema": "Contas públicas",
        "favoravel": "O texto melhora a relação financeira entre o BC e o Tesouro, porque dá mais clareza, previsibilidade e transparência às estatísticas fiscais. (A3)",
        "contrario": "A senhoriagem rendeu em média R$ 23,4 bilhões por ano entre 2017 e 2025, cinco vezes o gasto do BC. Se ficasse com o banco, a dívida bruta seria cerca de R$ 167 bilhões maior no período. (B2)",
        "fonte_favoravel": "carta-ex-presidentes-bc-2026",
        "fonte_contrario": "transforma-unicamp-nt22-2026"
      },
      {
        "tema": "Exemplo de fora",
        "favoravel": "Segundo estudo do FMI, mais de 90% dos bancos centrais têm autonomia financeira, e presidentes de bancos centrais apontaram essa autonomia como a mais importante entre dez dimensões. (A1)",
        "contrario": "Nenhum grande banco central combina autonomia financeira, orçamento fora da lei orçamentária e menos controle do Congresso. E, como a senhoriagem cresce com os juros, o BC teria incentivo para mantê-los altos. (B3)",
        "fonte_favoravel": "diretores-bc-autonomia-2024",
        "fonte_contrario": "manifesto-economistas-pec65-2026"
      }
    ],
    "glossario": [
      {
        "termo": "Autonomia operacional",
        "definicao": "Garantia de que a diretoria do BC decide os juros sem poder ser demitida pelo governo. Foi criada pela Lei Complementar 179, de 2021, com mandatos fixos de quatro anos."
      },
      {
        "termo": "Autonomia financeira e orçamentária",
        "definicao": "Poder de o BC aprovar e gastar o próprio orçamento, com receitas próprias, sem depender do Orçamento federal nem de cortes do governo."
      },
      {
        "termo": "Senhoriagem",
        "definicao": "Ganho que o BC tem por emitir moeda: as pessoas guardam dinheiro que não rende juros, e o BC aplica esse valor. Hoje o resultado vai para o Tesouro."
      },
      {
        "termo": "PEC",
        "definicao": "Proposta de Emenda à Constituição. Precisa de 3/5 dos votos em dois turnos na Câmara e no Senado."
      },
      {
        "termo": "Captura regulatória",
        "definicao": "Quando um órgão que fiscaliza um setor passa a agir mais no interesse das empresas fiscalizadas do que no interesse público."
      }
    ],
    "incertezas": [
      "Qual texto chegará ao Plenário: o do relator, com o BC como entidade especial, ou um acordo mais próximo da proposta do governo, que mantém o BC como autarquia.",
      "Quanto a mudança afetaria a dívida pública. A senhoriagem varia muito de ano para ano e foi negativa em 2021, 2023 e 2025.",
      "Se a falta de servidores e verba pode ser resolvida com o Orçamento atual ou se só uma mudança na Constituição garante recursos estáveis."
    ],
    "fontes": [
      {
        "titulo": "Senado Notícias: PEC que dá ampla autonomia ao Banco Central vai a Plenário (10/06/2026)",
        "url": "https://www12.senado.leg.br/noticias/materias/2026/06/10/pec-que-da-ampla-autonomia-ao-banco-central-vai-a-plenario"
      },
      {
        "titulo": "Senado Notícias: Plínio Valério cobra votação de PEC que amplia autonomia do Banco Central (01/09/2026)",
        "url": "https://www12.senado.leg.br/noticias/materias/2026/09/01/plinio-valerio-cobra-votacao-de-pec-que-amplia-autonomia-do-banco-central"
      },
      {
        "titulo": "Senado Federal: tramitação da PEC 65/2023",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/161269"
      }
    ],
    "leituras": [
      {
        "id": "diretores-bc-autonomia-2024",
        "posicao": "favoravel",
        "instituicao": "Banco Central do Brasil (diretoria)",
        "natureza": "Artigo assinado por quatro diretores do próprio BC, órgão público diretamente interessado na proposta",
        "tipo": "Artigo de opinião",
        "titulo": "4 diretores do BC defendem autonomia orçamentária e financeira",
        "autores": "Ailton Aquino, Diogo Guillen, Otávio Damaso e Renato Gomes",
        "data": "09/07/2024",
        "formato": "Página",
        "url": "https://www.poder360.com.br/opiniao/4-diretores-do-bc-defendem-autonomia-orcamentaria-e-financeira/",
        "tese": "Os diretores dizem que o BC nasceu autônomo há 60 anos, mas mudanças legais o deixaram sob fortes restrições de orçamento. Citam estudo do FMI segundo o qual mais de 90% dos bancos centrais têm autonomia financeira, e uma pesquisa em que presidentes de bancos centrais apontaram a autonomia financeira como a dimensão mais importante entre dez. Argumentam que fiscalizar criptoativos, novos meios de pagamento e inteligência artificial exige investimento contínuo. Dizem que a PEC traria mais controles, como limite ao crescimento dos gastos, aprovação do orçamento pelo Senado e fiscalização do TCU.",
        "numero": {
          "valor": "mais de 90%",
          "legenda": "dos bancos centrais têm autonomia financeira, segundo estudo do FMI citado pelos diretores"
        },
        "premissas": [
          "A experiência de outros países pode ser aplicada ao Brasil sem grandes adaptações.",
          "Mais recursos garantidos levam a um BC mais eficiente."
        ],
        "pergunte": [
          "Os autores dirigem o próprio BC. Quem ganha com a mudança é também quem a defende?",
          "Os outros bancos centrais com autonomia financeira também ficam com a senhoriagem e têm orçamento fora do Congresso?"
        ]
      },
      {
        "id": "anbcb-nota-pec65-2025",
        "posicao": "favoravel",
        "instituicao": "ANBCB (Associação Nacional dos Auditores do Banco Central)",
        "natureza": "Associação de servidores de carreira do BC; parte interessada, já que a PEC trata de salários e carreiras",
        "tipo": "Nota técnica",
        "titulo": "Nota ANBCB: Sobre PEC 65",
        "autores": "Auditores e servidores do Banco Central (ANBCB)",
        "data": "01/08/2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/08/nota-ANBCB-funcionalismo-PEC-65.pdf",
        "tese": "A nota diz que anos de falta de verba deixaram o BC em grave deterioração, enquanto suas tarefas cresceram. Desde 2011, o banco perdeu cerca de 1.400 servidores, 35% do quadro, contra 1% em outros órgãos federais. Apenas 32 pessoas operam, regulam e fiscalizam o Pix, que movimenta mais de 6 bilhões de transações por mês, e 155 servidores fiscalizam 1.100 instituições não bancárias. Para os autores, a PEC 65 é a solução estrutural.",
        "numero": {
          "valor": "-35%",
          "legenda": "no número de servidores do BC desde 2011, segundo a ANBCB"
        },
        "premissas": [
          "A falta de pessoal vem da dependência do Orçamento federal, e não de escolhas de gestão."
        ],
        "pergunte": [
          "Os problemas de pessoal poderiam ser resolvidos com concursos autorizados no Orçamento atual, sem mudar a Constituição?"
        ]
      },
      {
        "id": "carta-ex-presidentes-bc-2026",
        "posicao": "favoravel",
        "instituicao": "Ex-presidentes e ex-diretores do Banco Central",
        "natureza": "Carta de cinco ex-presidentes do BC de governos de diferentes partidos e 32 ex-diretores; vários hoje atuam no mercado financeiro",
        "tipo": "Carta pública",
        "titulo": "Ex-presidentes e ex-diretores do BC divulgam carta em apoio à PEC da autonomia",
        "autores": "Wadico Bucchi, Gustavo Loyola, Henrique Meirelles, Alexandre Tombini, Roberto Campos Neto e 32 ex-diretores (relato do InfoMoney/Estadão Conteúdo)",
        "data": "30/06/2026",
        "formato": "Página",
        "url": "https://www.infomoney.com.br/economia/ex-presidentes-e-ex-diretores-do-bc-divulgam-carta-em-apoio-a-pec-da-autonomia/",
        "tese": "Os signatários dizem que a autonomia de 2021 fortaleceu a política de juros, mas deixou o arranjo incompleto. O BC ganhou tarefas, como a fiscalização do sistema financeiro e a operação do Pix, sem receber os instrumentos correspondentes, e limites de orçamento podem prejudicar suas funções. Respondendo à equipe econômica, afirmam que o texto melhora a relação financeira entre BC e Tesouro, com mais clareza e transparência nas estatísticas fiscais. Consideram o texto da CCJ pronto para o Plenário.",
        "premissas": [
          "Um BC com orçamento previsível protege melhor a moeda e o sistema financeiro."
        ],
        "pergunte": [
          "Se o texto melhora as contas públicas, por que o Ministério da Fazenda pediu mudanças antes da votação?"
        ]
      },
      {
        "id": "ufpr-dornelas-bkr-2024",
        "posicao": "contrario",
        "instituicao": "UFPR (Brazilian Keynesian Review)",
        "natureza": "Universidade pública; artigo em revista acadêmica da Associação Keynesiana Brasileira, de linha heterodoxa",
        "tipo": "Artigo científico",
        "titulo": "PEC 65/2023 e a negligenciada relação entre Banco Central e Tesouro Nacional",
        "autores": "Larissa Naves Deus Dornelas (UFPR)",
        "data": "2º semestre de 2024",
        "formato": "PDF",
        "url": "https://bkr.emnuvens.com.br/BKR/article/download/384/231",
        "tese": "A autora diz que a justificativa da PEC cita outros países sem estudos que a sustentem e ignora como o BC e o Tesouro funcionam juntos no Brasil. Contesta a tese de falta de dinheiro: os gastos administrativos do BC subiram 4,5% em 2023. Contesta também a ideia de debandada de servidores: das 911 saídas entre 2016 e 2023, 615 foram aposentadorias ou mortes e só 296 foram saídas voluntárias. Conclui que a PEC não é um avanço institucional e que o país precisaria de uma reforma monetária mais ampla.",
        "numero": {
          "valor": "296 de 911",
          "legenda": "saídas de servidores do BC entre 2016 e 2023 foram voluntárias; o resto foram aposentadorias e mortes"
        },
        "premissas": [
          "O BC é parte do Estado e suas receitas pertencem à União."
        ],
        "pergunte": [
          "O artigo analisa a versão de 2023, que transformava o BC em empresa pública. As críticas valem para o texto aprovado em 2026?"
        ]
      },
      {
        "id": "transforma-unicamp-nt22-2026",
        "posicao": "contrario",
        "instituicao": "Transforma (Unicamp) com a Fundação Friedrich Ebert",
        "natureza": "Centro de pesquisa ligado ao Instituto de Economia da Unicamp que se define como think tank de esquerda",
        "tipo": "Nota técnica",
        "titulo": "Autonomia financeira do Banco Central: o que propõe a PEC 65/2023 e por que ela ameaça a regulação prudencial e a dívida pública da União",
        "autores": "Pedro Paulo Zahluth Bastos (Unicamp)",
        "data": "05/2026",
        "formato": "PDF",
        "url": "https://transformaeconomia.org/wp-content/uploads/2026/05/NT22-PT-2026.pdf",
        "tese": "Entre 2017 e 2025, a senhoriagem rendeu em média R$ 23,4 bilhões por ano, cerca de cinco vezes os R$ 4,8 bilhões que o BC gastou. Hoje essa diferença abate a dívida da União. Se o BC ficar com ela, a dívida bruta seria cerca de R$ 167 bilhões maior no período, e o alívio no resultado primário seria só de uns R$ 4 bilhões por ano. A nota diz ainda que nenhum grande banco central reúne todas as regras da PEC e que falta de pessoal pode ser resolvida com o Orçamento atual.",
        "numero": {
          "valor": "R$ 167 bilhões",
          "legenda": "a mais de dívida bruta entre 2017 e 2025 se a senhoriagem tivesse ficado com o BC, segundo a nota"
        },
        "premissas": [
          "A senhoriagem é receita soberana do Estado e deve servir para reduzir a dívida."
        ],
        "pergunte": [
          "A senhoriagem foi negativa em 2021, 2023 e 2025. Como o BC pagaria suas contas nesses anos, em qualquer modelo?"
        ]
      },
      {
        "id": "manifesto-economistas-pec65-2026",
        "posicao": "contrario",
        "instituicao": "Economistas da FGV, Unicamp, USP, UFRJ e outras universidades",
        "natureza": "Manifesto de economistas de linha desenvolvimentista e heterodoxa, entre eles Bresser-Pereira e Belluzzo",
        "tipo": "Manifesto",
        "titulo": "PEC no Senado facilita cooptação do Banco Central, dizem economistas",
        "autores": "Luiz Carlos Bresser-Pereira, Luiz Gonzaga Belluzzo, Élida Graziane, Leda Paulani, Lena Lavinas e outros (relato da Agência Brasil)",
        "data": "06/06/2026",
        "formato": "Página",
        "url": "https://www.folhape.com.br/economia/pec-no-senado-facilita-cooptacao-do-banco-central-dizem-economistas/492267/",
        "tese": "O manifesto diz que a PEC cria uma independência seletiva: tira o BC do controle democrático, ao retirar seu orçamento da lei orçamentária e limitar o TCU, mas o deixa aberto ao mercado. Como a senhoriagem depende dos juros, o BC teria incentivo para manter juros altos. O banco poderia virar um regulador capturado, que fiscaliza os bancos que indiretamente pagam suas contas. Os autores dizem que nenhum grande banco central combina essa mistura de regras.",
        "numero": {
          "valor": "5 vezes",
          "legenda": "a senhoriagem é cerca de cinco vezes o orçamento do BC, segundo o manifesto"
        },
        "premissas": [
          "Menos controle do Congresso significa mais espaço para a influência do setor financeiro."
        ],
        "pergunte": [
          "O BC define os juros pela meta de inflação. Na prática, o ganho com senhoriagem pesaria nessa decisão?"
        ]
      }
    ],
    "videos": [
      {
        "id": "QPxVMHAROOw",
        "titulo": "PEC 65 e a autonomia financeira do Banco Central",
        "canal": "Lupa Econômica",
        "duracao": "7:22",
        "nota": "Explica o que muda se o BC deixar de depender do Orçamento."
      },
      {
        "id": "XyBU2qR0dKU",
        "titulo": "Galípolo pede autonomia financeira para reforçar papel do BC",
        "canal": "CNN Brasil",
        "duracao": "6:23",
        "nota": "O presidente do BC defende a proposta."
      },
      {
        "id": "SZ7d4ljE3XI",
        "titulo": "Associação dos Analistas do Banco Central apoia PEC da autonomia",
        "canal": "SBT News",
        "duracao": "10:54",
        "nota": "Por que parte dos servidores do BC quer a mudança."
      },
      {
        "id": "1T1XEWgy-YA",
        "titulo": "Sinal rejeita PEC da autonomia financeira",
        "canal": "Conecta FM",
        "duracao": "1:15",
        "nota": "O sindicato dos servidores do BC explica por que é contra."
      },
      {
        "id": "7T3bpiX9_aM",
        "titulo": "PEC pretende ampliar autonomia do Banco Central",
        "canal": "Band Jornalismo",
        "duracao": "8:52",
        "nota": "Reportagem com o andamento da proposta no Senado."
      },
      {
        "id": "DrPLFq0pfNE",
        "titulo": "Lula x Banco Central: críticas do presidente e os efeitos na economia",
        "canal": "Cortes do Flow",
        "duracao": "5:50",
        "nota": "O conflito entre governo e BC que alimenta o debate."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/autonomia-banco-central.jpg",
      "autor": "Arquivo/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br/",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Arquivo_da_Ag%C3%AAncia_Brasil_-_Bras%C3%ADlia_01_(cropped).jpg",
      "legenda": "Sede do Banco Central, em Brasília, ao lado do Eixo Monumental.",
      "alt": "Edifício escuro de duas torres do Banco Central, com avenidas de Brasília ao fundo",
      "posicao": "50% 40%"
    }
  },
  {
    "id": "licenciamento-ambiental",
    "titulo": "Nova lei do licenciamento ambiental",
    "categoria": "ambiente",
    "tags": [
      "licenciamento ambiental",
      "lei 15.190",
      "pl 2159",
      "lac",
      "licença ambiental especial",
      "autodeclaração",
      "vetos",
      "stf",
      "ibama",
      "meio ambiente"
    ],
    "pergunta": "A nova Lei Geral do Licenciamento Ambiental foi um avanço para o país?",
    "resumo": "A Lei 15.190/2025 está em vigor desde fevereiro de 2026, depois que o Congresso derrubou 52 dos 63 vetos do presidente Lula. Três ações no STF pedem que partes dela sejam anuladas, e o julgamento foi adiado sem nova data.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor da nova lei",
      "contrario": "Contra a nova lei"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Licenciamento ambiental é a autorização que obras e atividades que podem poluir ou degradar precisam ter antes de sair do papel, como estradas, linhas de energia, fábricas e mineração. Até 2025, o Brasil não tinha uma lei nacional sobre o tema. As regras vinham sobretudo de resoluções do Conama de 1986 e 1997 e de normas diferentes em cada estado.",
        "O projeto de lei geral tramitou por mais de 20 anos. Começou em 2004 na Câmara, passou a se chamar PL 2.159/2021 no Senado e foi aprovado em julho de 2025. O presidente Lula sancionou a Lei 15.190 em 8 de agosto de 2025 com 63 vetos. Os pontos mais polêmicos eram a Licença por Adesão e Compromisso (LAC), em que o próprio empreendedor declara cumprir as regras, e dispensas de licença para parte da agropecuária. O governo também editou uma medida provisória que virou a Lei 15.300/2025, da Licença Ambiental Especial (LAE), um rito mais rápido para obras consideradas estratégicas.",
        "Em 27 de novembro de 2025, uma semana após a COP30, o Congresso derrubou 52 vetos, entre eles o que impedia a LAC para empreendimentos de médio potencial poluidor. A lei entrou em vigor em 4 de fevereiro de 2026. PV, Rede com a Anamma, e PSOL com a Apib entraram com três ações no STF (ADIs 7913, 7916 e 7919). A CBIC, da construção civil, pediu o contrário: que a lei seja declarada constitucional (ADC 102). O relator é Alexandre de Moraes. Em maio de 2026, a PGR opinou pela procedência parcial das ações. O julgamento marcado para 12 de agosto de 2026 foi adiado, e até agora não há nova data.",
        "Quem defende a lei diz que ela troca um sistema lento, confuso e cheio de brigas na Justiça por regras nacionais claras, com prazos e procedimentos proporcionais ao risco de cada obra. Quem critica diz que a autodeclaração, as dispensas e a LAE reduzem o controle prévio, deixam povos indígenas e quilombolas de fora e podem aumentar a insegurança jurídica e o risco de desastres."
      ],
      "fatos": [
        {
          "rotulo": "Vetos derrubados pelo Congresso",
          "valor": "52 de 63"
        },
        {
          "rotulo": "Tempo de tramitação do projeto",
          "valor": "Mais de 20 anos (2004 a 2025)"
        },
        {
          "rotulo": "Tempo médio de uma licença de infraestrutura (Acende Brasil)",
          "valor": "Cerca de 40 meses"
        },
        {
          "rotulo": "Ações no STF sobre a lei",
          "valor": "3 ADIs contra e 1 ADC a favor"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Regras nacionais",
        "favoravel": "Antes, o licenciamento dependia de resoluções do Conama de 1986 a 1997. A lei cria prazos, tipos de licença padronizados e listas claras de dispensa, o que reduz interpretações caso a caso. (A2)",
        "contrario": "A lei acelera procedimentos, mas não fixa critérios comuns e tende a aumentar a diferença entre estados. Em Minas, o limite para dispensar licença rural já subiu de 100 para 1.000 hectares. (B1)",
        "fonte_favoravel": "acende-uhlig-seguranca",
        "fonte_contrario": "usp-ufop-polemico-limitado"
      },
      {
        "tema": "Autodeclaração",
        "favoravel": "Simplificar a licença de atividades de baixo impacto libera técnicos para obras maiores. O Ibama tinha só cerca de 106 servidores por estado em 2020, e simplificar não é o mesmo que retroceder. (A1)",
        "contrario": "A LAC passa ao próprio empreendedor a responsabilidade inicial pela análise de risco. Para os autores, isso fere a proibição de retrocesso ambiental do artigo 225 da Constituição. (B2)",
        "fonte_favoravel": "ipea-td-2808",
        "fonte_contrario": "fgv-resmpu-marco-legal"
      },
      {
        "tema": "Segurança jurídica",
        "favoravel": "Regras fragmentadas fazem licenças serem suspensas ou anuladas na Justiça. Uma lei única destrava obras como as de saneamento, que precisam de R$ 667 bilhões até 2040. (A3)",
        "contrario": "Vários artigos contrariam decisões do STF, como ouvir a Funai só em terras indígenas homologadas. Isso convida a novas ações judiciais, e não a menos. (B3)",
        "fonte_favoravel": "cbic-carta-sancao",
        "fonte_contrario": "mpf-nt-vetos"
      }
    ],
    "glossario": [
      {
        "termo": "Licenciamento ambiental",
        "definicao": "Processo em que um órgão ambiental avalia os impactos de uma obra ou atividade e decide se ela pode ser feita e com quais condições."
      },
      {
        "termo": "LAC (Licença por Adesão e Compromisso)",
        "definicao": "Licença emitida de forma quase automática, com base numa declaração do próprio empreendedor de que cumpre as regras. A análise do órgão vem depois, por amostragem."
      },
      {
        "termo": "LAE (Licença Ambiental Especial)",
        "definicao": "Rito criado pela Lei 15.300/2025 para obras que o governo considera estratégicas, com prioridade e prazo máximo de um ano para a decisão."
      },
      {
        "termo": "EIA/Rima",
        "definicao": "Estudo de Impacto Ambiental e seu relatório resumido. É o estudo mais completo, exigido para obras de grande impacto."
      },
      {
        "termo": "Derrubada de veto",
        "definicao": "Quando o Congresso, por maioria absoluta de deputados e senadores, restaura trechos de uma lei que o presidente tinha vetado."
      }
    ],
    "incertezas": [
      "O que o STF vai decidir sobre a LAC, as dispensas e a LAE, e quando. Estados que já aplicam as novas regras podem ter de rever processos.",
      "Se as licenças vão de fato sair mais rápido. A demora também vem da falta de servidores e de sistemas nos órgãos ambientais, que a lei não resolve sozinha.",
      "Quanto a autodeclaração vai aumentar ou não os danos ambientais. Isso depende da fiscalização depois da licença, que ainda não tem dados."
    ],
    "fontes": [
      {
        "titulo": "Agência Brasil (Diario de Pernambuco): Lei do licenciamento ambiental entra em vigor com ações no STF (04/02/2026)",
        "url": "https://www.diariodepernambuco.com.br/brasil/2026/02/11706860-lei-do-licenciamento-ambiental-entra-em-vigor-com-acoes-no-stf.html"
      },
      {
        "titulo": "Agência Pública: Congresso derruba vetos de Lula sobre licenciamento ambiental uma semana após COP30 (27/11/2025)",
        "url": "https://apublica.org/2025/11/congresso-derruba-56-vetos-de-licenciamento-ambiental-apos-cop30/"
      },
      {
        "titulo": "Rádio Senado: Lei sobre licenciamento ambiental tem julgamento adiado pelo STF (26/08/2026)",
        "url": "https://www12.senado.leg.br/radio/1/noticia/2026/08/26/lei-sobre-licenciamento-ambiental-tem-julgamento-adiado-pelo-stf"
      }
    ],
    "leituras": [
      {
        "id": "ipea-td-2808",
        "posicao": "favoravel",
        "instituicao": "Ipea",
        "natureza": "Instituto público de pesquisa ligado ao governo federal",
        "tipo": "Texto para Discussão",
        "titulo": "O licenciamento como instrumento de regulação ambiental: desafios, propostas e perspectivas",
        "autores": "Luiz Felipe Monteiro Seixas e Nilo Luiz Saccaro Junior",
        "data": "11/2022",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstreams/87341ce5-0578-4ee0-bc96-5b81555470be/download",
        "tese": "Defende que o licenciamento é um meio para controlar a poluição, não um fim, e por isso precisa ser otimizado. Propõe simplificar a licença de atividades de baixo impacto e liberar servidores para obras maiores e para a fiscalização. Considera o PL 2.159/2021 a proposta mais avançada, a ser aprovada com ajustes pontuais. Rejeita a ideia de que simplificar é sempre retroceder.",
        "numero": {
          "valor": "2.861",
          "legenda": "servidores tinha o Ibama em 2020, cerca de 106 por estado, contra uma média de 473 nos órgãos estaduais"
        },
        "premissas": [
          "A fiscalização depois da licença continua funcionando.",
          "Separar obras de baixo e alto impacto com critérios técnicos é possível."
        ],
        "pergunte": [
          "O texto é de 2022 e pede ajustes. A lei aprovada, com os vetos derrubados, fez esses ajustes?"
        ]
      },
      {
        "id": "acende-uhlig-seguranca",
        "posicao": "favoravel",
        "instituicao": "Instituto Acende Brasil",
        "natureza": "Centro de estudos privado do setor elétrico, financiado por empresas do setor",
        "tipo": "Artigo de opinião (Valor Econômico)",
        "titulo": "Segurança jurídica no licenciamento ambiental",
        "autores": "Alexandre Uhlig (diretor de Sustentabilidade do Instituto Acende Brasil)",
        "data": "09/2025",
        "formato": "PDF",
        "url": "https://gesel.ie.ufrj.br/wp-content/uploads/2025/09/Artigo-Alexandre-Uhlig-09.09.2025.pdf",
        "tese": "Afirma que a lei dá base legal a um sistema que dependia de resoluções do Conama de 1986 a 1997 e traz previsibilidade. Destaca prazos para os órgãos responderem, padrões nacionais de licenças e listas claras de atividades dispensadas ou simplificadas. Diz que a lei não cria isenção geral, mas ritos proporcionais ao impacto. Ainda vê falhas e defende ajustes, como limitar a LAC a projetos de baixo impacto.",
        "numero": {
          "valor": "40 meses",
          "legenda": "levava, em média, uma licença para projetos de infraestrutura, segundo estudo do Acende Brasil"
        },
        "premissas": [
          "A demora no licenciamento vem mais de regras confusas do que da falta de estrutura dos órgãos."
        ],
        "pergunte": [
          "O próprio autor queria limitar a LAC a baixo impacto. Com os vetos derrubados, a LAC vale para médio impacto. Isso muda a avaliação?"
        ]
      },
      {
        "id": "cbic-carta-sancao",
        "posicao": "favoravel",
        "instituicao": "CBIC (Câmara Brasileira da Indústria da Construção)",
        "natureza": "Entidade privada que representa empresas da construção; autora da ADC 102 no STF",
        "tipo": "Carta institucional",
        "titulo": "Manifestação de apoio à sanção do Projeto de Lei nº 2.159/2021 (Lei Geral do Licenciamento Ambiental)",
        "autores": "Renato de Sousa Correia (presidente da CBIC)",
        "data": "25/07/2025",
        "formato": "PDF",
        "url": "https://cbic.org.br/wp-content/uploads/2025/07/car1182025-pr-manifestacao-de-apoio-a-sancao-do-projeto-de-lei-no-21592021-lei-gera-1.pdf",
        "tese": "Pede a sanção integral do projeto. Argumenta que regras fragmentadas geram insegurança jurídica, com licenças suspensas ou anuladas na Justiça. Diz que a LAC é mais rápida para atividades de risco conhecido e que a lei simplifica obras de saneamento e ampliações em faixas já ocupadas por estradas e linhas de energia. Afirma que as compensações passam a ser proporcionais aos impactos de cada obra.",
        "numero": {
          "valor": "R$ 667 bilhões",
          "legenda": "de investimento estimado em saneamento até 2040 para universalizar o serviço, que a carta diz depender de licenças mais ágeis"
        },
        "premissas": [
          "Licença mais rápida destrava investimentos sem aumentar os danos ambientais."
        ],
        "pergunte": [
          "A carta é de um setor que ganha com licenças mais rápidas. Que dados mostram que a proteção ambiental não piora?"
        ]
      },
      {
        "id": "usp-ufop-polemico-limitado",
        "posicao": "contrario",
        "instituicao": "USP e UFOP",
        "natureza": "Universidades públicas; parecer técnico de pesquisadores de avaliação de impacto ambiental",
        "tipo": "Parecer técnico",
        "titulo": "Polêmico e limitado: o projeto da Lei Geral do Licenciamento Ambiental",
        "autores": "Luis E. Sánchez (USP) e Alberto Fonseca (UFOP)",
        "data": "08/2025",
        "formato": "PDF",
        "url": "https://ocean.correiosabia.com.br/content/files/2025/11/Polemico-Limitado-Parecer-Tecnico-PL2159.pdf",
        "tese": "Conclui que o projeto é profundamente limitado e uma oportunidade perdida. Ele foca em acelerar procedimentos, mas não harmoniza critérios entre estados e municípios, como uma lei geral deveria, e tende a aumentar a fragmentação. A LAC, as dispensas e a menor participação de órgãos como Funai e ICMBio podem elevar a insegurança jurídica e a degradação. O texto ignora avaliação ambiental estratégica, impactos cumulativos e mudança do clima.",
        "numero": {
          "valor": "100 → 1.000 ha",
          "legenda": "subiu o limite para dispensar licença de agropecuária e silvicultura em Minas Gerais entre 2004 e 2025, exemplo de competição entre estados"
        },
        "premissas": [
          "Sem critérios nacionais, estados afrouxam regras para atrair investimentos."
        ],
        "pergunte": [
          "Se o sistema antigo já era lento e confuso, qual seria a alternativa concreta à lei aprovada?"
        ]
      },
      {
        "id": "fgv-resmpu-marco-legal",
        "posicao": "contrario",
        "instituicao": "FGV (com MPSP e ICLEI)",
        "natureza": "Artigo científico de pesquisadores da FGV, do Ministério Público de SP e do ICLEI, na revista da Escola Superior do MPU",
        "tipo": "Artigo científico",
        "titulo": "O novo marco legal do licenciamento ambiental no Brasil: uma análise crítica da gênese da Lei n. 15.190/2025 e suas implicações para a governança ambiental",
        "autores": "Florenci Cassab Milani, Lorena Bulhões, Ana Júlia Dias Santiago, Thais Scharfenberg e André Pereira de Carvalho",
        "data": "03/2026",
        "formato": "PDF",
        "url": "https://escola.mpu.mp.br/publicacoescientificas/index.php/revista2/article/download/879/699/3066",
        "tese": "Analisa a tramitação e conclui que venceu a tese da rapidez sobre a precaução. A LAC transfere ao empreendedor a responsabilidade inicial pela análise de risco, e a dispensa para a agropecuária com base só no CAR não mede impactos sobre água e biodiversidade. Para os autores, a lei viola o princípio da proibição de retrocesso ambiental do artigo 225 da Constituição e gera insegurança jurídica.",
        "numero": {
          "valor": "52 de 63",
          "legenda": "vetos presidenciais foram derrubados pelo Congresso, restaurando a visão original do projeto"
        },
        "premissas": [
          "Um nível de proteção ambiental já alcançado não pode ser reduzido sem compensação."
        ],
        "pergunte": [
          "O artigo se apoia bastante em fontes de ONGs ambientalistas. Que dados de campo mostram aumento de dano onde a LAC já existia nos estados?"
        ]
      },
      {
        "id": "mpf-nt-vetos",
        "posicao": "contrario",
        "instituicao": "Ministério Público Federal (4ª e 6ª CCR e PFDC)",
        "natureza": "Órgão público independente que fiscaliza o cumprimento da lei e defende direitos coletivos",
        "tipo": "Nota técnica",
        "titulo": "Nota Técnica Conjunta 4ª CCR, 6ª CCR e PFDC: sugestão de vetos ao Projeto de Lei n.º 2.159/2021 (Lei Geral do Licenciamento Ambiental)",
        "autores": "Luiza Cristina Fonseca Frischeisen, Nicolao Dino de Castro e Costa Neto e Eliana Peres Torelly de Carvalho",
        "data": "29/07/2025",
        "formato": "PDF",
        "url": "https://www.mpf.mp.br/atuacao/ccr4/coordenacao/notas-tecnicas/pgr-00276370-2025-1.pdf",
        "tese": "Pede o veto de dezenas de artigos. Chama a LAC de autolicenciamento e diz que o STF já limitou licenças simplificadas a obras de pequeno impacto. Critica a regra que só ouve Funai e Fundação Palmares em terras indígenas e quilombolas já homologadas, contra decisões do STF. Aponta que a licença corretiva extingue a punição de quem operou sem licença, o que incentiva a ilegalidade.",
        "premissas": [
          "Decisões anteriores do STF sobre leis estaduais valem também para a lei federal."
        ],
        "pergunte": [
          "A nota foi escrita antes dos vetos e da derrubada. Quais desses pontos ainda estão na lei em vigor?"
        ]
      }
    ],
    "videos": [
      {
        "id": "kNXqbqLmQOQ",
        "titulo": "Análise: o que muda na lei de Licenciamento Ambiental",
        "canal": "CNN Brasil",
        "duracao": "3:46",
        "nota": "Resumo das principais mudanças da nova lei."
      },
      {
        "id": "xcSb7-xXR5k",
        "titulo": "Entenda o que é a Licença por Adesão e Compromisso",
        "canal": "VIVA de Licenciamento Ambiental",
        "duracao": "6:05",
        "nota": "Como funciona a licença autodeclarada, ponto central da polêmica."
      },
      {
        "id": "CdLfcAiGmtk",
        "titulo": "LAC: a nova licença vai acelerar obras no Brasil",
        "canal": "Sienge",
        "duracao": "6:25",
        "nota": "A visão do setor de construção, que defende a lei."
      },
      {
        "id": "wSl_taK6zbY",
        "titulo": "Congresso derruba vetos à Lei de Licenciamento Ambiental",
        "canal": "CNN Brasil",
        "duracao": "2:49",
        "nota": "O que voltou para a lei depois da derrubada dos vetos."
      },
      {
        "id": "fSAWe5NmP9A",
        "titulo": "Marina Silva critica vetos derrubados na Lei do Licenciamento",
        "canal": "Itatiaia",
        "duracao": "2:59",
        "nota": "A ministra do Meio Ambiente explica suas objeções."
      },
      {
        "id": "wmwTUZ3hBjY",
        "titulo": "Governo pode recorrer à Justiça contra derrubada de vetos",
        "canal": "Canal Rural",
        "duracao": "7:06",
        "nota": "O caminho até o STF, contado por um canal do agro."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/licenciamento-ambiental.jpg",
      "autor": "Bruno Batista/Vice-Presidência da República",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:09_09_2021_Visita_%C3%A0_Usina_Hidrel%C3%A9trica_Belo_Monte_(51441660737).jpg",
      "legenda": "Usina Hidrelétrica de Belo Monte, no rio Xingu, em Altamira (PA), em 2021.",
      "alt": "Vista aérea da barragem de uma hidrelétrica sobre um rio largo, cercado de vegetação",
      "posicao": "50% 55%"
    }
  },
  {
    "id": "desoneracao-folha",
    "titulo": "Desoneração da folha de pagamento",
    "categoria": "trabalho",
    "tags": [
      "desoneração da folha",
      "reoneração",
      "17 setores",
      "contribuição previdenciária",
      "CPRB",
      "emprego formal",
      "renúncia fiscal",
      "lei 14.973",
      "encargos trabalhistas",
      "INSS patronal"
    ],
    "pergunta": "A desoneração da folha de pagamento dos 17 setores deve continuar?",
    "resumo": "Pela Lei 14.973/2024, os 17 setores beneficiados voltam aos poucos a pagar a contribuição de 20% sobre a folha: em 2026 pagam 10% sobre a folha mais uma parte menor sobre o faturamento, e em 2028 o benefício acaba. O Ministério da Fazenda estimou o custo da medida em R$ 15,8 bilhões em 2024, e o debate é se ela protege empregos o bastante para valer esse preço.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de manter a desoneração",
      "contrario": "Contra manter a desoneração"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Toda empresa que contrata com carteira assinada paga ao INSS uma contribuição de 20% sobre os salários, a chamada contribuição patronal. A desoneração da folha permite que alguns setores troquem essa cobrança por uma alíquota sobre o faturamento, de 1% a 4,5%. Para empresas com muitos funcionários, isso costuma sair mais barato. A diferença que deixa de ser arrecadada é coberta pelo Tesouro.",
        "A medida foi criada em 2011, no governo Dilma (Lei 12.546), como algo temporário para alguns setores, como tecnologia, têxteis e calçados. Chegou a valer para 56 setores em 2015. Depois foi reduzida e, desde 2018, ficou restrita a 17 setores, entre eles construção civil, transporte, comunicação, call center, tecnologia da informação e confecções. Foi prorrogada várias vezes pelo Congresso, muitas vezes contra a vontade do governo do momento.",
        "Em 2023, o Congresso prorrogou o benefício até 2027 e derrubou o veto do presidente Lula. O governo levou o caso ao STF, que exigiu uma fonte de compensação. O acordo virou a Lei 14.973, de setembro de 2024, que cria uma transição: em 2025 as empresas pagaram 5% sobre a folha, em 2026 pagam 10%, em 2027 pagarão 15% e, em 2028, voltam aos 20% cheios. Quem fica na transição precisa manter pelo menos 75% da média de empregados do ano anterior.",
        "Quem defende manter o benefício diz que esses setores usam muita mão de obra e que cobrar sobre a folha encarece a contratação formal e empurra trabalhadores para a informalidade. Quem defende o fim diz que os estudos mais rigorosos encontram pouco ou nenhum efeito sobre o emprego, que o custo por vaga é alto e que, se o objetivo é baratear o emprego formal, seria melhor reduzir o encargo para todos os salários mais baixos, e não para setores escolhidos."
      ],
      "fatos": [
        {
          "rotulo": "Contribuição sobre a folha em 2026 (setores na transição)",
          "valor": "10% (20% a partir de 2028)"
        },
        {
          "rotulo": "Custo estimado em 2024 (Ministério da Fazenda)",
          "valor": "R$ 15,8 bilhões"
        },
        {
          "rotulo": "Empregos formais nos setores desonerados (2022, Brasscom)",
          "valor": "8,9 milhões"
        },
        {
          "rotulo": "Alíquota sobre o faturamento antes da transição",
          "valor": "1% a 4,5%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Efeito no emprego",
        "favoravel": "Comparando setores parecidos, um estudo publicado na revista da USP encontrou efeito positivo de 1,12 ponto percentual no número de vínculos de emprego e de 2,44 pontos nas horas trabalhadas nos setores desonerados. (A1)",
        "contrario": "Um estudo com dados da RAIS de 2009 a 2021 testou sete formas de comparação e não achou efeito significativo da desoneração sobre o emprego, nem queda de vagas quando parte dos setores voltou a pagar sobre a folha em 2018. (B1)",
        "fonte_favoravel": "freitas-paes-desoneracao-emprego",
        "fonte_contrario": "albernaz-carvalho-idp-reoneracao"
      },
      {
        "tema": "Quem mais emprega",
        "favoravel": "Entre 2017 e 2022, o emprego nos setores que seguiram desonerados cresceu 15,5%, contra 6,8% nos 13 setores que voltaram a pagar sobre a folha em 2018. (A3)",
        "contrario": "Entre 2012 e 2022, os empregados com carteira nos setores desonerados caíram 13% (960 mil), enquanto nos demais setores privados subiram 6,3%. Eles não estão entre os que mais empregam. (B2)",
        "fonte_favoravel": "brasscom-desoneracao-reoneracao",
        "fonte_contrario": "ipea-radar-setores-que-mais-desempregam"
      },
      {
        "tema": "Custo e desenho",
        "favoravel": "Nas pequenas empresas dos primeiros setores desonerados, o emprego cresceu cerca de 14% a mais que no grupo de comparação, o que indicaria uns 320 mil empregos a mais. (A2)",
        "contrario": "A medida custou cerca de R$ 15,8 bilhões em 2024, sem metas nem prazo. A Fazenda propõe trocar o benefício por setor por um desconto no primeiro salário mínimo de cada trabalhador. (B3)",
        "fonte_favoravel": "scherer-ipea-desoneracao-emprego",
        "fonte_contrario": "fazenda-spe-desoneracao-2024"
      }
    ],
    "glossario": [
      {
        "termo": "Contribuição patronal",
        "definicao": "Valor que a empresa paga ao INSS sobre os salários dos empregados. A regra geral é 20% da folha."
      },
      {
        "termo": "Desoneração da folha",
        "definicao": "Troca da contribuição de 20% sobre a folha por uma alíquota menor sobre o faturamento, válida só para alguns setores."
      },
      {
        "termo": "CPRB",
        "definicao": "Contribuição Previdenciária sobre a Receita Bruta. É a cobrança sobre o faturamento que substitui a contribuição sobre a folha."
      },
      {
        "termo": "Reoneração",
        "definicao": "Volta da cobrança cheia sobre a folha. A Lei 14.973/2024 faz isso de forma gradual entre 2025 e 2028."
      },
      {
        "termo": "Renúncia fiscal",
        "definicao": "Dinheiro que o governo deixa de arrecadar por causa de um benefício tributário. Também é chamada de gasto tributário."
      }
    ],
    "incertezas": [
      "Qual o efeito real da desoneração sobre o emprego. Estudos com métodos parecidos chegam a resultados diferentes, de um ganho pequeno a nenhum efeito.",
      "O que acontece com as vagas quando a cobrança volta. As empresas podem demitir, repassar o custo aos preços ou contratar mais como pessoa jurídica.",
      "Se um corte de encargos para todos os salários baixos, em vez de para setores escolhidos, geraria mais empregos pelo mesmo custo."
    ],
    "fontes": [
      {
        "titulo": "COAD: Publicada Lei que trata da reoneração gradual da folha de pagamento (17/09/2024)",
        "url": "https://www.coad.com.br/home/noticias-detalhe/128000/publicada-lei-que-trata-da-reoneracao-gradual-da-folha-de-pagamento"
      },
      {
        "titulo": "Jovem Pan: Durigan diz que custo de desoneração da folha em 2025 pode chegar a R$ 35 bilhões (02/09/2024)",
        "url": "https://jovempan.com.br/economia/macroeconomia/durigan-diz-que-custo-de-desoneracao-da-folha-em-2025-pode-chegar-a-r-35-bilhoes/"
      }
    ],
    "leituras": [
      {
        "id": "freitas-paes-desoneracao-emprego",
        "posicao": "favoravel",
        "instituicao": "Estudos Econômicos (USP)",
        "natureza": "Revista científica da FEA-USP, com revisão por pares; autores da Universidade Federal de Rondonópolis e da UFPE",
        "tipo": "Artigo científico",
        "titulo": "Impactos da desoneração da folha de pagamentos sobre o emprego formal e a competitividade industrial: uma aproximação pelo método de Difference in Differences com Propensity Score Matching",
        "autores": "Carlos Eduardo de Freitas e Nélson Leitão Paes",
        "data": "30/06/2022",
        "formato": "Página",
        "url": "https://revistas.usp.br/ee/article/view/183248",
        "tese": "Compara setores desonerados e não desonerados com dados da RAIS e da CNI. Encontra efeito positivo médio de 1,12 ponto percentual no número de vínculos de emprego e de 2,44 pontos nas horas trabalhadas. O efeito foi maior em 2012, quando a lei começou, e caiu para cerca de 0,6 ponto em 2018. Também aponta ganho de competitividade da indústria em 2015 e 2016.",
        "numero": {
          "valor": "+1,12 p.p.",
          "legenda": "de efeito médio no número de vínculos de emprego nos setores desonerados"
        },
        "premissas": [
          "Setores não desonerados parecidos são um bom retrato do que teria acontecido sem a medida."
        ],
        "pergunte": [
          "Se o efeito caiu de 1,5 para 0,6 ponto ao longo dos anos, ele ainda justifica o custo hoje?"
        ]
      },
      {
        "id": "scherer-ipea-desoneracao-emprego",
        "posicao": "favoravel",
        "instituicao": "Ipea (autor do Dieese)",
        "natureza": "Nota técnica publicada pelo Ipea, órgão público de pesquisa; autor economista do Dieese, departamento de estudos ligado aos sindicatos",
        "tipo": "Nota técnica",
        "titulo": "Desoneração da folha de pagamentos: efeitos no emprego e nos salários",
        "autores": "Clóvis Scherer",
        "data": "10/2015",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2024/05/efeito-desoneracao-ipea.pdf",
        "tese": "Publicada no boletim Mercado de Trabalho nº 59, compara empresas pequenas dos primeiros setores desonerados (têxtil, confecção, calçados, TI e call center) com empresas do Simples entre 2011 e 2012. As empresas beneficiadas aumentaram o emprego em cerca de 14% e as horas trabalhadas em cerca de 8%. Aplicado a 2,28 milhões de vagas, o resultado indicaria uns 320 mil empregos a mais, número que o autor apresenta só como ilustração.",
        "numero": {
          "valor": "~14%",
          "legenda": "a mais de emprego nas pequenas empresas beneficiadas, frente ao grupo de comparação"
        },
        "premissas": [
          "Empresas do Simples, que já não pagavam a contribuição sobre a folha, são um bom grupo de comparação."
        ],
        "pergunte": [
          "O estudo olha só o primeiro ano e só empresas com menos de 50 empregados. O efeito vale para as grandes e para os anos seguintes?"
        ]
      },
      {
        "id": "brasscom-desoneracao-reoneracao",
        "posicao": "favoravel",
        "instituicao": "Brasscom",
        "natureza": "Associação privada das empresas de tecnologia da informação, um dos setores beneficiados; defende a desoneração",
        "tipo": "Relatório",
        "titulo": "Desoneração e Reoneração da Folha (BRI2-2023-006, Relatório de Inteligência e Informação)",
        "autores": "Brasscom",
        "data": "03/2023",
        "formato": "PDF",
        "url": "https://brasscom.org.br/wp-content/uploads/2023/03/BRI2-2023-006-Desoneracao-x-Reoneracao-da-Folha-2022-v22.pdf",
        "tese": "Com dados da RAIS e do Caged, mostra que o emprego nos setores que continuaram desonerados cresceu 15,5% entre 2017 e 2022, contra 6,8% nos 13 setores que voltaram a pagar sobre a folha em 2018. Simula que, se os setores desonerados tivessem tido o mesmo desempenho dos reonerados, teriam sido 1,6 milhão de empregos a menos até 2022, e o salário médio cairia de R$ 2.430 para R$ 2.136.",
        "numero": {
          "valor": "15,5% x 6,8%",
          "legenda": "de crescimento do emprego entre 2017 e 2022 nos setores desonerados e nos reonerados"
        },
        "premissas": [
          "A diferença de crescimento entre os dois grupos se deve à desoneração, e não a outras diferenças entre os setores."
        ],
        "pergunte": [
          "Os setores que continuaram desonerados podem ter crescido por outros motivos, como a demanda por tecnologia. A comparação isola o efeito do imposto?"
        ]
      },
      {
        "id": "albernaz-carvalho-idp-reoneracao",
        "posicao": "contrario",
        "instituicao": "IDP",
        "natureza": "Instituição privada de ensino em Brasília; artigo de mestrado orientado por ex-técnico do Ipea, em revista sem ISSN que publica resultados preliminares",
        "tipo": "Artigo científico",
        "titulo": "Desoneração e Reoneração da Folha de Salários: Efeitos sobre o Emprego em Setores Beneficiados entre 2013 e 2018",
        "autores": "Leonardo Rodrigues Albernaz e Alexandre Xavier Ywata de Carvalho",
        "data": "12/12/2025",
        "formato": "Página",
        "url": "https://www.portaldeperiodicos.idp.edu.br/redea/article/view/8808",
        "tese": "Usa dados da RAIS de 2009 a 2021 e testa sete estratégias de comparação entre setores. Não encontra efeito estatisticamente significativo da desoneração de 2013 sobre o emprego formal. Também não encontra queda de emprego quando parte dos setores voltou a pagar sobre a folha, em 2018. Os resultados se mantêm por região e por tamanho de empresa.",
        "premissas": [
          "Os setores que não receberam o benefício são uma boa comparação para os que receberam."
        ],
        "pergunte": [
          "Um efeito pequeno, mas real, pode não aparecer nesse tipo de teste. Ausência de prova é prova de ausência?"
        ]
      },
      {
        "id": "ipea-radar-setores-que-mais-desempregam",
        "posicao": "contrario",
        "instituicao": "Ipea",
        "natureza": "Instituto de pesquisa do governo federal, ligado ao Ministério do Planejamento",
        "tipo": "Artigo em boletim (Radar nº 73)",
        "titulo": "Os setores que mais (des)empregam no Brasil",
        "autores": "Marcos Hecksher",
        "data": "08/2023",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/12343/6/Radar_73_Art2_setores_que_mais_desempregam_br.pdf",
        "tese": "Com dados da PNAD Contínua, testa a ideia de que os setores desonerados são os que mais empregam e conclui que não são. Entre 2012 e 2022, o número de empregados com carteira nesses setores caiu 13% (960 mil), enquanto nos demais setores privados subiu 6,3%. Só 54,9% dos trabalhadores dos setores desonerados contribuem para a Previdência, contra 63,7% na média.",
        "numero": {
          "valor": "-13%",
          "legenda": "de empregados com carteira nos setores desonerados entre 2012 e 2022"
        },
        "premissas": [
          "A comparação descritiva entre setores ajuda a avaliar quem deve receber o benefício."
        ],
        "pergunte": [
          "Sem a desoneração, a queda de emprego nesses setores poderia ter sido ainda maior?"
        ]
      },
      {
        "id": "fazenda-spe-desoneracao-2024",
        "posicao": "contrario",
        "instituicao": "Ministério da Fazenda (SPE)",
        "natureza": "Secretaria de Política Econômica do governo federal, que tentou acabar com a medida e é parte interessada no debate",
        "tipo": "Estudo econômico",
        "titulo": "Desoneração da Folha de Pagamentos: Análise setorial da política prorrogada e proposta de revisão",
        "autores": "Secretaria de Política Econômica, Ministério da Fazenda",
        "data": "26/04/2024",
        "formato": "PDF",
        "url": "https://www.gov.br/fazenda/pt-br/central-de-conteudo/publicacoes/analises-e-estudos/arquivos/2024/desoneracao_final_3-1.pdf/view",
        "tese": "Estima o custo da medida em R$ 15,8 bilhões em 2024. Mostra que, entre 2015 e 2021, o emprego formal nas atividades desoneradas caiu 0,1% ao ano, enquanto nas demais cresceu 2,1% ao ano. Diz que a política não segue boas práticas internacionais, porque não tem metas nem prazo, e propõe trocar o benefício por setor por um desconto sobre o primeiro salário mínimo de cada empregado, com fim em 2027.",
        "numero": {
          "valor": "R$ 15,8 bi",
          "legenda": "de custo estimado da desoneração em 2024"
        },
        "premissas": [
          "O dinheiro da renúncia teria uso melhor em outro desenho de política ou no ajuste das contas."
        ],
        "pergunte": [
          "O estudo vem do governo que queria acabar com o benefício. Os números se sustentam quando comparados a análises independentes?"
        ]
      }
    ],
    "videos": [
      {
        "id": "ZMzAdTbUjoY",
        "titulo": "Desoneração da folha de pagamentos: entenda os principais fatos",
        "canal": "TV Senado",
        "duracao": "1:34",
        "nota": "A história da medida em menos de dois minutos."
      },
      {
        "id": "lbgLpVw_cb4",
        "titulo": "O que é desoneração da folha de pagamento?",
        "canal": "O Tempo",
        "duracao": "5:15",
        "nota": "Explicação didática de como o imposto muda."
      },
      {
        "id": "YqENJQQcc94",
        "titulo": "Desoneração da folha: o que muda em 2026, 2027 e 2028",
        "canal": "ASTEC Contabilidade",
        "duracao": "4:05",
        "nota": "O cronograma da volta gradual da contribuição."
      },
      {
        "id": "TJlfJUcqJ3k",
        "titulo": "Desoneração da folha de pagamento e o impacto nos empregos",
        "canal": "Grupo Teixeira",
        "duracao": "6:08",
        "nota": "O argumento das empresas de que a medida segura vagas."
      },
      {
        "id": "0-EZ1VOOrF8",
        "titulo": "Desoneração da folha pode gerar prejuízo fiscal e desemprego",
        "canal": "Jovem Pan News",
        "duracao": "2:31",
        "nota": "O custo para o governo e o risco de não gerar empregos."
      },
      {
        "id": "avUGXdu41AQ",
        "titulo": "Sindicatos afirmam que desoneração é boa para a empresa e não gera emprego",
        "canal": "Rede TVT",
        "duracao": "4:10",
        "nota": "A crítica do movimento sindical."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/desoneracao-folha.jpg",
      "autor": "Manu Dias/Agecom Bahia",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Governador_visita_%C3%A0s_Instala%C3%A7%C3%B5es_da_F%C3%A1brica_da_Suzano_em_Mucuri_(4702790205).jpg",
      "legenda": "Linha de produção de uma fábrica de papel e celulose em Mucuri (BA).",
      "alt": "Interior amplo de uma fábrica, com máquinas e esteiras",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "fim-reeleicao",
    "titulo": "Fim da reeleição no Executivo",
    "categoria": "instituicoes",
    "tags": [
      "reeleição",
      "fim da reeleição",
      "pec 12/2022",
      "mandato de cinco anos",
      "eleições unificadas",
      "prefeitos",
      "presidente",
      "governadores",
      "reforma política",
      "senado"
    ],
    "pergunta": "O Brasil deve acabar com a reeleição para presidente, governadores e prefeitos?",
    "resumo": "Em 2024, 82% dos prefeitos que tentaram um segundo mandato foram reeleitos, o maior índice desde que a reeleição foi criada, em 1997. Uma PEC aprovada na CCJ do Senado em 2025 acaba com a reeleição e cria mandatos de cinco anos, mas ainda não foi votada no plenário.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de acabar com a reeleição",
      "contrario": "Contra acabar com a reeleição"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Hoje, presidente, governadores e prefeitos podem disputar um segundo mandato seguido de quatro anos. A Proposta de Emenda à Constituição 12/2022, do senador Jorge Kajuru (GO), proíbe essa recondução e aumenta os mandatos do Executivo para cinco anos.",
        "A reeleição foi criada pela Emenda Constitucional 16, de 1997, e permitiu a Fernando Henrique Cardoso disputar um segundo mandato em 1998. Desde então, Lula, Dilma e Bolsonaro também tentaram a reeleição. Nos municípios, a taxa de sucesso variou bastante: 49% dos prefeitos candidatos foram reeleitos em 2016 e 82% em 2024, segundo a Confederação Nacional de Municípios.",
        "Em 21 de maio de 2025, a CCJ do Senado aprovou um texto substitutivo do relator Marcelo Castro (MDB-PI). Ele prevê mandatos de cinco anos, fim da reeleição para prefeitos a partir de 2028 e para governadores e presidente a partir de 2030, e eleições unificadas para todos os cargos em 2034. Desde então, a PEC está pronta para o plenário, mas não foi votada. Ela precisa de 49 votos em dois turnos no Senado e depois passa pela Câmara. Em março de 2026, o senador Flávio Bolsonaro (PL-RJ) apresentou outra PEC, que acaba só com a reeleição para presidente, e transformou o tema em promessa de campanha no segundo turno contra Lula.",
        "Quem defende o fim da reeleição diz que o governante usa a máquina pública, o orçamento e as emendas parlamentares para se manter no cargo, o que desequilibra a disputa. Quem é contra diz que a reeleição é a forma de o eleitor premiar ou punir uma gestão, e que, sem ela, o governante não tem incentivo para cuidar bem das contas no fim do mandato."
      ],
      "fatos": [
        {
          "rotulo": "Prefeitos reeleitos em 2024",
          "valor": "82% (2.461 de 3.006)"
        },
        {
          "rotulo": "Prefeitos reeleitos em 2016",
          "valor": "49%"
        },
        {
          "rotulo": "Mandato proposto pela PEC 12/2022",
          "valor": "5 anos, sem reeleição"
        },
        {
          "rotulo": "Votos necessários no Senado",
          "valor": "49 de 81, em dois turnos"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Uso do orçamento",
        "favoravel": "Prefeitos que podem se reeleger gastam cerca de 3% a mais em ano eleitoral, e quem aumenta o gasto tem mais chance de vencer. (A2)",
        "contrario": "Prefeitos que tentam a reeleição têm contas mais equilibradas que os de segundo mandato, que não podem concorrer. Proibir a reeleição pode piorar as finanças locais. (B1)",
        "fonte_favoravel": "fgv-klein-ciclo-orcamentario",
        "fonte_contrario": "unb-rbe-reeleicao-fiscal"
      },
      {
        "tema": "Vantagem do cargo",
        "favoravel": "Em 2024, quanto mais emendas de saúde por habitante o município recebeu, maior a chance de reeleição do prefeito, que sobe de cerca de 70% para 80% a cada 100 unidades a mais. (A1)",
        "contrario": "Um estudo com 42 mil candidatos de 1996 a 2008 não achou vantagem para quem está no cargo: o prefeito que tenta a reeleição perde em média 4 pontos de margem. (B3)",
        "fonte_favoravel": "fiocruz-emendas-reeleicao-2024",
        "fonte_contrario": "cebrap-reeleicao-continuismo"
      },
      {
        "tema": "Qualidade da gestão",
        "favoravel": "Em mais de 12 mil eleições, o segundo mandato não trouxe ganho em educação nem em saúde. O prefeito reeleito repete o foco em obras e áreas visíveis. (A3)",
        "contrario": "O eleitor premia a boa gestão: em 2008, ir da pior para a melhor nota de gestão fiscal aumentava em cerca de 25% a chance de reeleição. (B2)",
        "fonte_favoravel": "uerj-efeitos-reeleicao-municipal",
        "fonte_contrario": "unicamp-op-bom-prefeito"
      }
    ],
    "glossario": [
      {
        "termo": "PEC",
        "definicao": "Proposta de Emenda à Constituição. Precisa de três quintos dos votos, em dois turnos, na Câmara e no Senado."
      },
      {
        "termo": "Reeleição",
        "definicao": "Possibilidade de o ocupante de um cargo disputar o mesmo cargo no mandato seguinte. No Brasil, é permitida uma vez seguida para o Executivo desde 1997."
      },
      {
        "termo": "Ciclo político orçamentário",
        "definicao": "Quando o governante aumenta gastos visíveis ou corta impostos perto da eleição para ganhar votos."
      },
      {
        "termo": "Voto retrospectivo",
        "definicao": "Quando o eleitor decide o voto olhando para o que o governante fez no mandato, premiando ou punindo a gestão."
      },
      {
        "termo": "Eleições unificadas",
        "definicao": "Eleições para todos os cargos, de vereador a presidente, no mesmo dia. Hoje há eleições a cada dois anos, alternando municipais e gerais."
      }
    ],
    "incertezas": [
      "Se os prefeitos no último mandato, sem poder concorrer de novo, cuidam pior das contas. Os estudos brasileiros chegam a conclusões diferentes.",
      "Quanto da alta taxa de reeleição de 2024 vem da vantagem do cargo, como emendas e obras, e quanto vem de gestões bem avaliadas.",
      "Se um mandato único de cinco anos é tempo suficiente para planejar e entregar políticas públicas."
    ],
    "fontes": [
      {
        "titulo": "Senado Federal: tramitação da Proposta de Emenda à Constituição nº 12, de 2022",
        "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/153068"
      },
      {
        "titulo": "Agência Brasil: Relator antecipa fim da reeleição para 2030 e CCJ adia votação (05/2025)",
        "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2025-05/relator-antecipa-fim-da-reeleicao-para-2030-e-ccj-adia-votacao"
      },
      {
        "titulo": "O Liberal: Flávio diz que fim da reeleição deve valer já em eventual mandato (08/10/2026)",
        "url": "https://www.oliberal.com/eleicoes/flavio-diz-que-fim-da-reeleicao-deve-valer-ja-em-eventual-mandato-1.1179036"
      }
    ],
    "leituras": [
      {
        "id": "fiocruz-emendas-reeleicao-2024",
        "posicao": "favoravel",
        "instituicao": "Fiocruz (ENSP) e UnB",
        "natureza": "Fundação pública de pesquisa em saúde e universidade pública; artigo na revista Cadernos de Saúde Pública",
        "tipo": "Artigo científico",
        "titulo": "Emendas parlamentares destinadas ao Sistema Único de Saúde e a reeleição de prefeitos municipais do Brasil em 2024",
        "autores": "João Gabriel Ribeiro Pessanha Leal, Luciana Dias de Lima, Frederico Bertholini Santos Rodrigues e André Schimidt da Silva",
        "data": "04/2025",
        "formato": "PDF",
        "url": "https://cadernos.ensp.fiocruz.br/ojs/index.php/csp/article/download/9921/20452/66614",
        "tese": "Analisa 2.818 municípios cujos prefeitos tentaram a reeleição em 2024. Quanto mais dinheiro de emendas parlamentares para a saúde por habitante o município recebeu, maior a chance de o prefeito ser reeleito, em todos os modelos testados. Os autores sugerem que as emendas reforçam a imagem do prefeito como quem consegue trazer recursos. Para eles, esse uso político entra em conflito com os critérios técnicos do SUS.",
        "numero": {
          "valor": "0,7 → 0,8",
          "legenda": "probabilidade prevista de reeleição a cada 100 unidades a mais de emendas de saúde por habitante"
        },
        "premissas": [
          "A associação entre emendas e reeleição reflete vantagem do cargo, e não apenas boa gestão."
        ],
        "pergunte": [
          "O estudo mostra associação, não causa. Prefeitos mais bem articulados podem atrair emendas e votos ao mesmo tempo?",
          "Acabar com a reeleição resolve o problema, ou o mais direto seria mudar as regras das emendas?"
        ]
      },
      {
        "id": "fgv-klein-ciclo-orcamentario",
        "posicao": "favoravel",
        "instituicao": "FGV (EAESP)",
        "natureza": "Fundação privada de ensino e pesquisa; artigo na Revista de Administração Pública, da FGV",
        "tipo": "Artigo científico",
        "titulo": "Reelection incentives and political budget cycle: evidence from Brazil",
        "autores": "Fabio Alvim Klein",
        "data": "04/2010",
        "formato": "Página",
        "url": "https://scielo.br/j/rap/a/vprCCc7Y5f3z8m8KY8PhJgN/abstract/?lang=en",
        "tese": "Usa dados fiscais e eleitorais de 5.406 municípios para testar se prefeitos aumentam gastos perto da eleição. Prefeitos que podem se reeleger gastam cerca de 3% a mais em ano eleitoral do que os que não podem. Entre os que de fato concorrem, a diferença chega a quase 5%. E quem aumenta o gasto na eleição tem mais chance de ser reeleito, desde que o déficit não passe do que o eleitor aceita.",
        "numero": {
          "valor": "3%",
          "legenda": "a mais de gasto em ano eleitoral entre prefeitos que podem se reeleger"
        },
        "premissas": [
          "Gasto extra em ano eleitoral é uso oportunista do orçamento, e não resposta a demandas reais."
        ],
        "pergunte": [
          "O próprio autor diz que o tamanho do efeito depende de como se definem os anos eleitorais. Quão robusto é o resultado?",
          "Os dados são anteriores a 2010. A Lei de Responsabilidade Fiscal e a fiscalização atual mudaram esse comportamento?"
        ]
      },
      {
        "id": "uerj-efeitos-reeleicao-municipal",
        "posicao": "favoravel",
        "instituicao": "UERJ (IESP)",
        "natureza": "Universidade pública estadual; Instituto de Estudos Sociais e Políticos. Pré-print SciELO, depois publicado em revista",
        "tipo": "Artigo científico",
        "titulo": "Os efeitos da reeleição sobre políticas municipais: evidências de eleições acirradas no Brasil",
        "autores": "Bruno Schaefer e Fernando Meireles",
        "data": "12/12/2025",
        "formato": "Página",
        "url": "https://preprints.scielo.org/index.php/scielo/preprint/view/14552",
        "tese": "Compara mais de 12 mil eleições municipais de 2000 a 2020, olhando cidades onde o prefeito ganhou ou perdeu por pouco. Prefeitos reeleitos mantêm o padrão de gasto do primeiro mandato, com foco em áreas visíveis como obras e assistência social. Não há ganho significativo em educação nem em saúde no segundo mandato. Os autores concluem que a reeleição é um mecanismo ambíguo: traz estabilidade, mas pode sustentar uma gestão voltada a manter o poder.",
        "numero": {
          "valor": "12.379",
          "legenda": "eleições municipais com prefeito candidato analisadas, de 2000 a 2020"
        },
        "premissas": [
          "Se a reeleição trouxesse experiência e continuidade, o segundo mandato deveria mostrar resultados melhores."
        ],
        "pergunte": [
          "O estudo também não encontra piora no segundo mandato. Isso pesa mais a favor ou contra a reeleição?",
          "Os resultados valem só para eleições acirradas. Eles se aplicam a cidades onde o prefeito ganha com folga?"
        ]
      },
      {
        "id": "unb-rbe-reeleicao-fiscal",
        "posicao": "contrario",
        "instituicao": "UnB (publicado pela FGV EPGE)",
        "natureza": "Universidade pública; artigo na Revista Brasileira de Economia, da FGV",
        "tipo": "Artigo científico",
        "titulo": "A influência da reeleição nas políticas fiscais subnacionais",
        "autores": "Fernanda Ledo Marciniuk e Maurício S. Bugarin",
        "data": "19/06/2019",
        "formato": "Página",
        "url": "https://periodicos.fgv.br/rbe/article/view/71120",
        "tese": "Estuda o efeito que o fim da reeleição teria sobre as contas dos municípios, com dados de 2001 a 2012. Prefeitos de primeiro mandato que tentam a reeleição têm contas mais equilibradas do que prefeitos de segundo mandato, que não podem mais concorrer. Para os autores, a reeleição funciona como um instrumento do eleitor para controlar o governante. Eles alertam que proibir a reeleição pode piorar as finanças de estados e municípios.",
        "numero": {
          "valor": "0,58%",
          "legenda": "do PIB municipal de melhora no resultado primário entre prefeitos que buscam a reeleição (estimativa por diferenças em diferenças)"
        },
        "premissas": [
          "O comportamento de prefeitos no último mandato mostra como todos agiriam sem reeleição."
        ],
        "pergunte": [
          "Com mandato único de cinco anos, todos os prefeitos seriam como os de segundo mandato hoje?",
          "Contas melhores antes da eleição significam boa gestão ou só adiar gastos?"
        ]
      },
      {
        "id": "unicamp-op-bom-prefeito",
        "posicao": "contrario",
        "instituicao": "Unicamp (Cesop), autor da Enap",
        "natureza": "Revista Opinião Pública, do Centro de Estudos de Opinião Pública da Unicamp, universidade pública; autor da Escola Nacional de Administração Pública",
        "tipo": "Artigo científico",
        "titulo": "Vale a pena ser um bom prefeito? Comportamento eleitoral e reeleição no Brasil",
        "autores": "Pedro Cavalcante",
        "data": "2015",
        "formato": "PDF",
        "url": "https://periodicos.sbu.unicamp.br/ojs/index.php/op/article/download/8641577/9077",
        "tese": "Testa se o eleitor premia ou pune o prefeito pela gestão fiscal, usando o Índice Firjan de Gestão Fiscal nas eleições de 2008, em 2.916 municípios. Prefeitos com melhor gestão fiscal tiveram mais chance de ser reeleitos. O autor vê isso como prova de voto retrospectivo: o eleitor não é míope e usa a reeleição para cobrar resultados. O efeito aparece em cidades de até 100 mil habitantes.",
        "numero": {
          "valor": "25%",
          "legenda": "a mais de chance de reeleição ao passar da pior para a melhor nota no índice de gestão fiscal"
        },
        "premissas": [
          "Premiar boa gestão nas urnas cria incentivo para governar bem."
        ],
        "pergunte": [
          "O autor diz que os resultados são preliminares e só olham 2008. O padrão se manteve em 2024, com 82% de reeleição?",
          "Se o eleitor premia boa gestão, por que o efeito some nas cidades com mais de 100 mil habitantes?"
        ]
      },
      {
        "id": "cebrap-reeleicao-continuismo",
        "posicao": "contrario",
        "instituicao": "Cebrap (Centro de Estudos da Metrópole)",
        "natureza": "Centro privado de pesquisa em ciências sociais, sem fins lucrativos; artigo na revista Novos Estudos Cebrap",
        "tipo": "Artigo científico",
        "titulo": "Reeleição e Continuísmo nos Municípios Brasileiros",
        "autores": "Thomas Brambor e Ricardo Ceneviva",
        "data": "07/2012",
        "formato": "PDF",
        "url": "https://bibliotecadigital.tse.jus.br/bitstreams/cf91c5e0-4065-449a-a61a-ebb28ed9937a/download",
        "tese": "Analisa 42.493 candidatos em 5.563 municípios, nas eleições de 1996 a 2008. Não encontra vantagem eleitoral para o prefeito que tenta a reeleição. Pelo contrário: quem concorre perde em média cerca de 4 pontos de margem de votos. Para os autores, isso contradiz o medo de que a reeleição leve ao continuísmo.",
        "numero": {
          "valor": "-4 pontos",
          "legenda": "de margem de votos, em média, para o prefeito que tenta a reeleição"
        },
        "premissas": [
          "O passado recente das eleições municipais representa como a reeleição funciona."
        ],
        "pergunte": [
          "Os dados vão até 2008. Com emendas Pix e reeleição recorde em 2024, a conclusão ainda vale?"
        ]
      }
    ],
    "videos": [
      {
        "id": "pDs4Ex7NUL0",
        "titulo": "Eleição unificada e mandato de 5 anos: entenda a PEC que acaba com a reeleição",
        "canal": "g1",
        "duracao": "1:48",
        "nota": "O que a proposta aprovada na CCJ do Senado muda."
      },
      {
        "id": "YB53e6vBBeo",
        "titulo": "Entenda PEC aprovada pela CCJ do Senado que acaba com reeleição",
        "canal": "SBT News",
        "duracao": "7:36",
        "nota": "Reportagem com os detalhes e o calendário."
      },
      {
        "id": "Vwd74XHZfCE",
        "titulo": "CCJ aprova fim da reeleição e mandato de 5 anos; autor explica",
        "canal": "TV Senado",
        "duracao": "12:33",
        "nota": "O autor da proposta apresenta seus argumentos."
      },
      {
        "id": "WGE4YOJ0NO8",
        "titulo": "Reeleição para cargos executivos",
        "canal": "Cortes do Flow",
        "duracao": "5:02",
        "nota": "Conversa sobre prós e contras da reeleição."
      },
      {
        "id": "F3vShLPxa24",
        "titulo": "PEC em discussão no Senado prevê fim da reeleição e eleições unificadas",
        "canal": "TV Paranaíba",
        "duracao": "6:12",
        "nota": "O impacto para prefeitos e vereadores."
      },
      {
        "id": "IJN32vSgnN0",
        "titulo": "É verdade que Flávio propôs o fim da reeleição para presidente?",
        "canal": "TV Unesp",
        "duracao": "1:44",
        "nota": "Checagem de uma universidade sobre a proposta na campanha de 2026."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/fim-reeleicao.jpg",
      "autor": "Romério Cunha/Vice-Presidência da República",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_do_Planalto_(14091330379).jpg",
      "legenda": "Palácio do Planalto, sede da Presidência da República, em Brasília.",
      "alt": "Fachada branca do Palácio do Planalto sob céu azul, com flores em primeiro plano",
      "posicao": "50% 45%"
    }
  },
  {
    "id": "reforma-administrativa",
    "titulo": "Reforma administrativa",
    "categoria": "instituicoes",
    "tags": [
      "reforma administrativa",
      "pec 38",
      "pec 32",
      "servidores públicos",
      "estabilidade",
      "avaliação de desempenho",
      "supersalários",
      "penduricalhos",
      "bônus de resultado",
      "serviço público"
    ],
    "pergunta": "O Brasil precisa de uma reforma administrativa que mude as regras do serviço público?",
    "resumo": "A PEC 38/2025, apresentada na Câmara com 171 assinaturas, propõe avaliação de desempenho, bônus por metas e fim de privilégios como férias de 60 dias. Para aprovar, são necessários 308 votos em dois turnos, e a votação ficou para depois das eleições de outubro de 2026.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor da reforma",
      "contrario": "Contra a reforma proposta"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A reforma administrativa muda as regras de trabalho de quem atua no setor público: como servidores entram, são avaliados, promovidos e pagos. A proposta atual vale para União, estados e municípios. Ela prevê metas para os órgãos, avaliação de desempenho, bônus por resultado, carreiras com pelo menos 20 níveis, limite para cargos comissionados e o fim de benefícios como férias acima de 30 dias.",
        "Em 2020, o governo Bolsonaro enviou a PEC 32/2020, que limitava a estabilidade a algumas carreiras. Ela passou por uma comissão especial da Câmara em 2021, mas nunca foi votada no plenário. Em 2025, um grupo de trabalho da Câmara coordenado pelo deputado Pedro Paulo (PSD-RJ) preparou 70 propostas, divididas em uma PEC, um projeto de lei complementar e um projeto de lei. A PEC 38/2025 foi protocolada em outubro de 2025 com 171 assinaturas, o mínimo exigido, e mantém a estabilidade de quem já é servidor.",
        "Em 2026, a proposta perdeu força. Mais de 30 deputados pediram para retirar a assinatura após pressão de servidores, e o governo federal não apoiou o texto. Em janeiro, Pedro Paulo admitiu que o debate poderia ficar para 2027. Em maio, o presidente da Câmara, Hugo Motta, indicou que quer retomar a votação depois das eleições de outubro. Para passar, a PEC precisa de 308 dos 513 votos em dois turnos na Câmara e depois no Senado.",
        "Quem defende a reforma diz que o Estado premia tempo de serviço em vez de resultado, que há privilégios caros como os supersalários e que regras melhores podem economizar bilhões e melhorar serviços. Quem critica diz que a proposta enfraquece a estabilidade e as carreiras, abre espaço para indicações políticas, impõe regras iguais a realidades diferentes nos municípios e tem pouco efeito fiscal, já que os problemas mais caros poderiam ser resolvidos com as regras atuais."
      ],
      "fatos": [
        {
          "rotulo": "Assinaturas na apresentação da PEC 38",
          "valor": "171 deputados"
        },
        {
          "rotulo": "Votos necessários na Câmara",
          "valor": "308 de 513, em dois turnos"
        },
        {
          "rotulo": "Gasto anual acima do teto (estimativa)",
          "valor": "R$ 20 bilhões"
        },
        {
          "rotulo": "Teto salarial do serviço público (2025)",
          "valor": "R$ 46.366,19 por mês"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Contas públicas",
        "favoravel": "Um estudo da IFI simula que carreiras mais longas, salário inicial 30% menor e reposição parcial de quem se aposenta economizariam cerca de R$ 128 bilhões até 2031 na União e nos estados. (A3)",
        "contrario": "A Consultoria de Orçamentos do Senado concluiu que a PEC 32 tenderia a piorar as contas da União, porque muitos benefícios cortados já não existiam e o risco de indicação política e corrupção aumentaria. (B3)",
        "fonte_favoravel": "ifi-gestao-pessoas-despesas",
        "fonte_contrario": "senado-conorf-nt69-pec32"
      },
      {
        "tema": "Desempenho e estabilidade",
        "favoravel": "O grupo de trabalho da Câmara afirma que os salários hoje premiam tempo de serviço e títulos, não resultado, e propõe acordos com metas e bônus de até 2 salários por servidor. (A1)",
        "contrario": "Pesquisadores do Ipea mostram que a estabilidade não impede punição: foram 7.588 demissões de servidores federais entre 2003 e 2019. Para eles, metas individuais copiadas do setor privado reduzem a cooperação. (B2)",
        "fonte_favoravel": "camara-gt-fichario",
        "fonte_contrario": "fonacate-caderno7-desempenho"
      },
      {
        "tema": "Salários",
        "favoravel": "Pagamentos acima do teto custam cerca de R$ 20 bilhões por ano e vão para cerca de 1% dos servidores, enquanto metade deles ganha até R$ 4.034,60. (A2)",
        "contrario": "O DIEESE aponta que o bônus por metas não é garantido nem quando as metas são cumpridas e que limitar o salário inicial a 50% do final pode travar carreiras e pressionar salários para baixo. (B1)",
        "fonte_favoravel": "mpaf-supersalarios-2026",
        "fonte_contrario": "dieese-nt288-reforma"
      }
    ],
    "glossario": [
      {
        "termo": "Estabilidade",
        "definicao": "Garantia de que o servidor concursado, depois de três anos, só perde o cargo por decisão judicial, processo administrativo ou avaliação de desempenho negativa, nos termos da lei."
      },
      {
        "termo": "PEC",
        "definicao": "Proposta de Emenda à Constituição. Precisa de 3/5 dos votos na Câmara (308) e no Senado (49), em dois turnos em cada Casa."
      },
      {
        "termo": "Teto constitucional",
        "definicao": "Limite de salário no serviço público, igual ao salário de um ministro do STF. Em 2025, era R$ 46.366,19 por mês."
      },
      {
        "termo": "Penduricalhos",
        "definicao": "Auxílios e verbas chamadas de indenizatórias que ficam fora do teto e permitem que alguns servidores ganhem acima do limite, os chamados supersalários."
      },
      {
        "termo": "Bônus de resultado",
        "definicao": "Pagamento extra a servidores de um órgão que cumprir metas definidas em um acordo de resultados. Na PEC 38, seria opcional."
      }
    ],
    "incertezas": [
      "Quanto a reforma economizaria de fato. A PEC 38 não traz uma estimativa oficial de impacto fiscal, e boa parte das regras depende de leis posteriores.",
      "Se avaliações de desempenho funcionariam bem no setor público ou virariam formalidade ou instrumento de perseguição.",
      "Se a PEC terá votos depois das eleições de 2026, com um Congresso renovado e novos governos estaduais."
    ],
    "fontes": [
      {
        "titulo": "Metrópoles: Promessa de Motta, reforma administrativa trava e frustra expectativa (11/01/2026)",
        "url": "https://www.metropoles.com/brasil/promessa-de-motta-reforma-administrativa-nao-deve-sair-em-2026"
      },
      {
        "titulo": "Sintrajufe: Reforma administrativa pode ficar mesmo para 2027, reconhece Pedro Paulo (22/01/2026)",
        "url": "https://sintrajufe.org.br/reforma-administrativa-pode-ficar-mesmo-para-2027-reconhece-pedro-paulo-sindicatos-seguem-atentos-para-evitar-surpresas/"
      },
      {
        "titulo": "Condsef: Após eleições, Hugo Motta quer retomar reforma administrativa no Congresso (25/05/2026)",
        "url": "https://www.condsef.org.br/noticias/apos-eleicoes-hugo-motta-quer-retomar-reforma-administrativa-congresso"
      }
    ],
    "leituras": [
      {
        "id": "camara-gt-fichario",
        "posicao": "favoravel",
        "instituicao": "Câmara dos Deputados (Grupo de Trabalho da Reforma Administrativa)",
        "natureza": "Grupo de trabalho político da Câmara que escreveu a proposta; documento de defesa do próprio texto",
        "tipo": "Relatório",
        "titulo": "Reforma Administrativa: Um Estado com Foco em Resultados: Eficiente, Digital e Justo",
        "autores": "Grupo de Trabalho da Reforma Administrativa, coordenado pelo deputado Pedro Paulo",
        "data": "10/2025",
        "formato": "PDF",
        "url": "https://infograficos.camara.leg.br/wp-content/uploads/2025/10/Fichario-Reforma-Administrativa.pdf",
        "tese": "Apresenta 70 propostas em quatro eixos, resultado de 7 audiências públicas e cerca de 500 horas de reuniões técnicas. O diagnóstico é que a administração vive de curto prazo, sem metas mensuráveis, e que os salários premiam tempo e títulos, não desempenho. Propõe planejamento estratégico obrigatório, acordos de resultado com bônus de até 2 salários por servidor, carreiras com pelo menos 20 níveis e fim de férias de 60 dias.",
        "numero": {
          "valor": "70",
          "legenda": "propostas reunidas em uma PEC, um projeto de lei complementar e um projeto de lei"
        },
        "premissas": [
          "Metas e bônus mudam o comportamento de órgãos e servidores para melhor.",
          "As regras podem valer de forma parecida para União, estados e municípios."
        ],
        "pergunte": [
          "Quem escreveu o documento é quem defende a proposta. Que evidências independentes mostram que bônus por metas melhoram serviços públicos?"
        ]
      },
      {
        "id": "mpaf-supersalarios-2026",
        "posicao": "favoravel",
        "instituicao": "Movimento Pessoas à Frente",
        "natureza": "Organização da sociedade civil, financiada por fundações privadas, que defende modernizar a gestão de pessoas no setor público; autores ligados a Insper, FGV e IDP",
        "tipo": "Nota técnica",
        "titulo": "Supersalários no Serviço Público: Soluções Econômicas, Jurídicas e de Gestão",
        "autores": "Marcos Mendes, Humberto Falcão e João Paulo Bachur",
        "data": "03/2026",
        "formato": "PDF",
        "url": "https://movimentopessoasafrente.org.br/wp-content/uploads/2026/03/Supersalarios-no-servico-publico-solucoes-economicas-juridicas-e-de-gestao.pdf",
        "tese": "Estima que pagamentos acima do teto custam cerca de R$ 20 bilhões por ano, 21 vezes o valor da Argentina. Cerca de 1% dos servidores recebe acima do teto, sobretudo juízes, promotores e advogados públicos, enquanto metade dos servidores ganha até R$ 4.034,60. O gasto acima do teto no Judiciário subiu de R$ 7 bilhões para R$ 10,5 bilhões entre 2023 e 2024. Propõe lei nacional que defina o que é verba indenizatória, cobre imposto sobre o que não for reembolso e limite férias a 30 dias.",
        "numero": {
          "valor": "R$ 20 bi",
          "legenda": "por ano é o custo estimado dos pagamentos acima do teto constitucional"
        },
        "premissas": [
          "Boa parte das verbas chamadas de indenizatórias é, na prática, salário disfarçado."
        ],
        "pergunte": [
          "Os supersalários se concentram em poucas carreiras do sistema de Justiça. Uma reforma ampla para todos os servidores é o melhor caminho para atacar esse problema?"
        ]
      },
      {
        "id": "ifi-gestao-pessoas-despesas",
        "posicao": "favoravel",
        "instituicao": "IFI (Senado Federal), publicado pelo Tesouro Nacional",
        "natureza": "Estudo de analista da Instituição Fiscal Independente, órgão técnico do Senado, na revista Cadernos de Finanças Públicas do Tesouro",
        "tipo": "Artigo científico",
        "titulo": "Impacto de medidas de gestão de pessoas sobre as despesas com pessoal",
        "autores": "Alessandro Ribeiro de Carvalho Casalecchi",
        "data": "02/2022",
        "formato": "PDF",
        "url": "https://publicacoes.tesouro.gov.br/index.php/cadernos/article/download/154/151/637",
        "tese": "Simula o efeito de mudanças nas regras de pessoal sobre os gastos com servidores ativos da União e dos estados entre 2022 e 2031. Combinar carreiras mais longas, salário inicial 30% menor e reposição de só 60% dos que se aposentam economizaria cerca de R$ 128 bilhões no período. O corte no salário inicial e a menor reposição são as medidas de maior efeito; alongar a carreira sozinho rende pouco.",
        "numero": {
          "valor": "R$ 128 bi",
          "legenda": "de economia estimada até 2031 com o pacote de medidas, na União e nos estados"
        },
        "premissas": [
          "As regras simuladas seriam aprovadas e aplicadas a quem entra no serviço público.",
          "Repor menos servidores não prejudica os serviços."
        ],
        "pergunte": [
          "O próprio autor diz que o estudo não mede o impacto direto da PEC 32. Quanto dessas medidas está, de fato, na PEC 38?"
        ]
      },
      {
        "id": "dieese-nt288-reforma",
        "posicao": "contrario",
        "instituicao": "DIEESE",
        "natureza": "Departamento técnico mantido por sindicatos de trabalhadores",
        "tipo": "Nota técnica",
        "titulo": "Notas sobre a proposta de reforma administrativa apresentada em 2025 (Nota Técnica nº 288)",
        "autores": "Carolina Gagliano Rodrigues Felipe, Ernesto Johannes Kokke do Rego, Lucas Colucio, Mariel Angeli Lopes, Max Leno de Almeida, Patrícia Pelatieri, Ricardo Melo Tamashiro e Thiago Soares",
        "data": "15/12/2025",
        "formato": "PDF",
        "url": "https://www.dieese.org.br/notatecnica/2025/notaTec288reformaAdm.pdf",
        "tese": "Analisa a PEC 38/2025 e conclui que ela pode enfraquecer a estabilidade, as carreiras e a negociação coletiva, que o setor público ainda não tem. O bônus equivalente a um 14º salário não é garantido nem quando as metas são cumpridas, porque a distribuição depende da administração. Carreiras com 20 níveis e salário inicial de no máximo 50% do final podem travar a progressão e pressionar salários para baixo. As regras seriam impostas de forma igual a estados e municípios, sem considerar as diferenças locais.",
        "numero": {
          "valor": "50%",
          "legenda": "do salário final seria o limite para o salário de entrada nas carreiras"
        },
        "premissas": [
          "Pagamento ligado a metas tende a virar ferramenta de arrocho salarial."
        ],
        "pergunte": [
          "Se o modelo atual não funciona bem para o cidadão, que alternativa a nota propõe para cobrar resultados?"
        ]
      },
      {
        "id": "fonacate-caderno7-desempenho",
        "posicao": "contrario",
        "instituicao": "Fonacate (autores do Ipea)",
        "natureza": "Fórum de associações de carreiras típicas de Estado; autores são pesquisadores do Ipea, um deles presidente da Afipea-Sindical",
        "tipo": "Caderno da Reforma Administrativa",
        "titulo": "Gestão de Pessoas e Avaliação de Desempenho no Setor Público Brasileiro: crítica à proposta fiscal-gerencialista da reforma administrativa e diretrizes para um modelo de Estado orientado à reflexividade, inovação e efetividade",
        "autores": "José Celso Cardoso Jr. e Roberto R. Pires",
        "data": "08/2020",
        "formato": "PDF",
        "url": "https://www.sinait.org.br/storage/landing-pages/reforma/caderno7.pdf",
        "tese": "Argumenta que a reforma de 2020 tinha objetivo fiscal: cortar a folha e facilitar demissões com metas individuais copiadas do setor privado. Mostra que a estabilidade não impede punições: entre 2003 e julho de 2019 houve 7.588 demissões de servidores federais, 64% delas por corrupção. Defende uma avaliação voltada ao aprendizado das equipes, que depende de estabilidade, salário previsível, formação contínua e cooperação.",
        "numero": {
          "valor": "7.588",
          "legenda": "servidores federais estatutários demitidos entre 2003 e julho de 2019"
        },
        "premissas": [
          "Metas individuais e competição entre servidores reduzem a motivação e a cooperação."
        ],
        "pergunte": [
          "Cerca de 500 demissões por ano em um universo de centenas de milhares de servidores mostram que o sistema funciona ou que quase ninguém é afastado por mau desempenho?"
        ]
      },
      {
        "id": "senado-conorf-nt69-pec32",
        "posicao": "contrario",
        "instituicao": "Consultoria de Orçamentos do Senado (Conorf)",
        "natureza": "Órgão técnico e apartidário do Senado Federal",
        "tipo": "Nota técnica",
        "titulo": "Nota Técnica 69/2021: Aspectos Fiscais da PEC 32/2020 (\"Reforma Administrativa\") e Proposta de Medidas Alternativas",
        "autores": "Vinícius Leopoldino do Amaral",
        "data": "19/05/2021",
        "formato": "Página",
        "url": "https://www12.senado.leg.br/orcamento/documentos/estudos/tipos-de-estudos/notas-tecnicas-e-informativos/nota-tecnica-69-2021-aspectos-fiscais-da-pec-32-2020-201creforma-administrativa201d-e-proposta-de-medidas-alternativas",
        "tese": "Conclui que a PEC 32/2020 tenderia a piorar as contas da União, e não melhorar. O governo não apresentou estimativa de impacto, e vários benefícios cortados já não existiam no nível federal. O maior risco seria abrir pelo menos 207 mil postos a pessoas sem vínculo com o serviço público, aumentando indicação política e corrupção. Propõe alternativas como cumprir o teto, limitar cargos comissionados e aplicar as regras fiscais que já existem.",
        "numero": {
          "valor": "29%",
          "legenda": "de aumento, no mínimo, dos cargos que poderiam ser ocupados por pessoas sem vínculo com o serviço público"
        },
        "premissas": [
          "Menos servidores de carreira em cargos de chefia aumenta o risco de desvios."
        ],
        "pergunte": [
          "A nota analisa a PEC 32, que acabava com a estabilidade para muitos. As críticas valem para a PEC 38, que mantém a estabilidade e limita comissionados a 5%?"
        ]
      }
    ],
    "videos": [
      {
        "id": "MpfVnwfj7zw",
        "titulo": "O texto da Reforma Administrativa é robusto e complexo, diz deputado",
        "canal": "CNN Brasil",
        "duracao": "3:58",
        "nota": "O relator resume o que propõe."
      },
      {
        "id": "pqhr9pNiMmM",
        "titulo": "PEC 38/2025: o que a nova reforma administrativa muda para o servidor",
        "canal": "Jorge Vianna",
        "duracao": "1:49",
        "nota": "Resumo rápido das mudanças para quem é servidor."
      },
      {
        "id": "SgPWahYRyFc",
        "titulo": "Canal Livre debate o projeto de reforma administrativa",
        "canal": "Band Jornalismo",
        "duracao": "2:28",
        "nota": "Trecho de debate com visões diferentes."
      },
      {
        "id": "nzGxjL-vp_I",
        "titulo": "Especialista: supersalários impactam negativamente a administração",
        "canal": "CNN Brasil",
        "duracao": "3:44",
        "nota": "Por que os pagamentos acima do teto entraram na reforma."
      },
      {
        "id": "4yZWKP3tBDE",
        "titulo": "O Brasil vai conseguir acabar com os supersalários do serviço público?",
        "canal": "IstoÉ Dinheiro",
        "duracao": "6:57",
        "nota": "O tamanho do problema e as tentativas anteriores."
      },
      {
        "id": "Me-EZ_OvVOg",
        "titulo": "Fonacate critica reforma administrativa na Câmara",
        "canal": "Fonacate",
        "duracao": "1:34",
        "nota": "A crítica das carreiras de Estado (sobre a PEC 32, de 2020)."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/reforma-administrativa.jpg",
      "autor": "Edilson Rodrigues/Agência Senado",
      "licenca": "CC BY 2.0",
      "licenca_url": "https://creativecommons.org/licenses/by/2.0",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Esplanada_dos_Minist%C3%A9rios_em_2018.jpg",
      "legenda": "Vista aérea da Esplanada dos Ministérios, em Brasília, em 2018.",
      "alt": "Prédios dos ministérios enfileirados ao longo de uma avenida, vistos do alto",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "zona-franca-manaus",
    "titulo": "Zona Franca de Manaus",
    "categoria": "economia",
    "tags": [
      "zona franca de manaus",
      "zfm",
      "incentivos fiscais",
      "gasto tributário",
      "polo industrial de manaus",
      "suframa",
      "amazonas",
      "reforma tributária",
      "desenvolvimento regional",
      "amazônia"
    ],
    "pergunta": "Os incentivos fiscais da Zona Franca de Manaus devem ser mantidos?",
    "resumo": "A Zona Franca de Manaus tem incentivos garantidos pela Constituição até 2073 e foi preservada na reforma tributária. A Receita projetou para 2024 uma renúncia de R$ 22,95 bilhões, e o debate é se o retorno em empregos e renda compensa esse custo.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de manter os incentivos",
      "contrario": "Contra manter os incentivos como estão"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A Zona Franca de Manaus (ZFM) é uma área com impostos menores criada em 1967 para levar indústria e empregos à Amazônia. Empresas que produzem no Polo Industrial de Manaus deixam de pagar ou pagam menos IPI, PIS, Cofins, imposto de importação e ICMS. O dinheiro que o governo deixa de arrecadar é chamado de gasto tributário.",
        "A ZFM foi prorrogada várias vezes. Hoje a Constituição garante os incentivos até 2073. A reforma tributária, aprovada em 2023 e regulamentada pelas Leis Complementares 214/2025 e 227/2026, manteve a vantagem da região no novo sistema, com alíquota zero e créditos presumidos de IBS e CBS durante a transição, que vai de 2026 a 2033.",
        "O polo segue grande. De janeiro a novembro de 2025, faturou R$ 209,5 bilhões e empregou em média 131,4 mil pessoas de forma direta, segundo a Suframa. O custo também é alto: a ZFM está entre os maiores gastos tributários da União, mas as estimativas oficiais variam muito de um documento para outro, de cerca de R$ 23 bilhões a mais de R$ 50 bilhões por ano.",
        "Há duas visões. Uma diz que os incentivos sustentam empregos e renda numa região isolada, ajudam a manter a floresta em pé e custam menos do que parece. A outra diz que, depois de quase 60 anos, não há prova firme de que o modelo gere crescimento além de Manaus, que a política nunca foi avaliada de forma sistemática e que o dinheiro poderia ter usos melhores."
      ],
      "fatos": [
        {
          "rotulo": "Prazo dos incentivos na Constituição",
          "valor": "até 2073"
        },
        {
          "rotulo": "Renúncia federal projetada pela Receita (2024)",
          "valor": "R$ 22,95 bilhões"
        },
        {
          "rotulo": "Empregos diretos no polo (média jan-nov/2025)",
          "valor": "131,4 mil"
        },
        {
          "rotulo": "Faturamento do polo (jan-nov/2025)",
          "valor": "R$ 209,5 bilhões"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Custo fiscal",
        "favoravel": "Pelos dados efetivos de 2021, a parte industrial do polo custa cerca de R$ 7,5 bilhões por ano, só 1,8% dos gastos tributários do país, e as estimativas oficiais maiores não explicam suas diferenças. (A2)",
        "contrario": "A ZFM e as Áreas de Livre Comércio custaram cerca de R$ 29 bilhões em 2020, e nenhuma versão do modelo mostrou ganho de PIB ao mesmo tempo no município, nos vizinhos e no total. (B3)",
        "fonte_favoravel": "fgv-eesp-gastos-tributarios-2025",
        "fonte_contrario": "enap-zfm-alc-diff-diff"
      },
      {
        "tema": "Crescimento e renda",
        "favoravel": "Comparando Manaus com áreas parecidas do Norte, cerca de 44% do PIB por pessoa da cidade em 1999 seria efeito da Zona Franca. (A3)",
        "contrario": "Entre 2002 e 2014, o gasto tributário subiu de R$ 5,5 bilhões para R$ 24,3 bilhões sem efeito positivo sobre o PIB, a renda ou a arrecadação do Amazonas. (B2)",
        "fonte_favoravel": "rbe-possebom-controle-sintetico",
        "fonte_contrario": "ipea-ppe-efeitos-zfm"
      },
      {
        "tema": "Empregos",
        "favoravel": "O polo responde por cerca de 500 mil empregos diretos e indiretos, e cada real de incentivo gera de R$ 1,14 a R$ 3,03 em renda na região. (A1)",
        "contrario": "Os números de empregos não usam grupo de comparação, e um teste com o Pará como referência encontrou efeito multiplicador negativo. (B1)",
        "fonte_favoravel": "fgv-eesp-zfm-2019",
        "fonte_contrario": "cgu-cmap-avaliacao-zfm"
      }
    ],
    "glossario": [
      {
        "termo": "Gasto tributário",
        "definicao": "Imposto que o governo deixa de cobrar para incentivar uma região, setor ou grupo. Funciona como um gasto público, mas não aparece como despesa no orçamento."
      },
      {
        "termo": "Polo Industrial de Manaus (PIM)",
        "definicao": "Conjunto de fábricas instaladas em Manaus com os incentivos da Zona Franca, como as de eletrônicos, motos e bebidas."
      },
      {
        "termo": "Suframa",
        "definicao": "Superintendência da Zona Franca de Manaus. Autarquia federal que aprova os projetos das empresas e administra os incentivos."
      },
      {
        "termo": "Processo Produtivo Básico (PPB)",
        "definicao": "Lista de etapas de fabricação que a empresa precisa fazer no Brasil para ter direito aos incentivos."
      },
      {
        "termo": "Controle sintético",
        "definicao": "Método estatístico que cria uma 'Manaus de comparação', combinando outras cidades parecidas, para estimar como a cidade estaria sem a Zona Franca."
      }
    ],
    "incertezas": [
      "Quanto a ZFM realmente custa. Documentos oficiais trazem números muito diferentes para o mesmo ano, e parte do incentivo pode ser vista como regime constitucional, e não como renúncia.",
      "Quantos empregos e quanta renda existiriam no Amazonas sem os incentivos. Os estudos usam métodos e comparações diferentes e chegam a conclusões opostas.",
      "Se o polo industrial ajuda a proteger a floresta. Um estudo da FGV não descarta o efeito, mas o estima como muito pequeno."
    ],
    "fontes": [
      {
        "titulo": "Portal Amazônia: Faturamento do PIM chega a R$ 200 bilhões e supera ano de 2024 (05/01/2026)",
        "url": "https://portalamazonia.com/economia/faturamento-pim-2025/"
      },
      {
        "titulo": "Gazeta do Povo: Reforma tributária e Zona Franca de Manaus: o que muda para a indústria nacional (11/03/2026)",
        "url": "https://www.gazetadopovo.com.br/opiniao/artigos/reforma-tributaria-e-zona-franca-de-manaus-o-que-muda-para-a-industria-nacional/"
      }
    ],
    "leituras": [
      {
        "id": "fgv-eesp-zfm-2019",
        "posicao": "favoravel",
        "instituicao": "FGV EESP",
        "natureza": "Escola de economia de fundação privada; estudo feito a pedido de um grupo de investidores da região",
        "tipo": "Relatório",
        "titulo": "Zona Franca de Manaus: Impactos, Efetividade e Oportunidades",
        "autores": "Márcio Holland (coord.), Angelo Gurgel, Felippe Serigatti, Daniel Gelcer, José Maria Arruda de Andrade, Priscilla Albuquerque, Cláudia Cerqueira e Renan Pieri",
        "data": "02/2019",
        "formato": "PDF",
        "url": "https://www.gov.br/suframa/pt-br/centrais-de-conteudo/biblioteca/estudo_fgv_zfm_impactos_efetividade_e_oportunidades.pdf",
        "tese": "Estima cerca de 500 mil empregos diretos e indiretos ligados ao polo e um gasto tributário de uns R$ 25 bilhões por ano. Calcula que cada real de incentivo gera de R$ 1,14 a R$ 3,03 em renda na região, acima do efeito de outros gastos públicos. Encontra ganhos de salário e escolaridade entre trabalhadores da indústria e não descarta um efeito de contenção do desmatamento, embora pequeno. Recomenda preservar o modelo e diversificar a economia do estado.",
        "numero": {
          "valor": "1,14 a 3,03",
          "legenda": "reais de renda regional para cada real de incentivo, conforme o método"
        },
        "premissas": [
          "A comparação com regiões sem incentivo mostra bem o que Manaus seria sem a ZFM.",
          "Os empregos indiretos estimados dependem de fato do polo."
        ],
        "pergunte": [
          "O estudo foi encomendado por investidores da região. Isso afeta a escolha dos métodos?",
          "O próprio estudo diz que não há efeito claro para a população do estado como um todo. Quem ganha de fato?"
        ]
      },
      {
        "id": "fgv-eesp-gastos-tributarios-2025",
        "posicao": "favoravel",
        "instituicao": "FGV EESP",
        "natureza": "Escola de economia de fundação privada; autor foi secretário de Política Econômica da Fazenda e coordenou estudo anterior pró-ZFM",
        "tipo": "Relatório",
        "titulo": "Gastos Tributários no Brasil e o Custo Fiscal da Zona Franca de Manaus",
        "autores": "Márcio Holland",
        "data": "18/06/2025",
        "formato": "PDF",
        "url": "https://eesp.fgv.br/sites/default/files/files-eesp/relatorio_gastos_tributarios_e_zona_franca_de_manaus_v_18_de_junho2025.pdf",
        "tese": "Mostra que documentos oficiais estimam o gasto tributário da ZFM entre R$ 24,2 bilhões e R$ 55,3 bilhões em anos próximos, sem explicar a diferença. Pelos dados efetivos de 2021, a parte industrial do polo custaria cerca de R$ 7,5 bilhões por ano, ou 1,8% de todos os gastos tributários do país. As empresas ainda pagam cerca de R$ 6 bilhões por ano em contrapartidas. O autor defende mais transparência e lembra que o Sul e o Sudeste ficam com 62% dos gastos tributários federais.",
        "numero": {
          "valor": "R$ 7,5 bilhões",
          "legenda": "por ano seria o custo do polo industrial, com dados efetivos de 2021"
        },
        "premissas": [
          "Parte do incentivo é um regime previsto na Constituição, e não um desvio da regra geral."
        ],
        "pergunte": [
          "Se o custo do polo é menor, para onde vai o restante da renúncia da ZFM, como comércio e serviços?",
          "O relatório não avalia se o programa funciona. Custar menos basta para justificá-lo?"
        ]
      },
      {
        "id": "rbe-possebom-controle-sintetico",
        "posicao": "favoravel",
        "instituicao": "Revista Brasileira de Economia (FGV)",
        "natureza": "Revista acadêmica da FGV; autor era pesquisador da Universidade Yale",
        "tipo": "Artigo científico",
        "titulo": "Free Trade Zone of Manaus: An Impact Evaluation using the Synthetic Control Method",
        "autores": "Vítor Possebom",
        "data": "06/2017",
        "formato": "Página",
        "url": "https://scielo.br/j/rbe/a/BjtvDXjCkLGFWYDpLqM3h7b/?lang=en",
        "tese": "Compara Manaus com uma combinação de outras áreas da região Norte que eram parecidas antes de 1967. Conclui que a Zona Franca aumentou o PIB por pessoa e a produção de serviços. Em 1999, cerca de 44% do PIB por pessoa de Manaus seria efeito da ZFM. O autor também aponta queda forte na agricultura, sinal de que os recursos foram puxados de um setor para outro.",
        "numero": {
          "valor": "44%",
          "legenda": "do PIB por pessoa de Manaus em 1999 seria efeito da Zona Franca"
        },
        "premissas": [
          "As áreas usadas na comparação mostram bem o caminho que Manaus teria sem a ZFM."
        ],
        "pergunte": [
          "O efeito na indústria não foi estatisticamente significativo. O crescimento veio de onde?",
          "Os dados vão só até 1999. O resultado vale para hoje?"
        ]
      },
      {
        "id": "cgu-cmap-avaliacao-zfm",
        "posicao": "contrario",
        "instituicao": "CGU (Conselho de Monitoramento e Avaliação de Políticas Públicas)",
        "natureza": "Órgão de controle do governo federal; avaliação oficial com análises do Ipea, da Receita e do Ministério da Economia",
        "tipo": "Relatório de avaliação",
        "titulo": "Relatório de Avaliação: Zona Franca de Manaus, Ciclo 2019",
        "autores": "Controladoria-Geral da União (CGU), no âmbito do CMAP",
        "data": "2020",
        "formato": "PDF",
        "url": "https://www.gov.br/planejamento/pt-br/assuntos/avaliacao-de-politicas-publicas/conselho-de-monitoramento-e-avaliacao-de-politicas-publicas-cmap/avaliacoes/relatoriozfm.pdf/@@display-file/file",
        "tese": "Descreve a ZFM como o quarto maior gasto tributário, com cerca de R$ 24 bilhões em 2019, mas sem objetivos claros, metas ou modelo de avaliação. Os números de empregos da Suframa não comparam com um grupo de controle, então não provam causa. Ao usar o Pará como comparação, o teste da CGU encontra um efeito multiplicador negativo. Cerca de 70% dos recursos para o interior acabaram gastos em Manaus.",
        "numero": {
          "valor": "70%",
          "legenda": "dos recursos de interiorização ligados à ZFM foram gastos na própria Manaus"
        },
        "premissas": [
          "O Pará é uma boa comparação para o Amazonas sem Manaus."
        ],
        "pergunte": [
          "Se a política nunca teve metas, a falta de resultados é culpa do incentivo ou da gestão?",
          "O que aconteceria com os empregos do polo se os incentivos fossem cortados de uma vez?"
        ]
      },
      {
        "id": "ipea-ppe-efeitos-zfm",
        "posicao": "contrario",
        "instituicao": "Ipea (revista Pesquisa e Planejamento Econômico)",
        "natureza": "Revista acadêmica do Ipea, fundação pública federal de pesquisa",
        "tipo": "Artigo científico",
        "titulo": "Efeitos Econômicos da Zona Franca de Manaus",
        "autores": "Rogério da Cruz Gonçalves e Philipp Ehrl",
        "data": "12/2021",
        "formato": "PDF",
        "url": "https://ppe.ipea.gov.br/index.php/ppe/article/viewFile/2061/1345",
        "tese": "Analisa os 27 estados de 2002 a 2014, período em que o gasto tributário com a ZFM subiu de R$ 5,5 bilhões para R$ 24,3 bilhões. Não encontra efeito positivo dos incentivos sobre o PIB, a renda ou a arrecadação do Amazonas. O efeito positivo aparece no emprego e na população: cada R$ 1 bilhão a mais se associa a quase 0,9% mais pessoas ocupadas. Os autores concluem que o modelo precisa de reforma, porque gera vagas de baixa qualificação e depende dos incentivos.",
        "numero": {
          "valor": "60,3%",
          "legenda": "dos trabalhadores da ZFM ganham até 2 salários mínimos"
        },
        "premissas": [
          "Comparar estados ao longo do tempo isola o efeito dos incentivos."
        ],
        "pergunte": [
          "Os próprios autores dizem que o método não prova causa. Quanto confiar nos números?",
          "Gerar empregos e atrair moradores não é justamente o objetivo de uma política regional?"
        ]
      },
      {
        "id": "enap-zfm-alc-diff-diff",
        "posicao": "contrario",
        "instituicao": "Enap",
        "natureza": "Escola de governo federal; estudo do programa Cátedras, com revisão de pares",
        "tipo": "Caderno de pesquisa",
        "titulo": "Zona Franca de Manaus e Áreas de Livre Comércio: uma avaliação dos impactos econômicos via modelos espaciais de diferença em diferenças",
        "autores": "Thais Waideman Niquito",
        "data": "2022",
        "formato": "PDF",
        "url": "https://repositorio.enap.gov.br/bitstream/1/7255/2/Caderno_101_Zona_franca_20220920.pdf",
        "tese": "Estima que a ZFM e as Áreas de Livre Comércio custaram cerca de R$ 29 bilhões em 2020, mais de 8% de todos os gastos tributários federais. Mede o efeito sobre o PIB por pessoa nos municípios do Norte, inclusive sobre os vizinhos. Nenhuma das versões do modelo mostra efeitos positivos ao mesmo tempo para o município beneficiado, os vizinhos e o total. A autora conclui que as evidências não sustentam a continuidade dessas políticas, mas pede estudos com dados de empresas.",
        "numero": {
          "valor": "R$ 29 bilhões",
          "legenda": "custo estimado da ZFM e das Áreas de Livre Comércio em 2020"
        },
        "premissas": [
          "Os efeitos sobre municípios vizinhos aparecem nos dados de PIB municipal."
        ],
        "pergunte": [
          "A autora diz que os resultados são indicativos e não robustos. Eles bastam para cortar a política?"
        ]
      }
    ],
    "videos": [
      {
        "id": "ANNqszoTvAk",
        "titulo": "Como funciona a Zona Franca de Manaus",
        "canal": "Curioso Mercado",
        "duracao": "16:15",
        "nota": "A história e as regras do polo, explicadas do zero."
      },
      {
        "id": "hH8rGsDbVJA",
        "titulo": "A verdade sobre os impostos da Zona Franca de Manaus",
        "canal": "Os Economistas Podcast",
        "duracao": "7:00",
        "nota": "Economistas discutem custo e retorno dos incentivos."
      },
      {
        "id": "FJ15eqo54e0",
        "titulo": "A criação da Zona Franca de Manaus foi um erro? Marcos Lisboa comenta",
        "canal": "Warren Investimentos",
        "duracao": "0:45",
        "nota": "A crítica de um economista ao modelo."
      },
      {
        "id": "hiv-ClZgTbk",
        "titulo": "Economista explica a situação da Zona Franca diante dos ataques",
        "canal": "TV Norte Amazonas",
        "duracao": "9:34",
        "nota": "A defesa do polo vista de Manaus."
      },
      {
        "id": "9fW1fVgNhqE",
        "titulo": "Reforma tributária e Zona Franca de Manaus: qual é o impacto?",
        "canal": "BandNews Difusora",
        "duracao": "5:53",
        "nota": "Como o novo sistema de impostos trata a região."
      },
      {
        "id": "BY-dvoWZgHo",
        "titulo": "O regime favorecido da Zona Franca de Manaus",
        "canal": "Ágora Fiscal",
        "duracao": "6:34",
        "nota": "Os detalhes técnicos do benefício na reforma."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/zona-franca-manaus.jpg",
      "autor": "Pontanegra (modificações de Cornischong)",
      "licenca": "CC BY-SA 3.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/3.0/",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Manaus-Hafen-Rio-Negro_w.jpg",
      "legenda": "Porto de Manaus, no rio Negro, em 2005.",
      "alt": "Contêineres e navio de carga no porto de Manaus, com casas em primeiro plano e o rio ao fundo",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "taxa-blusinhas",
    "titulo": "Taxa das blusinhas",
    "categoria": "economia",
    "tags": [
      "taxa das blusinhas",
      "remessa conforme",
      "imposto de importação",
      "compras internacionais",
      "shein",
      "shopee",
      "aliexpress",
      "icms",
      "comércio eletrônico",
      "indústria têxtil"
    ],
    "pergunta": "O imposto de importação sobre compras internacionais de até US$ 50 deve voltar a ser cobrado?",
    "resumo": "Desde 13 de maio de 2026, compras internacionais de até US$ 50 não pagam mais os 20% de imposto de importação, e a Lei 15.502/2026 confirmou a mudança em setembro. Em 2025, a taxa arrecadou R$ 3,5 bilhões, e a indústria quer que ela volte.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de voltar a taxar",
      "contrario": "Contra a taxa"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "A chamada taxa das blusinhas é o imposto de importação de 20% cobrado sobre compras de até US$ 50 feitas em sites estrangeiros, como Shein, Shopee e AliExpress. Além dele, essas compras pagam ICMS, um imposto estadual que varia de 17% a 20% conforme o estado.",
        "Até 2023, muitas dessas encomendas entravam sem pagar quase nada. Em agosto de 2023, a Receita criou o programa Remessa Conforme: as plataformas que aderem informam os dados das compras antes e recolhem o ICMS. Em junho de 2024, a Lei 14.902 criou o imposto de 20% para compras de até US$ 50, cobrado a partir de agosto de 2024.",
        "Em 12 de maio de 2026, o governo editou a Medida Provisória 1.357, que permitiu zerar o imposto nessa faixa. O Congresso aprovou o texto em 3 de setembro, e a Lei 15.502 foi publicada em 10 de setembro de 2026. O ICMS continua sendo cobrado. A lei obriga o Ministério da Fazenda a avaliar os efeitos sobre setores como roupas, calçados, brinquedos e cosméticos. A CNI questiona a medida no STF.",
        "Há duas visões principais. Uma diz que o imposto é questão de igualdade: quem produz e vende no Brasil paga muito mais tributos, e a concorrência dos sites estrangeiros tira empregos da indústria e do comércio. A outra diz que a taxa encarece produtos baratos para quem tem menos renda, arrecada pouco e não mostrou efeito claro sobre o emprego."
      ],
      "fatos": [
        {
          "rotulo": "Imposto de importação até US$ 50",
          "valor": "0% desde 13/05/2026 (era 20%)"
        },
        {
          "rotulo": "ICMS sobre essas compras",
          "valor": "17% a 20%, conforme o estado"
        },
        {
          "rotulo": "Arrecadação da taxa em 2025",
          "valor": "R$ 3,5 bilhões"
        },
        {
          "rotulo": "Encomendas pelo Remessa Conforme em 2025",
          "valor": "159,6 milhões"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Empregos",
        "favoravel": "A CNI estima que a taxa evitou R$ 4,5 bilhões em importações e preservou cerca de 135,8 mil empregos no Brasil. (A1)",
        "contrario": "A LCA comparou 12 meses antes e depois da taxa e não achou diferença estatisticamente significativa no emprego do varejo e da indústria protegidos. (B1)",
        "fonte_favoravel": "cni-nota-remessa-conforme",
        "fonte_contrario": "lca-taxa-blusinhas"
      },
      {
        "tema": "Igualdade de impostos",
        "favoravel": "Para a Abit, mesmo com os 20%, os sites estrangeiros pagam bem menos impostos que quem produz no Brasil, num setor com 1,3 milhão de trabalhadores diretos. (A3)",
        "contrario": "O parecer aprovado no Congresso trata o fim da taxa como justiça tributária para famílias de menor renda e lembra que as compras ainda pagam ICMS de 17% a 20%. (B2)",
        "fonte_favoravel": "abit-isonomia-tributaria",
        "fonte_contrario": "parecer-mp-1357"
      },
      {
        "tema": "Arrecadação",
        "favoravel": "A Receita calculou o ganho de arrecadação supondo que as importações cairiam 20%, porque o produto nacional ficaria mais competitivo. (A2)",
        "contrario": "Segundo a LCA, a União ganhou cerca de R$ 265 milhões por mês, mas os estados perderam até R$ 258 milhões em ICMS, e o ganho líquido foi de só R$ 7 milhões. (B1)",
        "fonte_favoravel": "receita-cetad-118",
        "fonte_contrario": "lca-taxa-blusinhas"
      }
    ],
    "glossario": [
      {
        "termo": "Remessa Conforme",
        "definicao": "Programa da Receita Federal, criado em 2023, em que as plataformas estrangeiras informam os dados das compras antes da chegada e recolhem os impostos na hora da venda."
      },
      {
        "termo": "Imposto de importação",
        "definicao": "Tributo federal cobrado sobre produtos que entram no país. Nas compras de pessoas físicas pela internet, segue um regime simplificado."
      },
      {
        "termo": "ICMS",
        "definicao": "Imposto estadual sobre a circulação de mercadorias. Nas compras internacionais, é cobrado mesmo sem o imposto de importação."
      },
      {
        "termo": "Isonomia tributária",
        "definicao": "Ideia de que empresas em situação parecida devem pagar impostos parecidos. É o principal argumento da indústria a favor da taxa."
      },
      {
        "termo": "Imposto regressivo",
        "definicao": "Imposto que pesa mais, em proporção da renda, sobre quem ganha menos."
      }
    ],
    "incertezas": [
      "Quantos empregos a taxa realmente protegeu. Os estudos da indústria e os das plataformas chegam a conclusões opostas, e os dois lados encomendaram ou produziram suas próprias análises.",
      "Quanto da queda nas encomendas virou compra no comércio brasileiro e quanto virou consumo que simplesmente deixou de acontecer.",
      "O que o STF vai decidir sobre a ação da CNI e o que mostrarão as avaliações que a Fazenda é obrigada a publicar."
    ],
    "fontes": [
      {
        "titulo": "Agência Câmara: Fim da 'taxa das blusinhas' para compras até US$ 50 agora é lei (11/09/2026)",
        "url": "https://camara.leg.br/noticias/1304183-fim-da-taxa-das-blusinhas-para-compras-ate-us-50-agora-e-lei"
      },
      {
        "titulo": "Agência Senado: Medida provisória zera 'taxa das blusinhas' para importações de até US$ 50 (13/05/2026)",
        "url": "https://www12.senado.leg.br/noticias/materias/2026/05/13/medida-provisoria-zera-taxa-das-blusinhas-para-importacoes-de-ate-us-50"
      },
      {
        "titulo": "Revista Oeste: CNI aciona STF contra fim da taxa das blusinhas (23/05/2026)",
        "url": "https://www.revistaoeste.com/economia/cni-aciona-stf-contra-fim-da-taxa-das-blusinhas/"
      }
    ],
    "leituras": [
      {
        "id": "cni-nota-remessa-conforme",
        "posicao": "favoravel",
        "instituicao": "CNI",
        "natureza": "Confederação Nacional da Indústria, entidade privada que representa a indústria e defende a taxa",
        "tipo": "Nota técnica",
        "titulo": "Programa Remessa Conforme: mais formalização e menor assimetria no consumo digital (Nota Técnica nº 32/2026)",
        "autores": "Superintendência de Economia da CNI",
        "data": "22/04/2026",
        "formato": "PDF",
        "url": "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/filer_public/2a/f3/2af3cf1a-f82b-4ae9-a24f-0ae15f457f61/nota_tecnica-_programa_remessa_conforme.pdf",
        "tese": "As encomendas pelo Remessa Conforme caíram de 179,1 milhões em 2024 para 159,6 milhões em 2025. Sem a taxa, a CNI projeta que seriam 205,9 milhões. Pelas suas contas, isso evitou R$ 4,5 bilhões em importações e preservou cerca de 135,8 mil empregos e R$ 19,7 bilhões em produção no Brasil. A nota diz que o programa reduziu a diferença de impostos, mas não a eliminou, porque o produto nacional ainda paga IPI e PIS/Cofins.",
        "numero": {
          "valor": "135,8 mil",
          "legenda": "empregos preservados pela taxa, segundo a estimativa da CNI"
        },
        "premissas": [
          "Cada compra que deixou de ser feita no exterior virou compra de produto feito no Brasil.",
          "A tendência de crescimento das encomendas sem a taxa seria a projetada pela CNI."
        ],
        "pergunte": [
          "O estudo mede empregos efetivamente criados ou estima a partir de uma projeção?",
          "As importações de bens de consumo pelas vias normais subiram 15,8% em 2025. A demanda foi para a indústria nacional ou para outros importados?"
        ]
      },
      {
        "id": "receita-cetad-118",
        "posicao": "favoravel",
        "instituicao": "Receita Federal (Cetad)",
        "natureza": "Centro de estudos tributários da Receita Federal, órgão público do Ministério da Fazenda",
        "tipo": "Nota técnica",
        "titulo": "Nota Técnica Cetad/Coest nº 118, de 31 de julho de 2024: Alteração de Alíquota das Remessas Postais Internacionais",
        "autores": "Luana Almeida Felix, Douglas de Freitas Calaça e Filipe Nogueira da Gama",
        "data": "31/07/2024",
        "formato": "Página",
        "url": "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/estudos/notas-cetad/notas-tecnicas/2024/nota-cetad-coest-no-118-2024",
        "tese": "Explica a mudança que passou a cobrar 20% de imposto de importação nas remessas de até US$ 50 a partir de agosto de 2024 e estima o ganho de arrecadação de 2024 a 2027. A Receita supõe que o volume de importações cairia 20%, porque os preços maiores tornariam o produto nacional mais competitivo. Os autores reconhecem que não tinham dados por produto para calcular isso com mais precisão.",
        "numero": {
          "valor": "20%",
          "legenda": "de queda no volume de importações, suposta pela Receita ao calcular a arrecadação"
        },
        "premissas": [
          "Parte da demanda por importados migra para produtos feitos no Brasil quando o preço sobe."
        ],
        "pergunte": [
          "Sem dados de quanto o consumidor reage ao preço, quão confiável é a estimativa de 20%?"
        ]
      },
      {
        "id": "abit-isonomia-tributaria",
        "posicao": "favoravel",
        "instituicao": "Abit",
        "natureza": "Associação Brasileira da Indústria Têxtil e de Confecção, entidade privada do setor mais exposto à concorrência; texto de opinião",
        "tipo": "Artigo de opinião",
        "titulo": "Taxa das blusinhas significa igualdade tributária, mais empregos e estabilidade",
        "autores": "Fernando Valente Pimentel",
        "data": "11/2025",
        "formato": "PDF",
        "url": "https://www.abit.org.br/uploads/arquivos/Taxa%20das%20blusinhas%20significa%20igualdade%20tribut%C3%A1ria,%20mais%20empregos%20e%20estabilidade.pdf",
        "tese": "Defende que a taxa não é protecionismo, e sim igualdade: mesmo com os 20%, os sites estrangeiros pagam bem menos impostos que quem produz no Brasil. Lembra que o setor têxtil tem cerca de 1,3 milhão de trabalhadores diretos e criou 29,6 mil vagas formais entre janeiro e setembro de 2025. Argumenta que roupas tiveram a menor inflação acumulada entre os grupos do IPCA desde 1994 e que o frete, não o imposto, é o que mais faz o consumidor desistir da compra.",
        "numero": {
          "valor": "1,3 milhão",
          "legenda": "de trabalhadores diretos na indústria têxtil e de confecção"
        },
        "premissas": [
          "A diferença de impostos é a principal causa da vantagem dos sites estrangeiros."
        ],
        "pergunte": [
          "O texto não traz o cálculo da diferença de impostos. Quanto exatamente o produto nacional paga a mais?",
          "Se o frete pesa mais que o imposto, a taxa faz tanta diferença para a indústria?"
        ]
      },
      {
        "id": "lca-taxa-blusinhas",
        "posicao": "contrario",
        "instituicao": "LCA Consultores",
        "natureza": "Consultoria econômica privada; segundo o InfoMoney, o estudo foi encomendado pela Amobitec, associação que reúne empresas de tecnologia e comércio eletrônico",
        "tipo": "Relatório",
        "titulo": "Taxa das blusinhas: Resultados econômicos para população e governo",
        "autores": "Eric Brasil, Davi Alencar, Luís Jorge, Louise Cruz e Ana Wakabayashi (LCA)",
        "data": "10/2025",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/2025/10/LCA-Taxa-das-Blusinhas-out-2025.pdf",
        "tese": "As importações de bens de consumo pelo Remessa Conforme caíram 43% logo após a taxa. O emprego nos setores de varejo e indústria protegidos não mudou de forma estatisticamente significativa. A União ganhou cerca de R$ 265 milhões por mês, mas os estados perderam até R$ 258 milhões em ICMS, sobrando só R$ 7 milhões líquidos. Cerca de 70% da taxa é paga pelas classes C, D e E, e o peso na renda delas é o dobro do que nas classes A e B.",
        "numero": {
          "valor": "R$ 7 milhões",
          "legenda": "por mês de arrecadação líquida, somando o ganho federal e a perda de ICMS dos estados"
        },
        "premissas": [
          "Sem a taxa, as importações seguiriam a tendência de janeiro a julho de 2024.",
          "Comparar 12 meses antes e depois basta para medir o efeito no emprego."
        ],
        "pergunte": [
          "Um estudo pago por empresas do setor de plataformas pode ser neutro?",
          "Um ano de dados é suficiente para ver efeito no emprego?"
        ]
      },
      {
        "id": "parecer-mp-1357",
        "posicao": "contrario",
        "instituicao": "Congresso Nacional (Comissão Mista da MP 1.357)",
        "natureza": "Parecer da relatora, senadora Leila Barros, aprovado na comissão mista; documento político-legislativo",
        "tipo": "Parecer legislativo",
        "titulo": "Parecer da Comissão Mista da Medida Provisória nº 1.357, de 2026",
        "autores": "Senadora Leila Barros (relatora)",
        "data": "09/2026",
        "formato": "PDF",
        "url": "https://www.reformatributaria.com/wp-content/uploads/2026/09/relatorio-MP-blusinhas.pdf",
        "tese": "Defende zerar o imposto como um instrumento de justiça tributária em favor das famílias de menor renda. Lembra que as compras continuam pagando ICMS de 17% a 20%. Afirma que as evidências não permitem uma relação robusta entre a tributação das pequenas remessas e o emprego. Acrescenta regras contra fraude, limites de quantidade e avaliações periódicas dos efeitos sobre os setores nacionais.",
        "numero": {
          "valor": "17% a 20%",
          "legenda": "de ICMS que continua sendo cobrado nas compras de até US$ 50"
        },
        "premissas": [
          "Quem mais compra nesses sites são famílias de renda mais baixa."
        ],
        "pergunte": [
          "O parecer não traz números próprios sobre emprego ou arrecadação. Em que estudos ele se baseia?"
        ]
      },
      {
        "id": "fazenda-em-1146-2026",
        "posicao": "contrario",
        "instituicao": "Ministério da Fazenda",
        "natureza": "Órgão do governo federal que propôs o fim da taxa",
        "tipo": "Exposição de Motivos",
        "titulo": "Exposição de Motivos nº 1146/2026 (Medida Provisória nº 1.357, de 12 de maio de 2026)",
        "autores": "Dario Carnevalli Durigan, ministro da Fazenda",
        "data": "12/05/2026",
        "formato": "Página",
        "url": "https://www2.camara.leg.br/legin/fed/medpro/2026/medidaprovisoria-1357-12-maio-2026-799111-exposicaodemotivos-179369-pe.html",
        "tese": "Argumenta que reduzir o imposto sobre pequenas remessas estimula as plataformas a informar os dados das compras de forma antecipada e espontânea. Diz que o Remessa Conforme já trouxe mais transparência e rastreabilidade e que tributação menor reduz incentivos ao subfaturamento, à ocultação do remetente e ao fracionamento de encomendas. Pede flexibilidade para o ministro ajustar as alíquotas conforme o mercado mudar.",
        "premissas": [
          "Imposto alto empurra parte das compras para canais informais, onde nada é arrecadado."
        ],
        "pergunte": [
          "O documento diz que a medida não gera perda de receita, mas não apresenta números. Como isso é possível se a taxa arrecadou R$ 3,5 bilhões em 2025?"
        ]
      }
    ],
    "videos": [
      {
        "id": "h5ZOtyJyIso",
        "titulo": "Taxa das blusinhas: o que muda com o fim do imposto",
        "canal": "g1",
        "duracao": "1:30",
        "nota": "O que deixou de ser cobrado e o que continua."
      },
      {
        "id": "1U-1wQ4mBu4",
        "titulo": "Lula assina Medida Provisória que zera a taxa das blusinhas",
        "canal": "Rádio CBN",
        "duracao": "3:02",
        "nota": "A decisão de maio de 2026, explicada."
      },
      {
        "id": "Mdx1kpwR8SE",
        "titulo": "Lula sanciona fim da taxa das blusinhas para compras de até 50 dólares",
        "canal": "g1",
        "duracao": "3:09",
        "nota": "A lei que confirmou o fim do imposto."
      },
      {
        "id": "kD4va1EvbVE",
        "titulo": "Fim da taxa das blusinhas: como ficam impostos de compras internacionais?",
        "canal": "CNN Brasil Money",
        "duracao": "1:29",
        "nota": "Quanto o consumidor ainda paga de ICMS."
      },
      {
        "id": "piGjh3hMJLY",
        "titulo": "Varejo e indústria formam coalizão para impedir o fim da taxa das blusinhas",
        "canal": "Jovem Pan News",
        "duracao": "5:19",
        "nota": "O argumento das empresas brasileiras."
      },
      {
        "id": "V3jwAlR07sU",
        "titulo": "Foi um erro do governo? Os desdobramentos da taxa das blusinhas",
        "canal": "O Primo Rico",
        "duracao": "2:46",
        "nota": "Uma análise crítica do vai e vem da taxa."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/taxa-blusinhas.jpg",
      "autor": "Wilfredor",
      "licenca": "CC BY-SA 4.0",
      "licenca_url": "https://creativecommons.org/licenses/by-sa/4.0/",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Correios_Building,_S%C3%A3o_Paulo,_Brazil.jpg",
      "legenda": "Prédio histórico dos Correios no centro de São Paulo.",
      "alt": "Fachada iluminada do antigo prédio dos Correios em São Paulo, ao anoitecer",
      "posicao": "50% 45%"
    }
  },
  {
    "id": "acordo-mercosul-ue",
    "titulo": "Acordo Mercosul-União Europeia",
    "categoria": "economia",
    "tags": [
      "mercosul",
      "união europeia",
      "acordo comercial",
      "livre comércio",
      "tarifas",
      "exportações",
      "indústria",
      "agronegócio",
      "desmatamento",
      "ipea"
    ],
    "pergunta": "O acordo comercial entre Mercosul e União Europeia é bom para o Brasil?",
    "resumo": "O acordo foi assinado em janeiro de 2026 e a parte comercial vale de forma provisória desde 1º de maio. Entre maio e setembro, as exportações do Brasil para a União Europeia cresceram 30,7% sobre o mesmo período de 2025, segundo o governo.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor do acordo",
      "contrario": "Críticos do acordo"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "O acordo cria uma zona de livre comércio entre os países do Mercosul (Brasil, Argentina, Uruguai e Paraguai) e os 27 países da União Europeia, um mercado de mais de 700 milhões de pessoas. Os dois lados vão zerar, aos poucos, a maior parte das tarifas de importação. O acordo também tem regras sobre compras do governo, origem dos produtos e um capítulo de desenvolvimento sustentável, que inclui o compromisso de manter o Acordo de Paris.",
        "A negociação começou em 1999. Houve um anúncio de acordo em 2019, mas o texto travou, em parte por críticas europeias à política ambiental do Brasil. Em dezembro de 2024, os blocos fecharam uma nova versão, que deu ao Brasil mais espaço em compras públicas e uma salvaguarda para a indústria de carros.",
        "O acordo foi assinado em 17 de janeiro de 2026. Em 21 de janeiro, o Parlamento Europeu decidiu, por 334 votos a 324, pedir um parecer ao Tribunal de Justiça da União Europeia, o que adia a aprovação definitiva. Mesmo assim, a parte comercial passou a valer de forma provisória em 1º de maio de 2026 entre a União Europeia e os países do Mercosul que já tinham ratificado, entre eles o Brasil, cujo Congresso aprovou o texto em março.",
        "Os defensores dizem que o acordo abre um grande mercado, atrai investimento e beneficia o agro e parte da indústria. Os críticos dizem que os ganhos são pequenos, que a indústria brasileira perde em setores mais avançados e que o acordo reforça o papel do Brasil como exportador de matérias-primas, com risco de mais pressão sobre florestas."
      ],
      "fatos": [
        {
          "rotulo": "Exportações do Brasil à UE em 2025",
          "valor": "US$ 49,8 bilhões"
        },
        {
          "rotulo": "Alta das exportações à UE (maio a set/2026)",
          "valor": "30,7%"
        },
        {
          "rotulo": "Ganho de PIB do Brasil até 2040 (Ipea)",
          "valor": "0,46%"
        },
        {
          "rotulo": "Exportações à UE com tarifa zero já na entrada em vigor (CNI)",
          "valor": "82,7%"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Ganhos totais",
        "favoravel": "O Ipea estima que o acordo eleva o PIB do Brasil em 0,46% e o investimento em 1,49% até 2040, com o agro produzindo 2% a mais. (A1)",
        "contrario": "Até o estudo mais otimista, o do Ipea, prevê só cerca de 0,45% de PIB após 15 anos, e o acordo reforça a especialização do Brasil em produtos básicos, com empregos menos formais. (B1)",
        "fonte_favoravel": "ipea-nt68-mercosul-ue",
        "fonte_contrario": "ufrj-gic-reflexoes-mercosul-ue"
      },
      {
        "tema": "Indústria",
        "favoravel": "Já na entrada em vigor, mais de 2.700 produtos industriais brasileiros deixam de pagar tarifa na Europa, e o Mercosul tem de 8 a 15 anos para abrir a maior parte da sua indústria. (A2)",
        "contrario": "A indústria europeia gera cerca de 8 vezes mais valor que a do Mercosul, e projeções citadas mostram as exportações industriais dela crescendo 72,7%, contra 7,9% das nossas. (B2)",
        "fonte_favoravel": "cni-manual-acordo-mercosul-ue",
        "fonte_contrario": "unicamp-ufrj-industria-mercosul-ue"
      },
      {
        "tema": "Agro e regiões",
        "favoravel": "O Sul ganha logo com carnes e lácteos e o Centro-Oeste tende a ser o maior ganhador com as cotas de carne e etanol, se o país cumprir as exigências de rastreabilidade. (A3)",
        "contrario": "Ampliar a venda de produtos primários em troca de bens industriais pode perpetuar a dependência econômica, e as margens nas compras públicas não bastam sem política industrial. (B3)",
        "fonte_favoravel": "fgv-impactos-regionais-mercosul-ue",
        "fonte_contrario": "ufjf-tcc-dependencia-mercosul-ue"
      }
    ],
    "glossario": [
      {
        "termo": "Tarifa de importação",
        "definicao": "Imposto cobrado sobre um produto quando ele entra em um país. O acordo reduz essas tarifas até zero, em prazos que vão de imediato a 15 anos ou mais."
      },
      {
        "termo": "Aplicação provisória",
        "definicao": "Quando parte de um acordo começa a valer antes de todos os parlamentos aprovarem o texto final. É o caso da parte comercial desde maio de 2026."
      },
      {
        "termo": "Cota tarifária",
        "definicao": "Quantidade limitada de um produto que pode entrar com tarifa reduzida. Acima dela, paga a tarifa normal. Vale para carne, açúcar e etanol, por exemplo."
      },
      {
        "termo": "Salvaguarda",
        "definicao": "Mecanismo que permite suspender a redução de tarifas por um tempo se as importações crescerem demais e prejudicarem um setor local."
      },
      {
        "termo": "Reprimarização",
        "definicao": "Quando a economia passa a depender mais de produtos básicos, como grãos, carne e minérios, e menos de produtos industriais."
      }
    ],
    "incertezas": [
      "Quando o Tribunal de Justiça da União Europeia vai dar seu parecer e se ele pode mudar ou atrasar a aprovação definitiva do acordo.",
      "Se a alta das exportações desde maio de 2026 vem do acordo ou de outros fatores, como preços de commodities e a situação do comércio mundial.",
      "Se as regras europeias contra produtos ligados ao desmatamento, previstas para janeiro de 2027, vão limitar os ganhos do agro brasileiro."
    ],
    "fontes": [
      {
        "titulo": "Poder360: Vendas do Brasil para a UE sobem 31% após acordo (14/10/2026)",
        "url": "https://www.poder360.com.br/poder-economia/vendas-do-brasil-para-a-ue-sobem-31-apos-acordo/"
      },
      {
        "titulo": "Band: Acordo provisório Mercosul-UE entrará em vigor em 1º de maio, diz governo (25/03/2026)",
        "url": "https://www.band.com.br/economia/noticias/acordo-provisorio-mercosul-ue-entrara-em-vigor-em-1-de-maio-diz-governo-202603250734"
      },
      {
        "titulo": "Mercado & Consumo: Parlamento Europeu pede parecer judicial e freia processo de ratificação do acordo (21/01/2026)",
        "url": "https://mercadoeconsumo.com.br/21/01/2026/economia/mercosul-ue-parlamento-europeu-pede-parecer-judicial-e-freia-processo-de-ratificacao-do-acordo/"
      }
    ],
    "leituras": [
      {
        "id": "ipea-nt68-mercosul-ue",
        "posicao": "favoravel",
        "instituicao": "Ipea (com pesquisadores da UFJF)",
        "natureza": "Instituto público de pesquisa ligado ao governo federal; dois dos autores são professores da Universidade Federal de Juiz de Fora",
        "tipo": "Nota técnica",
        "titulo": "Avaliação dos impactos do acordo de livre comércio Mercosul-União Europeia",
        "autores": "Fernando José da Silva Paiva Ribeiro, Admir Antonio Betarelli Junior e Weslem Rodrigues Faria",
        "data": "12/2023",
        "formato": "PDF",
        "url": "https://repositorio.ipea.gov.br/bitstream/11058/12718/1/NT_68_Dinte_Avaliacao_dos_impactos.pdf",
        "tese": "Simula a redução de tarifas e as cotas entre 2024 e 2040 com um modelo da economia mundial. O PIB do Brasil cresceria 0,46% a mais, cerca de US$ 9,3 bilhões, e o investimento 1,49%. O agronegócio aumentaria a produção em 2%, cerca de US$ 11 bilhões. A indústria como um todo quase não muda, mas setores como veículos, máquinas e têxteis perdem produção.",
        "numero": {
          "valor": "+0,46%",
          "legenda": "no PIB do Brasil até 2040, frente a um cenário sem acordo"
        },
        "premissas": [
          "O modelo, calibrado com dados de 2014, representa bem a economia de hoje.",
          "As cotas de exportação serão usadas de forma plena."
        ],
        "pergunte": [
          "Um ganho de 0,46% do PIB em 16 anos é grande ou pequeno?",
          "Quem trabalha nos setores industriais que perdem vai conseguir emprego nos que ganham?"
        ]
      },
      {
        "id": "cni-manual-acordo-mercosul-ue",
        "posicao": "favoravel",
        "instituicao": "CNI",
        "natureza": "Confederação Nacional da Indústria, entidade privada que representa empresas industriais; apoia o acordo",
        "tipo": "Manual",
        "titulo": "Manual do Acordo de Parceria Mercosul-União Europeia",
        "autores": "Confederação Nacional da Indústria, Superintendência de Relações Internacionais",
        "data": "2026",
        "formato": "PDF",
        "url": "https://static.portaldaindustria.com.br/media/filer_public/11/d1/11d1dc18-c56e-42f9-b67e-e59bfb13f994/manual_do_acordo_mercosul-ue_cni_sri_gcii.pdf",
        "tese": "A CNI chama o texto de o acordo mais impactante já negociado pelo Mercosul. Já na entrada em vigor, 82,7% do que o Brasil exportou à União Europeia em 2024, cerca de US$ 40,1 bilhões, passa a ter tarifa zero, e mais de 2.700 produtos industriais deixam de pagar imposto. Do lado do Mercosul, a abertura é mais lenta: cerca de 60% dos bens industriais levam de 8 a 15 anos para chegar a tarifa zero, o que dá tempo para a indústria se ajustar. Compras do SUS ficaram de fora.",
        "numero": {
          "valor": "82,7%",
          "legenda": "das exportações do Brasil à UE com tarifa zero já na entrada em vigor"
        },
        "premissas": [
          "Tarifa menor se traduz em mais vendas, sem que barreiras sanitárias ou ambientais anulem o ganho."
        ],
        "pergunte": [
          "Se tantas exportações já entram com tarifa zero, quanto o acordo de fato muda para elas?",
          "A CNI representa as empresas que vão disputar mercado com as europeias. Todos os setores ganham igualmente?"
        ]
      },
      {
        "id": "fgv-impactos-regionais-mercosul-ue",
        "posicao": "favoravel",
        "instituicao": "FGV (Blog do Ibre)",
        "natureza": "Fundação privada de ensino e pesquisa; o texto expressa a opinião dos autores, não da FGV",
        "tipo": "Artigo",
        "titulo": "Avaliando os impactos regionais no Brasil do acordo Mercosul–União Europeia",
        "autores": "Flávio Ataliba Barreto, Thiago de Araújo Freitas, João Mário Santos de França e Pedro Avelino",
        "data": "2026",
        "formato": "PDF",
        "url": "https://blogdoibre.fgv.br/sites/blogdoibre.fgv.br/files/u139/mercosul-uniao_europeia_0.pdf",
        "tese": "Vê o acordo como uma oportunidade, mas condicionada. O Sul deve ganhar logo, com carnes, alimentos e lácteos, e o Centro-Oeste tende a ser o maior ganhador no longo prazo, com as cotas de carne e etanol. O Sudeste tem saldo misto, com ganhos em café, suco de laranja e aviões e mais concorrência em remédios, carros e máquinas. O maior obstáculo não são as tarifas, mas as exigências técnicas e ambientais europeias.",
        "numero": {
          "valor": "até 97,5%",
          "legenda": "de alta nas exportações à UE se metade das barreiras não tarifárias fosse harmonizada, segundo estudo citado"
        },
        "premissas": [
          "O Brasil fará políticas de apoio, como crédito mais barato, logística e rastreabilidade."
        ],
        "pergunte": [
          "Pequenas e médias empresas conseguem pagar os custos de certificação para vender na Europa?"
        ]
      },
      {
        "id": "ufrj-gic-reflexoes-mercosul-ue",
        "posicao": "contrario",
        "instituicao": "UFRJ (Instituto de Economia, GIC)",
        "natureza": "Universidade pública; Grupo de Indústria e Competitividade, de linha desenvolvimentista",
        "tipo": "Nota técnica",
        "titulo": "Reflexões acerca dos impactos do acordo Mercosul - União Europeia",
        "autores": "Marta Castilho, Kethelyn Ferreira e João Braga",
        "data": "12/2024",
        "formato": "PDF",
        "url": "https://www.ie.ufrj.br/images/IE/grupos/GIC/publica%C3%A7%C3%B5es/2024/Nota%20UE-MS%20VF_RESUMO.pdf",
        "tese": "Argumenta que o acordo reforça uma especialização regressiva do Mercosul em produtos de recursos naturais. O Mercosul vai eliminar 91% das tarifas sobre importados europeus, como carros, máquinas, químicos e remédios. Os empregos ligados à exportação tendem a ser menos formais e pior pagos que os ameaçados pelas importações, e a expansão agrícola pode elevar as emissões. A versão de 2024 dá mais espaço à política industrial, mas não reverte as perdas.",
        "numero": {
          "valor": "US$ 15,2 bilhões",
          "legenda": "de déficit do Brasil com a UE em produtos manufaturados em 2019"
        },
        "premissas": [
          "Exportar produtos industriais mais sofisticados é essencial para o desenvolvimento de longo prazo."
        ],
        "pergunte": [
          "Sem o acordo, a indústria brasileira ficaria mais competitiva ou só mais protegida?"
        ]
      },
      {
        "id": "unicamp-ufrj-industria-mercosul-ue",
        "posicao": "contrario",
        "instituicao": "Unicamp e UFRJ (Institutos de Economia)",
        "natureza": "Universidades públicas; autores de linha desenvolvimentista que estudam política industrial",
        "tipo": "Artigo científico",
        "titulo": "Impactos do Acordo Mercosul e União Europeia sobre a Indústria Brasileira",
        "autores": "Fernando Sarti (Unicamp) e Marta Castilho (UFRJ)",
        "data": "2021",
        "formato": "PDF",
        "url": "https://pdf.blucher.com.br/engineeringproceedings/v-enei/731.pdf",
        "tese": "Mostra que a disputa é desigual: em 2019, a indústria da União Europeia gerava cerca de 8 vezes mais valor que a do Mercosul. Um estudo da LSE citado projeta as exportações industriais europeias ao Mercosul crescendo 72,7%, contra 7,9% no sentido contrário. Os autores dizem que as regras de compras públicas, propriedade intelectual e investimento limitam políticas industriais ativas e reforçam a especialização regressiva do Brasil.",
        "numero": {
          "valor": "72,7% x 7,9%",
          "legenda": "alta projetada das exportações industriais da UE ao Mercosul e do Mercosul à UE (cenário conservador da LSE)"
        },
        "premissas": [
          "A política industrial ativa é o caminho para recuperar a indústria brasileira."
        ],
        "pergunte": [
          "O texto analisa a versão de 2019. As mudanças de 2024 em compras públicas e carros respondem a essas críticas?"
        ]
      },
      {
        "id": "ufjf-tcc-dependencia-mercosul-ue",
        "posicao": "contrario",
        "instituicao": "UFJF (campus Governador Valadares)",
        "natureza": "Universidade pública; trabalho de conclusão de curso de graduação em Direito, de base estruturalista",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "O Acordo Mercosul-União Europeia e a Perpetuação da Divisão Internacional do Trabalho: Entre o Livre Comércio ou a Dependência Econômica",
        "autores": "Sérgio Augusto Fonseca Figueiredo (orientação de Luciana Tasse Ferreira)",
        "data": "2025",
        "formato": "PDF",
        "url": "https://repositorio.ufjf.br/jspui/bitstream/ufjf/18510/1/sergioaugustofonsecafigueiredo.pdf",
        "tese": "Com base em Prebisch e Furtado, argumenta que o acordo pode funcionar como um mecanismo de perpetuação da dependência econômica. A abertura para bens industriais europeus é mais demorada, mas acontece, enquanto o Mercosul segue vendendo produtos primários. As margens de preferência nas compras públicas, de até 10% ou 25% para pequenas empresas, são vistas como avanço, mas insuficiente sem uma política de industrialização e tecnologia.",
        "premissas": [
          "Trocar produtos primários por industriais tende a desfavorecer quem exporta os primários."
        ],
        "pergunte": [
          "A teoria da dependência, dos anos 1950, explica bem o comércio de hoje, em que o agro também usa muita tecnologia?"
        ]
      }
    ],
    "videos": [
      {
        "id": "pBsb1JsQ29w",
        "titulo": "Entenda o acordo Mercosul-UE, que entra em vigor de forma provisória",
        "canal": "CNN Brasil",
        "duracao": "3:23",
        "nota": "O básico do acordo e do que já vale."
      },
      {
        "id": "x0b23usx21g",
        "titulo": "Acordo Mercosul e União Europeia começou: pontos positivos e negativos",
        "canal": "Professor Ricardo Marcílio",
        "duracao": "16:27",
        "nota": "Aula com os ganhos e os riscos para o Brasil."
      },
      {
        "id": "KFidjBuTJck",
        "titulo": "Principais ganhos do acordo Mercosul-UE estão no agro",
        "canal": "CNN Brasil Money",
        "duracao": "9:48",
        "nota": "Quem mais ganha, segundo um especialista."
      },
      {
        "id": "GY_lTpWHmB4",
        "titulo": "Salvaguardas no acordo Mercosul-UE limitam interesses brasileiros",
        "canal": "CNN Brasil Money",
        "duracao": "9:54",
        "nota": "As cláusulas que podem frear os ganhos."
      },
      {
        "id": "Isir5TMaqxs",
        "titulo": "Acordo Mercosul-UE: agora que entrou em vigor, quais os próximos passos?",
        "canal": "Confederação Nacional da Indústria",
        "duracao": "2:31",
        "nota": "A visão da indústria, que apoia o acordo."
      },
      {
        "id": "VD71o_gHYN8",
        "titulo": "Abimaq alerta que acordo Mercosul-UE é risco para a indústria",
        "canal": "Jovem Pan FM",
        "duracao": "1:21",
        "nota": "A preocupação dos fabricantes de máquinas."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/acordo-mercosul-ue.jpg",
      "autor": "Claus Bunks",
      "licenca": "CC BY 3.0",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Port_Santos.jpg",
      "legenda": "Terminal de contêineres no Porto de Santos (SP).",
      "alt": "Guindastes e contêineres coloridos ao lado de um navio no Porto de Santos",
      "posicao": "50% 50%"
    }
  },
  {
    "id": "pec-seguranca-publica",
    "titulo": "PEC da Segurança Pública",
    "categoria": "seguranca",
    "tags": [
      "pec da segurança",
      "pec 18/2025",
      "susp",
      "segurança pública",
      "polícia federal",
      "prf",
      "governadores",
      "crime organizado",
      "facções",
      "federalismo"
    ],
    "pergunta": "A União deve ganhar mais poder para coordenar a segurança pública?",
    "resumo": "A PEC 18/2025 põe na Constituição o Sistema Único de Segurança Pública e amplia o papel do governo federal no combate ao crime organizado. Aprovada na Câmara por 461 a 14 em março de 2026, passou na CCJ do Senado em 14 de outubro, mas foi retirada da pauta do plenário no dia seguinte por falta de acordo.",
    "atualizado": "2026-10-16",
    "rotulos": {
      "favoravel": "A favor de mais coordenação federal",
      "contrario": "Contra mais poder para a União"
    },
    "contexto": {
      "titulo": "O que está em debate",
      "paragrafos": [
        "Pela Constituição de 1988, quem cuida da maior parte da segurança pública são os estados, que comandam as polícias militar e civil. A União tem a Polícia Federal e a Polícia Rodoviária Federal, e os municípios têm as guardas. A PEC 18/2025, enviada pelo governo Lula em abril de 2025, quer dar à União um papel maior de coordenação, pôr na Constituição o Sistema Único de Segurança Pública (SUSP) e os fundos nacionais de segurança e penitenciário.",
        "O SUSP já existe por lei desde 2018, mas avançou pouco. O governo argumenta que facções como PCC e Comando Vermelho atuam no país inteiro e que polícias estaduais isoladas não dão conta. Na Câmara, o relator Mendonça Filho (União-PE) retirou o trecho que dava à União o poder exclusivo de fazer normas gerais de segurança, ponto mais criticado pelos governadores. Ele também incluiu penas mais duras para membros de facções, a criação de polícias municipais e a ampliação da PRF para ferrovias e hidrovias.",
        "A Câmara aprovou o texto em 4 de março de 2026, por 487 a 15 no primeiro turno e 461 a 14 no segundo. No Senado, a CCJ aprovou o parecer do relator Rogério Carvalho (PT-SE) e concluiu a votação em 14 de outubro. No dia 15, o presidente do Senado, Davi Alcolumbre, retirou a PEC da pauta do plenário, sem nova data, depois de divergências sobre emendas para reduzir a maioridade penal. A PEC precisa de 49 votos em dois turnos e, se o Senado mudar o texto, volta para a Câmara.",
        "Quem defende diz que o crime organizado é nacional e que falta um comando que integre dados, metas e operações entre as mais de 1.500 instituições de segurança do país. Quem critica, como governadores do Sul e do Sudeste, diz que a PEC centraliza poder em Brasília, ameaça a autonomia das polícias estaduais e não traz dinheiro novo suficiente para quem faz o policiamento no dia a dia."
      ],
      "fatos": [
        {
          "rotulo": "Votos na Câmara (2º turno, mar/2026)",
          "valor": "461 a 14"
        },
        {
          "rotulo": "Votos necessários no Senado",
          "valor": "49 em cada turno"
        },
        {
          "rotulo": "Instituições de segurança previstas na Constituição (Esfera/FBSP)",
          "valor": "1.595"
        },
        {
          "rotulo": "Facções ligadas ao narcotráfico (Senappen, via Esfera/FBSP)",
          "valor": "72"
        }
      ]
    },
    "pontos": [
      {
        "tema": "Crime organizado",
        "favoravel": "Estudo da Esfera Brasil com o FBSP conta 72 facções ligadas ao tráfico e 1.595 instituições de segurança sem mecanismos formais de coordenação, metas ou prioridades comuns. (A2)",
        "contrario": "Para o Le Monde Diplomatique Brasil, o problema é real, mas resultados dependem mais da qualidade da cooperação entre governos do que de concentrar competências na União. (B2)",
        "fonte_favoravel": "esfera-fbsp-crime-organizado",
        "fonte_contrario": "diplomatique-centralizacao-seguranca"
      },
      {
        "tema": "Autonomia dos estados",
        "favoravel": "O Instituto Sou da Paz avalia que a PEC dá à União a coordenação estratégica do SUSP sem tirar dos estados o comando das polícias civil e militar. (A3)",
        "contrario": "Os sete governadores do Cosud pedem que as polícias continuem subordinadas a eles e que a União atue de forma complementar, e nunca substitutiva. (B1)",
        "fonte_favoravel": "soudapaz-o-que-esperar-pec",
        "fonte_contrario": "cosud-carta-rio-2025"
      },
      {
        "tema": "Novas funções federais",
        "favoravel": "O relator no Senado diz que o modelo descentralizado deixou as facções crescerem e que ampliar a PRF para ferrovias e hidrovias é mais rápido e barato que criar outra polícia. (A1)",
        "contrario": "A Cobrapol afirma que a PEC amplia a Polícia Federal sem metas nem investimento, enquanto as polícias estaduais, que enfrentam a maior parte do crime, seguem sem recursos. (B3)",
        "fonte_favoravel": "senado-ccj-parecer-pec18",
        "fonte_contrario": "cobrapol-centralizacao-sem-solucao"
      }
    ],
    "glossario": [
      {
        "termo": "PEC",
        "definicao": "Proposta de Emenda à Constituição. Precisa de 3/5 dos votos em dois turnos na Câmara (308) e no Senado (49)."
      },
      {
        "termo": "SUSP",
        "definicao": "Sistema Único de Segurança Pública. Criado pela Lei 13.675/2018 para integrar polícias, dados e planos da União, dos estados e dos municípios, inspirado no SUS."
      },
      {
        "termo": "FNSP e Funpen",
        "definicao": "Fundo Nacional de Segurança Pública e Fundo Penitenciário Nacional. Repassam dinheiro federal a estados para segurança e presídios."
      },
      {
        "termo": "Competência concorrente",
        "definicao": "Quando União e estados podem fazer leis sobre o mesmo assunto. A União faz as normas gerais e os estados detalham."
      },
      {
        "termo": "Cosud",
        "definicao": "Consórcio de Integração Sul e Sudeste, que reúne os governadores de SP, RJ, MG, ES, PR, SC e RS."
      }
    ],
    "incertezas": [
      "Se a coordenação federal reduz crimes na prática. O SUSP existe desde 2018 e há pouca avaliação de resultado.",
      "Se a PEC será votada no Senado e em que versão, já que mudanças no texto obrigam nova votação na Câmara.",
      "Quanto dinheiro novo chegará de fato a estados e municípios, depois que a fonte das apostas on-line saiu do texto."
    ],
    "fontes": [
      {
        "titulo": "Diario de Pernambuco: Câmara aprova PEC da Segurança Pública; texto vai ao Senado (04/03/2026)",
        "url": "https://www.diariodepernambuco.com.br/politica/2026/03/11709138-camara-aprova-pec-da-seguranca-publica-texto-vai-ao-senado.html"
      },
      {
        "titulo": "Congresso em Foco: CCJ conclui votação da PEC da Segurança e envia texto ao plenário (14/10/2026)",
        "url": "https://www.congressoemfoco.com.br/noticia/123231/ccj-conclui-votacao-da-pec-da-seguranca-e-envia-texto-ao-plenario"
      },
      {
        "titulo": "O Tempo: Alcolumbre retira PEC da Segurança Pública da pauta do Senado após divergências sobre texto (15/10/2026)",
        "url": "https://www.otempo.com.br/politica/congresso/2026/10/15/alcolumbre-retira-pec-da-seguranca-publica-da-pauta-do-senado-apos-divergencias-sobre-texto"
      }
    ],
    "leituras": [
      {
        "id": "senado-ccj-parecer-pec18",
        "posicao": "favoravel",
        "instituicao": "Senado Federal (CCJ)",
        "natureza": "Parecer de relator na Comissão de Constituição e Justiça; relator do PT, partido do governo que propôs a PEC",
        "tipo": "Parecer legislativo",
        "titulo": "Parecer da CCJ sobre a Proposta de Emenda à Constituição nº 18, de 2025",
        "autores": "Senador Rogério Carvalho (PT-SE), relator",
        "data": "09/2026",
        "formato": "PDF",
        "url": "https://static.poder360.com.br/uploads/2026/09/parecer-pec-seguranca.pdf",
        "tese": "Diz que a crise atual vem da expansão do domínio territorial das facções, nascidas em presídios estaduais, e que o modelo muito descentralizado de 1988 deixou isso crescer. Defende que é preciso pôr os entes federados e as polícias para colaborarem entre si, não para competirem. Apoia o SUSP na Constituição, com forças-tarefa, troca de informações e sistemas integrados. Considera ampliar a PRF para ferrovias e hidrovias mais rápido e barato do que criar uma nova polícia.",
        "numero": {
          "valor": "50%",
          "legenda": "do FNSP e do Funpen teriam de ser repassados pela União a estados e DF, pelo texto analisado"
        },
        "premissas": [
          "A falta de integração entre polícias é uma causa importante do avanço das facções."
        ],
        "pergunte": [
          "O parecer não traz dados de crime. Que evidência mostra que mais integração federal reduz a violência?",
          "O relator é do partido do governo. Como os pontos rejeitados por ele seriam vistos por um relator da oposição?"
        ]
      },
      {
        "id": "esfera-fbsp-crime-organizado",
        "posicao": "favoravel",
        "instituicao": "Esfera Brasil e Fórum Brasileiro de Segurança Pública",
        "natureza": "Esfera Brasil é um think tank ligado a empresários; o FBSP é uma ONG de pesquisa em segurança pública, apartidária",
        "tipo": "Estudo",
        "titulo": "Estudo inédito reúne dados sobre reflexos do crime organizado",
        "autores": "Esfera Brasil e FBSP (texto de Nina Gattis e Andrezza Pugliesi)",
        "data": "07/2024",
        "formato": "Página",
        "url": "https://esferabrasil.com.br/artigos/estudo-inedito-reune-dados-sobre-reflexos-do-crime-organizado/",
        "tese": "Mapeia o crime organizado no Brasil: 72 facções ligadas ao narcotráfico e fluxos ilícitos de pelo menos 20 produtos. Conclui que não há mecanismos formais de coordenação com metas e prioridades comuns entre os órgãos do Estado, nem uma coordenação federativa capaz de integrar informações. Defende que a segurança seja tarefa compartilhada entre União, estados, DF e municípios.",
        "numero": {
          "valor": "1.595",
          "legenda": "instituições de segurança pública previstas na Constituição, sem coordenação formal entre elas"
        },
        "premissas": [
          "O crime organizado atua em escala nacional e internacional, além do alcance de cada estado."
        ],
        "pergunte": [
          "Falta de coordenação se resolve com mais poder para a União ou com acordos entre os estados?"
        ]
      },
      {
        "id": "soudapaz-o-que-esperar-pec",
        "posicao": "favoravel",
        "instituicao": "Instituto Sou da Paz",
        "natureza": "ONG de São Paulo que atua em segurança pública e controle de armas; costuma ser vista como progressista",
        "tipo": "Artigo de opinião",
        "titulo": "O que esperar da PEC da segurança pública?",
        "autores": "Carolina Ricardo (diretora-executiva do Instituto Sou da Paz)",
        "data": "14/05/2025",
        "formato": "Página",
        "url": "https://www.poder360.com.br/opiniao/o-que-esperar-da-pec-da-seguranca-publica/",
        "tese": "Avalia que a PEC não é péssima nem excelente, mas abre um debate necessário e aumenta o papel do governo federal. Afirma que a União passa a ter a coordenação estratégica do SUSP sem sobrepor a autonomia dos estados sobre as polícias civil e militar. Elogia pôr os fundos na Constituição e criar corregedorias e ouvidorias autônomas. Alerta que ampliar PF, PRF e guardas pode gerar disputas entre corporações.",
        "premissas": [
          "Coordenar estratégia é diferente de comandar as polícias estaduais."
        ],
        "pergunte": [
          "Se a União só coordena, sem mandar, o que muda de fato em relação ao SUSP de 2018?"
        ]
      },
      {
        "id": "cosud-carta-rio-2025",
        "posicao": "contrario",
        "instituicao": "Cosud (governadores do Sul e Sudeste)",
        "natureza": "Consórcio de sete governos estaduais; a maioria dos governadores é de oposição ao governo Lula",
        "tipo": "Carta institucional",
        "titulo": "Carta do Rio de Janeiro (Carta dos Governadores, 14ª edição do Cosud)",
        "autores": "Cláudio Castro, Renato Casagrande, Tarcísio de Freitas, Romeu Zema, Eduardo Leite, Ratinho Júnior e Jorginho Mello",
        "data": "06/12/2025",
        "formato": "PDF",
        "url": "https://www.parana.pr.gov.br/sites/default/arquivos_restritos/files/documento/2025-12/carta_dos_governadores_-_4_0.pdf",
        "tese": "Os governadores pedem participação plena no debate da PEC 18/2025, porque os estados executam o policiamento, as investigações, a custódia e os presídios. Defendem preservar a autonomia das polícias estaduais e mantê-las subordinadas aos governadores. Querem que a União atue de forma complementar, e nunca substitutiva, e pedem compensação financeira pelos gastos estaduais com crimes federais.",
        "numero": {
          "valor": "70%",
          "legenda": "da produção econômica do país está nos sete estados que assinam a carta"
        },
        "premissas": [
          "Quem executa a segurança deve ter o poder de decidir sobre ela."
        ],
        "pergunte": [
          "A carta defende autonomia, mas também pede mais dinheiro federal. Dá para receber mais recursos sem aceitar mais coordenação?"
        ]
      },
      {
        "id": "diplomatique-centralizacao-seguranca",
        "posicao": "contrario",
        "instituicao": "Le Monde Diplomatique Brasil",
        "natureza": "Revista de análise política de linha progressista; autor é consultor em direitos humanos no Congresso",
        "tipo": "Artigo de análise",
        "titulo": "O projeto de centralização da segurança pública no Brasil",
        "autores": "Matheus Rojja Fernandes",
        "data": "28/07/2025",
        "formato": "Página",
        "url": "https://diplomatique.org.br/a-pec-de-centralizacao-da-seguranca-publica-no-brasil/",
        "tese": "Concorda que falta coordenação entre os entes, mas diz que o defeito central da PEC é apostar em centralização excessiva em vez de cooperação. Critica a competência exclusiva da União para legislar sobre segurança e o aumento das tarefas da PF, que é bem menor que as polícias civis estaduais. Argumenta que bons resultados dependem mais da qualidade da coordenação entre governos do que da concentração de competências.",
        "numero": {
          "valor": "R$ 250 milhões",
          "legenda": "custo estimado de transformar a PRF em Polícia Viária Federal, sem ganho operacional, segundo o relator citado"
        },
        "premissas": [
          "Os estados têm experiência policial que se perde quando o poder é concentrado."
        ],
        "pergunte": [
          "O texto analisa a versão de julho de 2025. A retirada da competência exclusiva da União resolve a crítica?"
        ]
      },
      {
        "id": "cobrapol-centralizacao-sem-solucao",
        "posicao": "contrario",
        "instituicao": "Cobrapol (Confederação Brasileira dos Policiais Civis)",
        "natureza": "Entidade sindical que representa policiais civis estaduais; defende interesses da categoria",
        "tipo": "Artigo de opinião",
        "titulo": "PEC da segurança pública: centralização sem solução",
        "autores": "Leandro Barbosa de Almeida (vice-presidente da Cobrapol)",
        "data": "11/05/2025",
        "formato": "Página",
        "url": "https://www.poder360.com.br/opiniao/pec-da-seguranca-publica-centralizacao-sem-solucao/",
        "tese": "Diz que a PEC reforça o controle federal sobre os órgãos estaduais sem criar mecanismos reais de integração. Vê como objetivo principal ampliar o papel da Polícia Federal, sem metas, investimento ou transparência. Afirma que as polícias estaduais, que enfrentam a maior parte do crime no dia a dia, seguem com estruturas antigas e pouco dinheiro, e que os fundos na Constituição não têm percentual mínimo, como saúde e educação.",
        "premissas": [
          "O gargalo da segurança é falta de recursos nas polícias estaduais, não falta de comando federal."
        ],
        "pergunte": [
          "A entidade representa policiais civis. Até que ponto a crítica reflete disputa com a Polícia Federal?"
        ]
      }
    ],
    "videos": [
      {
        "id": "owdbNaHxv-c",
        "titulo": "PEC da Segurança: entenda o que pode mudar com a aprovação",
        "canal": "CNN Brasil",
        "duracao": "7:27",
        "nota": "As principais mudanças da proposta."
      },
      {
        "id": "P3dETHu3PM8",
        "titulo": "Senado deve votar PEC da Segurança Pública; entenda o que pode mudar",
        "canal": "Rádio CBN",
        "duracao": "3:20",
        "nota": "Resumo às vésperas da votação."
      },
      {
        "id": "_aa-RkvtGN4",
        "titulo": "Alcolumbre tira da pauta a PEC da Segurança Pública",
        "canal": "g1",
        "duracao": "4:19",
        "nota": "Por que a votação foi adiada em outubro de 2026."
      },
      {
        "id": "BjMwASBQAes",
        "titulo": "Entenda detalhes da PEC da Segurança Pública; especialista explica",
        "canal": "Jovem Pan News",
        "duracao": "14:03",
        "nota": "Um especialista comenta o texto enviado pelo governo."
      },
      {
        "id": "pK4R7eAOlA4",
        "titulo": "Governadores de SP e GO criticam PEC da Segurança Pública",
        "canal": "Record News",
        "duracao": "3:00",
        "nota": "A crítica dos estados à centralização."
      },
      {
        "id": "6gHYWtQZLA4",
        "titulo": "Lula x crime organizado: a nova estratégia do governo para a segurança",
        "canal": "Cortes do Flow",
        "duracao": "9:00",
        "nota": "Conversa sobre a aposta do governo federal."
      }
    ],
    "imagem": {
      "arquivo": "img/temas/pec-seguranca-publica.jpg",
      "autor": "Antonio Cruz/Agência Brasil",
      "licenca": "CC BY 3.0 BR",
      "licenca_url": "https://creativecommons.org/licenses/by/3.0/br/",
      "fonte_url": "https://commons.wikimedia.org/wiki/File:Brazilian_Federal_Highway_Police_2.jpg",
      "legenda": "Agentes da Polícia Rodoviária Federal em operação numa rodovia do Distrito Federal.",
      "alt": "Dois policiais rodoviários federais sinalizam carros numa rodovia com cones",
      "posicao": "50% 50%"
    }
  }
];
