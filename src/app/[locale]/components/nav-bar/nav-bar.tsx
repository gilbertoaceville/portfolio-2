import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";

export default function NavBar() {
	const t = useTranslations("NavBar");
	return (
		<nav className="flex justify-end py-3 pr-14">
			<LocaleSwitcher
				title={t("title")}
				englishLabel={t("eng_label")}
				spanishLabel={t("esp_label")}
			/>
		</nav>
	);
}
