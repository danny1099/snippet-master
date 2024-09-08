import type { Metadata } from 'next'
import { ServerProviders, ClientProviders } from '@/lib/providers'
import { globalFont } from '@/config/fonts'
import '@/globals.css'

interface Props extends Children {
  params: { lang: string }
}

export default function RootLayout({ children, params: { lang } }: Readonly<Props>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${globalFont.className} antialiased`}>
        <ServerProviders>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Snippet Storage',
  description: 'A snippet manager app to store and share snippets',
  icons: '/images/logo-app.svg'
}
