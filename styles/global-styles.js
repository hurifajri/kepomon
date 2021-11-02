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

  /* Start custom scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--dark-white);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-black);
    border-radius: 5px;
  }
  /* End custom scrollbar */

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
    --light-red: #ff0000;
    --light-white: hsla(0, 0%, 100%, 0.5);

    --type-normal: #a8a878;
    --type-fighting: #c03028;
    --type-flying: #a890f0;
    --type-poison: #a040a0;
    --type-ground: #e0c068;
    --type-rock: #b8a038;
    --type-bug: #a8b820;
    --type-ghost: #705898;
    --type-steel: #b8b8d0;
    --type-fire: #f08030;
    --type-water: #6890f0;
    --type-grass: #78c850;
    --type-electric: #f8d030;
    --type-psychic: #f85888;
    --type-ice: #98d8d8;
    --type-dragon: #7038f8;
    --type-dark: #705848;
    --type-fairy: #ffaec9;
  }
`;

export default globalStyles;
