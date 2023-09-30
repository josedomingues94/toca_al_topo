import { LitElement, html, css } from 'lit';

import "../components/header-lit.js";
import "../components/game-lit.js";
import "../components/boton-lit.js";
export class Game extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <header-lit></header-lit>
      <hitmole-lit></hitmole-lit>
      <my-boton></my-boton>
    `;
  }
}
customElements.define('game-view', Game);