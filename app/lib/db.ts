import { Dexie, type Table } from "dexie"
import type { Ritual } from "~/shared/types"

class RitualDB extends Dexie {
  rituals!: Table<Ritual>

  constructor() {
    super("ordem-db")

    this.version(1).stores({
      rituals: "++id, name, element, circle",
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

export async function getRitual(id: number) {
  return await db.rituals.get(id)
}

export async function getRitualsByElement(element: string) {
  return await db.rituals.where("element").equals(element).toArray()
}

export async function updateRitual(id: number, data: Partial<Ritual>) {
  return await db.rituals.update(id, data)
}

export async function deleteRitual(id: number) {
  return await db.rituals.delete(id)
}
