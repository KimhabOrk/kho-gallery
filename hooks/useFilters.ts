"use client"

import { useState, useMemo } from "react"
import type { Collection } from "@/interfaces/collection"

export function useFilters(collections: Collection[]) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedSeason, setSelectedSeason] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const brands = useMemo(() => [...new Set(collections.map((c) => c.brand))], [collections])
  const seasons = useMemo(() => [...new Set(collections.map((c) => c.season))], [collections])
  const types = useMemo(() => [...new Set(collections.map((c) => c.type))], [collections])

  const filteredCollections = useMemo(() => {
    return collections.filter((collection) => {
      const matchesSearch = collection.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = selectedBrand === "all" || collection.brand === selectedBrand
      const matchesSeason = selectedSeason === "all" || collection.season === selectedSeason
      const matchesType = selectedType === "all" || collection.type === selectedType

      return matchesSearch && matchesBrand && matchesSeason && matchesType
    })
  }, [collections, searchTerm, selectedBrand, selectedSeason, selectedType])

  return {
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    selectedSeason,
    setSelectedSeason,
    selectedType,
    setSelectedType,
    brands,
    seasons,
    types,
    filteredCollections,
  }
}
