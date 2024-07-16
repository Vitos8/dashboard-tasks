/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["img.clerk.com"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
