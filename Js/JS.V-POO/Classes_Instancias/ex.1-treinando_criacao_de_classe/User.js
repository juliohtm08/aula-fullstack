class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if ((email === this.email, password === this.password)) {
      return "login bem sucedido";
    }

    return "não";
  }
}

const julio = new User("julio", "julio@email.com", "julio123");

console.log(julio);
console.log(julio.login("julio@email.com", "julio123"));
