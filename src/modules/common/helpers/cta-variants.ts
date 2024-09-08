import { cva } from 'class-variance-authority'

export const ctaVariants = cva(
  'flex flex-row items-center gap-x-2 justify-center whitespace-nowrap text-xs font-medium disabled:pointer-events-none disabled:opacity-70',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        danger: 'bg-red-600 text-white',
        outline: 'bg-background text-foreground border border-border',
        ghost: 'bg-background border-none text-accent-foreground hover:bg-accent',
        link: 'bg-background border-none text-accent-foreground justify-start hover:bg-secondary hover:text-secondary-foreground'
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)
