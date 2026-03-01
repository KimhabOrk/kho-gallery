"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Brand } from "@/interfaces/collection"
import { Card, CardContent } from "@/components/ui/card"

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  const [showFullBio, setShowFullBio] = useState(false)
  const brandSlug = brand.name.toLowerCase().replace(/\s+/g, "-")

  const truncateBio = (text: string, maxWords = 25) => {
    const words = text.split(" ")
    if (words.length <= maxWords) return text
    return words.slice(0, maxWords).join(" ") + "..."
  }

  return (
    <Card className="group bg-muted bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-800 text-white rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative aspect-video bg-black w-full rounded-sm flex items-center mx-auto justify-center mb-4 p-1">
            <Image
              src={brand.logo || "/brand.gif"}
              alt={`${brand.name} logo`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
        </div>
          <CardContent className="flex flex-col p-4 items-center text-center mb-4">
            <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-muted-foreground transition-colors">
              {brand.name}
            </h3>
            <div className="mb-6">
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                {showFullBio ? brand.bio : truncateBio(brand.bio)}
              </p>
                {brand.bio.split(" ").length > 25 && (
              <Button
                onClick={() => setShowFullBio(!showFullBio)}
                variant="link"
                className="text-muted-foreground/80 hover:text-white p-0 mt-2 text-xs"
               >
                {showFullBio ? "Read Less" : "Read More"}
              </Button>
             )}
            </div>
            
            <Link href={`/brand/${brandSlug}`} className="block">
              <Button className="w-full bg-gray-300 text-primary hover:bg-primary hover:text-white transition-colors font-medium">
                View Collections
              </Button>
            </Link>
        </CardContent>
    </Card>
  )
}
