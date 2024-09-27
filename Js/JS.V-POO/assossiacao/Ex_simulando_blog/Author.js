const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  AddPosts(title, body) {
    const post = new Post(title, body, this); //o this ira passar o objeto completo(name e posts de Author)
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
