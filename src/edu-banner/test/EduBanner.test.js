import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import '../index.js';

describe('EduBanner', () => {
  it('renders with default values', async () => {
    const el = await fixture(html`<edu-banner></edu-banner>`);

    expect(el.type).to.equal('info');
    expect(el.message).to.equal('');
    expect(el.dismissible).to.equal(false);
    expect(el.position).to.equal('static');
    expect(el.icon).to.equal('');
    expect(el.ariaLabel).to.equal('');

    const banner = el.shadowRoot.querySelector('.banner');
    const message = el.shadowRoot.querySelector('.banner__message');
    const closeButton = el.shadowRoot.querySelector('.banner__close');

    expect(banner.classList.contains('banner--info')).to.be.true;
    expect(banner.classList.contains('banner--static')).to.be.true;
    expect(message.textContent).to.equal('');
    expect(closeButton).to.equal(null);
  });

  it('renders message and type via attributes', async () => {
    const el = await fixture(
      html`<edu-banner type="success" message="Saved"></edu-banner>`
    );

    const banner = el.shadowRoot.querySelector('.banner');
    const message = el.shadowRoot.querySelector('.banner__message');

    expect(el.type).to.equal('success');
    expect(el.message).to.equal('Saved');
    expect(banner.classList.contains('banner--success')).to.be.true;
    expect(message.textContent).to.equal('Saved');
  });

  it('renders custom icon when provided', async () => {
    const el = await fixture(
      html`<edu-banner icon="🔔" message="Alert"></edu-banner>`
    );

    const icon = el.shadowRoot.querySelector('.banner__icon');
    expect(icon.textContent).to.equal('🔔');
  });

  it('renders a default icon when no icon is provided', async () => {
    const el = await fixture(
      html`<edu-banner type="warning" message="Heads up"></edu-banner>`
    );

    const icon = el.shadowRoot.querySelector('.banner__icon');
    expect(icon.textContent).to.equal('⚠️');
  });

  it('renders neutral type with default icon', async () => {
    const el = await fixture(
      html`<edu-banner type="neutral" message="Note"></edu-banner>`
    );

    const banner = el.shadowRoot.querySelector('.banner');
    const icon = el.shadowRoot.querySelector('.banner__icon');

    expect(banner.classList.contains('banner--neutral')).to.be.true;
    expect(icon.textContent).to.equal('•');
  });

  it('renders default icon when icon is empty and type is invalid', async () => {
    const el = await fixture(
      html`<edu-banner type="unknown" icon="" message="Test"></edu-banner>`
    );

    const icon = el.shadowRoot.querySelector('.banner__icon');
    expect(icon.textContent).to.equal('ℹ️');
  });

  it('renders close button when dismissible', async () => {
    const el = await fixture(html`<edu-banner dismissible></edu-banner>`);

    const closeButton = el.shadowRoot.querySelector('.banner__close');
    expect(closeButton).to.exist;
  });

  it('dispatches banner-close and hides when closed', async () => {
    const el = await fixture(
      html`<edu-banner dismissible message="Closing"></edu-banner>`
    );

    const closeButton = el.shadowRoot.querySelector('.banner__close');
    setTimeout(() => closeButton.click());

    const event = await oneEvent(el, 'banner-close');
    expect(event).to.exist;
    expect(event.bubbles).to.equal(true);
    expect(event.composed).to.equal(true);
    expect(el.style.display).to.equal('none');
  });

  it('uses custom aria-label when provided', async () => {
    const el = await fixture(
      html`<edu-banner
        type="error"
        message="Problem"
        aria-label="Error banner"
      ></edu-banner>`
    );

    const banner = el.shadowRoot.querySelector('.banner');
    expect(banner.getAttribute('aria-label')).to.equal('Error banner');
  });

  it('generates aria-label when not provided', async () => {
    const el = await fixture(
      html`<edu-banner type="info" message="Hello"></edu-banner>`
    );

    const banner = el.shadowRoot.querySelector('.banner');
    expect(banner.getAttribute('aria-label')).to.equal('info banner: Hello');
  });

  it('is accessible', async () => {
    const el = await fixture(
      html`<edu-banner message="Accessible"></edu-banner>`
    );

    await expect(el).to.be.accessible();
  });
});
