// External modules
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const cardContentStyle = css`
  position: relative;
  background-color: var(--light-white);
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const StyledMiniCard = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  transform: skew(-15deg);
  padding: 3px 5px;
  z-index: 1;
  &.counter {
    position: absolute;
    right: -15px;
    top: -30px;
    border: 3px solid var(--dark-black);
    background-color: var(--dark-white);
  }
  & .content {
    display: inline-block;
    transform: skew(15deg);
    font-size: 12px;
    font-weight: 700;
  }
`;

export const StyledMain = styled.main`
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
