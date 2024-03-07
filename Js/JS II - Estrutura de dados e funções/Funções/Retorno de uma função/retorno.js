/* A palavra-chave return é usada para especificar um valor que uma função deve "retornar" 
como seu resultado após a execução. */

/* A principal função do return é permitir que as funções produzam um resultado 
que pode ser usado em outras partes do código. */

function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);
//console.log(resultado);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

//A função também pode ser chamada desta forma
//console.log(criarProduto("notebook intel core i3", 2500));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//O return de uma função também pode ser uma expressão
function areaRetangular(base, altura) {
  return base * altura;
}

const valor = areaRetangular(3, 5);
//console.log("A área do retângulo é de: " + valor);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//O return também pode ser uma função

function areaQuadrado(lado) {
  return areaRetangular(lado, lado);
}

//console.log("A área do quadrado é de: " + areaQuadrado(9));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//uma função pode retornar UMA ÚNICA vez
function ola() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo"; //Aqui, após o return, as linhas de código abaixo não poderão ser mais utilizadas, pois uma vez que o return é usado a função acaba
  console.log(texto);
}

//console.log(ola());

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Há um caso em particular em que devemos definir vários returns em uma função

function maioridade(idade) {
  if (idade >= 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
}

console.log(maioridade(29));
console.log(maioridade(13));
