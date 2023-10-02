import { LitElement, html, css } from 'lit';

import "../components/boton-lit";
export class Home extends LitElement {

  static styles = css`

    img{
      margin-top: 100px;
      margin-bottom: 30px;
    }

    input{
      display: block;
      margin-bottom: 20px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      border-bottom: 1px solid blue;
    }
  `;

  static properties = {
    name: {type: String}
  }

  constructor() {
    super();
    this.name = "Jugar";
  }

  render() {
    return html`
      <img src="../../assets/images/icons/martillo.png" alt="">
      <input id="player" type="text" placeholder="Nombre">
      <boton-lit @click="${this.comprobar}" name="${this.name}"></boton-lit>
    `;
  }

  
    
  comprobar(e){
    const myPlayer = this.shadowRoot.getElementById("player");
    const playerName = myPlayer.value;
    if(playerName != "")
      location.href = `/game?value=${encodeURIComponent(playerName)}`;
    else
      location.href="/";
  }

}
customElements.define("home-view", Home);