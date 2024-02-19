import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) return notFound();

	const messages =
		locale === "en"
			? (await import(`../messages/en.json`)).default
			: (await import(`../messages/es.json`)).default;

	return {
		messages,
	};
});
