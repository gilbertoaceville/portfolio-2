import { parseLocaleCodeToLocale } from "@/utils/helpers/parseCodeToLocale";
import contentfulClient from "../client";
import { CVPage } from "../types";
import { cvPageAdapter } from "../adapters/cv-page";

export async function getCvPage(locale?: string): Promise<CVPage | null> {
	try {
		const cvPageData = await contentfulClient().getEntries({
			content_type: "portfolioCv",
			locale: parseLocaleCodeToLocale(locale),
			limit: 1,
			include: 10,
		});

		if (!cvPageData.items?.[0]) return null;

		return cvPageAdapter(cvPageData.items[0]);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return null;
	}
}
