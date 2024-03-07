"use client";

import Link from "next/link";

import { logoutAdminSession } from "@/lib/session.server";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

export default function Page() {
	const locale = useLocale();
	return (
		<>
			<p>Are you sure you want to log out?</p>
			<div className="flex">
				<Button
					onClick={async () => await logoutAdminSession(locale)}
					variant="link"
				>
					Logout
				</Button>
				<Button asChild variant="link">
					<Link href="/admin">Never mind</Link>
				</Button>
			</div>
		</>
	);
}
