// Declaração do array de vagas vazio
const vagas = [];

// Função para listar as vagas disponíveis
function listarVagas() {
  // Reduz o array de vagas para uma string de texto formatada
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  // Exibe as vagas em uma caixa de diálogo
  alert(vagasEmTexto);
}

// Função para criar uma nova vaga
function novaVaga() {
  // Solicita informações ao usuário
  const nome = prompt("Informe um nome para a vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga: ");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa para a vaga): "
  );

  // Confirmação para criar a nova vaga
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    // Cria a nova vaga e a adiciona ao array
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}

// Função para exibir detalhes de uma vaga
function exibirVaga() {
  // Solicita ao usuário o índice da vaga a ser exibida
  const indice = prompt("Informe o índice da vaga que deseja exibir:");

  if (indice >= vagas.length || indice < 0) {
    alert("Índice inválido!");
    return;
  }

  const vaga = vagas[indice];

  // Reduz a lista de candidatos para uma string de texto formatada
  const candidatosEmTexto = vaga.candidatos.reduce(
    (textoFinal, candidato) => textoFinal + "\n - " + candidato,
    ""
  );

  // Exibe os detalhes da vaga em uma caixa de diálogo
  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      candidatosEmTexto
  );
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
  // Solicita o nome do candidato e o índice da vaga
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  // Confirmação para inscrever o candidato na vaga
  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    // Adiciona o candidato à lista de candidatos da vaga
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

// Função para excluir uma vaga
function excluirVaga() {
  // Solicita o índice da vaga a ser excluída
  const indice = prompt("Informe o índice da vaga que deseja excluir: ");
  const vaga = vagas[indice];

  // Confirmação para excluir a vaga
  const confirmacao = confirm(
    "Tem deseja que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    // Remove a vaga do array
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  }
}

// Função para exibir o menu e executar as opções
function exibirMenu() {
  const opcao = prompt(
    "Cadastro de vagas de emprego" +
      "\n\nEscolha uma das opções abaixo:" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato" +
      "\n5. Excluir vaga" +
      "\n6. Sair"
  );
  return opcao;
}

// Função principal para executar o programa
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== "6");
}

// Chama a função principal para iniciar o programa
executar();
