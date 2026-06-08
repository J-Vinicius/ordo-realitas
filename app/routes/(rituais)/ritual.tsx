import {
  ChevronLeft,
  Circle,
  Hand,
  Hourglass,
  Move,
  Shield,
  Target,
} from "lucide-react"
import { useNavigate, useParams } from "react-router"
import { Button } from "~/components/ui/button"

export default function Ritual() {
  const { ritual } = useParams()

  const navigate = useNavigate()

  return (
    <main className="h-svh p-2">
      <Button
        variant="outline"
        size="icon-lg"
        className="fixed top-2 left-2"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
      </Button>
      <div className="flex h-full flex-col gap-4 p-2 md:flex-row">
        <div className="flex h-full basis-1/2 items-center justify-center">
          <img
            src="https://static.wikia.nocookie.net/ordemparanormal/images/a/a7/S%C3%ADmbolo_Terceiro_Olho.png/revision/latest/scale-to-width-down/1000?cb=20221023175407&path-prefix=pt-br"
            alt="Ritual"
            className="w-lg"
          />
        </div>
        <aside className="no-scrollbar flex basis-1/2 flex-col gap-8 text-center md:-m-4 md:ml-0 md:max-h-svh md:overflow-scroll md:border-l md:bg-sidebar md:p-6 md:text-left">
          <header>
            <h1 className="text-xl font-bold md:text-2xl">Nome do Ritual</h1>
            <small className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </header>
          <ul className="grid grid-cols-3 place-items-center gap-4 *:place-items-center sm:grid-cols-4 lg:grid-cols-6">
            <li>
              <Hand />
              Execução
            </li>
            <li>
              <Move />
              Alcance
            </li>
            <li>
              <Circle />
              Àrea
            </li>
            <li>
              <Target />
              Alvo
            </li>
            <li className="sm:col-span-2 lg:col-span-1">
              <Hourglass />
              Duração
            </li>
            <li className="sm:col-span-2 lg:col-span-1">
              <Shield />
              Resistência
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex labore
            accusamus eius aspernatur praesentium provident, quisquam eveniet
            aliquam optio excepturi quis laudantium cupiditate eligendi suscipit
            pariatur minima quas, reprehenderit neque!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex labore
            accusamus eius aspernatur praesentium provident, quisquam eveniet
            aliquam optio excepturi quis laudantium cupiditate eligendi suscipit
            pariatur minima quas, reprehenderit neque!
          </p>
          <ul className="space-y-4 text-left">
            <li className="flex items-center justify-between">
              <header>
                <h2 className="text-xl font-semibold text-nowrap">Discente</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <small>Requer xº Circulo e Afinidade a Elemento</small>
              </header>
              <span className="text-lg font-medium text-nowrap">+X PE</span>
            </li>
            <li className="flex items-center justify-between">
              <header>
                <h2 className="text-xl font-semibold text-nowrap">
                  Verdadeiro
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <small>Requer xº Circulo e Afinidade a Elemento</small>
              </header>
              <span className="text-lg font-medium text-nowrap">+X PE</span>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  )
}
