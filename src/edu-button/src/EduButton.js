import { html, css, LitElement } from 'lit';
import { colorsConstants } from '../../stylesConstants.js';

export class EduButton extends LitElement {
  static styles = [
    colorsConstants,
    css`
      :host {
        display: block;
      }

      button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        background-color: var(--primary);
        color: var(--primaryForeground);
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
      }

      button:hover:not(:disabled) {
        background-color: var(--primaryHover);
      }

      button:disabled {
        background-color: var(--disabled);
        cursor: not-allowed;
      }
    `,
  ];

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
