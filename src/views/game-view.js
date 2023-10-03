import { LitElement, html, css } from "lit";

import "../components/cardprofile-lit";
import "../components/combo-lit";
import "../components/game-lit";
import "../components/boton-lit";
export class Game extends LitElement {
  
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

    .grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: center;
      width: 400px;
      height: 400px;
    }
  `;

  static properties = {
    puntos: { type: Number},
    mensajeAcierto: {type: String, value: ""}, 
    playerTouch: {type: String, value: ""},
    mostrar: {type: Boolean},
    topos: {type: Array}
  };

  constructor() {
    super();
    this.toposModel = [ false, false, false,false, false, false,false, false, false];
    this.name = "START";
    this.dificultad = "Bajo";
    this.puntos = 0;
    this.playerTouch = null;
    this.topos = [...this.toposModel];
  }

  render() {
    return html`
      <header>
        <div class="left">
          <card-lit></card-lit>
        </div>
        <div class="right">
          <label>Nivel</label>   
          <combo-lit @item-selected="${this.handleSelectedOption}"
            id="dificultad"
             .options="${[
              { value: "Bajo" },
              { value: "Medio" },
              { value:  "Alto" },]}">   
          </combo-lit>  
        </div>
      </header>
      <h3>Puntos: <span>${this.puntos}</span></h3>
      <div class="grid">
      
        ${this.topos.map(item => html`<hitmole-lit @click-topo="${this.handleClickTopo}" .mostrar=${item}></hitmole-lit>`)}
      </div>
      <boton-lit id="boton" @click=${this.startStop} name="${this.name}"></boton-lit>
      <footer>
              <p>${this.mensajeAcierto}</p>
      </footer>
    `;
  }

  //manejador que recibe el valor de la opcion del combo elegida
  handleSelectedOption(event){
    this.dificultad = event.detail;
  }

  //manejador que recibe el valor de la opcion del combo elegida
  handleClickTopo(event){
    this.dificultad = event.detail;
  }

  //funcion que mueve al topo de forma aleatoria segun el nivel del combo
  movertopo(){
    let movRandom;
    if(this.dificultad == "Bajo"){

      setInterval(() =>{
        movRandom = Math.floor(Math.random() * this.topos.length);
        this.toposModel[movRandom] = true;
        this.topos = [...this.toposModel];
        console.log(this.topos);
        this.playerTouch = this.square;
        this.clickDisabled = false;  

      }, 1000);
    }
    else if(this.dificultad == "Medio"){
      setInterval(() =>{
        movRandom = Math.floor(Math.random() * this.topos.length);
        this.toposModel[movRandom] = true;
        this.topos = [...this.toposModel];

        this.clickDisabled = false;   
      }, 750);
    }
    else{
      setInterval(() =>{
        movRandom = Math.floor(Math.random() * this.topos.length);
        this.toposModel[movRandom] = true;
        this.topos = [...this.toposModel];
        
      }, 500);
    }
  }

  //funcion que se encarga de seleccionar un cuadro en concreto
  _seleccionaCuadro(item){
    this.item = html`<img src="../../assets/images/topo.png">`;
    if(!this.clickDisabled){
      this.clickDisabled = true;
      this.playerTouch = 
      this.mensajeAcierto = "";
    }
  }


  //funcion que inicia y detiene el juego al pulsar el boton
  startStop() {
    this.name = this.name === "STOP" ? "START" : "STOP";

    
    
    this.movertopo();
    

    
  }

}
customElements.define("game-view", Game);
