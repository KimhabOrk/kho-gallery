"use client"

import { useState, useEffect } from "react"
import type { Collection, Brand } from "@/interfaces/collection"

export function useCollections() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [collectionsModule, brandsModule] = await Promise.all([
          import("@/data/collections.json"),
          import("@/data/brands.json"),
        ])

        const collectionsData = collectionsModule.default || collectionsModule
        const brandsData = brandsModule.default || brandsModule

        setCollections(collectionsData.collections)
        setBrands(brandsData.brands)
      } catch (err) {
        console.error("Error loading data:", err)
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { collections, brands, loading, error }
}
