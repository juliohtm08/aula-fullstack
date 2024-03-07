// Quero retornar a soma de um array de números

// O que eu tenho?
const numeros = [0, 4, 2, 4, 7];

//O que eu espero? 17

// Na primeira iteração o 'acumulador' sera o primeiro número do array, nesse caso, o '0',
// já o 'numeroAtual' sera o segundo número do array, neste caso o '4'. (0 + 4 = 4)
// Na segunda iteração o 'acumulador' valerá 4 e o 'numeroAtual' 2. (4 + 2 = 6)
//na terceira iteração o 'acumulador' valerá 6 e o 'numeroAtual' 4. (6 + 4 = 10)
//na quarta e última iteração o 'acumulador' valerá 10 e o 'númeroAtual' 7. (10 + 7 = 17)
// Por fim, o 17 será armazenada na variável 'total'

//Nessa function pode ter de dois a quatro parâmetros,
// dois sendo a quantidade mínima e obrigatória de parâmetros e quatro a máxima e opcional.

//essa function 'function (acumulador, numeroAtual) {
//  return acumulador + numeroAtual;
// }' representa a função de callback

//EX1)
const total = numeros.reduce(function (acumulador, numeroAtual) {
  return acumulador + numeroAtual;
}); //Aqui, na primeira iteração, estou dizendo que o 'acumulador' começará em '0',
//logo terá 5 iterações, não mais quatro como antes.

//EX2)

const numeros2 = [2, 4, 2, 4, 7];

const total2 = numeros2.reduce(function (acumulador, numeroAtual) {
  return acumulador + numeroAtual;
}, 1); //Aqui, na primeira iteração, estou dizendo que o 'acumulador' começará em '1',
//logo terá 5 iterações, não mais quatro como antes.

console.log(total2);

//EX3) Carrinho de compras; Deve retornar o total a pagar

//O que eu tenho?

const itens = [
  { description: "pen", quantity: 1, price: 3 },
  { description: "rule", quantity: 2, price: 5 },
  { description: "erase", quantity: 2, price: 6 },
];

//O que eu espero? 25

const total3 = itens.reduce((soma, itemAtual) => {
  return soma + itemAtual.quantity * itemAtual.price;
}, 0);

console.log(total3);

//EX4) Contador de nomes por iniciais

//O que eu tenho?

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"];

//O que eu espero?
// namesCount = {d: 1, m:2, j: 3}

const namesCount = names.reduce((count, nomeAtual) => {
  const firtLetter = nomeAtual[0].toLocaleLowerCase();
  if (count[firtLetter]) {
    count[firtLetter]++;
  } else {
    count[firtLetter] = 1;
  }

  return count;
}, {});

console.log(namesCount);

//EX4) a partir de um array de objetos pessoas,deve-se retornar um objeto com um contador de pessoa por idade

//O que eu tenho?

const pessoas = [
  { nome: "Daniel", idade: 28 },
  { nome: "Marta", idade: 29 },
  { nome: "Maria", idade: 29 },
];

//O que eu espero?
//{ '28': ['Daniel'], '29': ['Maria', 'Marta']}

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) => {
  // Verifica se já existe uma chave com a idade da pessoa no objeto 'pessoasIdade'.
  if (pessoasIdade[pessoaAtual.idade]) {
    // Se a idade já existe, adiciona o nome da pessoa ao array de nomes correspondente à idade.
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);
  } else {
    // Se a idade ainda não existe, cria uma nova chave com um array contendo o nome da pessoa.
    pessoasIdade[pessoaAtual.idade] = [pessoaAtual.nome];
  }
  // Retorna o objeto 'pessoasIdade' atualizado para a próxima iteração.
  return pessoasIdade;
}, {});

console.log(porIdade);
