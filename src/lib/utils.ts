import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function getPageViews(): Promise<number> {
	const url = new URL("https://plausible.io/api/v1/stats/aggregate");
	url.searchParams.set("site_id", "gilbert-james.vercel.app");
	url.searchParams.set("period", "7d");

	const res: {
		results: {
			visitors: {
				value: number;
			};
		};
	} = await fetch(url, {
		headers: {
			Authorization: "Bearer " + process.env.PLAUSIBLE_API_KEY,
		},
	}).then(res => res.json());

	return res.results.visitors.value || 0;
}
