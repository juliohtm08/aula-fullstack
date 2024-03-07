function show() {
  //Aqui o 'document.getElementById' seleciona um elemento HTML
  //através do ID, neste caso o 'id="contact-list"'.
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  //Aqui o 'document.getElementsByTagName' seleciona todos os elementos HTML
  //através de uma tag HTML, neste caso a tag 'li'.
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  //Aqui o 'document.getElementsByClassName' seleciona todos os elementos HTML
  //através no nome da classe, neste caso a classe 'contact-input'.
  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  //Aqui o 'document.querySelectorAll' seleciona todos os elemntos HTML
  //que correspondem a um seletor CSS e retorna uma NodeList
  //de elementos que correspondem ao seletor.
  //Nesta linha de código, este DOM está selecionando todos os elementos de id = contact-list,
  //depois dentro deste ide seleciona a tag 'li' e dentro desta tag seleciona o elemnto 'label'.
  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  //Aqui o 'document.getElementsByName' seleciona um elemento HTML através do seu 'name',
  //neste caso o name 'contact1', logo sendo ainda mais específico.
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  //Aqui o 'document.querySelector' seleciona o primeiro elemento HTML que correponde a um seletor CSS
  //e retorna este elemento selecionado.
  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact); // retorno: <label for="contact1">Contato 1</label>
}

/* 
1.O que é uma NodeList?
R = Uma NodeList é um objeto semelhante a uma lista (array) 
que representa uma coleção ordenada de nós (nodes) do DOM. 

2.Qual a diferença entre NodeList e Array?
R = uma NodeList é uma coleção de nós do DOM retornada por métodos de seleção, 
enquanto um array é uma estrutura de dados mais flexível e versátil que é amplamente usada 
para armazenar e manipular coleções de valores em JavaScript.
*/
