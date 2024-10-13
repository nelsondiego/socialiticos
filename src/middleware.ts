import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value

  const publicPaths = ['/signin', '/signup']
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname)
  const isRootPath = request.nextUrl.pathname === '/'

  if (isPublicPath || isRootPath) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  try {
    await jwtVerify(token, SECRET)
    return NextResponse.next()
  } catch (error) {
    console.error('JWT verification failed:', error)
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|avif|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};