/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    emotion: true,
  },
};

module.exports = withPlugins([[withTM], nextConfig]);
