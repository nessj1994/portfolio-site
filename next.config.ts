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
  },
  typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
};

export default nextConfig;
