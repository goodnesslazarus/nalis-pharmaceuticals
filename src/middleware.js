import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/Products' || pathname === '/Products/cart' || pathname.startsWith('/Products/')) {
    const normalizedPath = pathname.replace(/^\/Products(\/|$)/i, '/products$1');
    return NextResponse.redirect(new URL(normalizedPath, request.url), 308);
  }

  return NextResponse.next();
}
