// Internal modules
import Pokeball from '@/components/icons/pokeball';
import { loadingStyle } from '@/components/loading/style';

const Loading = () => (
  <span data-testid="loading" css={loadingStyle}>
    <Pokeball size={5} />
  </span>
);

export default Loading;
