import { LitElement, html, css } from "lit";


export class CardProfile extends LitElement {

    static get styles() {
        return css`
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
    }

    render(){
        return html`
        
            <div class="img">
                <img src="../../assets/images/icons/profile-user.svg" alt="">
            </div>
        
        `;
    }
}
customElements.define("card-lit", CardProfile);