"use client"

import { useEffect, useRef } from "react"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play video with error handling
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.log("Video autoplay failed:", error)
        }
      }
      playVideo()
    }
  }, [])

  return (
    <div className="relative w-full h-[55vh] md:h-[45vh] lg:h-[60vh] overflow-hidden bg-black">
      {/* HTML5 Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://ik.imagekit.io/digiv3rse/assets/videos/versace_fall_winter-2025_26.mp4" type="video/mp4" />
        <source src="https://github.com/ppfi-edu/assets/raw/refs/heads/main/videos/Versace-2025-26.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 h-10 md:h-14 lg:h-16 bg-gradient-to-b from-black via-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl text-white md:text-5xl lg:text-6xl font-bold text-white mb-4">Runway Gallery</h1>
          <p className="absolute bottom-2 right-2 uppercase text-gray-500 text-xs md:text-sm lg:text-md z-10">KIMHAB ORK</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-11 md:h-24 lg:h-12 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}
