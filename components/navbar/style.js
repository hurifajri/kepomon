// External modules
import { css, keyframes } from '@emotion/react';

// Internal modules
import {
  bigTextStyle,
  flexCenterStyle,
  smallReverseSkewStyle,
  smallSkewStyle,
  textShadowStyle,
  thinBorderStyle,
} from '@/styles/shared';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`;

export const cardContentStyle = css`
  ${flexCenterStyle}
  ${smallReverseSkewStyle}
  margin: 6px -10px 5px 20px;
  &:hover svg {
    animation: ${rotate} ease-in-out 0.5s;
    animation-delay: 0.05s;
    animation-iteration-count: inherit;
    transform-origin: 50% 50%;
  }
`;

export const cardStyle = css`
  ${smallSkewStyle}
  ${thinBorderStyle}
  transition: all 0.25s;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const iconStyle = css`
  position: absolute;
  left: -50px;
  top: -15px;
`;

export const listStyle = css`
  gap: 50px;
`;

export const routeStyle = css`
  ${bigTextStyle}
  ${textShadowStyle}
`;
