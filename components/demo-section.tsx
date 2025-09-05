"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calculator, Activity } from "lucide-react"

export default function DemoSection() {
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [result, setResult] = useState("ETA: -- | Fuel: -- | Saved: --")
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateRoute = () => {
    if (!fromLocation.trim() || !toLocation.trim()) {
      setResult("Please enter both locations")
      return
    }

    setIsCalculating(true)

    // Simulate API call delay
    setTimeout(() => {
      // Generate random realistic values
      const eta = Math.floor(Math.random() * 20 + 5)
      const fuel = (eta * 0.08).toFixed(1)
      const saved = (eta * 0.12).toFixed(1)

      setResult(`ETA: ${eta} min | Fuel: ${fuel} L | Saved: ${saved} L`)
      setIsCalculating(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateRoute()
    }
  }

  return (
    <section id="demo" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Live Demo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our AI-powered traffic optimization in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Route Estimator */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Calculator className="h-5 w-5" />
                Route Estimator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="From (e.g., Downtown Mall)"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="To (e.g., Airport Terminal)"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                onClick={calculateRoute}
                disabled={isCalculating}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                {isCalculating ? "Calculating..." : "Calculate Optimal Route"}
              </Button>

              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">{result}</p>
              </div>
            </CardContent>
          </Card>

          {/* Live Congestion Heatmap */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Activity className="h-5 w-5" />
                Congestion Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-br from-green-100 via-yellow-100 to-red-100 dark:from-green-950/20 dark:via-yellow-950/20 dark:to-red-950/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simulated traffic data points */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div
                  className="absolute top-8 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute bottom-6 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-4 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Center content */}
                <div className="text-center">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Real-time Traffic Data</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>Light
                    <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-1 ml-3"></span>Moderate
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1 ml-3"></span>Heavy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Dashboard Stats */}
        <div className="mt-12">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Live System Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">1,247</div>
                  <div className="text-sm opacity-90">Vehicles Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">87%</div>
                  <div className="text-sm opacity-90">System Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2.4min</div>
                  <div className="text-sm opacity-90">Avg Wait Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
