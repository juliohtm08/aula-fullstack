class Account {
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.balance = 0;
  }
  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    }
    return null;
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: 'julio@email.com',
  password: '123456',
};

const myAccount = new Account(user);

console.log(myAccount);

//myAccount.password = '888888888';
//myAccount.balance = 9999999;

console.log(myAccount.getBalance('julio@email.com', '123456'));
