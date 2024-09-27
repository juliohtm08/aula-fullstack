class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  AddToStock(quantity) {
    this.inStock += quantity;
  }
  addToCalculateDiscount(discount) {
    this.price -= (discount / 100) * this.price;
  }
}

const pc = new Product("pc gaymer", "pc top", 100);
console.log(pc);
pc.AddToStock(25);
pc.addToCalculateDiscount(25);
console.log(pc);
