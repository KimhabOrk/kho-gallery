"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterControlsProps {
  brands: string[]
  seasons: string[]
  types: string[]
  selectedBrand: string
  selectedSeason: string
  selectedType: string
  onBrandChange: (value: string) => void
  onSeasonChange: (value: string) => void
  onTypeChange: (value: string) => void
}

export default function FilterControls({
  brands,
  seasons,
  types,
  selectedBrand,
  selectedSeason,
  selectedType,
  onBrandChange,
  onSeasonChange,
  onTypeChange,
}: FilterControlsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-2">
      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        <div className="w-full rounded-lg">
          <Select value={selectedBrand} onValueChange={onBrandChange}>
            <SelectTrigger className="w-full h-10 md:h-12 bg-muted backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800 transition-colors text-xs md:text-sm">
              <SelectValue placeholder="All Brands" />
            </SelectTrigger>
            <SelectContent className="bg-muted border-gray-700 backdrop-blur-sm">
              <SelectItem value="all" className="text-white hover:bg-gray-800 text-xs md:text-sm">
                All Brands
              </SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand} className="text-white hover:bg-gray-800 text-xs md:text-sm">
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full rounded-lg">
          <Select value={selectedSeason} onValueChange={onSeasonChange}>
            <SelectTrigger className="w-full h-10 md:h-12 bg-muted backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800 transition-colors text-xs md:text-sm">
              <SelectValue placeholder="All Seasons" />
            </SelectTrigger>
            <SelectContent className="bg-muted border-gray-700 backdrop-blur-sm">
              <SelectItem value="all" className="text-white hover:bg-gray-800 text-xs md:text-sm">
                All Seasons
              </SelectItem>
              {seasons.map((season) => (
                <SelectItem key={season} value={season} className="text-white hover:bg-gray-800 text-xs md:text-sm">
                  <span className="block sm:hidden">
                    {season.length > 12 ? `${season.substring(0, 12)}...` : season}
                  </span>
                  <span className="hidden sm:block">{season}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full rounded-lg">
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger className="w-full h-10 md:h-12 bg-muted backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800 transition-colors text-xs md:text-sm">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="bg-muted border-gray-700 backdrop-blur-sm">
              <SelectItem value="all" className="text-white hover:bg-gray-800 text-xs md:text-sm">
                All Types
              </SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type} className="text-white hover:bg-gray-800 text-xs md:text-sm">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
