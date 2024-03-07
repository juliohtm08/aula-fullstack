const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

console.log(arr);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Adcionar Elementos
//1) Push -> adiciona um novo elemento ao final do Array
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//2) Unshift -> adiciona um novo elemento ao início do array
tamanho = arr.unshift("teste");
console.log(arr);
console.log(tamanho);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Remover Elementos
//1) pop -> remove o elemento do final do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//2) shift -> remove o elemento do início do array
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Pesquisar por um elemento
//1) includes -> pesquisa pela String
const inclui = arr.includes("Gandalf o cinzento");
console.log(inclui);

//2) indexOf -> pesquisa a posição exata do elemento
const indice = arr.indexOf("Gandalf");
console.log(indice);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Cortar e Concatenar
//1) Slice -> Separa/Corta elementos de um Array
const hobbits = arr.slice(0, 4); //Aqui separa os lemento da posição 0 até a 4
const outros = arr.slice(-4); //Aqui a posição negativa referencia a inversão dos arrays, ou seja, se fosse "-1" seria mostrado a última posição do array, neste caso com o "-4" irá separar os elementos da posição "-4" até a "-1"
console.log(arr);
console.log(hobbits);
console.log(outros);

//2) Concat -> concatena os elemntos das arrays
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Substituição dos elementos
//1) splice -> remove um grupo de elementos de uma array e substitui por outros elementos de uma array
const elementosRemovidos = sociedade.splice(indice, 1, "Galndalf, o Cinzento"); //Aqui no primeiro encontra o indice, neste caso é o 4, e removê-lo, no segundo mostra quantos elementos serão excluídos e no terceiro qual elemento será inserido no lugar
console.log(sociedade);
console.log(elementosRemovidos);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição: " + indice);
}
