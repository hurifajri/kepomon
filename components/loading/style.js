// External modules
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`;

export const StyledLoading = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    animation: ${rotate} ease-in-out 1s;
    animation-delay: 0.05s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
  }
`;
