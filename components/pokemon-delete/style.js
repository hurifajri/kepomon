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

export const headingStyle = css`
  ${bigTextStyle}
`;

export const overlapButtonLabelStyle = css`
  ${bigReverseSkewStyle}
  font-size: 12px;
  font-weight: 700;
`;

export const overlapButtonStyle = css`
  ${bigSkewStyle}
  ${overlapStyle}
  ${thinBorderStyle}
  cursor: pointer;
  &:hover {
    color: var(--light-blue);
  }
`;
