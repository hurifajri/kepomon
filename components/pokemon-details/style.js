// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

export const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const rowStyle = css`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const sectionColumnStyle = css`
  ${columnStyle}
  gap: 10px;
`;

export const sectionRowStyle = css`
  ${rowStyle}
  align-items: center;
  gap: 15px;
`;

export const detailsStyle = css`
  ${columnStyle}
  gap: 25px;
  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const headingStyle = css`
  font-size: 25px;
`;

export const textStyle = css`
  font-weight: 500;
  text-transform: lowercase;
`;

export const cardStyle = css`
  padding: 50px;
  transform: skew(-5deg);
`;

export const cardContentStyle = css`
  ${columnStyle}
  ${media.sm} {
    ${rowStyle}
  }
  transform: skew(5deg);
`;

export const mainStyle = css`
  ${columnStyle}
  gap: 10px;
`;

export const imageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & .shadow {
    display: inline-block;
    width: 200px;
    height: 40px;
    background: var(--light-black);
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
  }
`;
