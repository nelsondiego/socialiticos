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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}