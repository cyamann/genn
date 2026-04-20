import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "de", "es", "ar", "ru", "en"] as const;
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const legacyCertificatesMatch = pathname.match(/^\/(tr|de|es|ar|ru|en)\/belgelerimiz\/?$/);

  if (legacyCertificatesMatch) {
    const locale = legacyCertificatesMatch[1];
    return NextResponse.redirect(
      new URL(`/${locale}/documents/certificates`, request.url)
    );
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const lowered = acceptLanguage.toLowerCase();
  const locale = lowered.includes("tr")
    ? "tr"
    : lowered.includes("de")
      ? "de"
      : lowered.includes("es")
        ? "es"
        : lowered.includes("ar")
          ? "ar"
          : lowered.includes("ru")
            ? "ru"
      : defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
