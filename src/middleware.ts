import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { i18n } from '@/modules/i18n/config/locales'
import { privateRoutesList } from '@/modules/routes/helpers'
import createMiddleware from 'next-intl/middleware'

/* i18n middleware config */
const nextIntlMiddleware = createMiddleware({
  locales: Array.from(i18n.locales),
  defaultLocale: i18n.defaultLocale,
  localeDetection: false
})

/* list of protected routes */
const isProtectedRoute = createRouteMatcher(privateRoutesList(Array.from(i18n.locales)))

/* Clerk middleware config */
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
  return nextIntlMiddleware(req)
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)'
  ]
}
