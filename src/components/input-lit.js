import { LitElement, html, css } from "lit";

export class EscribirUser extends LitElement {

    static properties = {
        player: {type: String}
    }

    static styles = css`
            input {
                width: 100%;
                height: 15px;
                margin-top: 2vh;
                border-top: 0px;
                border-left: 0px;
                border-right: 0px;
            }
        `;

    render(){
        return html`
            <input id="player" required>${this.player}</input>
        `;
    }
}

customElements.define("input-lit", EscribirUser);