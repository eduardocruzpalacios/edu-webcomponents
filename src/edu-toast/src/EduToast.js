import { LitElement, html, css } from 'lit';
import { colorsConstants, typographyConstants } from '../../stylesConstants.js';

const POSITION = {
  TOP_RIGHT: 'top-right',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_LEFT: 'bottom-left',
};

const TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NEUTRAL: 'neutral',
};

const VALID_POSITIONS = Object.values(POSITION);
const VALID_TYPES = Object.values(TYPE);

function normalizeValue(value, validValues, fallback) {
  if (!value) {
    return fallback;
  }
  const normalized = value.toString().toLowerCase();
  return validValues.includes(normalized) ? normalized : fallback;
}

export class EduToast extends LitElement {
  static properties = {
    message: { type: String },
    type: { type: String },
    duration: { type: Number },
    open: { type: Boolean, reflect: true },
    dismissible: { type: Boolean },
    position: { type: String, reflect: true },
    icon: { type: String },
    ariaLabel: { type: String, attribute: 'aria-label' },
  };

  constructor() {
    super();
    this.message = '';
    this.type = TYPE.INFO;
    this.duration = 3000;
    this.open = false;
    this.dismissible = false;
    this.position = POSITION.TOP_RIGHT;
    this.icon = '';
    this.ariaLabel = '';
    this._autoHideTimeout = null;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._clearAutoHide();
  }

  updated(changedProperties) {
    if (changedProperties.has('position')) {
      const normalized = normalizeValue(
        this.position,
        VALID_POSITIONS,
        POSITION.TOP_RIGHT
      );
      if (normalized !== this.position) {
        this.position = normalized;
      }
    }

    if (changedProperties.has('type')) {
      const normalized = normalizeValue(this.type, VALID_TYPES, TYPE.INFO);
      if (normalized !== this.type) {
        this.type = normalized;
      }
    }

    if (changedProperties.has('open') || changedProperties.has('duration')) {
      this._handleAutoHide();
    }
  }

  static styles = [
    colorsConstants,
    typographyConstants,
    css`
      :host {
        display: block;
        position: fixed;
        z-index: 1000;
        max-width: 360px;
        width: max-content;
        pointer-events: none;
        font-family: inherit;
      }

      :host([open]) {
        pointer-events: auto;
      }

      :host([position='top-right']) {
        top: 1rem;
        right: 1rem;
      }

      :host([position='top-left']) {
        top: 1rem;
        left: 1rem;
      }

      :host([position='bottom-right']) {
        bottom: 1rem;
        right: 1rem;
      }

      :host([position='bottom-left']) {
        bottom: 1rem;
        left: 1rem;
      }

      .toast {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        min-width: 240px;
        max-width: 360px;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        pointer-events: auto;
        line-height: var(--lineHeight);
      }

      :host([open]) .toast {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .toast__icon {
        font-size: 1.25rem;
        line-height: 1;
      }

      .toast__content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
        font-size: 0.95rem;
      }

      .toast__message {
        font-weight: 500;
      }

      .toast__close {
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

      .toast__close:hover {
        opacity: 1;
      }

      .toast__close:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }

      .toast--info {
        background-color: #e3f2fd;
        color: #01579b;
      }

      .toast--success {
        background-color: #e8f5e9;
        color: #1b5e20;
      }

      .toast--warning {
        background-color: #fff3e0;
        color: #e65100;
      }

      .toast--error {
        background-color: #ffebee;
        color: #b71c1c;
      }

      .toast--neutral {
        background-color: var(--greyLight);
        color: var(--blackLight);
      }

      @media (prefers-color-scheme: dark) {
        .toast--info {
          background-color: #0d47a1;
          color: #bbdefb;
        }

        .toast--success {
          background-color: #1b5e20;
          color: #c8e6c9;
        }

        .toast--warning {
          background-color: #e65100;
          color: #ffe0b2;
        }

        .toast--error {
          background-color: #b71c1c;
          color: #ffcdd2;
        }

        .toast--neutral {
          background-color: var(--greyLight);
          color: var(--blackLight);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .toast {
          transition: none;
        }
      }
    `,
  ];

  render() {
    const hasCustomIcon =
      typeof this.icon === 'string' && this.icon.trim().length > 0;
    const iconToDisplay = hasCustomIcon ? this.icon : this._getDefaultIcon();
    const hasMessage =
      typeof this.message === 'string' && this.message.trim().length > 0;
    const role = this.type === TYPE.ERROR ? 'alert' : 'status';
    const ariaLive = this.type === TYPE.ERROR ? 'assertive' : 'polite';
    const computedAriaLabel =
      this.ariaLabel ||
      (hasMessage
        ? `${this.type} toast: ${this.message}`
        : `${this.type} toast`);

    return html`
      <div
        class="toast toast--${this.type}"
        role=${role}
        aria-live=${ariaLive}
        aria-label=${computedAriaLabel}
        aria-hidden=${!this.open}
      >
        ${iconToDisplay
          ? html`<span class="toast__icon" aria-hidden="true"
              >${iconToDisplay}</span
            >`
          : ''}
        <div class="toast__content">
          ${hasMessage
            ? html`<span class="toast__message">${this.message}</span>`
            : ''}
        </div>
        ${this.dismissible
          ? html`
              <button
                class="toast__close"
                @click=${this._handleClose}
                aria-label="Close toast"
                type="button"
              >
                ✕
              </button>
            `
          : ''}
      </div>
    `;
  }

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  _handleClose() {
    this.hide();
  }

  _handleAutoHide() {
    this._clearAutoHide();
    if (this.open && Number(this.duration) > 0) {
      this._autoHideTimeout = setTimeout(() => {
        this.hide();
      }, this.duration);
    }
  }

  _clearAutoHide() {
    if (this._autoHideTimeout) {
      clearTimeout(this._autoHideTimeout);
      this._autoHideTimeout = null;
    }
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
}

customElements.define('edu-toast', EduToast);
