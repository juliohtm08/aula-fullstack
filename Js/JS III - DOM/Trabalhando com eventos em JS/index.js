function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado");
  } else {
    alert("As senhas não conferem");
  }
}

const button = document.getElementById("register-button");

//O "addEventListener" é uma função na qual espera a ação do evento acontecer para ser acionada
button.addEventListener("click", register);

function removeListener() {
  button.removeEventListener("click", register);
  alert("Event remove");
}
