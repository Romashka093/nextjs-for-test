/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

import { join } from 'path';

module.exports = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
const withImages = require('next-images');
module.exports = withImages();
