"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function HeaderButton() {
  const pathname = usePathname()
  return (
    <div className="w-full max-w-6xl mx-auto px-2">
      <div className="flex mx-auto justify-center items-center">
        <div className="grid grid-cols-2 gap-6">
           <Link href="/" className="w-full rounded-lg">
              <Button
                variant="outline"
                className="text-white w-full h-10 bg-muted hover:text-primary hover:bg-gray-800"
              >
                Collections
              </Button>
           </Link>
           <Link href="/brand" className="w-full rounded-lg">
              <Button
                variant="outline"
                className="text-white w-full h-10 bg-muted hover:text-primary hover:bg-gray-800"
              >
                Brands
              </Button>
           </Link>
        </div>
      </div>
    </div>
  )
}