import { useLocale } from 'next-intl'
import { publicRoutes } from '@/modules/routes/paths'

export type PublicRoute = keyof typeof publicRoutes

export const getPublicRoute = (route: PublicRoute, withLocale = true) => {
  const locale = useLocale()
  const routePath = publicRoutes[route]
  return withLocale ? `/${locale}/${routePath}` : `/${routePath}`
}
