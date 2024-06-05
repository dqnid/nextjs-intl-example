import { NextRequest, NextResponse } from "next/server";

export const locales = ["es", "en", "fr"];

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  return locales[0];
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  console.log(pathname);
  if (pathname === "/") return;
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale();
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
