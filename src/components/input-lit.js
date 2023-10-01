import { LitElement, html, css } from "lit";

export class EscribirUser extends LitElement {

    static properties = {
        player: {type: String}
    };

    static styles = css`
        input {
            width: 90%;
            height: 15px;
            margin-top: 2vh;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
        }
    `;

    render(){
        return html`     
            <input type="text" id="player" @input="${this.validaPlayer}">
        `;
    }

    validaPlayer(){
        const myPlayer = this.shadowRoot.getElementById("player");
        const playername = myPlayer.value;
    }
}

customElements.define("input-lit", EscribirUser);