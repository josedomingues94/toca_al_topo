import { LitElement, html, css } from 'lit';

import "../components/cardprofile-lit";
import "../components/combo-lit";
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
      <header>
        <card-lit></card-lit>
        <label>Level</label>
                <combo-lit .options="${[
                    {value: 'option1', label: 'Facil'},
                    {value: 'option2', label: 'Intermedio'},
                    {value: 'option3', label: 'Dificil'}
                ]}">
                </combo-lit>  
      </header>

      
      <hitmole-lit></hitmole-lit> 
      <boton-lit @click=${this.startStop} name="${this.name}"></boton-lit>
    `;
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