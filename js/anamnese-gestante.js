// Assistente de Anamnese de Gestante
const btnGerarResumoGestante = document.getElementById("btnGerarResumoGestante");
const btnGerarTextoGestante = document.getElementById("btnGerarTextoGestante");
const btnLimparGestante = document.getElementById("btnLimparGestante");
const btnCopiarGestante = document.getElementById("btnCopiarGestante");
const btnWhatsappGestante = document.getElementById("btnWhatsappGestante");
const resultadoGestante = document.getElementById("resultadoGestante");

function obterValorGestante(id) {
  const campo = document.getElementById(id);
  return campo ? campo.value.trim() : "";
}

function coletarDadosGestante() {
  return {
    nome: obterValorGestante("gestNome"),
    acompanhante: obterValorGestante("gestAcompanhante"),
    idade: obterValorGestante("gestIdade"),
    profissao: obterValorGestante("gestProfissao"),
    planejada: obterValorGestante("gestPlanejada"),
    historiaAtual: obterValorGestante("gestHistoriaAtual"),
    dum: obterValorGestante("gestDum"),
    dpp: obterValorGestante("gestDpp"),
    ig: obterValorGestante("gestIg"),
    tipoSanguineo: obterValorGestante("gestTipoSanguineo"),
    interrogatorio: obterValorGestante("gestInterrogatorio"),
    antecedentesPessoais: obterValorGestante("gestAntecedentesPessoais"),
    historiaObstetrica: obterValorGestante("gestHistoriaObstetrica"),
    antecedentesFamiliares: obterValorGestante("gestAntecedentesFamiliares"),
    medicacoes: obterValorGestante("gestMedicacoes"),
    habitos: obterValorGestante("gestHabitos"),
    exameFisico: obterValorGestante("gestExameFisico"),
    exameObstetrico: obterValorGestante("gestExameObstetrico"),
    mamasGineco: obterValorGestante("gestMamasGineco"),
    exames: obterValorGestante("gestExames"),
    hipotese: obterValorGestante("gestHipotese"),
    conduta: obterValorGestante("gestConduta"),
  };
}

