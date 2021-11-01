// External modules
import { css, keyframes } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import {
  flexCenterStyle,
  smallReverseSkewStyle,
  smallSkewStyle,
} from '@/styles/shared';

export const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const rowStyle = css`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const sectionColumnStyle = css`
  ${columnStyle}
  gap: 10px;
`;

export const sectionRowStyle = css`
  ${rowStyle}
  align-items: center;
  gap: 15px;
`;

export const detailsStyle = css`
  ${columnStyle}
  gap: 25px;
  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const profileStyle = css`
  ${columnStyle}
  flex: 1;
`;

export const topLeftStyle = css`
  ${columnStyle}
  flex: 1;
`;

export const bottomRightStyle = css`
  ${columnStyle}
  flex: 1;
`;

export const headingStyle = css`
  font-size: 25px;
`;

export const textStyle = css`
  font-weight: 500;
  text-transform: lowercase;
`;

export const cardStyle = css`
  padding: 50px;
  flex: 3;
  ${media.lg} {
    ${smallSkewStyle}
  }
`;

export const cardContentStyle = css`
  ${columnStyle}
  width: 100%;
  ${media.lg} {
    ${smallReverseSkewStyle}
  }
  ${media.sm} {
    ${rowStyle}
  }
`;

export const mainStyle = css`
  ${columnStyle}
  gap: 10px;
`;

export const imageStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
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
