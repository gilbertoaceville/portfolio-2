import { getPageViews } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export default async function PageViews() {
	const pageViews = await getPageViews();

	const t = await getTranslations("Contacts");

	return (
		<div
			aria-label={t("page_views")}
			className="mb-8 mt-auto select-none text-center text-xs text-foreground/70"
		>
			<span className="mb-4 block">
				{pageViews} {t("this_week")}
			</span>
			&copy; <span>{new Date().getFullYear()} GJ-ACE.</span>
		</div>
	);
}
