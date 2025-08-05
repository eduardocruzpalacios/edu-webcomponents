import { fixture, html, expect } from '@open-wc/testing';
import '../src/EduTooltip.js';

describe('EduTooltip', () => {
  it('is not visible by default', async () => {
    const el = await fixture(html`<edu-tooltip></edu-tooltip>`);

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('0');
  });

  it('has no text and position properties by default', async () => {
    const el = await fixture(html`<edu-tooltip></edu-tooltip>`);

    expect(el.text).to.equal('');
    expect(el.position).to.be.undefined;
  });

  it('renders text of the tooltip', async () => {
    const el = await fixture(html`<edu-tooltip text="Help"></edu-tooltip>`);

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.textContent).to.equal('\n        Help\n      ');
  });

  it('applies class for position', async () => {
    const el = await fixture(
      html`<edu-tooltip position="right"></edu-tooltip>`,
    );

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.classList.contains('right')).to.be.true;
  });

  it('shows tooltip when mouseenter event', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Hover me</span></edu-tooltip>`,
    );

    const trigger = el.shadowRoot.querySelector('span');
    const tooltip = el.shadowRoot.querySelector('.tooltip');
    trigger.dispatchEvent(new Event('mouseenter'));
    await el.updateComplete;

    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('1');
  });

  it('hides tooltip when mouseleave event', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Hover me</span></edu-tooltip>`,
    );

    const trigger = el.shadowRoot.querySelector('span');
    const tooltip = el.shadowRoot.querySelector('.tooltip');
    el.visible = true;
    trigger.dispatchEvent(new Event('mouseleave'));
    await el.updateComplete;

    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('0');
  });

  it('shows tooltip when focus event', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Focus</span></edu-tooltip>`,
    );

    const trigger = el.shadowRoot.querySelector('span');
    const tooltip = el.shadowRoot.querySelector('.tooltip');
    trigger.dispatchEvent(new Event('focus'));
    await el.updateComplete;

    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('1');
  });

  it('hides tooltip when blur event', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Focus</span></edu-tooltip>`,
    );

    const trigger = el.shadowRoot.querySelector('span');
    const tooltip = el.shadowRoot.querySelector('.tooltip');
    el.visible = true;
    trigger.dispatchEvent(new Event('blur'));
    await el.updateComplete;

    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('0');
  });

  it('uses role="tooltip" and aria-describedby', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Info</span></edu-tooltip>`,
    );

    const trigger = el.shadowRoot.querySelector('span');
    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.getAttribute('role')).to.equal('tooltip');
    expect(trigger.getAttribute('aria-describedby')).to.equal(tooltip.id);
  });

  it('is accessible', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Trigger</span></edu-tooltip>`,
    );

    await expect(el).to.be.accessible();
  });
});
