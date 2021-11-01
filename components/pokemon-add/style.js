// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  boxShadowStyle,
  buttonTextStyle,
  flexCenterStyle,
  smallReverseSkewStyle,
  smallSkewStyle,
  textShadowStyle,
  thinBorderStyle,
} from '@/styles/shared';

export const buttonLabelStyle = css`
  ${buttonTextStyle}
  ${flexCenterStyle}
  ${smallReverseSkewStyle}
  ${textShadowStyle}
  margin: 6px -10px 5px 20px;
`;

export const buttonStyle = css`
  ${boxShadowStyle}
  ${smallSkewStyle}
  ${thinBorderStyle}
  background-color: var(--dark-white);
  padding: 0;
  cursor: pointer;
  transition: all 0.25s;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;
