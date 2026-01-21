import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('EduBadge', () => {
  it('renders the text content', async () => {
    const text = 'Test Badge';
    const el = await fixture(html`<edu-badge text=${text}></edu-badge>`);

    const badge = el.shadowRoot.querySelector('.badge');
    expect(badge.textContent.trim()).to.equal(text);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<edu-badge text="Badge"></edu-badge>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
