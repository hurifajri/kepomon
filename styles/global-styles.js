// External modules
import { css } from '@emotion/react';

const globalStyles = css`
  html,
  body,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    line-height: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
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
