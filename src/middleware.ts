import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { checkAuthenticated } from "./lib/session.server";
import { NextMiddleware } from "next/server";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export const withAuthorization: MiddlewareFactory = next => {
	return async (req: NextRequest, _next: NextFetchEvent) => {
		const cookieLocale = req.cookies.get("NEXT_LOCALE");
		const locale = cookieLocale?.value || "en";

		const authenticated = await checkAuthenticated();

		if (req.nextUrl.pathname.includes("login")) {
			if (authenticated) {
				return NextResponse.redirect(
					new URL(`/${locale}/admin`, req.nextUrl)
				);
			}
		}

		if (req.nextUrl.pathname.includes("logout")) {
			if (!authenticated) {
				return NextResponse.redirect(
					new URL(`/${locale}/login`, req.nextUrl)
				);
			}
		}

		if (req.nextUrl.pathname.includes("admin")) {
			if (!authenticated) {
				return NextResponse.redirect(
					new URL(`/${locale}/login`, req.nextUrl)
				);
			}
		}

		return next(req, _next);
	};
};

export default withAuthorization(
	createIntlMiddleware({
		locales: ["en", "es"],
		defaultLocale: "en",
	})
);

export const config = {
	matcher: ["/", "/(es|en)/:path*"],
};
