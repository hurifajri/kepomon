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
  background: rgba(0, 0, 0, 0.65);
  z-index: 10;
`;

export const buttonStyle = css`
  ${thickBorderStyle}
  cursor: pointer;
  position: absolute;
  top: -15px;
  right: -10px;
`;

export const dialogContentStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 25px;
  padding: 25px;
`;

export const dialogStyle = css`
  ${flexCenterStyle}
  position: fixed;
  width: 80%;
  height: auto;
  ${media.sm} {
    width: 40%;
  }
`;

export const openStyle = css`
  ${flexCenterStyle}
`;
