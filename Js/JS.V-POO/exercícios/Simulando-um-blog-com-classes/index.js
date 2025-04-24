const Author = require('./Author');

const julio = new Author('Julio');
const post = julio.writePost('título do post', '...');

post.addComent('joão', 'faz sentido');
post.addComent('lucas', 'nada a ver');

console.log(julio);
console.log(post);
