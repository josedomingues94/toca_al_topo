import { LitElement, html, css } from "lit";

export class HitTheMole extends LitElement {
  static styles = css`
    .square {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 10px;
    }

    img {
      background-size: cover;
      background-repeat: no-repeat;
      width: 100px;
      height: 100px;
    }

    button{
      border: 0px;   
      margin: 0px;
      padding: 0px;
    }
  `;

  static properties = {
    enableButton: {type: Boolean, value: true}
  }

  render() {
    return html`
      <button ?disabled="${this.enableButton}"><div class="square"></div></button>
    `;
  }
}

customElements.define("hitmole-lit", HitTheMole);
