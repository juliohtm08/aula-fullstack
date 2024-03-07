let velocidade = 80

// No while o programa continuará rodando até que haja uma condição que seja falsa
while(velocidade > 0){
  alert("O carro está a " + velocidade + " km/h")
  velocidade -= 20
  alert("Dimiuindo 20km/h")
  
  if(velocidade == 40){
    break
  }
}

alert("O carro parou!")