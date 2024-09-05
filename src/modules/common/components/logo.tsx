import { Braces } from 'lucide-react'

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center px-1">
      <div className="bg-primary size-9 rounded-md items-center flex justify-center">
        <Braces size={27} className="text-primary-foreground" />
      </div>
      <div className="flex gap-1 items-center max-sm:hidden">
        <span className="text-primary font-semibold text-lg">Snippet</span>
        <span className="text-accent-foreground">Storage</span>
      </div>
    </div>
  )
}
