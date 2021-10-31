// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  padding: 25px 0;
  ${media.sm} {
    align-items: flex-start;
    max-width: 685px;
    gap: 30px;
  }
  ${media.md} {
    max-width: 768px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`;
