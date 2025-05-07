const App = require('./App.js');

// Criação de usuários
App.createUser('Julio', 'julio@email.com');
App.createUser('João', 'joao@email.com');
App.createUser('Maria', 'maria@email.com');

// Depósito na conta do Julio
App.deposit('julio@email.com', 100);

// Transferência de Julio para João
App.transfer('julio@email.com', 'joao@email.com', 20);

// Configura taxa de juros e realiza empréstimo para Maria
App.setLoanInterestRate(10); // 10%
App.loan('maria@email.com', 2000, 24); // Empréstimo com 24 parcelas

// Exibe os dados dos usuários e suas contas
console.log(App.findUser('julio@email.com'));
console.log(App.findUser('julio@email.com').account);
console.log(App.findUser('joao@email.com'));
console.log(App.findUser('joao@email.com').account);
console.log(App.findUser('maria@email.com'));
console.log(App.findUser('maria@email.com').account);

// Mostra as parcelas do empréstimo da Maria
console.log(App.findUser('maria@email.com').account.loans[0].installments);
