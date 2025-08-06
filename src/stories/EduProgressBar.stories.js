import { html } from 'lit';
import '../EduProgressBar.js';

export default {
  title: 'Edu web components/EduProgressBar',
  tags: ['autodocs'],
  render: ({ value, max, showLabel }) =>
    html`<edu-progress-bar
      .value=${value}
      .max=${max}
      ?showLabel=${showLabel}
    ></edu-progress-bar>`,
  argTypes: {
    value: {
      value: 'number',
      description: 'Sets the percentage to which the progress bar is filled in',
      name: 'value',
    },
    showLabel: {
      value: 'boolean',
      description: 'Shows label of percentage filled in',
      name: 'showLabel',
    },
  },
  args: {
    value: 0,
  },
};

export const EduProgressBarDefault = {
  args: {},
};

export const EduProgressBar25 = {
  args: {
    value: 25,
  },
};
export const EduProgressBar50 = {
  args: {
    value: 50,
  },
};
export const EduProgressBar50WithMaxChanged = {
  args: {
    value: 25,
    max: 50,
  },
};
export const EduProgressBar75 = {
  args: {
    value: 75,
  },
};
export const EduProgressBar100 = {
  args: {
    value: 100,
  },
};

export const EduProgressBarWithLabel = {
  args: { showLabel: true },
};

export const EduProgressBar25WithLabel = {
  args: {
    value: 25,
    showLabel: true,
  },
};
export const EduProgressBar50WithLabel = {
  args: {
    value: 50,
    showLabel: true,
  },
};
export const EduProgressBar50WithLabelAndMaxChanged = {
  args: {
    value: 25,
    max: 50,
    showLabel: true,
  },
};
export const EduProgressBar75WithLabel = {
  args: {
    value: 75,
    showLabel: true,
  },
};
export const EduProgressBar100WithLabel = {
  args: {
    value: 100,
    showLabel: true,
  },
};
