import { html, css, LitElement } from 'lit';
import { colorsConstants, typographyConstants } from '../../stylesConstants.js';

export class EduBanner extends LitElement {
  static styles = [
    colorsConstants,
    typographyConstants,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .banner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem 1.5rem;
        font-family: inherit;
        line-height: var(--lineHeight);
        border-left: 4px solid transparent;
        position: relative;
      }

      .banner__content {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .banner__icon {
        flex-shrink: 0;
        font-size: 1.25rem;
        line-height: 1;
      }

      .banner__message {
        flex: 1;
      }

      .banner__close {
        flex-shrink: 0;
        background: none;
        border: none;
        padding: 0.25rem;
        cursor: pointer;
        font-size: 1.25rem;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.2s ease-in-out;
        min-height: 24px;
        min-width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      }

      .banner__close:hover {
        opacity: 1;
      }

      .banner__close:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }

      /* Hidden state */
      :host([hidden]) {
        display: none;
      }

      /* Type variants - Light mode */
      .banner--info {
        background-color: #e3f2fd;
        color: #01579b;
        border-left-color: #2196f3;
      }

      .banner--success {
        background-color: #e8f5e9;
        color: #1b5e20;
        border-left-color: #4caf50;
      }

      .banner--warning {
        background-color: #fff3e0;
        color: #e65100;
        border-left-color: #ff9800;
      }

      .banner--error {
        background-color: #ffebee;
        color: #b71c1c;
        border-left-color: #f44336;
      }

      .banner--neutral {
        background-color: var(--greyLight);
        color: var(--blackLight);
        border-left-color: var(--greyDark);
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .banner--info {
          background-color: #0d47a1;
          color: #bbdefb;
          border-left-color: #42a5f5;
        }

        .banner--success {
          background-color: #1b5e20;
          color: #c8e6c9;
          border-left-color: #66bb6a;
        }

        .banner--warning {
          background-color: #e65100;
          color: #ffe0b2;
          border-left-color: #ffa726;
        }

        .banner--error {
          background-color: #b71c1c;
          color: #ffcdd2;
          border-left-color: #ef5350;
        }

        .banner--neutral {
          background-color: var(--greyLight);
          color: var(--blackLight);
          border-left-color: var(--greyDark);
        }

        .banner__close {
          color: currentColor;
        }
      }

      /* Position variants */
      .banner--sticky {
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .banner--fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
      }
    `,
  ];

  static properties = {
    type: { type: String },
    message: { type: String },
    dismissible: { type: Boolean },
    position: { type: String },
    icon: { type: String },
    ariaLabel: { type: String, attribute: 'aria-label' },
  };

  constructor() {
    super();
    this.type = 'info';
    this.message = '';
    this.dismissible = false;
    this.position = 'static';
    this.icon = '';
    this.ariaLabel = '';
  }

  _getDefaultIcon() {
    const icons = {
      info: 'ℹ️',
      success: '✓',
      warning: '⚠️',
      error: '✕',
      neutral: '•',
    };
    return icons[this.type] || icons.info;
  }

  _handleClose() {
    this.dispatchEvent(
      new CustomEvent('banner-close', {
        bubbles: true,
        composed: true,
      })
    );
    this.style.display = 'none';
  }

  render() {
    const iconToDisplay = this.icon || this._getDefaultIcon();
    const computedAriaLabel =
      this.ariaLabel || `${this.type} banner: ${this.message}`;

    return html`
      <div
        class="banner banner--${this.type} banner--${this.position}"
        role="alert"
        aria-label=${computedAriaLabel}
      >
        <div class="banner__content">
          ${iconToDisplay
            ? html`<span class="banner__icon" aria-hidden="true"
                >${iconToDisplay}</span
              >`
            : ''}
          <div class="banner__message">${this.message}</div>
        </div>
        ${this.dismissible
          ? html`
              <button
                class="banner__close"
                @click=${this._handleClose}
                aria-label="Close banner"
                type="button"
              >
                ✕
              </button>
            `
          : ''}
      </div>
    `;
  }
}

customElements.define('edu-banner', EduBanner);
