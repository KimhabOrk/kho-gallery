"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Share2 } from "lucide-react"

interface Painting {
  id: number
  title: string
  artist: string
  artistBio: string
  nationality: string
  year: number
  medium: string
  dimensions: string
  imageUrl: string
}

interface PaintingCardProps {
  painting: Painting
  onViewDetails: (painting: Painting) => void
}

export function PaintingCard({ painting, onViewDetails }: PaintingCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  
  return (
    <Card
      className="group relative overflow-hidden bg-muted border-0 shadow-lg hover:shadow-2xl shadow-gray-700/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(painting)}
    >
      <div className="relative">
        <div className="flex flex-col mx-auto aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg"></div>
        <Image
          src={painting.imageUrl || "/placeholder.svg?height=400&width=320&query=elegant painting artwork"}
          alt={painting.title}
          fill
          className={`object-fit transition-all h-full w-full duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-bold text-white text-xl mb-1 text-balance leading-tight">{painting.title}</h3>
            <p className="text-gray-200 text-sm font-medium">{painting.artist}</p>
          </div>
        </div>

        <div
          className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-black/90 hover:bg-black backdrop-blur-sm border-0 shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              setIsFavorited(!isFavorited)
            }}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-black/90 hover:bg-black backdrop-blur-sm border-0 shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              // Share functionality would go here
            }}
          >
            <Share2 className="h-4 w-4 text-gray-300" />
          </Button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-white text-lg mb-1 text-balance leading-tight">
              {painting.title}
            </h3>
            <p className="text-gray-300 text-sm font-medium">by {painting.artist}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant="secondary"
              className="bg-blue-500/60 text-gray-300 border-0 font-medium text-xs px-2 py-1"
            >
              {painting.year}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-blue-500/60 text-gray-300 border-0 font-medium text-xs px-2 py-1"
            >
              {painting.nationality}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-card/80 text-gray-300 border-0 font-medium text-xs px-2 py-1 line-clamp-3"
            >
              {painting.medium}
            </Badge>
          </div>

          <Button
            size="sm"
            className="w-full h-9 text-sm font-semibold bg-primary hover:bg-primary/90 text-white border-0 shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              onViewDetails(painting)
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>
    </Card>
  )
}