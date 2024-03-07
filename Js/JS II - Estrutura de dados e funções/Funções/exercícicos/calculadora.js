//Calucular área do triângulo
function calcularAreaTriangulo() {
  const base = prompt("informe a base do triângulo: ");
  const altura = prompt("informe a altura do triângulo: ");
  return (base * altura) / 2;
}
//Calcular área do retângulo
function calcularAreaRetangulo() {
  const base = prompt("informe a base do triângulo: ");
  const altura = prompt("informe a altura do triângulo: ");
  return base * altura;
}
//Calcular área do quadrado
function calcularAreaQuadrado() {
  const lado = prompt("informe o lado do quadrado: ");
  return lado * lado;
}
//Calcular área do trapézio
function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("informe a base maior do trapézio: "));
  const baseMenor = parseFloat(prompt("informe a base menor do trapézio: "));
  const altura = parseFloat(prompt("informe a altura do trapézio: "));
  return (baseMaior + baseMenor) / altura;
}
//Calcular área do círculo
function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do círculo: ");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  //Aqui é o painel onde irá exibir as opções de cálculo para o usuário
  return prompt(
    "Qual área deseja calcular?\n" +
      "1.Área do triângulo\n" +
      "2.Área do retângulo\n" +
      "3.Área do quadrado\n" +
      "4.Área do trapézio\n" +
      "5.Área do circulo\n" +
      "6.Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    //Aqui é onde está a função de cada opção
    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6": //Fechar programa
        alert("encerrando...");
        break;
      default:
        alert("opcao  inválida!");
        break;
    }

    if (resultado) {
      alert("resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
