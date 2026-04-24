// Menu
function carregarMenu(paginaAtual) {
  const menu = `
    <button class="btn-menu" type="button" onclick="alternarMenu()">
      ☰ Menu
    </button>

    <nav class="menu" id="menu-principal">
      <a href="/index.html" ${paginaAtual === "inicio" ? "class='ativo'" : ""}>Início</a>
      <a href="/pages/links.html" ${paginaAtual === "links" ? "class='ativo'" : ""}>Links</a>
      <a href="/pages/temas.html" ${paginaAtual === "temas" ? "class='ativo'" : ""}>Temas</a>
      <a href="/pages/notas.html" ${paginaAtual === "notas" ? "class='ativo'" : ""}>Notas</a>
      <a href="/pages/ferramentas.html" ${paginaAtual === "ferramentas" ? "class='ativo'" : ""}>Ferramentas</a>
    </nav>
  `;

  document.getElementById("menu-container").innerHTML = menu;
}

function alternarMenu() {
  const menu = document.getElementById("menu-principal");
  if (menu) {
    menu.classList.toggle("menu-aberto");
  }
}

// Busca simples nos cards de links
const campoBusca = document.getElementById("buscaLinks");

if (campoBusca) {
  campoBusca.addEventListener("input", function () {
    const termo = campoBusca.value.toLowerCase().trim();
    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach((categoria) => {
      const cards = categoria.querySelectorAll(".card-link");
      let categoriaTemResultado = false;

      cards.forEach((card) => {
        const textoCard = card.textContent.toLowerCase();

        if (textoCard.includes(termo)) {
          card.classList.remove("oculto");
          categoriaTemResultado = true;
        } else {
          card.classList.add("oculto");
        }
      });

      // Esconde a seção inteira se nenhum card combinar
      if (categoriaTemResultado || termo === "") {
        categoria.classList.remove("oculto");
      } else {
        categoria.classList.add("oculto");
      }
    });
  });
}

// Assistente de Anamnese Ocupacional
const btnGerarResumo = document.getElementById("btnGerarResumo");
const btnGerarTextoClinico = document.getElementById("btnGerarTextoClinico");
const btnLimparAnamnese = document.getElementById("btnLimparAnamnese");
const btnCopiarResultado = document.getElementById("btnCopiarResultado");
const btnWhatsappResultado = document.getElementById("btnWhatsappResultado");
const resultadoAnamnese = document.getElementById("resultadoAnamnese");

function obterValor(id) {
  const campo = document.getElementById(id);
  return campo ? campo.value.trim() : "";
}

function montarLinha(rotulo, valor) {
  if (!valor) return "";
  return `${rotulo}: ${valor}`;
}

function coletarDadosAnamnese() {
  return {
    nomePaciente: obterValor("nomePaciente"),
    empresaSetor: obterValor("empresaSetor"),
cnae: obterValor("cnae"),
cbo: obterValor("cbo"),
ocupacao: obterValor("ocupacao"),
cargo: obterValor("cargo"),
    profissao: obterValor("profissao"),
    comoFaz: obterValor("comoFaz"),
    frequencia: obterValor("frequencia"),
    tempoTrabalho: obterValor("tempoTrabalho"),
    diaTipico: obterValor("diaTipico"),
    equipamentos: obterValor("equipamentos"),
    maiorParteTempo: obterValor("maiorParteTempo"),
    facilDificil: obterValor("facilDificil"),
    ambiente: obterValor("ambiente"),
    jornada: obterValor("jornada"),
    pausas: obterValor("pausas"),
    organizacao: obterValor("organizacao"),
    protecao: obterValor("protecao"),
    impactoSaude: obterValor("impactoSaude"),
    historiaPregressa: obterValor("historiaPregressa"),
    riscosSelecionados: obterRiscosSelecionados(),
    riscosDetalhe: obterValor("riscosDetalhe"),
  };
}

