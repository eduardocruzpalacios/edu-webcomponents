import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduLoadingSpinner',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = () => html` <edu-loading-spinner></edu-loading-spinner> `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {};
  story.args = args;
  return story;
};

const defaultArgs = {};

export const EduLoadingSpinnerDefault = createStory({ ...defaultArgs });
