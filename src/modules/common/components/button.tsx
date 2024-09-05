export const Button = ({ children }: Children) => {
  return (
    <button className="h-10 px-4 flex items-center gap-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
      {children}
    </button>
  )
}
