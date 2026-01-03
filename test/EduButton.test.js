import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/edu-button/src/EduButton.js';

const textDefault = 'Default text';

const textOther = 'bla bla';

describe('EduButton', () => {
  it(`has a default text ${textDefault}`, async () => {
    const el = await fixture(html`<edu-button></edu-button>`);

    expect(el.text).to.equal(textDefault);
  });

  it('can override the text via attribute', async () => {
    const el = await fixture(html`<edu-button text=${textOther}></edu-button>`);

    expect(el.text).to.equal(textOther);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<edu-button></edu-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });

  it('reflects disabled property to attribute and disables button', async () => {
    const el = await fixture(html`<edu-button ?disabled=${true}></edu-button>`);
    expect(el.disabled).to.be.true;
    const button = el.shadowRoot.querySelector('button');
    expect(button.hasAttribute('disabled')).to.be.true;
    expect(button.disabled).to.be.true;
  });

  it('allows disabling via attribute', async () => {
    const el = await fixture(html`<edu-button disabled></edu-button>`);
    expect(el.disabled).to.be.true;
  });

  it('sets aria-label equal to text by default', async () => {
    const el = await fixture(html`<edu-button></edu-button>`);
    const button = el.shadowRoot.querySelector('button');
    expect(button.getAttribute('aria-label')).to.equal(textDefault);
  });

  it('allows overriding aria-label via attribute', async () => {
    const ariaLabel = 'Custom label';
    const el = await fixture(
      html`<edu-button aria-label=${ariaLabel}></edu-button>`
    );
    const button = el.shadowRoot.querySelector('button');
    expect(button.getAttribute('aria-label')).to.equal(ariaLabel);
  });
});
