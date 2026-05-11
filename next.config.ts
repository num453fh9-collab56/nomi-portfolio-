/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ye line TypeScript errors ko ignore karegi
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ye line ESLint warnings ko ignore karegi
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
