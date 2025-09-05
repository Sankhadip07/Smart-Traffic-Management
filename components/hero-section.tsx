"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById("demo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Smart Traffic Management System</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
          Revolutionizing Urban Mobility with AI-Powered Traffic Optimization
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={scrollToDemo}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            View Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
