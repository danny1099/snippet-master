'use client'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import { getPublicRoute } from '@/modules/routes/helpers'
import { Navlink, Icon } from '@/modules/common/components'

export const SignedOut = () => {
  const t = useTranslations('authenticated')

  return (
    <Fragment>
      <Navlink href={getPublicRoute('sign_in')} variant="ghost">
        <span className="text-sm font-medium text-foreground">{t('sign_in')}</span>
      </Navlink>

      <Navlink href={getPublicRoute('get_started')}>
        <span className="flex flex-row items-center gap-x-2 justify-center text-sm font-medium">
          {t('sign_up')}
          <Icon icon="arrow-right" className="size-4" />
        </span>
      </Navlink>
    </Fragment>
  )
}
