import { LitElement, html, css } from "lit";

export class HitTheMole extends LitElement {
  static styles = css`
    .square {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 10px;
      background-color: transparent;
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
      background-color: transparent;
    }
  `;

  static properties = {
    enableButton: {type: Boolean, value: true},
    mostrar: {type: Boolean}
  }

  constructor(){
    super();
    this.mostrar = false;
  }
  
  get _renderImage(){
    return html`<img src="../../assets/images/topo.png"/>`;
  }

  render() {
    return html`
      <button ?disabled="${this.enableButton}" @click="${this._clickTopo}"><div class="square">${this.mostrar ? this._renderImage: ""}</div></button>
    `;
  }

  _clickTopo(event) {
    this.dispatchEvent(new CustomEvent("click-topo", {detail: event.target.value}));
  }

}

customElements.define("hitmole-lit", HitTheMole);
