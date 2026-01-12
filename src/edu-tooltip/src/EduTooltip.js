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
        transition: opacity 0.2s;
        pointer-events: none;
      }

      :host([visible]) .tooltip {
        opacity: 1;
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
        aria-describedby=${this._tooltipId}
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
}

customElements.define('edu-tooltip', EduTooltip);
