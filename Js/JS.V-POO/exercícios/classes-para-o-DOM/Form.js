import { Component } from './Component.js';

export class Form extends Component {
  constructor(parent, options) {
    // Cria um form usando a tag 'form'
    super('form', parent, options);
  }

  addChildren(...children) {
    // Adiciona filhos ao formulário. Cada filho deve ser uma instância de Component (ou subclasses)
    children.forEach((child) => {
      this.getElement().appendChild(child.getElement());
    });
  }
}
