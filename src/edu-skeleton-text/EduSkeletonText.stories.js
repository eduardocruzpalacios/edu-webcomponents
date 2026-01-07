import { html } from 'lit';
import './index.js';

export default {
  title: 'Edu web components/EduSkeletonText',
  tags: ['autodocs'],
};

const createStory = args => {
  const story = ({ width, lineHeight, lines } = args) => html`
    <edu-skeleton-text
      .width=${width}
      .lineHeight=${lineHeight}
      .lines=${lines}
    ></edu-skeleton-text>
  `;
  story.parameters = {
    controls: { expanded: true },
    docs: { source: { type: 'code' } },
  };
  story.argTypes = {
    width: {
      control: 'text',
      description: 'Width of the skeleton lines',
      name: 'width',
    },
    lineHeight: {
      control: 'text',
      description: 'Height of each skeleton line',
      name: 'lineHeight',
    },
    lines: {
      control: 'number',
      description: 'Number of skeleton lines to display',
      name: 'lines',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  width: '100%',
  lineHeight: '1em',
  lines: 1,
};

export const Default = createStory({ ...defaultArgs });

export const CustomLines = createStory({
  ...defaultArgs,
  lines: 3,
});

export const CustomWidth = createStory({
  ...defaultArgs,
  width: '50%',
  lines: 2,
});

export const CustomLineHeight = createStory({
  ...defaultArgs,
  lineHeight: '2em',
  lines: 2,
});

export const CustomLinesAndLineHeight = createStory({
  ...defaultArgs,
  lines: 5,
  lineHeight: '1.2em',
});
