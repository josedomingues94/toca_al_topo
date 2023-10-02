import { LitElement, html, css } from "lit";

import "../components/cardprofile-lit";
import "../components/combo-lit";
import "../components/game-lit";
import "../components/boton-lit";
export class Game extends LitElement {
  static properties = {
    name: { type: String },
    puntos: { type: Number, value: 0 },
    dificultad: { type: String },
  };

  static styles = css`
    header {
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
      margin-top: 15px;
      margin-left: 70px;
      position: relative;
      float: left;
      width: 50%;
      height: auto;
    }

    h3 {
      float: right;
      margin-right: 20px;
    }

    label {
      color: white;
      font-size: 1.2rem;
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
          <label>Nivel</label>
          <combo-lit
            id="dificultad"
            .options="${[
              { value: "option1", label: "Bajo" },
              { value: "option2", label: "Medio" },
              { value: "option3", label: "Alto" },
            ]}"
          >
          </combo-lit>
        </div>
      </header>
      <h3>Puntos: <span id="puntos">${this.puntos}</span></h3>
      <hitmole-lit @cuadro-elegido="${this.handleSelectSquare}"></hitmole-lit>
      <boton-lit @click=${this.startStop} name="${this.name}"></boton-lit>
    `;
  }

  handleSelectSquare(event) {
    this.square = event.detail;
  }

  startStop() {
    this.name = this.name === "START" ? "STOP" : "START";
  }
}
customElements.define("game-view", Game);
