const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const { withPlausibleProxy } = require("next-plausible");
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

module.exports = withPlausibleProxy()(nextConfig);
