import { LitElement, html, css } from "lit";


export class CardProfile extends LitElement {

    static properties = {
        player: {type: String}
    };

    static styles = css`
       
        img {
            color: white;
        }
    
     `;

    constructor(){
        super();
        this.player = "";
    }

    render(){
        return html`
            
                <img src="../../assets/images/icons/profile-user.svg" alt="">
                <label>${this.player}</label>
            
        `;
    }
}
customElements.define("card-lit", CardProfile);

