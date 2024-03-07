let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas do baralho: " +
      baralho.length +
      "\nEscolha uma das opções.\n1.Adicionar carta\n2.Puxar carta\n3.Sair"
  );
  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual carta deseja adicionar?");
      baralho.unshift(novaCarta);
      break;
    case "2":
      const CartaPuxada = baralho.pop();
      //Aqui, dentro do parênteses do IF, ele usa uma variável booleana, caso haja a carta no baralho ela será exibida, caso contrário, não a exibirá
      if (CartaPuxada) {
        alert("Você puxou o(a) " + CartaPuxada);
      } else {
        alert("Não há nenhuma carta no baralho");
      }
      break;
    case "3":
      alert("encerrando...");
      break;
    default:
      alert("opção inválida.");
      break;
  }
} while (opcao != "3");
