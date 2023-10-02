import { LitElement, html, css } from 'lit';

import "../components/cardprofile-lit";
import "../components/combo-lit";
import "../components/game-lit";
import "../components/boton-lit";
export class Game extends LitElement {

  static properties = {
    name: {type: String},
    puntos: {type: Number, value: 0},
    dificultad: {type: String}

  };

  static styles = css`
      
    header{
      background-color: blue;
      height: 60px;
    }

    .left {
      margin-left: 5px;
      float: left;
      position: relative;
      width: 30%;
      height: auto;
    }
    
    .right {
        margin-top: 10px;
        margin-left: 50px;
        position: relative;
        float: left;
        width: 50%;
        border: steelblue solid 1px;
        height: auto;
    }

    h3{
      float: right;
      margin-right: 20px;
    }

    label{
      color: white;
    }
  `;

  constructor() {
    super();
    this.name = "START";
    this.puntos = 0;
    this.square = {};
    this.dificultad = [];
  }

  

  render() {
    return html`
      <header>
        <div class="left">
          <card-lit></card-lit>
        </div>
        <div class="right">
          <label>Level</label>
          <combo-lit id="dificultad" .options="${[
            {value: 'option1', label: 'Facil'},
            {value: 'option2', label: 'Intermedio'},
            {value: 'option3', label: 'Dificil'} ]}">
          </combo-lit> 
        </div>
      </header>
      <h3>Puntos: <span id="puntos">${this.puntos}</span></h3>
      <hitmole-lit @cuadro-elegido="${this.handleSelectSquare}"></hitmole-lit> 
      <boton-lit @click=${this.startStop} name="${this.name}"></boton-lit>
    `;
  }

  handleSelectSquare(event){
    this.square = event.detail;
  }
  
  startStop(){
    this.name = this.name === "START" ? "STOP" : "START";
    
  }

  
}
customElements.define('game-view', Game);