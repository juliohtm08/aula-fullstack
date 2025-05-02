export class Component {
  #element = null; // Atributo privado que armazena a referência ao elemento HTML criado

  constructor(tag, parent, options) {
    this.tag = tag; // A tag HTML a ser criada (ex: 'div', 'input', etc.)
    this.parent = parent; // Pode ser um seletor (ex: 'body') ou outra instância de Component
    this.options = options; // Propriedades que serão atribuídas ao elemento (ex: { textContent: 'Olá' })
    this.build(); // Cria o elemento assim que a instância é criada
  }

  getElement() {
    // Método para obter a referência do elemento criado
    return this.#element;
  }

  build() {
    // Cria ou recria o elemento DOM e aplica as opções
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options);
    return this; // Retorna a instância para permitir encadeamento
  }

  render() {
    // Adiciona o elemento à tela
    if (this.parent instanceof Component) {
      // Se o pai for uma instância de Component
      this.parent.getElement().append(this.#element);
    } else {
      // Se for uma string seletora (ex: 'body')
      document.querySelector(this.parent).append(this.#element);
    }
  }
}
