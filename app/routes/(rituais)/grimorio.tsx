import { ChevronLeft, Edit, Pencil, Plus, Trash } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useDocumentTitle } from "usehooks-ts"
import { Header } from "~/components/header"
import { InputSearch } from "~/components/input-search"
import { Button } from "~/components/ui/button"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"

import { useRituals } from "~/hooks/use-ritual"
import { elementsInfo } from "~/shared/info"

import { rituais } from "~/database/rituais"
import { deleteRitual } from "~/lib/db"

function elementInfo(elemento: string) {
  return elementsInfo.find((element) => element.name === elemento)
}

export default function Grimorio() {
  useDocumentTitle("Grimório")

  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const rituals = useRituals()

  const allRituals = rituals.concat(rituais)

  const rituaisFiltrados = allRituals.filter((ritual) => {
    const term = search.toLowerCase()

    if (term.startsWith("elemento:")) {
      const elemento = term.replace("elemento:", "").trim()
      return ritual.element.toLowerCase() === elemento
    }

    if (term.startsWith("circulo:")) {
      const circle = Number(term.replace("circulo:", "").trim())
      return ritual.circle === circle
    }

    return ritual.name.toLowerCase().includes(term)
  })

  return (
    <main className="flex flex-col">
      <Header>
        <Button
          size="icon-lg"
          variant="outline"
          onClick={() => navigate("/ordo-realitas")}
        >
          <ChevronLeft />
        </Button>
        <InputSearch
          placeholder="Nome do ritual, elemento:morte ou circulo:2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <ul className="mb-4 grid grid-cols-1 items-stretch gap-2 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {rituaisFiltrados.map((ritual) => (
          <Link to={`/grimorio/${ritual.slug}`} key={ritual.name}>
            <Item
              variant="outline"
              className="group relative cursor-pointer hover:bg-muted"
            >
              <ItemMedia
                variant="image"
                className="aspect-square size-14 sm:size-full"
              >
                <img
                  src={ritual.reference}
                  alt="cover"
                  className="aspect-square"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{ritual.name}</ItemTitle>
                <ItemDescription className="line-clamp-2 min-h-10">
                  {ritual.description}
                </ItemDescription>
              </ItemContent>
              <ItemContent>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={`/assets/elementos/${ritual.element}.png`}
                      alt={ritual.element}
                      className="aspect-square size-8"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    {ritual.element}: {elementInfo(ritual.element)?.info}
                  </TooltipContent>
                </Tooltip>
              </ItemContent>
              <div className="absolute top-2 right-2 z-20 opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault() // Prevent navigation to detail page
                    navigate(`/grimorio/novo?slug=${ritual.slug}`) // Assuming ritual.id exists and is used for editing
                  }}
                >
                  <Edit className="size-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteRitual(ritual.slug)}
                >
                  <Trash className="size-4" />
                </Button>
              </div>
            </Item>
          </Link>
        ))}
      </ul>
      <Button
        className="absolute right-4 bottom-4"
        size="icon-lg"
        onClick={() => navigate("/grimorio/novo")}
      >
        <Plus />
      </Button>
    </main>
  )
}
