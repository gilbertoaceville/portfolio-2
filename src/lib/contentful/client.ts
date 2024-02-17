import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN,
	CONTENTFUL_PREVIEW_ACCESS_TOKEN,
	CONTENTFUL_ENVIRONMENT,
} from "./settings";

const contentful = require("contentful");

function contentfulClient(preview?: boolean) {
	return contentful.createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: preview
			? CONTENTFUL_PREVIEW_ACCESS_TOKEN
			: CONTENTFUL_ACCESS_TOKEN,
		environment: CONTENTFUL_ENVIRONMENT,
		host: preview ? "preview.contentful.com" : "cdn.contentful.com",

		// If we should resolve links between entries
		// resolveLinks: true,
		retryLimit: 5,
		retryOnError: true,
		// removeUnresolved: true,
	});
}

export default contentfulClient;
