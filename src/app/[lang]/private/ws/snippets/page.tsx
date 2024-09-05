import { SignedIn } from '@clerk/nextjs'

export default function MySnippets() {
  return (
    <div>
      <h1>My Snippets</h1>
      <SignedIn>
        <p>You are signed in</p>
      </SignedIn>
    </div>
  )
}
