module.exports = class Account {
  #balance = 0; // Saldo privado da conta

  constructor(user) {
    this.user = user; // Dono da conta
    this.deposits = []; // Lista de depósitos
    this.loans = []; // Lista de empréstimos
    this.transfers = []; // Lista de transferências
  }

  // Getter para acessar o saldo da conta
  get balance() {
    return this.#balance;
  }

  // Adiciona um depósito à conta
  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  // Adiciona um empréstimo à conta
  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }

  // Adiciona uma transferência à conta
  addTransfer(transfer) {
    if (transfer.userReceived.email === this.user.email) {
      // Se o usuário foi quem recebeu, acrescenta o saldo
      this.#balance += transfer.value;
    } else if (transfer.userSent.email === this.user.email) {
      // Se o usuário enviou, desconta do saldo
      this.#balance -= transfer.value;
    }
    this.transfers.push(transfer);
  }
};
