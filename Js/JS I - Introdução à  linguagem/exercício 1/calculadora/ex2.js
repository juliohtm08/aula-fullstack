const primeiroNum = prompt("Digite um número")
const segundoNum = prompt("Digite um número")

const x = parseFloat(primeiroNum)
const y = parseFloat(segundoNum)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao + 
  "\nDivisão: " +divisao
)
