import { LitElement, html, css } from 'lit';
import { colorsConstants } from '../../stylesConstants.js';

export class EduDivider extends LitElement {
  static properties = {
    label: { type: String },
    ariaLabel: { type: String, attribute: 'aria-label' },
  };

  constructor() {
    super();
    this.label = '';
    this.ariaLabel = '';
  }

  static styles = [
    colorsConstants,
    css`
      .divider {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--greyDark);
        font-size: 0.875rem;
        width: 100%;
      }

      .line {
        flex: 1;
        height: 2px;
        background-color: var(--greyDark);
      }

      .label {
        padding: 0 0.75rem;
        white-space: nowrap;
      }
    `,
  ];

  render() {
    const effectiveAriaLabel = this.ariaLabel || this.label;

    return html`
      <div
        class="divider"
        role="separator"
        aria-orientation="horizontal"
        aria-label=${effectiveAriaLabel || 'Section divider'}
      >
        <div class="line" aria-hidden="true"></div>
        ${this.label
          ? html`<span class="label" aria-hidden="true">${this.label}</span>`
          : null}
        <div class="line" aria-hidden="true"></div>
      </div>
    `;
  }
}

customElements.define('edu-divider', EduDivider);
