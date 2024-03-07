//função recursiva é uma função a qual chama ela mesma ela mesma várias vezes

function dividir(num) {
  console.log(num);
  if (num % 2 == 0) {
    //Aqui é aonde a função é chamada novamente
    dividir(num / 2);
    //Aqui é onde a função se encerra
  } else {
    return num;
  }
}

//dividir(256);

//É preciso tomar cuidado ao escrever uma função recursiva, pois isso pode gerar reultados infinitos

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//5! === 5 * 4 * 3 * 2 * 1 === 5 * 4!
function fatorial(num) {
  console.log("Número: " + num);
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * " + (num - 1) + "!");
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(5));
