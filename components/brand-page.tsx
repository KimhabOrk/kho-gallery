"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Brand } from "@/interfaces/collection"
import BrandGrid from "@/components/gallery/BrandGrid"
import LoadingScreen from "@/components/gallery/LoadingScreen"
import { MarqueeQuotes } from "@/components/famous-quotes";

export default function BrandsGallery() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const brandsResponse = await import("@/data/brands.json")
        const brandsData = brandsResponse.default || brandsResponse

        setBrands(brandsData.brands)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load brands")
      } finally {
        setLoading(false)
      }
    }

    loadBrands()
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400 mb-4">{error}</p>
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="mb-6 pt-8 text-white hover:text-gray-200 hover:bg-gray-800"
       >
        <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
      </Button>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Brands</h1>
          <p className="text-xl text-gray-400">Explore luxury fashion houses and their collections</p>
        </div>

        {/* Brands Grid */}
        <BrandGrid brands={brands} />
      </div>
      <section className="py-8 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <MarqueeQuotes />
        </div>
      </section>
    </div>
  )
}
