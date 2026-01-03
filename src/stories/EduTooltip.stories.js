import { html } from 'lit';
import '../EduTooltip.js';

export default {
  title: 'Edu web components/EduTooltip',
};

const createStory = args => {
  const story = ({ text, position } = args) => html`
    <edu-tooltip .text=${text} .position=${position}>
      <p>Hello, place the mouse over this text</p>
    </edu-tooltip>
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
    position: {
      control: 'text',
      description:
        'Position of the tooltip respect to the element making it visible: top / bottom / left / right',
      name: 'position',
    },
  };
  story.args = args;
  return story;
};

const defaultArgs = {
  text: 'Custom text',
  position: '',
};

export const EduTooltipDefaultPositionBottom = createStory({ ...defaultArgs });

export const EduTooltipInvalidPositionPropBottom = createStory({
  ...defaultArgs,
  position: 'Edu',
});

export const EduTooltipPositionBottom = createStory({
  ...defaultArgs,
  position: 'bottom',
});

export const EduTooltipPositionTop = createStory({
  ...defaultArgs,
  position: 'top',
});

export const EduTooltipPositionRight = createStory({
  ...defaultArgs,
  position: 'right',
});

export const EduTooltipPositionLeft = createStory({
  ...defaultArgs,
  position: 'left',
});

export const EduTooltipPositionLeftCaseInsensitive = createStory({
  ...defaultArgs,
  position: 'LEFT',
});
