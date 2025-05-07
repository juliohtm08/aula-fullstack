const Deposit = require('./entities/Deposit');
const Loan = require('./entities/Loan');
const Transfer = require('./entities/Transfer');
const User = require('./entities/User');

module.exports = class App {
  static #users = []; // Lista privada de usuários

  // Retorna a lista de usuários
  static get users() {
    return App.#users;
  }

  // Encontra um usuário pelo email
  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  // Cria um novo usuário (se o email ainda não estiver cadastrado)
  static createUser(name, email) {
    if (this.findUser(email)) throw new Error('Usuário já existente');
    this.#users.push(new User(name, email));
  }

  // Realiza um depósito para o usuário
  static deposit(email, value) {
    const user = App.findUser(email);
    if (!user) throw new Error('Usuário não encontrado');
    const deposit = new Deposit(value);
    user.account.addDeposit(deposit);
  }

  // Realiza uma transferência entre dois usuários
  static transfer(senderEmail, receiverEmail, value) {
    const sender = App.findUser(senderEmail);
    const receiver = App.findUser(receiverEmail);
    if (!sender || !receiver) {
      throw new Error('Remetente ou destinatário não encontrado.');
    }

    const transfer = new Transfer(sender, receiver, value);
    sender.account.addTransfer(transfer);
    receiver.account.addTransfer(transfer);
  }

  // Concede um empréstimo ao usuário
  static loan(email, value, numberOfInstallment) {
    const user = App.findUser(email);
    if (!user) throw new Error('Usuário não encontrado');
    const loan = new Loan(value, numberOfInstallment);
    user.account.addLoan(loan);
  }

  // Define a nova taxa de juros para todos os empréstimos futuros
  static setLoanInterestRate(newPercent) {
    Loan.interestRate = newPercent;
  }

  // Retorna a taxa de juros atual
  static getLoanInterestRate() {
    return Loan.interestRate;
  }
};
