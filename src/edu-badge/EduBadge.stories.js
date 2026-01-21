import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduBadge',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ text, variant, size } = args) => html`
    <edu-badge .text=${text} .variant=${variant} .size=${size}></edu-badge>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    text: {
      control: 'text',
      description: 'Badge text content',
      name: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description:
        'Color variant: default / primary / success / warning / error / info',
      name: 'variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant: small / medium / large',
      name: 'size',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  text: 'Badge',
  variant: 'default',
  size: 'medium',
};

export const EduBadgeDefault = createStory({ ...defaultArgs });
export const EduBadgePrimary = createStory({
  ...defaultArgs,
  variant: 'primary',
});
export const EduBadgeSuccess = createStory({
  ...defaultArgs,
  variant: 'success',
});
export const EduBadgeWarning = createStory({
  ...defaultArgs,
  variant: 'warning',
});
export const EduBadgeError = createStory({ ...defaultArgs, variant: 'error' });
export const EduBadgeInfo = createStory({ ...defaultArgs, variant: 'info' });

export const EduBadgeSmall = createStory({
  ...defaultArgs,
  variant: 'primary',
  size: 'small',
});
export const EduBadgeLarge = createStory({
  ...defaultArgs,
  variant: 'primary',
  size: 'large',
});

export const AllVariants = () => {
  const story = () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <edu-badge text="Default" variant="default"></edu-badge>
      <edu-badge text="Primary" variant="primary"></edu-badge>
      <edu-badge text="Success" variant="success"></edu-badge>
      <edu-badge text="Warning" variant="warning"></edu-badge>
      <edu-badge text="Error" variant="error"></edu-badge>
      <edu-badge text="Info" variant="info"></edu-badge>
    </div>
  `;
  story.parameters = {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  };
  return story();
};

export const AllSizes = () => {
  const story = () => html`
    <div
      style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
    >
      <edu-badge text="Small" variant="primary" size="small"></edu-badge>
      <edu-badge text="Medium" variant="primary" size="medium"></edu-badge>
      <edu-badge text="Large" variant="primary" size="large"></edu-badge>
    </div>
  `;
  story.parameters = {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  };
  return story();
};

export const UseCases = () => {
  const story = () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3>Status Indicators</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <edu-badge text="Active" variant="success"></edu-badge>
          <edu-badge text="Pending" variant="warning"></edu-badge>
          <edu-badge text="Inactive" variant="error"></edu-badge>
        </div>
      </div>

      <div>
        <h3>Notification Counts</h3>
        <div
          style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;"
        >
          <span
            >Messages
            <edu-badge text="5" variant="primary" size="small"></edu-badge
          ></span>
          <span
            >Alerts
            <edu-badge text="12" variant="error" size="small"></edu-badge
          ></span>
          <span
            >Updates <edu-badge text="3" variant="info" size="small"></edu-badge
          ></span>
        </div>
      </div>

      <div>
        <h3>Category Tags</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <edu-badge text="JavaScript" variant="info" size="small"></edu-badge>
          <edu-badge
            text="Web Components"
            variant="primary"
            size="small"
          ></edu-badge>
          <edu-badge text="Lit" variant="success" size="small"></edu-badge>
          <edu-badge text="CSS" variant="warning" size="small"></edu-badge>
        </div>
      </div>

      <div>
        <h3>Version Badge</h3>
        <div style="display: flex; gap: 1rem;">
          <edu-badge text="v1.0.0" variant="default"></edu-badge>
          <edu-badge text="Beta" variant="warning"></edu-badge>
          <edu-badge text="New" variant="success"></edu-badge>
        </div>
      </div>
    </div>
  `;
  story.parameters = {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  };
  return story();
};
