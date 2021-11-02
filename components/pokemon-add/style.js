// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';
import {
  buttonLabelStyle,
  buttonStyle,
  headingStyle,
  sectionStyle,
  smallReverseSkewStyle,
  smallSkewStyle,
  thinBorderStyle,
} from '@/styles/shared';

export { buttonLabelStyle, buttonStyle, headingStyle, sectionStyle };

export const errorStyle = css`
  border: 2px solid var(--light-red);
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
