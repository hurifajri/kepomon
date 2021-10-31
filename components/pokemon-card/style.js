// External modules
import { css } from '@emotion/react';

export const cardStyle = css`
  padding: 15px 15px 50px 15px;
  background-color: var(--bgColor);
  transition: all 0.25s;
  box-shadow: 9px 10px 0 var(--light-blue);
  transform: skew(-5deg);
  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const cardContentStyle = css`
  position: relative;
  background-color: var(--light-white);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  transform: skew(5deg);
`;

export const baseHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const miniCardStyle = css`
  align-items: center;
  background-color: var(--bgColor);
  transform: skew(-15deg);
  padding: 3px 5px;
  z-index: 1;
  border: none;
  &.counter {
    position: absolute;
    right: -15px;
    top: -30px;
    border: 3px solid var(--dark-black);
    background-color: var(--dark-white);
  }
`;

export const miniCardContentStyle = css`
  display: inline-block;
  transform: skew(15deg);
  font-size: 12px;
  font-weight: 700;
`;

export const baseMainStyle = css`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 13px;
`;

export const headingStyle = css`
  font-size: 13px;
  color: var(--dark-white);
  z-index: 1;
  text-align: right;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
`;
