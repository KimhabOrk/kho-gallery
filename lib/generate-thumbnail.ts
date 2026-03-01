/**
 * Generates a thumbnail image from a video URL
 * @param videoUrl - The URL of the video
 * @param seekTime - Time in seconds to capture the frame (default: 2)
 * @returns Promise<string> - Base64 encoded image data URL
 */
export async function generateThumbnail(videoUrl: string, seekTime = 2): Promise<string> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video")
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")

    if (!context) {
      reject(new Error("Could not get canvas context"))
      return
    }

    video.crossOrigin = "anonymous"
    video.preload = "metadata"
    video.muted = true

    video.addEventListener("loadedmetadata", () => {
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Seek to the specified time
      video.currentTime = Math.min(seekTime, video.duration)
    })

    video.addEventListener("seeked", () => {
      try {
        // Draw the current frame to canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert canvas to base64 image
        const thumbnailDataUrl = canvas.toDataURL("image/jpeg", 0.8)

        // Clean up
        video.remove()
        canvas.remove()

        resolve(thumbnailDataUrl)
      } catch (error) {
        reject(error)
      }
    })

    video.addEventListener("error", (e) => {
      reject(new Error(`Video loading error: ${e.message || "Unknown error"}`))
    })

    video.src = videoUrl
  })
}

/**
 * Checks if a thumbnail URL is a placeholder
 */
export function isPlaceholderThumbnail(thumbnailUrl: string): boolean {
  return thumbnailUrl.includes("/placeholder.svg")
}
