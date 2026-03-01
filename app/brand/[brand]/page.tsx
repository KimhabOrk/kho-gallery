"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, MapPin, User, Calendar} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Brand, Collection } from "@/interfaces/collection"
import BrandCollectionGrid from "@/components/gallery/BrandCollectionGrid"
import LoadingScreen from "@/components/gallery/LoadingScreen"

export default function BrandPage() {
  const params = useParams()
  const [brand, setBrand] = useState < Brand | null > (null)
  const [collections, setCollections] = useState < Collection[] > ([])
  const [showFullBio, setShowFullBio] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState < string | null > (null)
  
  useEffect(() => {
    const loadBrandData = async () => {
      try {
        const brandSlug = params.brand as string
        
        const [brandsResponse, collectionsResponse] = await Promise.all([
          import("@/data/brands.json"),
          import("@/data/collections.json"),
        ])
        
        const brandsData = brandsResponse.default || brandsResponse
        const collectionsData = collectionsResponse.default || collectionsResponse
        
        const brandName = brandSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
        const foundBrand = brandsData.brands.find((b: Brand) => b.name.toLowerCase() === brandName.toLowerCase())
        
        if (!foundBrand) {
          setError("Brand not found")
          return
        }
        
        const brandCollections = collectionsData.collections.filter((c: Collection) => c.brand === foundBrand.name)
        
        setBrand(foundBrand)
        setCollections(brandCollections)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load brand data")
      } finally {
        setLoading(false)
      }
    }
    
    if (params.brand) {
      loadBrandData()
    }
  }, [params.brand])
  
  if (loading) {
    return <LoadingScreen />
  }
  
  if (error || !brand) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400 mb-4">{error || "Brand not found"}</p>
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
        className="mb-6 pt-8 text-white hover:text-gray-200 hover:bg-gray-800 "
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
      </Button>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="text-center mb-12 px-2">
          <div className="mb-8 px-4 mx-auto">
            <Image
              src={brand.logo || "https://ik.imagekit.io/digiv3rse/assets/brand_mxqEosle4.gif"}
              alt={`${brand.name} logo`}
              width={440}
              height={200}
              className="mx-auto object-cover"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl md:text-6xl font-bold mb-6">{brand.name}</h1>
          
          <div className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent w-32" />
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4">
              <div className="flex flex-col items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-gray-300">Country</span>
              </div>
              <span className="text-white font-light">{brand.country}</span>
            </div>
            
            <div className="p-4">
              <div className="flex flex-col items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-gray-300">Founded</span>
              </div>
              <span className="text-white font-light">{brand.founded}</span>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 p-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary">Specialty</h2>
              <p className="text-base text-white font-light">{brand.specialty}</p>
            </div>
          </div>
          {/* Brand Bio */}
          <div className="max-w-6xl mx-auto">
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200">
              <span className="float-left text-6xl md:text-8xl font-bold leading-none pr-3 pt-1 text-white">
                {brand.bio.charAt(0)}
              </span>
              <p className="text-balance text-left">{brand.bio.slice(1)}</p>
            </div>
          </div>
          
        </div>

        {/* Collections Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{`${brand.name} Collections`}</h2>
          <BrandCollectionGrid collections={collections} />
        </div>

        {collections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No collections available for this brand.</p>
          </div>
        )}
      </div>
    </div>
  )
}