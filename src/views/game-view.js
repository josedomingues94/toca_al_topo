import { LitElement, html, css } from 'lit';

import "../components/header-lit";
import "../components/game-lit";
import "../components/boton-lit";
export class Game extends LitElement {

  static properties = {
    name: {type: String},
    hoyos: {}
  };

  static styles = css`
      :host {
        display: block;
      }
  `;

  constructor() {
    super();
    this.name = "START";
    this.hoyos = 0;
    
  }

  render() {
    return html`
      <header-lit></header-lit>
      <hitmole-lit></hitmole-lit> 
      <boton-lit @click=${this.startStop} name="${this.name}"></boton-lit>
    `;
  }

  muevete(){
    
    
  }

  startStop(){
    this.name = this.name === "START" ? "STOP" : "START";
    alert(this.name);
    if(this.name){
      alert(this.name);
    }
  }
}
customElements.define('game-view', Game);