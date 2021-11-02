// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import { bigTextStyle, flexCenterStyle } from '@/styles/shared';

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

export const sectionStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 15px;
  text-align: center;
`;
