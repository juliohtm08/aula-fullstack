const Address = require('./Address');
const Person = require('./Person');

const addr = new Address('7 de setembro', 99, 'centro', 'São Fidélis', 'RJ');
const julio = new Person('julio', addr);

console.log(julio);
console.log(julio.address.fullAddress());
