// External modules
const withPWA = require('next-pwa');

const config = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },

  reactStrictMode: true,
};

module.exports = withPWA(config);
