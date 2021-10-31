// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

export const baseStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: auto;
  ${media.sm} {
    flex-direction: row;
    width: 100%;
  }
`;
