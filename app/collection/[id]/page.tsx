"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Collection, Look } from "@/interfaces/collection"
import LookGrid from "@/components/gallery/LookGrid"
import LookCarousel from "@/components/gallery/LookCarousel"
import LoadingScreen from "@/components/gallery/LoadingScreen"
import { VideoPlayer } from "@/components/video-player"

export default function CollectionPage() {
  const params = useParams()
  const [collection, setCollection] = useState<Collection | null>(null)
  const [selectedLook, setSelectedLook] = useState<{ look: Look; collection: Collection } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const loadCollectionData = async () => {
      try {
        const collectionId = Number.parseInt(params.id as string)

        const collectionsResponse = await import("@/data/collections.json")
        const collectionsData = collectionsResponse.default || collectionsResponse

        const foundCollection = collectionsData.collections.find((c: Collection) => c.id === collectionId)

        if (!foundCollection) {
          setError("Collection not found")
          return
        }

        setCollection(foundCollection)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load collection data")
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      loadCollectionData()
    }
  }, [params.id])

  const openLookCarousel = (look: Look, collection: Collection) => {
    setSelectedLook({ look, collection })
  }

  const closeLookCarousel = () => {
    setSelectedLook(null)
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400 mb-4">{error || "Collection not found"}</p>
          <Link href="/">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const brandSlug = collection.brand.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="min-h-screen bg-black text-white">
      <Link href="/">
        <Button variant="ghost" className="mb-6 pt-8 text-white hover:text-gray-200 hover:bg-gray-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
        </Button>
      </Link>
      <div className="container mx-auto px-4 pt-4 pb-8">
        <div className="mb-10 text-center">
          <Link href={`/brand/${brandSlug}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 hover:underline">{collection.brand}</h1>
          </Link>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">{collection.season}</p>
        </div>
        
        <div className="w-full mx-auto">
          <VideoPlayer videoUrl={collection.videoUrl} title={collection.name}/>
        </div>
        {/* Collection Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative overflow-hidden rounded-lg bg-muted shadow-2xl">
            <Image
              src={collection.coverImage || "/cover.gif"}
              alt={`${collection.brand} ${collection.season}`}
              fill
              className="w-80 h-auto object-cover"
            />
          </div>
        </div>

        {/* Looks Section */}
        <div className="mb-8">
          <LookGrid looks={collection.looks} collection={collection} onLookClick={openLookCarousel} />
        </div>
      </div>

      {/* Look Carousel Modal */}
      {selectedLook && (
        <LookCarousel look={selectedLook.look} collection={selectedLook.collection} onClose={closeLookCarousel} />
      )}
    </div>
  )
}
