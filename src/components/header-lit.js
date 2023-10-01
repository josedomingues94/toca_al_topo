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
                margin-left: 10%;
            }
        `;
    

    render(){
        return html `
            <div class="container">
                <card-lit></card-lit>

                <label>Level</label>
                <combo-lit .options="${[
                    {value: 'option1', label: 'Facil'},
                    {value: 'option2', label: 'Intermedio'},
                    {value: 'option3', label: 'Dificil'}
                ]}">
                </combo-lit>    
            </div>
        `;
    }

}

customElements.define("header-lit", HeaderLit);