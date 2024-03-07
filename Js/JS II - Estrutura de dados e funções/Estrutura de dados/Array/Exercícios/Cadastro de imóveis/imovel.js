let imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo(a) ao cadastro de imóveis!\n" +
      "Total de imóveis: " +
      imoveis.length +
      "\nEscolha uma opção:\n1.Novo imóvel \n2.Lista de imóveis \n3.Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("imforme o nome do proprietário: ");
      imovel.quartos = prompt("Quantos quartos possui o imóvel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel?");
      imovel.garagem = prompt("O imóvel possui garagem? (SIM/NÃO)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("imóvel salvo com sucesso!");
      } else {
        alert("Voltando para o menu!");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("encerrando...");
      break;
    default:
      alert("opção inválida!");
      break;
  }
} while (opcao !== "3");
