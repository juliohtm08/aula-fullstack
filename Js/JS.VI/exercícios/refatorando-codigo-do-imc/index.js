async function imc(peso, altura) {
  if (typeof peso !== 'number' || typeof altura !== 'number') {
    return Promise.reject('Arguments must be of type number');
  }
  return peso / (altura * altura);
}

async function showImc(peso, altura) {
  try {
    console.log(`Calculando o IMC para o peso ${peso} e altura: ${altura}...`);
    const result = await imc(peso, altura);

    console.log(`O resultado do IMC foi de ${result}`);

    if (result < 18.5) {
      console.log('magrim que só');
    } else if (result >= 18.5 && result <= 24.9) {
      console.log('normal');
    } else if (result >= 25 && result <= 29.9) {
      console.log('sobrepeso: ta ficando gordin ja slc');
    } else if (result >= 30 && result <= 39.9) {
      console.log('obesidade: manera no doce ai paizao');
    } else {
      console.log('obesidade grave: IMENSO PTM');
    }
  } catch (error) {
    throw new Error(`Erro no cálculo: ${error}`);
  }
}

showImc(60, 1.65);
showImc(100, 1.65);
showImc(90, 1.8);
