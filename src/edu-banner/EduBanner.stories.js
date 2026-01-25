import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduBanner',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ type, message, dismissible, position, icon } = args) => html`
    <edu-banner
      .type=${type}
      .message=${message}
      ?dismissible=${dismissible}
      .position=${position}
      .icon=${icon}
    ></edu-banner>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'Banner type: info / success / warning / error / neutral',
      name: 'type',
    },
    message: {
      control: 'text',
      description: 'Banner message content',
      name: 'message',
    },
    dismissible: {
      control: 'boolean',
      description: 'Show close button to dismiss the banner',
      name: 'dismissible',
    },
    position: {
      control: 'select',
      options: ['static', 'sticky', 'fixed'],
      description: 'Banner position: static / sticky / fixed',
      name: 'position',
    },
    icon: {
      control: 'text',
      description: 'Custom icon (leave empty for default icon based on type)',
      name: 'icon',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  type: 'info',
  message: 'This is an informational banner message.',
  dismissible: false,
  position: 'static',
  icon: '',
};

export const EduBannerInfo = createStory({ ...defaultArgs });

export const EduBannerSuccess = createStory({
  ...defaultArgs,
  type: 'success',
  message: 'Operation completed successfully!',
});

export const EduBannerWarning = createStory({
  ...defaultArgs,
  type: 'warning',
  message: 'Please review your settings before continuing.',
});

export const EduBannerError = createStory({
  ...defaultArgs,
  type: 'error',
  message: 'An error occurred while processing your request.',
});

export const EduBannerNeutral = createStory({
  ...defaultArgs,
  type: 'neutral',
  message: 'This is a neutral banner for general information.',
});

export const EduBannerDismissible = createStory({
  ...defaultArgs,
  type: 'info',
  message: 'You can close this banner by clicking the X button.',
  dismissible: true,
});

export const EduBannerSticky = createStory({
  ...defaultArgs,
  type: 'warning',
  message: 'This banner sticks to the top when you scroll.',
  position: 'sticky',
});

export const EduBannerFixed = createStory({
  ...defaultArgs,
  type: 'info',
  message: 'This banner is fixed to the top of the viewport.',
  position: 'fixed',
});

export const EduBannerCustomIcon = createStory({
  ...defaultArgs,
  type: 'success',
  message: 'Custom icon example with a star.',
  icon: '⭐',
});

export const AllTypes = () => {
  const story = () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <edu-banner
        type="info"
        message="This is an informational banner."
      ></edu-banner>
      <edu-banner
        type="success"
        message="Operation completed successfully!"
      ></edu-banner>
      <edu-banner
        type="warning"
        message="Please review your settings."
      ></edu-banner>
      <edu-banner type="error" message="An error occurred."></edu-banner>
      <edu-banner
        type="neutral"
        message="This is a neutral banner."
      ></edu-banner>
    </div>
  `;
  story.parameters = {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  };
  return story();
};

export const AllTypesDismissible = () => {
  const story = () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <edu-banner
        type="info"
        message="Dismissible info banner."
        dismissible
      ></edu-banner>
      <edu-banner
        type="success"
        message="Dismissible success banner."
        dismissible
      ></edu-banner>
      <edu-banner
        type="warning"
        message="Dismissible warning banner."
        dismissible
      ></edu-banner>
      <edu-banner
        type="error"
        message="Dismissible error banner."
        dismissible
      ></edu-banner>
      <edu-banner
        type="neutral"
        message="Dismissible neutral banner."
        dismissible
      ></edu-banner>
    </div>
  `;
  story.parameters = {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  };
  return story();
};
