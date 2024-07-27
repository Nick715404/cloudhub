/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    staleTimes: 120,
    bundlePagesRouterDependencies: true,
  },
  reactStrictMode: false,
};
export default nextConfig;
