import { NextResponse, type NextRequest } from "next/server";

// Les URLs sont sensibles à la casse : /IA (et variantes) → /ia, l'adresse officielle de la page IA.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/ia" && pathname.toLowerCase() === "/ia") {
    const url = request.nextUrl.clone();
    url.pathname = "/ia";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/IA", "/Ia", "/iA"],
};
