// External modules
import { css } from '@emotion/react';

export const bigSkewStyle = css`
  transform: skew(-15deg);
`;

export const bigReverseSkewStyle = css`
  transform: skew(15deg);
`;

export const bigTextStyle = css`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const boxShadowStyle = css`
  box-shadow: 9px 10px 0 var(--light-blue);
`;

export const overlapStyle = css`
  position: absolute;
  top: -30px;
  right: -15px;
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

export const buttonLabelStyle = css`
  ${bigTextStyle}
  ${flexCenterStyle}
  ${smallReverseSkewStyle}
  ${textShadowStyle}
  margin: 6px -10px 5px 20px;
`;

export const buttonsStyle = css`
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
