// External modules
import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const StyledA = styled.a`
  display: inline-block;
  padding: 20px 20px 75px;
  background-color: ${({ color }) => color};
  border: 4px solid var(--color-dark-black);
  box-shadow: 9px 10px 0 var(--color-light-blue);
  transform: skew(-5deg);
  transition: all 0.25s;
  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const StyledCard = styled.div`
  position: relative;
  background-color: var(--color-light-white);
  border-radius: 50%;
  width: 150px;
  height: 150px;
  transform: skew(5deg);
`;

export const StyledId = styled.span`
  display: inline-block;
  background-color: ${({ color }) => color};
  transform: skew(-15deg);
  padding: 3px 5px;
  & span {
    display: inline-block;
    transform: skew(15deg);
    font-weight: 700;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const headingStyle = css`
  color: var(--color-dark-white);
  text-transform: uppercase;
  text-shadow: -1px -1px 0 var(--color-dark-black),
    1px -1px 0 var(--color-dark-black), -1px 1px 0 var(--color-dark-black),
    1px 1px 0 var(--color-dark-black), 2px 2px 0 var(--color-dark-black),
    2px 2px 0 var(--color-dark-black), 3px 3px 0 var(--color-dark-black);
`;
