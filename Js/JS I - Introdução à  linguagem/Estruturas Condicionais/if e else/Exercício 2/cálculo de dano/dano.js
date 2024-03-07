const atacante = prompt("Qual é o nome do personagem atacante? ")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque? "))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa? "))
const escudo = prompt("Ele possui um escudo? (1-Sim/2-Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && escudo == 2){
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo == 1){
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

//Aqui seria como escrever pontosDeVida = pontosDeVida - dano causado
pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida + 
  "\nPoder de defesa: " + poderDeDefesa
)