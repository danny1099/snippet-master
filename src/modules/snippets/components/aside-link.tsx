'use client'
import { usePathname } from 'next/navigation'
import { useTranslations, MessageKeys } from 'next-intl'
import { PrivateRoute } from '@/modules/routes/paths'
import { getPrivateRoute } from '@/modules/routes/helpers'
import { cn } from '@/modules/common/utils'
import { Navlink, Icon } from '@/modules/common/components'
import { AsideLink, type TLink } from '@/modules/snippets/types'

/* prettier-ignore */
export const Link = ({ icon, route }: AsideLink) => {
  const href = getPrivateRoute(route as PrivateRoute)
  const pathname = usePathname()
  const t = useTranslations("aside.options")

  return (
    <Navlink href={href} variant="link" className={cn('px-3 h-11 w-full',pathname.includes(route) && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground')}>
      <Icon icon={icon} className="size-4" />
      <span className="text-xs whitespace-nowrap">{t(route as TLink)}</span>
    </Navlink>
  )
}
