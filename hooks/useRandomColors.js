const useRandomColors = (flag = 0) => {
  const lightColors = [
    'var(--color-light-purple)',
    'var(--color-light-cyan)',
    'var(--color-light-green)',
  ];
  const darkColors = [
    'var(--color-dark-purple)',
    'var(--color-dark-cyan)',
    'var(--color-dark-green)',
  ];

  return { light: lightColors[flag], dark: darkColors[flag] };
};

export default useRandomColors;
