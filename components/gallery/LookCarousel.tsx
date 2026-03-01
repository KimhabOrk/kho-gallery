"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Look, Collection } from "@/interfaces/collection"

interface LookCarouselProps {
  look: Look
  collection: Collection
  onClose: () => void
}

export default function LookCarousel({ look, collection, onClose }: LookCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(collection.looks.findIndex((l) => l.id === look.id))

  const nextLook = () => {
    if (currentIndex < collection.looks.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevLook = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevLook()
      if (e.key === "ArrowRight") nextLook()
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentIndex, onClose])

  const currentLook = collection.looks[currentIndex]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center mx-auto">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 hover:bg-gray-800"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <Button
            onClick={prevLook}
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 text-white hover:text-gray-200 hover:bg-gray-800"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {/* Next Button */}
        {currentIndex < collection.looks.length - 1 && (
          <Button
            onClick={nextLook}
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 text-white hover:text-gray-200 hover:bg-gray-800"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Image */}
        <div className="max-w-xl max-h-[90vh] mx-auto flex flex-col items-center rounded-sm pt-6">
          <Image
            src={currentLook.image || "/placeholder.svg"}
            alt={`Look ${currentIndex + 1}`}
            width={700}
            height={1200}
            priority
            className="max-w-[80%] lg:max-w-[70%] max-h-full object-cover"
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        </div>
        <div className="mt-4 md:mt-8 text-center">
          <p className="text-white text-xl font-medium">Look {currentIndex + 1}</p>
          <p className="text-gray-300 text-sm mt-1">
            {currentIndex + 1} of {collection.looks.length}
          </p>
        </div>
      </div>
    </div>
  )
}
