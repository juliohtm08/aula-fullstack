import { Component } from "./Component";

//aqui ele cria o componente label, o texto dentro da label que vai ser exibido e adiciona as
//opções fornecidas pelo Component na label criada
export class Label extends Component {
  constructor(text, parent, options) {
    super("label", parent, Object.assign({}, options, { textContent: text }));
  }
}
