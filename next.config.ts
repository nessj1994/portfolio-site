import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.md'],
    rules: {
      '*.md': { loaders: ['raw-loader'], as: '*.js' },
    },
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
