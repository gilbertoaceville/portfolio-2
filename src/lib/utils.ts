import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const isProduction = process.env.NODE_ENV === "production";
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function invariant(
	condition: any,
	message?: string | (() => string)
): asserts condition {
	const prefix = "Invariant failed";

	if (condition) {
		return;
	}
	if (isProduction) {
		throw new Error(prefix);
	}
	var provided = typeof message === "function" ? message() : message;
	var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
	throw new Error(value);
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
