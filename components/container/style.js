// External modules
import styled from '@emotion/styled';

// Internal modules
import media from '@/styles/media';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 25px auto;
  ${media.sm} {
    align-items: flex-start;
    max-width: 685px;
    gap: 30px;
  }
  ${media.md} {
    max-width: 768px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`;
