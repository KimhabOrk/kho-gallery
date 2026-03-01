"use client"

import Image from "next/image"
import Link from "next/link"
import type { Collection } from "@/interfaces/collection"

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const brandSlug = collection.brand.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="group transform transition-all duration-300 hover:scale-105 rounded-sm">
        <Link href={`/collection/${collection.id}`}>
          <div className="relative overflow-hidden rounded-sm bg-muted mb-4 shadow-lg group-hover:shadow-2xl cursor-pointer">
              <Image
                src={collection.coverImage || "/cover.gif"}
                alt={`${collection.brand} ${collection.season}`}
                width={350}
                height={550}
                priority
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-center p-4 rounded-lg mx-auto hover:bg-muted">
              <h3 className="text-md font-bold mb-1 hover:text-primary transition-colors cursor-pointer">
                {collection.brand}
              </h3>
            </div>
        </Link>
   </div>
  )
}
