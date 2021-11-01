// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import { flexCenterStyle, thickBorderStyle } from '@/styles/shared';

export const backdropStyle = css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;

export const buttonStyle = css`
  ${thickBorderStyle}
`;

export const dialogContentStyle = css``;

export const dialogStyle = css`
  ${flexCenterStyle}
  position: fixed;
  width: 80%;
  height: auto;
  ${media.sm} {
    width: 60%;
  }
`;

export const openStyle = css`
  ${flexCenterStyle}
`;
