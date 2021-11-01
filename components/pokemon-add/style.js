// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  boxShadowStyle,
  buttonTextStyle,
  flexCenterStyle,
  headingTextStyle,
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

export const errorStyle = css`
  border: 2px solid red;
`;

export const headingStyle = css`
  ${headingTextStyle}
`;

export const inputStyle = css`
  ${thinBorderStyle}
  ${smallSkewStyle}
  height: 35px;
  padding: 0 15px;
  & input {
    ${smallReverseSkewStyle}
    border: none;
    height: 100%;
    font-size: 20px;
    font-weight: 700;
  }
  & input:focus {
    outline: none;
  }
`;

export const inputWrapperStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 15px;
`;

export const inputHeadingStyle = css`
  text-transform: unset;
`;
