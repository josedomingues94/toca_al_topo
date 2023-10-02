import { LitElement, html, css } from "lit";

export class HitTheMole extends LitElement {
  static styles = css`
    .square {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 10px;
    }
    .grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: center;
      width: 400px;
      height: 400px;
    }

    .mole {
      background-image: url("../../assets/images/topo.png");
      background-size: cover;
      background-repeat: no-repeat;
    }
  `;

  static properties = {
    square: {},
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="grid">
        <div class="square" id="1" @click="${this.tocaCuadro}"></div>
        <div class="square mole" id="2" @click="${this.tocaCuadro}"></div>
        <div class="square" id="3" @click="${this.tocaCuadro}"></div>
        <div class="square" id="4" @click="${this.tocaCuadro}"></div>
        <div class="square" id="5" @click="${this.tocaCuadro}"></div>
        <div class="square" id="6" @click="${this.tocaCuadro}"></div>
        <div class="square" id="7" @click="${this.tocaCuadro}"></div>
        <div class="square" id="8" @click="${this.tocaCuadro}"></div>
        <div class="square" id="9" @click="${this.tocaCuadro}"></div>
      </div>
    `;
  }

  tocaCuadro(option) {
    this.dispatchEvent(
      new CustomEvent("cuadro-elegido", { detail: this.square })
    );
  }

  mueveTopo() {
    this.square.forEach((className) => {
      className.classList.remove("mole");
    });

    let randomPosition = this.square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
  }
}

customElements.define("hitmole-lit", HitTheMole);
