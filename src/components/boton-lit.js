import { LitElement, html, css } from 'lit';

export class BotonComponentLit extends LitElement {

    static properties = {
        name: {type: String}
    };

    static styles = css`
        button {
            font-size: 16px;
            line-height: normal;
            font-family: "BentonSans";
            font-weight: 400;
            background-color: #004481;
            border-radius: 5px;
            color: white;
            width: 150px;
            height: 20px;
        }
    `;

    render(){
        return html`
            <button id="boton">${this.name}</button>
        `;
    }
}
customElements.define("boton-lit", BotonComponentLit);