// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  bigReverseSkewStyle,
  bigSkewStyle,
  bigTextStyle,
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
  &:hover {
    color: var(--light-blue);
  }
`;

export const headingStyle = css`
  ${bigTextStyle}
  font-weight: 700;
`;
