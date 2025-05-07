module.exports = class Transfer {
  constructor(userSent, userReceived, value) {
    this.userSent = userSent; // Usuário que enviou a transferência
    this.userReceived = userReceived; // Usuário que recebeu
    this.value = value; // Valor transferido
    this.createdAt = new Date(); // Data da transferência
  }
};