function gerarResumoGestante(dados) {
  const linhas = [];

  linhas.push("ANAMNESE DE GESTANTE");

  const identificacao = [
    dados.nome,
    dados.idade,
    dados.profissao
  ].filter(Boolean).join(" | ");

  if (identificacao) {
    linhas.push("");
    linhas.push(`Identificação: ${identificacao}`);
  }

  if (dados.acompanhante) linhas.push(`Acompanhante / responsável: ${dados.acompanhante}`);

  linhas.push("");
  linhas.push("1. Gestação atual");

  const bloco1 = [
    dados.planejada && `Gestação planejada/desejada: ${dados.planejada}`,
    dados.historiaAtual && `História da gestação atual: ${dados.historiaAtual}`,
    dados.dum && `DUM: ${dados.dum}`,
    dados.dpp && `DPP: ${dados.dpp}`,
    dados.ig && `Idade gestacional: ${dados.ig}`,
    dados.tipoSanguineo && `Tipo sanguíneo: ${dados.tipoSanguineo}`,
    dados.interrogatorio && `Interrogatório sintomatológico: ${dados.interrogatorio}`,
  ].filter(Boolean);

  linhas.push(...(bloco1.length ? bloco1 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("2. Antecedentes");

  const bloco2 = [
    dados.antecedentesPessoais && `Antecedentes pessoais: ${dados.antecedentesPessoais}`,
    dados.historiaObstetrica && `História obstétrica: ${dados.historiaObstetrica}`,
    dados.antecedentesFamiliares && `Antecedentes familiares: ${dados.antecedentesFamiliares}`,
    dados.medicacoes && `Medicações em uso: ${dados.medicacoes}`,
    dados.habitos && `Hábitos de vida: ${dados.habitos}`,
  ].filter(Boolean);

  linhas.push(...(bloco2.length ? bloco2 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("3. Exame físico e exames complementares");

  const bloco3 = [
    dados.exameFisico && `Exame físico geral: ${dados.exameFisico}`,
    dados.exameObstetrico && `Exame obstétrico: ${dados.exameObstetrico}`,
    dados.mamasGineco && `Mamas / ginecológico: ${dados.mamasGineco}`,
    dados.exames && `Exames complementares: ${dados.exames}`,
  ].filter(Boolean);

  linhas.push(...(bloco3.length ? bloco3 : ["Sem informações preenchidas neste bloco."]));

  linhas.push("");
  linhas.push("4. Impressão clínica e conduta");

  const bloco4 = [
    dados.hipotese && `Hipótese / impressão clínica: ${dados.hipotese}`,
    dados.conduta && `Conduta / plano: ${dados.conduta}`,
  ].filter(Boolean);

  linhas.push(...(bloco4.length ? bloco4 : ["Sem informações preenchidas neste bloco."]));

  return linhas.join("\n");
}

function gerarTextoGestante(dados) {
  const partes = [];

  let abertura = "Gestante";

  if (dados.nome) abertura += ` ${dados.nome}`;
  if (dados.idade) abertura += `, ${dados.idade}`;
  if (dados.profissao) abertura += `, ${dados.profissao}`;

  abertura += ".";

  if (dados.acompanhante) {
    const valor = dados.acompanhante.toLowerCase();
    if (valor.includes("sozinha") || valor.includes("desacompanhada")) {
      abertura += " Comparece desacompanhada.";
    } else {
      abertura += ` Acompanhada por ${dados.acompanhante}.`;
    }
  }

  partes.push(abertura);

  let gestacao = "";

  if (dados.planejada) gestacao += ` Refere gestação ${dados.planejada}.`;
  if (dados.historiaAtual) gestacao += ` História da gestação atual: ${dados.historiaAtual}.`;
  if (dados.dum) gestacao += ` DUM: ${dados.dum}.`;
  if (dados.dpp) gestacao += ` DPP: ${dados.dpp}.`;
  if (dados.ig) gestacao += ` Idade gestacional: ${dados.ig}.`;
  if (dados.tipoSanguineo) gestacao += ` Tipo sanguíneo: ${dados.tipoSanguineo}.`;
  if (dados.interrogatorio) gestacao += ` Interrogatório sintomatológico: ${dados.interrogatorio}.`;

  if (gestacao) partes.push(gestacao.trim());

  let antecedentes = "";

  if (dados.antecedentesPessoais) antecedentes += ` Antecedentes pessoais: ${dados.antecedentesPessoais}.`;
  if (dados.historiaObstetrica) antecedentes += ` História obstétrica: ${dados.historiaObstetrica}.`;
  if (dados.antecedentesFamiliares) antecedentes += ` Antecedentes familiares: ${dados.antecedentesFamiliares}.`;
  if (dados.medicacoes) antecedentes += ` Em uso de ${dados.medicacoes}.`;
  if (dados.habitos) antecedentes += ` Hábitos de vida: ${dados.habitos}.`;

  if (antecedentes) partes.push(antecedentes.trim());

  let exame = "";

  if (dados.exameFisico) exame += ` Ao exame físico geral: ${dados.exameFisico}.`;
  if (dados.exameObstetrico) exame += ` Exame obstétrico: ${dados.exameObstetrico}.`;
  if (dados.mamasGineco) exame += ` Exame de mamas/ginecológico: ${dados.mamasGineco}.`;
  if (dados.exames) exame += ` Exames complementares: ${dados.exames}.`;

  if (exame) partes.push(exame.trim());

  let plano = "";

  if (dados.hipotese) plano += ` Impressão clínica: ${dados.hipotese}.`;
  if (dados.conduta) plano += ` Conduta proposta: ${dados.conduta}.`;

  if (plano) partes.push(plano.trim());

  return partes.join("\n\n");
}

if (btnGerarResumoGestante && resultadoGestante) {
  btnGerarResumoGestante.addEventListener("click", function () {
    const dados = coletarDadosGestante();
    resultadoGestante.value = gerarResumoGestante(dados);
  });
}

if (btnGerarTextoGestante && resultadoGestante) {
  btnGerarTextoGestante.addEventListener("click", function () {
    const dados = coletarDadosGestante();
    resultadoGestante.value = gerarTextoGestante(dados);
  });
}

if (btnLimparGestante) {
  btnLimparGestante.addEventListener("click", function () {
    const form = document.getElementById("formAnamneseGestante");
    if (form) form.reset();
    if (resultadoGestante) resultadoGestante.value = "";
  });
}

if (btnCopiarGestante && resultadoGestante) {
  btnCopiarGestante.addEventListener("click", async function () {
    if (!resultadoGestante.value.trim()) {
      alert("Gere um texto antes de copiar.");
      return;
    }

    try {
      await navigator.clipboard.writeText(resultadoGestante.value);
      alert("Texto copiado com sucesso.");
    } catch (erro) {
      alert("Não foi possível copiar automaticamente. Copie manualmente.");
    }
  });
}

if (btnWhatsappGestante && resultadoGestante) {
  btnWhatsappGestante.addEventListener("click", function () {
    const texto = resultadoGestante.value.trim();

    if (!texto) {
      alert("Gere um texto antes de abrir no WhatsApp.");
      return;
    }

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
}