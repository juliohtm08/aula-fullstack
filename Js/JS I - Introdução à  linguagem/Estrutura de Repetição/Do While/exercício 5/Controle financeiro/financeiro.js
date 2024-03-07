let saldo = parseFloat(prompt("Qual a quantidade de dinheiro disponível?"));
let opcao = "";

do {
  opcao = prompt(
    "Saldo: " +
      saldo +
      ",00" +
      "\nEscolha uma das opções: " +
      "\n1.Adicionar dinheiro" +
      "\n2.Sacar dinheiro" +
      "\n3.Encerrar porgrama"
  );

  switch (opcao) {
    case "1":
      //Nessa sintaxe o saldo inicial será somado com o saldo digitado pela pessoa e atualizar o saldo final
      saldo += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser sacado: "));
      break;
    case "3":
      alert("O programa está encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao != 3);
