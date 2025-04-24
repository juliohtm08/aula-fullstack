class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.createdAt = new Date();
  }
  fullComment() {
    return `${this.content}`;
  }
}

module.exports = Comment;
