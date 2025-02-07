import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { parseJwt } from './core/libraries/jwt'

const protectedRoutes = ['/dashboard']
const authRoutes = ['/login']
const checkIsPathIncludes = (routes: string[], path: string) => {
  for (const route of routes) {
    if (path.startsWith(route)) return true
  }
  return false
}
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = checkIsPathIncludes(protectedRoutes, path)
  const isAuthRoute = checkIsPathIncludes(authRoutes, path)

  const cookie = (await cookies()).get('auth_token')?.value
  const session = parseJwt(cookie)
  const isUserLogin = Boolean(session?.id)

  // if (isProtectedRoute && !isUserLogin) {
  //   return NextResponse.redirect(new URL('/login', req.nextUrl))
  // }

  if (isAuthRoute && isUserLogin) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}
      //ch
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
