// External modules
import { css } from '@emotion/react';

// Internal modules
import { boxShadowStyle, thickBorderStyle } from '@/styles/shared';

export const cardBorderStyle = css`
  ${thickBorderStyle}
`;

export const cardContentStyle = css`
  width: 100%;
`;

export const cardShadowStyle = css`
  ${boxShadowStyle}
`;

export const cardStyle = css`
  background-color: var(--dark-white);
`;
