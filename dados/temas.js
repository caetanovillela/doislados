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
  }
];
