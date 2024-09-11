'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Button, Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

const themes = ['light', 'dark']

/* prettier-ignore */
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  /* useEffect is used to prevent hydration error */
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 pl-1 h-10 w-20 bg-accent rounded-3xl">
      {themes.map((t) => (
        <Button
          key={t}
          onClick={() => setTheme(t)}
          variant="outline"
          size="icon"
          className={cn('flex size-8 items-center justify-center rounded-full p-1 top-1 right-1 border-none select-none', t === theme ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'  )}
        >
          <Icon icon={t === 'light' ? 'sun' : 'moon'} className="size-4" />
        </Button>
      ))}
    </div>
  )
}
