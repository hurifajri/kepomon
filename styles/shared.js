// External modules
import { css } from '@emotion/react';

export const bigSkewStyle = css`
  transform: skew(-15deg);
`;

export const bigReverseSkewStyle = css`
  transform: skew(15deg);
`;

export const buttonTextStyle = css`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const headingTextStyle = css`
  ${buttonTextStyle}
  font-weight: 700;
`;

export const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const boxShadowStyle = css`
  box-shadow: 9px 10px 0 var(--light-blue);
`;

export const smallSkewStyle = css`
  transform: skew(-5deg);
`;

export const smallReverseSkewStyle = css`
  transform: skew(5deg);
`;

export const textShadowStyle = css`
  color: var(--dark-white);
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
`;

export const thickBorderStyle = css`
  border: 4px solid var(--dark-black);
`;

export const thinBorderStyle = css`
  border: 2px solid var(--dark-black);
`;
