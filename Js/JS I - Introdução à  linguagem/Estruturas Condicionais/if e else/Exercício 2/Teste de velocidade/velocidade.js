veiculo_1 = prompt("Digite o nome do primeiro veículo: ")
const velocidade1 = parseFloat(prompt("Digite a velocidade do veículo em Km/H: "))
veiculo_2 = prompt("Digite o nome do segundo veículo: ")
const velocidade2 = parseFloat(prompt("Digite a velocidade do veículo em km/H: "))

if (velocidade1 > velocidade2){
  alert(veiculo_1 + " é mais rápido do que " + veiculo_2)
} else if(velocidade1 < velocidade2){
  alert(veiculo_2 + " é mais rápido do que " + veiculo_1)
} 
else{
  alert("Ambos percorreram a mesma velocidade!")
}
