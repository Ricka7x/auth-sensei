import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './auth';

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = '/api/auth/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*'],
}