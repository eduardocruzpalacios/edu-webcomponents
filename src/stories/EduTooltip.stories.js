import { html } from 'lit';
import '../EduTooltip.js';

export default {
  title: 'Edu web components/EduTooltip',
  tags: ['autodocs'],
  render: ({ text, position }) =>
    html`<edu-tooltip text=${text} position=${position}
      ><p>Hello, place the mouse over this text</p></edu-tooltip
    >`,
  argTypes: {
    text: {
      control: 'text',
      description: 'Overwritten button text',
      name: 'text',
    },
    position: {
      control: 'text',
      description:
        'Position of the tooltip respect to the element making it visible',
      name: 'position',
    },
  },
  args: {
    text: 'Custom text',
  },
};

export const EduTooltipDefaultPositionBottomLeft = {
  args: {},
};

export const EduTooltipInvalidPositionPropBottomLeft = {
  args: {
    position: 'Edu',
  },
};

export const EduTooltipPositionBottom = {
  args: {
    position: 'bottom',
  },
};

export const EduTooltipPositionTop = {
  args: {
    position: 'top',
  },
};

export const EduTooltipPositionRight = {
  args: {
    position: 'right',
  },
};

export const EduTooltipPositionLeft = {
  args: {
    position: 'left',
  },
};
