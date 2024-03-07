import { useLocale } from "next-intl";
import AdminNavItem from "./nav-item";

export default function AdminNav() {
	const locale = useLocale();
	return (
		<div className="flex h-full w-full flex-col justify-between gap-2 lg:border-r lg:border-border">
			<div className="flex w-full flex-col transition-all">
				<AdminNavItem to={`/${locale}/admin/chat`}>Chat</AdminNavItem>
				<div className="mx-4 my-2 h-px bg-border"></div>
				<AdminNavItem to={`/${locale}/admin/messages`}>
					Messages
				</AdminNavItem>
			</div>
		</div>
	);
}
