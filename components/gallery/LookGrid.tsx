"use client"

import Image from "next/image"
import type { Look, Collection } from "@/interfaces/collection"

interface LookGridProps {
  looks: Look[]
  collection: Collection
  onLookClick: (look: Look, collection: Collection) => void
}

export default function LookGrid({ looks, collection, onLookClick }: LookGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {looks.map((look, index) => (
        <div key={look.id} className="group cursor-pointer" onClick={() => onLookClick(look, collection)}>
          <div className="relative overflow-hidden rounded-sm bg-muted">
            <Image
              src={look.image || "/cover.gif"}
              alt={`Look ${index + 1}`}
              width={300}
              height={550}
              priority
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-sm"
            />
          </div>
          <p className="text-center mt-4 text-lg font-medium">Look {index + 1}</p>
        </div>
      ))}
    </div>
  )
}
