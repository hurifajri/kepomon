/** @jsxImportSource @emotion/react */

// Internal modules
import Pokeball from '@/components/icons/pokeball';
import { baseStyle } from '@/components/loading/style';

const Loading = () => (
  <span className="loading" css={baseStyle}>
    <Pokeball size={5} />
  </span>
);

export default Loading;
