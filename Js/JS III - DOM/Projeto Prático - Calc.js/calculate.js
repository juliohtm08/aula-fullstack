const input = document.querySelector('#input');
const resultInput = document.querySelector('#result');

export function calculate() {
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');
  //aqui estamos usando o método eval,
  //onde ele irá avaliar o código js escrito pelo usuário e executar este código
  //por exemplo, caso o usuário escreva 2+2 no input ele retornará 4
  //!cuidado ao usar o eval(), pois o usuário poderá acessar dados sensíveis de uma aplicação
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error');
}
