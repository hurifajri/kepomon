const sizes = {
  xl: 1440,
  lg: 1280,
  md: 1024,
  sm: 768,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = `@media (min-width: ${emSize}em)`;

  return accumulator;
}, {});

export default media;
