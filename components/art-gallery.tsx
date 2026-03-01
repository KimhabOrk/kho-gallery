"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { PaintingCard } from "@/components/painting-card"
import { PaintingModal } from "@/components/painting-modal"
import { GalleryFilters } from "@/components/gallery-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Globe, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import paintingsData from "@/data/paintings.json"

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

export default function ArtGallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(26)

  const paintings = useMemo(() => {
    const shuffled = [...(paintingsData as Painting[])]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  },
[])

  const filteredPaintings = useMemo(() => {
    if (!searchTerm) return paintings

    const search = searchTerm.toLowerCase()
    return paintings.filter(
      (painting) =>
        painting.title.toLowerCase().includes(search) ||
        painting.artist.toLowerCase().includes(search) ||
        painting.nationality.toLowerCase().includes(search) ||
        painting.medium.toLowerCase().includes(search) ||
        painting.artistBio.toLowerCase().includes(search) ||
        painting.year.toString().includes(search),
    )
  }, [paintings, searchTerm])
  
  const totalPages = Math.ceil(filteredPaintings.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPaintings = filteredPaintings.slice(startIndex, endIndex)

  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleViewDetails = (painting: Painting) => {
    setSelectedPainting(painting)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPainting(null)
  }
 
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

const handleItemsPerPageChange = (value: string) => {
  setItemsPerPage(Number(value))
  setCurrentPage(1)
}

  const uniqueNationalities = [...new Set(paintings.map((p) => p.nationality))].length

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[35vh] lg:h-[60vh] bg-black px-4 text-center">
       <Image
          src="https://ik.imagekit.io/digiv3rse/assets/img/monet.jpg"
          alt="Phnom Penh Fashion Institute Art Gallery"
          fill
          className="object-cover opacity-60"
          priority
        /> 
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <div className="max-w-6xl mx-auto py-4 md:py-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Digital Art Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-6xl mx-auto leading-relaxed px-4">
              Discover masterpieces from around the world. A curated digital collection for art enthusiasts.
            </p>
          </div>
         </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

     {/* Main Content */}
      <section className="container mx-auto px-4 pt-8 pb-16">
        <div className="mb-6 md:mb-8">
          <GalleryFilters onSearchChange={setSearchTerm} />
        </div>

        {/* Results Summary and Items Per Page Selector */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-white text-sm md:text-base">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredPaintings.length)} of {filteredPaintings.length}{" "}
              paintings
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm md:text-base">Show:</span>
              <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="25" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-300">per page</span>
            </div>
          </div>
          {filteredPaintings.length !== paintings.length && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="text-primary hover:text-primary/80 self-start md:self-auto"
            >
              View All
            </Button>
          )}
        </div>

        {/* Gallery Grid */}
        {currentPaintings.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {currentPaintings.map((painting) => (
                <PaintingCard key={painting.id} painting={painting} onViewDetails={handleViewDetails} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(pageNum)}
                        className="w-10 h-10"
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>

                <p className="text-sm text-gray-300">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 md:py-16">
            <Palette className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-200 mb-2">No paintings found</h3>
            <p className="text-gray-500 mb-4 px-4">Try adjusting your search terms</p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}
      </section>

      <PaintingModal painting={selectedPainting} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
