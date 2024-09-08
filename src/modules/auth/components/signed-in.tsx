'use client'
import { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { useTranslations } from 'next-intl'
import { SignOutButton, UserButton } from '@clerk/nextjs'
import { getPrivateRoute, getPublicRoute } from '@/modules/routes/helpers'
import { Navlink } from '@/modules/common/components'

export const SignedIn = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslations('authenticated')

  return (
    <Fragment>
      <SignOutButton>
        <Navlink href={getPublicRoute('home')} variant="ghost" className={isMobile ? 'hidden' : 'flex'}>
          <span className="text-sm font-medium text-foreground">{t('sign_out')}</span>
        </Navlink>
      </SignOutButton>

      <Navlink href={getPrivateRoute('snippets')}>
        <span className="flex flex-row gap-x-3 text-sm font-medium items-center">
          {t('my_snippets')}
          <UserButton />
        </span>
      </Navlink>
    </Fragment>
  )
}
