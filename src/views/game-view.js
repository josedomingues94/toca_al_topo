import { LitElement, html, css } from 'lit';

export class Game extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h1>About</h1>
      <p>This is the about page.</p>`;
  }
}
customElements.define('game-view', Game);