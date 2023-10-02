import { LitElement, html, css } from "lit";

export class HitTheMole extends LitElement {
  static styles = css`
    .square {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 10px;
    }

    button{
      border: 0px;   
      margin: 0px;
      padding: 0px;
    }
  `;

  render() {
    return html`
      <button><div class="square"></div></button>
    `;
  }
}

customElements.define("hitmole-lit", HitTheMole);
