import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Example: block access to /dashboard for unauthenticated users
  const isAuth = request.cookies.get('token')?.value;

  if (!isAuth && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
