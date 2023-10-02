import { LitElement, html, css } from "lit";


export class CardProfile extends LitElement {

    static styles = css`
       
        img {
            color: white;
            margin-top: 5px;
            height: 50px;
        }

        label {
            color: white;
            font-size: 1.5rem;
            float: right;
            margin-top: 15px;
        }
    
     `;

    constructor(){
        super();
        const urlParams = new URLSearchParams(window.location.search);
        this.valueReceived = urlParams.get('value');
        
        
    }

    render(){
        return html` 
            <img src="../../assets/images/icons/perfil-del-usuario.png" alt="">
            <label>${this.valueReceived}</label>
        `;
    }
}
customElements.define("card-lit", CardProfile);

