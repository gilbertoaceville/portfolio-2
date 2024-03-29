const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === PHASE_PRODUCTION_BUILD;

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
	...(isProd && {
		compiler: {
			removeDebugger: true,
		},
	}),
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
			},
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
			},
		],
	},
});

module.exports = nextConfig;
