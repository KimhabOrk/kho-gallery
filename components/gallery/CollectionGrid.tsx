"use client"

import type { Collection } from "@/interfaces/collection"
import CollectionCard from "./CollectionCard"

interface CollectionGridProps {
  collections: Collection[]
}

export default function CollectionGrid({ collections }: CollectionGridProps) {
  if (collections.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 text-lg">No collections found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-8">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  )
}
