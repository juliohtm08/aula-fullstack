//O QUE É O ESCOPO E COMO ELE FUNCIONA?

/* Escopo é o contexto onde a variável foi declarada podendo ser
mais externo, ou mais interno (se estiver dentro de um bloco) */

//O contexto é o local do código/bloco do código onde a variável foi declarada

//O ESCOPO EXTERNO é aquele que está mais pra fora do código.
//O ESCOPO INTERNO é aquele que está mais para dentro do código, podendo ser dentro de uma função, expressão,...

//Variáveis no escopo mais externo podem ser usadas dentro de escopos mais internos
let pokemon = "Charmander"; //Escopo externo

function evoluir() {
  pokemon = "Charmeleon"; //Escopo interno
}

//console.log("Escopo externo: " + pokemon);
evoluir();
//console.log("Escopo interno: " + pokemon);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//ESCOPO COM VAR E LET (OU CONST):

//*DICA: As variáveis criadas no escopo mais externo podem ser usadas no escopo mais interno, porém não o inverso!

function criarAnimal() {
  let animal = "Gato";
}

criarAnimal();
//console.log(animal); // Gera erro: 'animal is not defined'

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//EXCEÇÃO: Apenas variáveis declaradas com VAR ficam disponíveis em um escopo mais externo
//Essa regra se aplica em blocos como IF, ELSE, repetições,...

function avaliarNota(nota) {
  if (nota >= 60) {
    var aprovado = true;
    let situacao = "aprovado";
  } else {
    var aprovado = false; //Aqui eu pude repetir a variável, pois ela us o VAR
    let situacao = "Reprovado"; //Aqui eu não pude usar a mesma variável, pois ela usa o LET
  }

  console.log(nota);
  console.log(aprovado);
  console.log(situacao); //Gera erro: 'situacao is not defined'
}

//avaliarNota(83);
//avaliarNota(49);

//o VAR usado em um exemplo como este pode ser um problema, pois pode confundir a entendimento do código

// O VAR não consegue "sair" para fora do escopo da função
function ola() {
  var texto = "Olá, mundo!";
}
//console.log(texto); // Gera erro

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//INICIALIZAÇÃO DE VARIÁVEIS COM VAR E LET (OU CONST)

// Apenas variáveis declaradas com VAR são carregadas sempre no começo do código, acima de todo o resto

console.log(nome); //exibe um valor indefinido
//console.log(sobrenome); //Gera erro: 'Cannot access 'sobrenome' before initialization'

var nome = "julio";
//let sobrenome = 'morizono';

console.log(nome);
//console.log(sobrenome);
