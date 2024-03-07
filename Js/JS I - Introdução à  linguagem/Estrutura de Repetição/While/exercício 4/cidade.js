const turista = prompt("Qual é o seu nome?")
// Aqui as cidades começarão como uma String vazia, pois depois o turista irá inserir as cidades as quais ele visitou
let cidades = ""
//Aqui a contagem começará em 0, pois, ainda, não foi inserida  nenhuma cidade visitada
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (1-Sim/2-Não)")

while(continuar == 1){
  let cidade = prompt("Qual é o nome da cidade visitada?")
  //Aqui será armazeanda o nome das cidades ditas, seria com escrever 'cidades = cidade + cidade + ...'
  cidades += " - " + cidade + "\n"
  //Aqui a repetição continuará até que seja dito que NÃO há mais nenhuma cidade visitada
  contagem++
  continuar = prompt("Você visitou mais alguma outra cidade? (1-Sim/2-Não)")
}
//Aqui exibirá o nome do turista, quantas cidades foram visitadas e quais os nomes das cidades
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)