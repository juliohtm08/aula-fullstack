// Função para validar o email com uma expressão regular
function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error('Email inválido');
    err.input = 'email';
    throw err;
  }
}

// Função para validar a senha com uma expressão regular avançada
function validatePassword(password) {
  if (
    !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/)
  ) {
    const err = new Error('Senha inválida');
    err.input = 'password';
    throw err;
  }
}

// Função para resetar os estilos de erro/sucesso dos campos
function resetFormStyles() {
  Object.entries(userInputs).forEach(([key, value]) => {
    value.classList.remove('success', 'error');
    document.querySelector(`#${key}-error`).textContent = '';
  });
}

// Objeto com as referências dos inputs do formulário
const userInputs = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  password: document.querySelector('#password'),
};

// Referência ao formulário
const form = document.querySelector('form');

// Evento de envio do formulário
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  resetFormStyles();

  try {
    // Valida os dados do usuário
    userInputs.name.classList.add('success');

    validateEmail(userInputs.email.value); // Valida o email
    userInputs.email.classList.add('success');

    validatePassword(userInputs.password.value); // Valida a senha
    userInputs.password.classList.add('success');
  } catch (err) {
    userInputs[err.input].classList.add('error');
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
