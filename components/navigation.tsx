"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, TrafficCone } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-card shadow-lg fixed w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrafficCone className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-semibold text-foreground">Smart Traffic AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-muted-foreground hover:text-blue-600 transition"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-muted-foreground hover:text-blue-600 transition"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-blue-600 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="text-muted-foreground hover:text-blue-600 transition"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-muted-foreground hover:text-blue-600 transition"
            >
              Team
            </button>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>

            {/* Theme Toggle */}
            <Button variant="outline" size="sm" onClick={toggleTheme} className="p-2 bg-transparent">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t">
              <button
                onClick={() => scrollToSection("problem")}
                className="block px-3 py-2 text-muted-foreground hover:text-blue-600 transition w-full text-left"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className="block px-3 py-2 text-muted-foreground hover:text-blue-600 transition w-full text-left"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-muted-foreground hover:text-blue-600 transition w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className="block px-3 py-2 text-muted-foreground hover:text-blue-600 transition w-full text-left"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block px-3 py-2 text-muted-foreground hover:text-blue-600 transition w-full text-left"
              >
                Team
              </button>
              <div className="flex gap-2 px-3 py-2">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm">Sign Up</Button>
                <Button variant="outline" size="sm" onClick={toggleTheme} className="p-2 bg-transparent">
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
