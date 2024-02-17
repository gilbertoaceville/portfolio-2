const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const { withPlausibleProxy } = require("next-plausible");

const isProd = process.env.NODE_ENV === PHASE_PRODUCTION_BUILD;

/** @type {import('next').NextConfig} */
const nextConfig = {
	...(isProd && {
		compiler: {
			removeDebugger: true,
		},
	}),
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
};

module.exports = withPlausibleProxy()(nextConfig);
