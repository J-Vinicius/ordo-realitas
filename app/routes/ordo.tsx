import { useDocumentTitle } from "usehooks-ts"
import { Link } from "react-router"
import { Item, ItemContent, ItemMedia, ItemTitle } from "~/components/ui/item"
import { Book } from "lucide-react"

export default function Ordo() {
  useDocumentTitle("Ordo Realitas")

  return (
    <div>
      <main className="flex flex-wrap p-2">
        <Link to="/grimorio" className="aspect-square">
          <Item className="w-fit cursor-pointer flex-col hover:scale-105">
            <ItemMedia variant="icon" className="rounded bg-card p-4">
              <Book />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-base font-semibold">
                Grimório
              </ItemTitle>
            </ItemContent>
          </Item>
        </Link>
      </main>
      <img
        src="/ordo-realitas.svg"
        alt="Lodo Ordo Realitas"
        className="pointer-events-none absolute inset-0 z-0 m-auto size-2/5 opacity-25"
      />
    </div>
  )
}
