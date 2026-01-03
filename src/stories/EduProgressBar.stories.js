import { html } from 'lit';
import '../EduProgressBar.js';

export default {
  title: 'Edu web components/EduProgressBar',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ value, max, showLabel } = args) => html`
    <edu-progress-bar
      .value=${value}
      .max=${max}
      ?showLabel=${showLabel}
    ></edu-progress-bar>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    value: {
      control: 'number',
      description: 'Sets the percentage to which the progress bar is filled in',
      name: 'value',
    },
    max: {
      control: 'number',
      description: 'Sets the value to which the percentage is calculated',
      name: 'max',
    },
    showLabel: {
      control: 'boolean',
      description: 'Shows label of percentage filled in',
      name: 'showLabel',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  value: 0,
  max: 100,
  showLabel: false,
};

export const EduProgressBarDefault = createStory({ ...defaultArgs });
export const EduProgressBar25 = createStory({ ...defaultArgs, value: 25 });
export const EduProgressBar50 = createStory({ ...defaultArgs, value: 50 });
export const EduProgressBar50WithMaxChanged = createStory({ ...defaultArgs, value: 25, max: 50 });
export const EduProgressBar75 = createStory({ ...defaultArgs, value: 75 });
export const EduProgressBar100 = createStory({ ...defaultArgs, value: 100 });

export const EduProgressBarWithLabel = createStory({ ...defaultArgs, showLabel: true });
export const EduProgressBar25WithLabel = createStory({ ...defaultArgs, value: 25, showLabel: true });
export const EduProgressBar50WithLabel = createStory({ ...defaultArgs, value: 50, showLabel: true });
export const EduProgressBar50WithLabelAndMaxChanged = createStory({ ...defaultArgs, value: 25, max: 50, showLabel: true });
export const EduProgressBar75WithLabel = createStory({ ...defaultArgs, value: 75, showLabel: true });
export const EduProgressBar100WithLabel = createStory({ ...defaultArgs, value: 100, showLabel: true });
