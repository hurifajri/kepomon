// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import {
  bigTextStyle,
  buttonLabelStyle,
  buttonStyle,
  flexCenterStyle,
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
  font-weight: 700;
  text-align: center;
`;

export const inputHeadingStyle = css`
  text-transform: unset;
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
    max-width: 183px;
    ${media.sm} {
      max-width: unset;
    }
  }
  & input:focus {
    outline: none;
  }
`;

export const sectionStyle = css`
  ${flexCenterStyle}
  flex-direction: column;
  gap: 15px;
  text-align: center;
`;
