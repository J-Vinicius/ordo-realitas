import { Dexie, type Table } from "dexie"
import type { Ritual } from "~/types/ritual"
import { rituais as staticRituais } from "~/database/rituais"

class RitualDB extends Dexie {
  rituals!: Table<Ritual>

  constructor() {
    super("ordem-db")

    // Definindo o 'slug' como a chave primária (Primary Key)
    this.version(1).stores({
      rituals: "slug, name, element, circle",
    })
  }
}

export const db = new RitualDB()

export async function createRitual(ritual: Ritual) {
  return await db.rituals.add(ritual)
}

export async function getRituals() {
  return await db.rituals.toArray()
}

export async function getRitual(slug: string) {
  const localRitual = await db.rituals.get(slug)

  if (localRitual) return localRitual

  const staticRitual = staticRituais.find((r) => r.slug === slug)

  return staticRitual || null
}

export async function getRitualsByElement(element: string) {
  return await db.rituals.where("element").equals(element).toArray()
}

export async function updateRitual(slug: string, data: Partial<Ritual>) {
  // Como o slug é a chave primária, podemos atualizar diretamente
  return await db.rituals.update(slug, data)
}

export async function deleteRitual(slug: string) {
  // Como o slug é a chave primária, podemos deletar diretamente
  return await db.rituals.delete(slug)
}
