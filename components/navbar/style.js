// External modules
import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const StyledNav = styled.nav``;

export const StyledIcon = styled.span`
  position: absolute;
  left: -50px;
  top: -15px;
`;

export const StyledRoute = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-white);
  text-transform: uppercase;
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
`;

export const cardContentStyle = css`
  display: flex;
  align-items: center;
  margin: 6px -10px 5px 35px;
`;
