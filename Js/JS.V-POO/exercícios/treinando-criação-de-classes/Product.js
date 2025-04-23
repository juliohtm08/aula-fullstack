class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(percentage) {
    return this.price * ((100 - percentage) / 100);
  }
}

const tenis = new Product('Air Force', '...', 1000);

console.log(tenis);

tenis.addToStock(50);
console.log(`Quantidade de estoque adicionada: ${tenis.inStock}`);
console.log(`Valor com desconto: ${tenis.calculateDiscount(40)} `);
