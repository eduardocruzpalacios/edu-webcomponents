import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduLoadingSpinner',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
      defaultValue: 'Loading',
    },
  },
};

const createStory = args => {
  const story = () => html`
    <edu-loading-spinner
      label="${args.label || 'Loading'}"
    ></edu-loading-spinner>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {};
  story.args = args;
  return story;
};

const defaultArgs = {
  label: 'Loading',
};

export const EduLoadingSpinnerDefault = createStory({ ...defaultArgs });

export const CustomLabel = createStory({
  label: 'Please wait while we process your request',
});
