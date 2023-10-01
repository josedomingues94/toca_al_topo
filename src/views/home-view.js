import { LitElement, html, css } from 'lit';

import "../components/boton-lit";
export class Home extends LitElement {

  static properties = {
    name: {type: String},
    player: {type: String}
  }

  constructor() {
    super();
    this.name = "Jugar";
    this.player = "";
  }

  render() {
    return html`
      <img src="../../assets/images/icons/martillo.png" alt="">
      <input id="player" type="text">
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