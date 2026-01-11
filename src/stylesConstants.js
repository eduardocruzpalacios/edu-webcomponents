import { css } from 'lit';

export const colorsConstants = css`
  :host {
    --primary: #007acc;
    --primaryHover: #005fa3;
    --primaryForeground: #fff;

    --blackLight: #333;

    --greyLight: #ddd;
    --greyDark: #aaa;

    --disabled: #ccc;

    --skeletonBase: #e0e0e0;
    --skeletonHighlight: #f0f0f0;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --primary: #4db8ff;
      --primaryHover: #66c2ff;
      --primaryForeground: #000;

      --blackLight: #e0e0e0;

      --greyLight: #3d3d3d;
      --greyDark: #666;

      --disabled: #555;

      --skeletonBase: #3d3d3d;
      --skeletonHighlight: #4d4d4d;
    }
  }
`;
