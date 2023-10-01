import { LitElement, html, css } from "lit";

export class HitTheMole extends LitElement {

    static styles = css`
            .square{
                width: 100px;
                height: 100px;
                border: 1px solid black;
                margin: 10px;
            }
            .grid{
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-content: center;
                width: 400px;
                height: 400px;
            }
            
            .mole{
                background-image: url('../../assets/images/topo.png');
                background-size: cover;
                background-repeat: no-repeat;
            }
        `;
    

    render() {
        return html`

            <div>
                <h3>Puntos: <span id="puntos">0</span></h3>
                <div class="grid">
                    <div class="square" id="1"></div>
                    <div class="square" id="2"></div>
                    <div class="square" id="3"></div>
                    <div class="square" id="4"></div>
                    <div class="square" id=5"></div>
                    <div class="square" id="6"></div>
                    <div class="square" id="7"></div>
                    <div class="square" id="8"></div>
                    <div class="square" id="9"></div>
                </div>
            </div>
        `;
    }

    cajas = document.getElementById("square");
    topo = document.getElementById("mole");
    marcador = document.getElementById("score");

    muestraTopo(){
        cajas.forEach((square) => {
            square.remove("mole");
            
        });

        let aleatorio = cajas[Math.floor(Math.random() * 9)];
        aleatorio.classList.add("mole");

        
    }

}

customElements.define("hitmole-lit", HitTheMole);