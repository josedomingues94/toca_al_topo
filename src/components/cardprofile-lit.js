import { LitElement, html, css } from "lit";


export class CardProfile extends LitElement {

    static styles = css`
       
        img {
            color: white;
        }
    
     `;

    constructor(){
        super();
        const urlParams = new URLSearchParams(window.location.search);
        this.valueReceived = urlParams.get('value');
        
        
    }

    render(){
        return html`
            
                <img src="../../assets/images/icons/profile-user.svg" alt="">
                <label>${this.valueReceived}</label>
            
        `;
    }
}
customElements.define("card-lit", CardProfile);

