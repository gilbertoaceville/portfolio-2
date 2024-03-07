import { parseLocaleCodeToLocale } from "./parseCodeToLocale";

export function getDataEntries(data: { entries: Array<any> }, locale = "en") {
	const parsedLocale = parseLocaleCodeToLocale(locale);

	return data.entries.reduce((acc: any, entry: Record<string, any>) => {
		const contentType = entry.sys.contentType.sys.id;

		if (contentType === "portfolioAbout") {
			acc.about = {
				name: entry.fields.name[parsedLocale],
				title: entry.fields.title[parsedLocale],
				description: entry.fields.description[parsedLocale],
			};
		} else if (contentType === "experienceDescriptionItem") {
			if (!acc.experiences) {
				acc.experiences = [];
			}
			acc.experiences.push(entry.fields.text[parsedLocale]);
		}

		return acc;
	}, {});
}
