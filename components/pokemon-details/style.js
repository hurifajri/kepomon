// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

export const baseDetailsStyle = css`
  display: flex;
  flex-direction: column;
  ${media.md} {
    flex-direction: row;
  }
`;

export const baseImageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & .shadow {
    display: inline-block;
    width: 200px;
    height: 40px;
    background: var(--light-black);
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
  }
`;
