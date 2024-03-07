const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//Métodos:

//1)Map -> tranforma arrays, ou seja, ele pega um array existente, mapea ele e cria um novo array baseado nele. Não modifica o array existente

/* const nomes = [];

for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome);
} */

const nomes = personagens.map(function (personagens) {
  return personagens.nome;
});

//console.log(nomes);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//2)Filter -> filtra/seleciona elementos específicos de um array e cria um novo array

/* const orcs = [];

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i]);
  }
} */

const orcs = personagens.filter(function (personagens) {
  return personagens.raca === "Orc";
});

console.log(orcs);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//3)Reduce -> Transforma o array em outro elemento/valor, como: outro array, objeto, número, string,...
//pode ser utilizado para fazer a soma dos elementos de um array

//o Primeiro paâmetro é sempre o valor acumulado, ele passa de uma iteração para outra
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0); //valorAcumulado = 0

console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  //Aqui diz: Se o valoAcumulado na sua chave personagem.raca existir
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem); // irá ser pego o valorAcumulado desta mesma chave e irá puxar o personagem atual, ou seja, o personagem será puxado para a raça dele
  } else {
    //Se a propriedade não existir ou for undefined
    valorAcumulado[personagem.raca] = [personagem]; // O valorAcumulado na chave personagem.raca vai receber um aray do persongaem atual
  }
  return valorAcumulado;
}, {}); //Aqui diz que o valor inicial vai ser um objeto vazio

console.log(racas);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//4)Sort -> ordena os elementos de um arrays

//Neste exemplo iremos ordenar o array de acordo com o nível do personagem
//O sort faz uma  comparação em pares para ordenar o array

//4a.Ordem crescente:

//Os elementos "a" e "b" são dois elementos do array e o sort irá compará-los e a partir dessa comparação ele irá reordená-lo
/* personagens.sort(function (a, b) {
  return a.nivel - b.nivel; //O return dessa callbeckfs precisa devolver um valor POSITIVO ou NEGATIVO

  //A linha acima de código calcula a diferença entre os valores de "nivel" de "a" e "b".
  //Se essa diferença for POSITIVA, significa que o valor de "nivel" de "a" é maior do que
  //o valor de "nivel" de "b". Nesse caso, o "a" será colocado depois do "b" no array ordenado,
  //colocando os personagens com níveis mais altos no final do array. Se a diferença for NEGATIVA,
  //o "a" será colocado antes do "b", colocando os personagens com níveis mais baixos no início do array.
});
console.log(personagens); */

//4b.Ordem decrescente:

/* personagens.sort(function (a, b) {
  return b.nivel - a.nivel;

  //Se a diferença for POSITIVA, significa que o valor de "nivel" de "b" é maior do que
  //o valor de "nivel" de "a", e o "b" será colocado antes do "a" no array ordenado,
  //colocando os personagens com níveis mais altos no início do array.
  //Se a diferença for NEGATIVA, o "b" será colocado depois do "a",
  //colocando os personagens com níveis mais baixos no final do array.
});
 
console.log(personagens);*/

//Usar um sort sem modificar o array

//O SLICE serve para retornar uma cópia de uma parte do array sem alterá-lo
const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel;
});

//console.log(personagens);
//console.log(personagensOrdenados);
