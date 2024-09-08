import Link from 'next/link'
import { getPublicRoute } from '@/modules/routes/helpers'
import { Icon } from './icon'

export const Logo = () => {
  return (
    <Link href={getPublicRoute('home')}>
      <div className="flex gap-2 items-center px-1">
        <div className="bg-primary size-9 rounded-md items-center flex justify-center">
          <Icon icon="code" className="size-6 text-primary-foreground" />
        </div>
        <div className="flex gap-1 items-center text-lg max-sm:hidden">
          <span className="text-primary font-medium">Snippet</span>
          <span className="text-accent-foreground font-medium">Storage</span>
        </div>
      </div>
    </Link>
  )
}
