import { LitElement, html, css } from 'lit';

export class BotonAddUser extends LitElement {
    render(){
        return html`
            <button>Jugar</button>
        `;
    }
}
customElements.define("my-boton", BotonAddUser);