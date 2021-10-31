// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

export const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const sectionStyle = css`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const headingStyle = css`
  font-size: 25px;
`;

export const detailsStyle = css`
  display: flex;
  flex-direction: column;
  ${media.md} {
    flex-direction: row;
  }
`;

export const imageStyle = css`
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
