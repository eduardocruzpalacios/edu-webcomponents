import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduButton',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ text, disabled } = args) => html`
    <edu-button .text=${text} ?disabled=${disabled}></edu-button>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    text: {
      control: 'text',
      description: 'Overwritten button text',
      name: 'text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
      name: 'disabled',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  text: 'Default text',
  disabled: false,
};

export const DefaultButton = createStory({ ...defaultArgs });
export const ButtonWithTextChanged = createStory({
  ...defaultArgs,
  text: 'Custom text',
});
export const ButtonDisabled = createStory({ ...defaultArgs, disabled: true });
