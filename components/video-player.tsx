"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { generateThumbnail, isPlaceholderThumbnail } from "@/lib/generate-thumbnail"

interface VideoPlayerProps {
  videoUrl: string
  thumbnail: string
  title: string
}

export function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [displayThumbnail, setDisplayThumbnail] = useState(thumbnail)
  const [isGenerating, setIsGenerating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()
  
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  useEffect(() => {
    const generateThumb = async () => {
      if (isPlaceholderThumbnail(thumbnail) && videoUrl && !isGenerating) {
        setIsGenerating(true)
        try {
          const generatedThumb = await generateThumbnail(videoUrl, 2)
          setDisplayThumbnail(generatedThumb)
        } catch (error) {
          console.error("Failed to generate thumbnail:", error)
          // Keep the placeholder if generation fails
        } finally {
          setIsGenerating(false)
        }
      }
    }

    generateThumb()
  }, [thumbnail, videoUrl, isGenerating])
  
  if (!videoUrl) {
    return <></>
      {/**
      <div className="w-full hidden px-4 py-8 flex justify-center items-center mx-auto">
        <p className="text-sm md:text-lg lg:text-2xl text-gray-400">Video not available</p>
      </div>
      */}
  }
  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-video bg-black rounded-lg overflow-hidden group py-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <div className="flex w-full h-full justify-center items-center mx-auto">
        <video ref={videoRef} className="w-full object-contain" poster={displayThumbnail} onClick={togglePlay}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Play overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Button
            size="sm"
            variant="ghost"
            className="h-10 w-10 md:h-16 md:w-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            onClick={togglePlay}
          >
            <Play className="h-6 w-6 md:h-8 md:w-8 text-white fill-white" />
          </Button>
        </div>
      )}

      {/* Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress bar */}
        <Slider value={[currentTime]} max={duration || 100} step={0.1} onValueChange={handleSeek} className="mb-3 md:mb-5 lg:mb-5" />

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-white hover:bg-white/20" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-5 w-5" />}
            </Button>

            <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-white hover:bg-white/20" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-5 w-5" />}
            </Button>

            <span className="text-xs md:text-sm lg:text-md text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 p-0 text-white hover:bg-white/20"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
