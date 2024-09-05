import { Navbar } from '@/modules/common/components'

export default function Layout({ children }: Children) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="row-start-2 size-full overflow-hidden">{children}</main>
    </div>
  )
}
