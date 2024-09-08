'use client'
import { useAuth } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@/modules/auth/components'

export const Authenticated = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="bg-background flex flex-row items-center justify-end p-1 gap-x-3 size-auto">
      {isSignedIn ? <SignedIn /> : <SignedOut />}
    </div>
  )
}
