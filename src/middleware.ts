import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { checkAuthenticated } from "./lib/session.server";

// middleware setup for internationalization
const intlMiddleware = createIntlMiddleware({
	locales: ["en", "es"],
	defaultLocale: "en",
});

// middleware function for authentication
async function authMiddleware(req: NextRequest) {
	const authenticated = await checkAuthenticated();

	if (!authenticated) {
		return NextResponse.redirect("/login");
	}

	return NextResponse.next();
}

// Combined middleware function
async function combinedMiddleware(req: NextRequest) {
	const intlResponse = await intlMiddleware(req);

	if (intlResponse) {
		return intlResponse;
	}

	return authMiddleware(req);
}

export async function middleware(req: NextRequest) {
	return combinedMiddleware(req);
}

export const config = {
	matcher: ["/", "/(es|en)/:path*"],
};
