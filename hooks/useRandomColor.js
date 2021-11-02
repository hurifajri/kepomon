// Internal modules
import { darkColors, lightColors } from '@/styles/colors';

/**
 * Hook to generate css variable of random colors
 * @param {Number} flag The given index to map
 * @returns {Object} The object of css variable colors
 */
const useRandomColor = (flag = 0) => {
  // Currently only need three colors
  const mappers = ['purple', 'cyan', 'green'];

  const light = lightColors[mappers[flag]];
  const dark = darkColors[mappers[flag]];

  return { light, dark };
};

export default useRandomColor;
