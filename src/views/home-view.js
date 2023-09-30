import { LitElement, html, css } from 'lit';

import "../components/input-lit.js";
import "../components/boton-lit.js";
export class Home extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .container {
        border: solid 3px red;
        margin-top: 100px;
        height: 250px;
        text-align: center;
      }

      img{
        width: 50px;
        height: 50px;
      }
    `,
  ];

  render() {
    return html`
      <div class="container">
        <div>
          <img src="../../assets/images/icons/martillo.png">
        </div>
        <div>
          <my-input></my-input>
        </div>
        <div>
          <my-boton></my-boton>
        </div>
      </div>
    `;
  }
}
customElements.define("home-view", Home);