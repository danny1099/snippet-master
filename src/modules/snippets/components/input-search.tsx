import * as React from 'react'
import { cn } from '@/modules/common/utils'
import { Icon, Button } from '@/modules/common/components'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  isBordered?: boolean
  textButton?: string
  onClick?: () => void
}

/* prettier-ignore */
export const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, isBordered = false, textButton, onClick ,...props }, ref) => {
    return (
      <div className="w-full relative inline-flex items-center">
        {icon && (
          <div className={cn('absolute top-1/2 transform -translate-y-1/2 text-secondary-foreground left-3')}>
            <Icon icon={icon} className='size-4' />
          </div>
        )}
        <input
          {...props}
          ref={ref}
          type={type}
          className={cn('flex h-10 w-full rounded-2xl bg-accent text-accent-foreground px-3 py-2 text-xs file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-70 pl-10 outline-border', isBordered && 'border border-border', className)}/>
        
        {/* button with icon to add a snippet */}
        <Button variant="primary" size="default" className="absolute right-0 rounded-2xl select-none" onClick={onClick}>
          <Icon icon="plus" className="size-4" />
          {textButton}
        </Button>
      </div>
    )
  }
)
