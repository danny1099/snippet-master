import { cn } from '@/modules/common/utils'
import { Heading } from '@/modules/common/components'

interface Props {
  children: React.ReactNode
  title?: string
  className?: string
}

export const Group = ({ children, title, className }: Props) => {
  return (
    <div className={cn('flex flex-col w-full p-2 bg-background', className)}>
      {title && <Heading text={title} className="text-sm font-medium text-accent-foreground" />}
      {children}
    </div>
  )
}
