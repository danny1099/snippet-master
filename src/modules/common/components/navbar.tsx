import { Logo, Button } from '@/modules/common/components'
import { ArrowRight } from 'lucide-react'
export const Navbar = () => {
  return (
    <header className="bg-background flex justify-between h-20 px-8 py-4 sticky top-0 max-sm:px-4 max-sm:py-1">
      <Logo />
      <Button>
        Get Started
        <ArrowRight size={20} />
      </Button>
    </header>
  )
}
