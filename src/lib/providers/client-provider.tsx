'use client'
import { ThemeProvider } from 'next-themes'

export const ClientProviders = ({ children }: Children) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  )
}
