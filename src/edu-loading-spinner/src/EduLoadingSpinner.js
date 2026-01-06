import { html, css, LitElement } from 'lit';
import { colorsConstants } from '../../stylesConstants.js';

export class EduLoadingSpinner extends LitElement {
  static styles = [
    colorsConstants,
    css`
      .spinner {
        border: 8px solid var(--primaryForeground);
        border-top: 8px solid var(--primary);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1.5s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  render() {
    return html` <div class="spinner"></div> `;
  }
}

customElements.define('edu-loading-spinner', EduLoadingSpinner);
