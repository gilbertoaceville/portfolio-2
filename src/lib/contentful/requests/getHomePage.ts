import { parseLocaleCodeToLocale } from "@/utils/helpers/parseCodeToLocale";
import contentfulClient from "../client";
import { HomePage } from "../types/home-page";
import { homePageAdapter } from "../adapters/home-page";

export async function getHomePage(locale?: string): Promise<HomePage | null> {
	try {
		const homePageData = await contentfulClient().getEntries({
			content_type: "portfolioHome",
			locale: parseLocaleCodeToLocale(locale),
			limit: 1,
			include: 10,
		});

		if (!homePageData.items?.[0]) return null;

		return homePageAdapter(homePageData.items[0]);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return null;
	}
}
