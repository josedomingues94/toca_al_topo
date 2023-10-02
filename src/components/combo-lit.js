import { LitElement, html, css } from "lit";

export class ComboLevel extends LitElement {
  static styles = css`
    select {
      margin-left: 10px;
      margin-bottom: 15px;
      background-color: lightblue;
      border-radius: 5px;
    }
  `;

  static properties = {
    options: [Array],
  };

  render() {
    return html`
      <select @change="${this._selectedOption}">
        ${this.options.map(
          (option) => html`
            <option value="${option.value}">${option.label}</option>
          `
        )}
      </select>
    `;
  }

  _selectedOption(event) {
    this.dispatchEvent(new CustomEvent("item-selected", {detail: this.option}));
  }
}

customElements.define("combo-lit", ComboLevel);
