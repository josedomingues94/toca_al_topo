import { LitElement, html, css } from 'lit';

import "../components/input-lit.js";
import "../components/boton-lit.js";

export class Home extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <my-input></my-input>
      <my-boton></my-boton>
    `;
  }
}
customElements.define("home-view", Home);