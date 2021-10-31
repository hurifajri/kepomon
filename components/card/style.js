// External modules
import { css } from '@emotion/react';

export const cardStyle = css`
  display: flex;
  background-color: var(--dark-white);
`;

export const cardBorderStyle = css`
  border: 4px solid var(--dark-black);
`;

export const cardShadowStyle = css`
  box-shadow: 9px 10px 0 var(--light-blue);
  &:hover {
    box-shadow: none;
  }
`;
