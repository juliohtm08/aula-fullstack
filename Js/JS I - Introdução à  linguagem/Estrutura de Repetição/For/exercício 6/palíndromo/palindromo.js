const word = prompt("Informe uma palavra: ");
let invertedWord = "";

/* o FOR começará exeutando a partir da última letra(A última posição da String);
  a condição será que o programa terminará de ler até a primeira posição (ler a palavra 
  de trás para frente);
  o programa finalizará lendo a palavra até a posição 0(posição inicial da palavra);
 */
for (let i = word.length - 1; i >= 0; i--) {
  /* Aqui a palavra invertida irá receber a última letra, depois a penúltima e assim por diante, 
  até receber a primeira letra, assim contendo a palavra ao contrário */
  invertedWord += word[i];
}

//Aqui verificará se a palavra digitada é igual a palavra invertida
if (word === invertedWord) {
  alert(word + " é um palíndromo.");
} else {
  alert(
    word +
      " não é um palíndromo.\n\n" +
      word +
      " é diferente de " +
      invertedWord
  );
}
