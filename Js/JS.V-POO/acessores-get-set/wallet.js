class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //10099
  }

  get amount() {
    return this.#amount / 100;
  }

  /* amount() {
    return this.#amount / 100;
  } */

  set username(newUsername) {
    if (typeof newUsername === 'string') {
      this.#username = newUsername;
    } else {
      console.log('username must be of type string!');
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = 'julio';
console.log(myWallet.username);

myWallet.username += ' Henrique';
console.log(myWallet.username);

myWallet.username = true;
