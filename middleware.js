import { NextResponse } from "next/server";
export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const session =  String([...req.headers])
    if (session.includes('teaToken')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}
