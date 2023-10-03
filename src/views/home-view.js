import { LitElement, html, css } from 'lit';
import {ValidateUser} from '../../indexeddb.js';


import "../components/boton-lit";
export class Home extends LitElement {

  static styles = css`
  .contenedor {
    width: 400px;
  }

    img{
      margin-top: 100px;
      margin-bottom: 30px;
    }

    input{
      display: block;
      margin-top: 60px;
      margin-left: 125px; 
      margin-bottom: 20px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      background-color: transparent;
      border-bottom: 3px solid #2970CA !important;
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
    <div class= "contenedor">
      <img src="../../assets/images/icons/martillo.png" alt="">
      <input id="player" type="text" placeholder="Nombre">
      <boton-lit @click="${this.comprobar}" name="${this.name}"></boton-lit>
    </div>
    `;
  }
    
  async comprobar(e){
    const myPlayer = this.shadowRoot.getElementById("player");
    const playerName = myPlayer.value;
    if(playerName != ""){
      try{
        this.score = await ValidateUser(playerName);
        location.href = `/game?value=${encodeURIComponent(playerName)}&score=${encodeURIComponent(this.score)}`;
      }
       catch (error) { }
    }
    else
      location.href="/";
  }

}
customElements.define("home-view", Home);