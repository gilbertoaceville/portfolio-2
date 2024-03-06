import { type Metadata } from "next";
import { Home, LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import AdminNav from "@/components/nav-bar/admin/nav";
import MenuButton from "@/components/menu-button/menu-button";

export const metadata: Metadata = {
	title: "Admin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto flex h-full flex-col gap-4 px-1 py-2 transition-all lg:p-2">
			<div className="flex h-full flex-col gap-2 rounded-md border-border p-2 lg:border">
				<div className="flex items-center justify-between px-2">
					<h2 className="text-xl font-semibold">Admin</h2>
					<div className="flex items-center gap-2">
						<Button asChild variant="outline" size="icon">
							<Link href="/">
								<Home />
							</Link>
						</Button>
						<Button asChild variant="outline" size="icon">
							<Link href="/logout">
								<LogOut />
							</Link>
						</Button>
						<MenuButton>
							<AdminNav />
						</MenuButton>
					</div>
				</div>

				<div className="grid h-full w-full grid-cols-12 overflow-hidden rounded-sm border border-border">
					<div className="hidden lg:col-span-2 lg:flex">
						<AdminNav />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
