// Internal modules
import { typeColors } from '@/styles/colors';

/**
 * Hook to generate css variable color based on the given key
 * @param {String} type The given key of object
 * @returns {String} The css variable color
 */
const usePokemonTypesColor = type => {
  const typeColor = typeColors[type] ?? 'var(--type-normal)';

  return typeColor;
};

export default usePokemonTypesColor;
