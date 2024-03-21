import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import NavBar from "@/components/nav-bar/nav-bar";
import { Providers } from "@/providers/providers";
import ThemeToggle from "@/components/theme-toggle/theme-toggle";

// export const runtime = "edge";
// export const dynamic = "force-dynamic";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Gilbert James",
		default: "Gilbert James",
	},
	description: "Personal Website for Gilbert James",
};

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html
			lang={locale}
			className="h-full w-full scroll-smooth bg-background text-foreground transition-all"
			suppressHydrationWarning
		>
			<head />
			<body
				className={clsx(
					"relative mx-auto h-full w-full max-w-10xl",
					inter.className
				)}
			>
				<Providers>
					<div className="fixed bottom-8 right-8 z-50 sm:bottom-12">
						<ThemeToggle />
					</div>
					<NavBar />
					{children}
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
