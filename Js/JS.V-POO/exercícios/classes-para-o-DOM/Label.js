import { Component } from './Component.js';

export class Label extends Component {
  constructor(text, parent, options) {
    // Cria um label com conteúdo de texto, passando a tag 'label'
    // Usa Object.assign para garantir que textContent seja sobrescrito se necessário
    super('label', parent, Object.assign({}, options, { textContent: text }));
  }
}
