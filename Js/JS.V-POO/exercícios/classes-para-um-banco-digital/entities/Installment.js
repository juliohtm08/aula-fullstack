module.exports = class Installment {
  constructor(value, number) {
    this.value = value; // Valor da parcela
    this.number = number; // Número da parcela (1, 2, 3...)
    this.status = 'pending'; // Status da parcela: 'pending' ou 'paid'
  }
};
