class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login efetuado com sucesso!');
      return;
    }
    return console.log('Credenciais incorretas!');
  }
}

const julio = new User('julio', 'julio@email.com', 123456);

julio.login('julio@email.com', 123456);
