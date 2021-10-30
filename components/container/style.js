// External modules
import styled from '@emotion/styled';

// Internal modules
import media from '@/styles/media';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  ${media.xs} {
    align-items: flex-start;
    max-width: 685px;
  }
  ${media.sm} {
    max-width: 768px;
  }
  ${media.lg} {
    max-width: 1024px;
  }
  margin: 25px auto;
`;
