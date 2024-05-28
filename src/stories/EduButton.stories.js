import { html } from 'lit';
import '../EduButton.js';

export default {
  title: 'Edu web components/EduButton',
  tags: ['autodocs'],
  render: ({ text }) => html`<edu-button .text=${text}></edu-button>`,
  argTypes: {
    text: {
      control: 'text',
      description: 'Overwritten button text',
      name: 'text',
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
