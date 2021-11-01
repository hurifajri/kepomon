// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  bigReverseSkewStyle,
  bigSkewStyle,
  boxShadowStyle,
  buttonTextStyle,
  flexCenterStyle,
  headingTextStyle,
  overlapStyle,
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

export const buttonsStyles = css`
  display: flex;
  gap: 30px;
`;

export const buttonStyle = css`
  ${boxShadowStyle}
  ${smallSkewStyle}
  ${thinBorderStyle}
  background-color: var(--dark-white);
  padding: 0;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s;
  &:active {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const headingStyle = css`
  ${headingTextStyle}
`;

export const overlapButtonLabelStyle = css`
  ${bigReverseSkewStyle}
  font-size: 12px;
  font-weight: 700;
`;

export const overlapButtonStyle = css`
  ${bigSkewStyle}
  ${overlapStyle}
  ${thinBorderStyle}
  cursor: pointer;
  &:hover {
    color: var(--light-blue);
  }
`;
