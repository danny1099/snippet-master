import { Braces } from 'lucide-react'

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-primary p-[6px] rounded-md">
        <Braces size={27} color="text-primary-foreground" />
      </div>
      <div className="flex gap-1 text-lg">
        <span className="text-primary font-semibold">Snippet</span>
        <span className="text-foreground">Master</span>
      </div>
    </div>
  )
}
