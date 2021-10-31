// Internal modules
import { typeColors } from '@/styles/colors';

const usePokemonTypesColor = type => {
  const typeColor = typeColors[type] ?? 'var(--type-normal)';

  return { typeColor };
};

export default usePokemonTypesColor;
