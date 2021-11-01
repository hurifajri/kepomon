// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  bigReverseSkewStyle,
  bigSkewStyle,
  overlapStyle,
  smallReverseSkewStyle,
  smallSkewStyle,
  textShadowStyle,
  thinBorderStyle,
} from '@/styles/shared';

export const cardContentStyle = css`
  ${smallReverseSkewStyle}
  position: relative;
  background-color: var(--light-white);
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const cardStyle = css`
  ${smallSkewStyle}
  padding: 15px 15px 50px 15px;
  background-color: var(--bgColor);
  transition: all 0.25s;
  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const headerStyle = css`
  display: flex;
  position: relative;
`;

export const headingStyle = css`
  font-size: 13px;
  text-align: right;
  text-transform: uppercase;
  z-index: 1;
  ${textShadowStyle}
`;

export const mainStyle = css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 13px;
  position: absolute;
  top: 30px;
`;

export const miniCardContentStyle = css`
  ${bigReverseSkewStyle}
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
`;

export const miniCardStyle = css`
  ${bigSkewStyle}
  align-items: center;
  background-color: var(--bgColor);
  padding: 3px 5px;
  z-index: 1;
  &.counter {
    ${thinBorderStyle}
    ${overlapStyle}
  }
`;
