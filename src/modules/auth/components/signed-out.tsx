'use client'
import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getPublicRoute } from '@/modules/routes/helpers'
import { Navlink } from '@/modules/common/components'

export const SignedOut = () => {
  const t = useTranslations('authenticated')

  return (
    <Fragment>
      <Navlink href={getPublicRoute('Sign_In')} variant="ghost">
        <span className="text-sm font-medium text-foreground">{t('sign_in')}</span>
      </Navlink>

      <Navlink href={getPublicRoute('Get_Started')}>
        <span className="flex flex-row items-center gap-x-2 justify-center text-sm font-medium">
          {t('sign_up')}
          <ArrowRight size={18} />
        </span>
      </Navlink>
    </Fragment>
  )
}
