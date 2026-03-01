"use client"

import type { Collection } from "@/interfaces/collection"
import CollectionGrid from "@/components/gallery/CollectionGrid"

interface SeasonSectionProps {
  season: string
  collections: Collection[]
}

export default function SeasonSection({ season, collections }: SeasonSectionProps) {
  return (
    <section className="mb-16">
      {/* Season Header */}
      <div className="mb-12 md:mb-16">
        <div className="flex mx-auto text-center items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wider">{season}</h2>
        </div>
      </div>

      {/* Collections Grid */}
      <CollectionGrid collections={collections} />
    </section>
  )
}
