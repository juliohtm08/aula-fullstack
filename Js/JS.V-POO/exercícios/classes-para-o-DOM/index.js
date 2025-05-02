import { Component } from './Component.js';
import { Form } from './Form.js';
import { Input } from './Input.js';
import { Label } from './Label.js';

// Cria um título <h1> com texto "olá mundo", renderiza na <body>
const title = new Component('h1', 'body', { textContent: 'olá mundo' });
console.log(title);
title.render();

// Altera a tag para <h3>, reconstrói e renderiza novamente
title.tag = 'h3';
title.build().render();

// Cria o formulário principal e um par label/input para o campo "Nome"
const form = new Form('body');
const label = new Label('Nome: ', form, { htmlFor: 'nameInput' });
const input = new Input(form, { id: 'nameInput', name: 'name' });

form.render(); // Renderiza o <form> no <body>
label.render(); // Renderiza o <label> no <form> (porque form é pai)

// Adiciona o input como filho do formulário
form.addChildren(input);

// Adiciona outros elementos ao formulário: quebra de linha e outro par label/input
form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de nascimento: ', form, { htmlFor: 'birthdayInput' }),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
);
