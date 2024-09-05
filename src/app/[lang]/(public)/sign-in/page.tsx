import { getPrivateRoute } from '@/modules/routes/helpers'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <section className="size-full bg-background justify-center items-center flex flex-col">
      <SignIn routing="hash" fallbackRedirectUrl={getPrivateRoute('Snippets')} />
    </section>
  )
}
