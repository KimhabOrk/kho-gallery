"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface GalleryFiltersProps {
  onSearchChange: (search: string) => void
}

export function GalleryFilters({ onSearchChange }: GalleryFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-300" />
        <Input
          placeholder="Search paintings, artists, or styles..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-muted/50 border-border focus:border-primary"
        />
      </div>
    </div>
  )
}
