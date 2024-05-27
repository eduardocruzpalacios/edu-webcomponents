import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/EduButton.js';

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
});
