// Internal modules
import { darkColors, lightColors } from '@/styles/colors';

const useRandomColors = (flag = 0) => {
  // Currently only need three colors
  const mappers = ['purple', 'cyan', 'green'];

  const light = lightColors[mappers[flag]];
  const dark = darkColors[mappers[flag]];

  return { light, dark };
};

export default useRandomColors;
