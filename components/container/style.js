// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import { flexCenterStyle } from '@/styles/shared';

export const containerStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  padding: 25px;
  ${media.sm} {
    max-width: 685px;
  }
  ${media.md} {
    max-width: 900px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`;
