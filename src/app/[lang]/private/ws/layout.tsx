import { Aside, Topbar } from '@/modules/snippets/components'

export default function Layout({ children }: Children) {
  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <Aside />
      <main className="size-full bg-secondary flex flex-col">
        <Topbar />
        {children}
      </main>
    </div>
  )
}
