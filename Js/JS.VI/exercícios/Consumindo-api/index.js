// Armazena as transações carregadas da API ou criadas pelo usuário
let transactions = [];

/* =======================
  Funções de Criação de Elementos DOM
========================== */

// Cria o container principal de uma transação
function createTransactionContainer(id) {
  const container = document.createElement('div');
  container.classList.add('transaction');
  container.id = `transactions-${id}`;
  return container;
}

// Cria o elemento de título (nome) da transação
function createTransactionTitle(name) {
  const title = document.createElement('span');
  title.classList.add('transaction-title');
  title.textContent = name;
  return title;
}

// Cria o elemento de valor da transação, com formatação monetária
function createTransactionAmount(amount) {
  const span = document.createElement('span');

  // Formata o valor em BRL
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  });
  const formattedAmount = formater.format(amount);

  // Adiciona classes específicas para crédito ou débito
  if (amount > 0) {
    span.textContent = `${formattedAmount} C`;
    span.classList.add('credit');
  } else {
    span.textContent = `${formattedAmount} D`;
    span.classList.add('debit');
  }

  return span;
}

// Cria botão de edição e preenche o formulário com os dados da transação
function createEditTransactions(transaction) {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Editar';

  editBtn.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id;
    document.querySelector('#name').value = transaction.name;
    document.querySelector('#amount').value = transaction.amount;
  });

  return editBtn;
}

// Cria botão de exclusão e remove a transação da API e da interface
function createDeleteTransactionBtn(id) {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Excluir';

  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    });

    // Remove do DOM
    deleteBtn.parentElement.remove();

    // Remove do array local
    const indexRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexRemove, 1);

    // Atualiza o saldo
    updateBalance();
  });

  return deleteBtn;
}

// Monta e exibe visualmente uma transação na tela
function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.title);
  const amount = createTransactionAmount(transaction.amount);
  const editBtn = createEditTransactions(transaction);
  const deleteBtn = createDeleteTransactionBtn(transaction.id);

  container.append(title, amount, editBtn, deleteBtn);
  document.querySelector('#transactions').append(container);
}

/* =======================
  Função de Salvar Transação (Criar ou Editar)
========================== */

async function saveTransaction(ev) {
  ev.preventDefault(); // Previne reload do formulário

  const id = document.querySelector('#id').value;
  const name = document.querySelector('#name').value;
  const amount = parseFloat(document.querySelector('#amount').value);

  if (id) {
    // Edição
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const transaction = await response.json();

    // Atualiza no array e no DOM
    const indexRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexRemove, 1, transaction);
    document.querySelector(`#transactions-${id}`).remove();
    renderTransaction(transaction);
  } else {
    // Criação
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json ',
      },
    });

    const transaction = await response.json();
    transactions.push(transaction);
    renderTransaction(transaction);
  }

  // Limpa formulário e atualiza saldo
  ev.target.reset();
  updateBalance();
}

/* =======================
  Funções Auxiliares
========================== */

// Busca todas as transações da API
async function fetTransactions() {
  return await fetch('http://localhost:3000/transactions').then((res) =>
    res.json()
  );
}

// Atualiza o saldo total exibido
function updateBalance() {
  const balanceSpan = document.querySelector('#balance');

  const balance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  });

  balanceSpan.textContent = formater.format(balance);
}

// Inicializa o app: carrega transações, renderiza e atualiza o saldo
async function setup() {
  const results = await fetTransactions();
  transactions.push(...results);
  transactions.forEach(renderTransaction);
  updateBalance();
}

/* =======================
  Eventos de Inicialização
========================== */

// Quando o HTML for carregado, chama a função setup
document.addEventListener('DOMContentLoaded', setup);

// Quando o formulário for enviado, chama saveTransaction
document.querySelector('form').addEventListener('submit', saveTransaction);
