const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de setembro", 99, "centro", "São Fidélis", "RJ");
const john = new Person("Jhon Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
