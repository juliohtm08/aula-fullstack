class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(someHouse);
console.log(someHouse.getPricePerSquareMeter());
console.log(someHouse instanceof Property);

class Apartament extends Property {
  constructor(number, area, price) {
    super(area, price); //chama as propriedades extendidas de Property
    this.number = number;
  }
  getFloor() {
    return this.number.slice(0, -2); //pega string toda, exceto os dois últimos caracteres
  }
}

const apt = new Apartament("201", 1000, 160000);

console.log(apt);
console.log(apt.getFloor());
