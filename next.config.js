// External modules
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const config = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },

  reactStrictMode: true,
};

module.exports = withPWA(config);
