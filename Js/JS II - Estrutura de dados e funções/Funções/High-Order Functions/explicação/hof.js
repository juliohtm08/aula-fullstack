//High-Order function é uma função que recebe outra função como parâmetro

//Aqui a função calcular se trata de uma função maior que a função operacao, logo ela é uma High-Order function
function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");
  //Aqui a operacao se trata como um parâmetro da função calcular
  const resultado = operacao(a, b); //somar(a, b)
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração");
    return x - y;
  })
);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

//Utilizando o "forEach()" -> ele é uma High-Order function

lista.forEach(exibirElemento); //Ela pode ser usada no lugar deste "for" acima, deixando o código mais legíve, organizado e funcional

//O "Callbackfn" é a função que vai ser chamada devolta dentro da High-Order function

//Aqui é outra forma mais simplificada do código acima
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
