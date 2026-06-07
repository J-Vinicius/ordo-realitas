import { LoginForm } from "~/components/login-form"
import { useDocumentTitle } from "usehooks-ts"

export default function Home() {
  useDocumentTitle("Ordo Realitas")
  return (
    <div className="flex min-h-[calc(100svh-3rem)] flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
