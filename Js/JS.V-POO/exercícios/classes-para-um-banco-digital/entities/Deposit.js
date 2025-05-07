module.exports = class Deposit {
  constructor(value) {
    this.value = value; // Valor do depósito
    this.createdAt = new Date(); // Data e hora do depósito
  }
};
