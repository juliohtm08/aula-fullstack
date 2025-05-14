function imcCalculate(peso, altura) {
  return new Promise((resolve, reject) => {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
      reject('insira valors válidos!');
    }
    const imc = peso / (altura * altura);
    resolve(imc);
  });
}

async function classification(peso, altura) {
  try {
    const imc = await imcCalculate(peso, altura);
    console.log(`IMC calculado: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      return 'magrim que só';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'sobrepeso: ta ficando gordin ja slc';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'obesidade: manera no doce ai paizao';
    } else {
      return 'obesidade grave: IMENSO PTM';
    }
  } catch (error) {
    throw `Erro no cálculo: ${error}`;
  }
}

classification(150, 1.65)
  .then((result) => {
    console.log(`imc: ${result}`);
  })
  .catch((err) => {
    console.log(`Erro foda: ${err}`);
  })
  .finally(() => {
    console.log('Programa finalizado');
  });
