import { LitElement, html, css } from "lit";

import "./cardprofile-lit";
import "./combo-lit";

export class HeaderLit extends LitElement {

    static get styles() {
        return css`

            .container {
                background-color: blue;
            }
        `;
    }

    render(){
        return html `
            <div class="container">
                <card-lit></card-lit>
                
                <label>Level</label>
                <combo-lit></combo-lit>    
            </div>
        `;
    }

}

customElements.define("header-lit", HeaderLit);