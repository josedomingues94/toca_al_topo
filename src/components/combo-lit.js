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
    selectedOption: "",
  };

  render() {
    return html`
      <select @change="${this.handleSelectChange}">
        ${this.options.map(
          (option) => html`
            <option value="${option.value}">${option.label}</option>
          `
        )}
      </select>
    `;
  }

  handleSelectChange(event) {
    this.selectedOption = event.target.value;
  }
}

customElements.define("combo-lit", ComboLevel);
