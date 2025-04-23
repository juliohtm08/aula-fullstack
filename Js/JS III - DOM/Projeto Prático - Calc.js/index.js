import { clear, copy, equal, keyPrass, theme } from './events.js';

const input = document.querySelector('input');

clear();
keyPrass();
equal();
copy();
theme();

//aqui pegamos todos os componentes de mesma classe
//depois adicionamos um evendo de click a cada um deles(usando forEach())
//e acionamos uma função a qual receberá o valor de seu data-value
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});
