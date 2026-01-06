import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduDivider',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ label } = args) => html`
    <div style="width: 400px;">
      <edu-divider .label=${label}></edu-divider>
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
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  label: '',
};

export const Default = createStory({ ...defaultArgs });

export const WithLabel = createStory({
  ...defaultArgs,
  label: 'Section Label',
});
