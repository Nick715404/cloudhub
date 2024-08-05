/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: true,
		staleTimes: 120,
		bundlePagesRouterDependencies: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: 'lh3.googleusercontent.com',
				protocol: 'https',
			},
		],
	},
	reactStrictMode: false,
};
export default nextConfig;
