const Account = require('./Account');

module.exports = class User {
  constructor(name, email) {
    this.name = name; // Nome do usuário
    this.email = email; // Email único do usuário
    this.account = new Account(this); // Conta bancária vinculada
  }
};
