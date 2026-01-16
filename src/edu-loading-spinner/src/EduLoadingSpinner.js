import { html, css, LitElement } from 'lit';
import { colorsConstants } from '../../stylesConstants.js';

export class EduLoadingSpinner extends LitElement {
  static properties = {
    label: { type: String },
  };

  constructor() {
    super();
    this.label = 'Loading';
  }

  static styles = [
    colorsConstants,
    css`
      .spinner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      .spinner {
        border: 8px solid var(--greyLight);
        border-top: 8px solid var(--primary);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1.5s linear infinite;
      }

      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .spinner {
          animation: spin 3s linear infinite;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="spinner-container" role="status" aria-live="polite">
        <div class="spinner" aria-hidden="true"></div>
        <span class="visually-hidden">${this.label}</span>
      </div>
    `;
  }
}

customElements.define('edu-loading-spinner', EduLoadingSpinner);
