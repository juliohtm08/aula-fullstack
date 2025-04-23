function saudar(nome) {
  console.log('Olá, ' + nome);
}

function processarUsuario(callback) {
  const nome = 'Carlos';
  callback(nome);
}

processarUsuario(saudar); // Olá, Carlos
