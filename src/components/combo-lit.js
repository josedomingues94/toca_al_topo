import { LitElement, html, css } from "lit";

export class ComboLevel extends LitElement {
  static styles = css`
    select {
      margin-left: 10px;
      margin-bottom: 15px;
      background-color: blue;
      border-radius: 5px;
      color:white;
      border: none;
      border-Bottom: 1px solid black;
    }
  `;

  static properties = {
    options: [Array]
  };

  render() {
    return html`
      <select id="sel" @change="${this._selectedOption}">
        ${this.options.map((option) => html`<option>${option.value}</option>`)}
      </select>
    `;
  }

  _selectedOption(event) {
    this.dispatchEvent(new CustomEvent("item-selected", {detail: event.target.value}));
  }
}

customElements.define("combo-lit", ComboLevel);
