// Esta função é chamada quando você deseja adicionar um novo input à lista.
function addInput() {
  // Obtém a referência para o elemento <ul> com o id "inputs".
  const ul = document.getElementById("inputs");

  // Cria um novo elemento <li> e define a classe CSS como "list-item".
  const newLi = document.createElement("li");
  newLi.className = "list-item";
  // Define o texto interno do novo <li> como "Novo input".
  newLi.innerText = "Novo input";

  // Cria um novo elemento <input> do tipo "text" com o nome "input".
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  // Adiciona o novo elemento <input> como filho do <li>.
  newLi.appendChild(newInput);
  // Adiciona o novo <li> à lista existente.
  ul.appendChild(newLi);
}
