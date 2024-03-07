//Funções anônimas são funções sem nome

function somar(a, b) {
  return a + b;
}

let operacao = somar; //Nessa sintaxe será chamada apenas a função
//const operacao = somar() -> Caso fosse escrito desta forma, seria chamado o resultado da função

console.log(operacao(4, 5));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Nós também podemos tratar as funções como as variáveis, afim de não dar nome a elas
//Isso é uma função anônima
operacao = function (a, b) {
  return a - b;
};

console.log(operacao(4, 5));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Nas funções anônimas, como as variáveis, elas só passam a existir depois das declarações

olaMundo();

function olaMundo() {
  console.log("Olá, mundo");
}

const oiMundo = function () {
  console.log("oi, mundo");
};

oiMundo();
