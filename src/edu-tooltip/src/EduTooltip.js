import { LitElement, html, css } from 'lit';
import { colorsConstants } from '../../stylesConstants.js';

const POSITION = {
  BOTTOM: 'bottom',
  TOP: 'top',
  LEFT: 'left',
  RIGHT: 'right',
};

const VALID_POSITIONS = Object.values(POSITION);

function isPositionValid(position) {
  return VALID_POSITIONS.includes(position.toLowerCase());
}

export class EduTooltip extends LitElement {
  static properties = {
    text: { type: String },
    position: { type: String },
    visible: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._tooltipId = `tooltip-${Math.random().toString(36).slice(2)}`;
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  updated(changedProperties) {
    if (changedProperties.has('position')) {
      if (!isPositionValid(this.position)) {
        this.position = POSITION.BOTTOM;
      }
    }
  }

  static styles = [
    colorsConstants,
    css`
      :host {
        position: relative;
        display: inline-block;
      }

      .tooltip {
        position: absolute;
        background-color: var(--blackLight);
        color: var(--primaryForeground);
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.2s;
        pointer-events: none;
      }

      :host([visible]) .tooltip {
        opacity: 1;
        visibility: visible;
      }

      .top {
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-5px);
      }

      .right {
        top: 50%;
        left: 100%;
        transform: translateX(5px) translateY(-50%);
      }

      .bottom {
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(5px);
      }

      .left {
        top: 50%;
        left: auto;
        right: 100%;
        transform: translateX(-5px) translateY(-50%);
      }
    `,
  ];

  render() {
    const positionClass = this.position
      ? this.position.toLocaleLowerCase()
      : POSITION.BOTTOM;
    return html`
      <span
        tabindex="0"
        aria-describedby=${this.visible ? this._tooltipId : ''}
        aria-label="${this.text || 'tooltip trigger'}"
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focus=${this._show}
        @blur=${this._hide}
      >
        <slot></slot>
      </span>
      <div
        id=${this._tooltipId}
        class="tooltip ${positionClass}"
        role="tooltip"
        aria-hidden=${!this.visible}
        aria-live="polite"
      >
        ${this.text}
      </div>
    `;
  }

  _show() {
    this.visible = true;
  }

  _hide() {
    this.visible = false;
  }

  _handleKeyDown(event) {
    if (event.key === 'Escape' && this.visible) {
      this._hide();
      event.preventDefault();
    }
  }
}

customElements.define('edu-tooltip', EduTooltip);
