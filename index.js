import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import {StartDataBase} from './indexeddb.js';

import "./src/views/home-view.js";
import "./src/views/game-view.js";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('/sw.js')
      .then(function (registration) {
          console.log('Registration successful, scope is:', registration.scope)
      })
      .catch(function (error) {
          console.log('Service worker registration failed, error:', error)
      })
}

class Principal extends LitElement {

  static styles = css` 
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
     
    }

    main {
      flex-grow: 1;
      background: rgb(238,174,202);
      background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    }
  `;

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/game', component: 'game-view' },
      { path: '(.*)', redirect: '/' },
    ]);
    StartDataBase();
  }

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('my-principal', Principal);