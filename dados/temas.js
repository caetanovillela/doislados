/*
  Conteúdo do site. Para adicionar um tema, copie o bloco de um tema existente
  e troque os campos. O layout (app.js e style.css) não precisa mudar.

  posicao de cada artigo:
    "favoravel" | "contrario" | "contexto"
  Os rótulos de cada posição ficam em `rotulos` dentro do tema, porque
  "favorável" e "contrário" mudam de sentido conforme a pergunta.

  ATENÇÃO: os artigos abaixo são textos de exemplo, escritos para o protótipo.
  Antes de publicar, substitua-os por artigos reais, com autoria e fontes.
*/
window.TEMAS = [
  {
    id: "escala-6x1",
    titulo: "Escala 6x1",
    pergunta: "A escala 6x1 deve acabar?",
    resumo:
      "Seis dias de trabalho para um de folga. Uma proposta de emenda à Constituição quer reduzir a jornada e acabar com esse modelo.",
    atualizado: "2026-10-14",
    rotulos: {
      favoravel: "A favor do fim da 6x1",
      contrario: "Contra o fim da 6x1",
    },
    contexto: {
      titulo: "O que está em debate",
      paragrafos: [
        "Na escala 6x1, a pessoa trabalha seis dias seguidos e folga um. É comum no comércio, em supermercados, restaurantes, telemarketing e outros serviços que funcionam todos os dias.",
        "A Constituição de 1988 (art. 7º, XIII) limita a jornada a 8 horas por dia e 44 horas por semana. Antes de 1988 o limite era de 48 horas. A CLT garante uma folga semanal de 24 horas seguidas, de preferência aos domingos, mas não proíbe a 6x1.",
        "O debate ganhou força a partir de 2024 com o movimento Vida Além do Trabalho (VAT). A deputada Erika Hilton (PSOL-SP) apresentou uma PEC que reduz o limite para 36 horas semanais e prevê quatro dias de trabalho por semana. Há outras propostas no Congresso com transições mais longas.",
        "Para mudar a Constituição, uma PEC precisa ser aprovada em dois turnos na Câmara e no Senado, com pelo menos três quintos dos votos em cada Casa (308 deputados e 49 senadores).",
      ],
      fatos: [
        { rotulo: "Limite atual", valor: "44 h/semana" },
        { rotulo: "Proposta da PEC", valor: "36 h/semana" },
        { rotulo: "Votos na Câmara", valor: "308 de 513" },
        { rotulo: "Votos no Senado", valor: "49 de 81" },
      ],
    },
    pontos: [
      {
        tema: "Saúde e vida pessoal",
        favoravel: "Um dia de folga não basta para descansar, cuidar da casa e conviver com a família.",
        contrario: "Concorda que o descanso importa, mas defende que isso seja resolvido em acordos por setor.",
      },
      {
        tema: "Emprego",
        favoravel: "Menos horas por pessoa exigem mais contratações para cobrir a mesma operação.",
        contrario: "O custo maior pode levar a demissões, automação e mais trabalho informal.",
      },
      {
        tema: "Custos e preços",
        favoravel: "Trabalhadores descansados erram menos e faltam menos, o que reduz parte do custo.",
        contrario: "Pequenos negócios teriam de contratar mais gente, e o custo iria para os preços.",
      },
      {
        tema: "Produtividade",
        favoravel: "Testes com semana de quatro dias mostraram produção estável com menos horas.",
        contrario: "A produtividade brasileira está estagnada há anos; reduzir horas antes de elevá-la é arriscado.",
      },
      {
        tema: "Como mudar",
        favoravel: "Só uma regra geral protege quem tem pouco poder de negociação.",
        contrario: "Cada setor tem uma realidade; a negociação coletiva se adapta melhor.",
      },
    ],
    fontes: [
      {
        titulo: "Constituição Federal, art. 7º (direitos dos trabalhadores)",
        url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      },
      {
        titulo: "Consolidação das Leis do Trabalho (CLT)",
        url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
      },
      {
        titulo: "Câmara dos Deputados: busca de propostas e andamento",
        url: "https://www.camara.leg.br/busca-portal/proposicoes/pesquisa-simplificada",
      },
    ],
    artigos: [
      {
        id: "descanso-e-saude",
        posicao: "favoravel",
        titulo: "Um dia de folga não é descanso",
        autor: "Texto de exemplo",
        leitura: 4,
        resumo:
          "Na 6x1, o único dia livre vira dia de tarefas. A defesa do fim da escala começa pela saúde de quem trabalha.",
        corpo: [
          "Quem trabalha na escala 6x1 conhece a rotina: o único dia de folga é usado para lavar roupa, ir ao mercado, resolver pendências e, se sobrar tempo, dormir. Descanso de verdade raramente cabe nessa conta.",
          "Nas grandes cidades o problema é maior. Uma jornada de oito horas pode vir acompanhada de duas ou três horas de transporte por dia. Na prática, a vida inteira gira em torno do trabalho durante seis dias seguidos.",
          "Os defensores do fim da escala lembram que cansaço acumulado tem custo. Ele aparece em afastamentos por doença, em acidentes, em faltas e na rotatividade alta, que obriga empresas a treinar gente nova o tempo todo.",
          "Há também a questão da convivência. Pais e mães que trabalham aos fins de semana passam pouco tempo com os filhos. Estudar à noite depois de seis dias de trabalho é, para muitos, inviável.",
          "Para esse lado do debate, o tempo livre não é luxo. É a condição para que a pessoa cuide da saúde, da família e da própria formação.",
        ],
      },
      {
        id: "precedente-de-1988",
        posicao: "favoravel",
        titulo: "O país já reduziu a jornada antes",
        autor: "Texto de exemplo",
        leitura: 4,
        resumo:
          "Em 1988 o limite caiu de 48 para 44 horas. Quem defende a mudança diz que as previsões de crise se repetem a cada redução.",
        corpo: [
          "Quando a Constituinte discutiu a redução da jornada de 48 para 44 horas, parte do empresariado previu desemprego e falências. A mudança foi aprovada, e a economia se adaptou.",
          "Para quem defende o fim da 6x1, isso mostra que a jornada é uma escolha da sociedade, e não uma lei da natureza. Países ricos reduziram horas de trabalho ao longo do século XX conforme a produtividade cresceu.",
          "Experiências recentes reforçam o argumento. No teste da semana de quatro dias feito no Reino Unido em 2022, com dezenas de empresas, a grande maioria decidiu manter o modelo depois do período de teste.",
          "Outro ponto é a distribuição do trabalho. Se cada pessoa trabalha menos horas, as empresas que funcionam todos os dias precisam de mais gente nas equipes, o que pode abrir vagas.",
          "Os defensores reconhecem que a transição exige cuidado e propõem regras de adaptação. Mas argumentam que esperar que o mercado resolva sozinho deixa sem proteção justamente quem tem menos poder de negociação.",
        ],
      },
      {
        id: "pequeno-negocio",
        posicao: "contrario",
        titulo: "Quem paga a conta é o pequeno negócio",
        autor: "Texto de exemplo",
        leitura: 4,
        resumo:
          "Uma padaria aberta sete dias por semana teria de contratar mais. Os críticos dizem que o custo cai sobre quem tem margem menor.",
        corpo: [
          "Imagine uma padaria de bairro que abre todos os dias. Com jornadas menores, ela precisaria de mais funcionários para manter o mesmo horário. Para uma grande rede, isso é um ajuste. Para o pequeno comerciante, pode ser a diferença entre lucro e prejuízo.",
          "Os críticos da proposta lembram que o custo de um empregado no Brasil vai muito além do salário, com encargos e obrigações trabalhistas. Contratar mais gente para cobrir as mesmas horas aumenta esse custo de forma direta.",
          "As saídas possíveis para o empresário não são boas para o trabalhador: reduzir o horário de funcionamento, repassar o custo para os preços, automatizar funções ou contratar sem carteira assinada.",
          "Há o risco de o efeito ser o contrário do pretendido. Em vez de mais empregos formais, a mudança pode empurrar parte dos trabalhadores para a informalidade, onde não há limite de jornada nenhum.",
          "Por isso, esse lado defende que qualquer mudança considere o porte das empresas e venha acompanhada de compensações, como desoneração da folha.",
        ],
      },
      {
        id: "produtividade-primeiro",
        posicao: "contrario",
        titulo: "Produtividade vem antes da jornada",
        autor: "Texto de exemplo",
        leitura: 4,
        resumo:
          "Os países que trabalham menos horas chegaram lá produzindo mais. Para os críticos, o Brasil inverte a ordem.",
        corpo: [
          "É verdade que os países ricos trabalham menos horas. Mas eles chegaram a isso depois de aumentar muito a produtividade, com mais investimento, tecnologia e educação. A redução da jornada foi consequência, e não causa.",
          "A produtividade do trabalho no Brasil cresce pouco há décadas. Para os críticos, cortar horas por lei sem resolver esse problema significa produzir menos com o mesmo custo.",
          "Eles também questionam a comparação com os testes de semana de quatro dias. Esses testes reuniram, em geral, empresas de escritório e tecnologia que escolheram participar. O resultado não se aplica facilmente a um caixa de supermercado ou a um hospital, onde a presença física é o próprio serviço.",
          "A alternativa proposta é a negociação coletiva. Sindicatos e empresas de cada setor sabem o que funciona na sua realidade, e já podem negociar escalas como 5x2 ou 12x36.",
          "Para esse lado, uma mudança gradual, setor a setor, protege o emprego melhor do que uma regra única na Constituição.",
        ],
      },
    ],
  },
  {
    id: "reforma-tributaria",
    titulo: "Reforma tributária",
    pergunta: "O novo sistema de impostos sobre o consumo é melhor?",
    resumo: "Tema em preparação.",
    emBreve: true,
    artigos: [],
  },
  {
    id: "maioridade-penal",
    titulo: "Maioridade penal",
    pergunta: "A maioridade penal deve ser reduzida para 16 anos?",
    resumo: "Tema em preparação.",
    emBreve: true,
    artigos: [],
  },
];
