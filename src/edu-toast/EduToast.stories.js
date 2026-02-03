import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduToast',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({
    message,
    type,
    duration,
    open,
    dismissible,
    position,
  } = args) => html`
    <edu-toast
      .message=${message}
      .type=${type}
      .duration=${duration}
      .open=${open}
      .dismissible=${dismissible}
      .position=${position}
    ></edu-toast>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    message: {
      control: 'text',
      description: 'Toast message text',
      name: 'message',
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'Toast type variant',
      name: 'type',
    },
    duration: {
      control: 'number',
      description: 'Auto-hide duration in ms (0 to disable)',
      name: 'duration',
    },
    open: {
      control: 'boolean',
      description: 'Shows or hides the toast',
      name: 'open',
    },
    dismissible: {
      control: 'boolean',
      description: 'Shows close button',
      name: 'dismissible',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Toast position in the viewport',
      name: 'position',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  message: 'Changes saved successfully.',
  type: 'success',
  duration: 0,
  open: true,
  dismissible: true,
  position: 'top-right',
};

export const SuccessTopRightInfinite = createStory({ ...defaultArgs });

export const InfoTopRight3Seconds = createStory({
  ...defaultArgs,
  type: 'info',
  message: 'Informational toast message.',
  duration: 3000,
});

export const WarningTopRightInfinite = createStory({
  ...defaultArgs,
  type: 'warning',
  message: 'Please double-check your entries.',
});

export const ErrorTopRight3Seconds = createStory({
  ...defaultArgs,
  type: 'error',
  message: 'Something went wrong. Try again.',
  duration: 3000,
});

export const SuccessBottomLeft3Seconds = createStory({
  ...defaultArgs,
  position: 'bottom-left',
  message: 'Saved in background.',
  duration: 3000,
});
