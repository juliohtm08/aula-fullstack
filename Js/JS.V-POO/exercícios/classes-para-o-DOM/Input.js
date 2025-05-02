import { Component } from './Component.js';

export class Input extends Component {
  constructor(parent, options) {
    // Cria um input com a tag 'input', herdando comportamento padrão
    super('input', parent, options);
  }
}
