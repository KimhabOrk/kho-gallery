"use client"

import { motion } from "framer-motion"
import { Search, Home, ArrowLeft, Scissors, Palette, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated fabric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-2 h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-primary to-gray-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* 404 with fashion elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <h1 className="text-9xl z-10 md:text-[12rem] font-bold text-white">
                404
              </h1>
              {/* Floating fashion icons */}
              <motion.div
                animate={{ rotate: 360, y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-gray-200 rounded-full flex items-center justify-center"
              >
                <Scissors className="w-6 h-6 text-black" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360, y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-3 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
              >
                <Palette className="w-6 h-6 text-black" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            Page Not Found
          </motion.h2>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl font-light mb-8 text-primary"
          >
            Phnom Penh Fashion Institute
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Oops! It seems like this page has gone out of style. Don't worry, even the best designers sometimes lose
            their way. Let's get you back on the runway.
          </motion.p>
        
          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-gray-200 text-white font-semibold hover:from-primary to-pink-500 transition-all duration-300"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2 " />
                Go Home
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating design elements */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-32 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [20, -20, 20],
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-20 h-40 bg-gradient-to-t from-pink-400/20 to-transparent rounded-full blur-sm"
        />
      </div>
    </div>
  )
}
