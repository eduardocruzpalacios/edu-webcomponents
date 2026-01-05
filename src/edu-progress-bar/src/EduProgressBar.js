import { LitElement, html, css } from 'lit';
import { colorsConstants } from '../../stylesConstants.js';

export class EduProgressBar extends LitElement {
  static properties = {
    value: { type: Number },
    max: { type: Number },
    showLabel: { type: Boolean },
    progressbarName: { type: String },
  };

  static styles = [
    colorsConstants,
    css`
      :host {
        display: block;
        width: 100%;
      }
      .bar-container {
        position: relative;
        width: 100%;
        height: 20px;
        background-color: var(--greyLight);
        border-radius: 10px;
        overflow: hidden;
      }
      .bar-fill {
        height: 100%;
        background-color: var(--primary);
        transition: width 0.3s ease;
      }
      .label {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        color: var(--blackLight);
        pointer-events: none;
      }
    `,
  ];

  constructor() {
    super();
    this.value = 0;
    this.max = 100;
    this.progressbarName = 'Progress bar';
  }

  render() {
    const safeMax = this.max > 0 ? this.max : 100;
    const safeValue = Math.max(0, this.value);
    const percentage = Math.min(100, (safeValue / safeMax) * 100);
    const label = `${Math.round(percentage)}%`;

    return html`
      <div
        class="bar-container"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="${safeMax}"
        aria-valuenow="${Math.min(safeValue, safeMax)}"
        aria-label="${this.progressbarName}"
      >
        <div class="bar-fill" style="width: ${percentage}%"></div>
        ${this.showLabel ? html`<div class="label">${label}</div>` : null}
      </div>
    `;
  }
}

customElements.define('edu-progress-bar', EduProgressBar);
