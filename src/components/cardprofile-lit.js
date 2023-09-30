import { LitElement, html, css } from "lit";

import "../components/input-lit";
export class CardProfile extends LitElement {

    static properties = {
        player: {type: String}
    };

    static styles = css`
        .card .img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            z-index: 10;
            transform: translateY(50px);
            border: 10px solid #fff;
            overflow: hidden;
            position: absolute;
            background: #fff;
        }
        .card .img img{
            width: 120%;
            height: 120%;
            transform: translate(-8%,-8%);
        }
        `;

    constructor(){
        super();
        this.player = "";
    }
    

    render(){
        return html`
            <div class="img">
                <img src="../../assets/images/icons/profile-user.svg" alt="">
                <label>${this.player}</label>
            </div>
        `;
    }
}
customElements.define("card-lit", CardProfile);

