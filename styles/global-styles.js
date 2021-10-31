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
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  :root {
    --dark-black: #161a2b;
    --dark-cyan: #a0cece;
    --dark-green: #a6d5ab;
    --dark-purple: #b0afdb;
    --dark-white: #ffffff;
    --light-black: hsla(0, 0%, 0%, 0.05);
    --light-blue: #5c7aff;
    --light-cyan: #c6eced;
    --light-green: #c7edca;
    --light-purple: #c9c7ee;
    --light-white: hsla(0, 0%, 100%, 0.5);
  }
`;

export default globalStyles;
