// External modules
import styled from '@emotion/styled';

export const StyledCard = styled.div`
  display: flex;
  border-width: ${({ border }) => border && `${border}px`};
  border-style: ${({ border }) => border && 'solid'};
  border-color: ${({ brColor }) => brColor ?? 'var(--dark-black)'};
  background-color: ${({ bgColor }) => bgColor ?? 'var(--dark-white)'};
  padding-top: ${({ pt }) => pt && `${pt}px`};
  padding-right: ${({ pr }) => pr && `${pr}px`};
  padding-bottom: ${({ pb }) => pb && `${pb}px`};
  padding-left: ${({ pl }) => pl && `${pl}px`};
  box-shadow: 9px 10px 0 var(--light-blue);
  transition: all 0.25s;
  transform: skew(-5deg);
  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
  & div {
    transform: skew(5deg);
  }
`;
