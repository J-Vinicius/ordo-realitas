interface RitualFormProps {
  children: React.ReactNode
  onSubmit: React.FormEventHandler
}

export function RitualForm({ onSubmit, children }: RitualFormProps) {
  return (
    <form className="space-y-4 *:space-y-4 sm:*:space-y-0" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
