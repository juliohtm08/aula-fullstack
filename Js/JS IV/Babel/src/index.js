const mediaAritmeticaSimples = (...number) => {
  if (number.length === 0) return 0;

  const soma = number.reduce((total, num) => total + num, 0);

  return soma / number.length;
};

console.log(mediaAritmeticaSimples(5, 10, 15, 20));
console.log(mediaAritmeticaSimples(10, 10, 10));

const mediaPonderada = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );

  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );

  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

const mediana = (arr) => {
  // ordem crescente
  arr.sort((a, b) => a - b);

  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  }

  return arr[middleIndex];
};

const array = [2, 3, 5, 7, 10, 4];

console.log(mediana(array));

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num, // número
    numbers.filter((n) => num === n).length, // quantidade
  ]);

  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
