import { LitElement, html, css, nothing } from 'lit';

import "../components/input-lit";
import "../components/boton-lit";
export class Home extends LitElement {

  static properties = {
    name: {type: String},
    player: {type: String}
  }

  constructor() {
    super();
    this.name = "Jugar";
    this.player = "";
  }

  get input() {
    return this.renderRoot?.querySelector('input#player') ?? null;
  }

  render() {
    return html`
      <input-lit name="${this.player}" ></input-lit>
      <boton-lit  name="${this.name}"></boton-lit>
    `;
  }

  validarPlayer(){
  }


}
customElements.define("home-view", Home);