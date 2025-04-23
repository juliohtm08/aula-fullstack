const mediaAritmeticaSimples = (...number) => {
  if (number.length === 0) return 0;

  const soma = number.reduce((total, num) => total + num, 0);

  return soma / number.length;
};

console.log(mediaAritmeticaSimples(5, 10, 15, 20));
console.log(mediaAritmeticaSimples(10, 10, 10));
