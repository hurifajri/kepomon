// External modules
import { css, keyframes } from '@emotion/react';

// Internal modules
import { flexCenterStyle } from '@/styles/shared';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`;

export const loadingStyle = css`
  ${flexCenterStyle}
  & svg {
    animation: ${rotate} ease-in-out 1s;
    animation-delay: 0.05s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
  }
`;
