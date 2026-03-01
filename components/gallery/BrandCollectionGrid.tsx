"use client"

import Image from "next/image"
import Link from "next/link"
import type { Collection } from "@/interfaces/collection"

interface BrandBrandCollectionCardProps {
  collection: Collection
}

export function BrandCollectionCard({ collection }: BrandCollectionCardProps) {
  const brandSlug = collection.brand.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="group transform transition-all duration-300 hover:scale-105 rounded-md">
        <Link href={`/collection/${collection.id}`}>
          <div className="relative overflow-hidden rounded-sm bg-muted mb-4 shadow-lg group-hover:shadow-2xl cursor-pointer">
              <Image
                src={collection.coverImage || "/cover.gif"}
                alt={`${collection.brand} ${collection.season}`}
                width={350}
                height={550}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          <div className="text-center">
            <h3 className="text-sm md:text-lg font-bold mb-1 hover:text-gray-200 transition-colors cursor-pointer">
              {collection.season}
            </h3>
          </div>
      </Link>
   </div>
  )
}

interface BrandBrandCollectionGridProps {
  collections: Collection[]
}

export default function BrandCollectionGrid({ collections }: BrandCollectionGridProps) {
  if (collections.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 text-lg">No collections found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
      {collections.map((collection) => (
        <BrandCollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  )
}
