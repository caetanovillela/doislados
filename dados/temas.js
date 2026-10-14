/*
  Conteúdo do site. O layout (app.js e style.css) não precisa mudar para adicionar conteúdo.

  EM_ALTA: o assunto em destaque no topo da página inicial. Troque quando outro tema esquentar.
    tema   id do tema que o botão abre
    data   quando aconteceu (aparece no selo)

  CATEGORIAS: lista de categorias usadas nos filtros da página inicial.

  TEMAS: cada tema tem
    categoria   id de uma categoria acima
    tags        palavras extras que a busca encontra
    emBreve     true para mostrar o tema como "em preparação"
    rotulos     nome de cada lado (lado A = "favoravel", lado B = "contrario")
    contexto, pontos, glossario, incertezas, fontes
    leituras    textos de instituições: posicao ("favoravel" | "contrario"), instituicao, natureza,
                tipo, titulo, autores, data, formato, url, tese, numero, premissas, pergunte
    videos      { id: código do YouTube (o que vem depois de watch?v=), lado ("favoravel" ou "contrario"), titulo, canal, nota, duracao opcional }
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
    "nome": "Trabalho"
  },
  {
    "id": "economia",
    "nome": "Economia"
  },
  {
    "id": "seguranca",
    "nome": "Segurança pública"
  },
  {
    "id": "educacao",
    "nome": "Educação"
  },
  {
    "id": "cidades",
    "nome": "Cidades e transporte"
  },
  {
    "id": "assistencia",
    "nome": "Assistência social"
  },
  {
    "id": "direitos",
    "nome": "Direitos e liberdades"
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
        "tema": "Saúde e vida pessoal",
        "favoravel": "Um dia de folga não basta para descansar, cuidar da casa e conviver com a família.",
        "contrario": "Concorda que o descanso importa, mas defende que isso seja resolvido em acordos por setor."
      },
      {
        "tema": "Emprego",
        "favoravel": "Menos horas por pessoa exigem mais contratações para cobrir a mesma operação.",
        "contrario": "O custo maior pode levar a demissões, automação e mais trabalho informal."
      },
      {
        "tema": "Custos e preços",
        "favoravel": "Trabalhadores descansados erram menos e faltam menos, o que reduz parte do custo.",
        "contrario": "Pequenos negócios teriam de contratar mais gente, e o custo iria para os preços."
      },
      {
        "tema": "Produtividade",
        "favoravel": "Testes com semana de quatro dias mostraram produção estável com menos horas.",
        "contrario": "A produtividade brasileira está estagnada há anos; reduzir horas antes de elevá-la é arriscado."
      },
      {
        "tema": "Como mudar",
        "favoravel": "Só uma regra geral protege quem tem pouco poder de negociação.",
        "contrario": "Cada setor tem uma realidade; a negociação coletiva se adapta melhor."
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
        "id": "9jLot1VITcM",
        "lado": "favoravel",
        "titulo": "Renan Santos é sincero sobre a escala 6x1",
        "canal": "Cortes do Flow",
        "nota": "O líder do MBL, de direita, explica por que apoia o fim da escala.",
        "duracao": "10:38"
      },
      {
        "id": "WvP1x1DfLs8",
        "lado": "favoravel",
        "titulo": "Michael Jackson (Lord) é sincero sobre a escala 6x1",
        "canal": "Cortes do Flow",
        "nota": "Convidado conta a rotina de quem trabalha seis dias por semana.",
        "duracao": "4:31"
      },
      {
        "id": "WW9Fnuk4oiU",
        "lado": "favoravel",
        "titulo": "O terrorismo econômico contra o fim da escala 6x1",
        "canal": "Frederico Krepe",
        "nota": "Comentarista rebate as previsões de demissões e quebradeira."
      },
      {
        "id": "jJziTJdnjrw",
        "lado": "contrario",
        "titulo": "Fim da escala 6x1 não deve trazer ganhos de produtividade, diz economista",
        "canal": "CNN Brasil",
        "nota": "Economista questiona a ideia de que folga a mais aumenta a produtividade."
      },
      {
        "id": "EcpTkixsta8",
        "lado": "contrario",
        "titulo": "Fim da escala 6x1 resultará na troca de pessoas por máquinas, diz deputado do Novo",
        "canal": "UOL",
        "nota": "Deputado do Novo diz que o custo extra vai acelerar a automação."
      },
      {
        "id": "_uZzA37vAvw",
        "lado": "contrario",
        "titulo": "Economista alerta para riscos do fim da escala 6x1 nos negócios",
        "canal": "Jovem Pan News",
        "nota": "Os efeitos sobre pequenas empresas e preços.",
        "duracao": "11:07"
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
    ]
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
        "tema": "Crescimento",
        "favoravel": "Simplificar e acabar com impostos em cascata aumenta a produtividade e o PIB.",
        "contrario": "As exceções aprovadas reduzem muito o ganho previsto."
      },
      {
        "tema": "Quem paga",
        "favoravel": "Um IVA uniforme é menos regressivo que o sistema atual, sobretudo com devolução de imposto aos mais pobres.",
        "contrario": "O sistema continua apoiado no consumo, que pesa mais para quem ganha menos."
      },
      {
        "tema": "Serviços",
        "favoravel": "O setor pagava menos que a indústria; equalizar corrige uma distorção.",
        "contrario": "Serviços usam muita mão de obra e não têm muito crédito a abater, então a carga sobe."
      },
      {
        "tema": "Estados e municípios",
        "favoravel": "A cobrança no destino acaba com a guerra fiscal e ajuda estados mais pobres.",
        "contrario": "Estados e cidades perdem autonomia para usar impostos como política de desenvolvimento."
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
        "id": "LM7bFbphX_I",
        "lado": "favoravel",
        "titulo": "A maior reforma tributária da história, com Fernando Haddad",
        "canal": "Cortes do Flow",
        "nota": "O ministro da Fazenda defende a reforma no Flow.",
        "duracao": "6:38"
      },
      {
        "id": "XKXSNKXxsUo",
        "lado": "favoravel",
        "titulo": "O que muda com a reforma tributária? Entenda com Bernard Appy",
        "canal": "Valor Econômico",
        "nota": "O principal formulador da reforma explica o novo sistema."
      },
      {
        "id": "rHPvNqN4ozY",
        "lado": "favoravel",
        "titulo": "Bernard Appy fala sobre a reforma tributária",
        "canal": "Record News",
        "nota": "Entrevista com o secretário que conduziu a reforma no governo."
      },
      {
        "id": "hBKfSw-zcdY",
        "lado": "contrario",
        "titulo": "O que não te contaram sobre a reforma tributária no Brasil",
        "canal": "Cortes do Flow",
        "nota": "Os pontos da reforma que pesam no bolso de quem consome.",
        "duracao": "8:26"
      },
      {
        "id": "VssJp5eDXsI",
        "lado": "contrario",
        "titulo": "Setor de serviços será mais impactado pela nova reforma tributária, diz especialista",
        "canal": "CNN Brasil Money",
        "nota": "Por que serviços tendem a pagar mais imposto."
      },
      {
        "id": "cXXZE8-6rFQ",
        "lado": "contrario",
        "titulo": "Livro reúne críticas e aponta riscos na reforma tributária",
        "canal": "Band Jornalismo",
        "nota": "Reportagem sobre as críticas de tributaristas ao texto aprovado."
      }
    ]
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
        "tema": "Discernimento",
        "favoravel": "Jovens de 16 e 17 anos entendem o que fazem e podem responder como adultos.",
        "contrario": "Adolescentes ainda estão em formação, e a lei deve priorizar a recuperação."
      },
      {
        "tema": "Violência",
        "favoravel": "A punição mais dura desestimularia crimes e acabaria com a sensação de impunidade.",
        "contrario": "Comparações entre países não mostram menos violência onde a idade penal é menor."
      },
      {
        "tema": "Sistema prisional",
        "favoravel": "Jovens que cometem crimes hediondos precisam de penas proporcionais.",
        "contrario": "Prisões superlotadas aproximariam adolescentes de facções criminosas."
      },
      {
        "tema": "Constituição",
        "favoravel": "A idade penal não está entre os direitos individuais e pode mudar por emenda.",
        "contrario": "O artigo 228 é uma garantia individual e, por isso, cláusula pétrea."
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
        "id": "Fc-ffSyxZcA",
        "lado": "favoravel",
        "titulo": "Derrite sobre redução da maioridade penal: “Sou 100% favorável”",
        "canal": "Jovem Pan News",
        "nota": "O ex-secretário de Segurança de SP defende a redução.",
        "duracao": "2:29"
      },
      {
        "id": "S7rCLZlJ6H8",
        "lado": "favoravel",
        "titulo": "Kim Kataguiri defende a redução da maioridade penal",
        "canal": "Rádio Bandeirantes",
        "nota": "Deputado apresenta os argumentos a favor da redução para 16 anos."
      },
      {
        "id": "vZINcut0CrM",
        "lado": "favoravel",
        "titulo": "Argumento: redução da maioridade penal, com Sérgio Souza",
        "canal": "TV Senado",
        "nota": "Parlamentar explica por que defende a mudança."
      },
      {
        "id": "xOlbW1o44R4",
        "lado": "contrario",
        "titulo": "Liberação de armas e maioridade penal no Brasil, com Reinaldo Azevedo",
        "canal": "Cortes do Flow",
        "nota": "O jornalista explica por que é contra reduzir a maioridade.",
        "duracao": "15:07"
      },
      {
        "id": "BmpWjuXtVZA",
        "lado": "contrario",
        "titulo": "Redução da maioridade penal",
        "canal": "Drauzio Varella",
        "nota": "O médico, que atendeu por anos em presídios, fala dos efeitos da prisão em jovens.",
        "duracao": "2:38"
      },
      {
        "id": "sTi55E33SSg",
        "lado": "contrario",
        "titulo": "Maioridade penal não diminui violência, mas reduziria a percepção de impunidade, diz ex-Bope",
        "canal": "UOL",
        "nota": "Ex-policial do Bope avalia o efeito real da medida sobre o crime."
      }
    ]
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
        "tema": "Quem paga",
        "favoravel": "Empresas e toda a sociedade se beneficiam do transporte, então faz sentido dividir o custo por impostos e contribuições.",
        "contrario": "A conta recai sobre empresas e orçamentos municipais que já estão apertados."
      },
      {
        "tema": "Renda",
        "favoravel": "A passagem pesa muito no orçamento dos mais pobres. Zerar a tarifa funciona como transferência de renda.",
        "contrario": "Parte do benefício vai para quem já tem vale-transporte ou poderia pagar."
      },
      {
        "tema": "Qualidade",
        "favoravel": "Pagar as empresas pelo serviço prestado, e não por passageiro, acaba com o incentivo a lotar os ônibus.",
        "contrario": "Com mais passageiros e a mesma verba, os ônibus podem ficar mais cheios e piores."
      },
      {
        "tema": "Cidade",
        "favoravel": "Menos carros na rua significa menos trânsito, poluição e acidentes.",
        "contrario": "Quem migra para o ônibus de graça muitas vezes ia a pé ou de bicicleta, e não de carro."
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
        "id": "dB9252ZQwew",
        "lado": "favoravel",
        "titulo": "Tarifa zero pode beneficiar pessoas de baixa renda e desempregados",
        "canal": "Rádio Bandeirantes",
        "nota": "Quem mais ganha com o ônibus de graça.",
        "duracao": "3:34"
      },
      {
        "id": "6-4OoR8G4jM",
        "lado": "favoravel",
        "titulo": "Tarifa zero no transporte público",
        "canal": "Senador Paulo Paim",
        "nota": "Senador defende o transporte gratuito como direito."
      },
      {
        "id": "g4Rgqyx4fro",
        "lado": "favoravel",
        "titulo": "Lúcio Gregori fala sobre a tarifa zero",
        "canal": "Coletivo Maruim",
        "nota": "O ex-secretário que criou a proposta em São Paulo explica a ideia."
      },
      {
        "id": "qVxj49bdrbU",
        "lado": "contrario",
        "titulo": "Secretário municipal explica por que projeto de tarifa zero foi rejeitado na Câmara de BH",
        "canal": "Itatiaia",
        "nota": "Os motivos financeiros que barraram a proposta em Belo Horizonte."
      },
      {
        "id": "7idbokYAhR4",
        "lado": "contrario",
        "titulo": "Tarifa zero: quais são os custos do transporte?",
        "canal": "Rádio BandNews FM",
        "nota": "Quanto custa o sistema e quem teria de pagar.",
        "duracao": "3:46"
      },
      {
        "id": "6KERqXKCzkA",
        "lado": "contrario",
        "titulo": "Vantagens e desvantagens da tarifa zero",
        "canal": "Via Trolebus",
        "nota": "Mostra os riscos: lotação, queda de qualidade e dependência do orçamento.",
        "duracao": "7:31"
      }
    ]
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
        "tema": "Pobreza",
        "favoravel": "É uma das políticas mais baratas e eficientes para reduzir a pobreza extrema.",
        "contrario": "Reduz a pobreza no curto prazo, mas não basta para tirar as famílias dela de vez."
      },
      {
        "tema": "Trabalho",
        "favoravel": "Quem sai do mercado deixa sobretudo empregos precários, e muitas vezes para cuidar dos filhos.",
        "contrario": "O valor maior reduziu a busca por emprego, sobretudo entre homens jovens."
      },
      {
        "tema": "Custo",
        "favoravel": "Custa pouco perto de outros gastos públicos e o dinheiro volta para a economia local.",
        "contrario": "O custo quadruplicou e pesa num orçamento federal apertado."
      },
      {
        "tema": "Desenho",
        "favoravel": "Os adicionais por criança focam o dinheiro em quem mais precisa.",
        "contrario": "O valor fixo por família deveria cair, e o dinheiro ir para mães de crianças pequenas e jovens que estudam."
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
        "lado": "favoravel",
        "titulo": "Bolsa Família deixa as pessoas preguiçosas? A verdade baseada em estudos",
        "canal": "Daniel Martins de Barros",
        "nota": "Psiquiatra revisa o que as pesquisas dizem sobre trabalho e benefício.",
        "duracao": "8:55"
      },
      {
        "id": "Q2vYC_GRjHs",
        "lado": "favoravel",
        "titulo": "Economista critica tese de que Bolsa Família afasta pessoas do trabalho",
        "canal": "VEJA+",
        "nota": "Economista contesta a ideia de que o benefício desestimula o emprego."
      },
      {
        "id": "KwBEofa-xBE",
        "lado": "favoravel",
        "titulo": "Luciano Huck x Bolsa Família: estudos desmentem falas sobre dependência",
        "canal": "UOL",
        "nota": "O que as pesquisas dizem sobre a dependência do programa.",
        "duracao": "12:53"
      },
      {
        "id": "dw5_IU9NoLw",
        "lado": "contrario",
        "titulo": "Cury explode sobre o aumento do Bolsa Família",
        "canal": "Cortes do Flow",
        "nota": "Crítica ao custo e ao aumento do benefício.",
        "duracao": "3:00"
      },
      {
        "id": "pJG-ls1kT24",
        "lado": "contrario",
        "titulo": "Cidade do RS mostra que o trabalho liberta da dependência do Bolsa Família",
        "canal": "Gazeta do Povo",
        "nota": "Alexandre Garcia comenta o caso de Bento Gonçalves, que trocou benefícios por emprego."
      },
      {
        "id": "3gqvU4wIcWs",
        "lado": "contrario",
        "titulo": "Não há estímulo para sair do Bolsa Família, diz Luciano Huck",
        "canal": "Poder360",
        "nota": "A fala que reacendeu o debate sobre as portas de saída do programa."
      }
    ]
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
    "atualizado": "2026-10-14",
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
        "tema": "Defesa",
        "favoravel": "O Estado não consegue proteger todo mundo o tempo todo. A arma dá ao cidadão uma chance de se defender.",
        "contrario": "Reagir armado a um assalto aumenta o risco de morrer, e a arma em casa costuma ser usada em brigas, feminicídios e suicídios."
      },
      {
        "tema": "Homicídios",
        "favoravel": "Os homicídios caíram justamente no período em que o acesso a armas foi ampliado.",
        "contrario": "Estudos com dados brasileiros mostram que mais armas em circulação andam junto com mais homicídios."
      },
      {
        "tema": "Crime organizado",
        "favoravel": "Bandido não compra arma em loja. Restringir o acesso legal só desarma quem segue a lei.",
        "contrario": "Armas compradas legalmente, sobretudo por CACs, acabaram desviadas para facções."
      },
      {
        "tema": "Vontade popular",
        "favoravel": "A maioria votou no referendo de 2005 para manter o direito de comprar armas.",
        "contrario": "O referendo tratou da venda, não da quantidade de armas e munição liberada depois por decreto."
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
        "id": "referendo-2005",
        "posicao": "favoravel",
        "instituicao": "TSE",
        "natureza": "Resultado oficial do referendo, noticiado pela imprensa",
        "tipo": "Dado oficial",
        "titulo": "Referendo de 2005: diferença final do Não foi de quase 26 milhões de votos",
        "autores": "Congresso em Foco, com dados do Tribunal Superior Eleitoral",
        "data": "24/10/2005",
        "formato": "Página",
        "url": "https://www.congressoemfoco.com.br/noticia/103497/referendo-diferenca-final-do-nao-foi-de-quase-26-milhoes-de-votos",
        "tese": "A maioria votou contra proibir a venda de armas, e o Não ganhou em todos os estados. Para quem defende o acesso, é a prova de que a população quer manter o direito de se defender.",
        "numero": {
          "valor": "63,94%",
          "legenda": "dos votos válidos foram contra proibir a venda de armas"
        },
        "premissas": [
          "Uma votação popular deve orientar as regras sobre armas."
        ],
        "pergunte": [
          "A pergunta de 2005 era sobre proibir a venda. Ela diz algo sobre quantas armas cada pessoa deve poder ter?"
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
      }
    ],
    "videos": [
      {
        "id": "5a75td96eRY",
        "lado": "favoravel",
        "titulo": "A verdade sobre legítima defesa, com Bene Barbosa no Flow",
        "canal": "Mundo dos Cortes",
        "nota": "O principal defensor do armamento civil no país explica seu argumento.",
        "duracao": "7:32"
      },
      {
        "id": "0XB4c71GPPc",
        "lado": "favoravel",
        "titulo": "Porte de armas: as pessoas querem, mas não podem",
        "canal": "Nada ProLixo Cortes",
        "nota": "Bene Barbosa no Flow critica as barreiras para andar armado.",
        "duracao": "5:30"
      },
      {
        "id": "xxXdY5in8s0",
        "lado": "favoravel",
        "titulo": "“Temos um avanço no direito de defesa do cidadão”, diz especialista sobre decreto de armas",
        "canal": "Balanço Geral Florianópolis",
        "nota": "Especialista defende o decreto que facilitou a posse em 2019.",
        "duracao": "5:26"
      },
      {
        "id": "UyHRBY2PAXs",
        "lado": "contrario",
        "titulo": "A liberação das armas de fogo é equivocada, afirma Daniel Cerqueira",
        "canal": "Exame",
        "nota": "O autor do estudo do Ipea explica por que mais armas trazem mais mortes.",
        "duracao": "4:12"
      },
      {
        "id": "UTXIMe7bJEM",
        "lado": "contrario",
        "titulo": "Armas para a população resultam em menos crimes? Veja os mitos da segurança pública",
        "canal": "Estadão",
        "nota": "O que os dados dizem sobre armas e criminalidade.",
        "duracao": "3:54"
      },
      {
        "id": "uV7mOtZqclQ",
        "lado": "contrario",
        "titulo": "Maior rigor na posse de armas teria evitado mais de seis mortes por dia, diz estudo",
        "canal": "Jornalismo TV Cultura",
        "nota": "Estimativa de vidas que um controle mais rígido teria poupado.",
        "duracao": "2:44"
      }
    ]
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
        "tema": "Eficiência",
        "favoravel": "Empresas privadas respondem a acionistas e à concorrência, e tendem a gastar melhor.",
        "contrario": "Em monopólios naturais, como água e esgoto, não há concorrência, e o ganho de eficiência pode virar só lucro."
      },
      {
        "tema": "Investimento",
        "favoravel": "Sem as amarras do orçamento público, a empresa privada consegue investir mais e mais rápido.",
        "contrario": "Boa parte do investimento continua vindo de bancos públicos e das tarifas pagas pela população."
      },
      {
        "tema": "Tarifas",
        "favoravel": "Com regulação e metas no contrato, a tarifa pode até cair, como prometido na Sabesp.",
        "contrario": "A busca por lucro e dividendos pressiona as contas de luz e de água para cima."
      },
      {
        "tema": "Política",
        "favoravel": "Estatais sofrem com indicações políticas e corrupção, como mostrou a Lava Jato.",
        "contrario": "Setores estratégicos, como energia, deveriam ficar sob controle público para atender o interesse do país."
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
        "id": "PbxfQAxbl_I",
        "lado": "favoravel",
        "titulo": "Por que a privatização da Sabesp era necessária",
        "canal": "Tarcísio de Freitas",
        "nota": "O governador de SP defende a venda da empresa de saneamento.",
        "duracao": "9:31"
      },
      {
        "id": "o_OlzlpfqTA",
        "lado": "favoravel",
        "titulo": "“É muito positivo”, diz Wilson Ferreira Jr. sobre a privatização da Eletrobras",
        "canal": "Roda Viva",
        "nota": "O ex-presidente da Eletrobras explica o que muda com a venda.",
        "duracao": "2:48"
      },
      {
        "id": "vroVI314kGc",
        "lado": "favoravel",
        "titulo": "Salim Mattar explica a diferença entre empresa estatal e privada",
        "canal": "Jovem Pan News",
        "nota": "O ex-secretário de Desestatização expõe a lógica da privatização.",
        "duracao": "2:51"
      },
      {
        "id": "OM50BxU8vuc",
        "lado": "contrario",
        "titulo": "As privatizações foram um erro!",
        "canal": "Cortes do Flow",
        "nota": "Fernando Haddad critica a venda da Sabesp.",
        "duracao": "1:04"
      },
      {
        "id": "KTXHt1OQj_o",
        "lado": "contrario",
        "titulo": "Privatização da Eletrobras deve aumentar conta de energia, alertam debatedores",
        "canal": "TV Senado",
        "nota": "Especialistas apontam o risco de alta nas tarifas.",
        "duracao": "5:25"
      },
      {
        "id": "ZOxOkvKK-Zo",
        "lado": "contrario",
        "titulo": "Privatização da Sabesp: bolsos cheios no mercado, povo sem água e esgoto",
        "canal": "Eduardo Moreira",
        "nota": "O economista critica quem ganha com a venda da Sabesp.",
        "duracao": "8:00"
      }
    ]
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
        "tema": "Prisões",
        "favoravel": "Sem critério claro, muita gente pega com pouca droga é presa como traficante. Isso enche os presídios e alimenta as facções lá dentro.",
        "contrario": "Traficantes passam a andar com quantidades pequenas para se passar por usuários."
      },
      {
        "tema": "Saúde",
        "favoravel": "Uso de droga é questão de saúde. O usuário deve ser tratado, não processado.",
        "contrario": "A maconha causa dependência e pode desencadear psicose, sobretudo em adolescentes. Tolerar o uso passa a ideia de que é inofensiva."
      },
      {
        "tema": "Tráfico",
        "favoravel": "A polícia gasta tempo com usuários em vez de investigar o tráfico.",
        "contrario": "Quem compra financia o tráfico. Mais consumo significa mais dinheiro para as facções."
      },
      {
        "tema": "Igualdade",
        "favoravel": "Jovens negros e pobres pegos com pouca droga são enquadrados como traficantes com mais frequência que brancos de classe média.",
        "contrario": "A solução para abusos é corrigir a atuação da polícia, não mudar a lei."
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
        "id": "u-p4mowR3Tc",
        "lado": "favoravel",
        "titulo": "Igor e Whindersson Nunes 100% sinceros sobre a legalização da maconha",
        "canal": "Talk Flow",
        "nota": "Os dois conversam sem rodeios sobre legalizar.",
        "duracao": "15:33"
      },
      {
        "id": "agAWz6TkueU",
        "lado": "favoravel",
        "titulo": "Kim Kataguiri diz ser a favor da liberação da maconha",
        "canal": "INVEST Cortes",
        "nota": "Um deputado de direita explica por que apoia a liberação.",
        "duracao": "5:19"
      },
      {
        "id": "SR23ET60M-g",
        "lado": "favoravel",
        "titulo": "“Proibir maconha é a mesma lógica que proibir cachorro”, diz o neurocientista Sidarta Ribeiro",
        "canal": "Santa Cannabis",
        "nota": "O pesquisador da UFRN critica a proibição.",
        "duracao": "2:51"
      },
      {
        "id": "wNcSePF53MA",
        "lado": "contrario",
        "titulo": "Vamos impedir a liberação da maconha!",
        "canal": "Deputado Osmar Terra",
        "nota": "O ex-ministro e médico defende manter o porte como crime.",
        "duracao": "3:26"
      },
      {
        "id": "Z_7TODf5JSs",
        "lado": "contrario",
        "titulo": "Maconha e adolescência: depressão e suicídio",
        "canal": "Dr Ronaldo Laranjeira",
        "nota": "O psiquiatra da Unifesp fala dos riscos para quem começa cedo.",
        "duracao": "2:44"
      },
      {
        "id": "XE4gBkkKEvw",
        "lado": "contrario",
        "titulo": "Prejuízos da maconha na infância e adolescência",
        "canal": "Café com o Psiquiatra",
        "nota": "Os efeitos do uso precoce no cérebro em formação.",
        "duracao": "4:43"
      }
    ]
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
        "tema": "Justiça",
        "favoravel": "Hoje um assalariado de R$ 6 mil paga proporcionalmente mais que um milionário. O imposto mínimo corrige isso.",
        "contrario": "O lucro já paga imposto na empresa. Cobrar de novo no dividendo é tributar duas vezes."
      },
      {
        "tema": "Investimento",
        "favoravel": "Países ricos tributam dividendos e continuam atraindo investimento.",
        "contrario": "Encarecer o capital afasta investimento estrangeiro e reduz empregos."
      },
      {
        "tema": "Arrecadação",
        "favoravel": "A cobrança dos mais ricos paga a isenção de milhões de trabalhadores sem aumentar o rombo.",
        "contrario": "A arrecadação veio abaixo do previsto, e os mais ricos acham formas legais de escapar."
      },
      {
        "tema": "Quem é rico",
        "favoravel": "Quem ganha mais de R$ 1,2 milhão por ano está entre os 0,2% do topo.",
        "contrario": "Médicos e profissionais liberais que ganham R$ 600 mil por ano não são super-ricos e também são atingidos."
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
        "id": "yJLt5aiPWhk",
        "lado": "favoravel",
        "titulo": "Precisamos taxar os mais ricos",
        "canal": "Cortes do Flow",
        "nota": "Convidado do Flow defende cobrar mais de quem está no topo.",
        "duracao": "11:49"
      },
      {
        "id": "2rnlmxbXNS4",
        "lado": "favoravel",
        "titulo": "Por que os super-ricos pagam menos impostos que você",
        "canal": "Cortes do Flow News",
        "nota": "Como os dividendos isentos reduzem o imposto do topo.",
        "duracao": "7:10"
      },
      {
        "id": "sxRE7OlCRcg",
        "lado": "favoravel",
        "titulo": "Bilionários: como os super-ricos escapam dos impostos no Brasil",
        "canal": "Politize!",
        "nota": "Uma explicação didática das brechas usadas pelo topo.",
        "duracao": "7:45"
      },
      {
        "id": "VqRCGmi8XOQ",
        "lado": "contrario",
        "titulo": "Taxação dos super-ricos fracassa, diz Caio Coppolla",
        "canal": "Caio Coppolla",
        "nota": "O comentarista critica a arrecadação abaixo do previsto.",
        "duracao": "6:06"
      },
      {
        "id": "prWlxQXWMM8",
        "lado": "contrario",
        "titulo": "Taxar dividendos é um erro",
        "canal": "Luiz Barsi",
        "nota": "O investidor explica por que vê a cobrança como prejudicial.",
        "duracao": "2:05"
      },
      {
        "id": "SWX7BzmUXTI",
        "lado": "contrario",
        "titulo": "“Quem ganha 600 mil por ano não é super-rico”, diz Kim Kataguiri",
        "canal": "BBC News Brasil",
        "nota": "A crítica à linha de corte do imposto mínimo.",
        "duracao": "0:58"
      }
    ]
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
        "favoravel": "Cotistas têm notas e taxas de conclusão parecidas com as dos demais, e evadem menos.",
        "contrario": "Em cursos mais exigentes, cotistas reprovam mais, sinal de que a escola básica não foi resolvida."
      },
      {
        "tema": "Critério",
        "favoravel": "A desigualdade racial existe mesmo entre pessoas de mesma renda, então só a cota social não basta.",
        "contrario": "A renda explica boa parte da desigualdade; cotas sociais já incluiriam muitos negros sem classificar ninguém por raça."
      },
      {
        "tema": "Sociedade",
        "favoravel": "Diversidade nas universidades forma profissionais e referências para toda a população negra.",
        "contrario": "Oficializar a raça pode dividir um país miscigenado em grupos rivais."
      },
      {
        "tema": "Quem se beneficia",
        "favoravel": "As vagas vão para alunos de escola pública, o que já filtra os mais ricos.",
        "contrario": "Parte das vagas fica com a classe média negra, e não com os mais pobres."
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
        "id": "P5nTR282gwE",
        "lado": "favoravel",
        "titulo": "A importância das cotas",
        "canal": "Cortes do Flow",
        "nota": "Por que as cotas fazem diferença na vida de quem entra pela reserva.",
        "duracao": "4:28"
      },
      {
        "id": "4c5HPYMzo-g",
        "lado": "favoravel",
        "titulo": "Helio de La Peña diz por que mudou de ideia sobre cotas raciais",
        "canal": "UOL",
        "nota": "O humorista, que já foi contra, explica por que passou a defender.",
        "duracao": "9:53"
      },
      {
        "id": "-m7eO7hPkOA",
        "lado": "favoravel",
        "titulo": "Por que precisamos de cotas raciais no Brasil?",
        "canal": "Nem 5 Minutos",
        "nota": "Desigualdade e representatividade em cinco minutos.",
        "duracao": "5:01"
      },
      {
        "id": "71TfULwLyHk",
        "lado": "contrario",
        "titulo": "Professor Paulo Cruz explica por que é contra as cotas raciais",
        "canal": "Pânico Jovem Pan",
        "nota": "Professor negro e conservador expõe seus argumentos.",
        "duracao": "4:53"
      },
      {
        "id": "Q_TDtYatslI",
        "lado": "contrario",
        "titulo": "À CNN, Renan pede fim de cotas raciais: “injustas” e atendem a classe média",
        "canal": "CNN Brasil",
        "nota": "Candidato defende trocar as cotas raciais por foco na escola básica.",
        "duracao": "7:59"
      },
      {
        "id": "FjLLIC4fdXU",
        "lado": "contrario",
        "titulo": "Cotas em universidades e suas falhas",
        "canal": "Arthur do Val",
        "nota": "Os problemas que ele vê no sistema de cotas.",
        "duracao": "8:12"
      }
    ]
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
    "atualizado": "2026-10-14",
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
        "tema": "Vida",
        "favoravel": "Nas primeiras semanas não há sistema nervoso formado, e a mulher já é uma vida plena com direitos.",
        "contrario": "A vida começa na concepção. O embrião é um ser humano e merece proteção desde o início."
      },
      {
        "tema": "Saúde pública",
        "favoravel": "A proibição não impede o aborto, só o torna inseguro. Muitas mulheres são internadas, e algumas morrem.",
        "contrario": "O Estado deve reduzir os abortos com educação sexual, contracepção e apoio à gestante, não legalizá-los."
      },
      {
        "tema": "Desigualdade",
        "favoravel": "Quem tem dinheiro aborta com segurança em clínicas ou no exterior. Quem é pobre e negra corre os riscos.",
        "contrario": "A pobreza se combate com política social, não com o fim da proteção ao nascituro."
      },
      {
        "tema": "Quem decide",
        "favoravel": "Direitos fundamentais não dependem de maioria. Cabe ao STF proteger a liberdade da mulher.",
        "contrario": "A maioria da população é contra, e o tema deve ser decidido pelo Congresso eleito, não pelo STF."
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
        "id": "datafolha-2024",
        "posicao": "contrario",
        "instituicao": "Datafolha",
        "natureza": "Instituto privado de pesquisa de opinião",
        "tipo": "Pesquisa de opinião",
        "titulo": "Opinião dos brasileiros sobre a lei do aborto",
        "autores": "Datafolha (relato do DOL)",
        "data": "03/2024",
        "formato": "Reportagem",
        "url": "https://dol.com.br/noticias/brasil/852923/datafolha-apenas-6-dos-brasileiros-defendem-aborto",
        "tese": "A maioria quer manter a lei como está ou proibir o aborto por completo. Só 6% defendem liberar em qualquer situação. Para quem é contra a descriminalização, a mudança não pode vir contra a vontade da maioria.",
        "numero": {
          "valor": "77%",
          "legenda": "querem manter a lei atual (42%) ou proibir totalmente (35%)"
        },
        "premissas": [
          "Uma mudança desse peso deve refletir o que a população pensa."
        ],
        "pergunte": [
          "A pesquisa pergunta sobre liberar em qualquer situação. Como responderiam a uma pergunta sobre o limite de 12 semanas?"
        ]
      },
      {
        "id": "ufpb-nascituro",
        "posicao": "contrario",
        "instituicao": "UFPB",
        "natureza": "Universidade pública (curso de Direito)",
        "tipo": "Trabalho de conclusão de curso",
        "titulo": "Dos direitos do nascituro: há mitigação do direito à vida na busca pela legalização do aborto?",
        "autores": "Soraya Meira Cavalcanti",
        "data": "2023",
        "formato": "PDF",
        "url": "https://repositorio.ufpb.br/jspui/bitstream/123456789/29726/1/SMC%20071123.pdf",
        "tese": "Lida como um todo, a lei brasileira já protege o nascituro: o Código Civil, o ECA e o Pacto de São José da Costa Rica reconhecem direitos a ele. Qualquer discussão sobre aborto que ignore isso fica incompleta.",
        "premissas": [
          "A corrente que reconhece direitos desde a concepção é a que mais combina com as leis em vigor."
        ],
        "pergunte": [
          "Se o nascituro tem direitos, como pesá-los contra os direitos da mulher?"
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
      }
    ],
    "videos": [
      {
        "id": "tyKDUrx7ZzM",
        "lado": "favoravel",
        "titulo": "Por que o aborto é um problema de saúde pública?",
        "canal": "Drauzio Varella",
        "nota": "O médico explica o que acontece com as mulheres que abortam na clandestinidade.",
        "duracao": "13:38"
      },
      {
        "id": "rpoIqxlaFvg",
        "lado": "favoravel",
        "titulo": "Falar de aborto é falar de uma necessidade de saúde da mulher, diz Debora Diniz",
        "canal": "TV Senado",
        "nota": "A pesquisadora da UnB apresenta seus argumentos no Senado.",
        "duracao": "10:29"
      },
      {
        "id": "vvEgKoc5vNI",
        "lado": "favoravel",
        "titulo": "Rosa Weber vota pela descriminalização do aborto até a 12ª semana",
        "canal": "SBT News",
        "nota": "O voto que abriu o julgamento no STF.",
        "duracao": "1:38"
      },
      {
        "id": "bMSNPlkuHWE",
        "lado": "contrario",
        "titulo": "O que Lucas Pavanato tem a dizer sobre o aborto",
        "canal": "Cortes do Flow News",
        "nota": "O influenciador conservador defende a proteção da vida desde a concepção.",
        "duracao": "6:30"
      },
      {
        "id": "Jd8b-ZEesWY",
        "lado": "contrario",
        "titulo": "Aborto: quando começa a vida humana?",
        "canal": "Brasil Paralelo",
        "nota": "O argumento de que a vida começa na fecundação.",
        "duracao": "5:20"
      },
      {
        "id": "BBLupcvOFNE",
        "lado": "contrario",
        "titulo": "O melhor argumento contra o aborto",
        "canal": "Victor Victorelli – Academia de Lógica",
        "nota": "Um argumento filosófico curto contra o aborto.",
        "duracao": "1:26"
      }
    ]
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
        "tema": "Golpes e crimes",
        "favoravel": "As plataformas lucram com anúncios de golpe e só agem quando a Justiça manda. Precisam ter dever de cuidado.",
        "contrario": "Já existem leis para punir golpistas. O foco deve ser quem comete o crime, não a empresa."
      },
      {
        "tema": "Liberdade de expressão",
        "favoravel": "Liberdade de expressão não é absoluta e não protege ataques, fraudes e discurso de ódio.",
        "contrario": "Com medo de multa, as empresas vão apagar conteúdo legítimo antes, sobretudo opiniões polêmicas."
      },
      {
        "tema": "Quem decide",
        "favoravel": "O Congresso não atualizou a lei em uma década. O STF agiu diante da omissão.",
        "contrario": "Regras desse tamanho deveriam ser feitas pelo Congresso, não pelo STF."
      },
      {
        "tema": "Algoritmos",
        "favoravel": "As redes não são murais neutros: escolhem o que viraliza e ganham com isso.",
        "contrario": "Moderação automática erra com ironia e contexto, e quem perde voz são grupos menores."
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
        "lado": "favoravel",
        "titulo": "Eugênio Bucci debate a regulação das redes e como responsabilizar as big techs",
        "canal": "Roda Viva",
        "nota": "O professor da USP defende regras para as plataformas.",
        "duracao": "4:12"
      },
      {
        "id": "Ai3BiIo9LaM",
        "lado": "favoravel",
        "titulo": "“Não é censura, é limite”, diz Jorge Viana sobre regulação da internet",
        "canal": "RedeTV",
        "nota": "O argumento de que regular não é calar.",
        "duracao": "3:54"
      },
      {
        "id": "dlI9Yk-9Hp4",
        "lado": "favoravel",
        "titulo": "“A lei ficou insuficiente”, diz especialista sobre regulação das redes",
        "canal": "CNN Brasil",
        "nota": "Por que o Marco Civil de 2014 não daria mais conta.",
        "duracao": "7:02"
      },
      {
        "id": "pj33wColNGA",
        "lado": "contrario",
        "titulo": "Igor solta o verbo sobre a regulação das redes sociais",
        "canal": "Cortes do Flow",
        "nota": "O apresentador do Flow critica a regulação e fala em risco de censura.",
        "duracao": "15:22"
      },
      {
        "id": "MTN-jbFyjX8",
        "lado": "contrario",
        "titulo": "Advogado do Google critica regulação no STF: “risco de censura”",
        "canal": "Correio Braziliense",
        "nota": "A posição das plataformas no julgamento.",
        "duracao": "2:18"
      },
      {
        "id": "3DwkDMzGmiU",
        "lado": "contrario",
        "titulo": "Telegram critica PL das Fake News e o considera censura",
        "canal": "Jovem Pan News",
        "nota": "Comentaristas analisam a reação das empresas ao projeto.",
        "duracao": "5:07"
      }
    ]
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
        "favoravel": "Uma data fixa encerra disputas e dá certeza a quem tem título da terra.",
        "contrario": "Segurança jurídica também vale para os indígenas, cujo direito à terra a Constituição reconhece como originário."
      },
      {
        "tema": "História",
        "favoravel": "Sem um corte, qualquer área do país poderia ser reivindicada com base em ocupações antigas.",
        "contrario": "Muitos povos tinham sido expulsos à força antes de 1988 e não podiam estar nas terras naquela data."
      },
      {
        "tema": "Produção",
        "favoravel": "Famílias que produzem há gerações podem perder suas terras e o país perde produção de alimentos.",
        "contrario": "A PEC e o próprio STF já preveem indenização a quem ocupou de boa-fé."
      },
      {
        "tema": "Meio ambiente",
        "favoravel": "Terras produtivas também podem ser sustentáveis, com as políticas certas.",
        "contrario": "As terras indígenas perderam cerca de 1% da vegetação nativa em 30 anos, contra mais de 20% nas áreas privadas."
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
        "id": "eMy_KN7Ypts",
        "lado": "favoravel",
        "titulo": "“Marco temporal é a única maneira de preservar a segurança jurídica no país”",
        "canal": "Rádio Bandeirantes",
        "nota": "Defensor da tese explica o argumento da segurança jurídica.",
        "duracao": "15:17"
      },
      {
        "id": "r7Bz3z878QM",
        "lado": "favoravel",
        "titulo": "Quem é beneficiado pelo marco temporal? Pedro Lupion opina",
        "canal": "Pânico Jovem Pan",
        "nota": "O presidente da Frente Parlamentar da Agropecuária defende a tese.",
        "duracao": "3:44"
      },
      {
        "id": "QpZNMQuCXzI",
        "lado": "favoravel",
        "titulo": "Marco temporal assegura segurança jurídica",
        "canal": "AgroMais",
        "nota": "A visão dos produtores rurais.",
        "duracao": "8:13"
      },
      {
        "id": "KW4EtANXwBE",
        "lado": "contrario",
        "titulo": "Marco temporal é inconstitucional, diz Ailton Krenak",
        "canal": "UOL",
        "nota": "O pensador indígena explica por que é contra.",
        "duracao": "4:22"
      },
      {
        "id": "do8wR9_HQN4",
        "lado": "contrario",
        "titulo": "Marco temporal pode ter brechas para garimpo em terras indígenas",
        "canal": "Cortes do Flow News",
        "nota": "Os riscos que o projeto traria para os territórios.",
        "duracao": "16:06"
      },
      {
        "id": "izZmxp6QXMY",
        "lado": "contrario",
        "titulo": "O que é o marco temporal?",
        "canal": "Greenpeace Brasil",
        "nota": "A tese explicada por quem é contra, em um minuto.",
        "duracao": "1:17"
      }
    ]
  }
];
