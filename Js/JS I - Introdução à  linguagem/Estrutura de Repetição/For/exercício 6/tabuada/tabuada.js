const number = parseInt(
  prompt("Digite um número e veja sua tabuada de 1 a 20: ")
);

let resultado = "";

for (let i = 1; i <= 20; i++) {
  resultado += "-> " + number + " * " + i + " = " + number * i + "\n";
}

alert("Resultado da tabuada de " + number + ":\n\n" + resultado);
