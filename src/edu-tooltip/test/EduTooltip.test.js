import { fixture, html, expect } from '@open-wc/testing';
import '../index.js';

describe('EduTooltip', () => {
  it('is not visible by default', async () => {
    const el = await fixture(html`<edu-tooltip></edu-tooltip>`);

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('0');
  });

  it('sets bottom styles for position when there is not value passed in', async () => {
    const el = await fixture(html`<edu-tooltip></edu-tooltip>`);

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.classList.contains('bottom')).to.be.true;
  });

  it('sets bottom styles for position when the value passed is not valid', async () => {
    const el = await fixture(
      html`<edu-tooltip position="invalidString"></edu-tooltip>`
    );

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.classList.contains('bottom')).to.be.true;
  });

  it('applies class for position', async () => {
    const el = await fixture(
      html`<edu-tooltip position="right"></edu-tooltip>`
    );

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.classList.contains('right')).to.be.true;
  });

  it('applies class for position (case insensitive)', async () => {
    const el = await fixture(
      html`<edu-tooltip position="RIGHT"></edu-tooltip>`
    );

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.classList.contains('right')).to.be.true;
  });

  it('renders text of the tooltip', async () => {
    const el = await fixture(html`<edu-tooltip text="Help"></edu-tooltip>`);

    const tooltip = el.shadowRoot.querySelector('.tooltip');
    expect(tooltip.textContent).to.equal('\n        Help\n      ');
  });

  it('shows tooltip when mouseenter event', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Hover me</span></edu-tooltip>`
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
      html`<edu-tooltip text="Text"><span>Hover me</span></edu-tooltip>`
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
      html`<edu-tooltip text="Text"><span>Focus</span></edu-tooltip>`
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
      html`<edu-tooltip text="Text"><span>Focus</span></edu-tooltip>`
    );

    const trigger = el.shadowRoot.querySelector('span');
    const tooltip = el.shadowRoot.querySelector('.tooltip');
    el.visible = true;
    trigger.dispatchEvent(new Event('blur'));
    await el.updateComplete;

    const styles = getComputedStyle(tooltip);
    expect(styles.opacity).to.equal('0');
  });

  it('is accessible', async () => {
    const el = await fixture(
      html`<edu-tooltip text="Text"><span>Trigger</span></edu-tooltip>`
    );

    await expect(el).to.be.accessible();
  });
});
