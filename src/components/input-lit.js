import { LitElement, html, css } from "lit";


export class EscribirUser extends LitElement {
    render(){
        return html`
            <input type="text">
        `;
    }
}

customElements.define("my-input", EscribirUser);