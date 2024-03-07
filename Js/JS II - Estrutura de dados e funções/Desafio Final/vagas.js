function exibirMenu() {
  return prompt(
    "Menu de vagas\n" +
      "1.Listar vagas disponíveis.\n" +
      "2.Criar vagas novas\n" +
      "3.Vizualizar uma vaga\n" +
      "4.Inscrever uma vaga\n" +
      "5.excluir uma vaga\n" +
      "6.Sair"
  );
}

const vagas = [
  { nome: "Desenvolvedor Fullstack", candidatosInscritos: 10 },
  { nome: "Desenvolvedor PHP", candidatosInscritos: 5 },
  { nome: "Desenvolvedor JAVA", candidatosInscritos: 8 },
];

function listarVagas() {
  let listaDeVagas = "Lista de Vagas:\n";

  vagas.forEach((vaga, indice) => {
    listaDeVagas +=
      "\nÍndice : " +
      indice +
      "\nNome da vaga: " +
      vaga.nome +
      "\nCandidatos inscritos: " +
      vaga.candidatosInscritos;
  });

  alert(listaDeVagas);
}

function novaVaga() {
  // Crie um objeto vaga
  const vaga = {};

  // Solicite informações ao usuário
  vaga.nome = prompt("Qual o nome da vaga?");
  vaga.descricao = prompt("Digite uma descrição para a vaga: ");
  vaga.dataLimite = prompt("Digite uma data limite para a vaga: ");

  // Exiba um resumo das informações e peça confirmação ao usuário
  const confirmacao =
    "Salvar estes dados?\n" +
    "\nNome da vaga: " +
    vaga.nome +
    "\nDescrição da vaga: " +
    vaga.descricao +
    "\nData limite: " +
    vaga.dataLimite;

  const confirmacaoUsuario = confirm(confirmacao);

  if (confirmacaoUsuario) {
    // Adicione o objeto vaga ao array vagas
    vagas.push(vaga);
    alert("Vaga salva com sucesso!");
  } else {
    alert("Voltando para o menu");
  }
}

function inscreverVaga() {
  const indiceVaga = prompt("Digite o índice da vaga que deseja se inscrever:");
  const nomeCandidato = prompt("Digite o nome do candidato:");

  if (indiceVaga !== null && nomeCandidato !== null) {
    const indice = parseInt(indiceVaga, 10);

    if (!isNaN(indice) && indice >= 0 && indice < vagas.length) {
      const vaga = vagas[indice];
      const confirmacao = `Você está se inscrevendo na vaga:\nNome da Vaga: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}\nNome do Candidato: ${nomeCandidato}`;

      const confirmacaoUsuario = confirm(confirmacao);

      if (confirmacaoUsuario) {
        // Adicione o nome do candidato ao array de candidatos da vaga
        vaga.candidatosInscritos++; // Atualize o número de candidatos inscritos
        vaga.candidatos = vaga.candidatos || []; // Crie o array se não existir
        vaga.candidatos.push(nomeCandidato);

        alert("Inscrição realizada com sucesso!");
      } else {
        alert("Inscrição cancelada pelo usuário.");
      }
    } else {
      alert("Índice inválido ou fora do intervalo!");
    }
  } else {
    alert("Operação cancelada pelo usuário.");
  }
}

function visualizarVaga() {
  const indiceVaga = prompt("Digite o índice da vaga: ");

  if (indiceVaga !== null) {
    const indice = parseInt(indiceVaga, 10);

    if (!isNaN(indice) && indice >= 0 && indice < vagas.length) {
      const vaga = vagas[indice];
      const candidatos = vaga.candidatos || [];

      let mensagem =
        "Nome da Vaga: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dataLimite +
        "\nNúmero de candidatos: " +
        vaga.candidatosInscritos;

      if (candidatos.length > 0) {
        mensagem +=
          "\nNome dos candidatos inscritos:\n" + candidatos.join("\n");
      }

      alert(mensagem);
    } else {
      alert("Índice inválido ou fora do intervalo!");
    }
  } else {
    alert("Operação cancelada pelo usuário.");
  }
}

function excluirVaga() {
  const indiceVaga = prompt("Digite o índice da vaga: ");

  if (indiceVaga != null) {
    const indice = parseInt(indiceVaga, 10);

    if (!isNaN(indice) && indice >= 0 && indice < vagas.length) {
      const vaga = vagas[indice];
      const confirmacao =
        "Você está excluindo a vaga:\n" +
        "\nNome da vaga: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData limite: " +
        vaga.dataLimite +
        "\nNome do candidato: " +
        vaga.nomeCandidato;

      const confirmarExcluir = confirm(confirmacao);

      if (confirmarExcluir) {
        vagas.splice(indice, 1);
        alert("A vaga foi excluída com sucesso!");
      } else {
        alert("Voltando para o menu!");
      }
    } else {
      alert("Índice de vaga inválido.");
    }
  }
}

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
      visualizarVaga();
      break;
    case "4":
      inscreverVaga();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "6");
