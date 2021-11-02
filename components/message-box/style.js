// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import {
  buttonLabelStyle,
  buttonStyle,
  columnStyle,
  dialogStyle,
  flexCenterStyle,
  headingStyle,
} from '@/styles/shared';

export { buttonLabelStyle, buttonStyle, headingStyle };

export const cardContentStyle = css`
  ${columnStyle}
  align-items: center;
`;

export const cardStyle = css`
  padding: 25px;
  flex: 3;
  ${dialogStyle}
  ${media.lg} {
    padding: 50px;
  }
`;

export const messageBoxStyle = css`
  ${flexCenterStyle}
  flex-direction: row;
  ${media.sm} {
    flex-direction: column;
  }
`;
