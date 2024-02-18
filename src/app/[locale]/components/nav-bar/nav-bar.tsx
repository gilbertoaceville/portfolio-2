"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
	const pathname = usePathname();
	const splitPath = pathname.split("/")[2];
	const path = typeof splitPath === "string" ? `/${splitPath}` : "/";

	return (
		<header className="bg-slate-900 font-bold">
			<nav className="p-0.5">
				<div className="relative z-50 flex justify-end">
					<Link href={`/en${path}`} locale="en">
						<div className="mr-4 text-2xl">🇺🇸</div>
					</Link>

					<Link href={`/es${path}`} locale="es">
						<div className="mr-4 text-2xl">🇪🇸</div>
					</Link>
				</div>
			</nav>
		</header>
	);
}
