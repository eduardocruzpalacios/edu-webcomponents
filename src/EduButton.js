import { html, css, LitElement } from 'lit';

export class EduButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      background-color: #007acc;
      color: white;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    button:hover:not(:disabled) {
      background-color: #005fa3;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  `;

  static properties = {
    text: { type: String },
    type: { type: String },
    ariaLabel: { type: String, attribute: 'aria-label' },
    disabled: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.text = 'Default text';
    this.type = 'button';
    this.ariaLabel = this.text;
  }

  render() {
    return html`
      <button
        type=${this.type}
        aria-label=${this.ariaLabel}
        ?disabled=${this.disabled}
      >
        ${this.text}
      </button>
    `;
  }
}

window.customElements.define('edu-button', EduButton);
