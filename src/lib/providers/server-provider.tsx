import { ClerkProvider } from '@clerk/nextjs'
import { NextIntlClientProvider, useMessages } from 'next-intl'

export const ServerProviders = ({ children }: Children) => {
  const messages = useMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ClerkProvider>{children}</ClerkProvider>
    </NextIntlClientProvider>
  )
}
