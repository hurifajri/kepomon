// External modules
import { css } from '@emotion/react';

export const itemStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const statStyle = css`
  justify-content: space-between;
`;

export const cardStyle = css`
  transform: skew(-15deg);
  padding: 5px 8px;
  border: 2px solid var(--dark-black);
`;

export const cardContentStyle = css`
  display: inline-block;
  transform: skew(15deg);
`;
