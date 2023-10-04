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
    name: {type: String},
    puntos: { type: Number},
    mensajeAcierto: {type: String, value: ""}, 
    mostrar: {type: Boolean},
    topos: {type: Array},
    playerTouch: {type: Boolean},
    dificultad: {type: String},
  };

  constructor() {
    super();
    this.toposModel = [ false, false, false,false, false, false,false, false, false];
    this.name = "START";
    this.dificultad = "Bajo";
    this.puntos = 0;
    this.topos = [...this.toposModel];
    this.playerTouch = false;
    this.currentInterval = null;
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
              { value: "Alto" },]}">   
          </combo-lit>  
        </div>
      </header>
      <h3>Puntos: <span>${this.puntos}</span></h3>
      <div class="grid"> 
        ${this.topos.map(item => html`<hitmole-lit .enableButton="${this.clickDisabled}" .mostrar=${item} @click="${() => this.elegido(item)}"></hitmole-lit>`)}
      </div>
      <boton-lit id="boton" @click="${this.startStop}" name="${this.name}"></boton-lit>
      <footer>
        <p>${this.mensajeAcierto}</p>
      </footer>
    `;
  }

  //manejador que recibe el valor de la opcion del combo elegida
  handleSelectedOption(event){
    this.dificultad = event.detail;
    this.currentInterval = null;
  }

   myInterval(time){
    let movRandom = 0;
    return setInterval( () => {
      movRandom = Math.floor(Math.random() * this.topos.length);
      this.toposModel[movRandom] = true;
      this.topos = [...this.toposModel];
      this.toposModel[movRandom] = false;
      this.clickDisabled = false;
      this.mensajeAcierto = "";
    }, this.time);
  }

  seleccionDificultad(){
    if(this.currentInterval == null){  
      clearInterval(this.currentInterval);   
    }

    if(this.dificultad == "Bajo"){
      this.time = 1000;
      this.currentInterval = null;
      this.currentInterval = this.myInterval(this.time);
    }
    else if(this.dificultad == "Medio"){
      this.time = 750;  
      this.currentInterval = null;
      this.currentInterval = this.myInterval(this.time);
    }
    else if(this.dificultad == "Alto"){
      this.time = 500;
      this.currentInterval = this.myInterval(this.time);
    }   
  }

  elegido(item){
    if(!this.clickDisabled){
      this.clickDisabled = true;
      this.playerTouch = item;
      if(this.playerTouch == true){
        if(this.dificultad == "Bajo")
          this.puntos = this.puntos + 10;
        else if(this.dificultad == "Medio")
          this.puntos = this.puntos + 20;
        else if(this.dificultad == "Alto")
          this.puntos = this.puntos + 30;
        this.mensajeAcierto = "Le diste";
      }      
    }
  }

  //funcion que inicia y detiene el juego al pulsar el boton y mueve al topo 
  startStop() {
    this.name = this.name === "START" ? "STOP" : "START"; 
    if(this.name != "START"){
      if(this.dificultad == "Bajo"){
        this.seleccionDificultad();
      }
      if(this.dificultad == "Medio"){
        this.seleccionDificultad();
      }
      if(this.dificultad == "Alto"){
        this.seleccionDificultad();
      }
    }
    if(this.name != "STOP"){ 
      clearInterval(this.currentInterval);
    }
    
  }



}
customElements.define("game-view", Game);
