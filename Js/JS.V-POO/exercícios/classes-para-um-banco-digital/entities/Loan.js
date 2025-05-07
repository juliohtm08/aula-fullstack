const Installment = require('./Installment');

module.exports = class Loan {
  static #interestRate = 1.05; // Taxa de juros privada (5%)

  constructor(value, installments) {
    this.value = value; // Valor total do empréstimo
    this.createdAt = new Date(); // Data de criação do empréstimo
    this.installments = [];

    // Divide o valor total em parcelas com juros
    for (let i = 1; i <= installments; i++) {
      const installmentValue = (value * Loan.#interestRate) / installments;
      this.installments.push(new Installment(installmentValue, i));
    }
  }

  // Getter para acessar a taxa de juros atual
  static get interestRate() {
    return Loan.#interestRate;
  }

  // Setter para modificar a taxa de juros
  static set interestRate(newPercent) {
    if (newPercent <= 0) throw new Error('Taxa de juros inválida');
    Loan.#interestRate = 1 + newPercent / 100;
  }
};
