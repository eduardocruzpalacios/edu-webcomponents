import { html, css, LitElement } from 'lit';

export class EduButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  static properties = {
    text: { type: String },
  };

  constructor() {
    super();
    this.text = 'Default text';
  }

  render() {
    return html` <button>${this.text}</button> `;
  }
}

window.customElements.define('edu-button', EduButton);
