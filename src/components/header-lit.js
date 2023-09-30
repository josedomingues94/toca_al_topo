import { LitElement, html, css } from "lit";

import "./cardprofile-lit";
import "./combo-lit";

export class HeaderLit extends LitElement {

    static styles = css`

            .container {
                background-color: blue;
                display: flex;
            }

            label {
                
            }
        `;
    

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