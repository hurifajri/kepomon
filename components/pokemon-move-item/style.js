// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  bigReverseSkewStyle,
  bigSkewStyle,
  thinBorderStyle,
} from '@/styles/shared';

export const cardStyle = css`
  ${bigSkewStyle}
  ${thinBorderStyle}
  padding: 3px 5px;
`;

export const cardContentStyle = css`
  ${bigReverseSkewStyle}
  display: inline-block;
`;
