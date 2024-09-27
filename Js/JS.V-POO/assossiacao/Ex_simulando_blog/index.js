const Author = require("./Author");

const jhon = new Author("jhon doe");
const post = jhon.AddPosts("titulo foda", "body do post");

post.AddComment("julio", "foda de mais");
post.AddComment("robao", "sou mt safado");

console.log(jhon);
console.log(post);
