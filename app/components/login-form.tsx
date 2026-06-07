import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { useNavigate } from "react-router"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-40 items-center justify-center rounded-md sm:size-56">
                <img
                  src="/ordo-realitas.svg"
                  alt="Logo Ordo Realitas"
                  className="fill-accent"
                />
              </div>
              <span className="sr-only">Ordo Realitas</span>
            </div>
            <h1 className="text-xl font-bold">Bem vindo, Agente.</h1>
          </div>
          <Field>
            <FieldLabel htmlFor="agent">Agente</FieldLabel>
            <Input
              id="agent"
              type="password"
              placeholder="***********"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="***********"
              required
            />
          </Field>
          <Field>
            <Button type="submit" onClick={() => navigate("/grimorio")}>
              Entrar
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
