import { LOCALE_CODE } from "@/lib/contentful/types/contentful";

export const parseLocaleCodeToLocale = (locale?: string): LOCALE_CODE => {
	switch (locale) {
		case "es": {
			return "es-US";
		}
		default:
			return "en-US";
	}
};
