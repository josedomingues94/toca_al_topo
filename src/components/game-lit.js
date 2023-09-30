import { LitElement, html, css } from "lit";

export class HitTheMole extends LitElement {

    static get styles(){
        return css`
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
    }

    render() {
        return html`

            <div>
                <h3>Puntos: </h3>
                <h3 class="score">0</h3>
                <div class="grid">
                    <div class="square" id="1"></div>
                    <div class="square mole" id="2"></div>
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

}

customElements.define("hitmole-lit", HitTheMole);