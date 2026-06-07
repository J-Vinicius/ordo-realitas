import { useDocumentTitle } from "usehooks-ts"
import { Header } from "~/components/header"
import { InputSearch } from "~/components/input-search"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item"

export default function Grimorio() {
  useDocumentTitle("Grimório")
  return (
    <main className="flex flex-col gap-2">
      <Header>
        <InputSearch />
      </Header>
      <ul className="grid grid-cols-1 gap-2 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 60 }).map((_, index) => (
          <li key={index}>
            <Item variant="outline" className="cursor-pointer hover:bg-muted">
              <ItemMedia variant="image">
                <img
                  src="https://placehold.co/400"
                  alt="placeholder"
                  className="aspect-square object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Ritual</ItemTitle>
                <ItemDescription>Descricção do Ritual</ItemDescription>
              </ItemContent>
            </Item>
          </li>
        ))}
      </ul>
    </main>
  )
}
