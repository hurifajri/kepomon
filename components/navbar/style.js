// External modules
import { css, keyframes } from '@emotion/react';

export const iconStyle = css`
  position: absolute;
  left: -50px;
  top: -15px;
`;

export const routeStyle = css`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-white);
  text-transform: uppercase;
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`;

export const cardStyle = css`
  border: 2px solid var(--dark-black);
  transition: all 0.25s;
  transform: skew(-5deg);
  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const cardContentStyle = css`
  display: flex;
  align-items: center;
  margin: 6px -10px 5px 35px;
  transform: skew(5deg);

  &:hover svg {
    animation: ${rotate} ease-in-out 0.5s;
    animation-delay: 0.05s;
    animation-iteration-count: inherit;
    transform-origin: 50% 50%;
  }
`;
