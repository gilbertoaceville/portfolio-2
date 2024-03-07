"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

interface LocaleSwitcherProps {
	title: string;
	englishLabel?: string;
	spanishLabel?: string;
}

export default function LocaleSwitcher({
	title,
	englishLabel,
	spanishLabel,
}: LocaleSwitcherProps) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();
	const pathname = usePathname();
	const splitPath = pathname.split("/")[2];
	const path = typeof splitPath === "string" ? `/${splitPath}` : "/";

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		startTransition(() => {
			router.replace(`/${nextLocale}${path}`);
		});
	};
	return (
		<label
			htmlFor="locale-switcher"
			title={title}
			aria-label={title}
			role="button"
			tabIndex={0}
			aria-disabled={isPending}
			aria-busy={isPending}
			className="rounded border-[1px] border-slate-500"
		>
			<p className="sr-only">{title}</p>
			<select
				defaultValue={localActive}
				className="bg-transparent px-2 py-1 text-sm disabled:cursor-not-allowed"
				onChange={onSelectChange}
				id="locale-switcher"
				name="locale-switcher"
				disabled={isPending}
			>
				<option value="en"> 🇬🇧 {englishLabel}</option>
				<option value="es"> 🇪🇸 {spanishLabel}</option>
			</select>
		</label>
	);
}
