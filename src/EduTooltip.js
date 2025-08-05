import { LitElement, html, css } from 'lit';
import { colorsConstants } from './stylesConstants.js';

export class EduTooltip extends LitElement {
  static properties = {
    text: { type: String },
    position: { type: String },
    visible: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.text = '';
    this.visible = false;
    this._tooltipId = `tooltip-${Math.random().toString(36).slice(2)}`;
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
        class="tooltip ${this.position}"
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
