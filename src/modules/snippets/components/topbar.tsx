'use client'
import { useUser } from '@clerk/nextjs'
import { useTranslations } from 'next-intl'
import { Avatar, ThemeToggle } from '@/modules/common/components'
import { InputSearch } from '@/modules/snippets/components'

export const Topbar = () => {
  const { user } = useUser()
  const shortName = user?.fullName?.split(' ')[0]
  const avatarUrl = user?.imageUrl
  const firstLetter = user?.firstName?.charAt(0) + '' + user?.lastName?.charAt(0)
  const t = useTranslations('topbar')

  return (
    <header className="bg-background flex w-[95%] min-h-16 static top-0 justify-between items-center border border-border rounded-2xl px-4 mt-5 mx-auto">
      <div className="h-full px-1 flex items-center gap-2">
        <Avatar src={avatarUrl as string} text={firstLetter} />
        <div className="h-full px-1 flex flex-col justify-center">
          <span className="text-sm text-foreground font-medium">{shortName + ' ' + user?.lastName}</span>
          <span className="text-xs text-accent-foreground">{user?.emailAddresses[0].emailAddress}</span>
        </div>
      </div>

      <div className="flex w-3/5 h-full items-center px-2">
        <InputSearch
          icon="search"
          textButton={t('create')}
          placeholder={t('search')}
          onClick={() => alert('create')}
        />
      </div>

      <ThemeToggle />
    </header>
  )
}
