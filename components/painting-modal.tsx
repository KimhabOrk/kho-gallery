"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, Share2 } from "lucide-react"
import { useState } from "react"

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

interface PaintingModalProps {
  painting: Painting | null
  isOpen: boolean
  onClose: () => void
}

export function PaintingModal({ painting, isOpen, onClose }: PaintingModalProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  if (!painting) return null

  const handleShare = async () => {
    const shareData = {
      title: `${painting.title} by ${painting.artist}`,
      text: `Check out this artwork: ${painting.title} by ${painting.artist} (${painting.year})`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`)
      }
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose} className="pb-4 md:pb-6">
      <DialogContent className="max-w-4xl max-h-[90vh] md:max-w-7xl overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pt-6 pb-2 md:pb-4">
        {/**  <DialogTitle className="text-lg sm:text-xl text-start font-bold">{painting.title}</DialogTitle> **/}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" onClick={() => setIsFavorited(!isFavorited)} className="h-8 w-8 p-0">
              <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button size="sm" variant="ghost" onClick={handleShare} className="h-8 w-8 p-0">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg flex bg-muted">
            <Image src={painting.imageUrl || "/placeholder.svg"} alt={painting.title} fill className="object-fit" />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{painting.title}</h2>
              <p className="text-md">by {painting.artist}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{painting.nationality}</Badge>
              <Badge variant="outline">{painting.year}</Badge>
            </div>

            <Separator />

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">About the Artist</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{painting.artistBio}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold">Medium</h4>
                  <p className="text-gray-300">{painting.medium}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Dimensions</h4>
                  <p className="text-gray-300">{painting.dimensions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
