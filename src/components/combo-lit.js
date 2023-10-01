import { LitElement, html, css } from "lit";

export class ComboLevel extends LitElement {

    static properties = {
        options: [Array]
    };
    


    static styles = css`
        select {
            margin-left: 20%;
        }
    `;
        
    

    render(){
        return html`
            <select>
                ${this.options.map(option => html`
                    <option value="${option.value}">${option.label}</option>
                `)}
            </select>
        `;
    }

}

customElements.define("combo-lit", ComboLevel);