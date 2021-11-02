// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import { bigTextStyle } from '@/styles/shared';

export const headingStyle = css`
  ${bigTextStyle}
  font-weight: 700;
  text-align: center;
`;

export const listStyle = css`
  ${media.sm} {
    justify-content: space-between;
  }
`;
