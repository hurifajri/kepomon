// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  buttonLabelStyle,
  buttonStyle,
  flexCenterStyle,
  bigTextStyle,
  smallReverseSkewStyle,
  smallSkewStyle,
  thinBorderStyle,
} from '@/styles/shared';

export { buttonLabelStyle, buttonStyle };

export const errorStyle = css`
  border: 2px solid red;
`;

export const headingStyle = css`
  ${bigTextStyle}
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
