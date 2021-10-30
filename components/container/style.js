// External modules
import styled from '@emotion/styled';

// Internal modules
import media from '@/styles/media';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 25px auto;
  ${media.sm} {
    align-items: flex-start;
    max-width: 685px;
  }
  ${media.md} {
    max-width: 768px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`;