function gerarResumoLista(dados) {
  const linhas = [];

  linhas.push("ANAMNESE OCUPACIONAL");
  linhas.push("");

  if (dados.nomePaciente) {
    linhas.push(`Identificação: ${dados.nomePaciente}`);
    linhas.push("");
  }
linhas.push("Identificação técnico-ocupacional");

const blocoTecnico = [
  dados.empresaSetor && `Empresa / setor: ${dados.empresaSetor}`,
  dados.cnae && `CNAE: ${dados.cnae}`,
  dados.cbo && `CBO: ${dados.cbo}`,
  dados.ocupacao && `ocupação / profissão: ${dados.ocupacao}`,
  dados.cargo && `Cargo contratado: ${dados.cargo}`,
].filter(Boolean);
linhas.push("");

if (blocoTecnico.length > 0) {
  linhas.push(...blocoTecnico);
} else {
  linhas.push("Sem informações preenchidas neste bloco.");
}
linhas.push("");
  linhas.push("1. Perguntas norteadoras básicas");
  const bloco1 = [
    montarLinha("Trabalho / função", dados.profissao),
    montarLinha("Como realiza o trabalho", dados.comoFaz),
    montarLinha("Frequência das tarefas", dados.frequencia),
    montarLinha("Tempo no trabalho atual", dados.tempoTrabalho),
  ].filter(Boolean);

  linhas.push(...(bloco1.length ? bloco1 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("2. Rotina e atividades detalhadas");
  const bloco2 = [
    montarLinha("Dia típico de trabalho", dados.diaTipico),
    montarLinha("Equipamentos / ferramentas / produtos utilizados", dados.equipamentos),
    montarLinha("Atividade predominante", dados.maiorParteTempo),
    montarLinha("Aspectos mais fáceis e mais difíceis/arriscados", dados.facilDificil),
  ].filter(Boolean);

  linhas.push(...(bloco2.length ? bloco2 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("3. Ambiente de trabalho e riscos ocupacionais");
  const bloco3 = [
    montarLinha("Ambiente e condições de trabalho", dados.ambiente),
montarLinha(
  "Riscos ocupacionais",
  [
    formatarLista(dados.riscosSelecionados),
    dados.riscosDetalhe
  ].filter(Boolean).join(" | ")
),
  ].filter(Boolean);

  linhas.push(...(bloco3.length ? bloco3 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("4. Organização do trabalho e fatores psicossociais");
  const bloco4 = [
    montarLinha("Jornada / turno", dados.jornada),
    montarLinha("Pausas", dados.pausas),
    montarLinha("Organização, metas, cobranças e relações de trabalho", dados.organizacao),
  ].filter(Boolean);

  linhas.push(...(bloco4.length ? bloco4 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("5. Proteção e prevenção");
  const bloco5 = [
    montarLinha("Proteções coletivas / EPI", dados.protecao),
  ].filter(Boolean);

  linhas.push(...(bloco5.length ? bloco5 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("6. Impacto do trabalho na saúde atual");
  const bloco6 = [
    montarLinha("Relação entre trabalho e quadro atual", dados.impactoSaude),
  ].filter(Boolean);

  linhas.push(...(bloco6.length ? bloco6 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("7. História ocupacional pregressa");
  const bloco7 = [
    montarLinha("História ocupacional anterior", dados.historiaPregressa),
  ].filter(Boolean);

  linhas.push(...(bloco7.length ? bloco7 : ["Sem informações preenchidas neste bloco."]));

  return linhas.join("\n");
}
function gerarTextoClinico(dados) {
  const partes = [];

  let abertura = "";

  if (dados.nomePaciente) {
    abertura += `Paciente ${dados.nomePaciente}.`;
  } else {
    abertura += "Paciente.";
  }

  partes.push(abertura);

  let blocoTecnico = "";

  if (
    dados.empresaSetor ||
    dados.cnae ||
    dados.cbo ||
    dados.ocupacao ||
    dados.cargo
  ) {
  if (dados.empresaSetor) {
  blocoTecnico += ` Atua em ${dados.empresaSetor}`;

  if (dados.cnae) {
    blocoTecnico += ` (CNAE: ${dados.cnae})`;
  }
}

if (dados.ocupacao) {
  blocoTecnico += `, Ocupação informada ${dados.ocupacao}`;

  if (dados.cbo) {
    blocoTecnico += ` (CBO: ${dados.cbo})`;
  }
}

if (dados.cargo) {
  blocoTecnico += `, exercendo o cargo de ${dados.cargo}`;
}

    blocoTecnico += ".";
    partes.push(blocoTecnico.trim());
  }

  let atividades = "";

  if (dados.profissao) {
    atividades += ` Refere atuar como ${dados.profissao}.`;
  }

  if (dados.comoFaz) {
    atividades += ` Realiza atividades como ${dados.comoFaz}.`;
  }

  if (dados.frequencia) {
    atividades += ` Executa tais tarefas com frequência ${dados.frequencia}.`;
  }

  if (dados.tempoTrabalho) {
    atividades += ` Está neste trabalho há aproximadamente ${dados.tempoTrabalho}.`;
  }

  if (dados.diaTipico) {
    atividades += ` Descreve dia típico de trabalho da seguinte forma: ${dados.diaTipico}.`;
  }

  if (dados.maiorParteTempo) {
    atividades += ` Na maior parte do tempo, permanece em atividade relacionada a ${dados.maiorParteTempo}.`;
  }

  if (dados.facilDificil) {
    atividades += ` Quanto às exigências da função, relata: ${dados.facilDificil}.`;
  }

  if (atividades) {
    partes.push(atividades.trim());
  }

  let ambiente = "";

  if (dados.ambiente) {
    ambiente += ` O ambiente de trabalho é descrito como ${dados.ambiente}.`;
  }

  if (dados.equipamentos) {
    ambiente += ` Refere utilização de produtos, equipamentos, ferramentas ou instrumentos como ${dados.equipamentos}.`;
  }

  if (dados.riscosSelecionados && dados.riscosSelecionados.length > 0) {
    ambiente += ` Refere exposição ocupacional a agentes ${formatarLista(dados.riscosSelecionados)}.`;
  }

  if (dados.riscosDetalhe) {
    ambiente += ` Detalha-se ainda: ${dados.riscosDetalhe}.`;
  }

  if (ambiente) {
    partes.push(ambiente.trim());
  }

  let organizacao = "";

  if (dados.jornada) {
    organizacao += ` Jornada habitual de ${dados.jornada}.`;
  }

  if (dados.pausas) {
    organizacao += ` Quanto às pausas, informa que ${dados.pausas}.`;
  }

  if (dados.organizacao) {
    organizacao += ` Em relação à organização do trabalho e fatores psicossociais, relata ${dados.organizacao}.`;
  }

  if (organizacao) {
    partes.push(organizacao.trim());
  }

  let protecao = "";

  if (dados.protecao) {
    protecao += ` Quanto às medidas de proteção e prevenção, refere que ${dados.protecao}.`;
  }

  if (protecao) {
    partes.push(protecao.trim());
  }

  let impacto = "";

  if (dados.impactoSaude) {
    impacto += ` Quanto ao impacto do trabalho na saúde atual, paciente relata que ${dados.impactoSaude}.`;
  }

  if (impacto) {
    partes.push(impacto.trim());
  }

  let pregressa = "";

  if (dados.historiaPregressa) {
    pregressa += ` Em relação à história ocupacional pregressa, informa ${dados.historiaPregressa}.`;
  }

  if (pregressa) {
    partes.push(pregressa.trim());
  }

  return partes.join("\n\n");
}
if (btnGerarResumo && resultadoAnamnese) {
  btnGerarResumo.addEventListener("click", function () {
    const dados = coletarDadosAnamnese();
    resultadoAnamnese.value = gerarResumoLista(dados);
  });
}

if (btnGerarTextoClinico && resultadoAnamnese) {
  btnGerarTextoClinico.addEventListener("click", function () {
    const dados = coletarDadosAnamnese();
    resultadoAnamnese.value = gerarTextoClinico(dados);
  });
}

if (btnLimparAnamnese) {
  btnLimparAnamnese.addEventListener("click", function () {
    const form = document.getElementById("formAnamnese");
    if (form) form.reset();
    if (resultadoAnamnese) resultadoAnamnese.value = "";
  });
}

if (btnCopiarResultado && resultadoAnamnese) {
  btnCopiarResultado.addEventListener("click", async function () {
    if (!resultadoAnamnese.value.trim()) {
      alert("Gere um resumo antes de copiar.");
      return;
    }

    try {
      await navigator.clipboard.writeText(resultadoAnamnese.value);
      alert("Texto copiado com sucesso.");
    } catch (erro) {
      alert("Não foi possível copiar automaticamente. Copie manualmente.");
    }
  });
}

if (btnWhatsappResultado && resultadoAnamnese) {
  btnWhatsappResultado.addEventListener("click", function () {
    const texto = resultadoAnamnese.value.trim();

    if (!texto) {
      alert("Gere um resumo antes de abrir no WhatsApp.");
      return;
    }

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
}
function obterRiscosSelecionados() {
  const checkboxes = document.querySelectorAll(".risco-checkbox:checked");
  return Array.from(checkboxes).map(cb => cb.value);
}
function formatarLista(lista) {
  if (lista.length === 0) return "";
  if (lista.length === 1) return lista[0];
  if (lista.length === 2) return lista.join(" e ");
  return lista.slice(0, -1).join(", ") + " e " + lista.slice(-1);
}

function obterDescricaoAssunto(nomeAssunto) {
  const descricoes = {
    "Adicionais Ambientais": "Insalubridade, periculosidade e entendimentos correlatos.",
    "Afastamentos e Acidentes": "Concausa, pensão, dano ocupacional e temas previdenciários correlatos.",
    "Direitos Gestacionais, Estabilidades e Condutas Discriminatórias": "Estabilidades provisórias, reintegração e dispensa discriminatória.",
    "Ergonomia e Direitos do Trabalhador": "Pausas, PPP, antecedentes criminais e outros direitos correlatos."
  };

  return descricoes[nomeAssunto] || "";
}

function agruparTemasPorAssunto(listaTemas) {
  const grupos = {};

  listaTemas.forEach((tema) => {
    if (!grupos[tema.assunto]) {
      grupos[tema.assunto] = [];
    }

    grupos[tema.assunto].push(tema);
  });

  return grupos;
}

function criarCardTema(tema) {
  const tag = tema.link ? "a" : "div";
  const card = document.createElement(tag);

  card.className = "card-link tema-card";
  card.dataset.tema = tema.numero;
  card.dataset.assunto = tema.assunto;

  if (tema.link) {
    card.href = tema.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  }

  card.innerHTML = `
    <strong>Tema ${tema.numero}</strong>
    <span>${tema.resumo}</span>
  `;

  return card;
}

function renderizarTemas() {
  const container = document.getElementById("temas-container");
  if (!container || typeof temasTST === "undefined") return;

  container.innerHTML = "";

  const grupos = agruparTemasPorAssunto(temasTST);

  Object.keys(grupos).forEach((assunto) => {
    const temasDoAssunto = grupos[assunto];
    const classeCategoria = temasDoAssunto[0].categoriaClasse || "categoria-oficial";

    const section = document.createElement("section");
    section.className = `categoria ${classeCategoria}`;
    section.dataset.assunto = assunto;

    const titulo = document.createElement("h2");
    titulo.textContent = assunto;

    const descricao = document.createElement("p");
    descricao.className = "texto-apoio";
    descricao.textContent = obterDescricaoAssunto(assunto);

    const grid = document.createElement("div");
    grid.className = "grid-links";

    temasDoAssunto.forEach((tema) => {
      grid.appendChild(criarCardTema(tema));
    });

    section.appendChild(titulo);
    section.appendChild(descricao);
    section.appendChild(grid);

    container.appendChild(section);
  });

  ativarBuscaTemas();
}

function ativarBuscaTemas() {
  const buscaTemas = document.getElementById("buscaTemas");
  if (!buscaTemas) return;

  buscaTemas.addEventListener("input", function () {
    const termo = buscaTemas.value.toLowerCase().trim();
    const categorias = document.querySelectorAll("#temas-container .categoria");

    categorias.forEach((categoria) => {
      const cards = categoria.querySelectorAll(".tema-card");
      let categoriaTemResultado = false;

      cards.forEach((card) => {
        const texto = card.textContent.toLowerCase();
        const numero = String(card.dataset.tema || "").toLowerCase();

        if (termo === "" || texto.includes(termo) || numero.includes(termo)) {
          card.classList.remove("oculto");
          categoriaTemResultado = true;
        } else {
          card.classList.add("oculto");
        }
      });

      if (categoriaTemResultado) {
        categoria.classList.remove("oculto");
      } else {
        categoria.classList.add("oculto");
      }
    });
  });
}

function carregarFooter() {
  const footer = `
    <footer class="rodape">
      <div class="container">
        <p>
        Este site é de uso pessoal para apoio ao estudo e à prática médica, com ênfase em medicina do trabalho.
        As informações aqui reunidas não substituem avaliação clínica, consulta à legislação vigente
        ou parecer técnico oficial.
        </p>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }
}
// Assistente de Anamnese Geral
const btnGerarResumoGeral = document.getElementById("btnGerarResumoGeral");
const btnGerarTextoClinicoGeral = document.getElementById("btnGerarTextoClinicoGeral");
const btnLimparAnamneseGeral = document.getElementById("btnLimparAnamneseGeral");
const btnCopiarResultadoGeral = document.getElementById("btnCopiarResultadoGeral");
const btnWhatsappResultadoGeral = document.getElementById("btnWhatsappResultadoGeral");
const resultadoAnamneseGeral = document.getElementById("resultadoAnamneseGeral");

function obterValorGeral(id) {
  const campo = document.getElementById(id);
  return campo ? campo.value.trim() : "";
}

function coletarDadosAnamneseGeral() {
  return {
    nomePaciente: obterValorGeral("agNomePaciente"),
    acompanhante: obterValorGeral("agAcompanhante"),
    idade: obterValorGeral("agIdade"),
    sexo: obterValorGeral("agSexo"),
    profissao: obterValorGeral("agProfissao"),
    procedencia: obterValorGeral("agProcedencia"),
    queixaPrincipal: obterValorGeral("agQueixaPrincipal"),
    duracaoQueixa: obterValorGeral("agDuracaoQueixa"),
    hda: obterValorGeral("agHda"),
    dorDetalhes: obterValorGeral("agDorDetalhes"),
    sintomasAssociados: obterValorGeral("agSintomasAssociados"),
    antecedentes: obterValorGeral("agAntecedentes"),
    medicacoes: obterValorGeral("agMedicacoes"),
    antecedentesFamiliares: obterValorGeral("agAntecedentesFamiliares"),
    habitosVida: obterValorGeral("agHabitosVida"),
    historiaSocial: obterValorGeral("agHistoriaSocial"),
    exameFisico: obterValorGeral("agExameFisico"),
    examesComplementares: obterValorGeral("agExamesComplementares"),
    hipotese: obterValorGeral("agHipotese"),
    conduta: obterValorGeral("agConduta"),
  };
}

function formatarAcompanhante(acompanhante) {
  if (!acompanhante) return "";

  const valor = acompanhante.trim().toLowerCase();

  if (
    valor === "sozinho" ||
    valor === "sozinha" ||
    valor === "desacompanhado" ||
    valor === "desacompanhada" ||
    valor === "sem acompanhante"
  ) {
    return "Comparece desacompanhado.";
  }

  return `Acompanhado por ${acompanhante}.`;
}

function gerarResumoAnamneseGeral(dados) {
  const linhas = [];

  linhas.push("ANAMNESE GERAL");
  linhas.push("");

  const identificacao = [
    dados.nomePaciente,
    dados.idade,
    dados.sexo,
    dados.profissao,
    dados.procedencia
  ].filter(Boolean).join(" | ");

  if (identificacao) {
    linhas.push(`Identificação: ${identificacao}`);
  }

  if (dados.acompanhante) {
    linhas.push(`Acompanhante / responsável: ${dados.acompanhante}`);
  }

  linhas.push("");
  linhas.push("1. Queixa principal e HDA");

  if (dados.queixaPrincipal) {
    linhas.push(`Queixa principal: ${dados.queixaPrincipal}`);
  }

  if (dados.duracaoQueixa) {
    linhas.push(`Duração: ${dados.duracaoQueixa}`);
  }

  if (dados.hda) {
    linhas.push(`HDA: ${dados.hda}`);
  }

  if (dados.dorDetalhes) {
    linhas.push(`Dor - detalhes: ${dados.dorDetalhes}`);
  }

  if (!dados.queixaPrincipal && !dados.duracaoQueixa && !dados.hda && !dados.dorDetalhes) {
    linhas.push("Sem informações preenchidas neste bloco.");
  }

  linhas.push("");
  linhas.push("2. Interrogatório sintomatológico");

  if (dados.sintomasAssociados) {
    linhas.push(`Sintomas associados / revisão: ${dados.sintomasAssociados}`);
  } else {
    linhas.push("Sem informações preenchidas neste bloco.");
  }

  linhas.push("");
  linhas.push("3. Antecedentes e medicações");

  if (dados.antecedentes) {
    linhas.push(`Antecedentes pessoais: ${dados.antecedentes}`);
  }

  if (dados.medicacoes) {
    linhas.push(`Medicações em uso: ${dados.medicacoes}`);
  }

  if (dados.antecedentesFamiliares) {
    linhas.push(`Antecedentes familiares: ${dados.antecedentesFamiliares}`);
  }

  if (!dados.antecedentes && !dados.medicacoes && !dados.antecedentesFamiliares) {
    linhas.push("Sem informações preenchidas neste bloco.");
  }

  linhas.push("");
  linhas.push("4. Hábitos e história social");

  if (dados.habitosVida) {
    linhas.push(`Hábitos de vida: ${dados.habitosVida}`);
  }

  if (dados.historiaSocial) {
    linhas.push(`História social / suporte: ${dados.historiaSocial}`);
  }

  if (!dados.habitosVida && !dados.historiaSocial) {
    linhas.push("Sem informações preenchidas neste bloco.");
  }

  linhas.push("");
  linhas.push("5. Exame físico e exames complementares");

  if (dados.exameFisico) {
    linhas.push(`Exame físico: ${dados.exameFisico}`);
  }

  if (dados.examesComplementares) {
    linhas.push(`Exames complementares: ${dados.examesComplementares}`);
  }

  if (!dados.exameFisico && !dados.examesComplementares) {
    linhas.push("Sem informações preenchidas neste bloco.");
  }

  linhas.push("");
  linhas.push("6. Impressão clínica e conduta");

  if (dados.hipotese) {
    linhas.push(`Hipótese / impressão clínica: ${dados.hipotese}`);
  }

  if (dados.conduta) {
    linhas.push(`Conduta / plano: ${dados.conduta}`);
  }

  if (!dados.hipotese && !dados.conduta) {
    linhas.push("Sem informações preenchidas neste bloco.");
  }

  return linhas.join("\n");
}

function gerarTextoClinicoAnamneseGeral(dados) {
  const partes = [];

  let abertura = "";

  if (dados.nomePaciente || dados.idade || dados.sexo || dados.profissao || dados.procedencia) {
    abertura += "Paciente";

    if (dados.nomePaciente) {
      abertura += ` ${dados.nomePaciente}`;
    }

    const detalhes = [dados.idade, dados.sexo, dados.profissao].filter(Boolean);
    if (detalhes.length > 0) {
      abertura += `, ${detalhes.join(", ")}`;
    }

    if (dados.procedencia) {
      abertura += `, procedente de ${dados.procedencia}`;
    }

    abertura += ".";
  }

const textoAcompanhante = formatarAcompanhante(dados.acompanhante);
if (textoAcompanhante) {
  abertura += ` ${textoAcompanhante}`;
}

  if (abertura) {
    partes.push(abertura.trim());
  }

  let blocoQueixa = "";

  if (dados.queixaPrincipal) {
    blocoQueixa += ` Apresenta como queixa principal ${dados.queixaPrincipal}`;
    if (dados.duracaoQueixa) {
      blocoQueixa += ` há ${dados.duracaoQueixa}`;
    }
    blocoQueixa += ".";
  }

  if (dados.hda) {
    blocoQueixa += ` História da doença atual: ${dados.hda}.`;
  }

  if (dados.dorDetalhes) {
    blocoQueixa += ` Em relação à dor, ${dados.dorDetalhes}.`;
  }

  if (dados.sintomasAssociados) {
    blocoQueixa += ` Refere ainda ${dados.sintomasAssociados}.`;
  }

  if (blocoQueixa) {
    partes.push(blocoQueixa.trim());
  }

  let blocoAntecedentes = "";

  if (dados.antecedentes) {
    blocoAntecedentes += ` Como antecedentes pessoais, relata ${dados.antecedentes}.`;
  }

  if (dados.medicacoes) {
    blocoAntecedentes += ` Em uso de ${dados.medicacoes}.`;
  }

  if (dados.antecedentesFamiliares) {
    blocoAntecedentes += ` Antecedentes familiares relevantes: ${dados.antecedentesFamiliares}.`;
  }

  if (blocoAntecedentes) {
    partes.push(blocoAntecedentes.trim());
  }

  let blocoHabitos = "";

  if (dados.habitosVida) {
    blocoHabitos += ` Hábitos de vida: ${dados.habitosVida}.`;
  }

  if (dados.historiaSocial) {
    blocoHabitos += ` História social / suporte: ${dados.historiaSocial}.`;
  }

  if (blocoHabitos) {
    partes.push(blocoHabitos.trim());
  }

  let blocoObjetivo = "";

  if (dados.exameFisico) {
    blocoObjetivo += ` Ao exame físico: ${dados.exameFisico}.`;
  }

  if (dados.examesComplementares) {
    blocoObjetivo += ` Exames complementares relevantes: ${dados.examesComplementares}.`;
  }

  if (blocoObjetivo) {
    partes.push(blocoObjetivo.trim());
  }

  let blocoPlano = "";

  if (dados.hipotese) {
    blocoPlano += ` Hipótese / impressão clínica inicial: ${dados.hipotese}.`;
  }

  if (dados.conduta) {
    blocoPlano += ` Conduta proposta: ${dados.conduta}.`;
  }

  if (blocoPlano) {
    partes.push(blocoPlano.trim());
  }

  return partes.join("\n\n");
}

if (btnGerarResumoGeral && resultadoAnamneseGeral) {
  btnGerarResumoGeral.addEventListener("click", function () {
    const dados = coletarDadosAnamneseGeral();
    resultadoAnamneseGeral.value = gerarResumoAnamneseGeral(dados);
  });
}

if (btnGerarTextoClinicoGeral && resultadoAnamneseGeral) {
  btnGerarTextoClinicoGeral.addEventListener("click", function () {
    const dados = coletarDadosAnamneseGeral();
    resultadoAnamneseGeral.value = gerarTextoClinicoAnamneseGeral(dados);
  });
}

if (btnLimparAnamneseGeral) {
  btnLimparAnamneseGeral.addEventListener("click", function () {
    const form = document.getElementById("formAnamneseGeral");
    if (form) form.reset();
    if (resultadoAnamneseGeral) resultadoAnamneseGeral.value = "";
  });
}

if (btnCopiarResultadoGeral && resultadoAnamneseGeral) {
  btnCopiarResultadoGeral.addEventListener("click", async function () {
    if (!resultadoAnamneseGeral.value.trim()) {
      alert("Gere um texto antes de copiar.");
      return;
    }

    try {
      await navigator.clipboard.writeText(resultadoAnamneseGeral.value);
      alert("Texto copiado com sucesso.");
    } catch (erro) {
      alert("Não foi possível copiar automaticamente. Copie manualmente.");
    }
  });
}

if (btnWhatsappResultadoGeral && resultadoAnamneseGeral) {
  btnWhatsappResultadoGeral.addEventListener("click", function () {
    const texto = resultadoAnamneseGeral.value.trim();

    if (!texto) {
      alert("Gere um texto antes de abrir no WhatsApp.");
      return;
    }

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
}