import { LitElement, html, css } from "lit";

export class ComboLevel extends LitElement {

    render(){
        return html`
            <select>
                <option>Facil</option>
                <option>Intermedio</option>
                <option>Dificil</option>
            </select>
        `;
    }

}

customElements.define("combo-lit", ComboLevel);