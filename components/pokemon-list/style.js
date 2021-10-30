// External modules
import styled from '@emotion/styled';

// Internal modules
import media from '@/styles/media';

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.xs} {
    justify-content: space-between;
  }
  gap: 35px;
  flex-wrap: wrap;
`;
