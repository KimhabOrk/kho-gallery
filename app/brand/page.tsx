import BrandsGallery from "@/components/brand-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fashion Brands",
}

export default function BrandsPage() {
  return <BrandsGallery />
}
