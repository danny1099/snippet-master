import { forwardRef } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { ctaVariants } from '@/modules/common/helpers'
import { cn } from '@/modules/common/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaVariants> {
  asChild?: boolean
  isLoading?: boolean
}

/* prettier-ignore */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ( { children, className, variant, size, asChild = false, isLoading,...props }, ref ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(ctaVariants({ variant, size, className }))}
        disabled={isLoading}
      >
        {children}
      </Comp>
    )
  }
)
