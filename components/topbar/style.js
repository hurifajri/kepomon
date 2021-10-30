// External modules
import styled from '@emotion/styled';

// Internal modules
import media from '@/styles/media';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: auto;
  ${media.sm} {
    flex-direction: row;
    width: 100%;
  }
`;
