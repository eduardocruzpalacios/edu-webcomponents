// test/edu-progress-bar.test.js
import { html, fixture, expect } from '@open-wc/testing';
import '../src/EduProgressBar.js'; // ajusta la ruta si es necesario

describe('EduProgressBar', () => {
  it('renders with default values', async () => {
    const el = await fixture(html`<edu-progress-bar></edu-progress-bar>`);

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(el.value).to.equal(0);
    expect(el.max).to.equal(100);
    expect(bar.style.width).to.equal('0%');
    expect(label).to.be.null;
  });

  it('renders with default values (with label)', async () => {
    const el = await fixture(
      html`<edu-progress-bar .showLabel=${true}></edu-progress-bar>`
    );

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(el.value).to.equal(0);
    expect(el.max).to.equal(100);
    expect(bar.style.width).to.equal('0%');
    expect(label.textContent).to.equal('0%');
  });

  it('calculates percentage correctly', async () => {
    const el = await fixture(
      html`<edu-progress-bar .value=${25} .max=${50}></edu-progress-bar>`
    );

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(bar.style.width).to.equal('50%');
    expect(label).to.be.null;
  });

  it('calculates percentage correctly (with label)', async () => {
    const el = await fixture(
      html`<edu-progress-bar
        .value=${25}
        .max=${50}
        .showLabel=${true}
      ></edu-progress-bar>`
    );

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(bar.style.width).to.equal('50%');
    expect(label.textContent).to.equal('50%');
  });

  it('caps percentage at 100%', async () => {
    const el = await fixture(
      html`<edu-progress-bar .value=${200} .max=${100}></edu-progress-bar>`
    );
    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(bar.style.width).to.equal('100%');
    expect(label).to.be.null;
  });

  it('caps percentage at 100% (with label)', async () => {
    const el = await fixture(
      html`<edu-progress-bar
        .value=${200}
        .max=${100}
        .showLabel=${true}
      ></edu-progress-bar>`
    );

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(bar.style.width).to.equal('100%');
    expect(label.textContent).to.equal('100%');
  });

  it('handles invalid max', async () => {
    const el = await fixture(
      html`<edu-progress-bar .value=${50} .max=${0}></edu-progress-bar>`
    );

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(bar.style.width).to.equal('50%');
    expect(label).to.be.null;
  });

  it('handles invalid max (with label)', async () => {
    const el = await fixture(
      html`<edu-progress-bar
        .value=${50}
        .max=${0}
        .showLabel=${true}
      ></edu-progress-bar>`
    );

    const bar = el.shadowRoot.querySelector('.bar-fill');
    const label = el.shadowRoot.querySelector('.label');

    expect(bar.style.width).to.equal('50%');
    expect(label.textContent).to.equal('50%');
  });

  it('hides label when showLabel is false', async () => {
    const el = await fixture(
      html`<edu-progress-bar
        .value=${50}
        .showLabel=${false}
      ></edu-progress-bar>`
    );

    const label = el.shadowRoot.querySelector('.label');

    expect(label).to.equal(null);
  });

  it('shows label when showLabel is true', async () => {
    const el = await fixture(
      html`<edu-progress-bar
        .value=${50}
        .showLabel=${true}
      ></edu-progress-bar>`
    );

    const label = el.shadowRoot.querySelector('.label');

    expect(label).to.exist;
  });

  it('is accessible by default', async () => {
    const el = await fixture(html`<edu-progress-bar></edu-progress-bar>`);

    await expect(el).to.be.accessible();
  });

  it('is accessible by default (with value)', async () => {
    const el = await fixture(
      html`<edu-progress-bar .value=${50}></edu-progress-bar>`
    );

    await expect(el).to.be.accessible();
  });

  it('is accessible (with label)', async () => {
    const el = await fixture(
      html`<edu-progress-bar .showLabel=${true}></edu-progress-bar>`
    );

    await expect(el).to.be.accessible();
  });

  it('is accessible (with value and label)', async () => {
    const el = await fixture(
      html`<edu-progress-bar
        .value=${50}
        .showLabel=${true}
      ></edu-progress-bar>`
    );

    await expect(el).to.be.accessible();
  });
});
