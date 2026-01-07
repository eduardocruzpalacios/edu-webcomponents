import { LitElement, html, css } from 'lit';

export class EduSkeletonText extends LitElement {
  static properties = {
    width: { type: String },
    lineHeight: { type: String },
    lines: { type: Number },
  };

  constructor() {
    super();
    this.width = '100%';
    this.lineHeight = '1em';
    this.lines = 1;
  }

  static styles = css`
    :host {
      display: grid;
      gap: 0.5em;
    }

    .line {
      border-radius: 4px;
      background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 37%, #e0e0e0 63%);
      background-size: 400% 100%;
      animation: shimmer 1.4s ease infinite;
    }

    @keyframes shimmer {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: -100% 0;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .line {
        animation: none;
      }
    }
  `;

  render() {
    return html`
      ${Array.from(
        { length: this.lines },
        () =>
          html`<div
            class="line"
            style="width:${this.width}; height:${this.lineHeight};"
          ></div>`
      )}
    `;
  }
}

window.customElements.define('edu-skeleton-text', EduSkeletonText);
