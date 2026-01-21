import { html, css, LitElement } from 'lit';
import { colorsConstants, typographyConstants } from '../../stylesConstants.js';

export class EduBadge extends LitElement {
  static styles = [
    colorsConstants,
    typographyConstants,
    css`
      :host {
        display: inline-block;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: inherit;
        font-weight: 600;
        border-radius: 12px;
        white-space: nowrap;
        line-height: 1;
        transition: background-color 0.2s ease-in-out;
      }

      /* Size variants */
      .badge--small {
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
      }

      .badge--medium {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
      }

      .badge--large {
        padding: 0.5rem 1rem;
        font-size: 1rem;
      }

      /* Color variants - Light mode */
      .badge--default {
        background-color: var(--greyLight);
        color: var(--blackLight);
      }

      .badge--primary {
        background-color: var(--primary);
        color: var(--primaryForeground);
      }

      .badge--success {
        background-color: #4caf50;
        color: #ffffff;
      }

      .badge--warning {
        background-color: #ff9800;
        color: #000000;
      }

      .badge--error {
        background-color: #f44336;
        color: #ffffff;
      }

      .badge--info {
        background-color: #2196f3;
        color: #ffffff;
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .badge--default {
          background-color: var(--greyLight);
          color: var(--primaryForeground);
        }

        .badge--primary {
          background-color: #4db8ff;
          color: #000000;
        }

        .badge--success {
          background-color: #66bb6a;
          color: #000000;
        }

        .badge--warning {
          background-color: #ffa726;
          color: #000000;
        }

        .badge--error {
          background-color: #ef5350;
          color: #ffffff;
        }

        .badge--info {
          background-color: #42a5f5;
          color: #000000;
        }
      }
    `,
  ];

  static properties = {
    text: { type: String },
    variant: { type: String },
    size: { type: String },
    ariaLabel: { type: String, attribute: 'aria-label' },
    ariaLive: { type: String, attribute: 'aria-live' },
    decorative: { type: Boolean },
  };

  constructor() {
    super();
    this.text = '';
    this.variant = 'default';
    this.size = 'medium';
    this.ariaLabel = '';
    this.ariaLive = '';
    this.decorative = false;
  }

  render() {
    const classes = `badge badge--${this.size} badge--${this.variant}`;

    // Decorative badges should be hidden from screen readers
    if (this.decorative) {
      return html`
        <span class=${classes} aria-hidden="true"> ${this.text} </span>
      `;
    }

    // Accessibility attributes
    const ariaAttrs = {
      role: 'status',
      'aria-label': this.ariaLabel || this.text,
    };

    // Add aria-live for dynamic content (like notification counts)
    if (this.ariaLive) {
      ariaAttrs['aria-live'] = this.ariaLive;
      ariaAttrs['aria-atomic'] = 'true';
    } else {
      ariaAttrs['aria-live'] = 'off';
    }

    return html`
      <span
        class=${classes}
        role=${ariaAttrs.role}
        aria-label=${ariaAttrs['aria-label']}
        aria-live=${ariaAttrs['aria-live']}
        ?aria-atomic=${!!ariaAttrs['aria-atomic']}
      >
        ${this.text}
      </span>
    `;
  }
}

customElements.define('edu-badge', EduBadge);
