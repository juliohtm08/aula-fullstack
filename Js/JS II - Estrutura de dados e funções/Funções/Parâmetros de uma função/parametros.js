//Os parâmetros da função serão colocados dentro do parentêses
//O parâmetro de uma função é como se fosse uma variável, a qual fica dentro da função, mas que ela é informada quando nós chamamos a função
function dobro(x) {
  alert("O drobro de " + x + " é " + x * 2);
}

//Aqui o valor indicado no parênteses, como exemplo, irá valer "x" e executará a função
//dobro(5);
//dobro(7);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}
//Aqui é como se a sintaxe fosse: nome = Julio; E no outro exemplo: nome = nome;
//dizerOla("Julio");
//dizerOla();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function soma(a, b) {
  alert("O resultado da soma entre " + a + " e " + b + " é: " + (a + b));
}

//soma(7, 6);
//soma(1, 1);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, //esta sintaxe de objeto é equivalente a "nome: nome"
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Julio", "julio@gmail.com", "1234"); //{nome: 'Julio', email: 'julio@gmail.com', senha: '1234', tipo: 'admin'}

//*DICA: SEMPRE exibir o parâmetro opcional no final, como nete exemplo o "tipo = "admin"", afim e evitar problemas no código
function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome, //esta sintaxe de objeto é equivalente a "nome: nome"
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

//Aqui demostra como a ordem dos fatores importa, pois executando esta linha de código os valores estarão nas ordens incorretas
novoUsuario("Julio", "julio@gmail.com", "1234"); //Aqui irá exibir este erro: {nome: 'Julio', email: '1234', senha: undefined, tipo: 'julio@gmail.com'}

//Aqui seria a sintaxe correta da linha de código acima!
novoUsuario("Julio", "admin", "julio@gmail.com", "1234"); //{nome: 'Julio', email: 'julio@gmail.com', senha: '1234', tipo: 'admin'}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Aqui demostra uma forma mais fácil e legível sem precisar colocar os valores em cada objeto, logo sendo mais prático
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}

//Aqui o parâmetro "usuario" irá receber todos os parâmetros da função acima e transformá-los em objetos
function objetoComParametros(usuario) {
  //...
  usuario.nome;
  usuario.telefone;
  usuario.endereco;
  usuario.aniversario;
  usuario.email;
  usuario.senha;
}

//Aqui serão colocados os dados dos objetos
const dadosDoUsuario = {
  nome: "Julio",
  telefone: "12345689",
  email: "julio@gmail.com",
  senha: "123456",
  endereco: "rua x",
  aniversario: "09072003",
};

//Aqui a função será chamada
objetoComParametros(dadosDoUsuario);
console.log(dadosDoUsuario);
