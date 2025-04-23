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
