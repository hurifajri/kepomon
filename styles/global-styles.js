// External modules
import { css } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    margin: 0;
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --color-dark-black: #161a2b;
    --color-dark-cyan: #a0cece;
    --color-dark-green: #a6d5ab;
    --color-dark-purple: #b0afdb;
    --color-dark-white: #ffffff;
    --color-light-blue: #5c7aff;
    --color-light-cyan: #c6eced;
    --color-light-green: #c7edca;
    --color-light-purple: #c9c7ee;
    --color-light-white: hsl(0, 0%, 100%, 0.5);
  }
`;

export default globalStyles;
