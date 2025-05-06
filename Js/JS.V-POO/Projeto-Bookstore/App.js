const Database = require('./database');
const Author = require('./entities/Author');
const Book = require('./entities/Book');
const Order = require('./entities/Order');
const Poster = require('./entities/Poster');
const User = require('./entities/User');

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    return App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find('users');
  }

  createAuthor(name, nacionality, bio) {
    const author = new Author(name, nacionality, bio);
    return App.#database.saveAuthor(author);
  }

  getAuthors() {
    return App.#database.find('authors');
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    return App.#database.saveBook(book);
  }

  addBook(bookName, quantity) {
    return App.#database.addBookToStock(bookName, quantity);
  }

  getBooks() {
    return App.#database.find('books');
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    return App.#database.savePoster(poster);
  }

  addPoster(posterName, quantity) {
    return App.#database.addPosterToStock(posterName, quantity);
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);

    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBookFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePosterFromStock(product.name, quantity);
      }
    });

    return order;
  }

  getOrders() {
    return App.#database.find('orders');
  }

  showDatabase() {
    return App.#database.showStorage();
  }
};
