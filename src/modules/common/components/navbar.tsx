import { Logo, Authenticated } from '@/modules/common/components'

export const Navbar = async () => {
  return (
    <header className="bg-background flex flex-row items-center justify-between h-16 w-full px-8 py-4 sticky top-0 max-sm:px-3">
      <Logo />
      <Authenticated />
    </header>
  )
}
