// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

export const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  ${media.sm} {
    justify-content: space-between;
  }
  gap: 35px;
  flex-wrap: wrap;
`;
