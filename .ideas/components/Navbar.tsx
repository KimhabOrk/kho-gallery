'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10" />
      
      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="https://kimhabork.site" className="flex items-center h-full py-1">
              <Image 
                src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
                width={128}
                height={34}
                priority
                alt="logo"
                className="h-[34px] w-full md:h-[40px] object-cover" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="https://kimhabork.site/projects"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="https://kimhabork.site/lookbook"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Lookbook
              </Link>
              <Link
                href="https://kimhabork.site/about"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="https://kimhabork.site/contact"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-white/40 pb-4 pt-2 space-y-2">
              <Link
                href="https://kimhabork.site/projects"
                className="block text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="https://kimhabork.site/lookbook"
                className="block text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Lookbook
              </Link>
              <Link
                href="https://kimhabork.site/about"
                className="block text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="https://kimhabork.site/contact"
                className="block text-white/80 hover:text-white transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
