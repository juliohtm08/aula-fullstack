"use strict";

var mediaAritmeticaSimples = function mediaAritmeticaSimples() {
  for (var _len = arguments.length, number = new Array(_len), _key = 0; _key < _len; _key++) {
    number[_key] = arguments[_key];
  }
  if (number.length === 0) return 0;
  var soma = number.reduce(function (total, num) {
    return total + num;
  }, 0);
  return soma / number.length;
};
console.log(mediaAritmeticaSimples(5, 10, 15, 20));
console.log(mediaAritmeticaSimples(10, 10, 10));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
var mediana = function mediana(arr) {
  // ordem crescente
  arr.sort(function (a, b) {
    return a - b;
  });
  var middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  }
  return arr[middleIndex];
};
var array = [2, 3, 5, 7, 10, 4];
console.log(mediana(array));
var mode = function mode() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num,
    // número
    numbers.filter(function (n) {
      return num === n;
    }).length // quantidade
    ];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 1, 1, 1, 1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));