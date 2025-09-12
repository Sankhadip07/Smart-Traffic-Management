"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function HeroSection() {
  const { theme, resolvedTheme } = useTheme()
  const isDarkMode = theme === "dark" || resolvedTheme === "dark"
  console.log("Current theme:", theme, "Resolved theme:", resolvedTheme);
  
  const scrollToDemo = () => {
    const element = document.getElementById("demo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Smart Traffic Management System</h1>
        <p className="text-xl md:text-2xl mb-8  max-w-4xl mx-auto">
          Revolutionizing Urban Mobility with AI-Powered Traffic Optimization
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={scrollToDemo}
            size="lg"
            className=" border-white bg-blue-600 hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 "
          >
            View Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white  hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
