// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  bigReverseSkewStyle,
  bigSkewStyle,
  overlapStyle,
  thinBorderStyle,
} from '@/styles/shared';

export const buttonLabelStyle = css`
  ${bigReverseSkewStyle}
  font-size: 12px;
  font-weight: 700;
`;

export const buttonStyle = css`
  ${bigSkewStyle}
  ${overlapStyle}
  ${thinBorderStyle}
  cursor: pointer;
  background-color: var(--dark-white);
  &:hover {
    color: var(--light-blue);
  }
`;
