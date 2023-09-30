import { LitElement, html, css } from "lit";


export class EscribirUser extends LitElement {

    static get styles(){
        return css`
            input {
                width: 90%;
                height: 15px;
                margin-top: 2vh;
                border-top: 0px;
                border-left: 0px;
                border-right: 0px;
            }
        `;
    }

    render(){
        return html`
            <input id="user" type="text">
        `;
    }
}

customElements.define("my-input", EscribirUser);