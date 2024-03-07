const medida = parseFloat(prompt("Digite um número em metros(m): "))
const unidade = prompt(
  "Escolha uma opção: " +
  "\na)Milímetro(mm)" +
  "\nb)Centímetro(cm)" +
  "\nc)Decímetro(dm)" +
  "\nd)Decâmetro(dam)" + 
  "\ne)Hectômetro(hm)" +
  "\nf)Quilômetro(km)"
  ) 

switch(unidade){
  case "a":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "b":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
  case "c":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
    break
  case "d":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
  case "e":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
  case "f":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
  default:
    alert("opção inválida!")
}
