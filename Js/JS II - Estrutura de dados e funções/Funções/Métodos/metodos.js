//Os métodos são funções atreladas a objetos

let pessoa = {
  nome: "Julio",
  idade: 20,
  //Aqui não é necessário colocar o "function"
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome); //O "this" é usado para reverenciar o próprio objeto, neste caso o "nome"
  },
};

console.log(pessoa);

pessoa.dizerOla();
