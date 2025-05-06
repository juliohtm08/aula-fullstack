const Database = require('./database');
const Author = require('./entities/Author');
const User = require('./entities/User');

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    App.#database.find('users');
  }

  createAuthor(name, nacionality, bio) {
    const author = new Author(name, nacionality, bio);
    App.#database.saveAuthor(author);
  }

  getAuthors() {
    App.#database.find('authors');
  }
};
