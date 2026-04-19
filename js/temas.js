/*
  TEMAS TST - BASE DE DADOS DO SITE

  COMO ADICIONAR NOVOS TEMAS:
  1. Copie um bloco existente.
  2. Altere:
     - numero
     - assunto
     - resumo
     - link
     - categoriaClasse
  3. Separe por assunto para facilitar manutenção.

  ASSUNTOS ATUAIS:
  - Adicionais Ambientais
  - Afastamentos e Acidentes
  - Direitos Gestacionais, Estabilidades e Condutas Discriminatórias
  - Ergonomia e Direitos do Trabalhador

  CLASSES DE CATEGORIA:
  - categoria-oficial
  - categoria-estudo
  - categoria-pessoal

  EXEMPLO DE NOVO TEMA:
  {
    numero: 999,
    assunto: "Adicionais Ambientais",
    resumo: "Resumo do tema aqui.",
    link: "https://...",
    categoriaClasse: "categoria-oficial"
  }

  SE NÃO HOUVER LINK AINDA:
  link: ""
*/

const temasTST = [
  // =========================
  // ADICIONAIS AMBIENTAIS
  // =========================
  {
    numero: 5,
    assunto: "Adicionais Ambientais",
    resumo: "Uso constante de fones de ouvido em teleatendimento não gera insalubridade por equiparação.",
    link: "https://www.tst.jus.br/documents/10157/0/IRR005.pdf/b431851c-31f8-ca8e-3f29-870b0d9e6316?t=1726685233794",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 8,
    assunto: "Adicionais Ambientais",
    resumo: "Agente de Apoio Socioeducativo não tem direito ao adicional de insalubridade pelo eventual risco de contato com menores doentes, pois o local não se destina a cuidados de saúde.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 10,
    assunto: "Adicionais Ambientais",
    resumo: "Não é devida a periculosidade a quem apenas permanece em áreas de uso de aparelho de Raios X móvel sem operá-lo.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 16,
    assunto: "Adicionais Ambientais",
    resumo: "Agente de Apoio Socioeducativo tem direito ao adicional de periculosidade por atuar exposto à violência física.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 17,
    assunto: "Adicionais Ambientais",
    resumo: "É vedada a cumulação dos adicionais de insalubridade e periculosidade, mesmo que decorrentes de fatos geradores distintos.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 79,
    assunto: "Adicionais Ambientais",
    resumo: "Trabalhadores que atuam na área de abastecimento de aeronaves têm direito à periculosidade.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 80,
    assunto: "Adicionais Ambientais",
    resumo: "O trabalho em câmaras frigoríficas sem a pausa térmica assegurada por lei gera direito ao adicional de insalubridade.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 82,
    assunto: "Adicionais Ambientais",
    resumo: "Motoristas que apenas acompanham o abastecimento feito por terceiros não têm direito a periculosidade.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 87,
    assunto: "Adicionais Ambientais",
    resumo: "Abastecer empilhadeiras trocando cilindros de gás (GLP) gera periculosidade, mesmo por tempo reduzido.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 118,
    assunto: "Adicionais Ambientais",
    resumo: "Agentes Comunitários de Saúde têm direito a insalubridade em grau médio, independente de laudo pericial, após a vigência da Lei 13.342/2016.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 140,
    assunto: "Adicionais Ambientais",
    resumo: "É válida a prova pericial emprestada para comprovar insalubridade/periculosidade se houver identidade fática e contraditório.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 161,
    assunto: "Adicionais Ambientais",
    resumo: "A falta de pausa para recuperação em calor excessivo (antes de dez/2019) enseja horas extraordinárias.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 171,
    assunto: "Adicionais Ambientais",
    resumo: "Trabalhador de varrição de logradouro (lixo urbano) tem direito a insalubridade em grau máximo.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 180,
    assunto: "Adicionais Ambientais",
    resumo: "Produtos de limpeza doméstica contendo álcalis cáusticos diluídos não geram insalubridade.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 190,
    assunto: "Adicionais Ambientais",
    resumo: "O manuseio de cimento na construção civil não se enquadra na regra de insalubridade, mesmo com laudo pericial atestando o risco.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 231,
    assunto: "Adicionais Ambientais",
    resumo: "Quando o local for fechado/inviável, o juiz pode usar outros meios de prova além da perícia para insalubridade.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 248,
    assunto: "Adicionais Ambientais",
    resumo: "A exposição à radiação ionizante ou substância radioativa gera direito à periculosidade.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 266,
    assunto: "Adicionais Ambientais",
    resumo: "O pagamento espontâneo de periculosidade pela empresa dispensa a exigência legal de prova técnica pericial.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },
  {
    numero: 306,
    assunto: "Adicionais Ambientais",
    resumo: "A base de cálculo da insalubridade dos agentes comunitários e de endemias (após a Lei 13.342/2016) é o vencimento ou salário-base.",
    link: "",
    categoriaClasse: "categoria-oficial"
  },

  // =========================
  // AFASTAMENTOS E ACIDENTES
  // =========================
  {
    numero: 76,
    assunto: "Afastamentos e Acidentes",
    resumo: "Na doença ocupacional com concausa, a pensão mensal sofre redução de até 50%, salvo laudo pericial exato.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 77,
    assunto: "Afastamentos e Acidentes",
    resumo: "Cabe ao juiz definir de forma fundamentada se a indenização material será em pensão vitalícia ou parcela única.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 88,
    assunto: "Afastamentos e Acidentes",
    resumo: "Configura dano moral (limbo previdenciário) o empregador impedir o retorno e o salário do trabalhador após a alta do INSS.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 126,
    assunto: "Afastamentos e Acidentes",
    resumo: "O pedido de dano reflexo/em ricochete prescreve em três anos (Cód. Civil).",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 145,
    assunto: "Afastamentos e Acidentes",
    resumo: "É lícito acumular pensão por acidente/doença com o salário do próprio trabalhador.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 155,
    assunto: "Afastamentos e Acidentes",
    resumo: "Caso a pensão se dê em parcela única, deve-se usar a Tábua de Mortalidade do IBGE para o cálculo.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 181,
    assunto: "Afastamentos e Acidentes",
    resumo: "Parentes da vítima de acidente de trabalho fatal possuem direito presumido à indenização indireta (dano reflexo).",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 183,
    assunto: "Afastamentos e Acidentes",
    resumo: "O marco zero da prescrição por danos ocupacionais é a ciência inequívoca da consolidação da lesão.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 220,
    assunto: "Afastamentos e Acidentes",
    resumo: "É obrigatória a manutenção do plano de saúde do trabalhador durante suspensão por auxílio-doença ou invalidez.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 226,
    assunto: "Afastamentos e Acidentes",
    resumo: "Caracteriza-se abandono de emprego o não retorno de forma injustificada em 30 dias após fim do benefício do INSS.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 229,
    assunto: "Afastamentos e Acidentes",
    resumo: "A Justiça do Trabalho deve executar de ofício o SAT (Seguro de Acidente de Trabalho) das condenações.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 250,
    assunto: "Afastamentos e Acidentes",
    resumo: "A base de cálculo da pensão mensal por danos materiais não inclui os valores do FGTS.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 263,
    assunto: "Afastamentos e Acidentes",
    resumo: "É viável a cumulação de pensão material com benefício do INSS, por possuírem naturezas distintas.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 268,
    assunto: "Afastamentos e Acidentes",
    resumo: "A suspensão do contrato pelo INSS não interrompe a contagem da prescrição quinquenal do processo.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },

  // =========================================================
  // DIREITOS GESTACIONAIS, ESTABILIDADES E CONDUTAS DISCRIMINATÓRIAS
  // =========================================================
  {
    numero: 55,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "O pedido de demissão de gestante só é válido se assistido por sindicato ou autoridade local.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 119,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "Dúvida sobre a data exata da gravidez não tira o direito à estabilidade da gestante.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 125,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "A estabilidade (12 meses) de doença ocupacional não requer afastamento superior a 15 dias se o nexo causal for reconhecido depois.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 134,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "Recusar o retorno ao trabalho oferecido não configura renúncia da gestante à indenização financeira de estabilidade.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 163,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "A gestante tem estabilidade garantida mesmo em contrato de trabalho temporário (experiência).",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 254,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "Demitir empregado com vírus HIV ou doenças graves/estigmatizantes gera nulidade (dispensa discriminatória) e reintegração.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 281,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "O direito à estabilidade do membro da CIPA acaba caso as atividades do estabelecimento se encerrem.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },
  {
    numero: 284,
    assunto: "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias",
    resumo: "O trabalhador suplente da CIPA também possui proteção da garantia provisória de emprego.",
    link: "",
    categoriaClasse: "categoria-estudo"
  },

  // =========================
  // ERGONOMIA E DIREITOS DO TRABALHADOR
  // =========================
  {
    numero: 1,
    assunto: "Ergonomia e Direitos do Trabalhador",
    resumo: "A exigência abusiva de certidão de antecedentes criminais gera dano moral automático, sendo válida somente por força de lei, em funções de grande fidúcia ou manipulação de tóxicos, armas e materiais perfurocortantes.",
    link: "",
    categoriaClasse: "categoria-pessoal"
  },
  {
    numero: 51,
    assunto: "Ergonomia e Direitos do Trabalhador",
    resumo: "Caixas bancários têm direito à pausa de 10 minutos a cada 50 de digitação, mesmo que intercalada com outras rotinas.",
    link: "",
    categoriaClasse: "categoria-pessoal"
  },
  {
    numero: 61,
    assunto: "Ergonomia e Direitos do Trabalhador",
    resumo: "O transporte de valores realizado por trabalhador sem preparo gera dano moral por risco acentuado.",
    link: "",
    categoriaClasse: "categoria-pessoal"
  },
  {
    numero: 84,
    assunto: "Ergonomia e Direitos do Trabalhador",
    resumo: "Carteiro vítima de roubo em serviço gera responsabilidade objetiva da empresa em pagar dano moral.",
    link: "",
    categoriaClasse: "categoria-pessoal"
  },
  {
    numero: 132,
    assunto: "Ergonomia e Direitos do Trabalhador",
    resumo: "O direito de exigir a entrega e a correção do Perfil Profissiográfico Previdenciário (PPP) não prescreve.",
    link: "",
    categoriaClasse: "categoria-pessoal"
  },
  {
    numero: 245,
    assunto: "Ergonomia e Direitos do Trabalhador",
    resumo: "Trabalhadores rurais em sobrecarga muscular estática/dinâmica têm direito a pausas de 10 minutos a cada 90 trabalhados.",
    link: "",
    categoriaClasse: "categoria-pessoal"
  }
];