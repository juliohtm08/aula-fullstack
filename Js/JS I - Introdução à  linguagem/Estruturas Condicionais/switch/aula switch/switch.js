const resultado = prompt("Escolha um alternativa: \na)\nb)\nc)")

const resultadoNumerico = parseFloat(resultado)
//Estrutura do switch
switch(resultadoNumerico){
  // Leia "Caso seja..."
  case 1:
    alert("O resultado é 'a'") 
    break
  case 2:
    alert("O resultado é 'b'")
    break // O break serve para o parar o código
  case 3:
    alert("O resultado é 'c'")
    break
  default:
    alert("Finalizando...")
}

/* 
O switch serve para condicionais mais especificas, ou seja ao invés de
escrever 'if (resultadoNumerico == 1)',  é mais fácil escrever 'case 1'
*/