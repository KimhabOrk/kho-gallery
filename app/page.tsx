"use client"

import type { Collection } from "@/interfaces/collection"
import { useCollections } from "@/hooks/useCollections"
import { useFilters } from "@/hooks/useFilters"
import SearchBar from "@/components/gallery/SearchBar"
import FilterControls from "@/components/gallery/FilterControls"
import SeasonSection from "@/components/gallery/SeasonSection"
import LoadingScreen from "@/components/gallery/LoadingScreen"
import HeaderButton from "@/components/gallery/HeadButton"
import Image from "next/image";
import VideoHero from "@/components/videoHero"

export default function Home() {
  const { collections, loading, error } = useCollections()

  const {
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    selectedSeason,
    setSelectedSeason,
    selectedType,
    setSelectedType,
    brands: filterBrands,
    seasons,
    types,
    filteredCollections,
  } = useFilters(collections)

  // Group collections by season
  const collectionsBySeason = filteredCollections.reduce(
    (acc, collection) => {
      const season = collection.season
      if (!acc[season]) {
        acc[season] = []
      }
      acc[season].push(collection)
      return acc
    },
    {} as Record<string, Collection[]>,
  )

  // Sort seasons (most recent first)
  const sortedSeasons = Object.keys(collectionsBySeason).sort((a, b) => {
    const getSeasonOrder = (season: string) => {
      const year = Number.parseInt(season.match(/\d{4}/)?.[0] || "0")
      const isSpring = season.toLowerCase().includes("spring")
      return year * 10 + (isSpring ? 1 : 2)
    }
    return getSeasonOrder(b) - getSeasonOrder(a)
  })

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400">Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <VideoHero />
      <section className="flex flex-col items-center justify-center text-center px-4 md:px-6 py-4 md:py-12">
        <div className="mb-12 mt-6 space-y-4 flex flex-col gap-2 md:gap-4 justify-center items-center mx-auto">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <HeaderButton />
          <FilterControls
            brands={filterBrands}
            seasons={seasons}
            types={types}
            selectedBrand={selectedBrand}
            selectedSeason={selectedSeason}
            selectedType={selectedType}
            onBrandChange={setSelectedBrand}
            onSeasonChange={setSelectedSeason}
            onTypeChange={setSelectedType}
          />
        </div>
        <div className="text-center flex justify-center items-center mx-auto">
          <h2 className="text-2xl text-white font-semibold">Highlights</h2>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-12">
        {/* Collections by Season */}
        <div className="space-y-16">
          {sortedSeasons.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No collections found matching your criteria.</p>
            </div>
          ) : (
            sortedSeasons.map((season) => (
              <SeasonSection key={season} season={season} collections={collectionsBySeason[season]} />
            ))
          )}
        </div>
      </section>
    </div>
  )
}
