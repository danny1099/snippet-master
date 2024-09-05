import { SignUp } from '@clerk/nextjs'

export default function GetStarted() {
  return (
    <section className="size-full bg-background justify-center items-center flex flex-col">
      <SignUp routing="hash" />
    </section>
  )
}
