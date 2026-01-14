import { html, css, LitElement } from 'lit';
import { colorsConstants, typographyConstants } from '../../stylesConstants.js';

export class EduButton extends LitElement {
  static styles = [
    colorsConstants,
    typographyConstants,
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
        font-family: inherit;
        line-height: var(--lineHeight);
        min-height: 44px;
        min-width: 44px;
      }

      button:hover:not(:disabled) {
        background-color: var(--primaryHover);
      }

      button:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
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
    this.ariaLabel = '';
  }

  render() {
    return html`
      <button
        type=${this.type}
        aria-label=${this.ariaLabel || this.text}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled ? 'true' : 'false'}
      >
        ${this.text}
      </button>
    `;
  }
}

customElements.define('edu-button', EduButton);
