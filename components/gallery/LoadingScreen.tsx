"use client"

import { useEffect, useRef } from "react"

export default function LoadingScreen() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if video fails to play
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex mx-auto items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} className="w-screen h-screen object-cover opacity-40" autoPlay loop muted playsInline>
          <source src="/cover_vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center pb-8">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-pulse">RUNWAY</h1>
          <p className="text-3xl md:text-4xl text-gray-200 tracking-widest">GALLERY</p>
        </div>

        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>

        <p className="text-lg text-gray-300 animate-pulse">Loading luxury collections...</p>

        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-800 rounded-full h-1">
            <div className="bg-white h-1 rounded-full animate-pulse" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping opacity-20"></div>
      <div
        className="absolute bottom-32 right-32 w-1 h-1 bg-primary rounded-full animate-ping opacity-30"
        style={{ animationDelay: "1s" }}
      >
      </div>
      <div
        className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-25"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  )
}
