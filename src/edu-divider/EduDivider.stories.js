import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduDivider',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ label, ariaLabel } = args) => html`
    <div style="width: 400px;">
      <edu-divider .label=${label} aria-label=${ariaLabel}></edu-divider>
    </div>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    label: {
      control: 'text',
      description: 'Optional label text to display in the divider',
      name: 'label',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible label for screen readers. If not provided, uses the label property or defaults to "Section divider"',
      name: 'aria-label',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  label: '',
  ariaLabel: '',
};

export const Default = createStory({ ...defaultArgs });

export const WithLabel = createStory({
  ...defaultArgs,
  label: 'Section Label',
});

export const WithCustomAriaLabel = createStory({
  ...defaultArgs,
  label: 'OR',
  ariaLabel: 'Alternative login separator',
});
