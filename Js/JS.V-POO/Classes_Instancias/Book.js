class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

//aqui está uma instancia 'eragon' de uma classe 'Book'
const eragon = new Book("Eragon");
const livro2 = new Book("livro2");

eragon.publish();

console.log(eragon);
console.log(livro2);

//intanceof verifica se a instancia pertence a uma classe/tipo específica(o)
console.log(eragon instanceof Book);
console.log(eragon instanceof Array);
console.log([eragon, livro2] instanceof Array);
