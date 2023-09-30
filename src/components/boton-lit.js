import { LitElement, html, css } from 'lit';

import "./input-lit";

export class BotonAddUser extends LitElement {
    render(){
        return html`
            <button"><a href="/game">Jugar</a></button>
        `;
    }
}
customElements.define("my-boton", BotonAddUser);