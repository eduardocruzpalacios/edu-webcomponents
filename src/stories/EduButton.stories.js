import { html } from 'lit';
import '../EduButton.js';

export default {
  title: 'Edu web components/EduButton',
  tags: ['autodocs'],
  render: ({ text, disabled }) =>
    html`<edu-button .text=${text} ?disabled=${disabled}></edu-button>`,
  argTypes: {
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
  },
  args: {
    text: 'Default text',
  },
};

export const DefaultButton = {
  args: {},
};

export const ButtonWithTextChanged = {
  args: {
    text: 'Custom text',
  },
};

export const ButtonDisabled = {
  args: {
    disabled: true,
  },
};
