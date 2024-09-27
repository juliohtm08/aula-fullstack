class Component {
  #component = null;
  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }
  //lê o componente
  getElement() {
    return this.#component;
  }
  //cria o componente
  build() {
    this.#component = document.createElement(this.tag);
    // Object.assign copia todas as propriedades de this.options para o novo componente html, incluindo id, className, name, etc
    Object.assign(this.#component, this.options);
    return this;
  }
  //Renderiza o componente
  render() {
    /* 
      Se o parent for um componente, ele adiciona o componente atual como filho desse componente pai.
      Se o parent for uma string de seletor (CSS), ele encontra o elemento correspondente no DOM e adiciona 
      o componente a esse elemento.
    */
    if (this.parent instanceof Component) {
      this.parent.#component.append(this.#component); //append irá adicionar os componentes a tela
    }
    document.querySelector(this.parent).append(this.#component);
  }
}
