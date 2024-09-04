import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import '@/globals.css'

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${globalFont.className} antialiased`}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Snippet Master',
  description: 'A snippet manager app to store and share snippets'
}
