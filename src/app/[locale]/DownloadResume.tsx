"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function DownloadResume({
	downloadLabel,
}: {
	downloadLabel: string;
}) {
	const locale = useLocale();

	return (
		<Button asChild className="!px-0" variant="link">
			<Link
				href={`/${locale}/resume`}
				target="_blank"
				className="group inline-flex select-none gap-4 hover:underline"
			>
				{downloadLabel}
				<span className="pt-0.5 transition-all duration-150 group-hover:sm:translate-x-1">
					<ExternalLinkIcon size={20} />
				</span>
			</Link>
		</Button>
	);
}
