"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

function TrafficVisualization() {
  const [cars, setCars] = useState([
    { id: 1, position: -100, color: "bg-blue-500", delay: 0 },
    { id: 2, position: -100, color: "bg-red-500", delay: 2000 },
    { id: 3, position: -100, color: "bg-green-500", delay: 4000 },
  ])

  useEffect(() => {
    const animateCars = () => {
      setCars((prevCars) =>
        prevCars.map((car) => ({
          ...car,
          position: car.position >= 400 ? -100 : car.position + 2,
        })),
      )
    }

    const interval = setInterval(animateCars, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-48 bg-muted rounded-lg overflow-hidden">
      {/* Traffic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-yellow-400/20 to-red-400/20" />

      {/* Animated cars */}
      {cars.map((car, index) => (
        <div
          key={car.id}
          className={`absolute w-6 h-3 ${car.color} rounded transition-all duration-75 ease-linear`}
          style={{
            top: `${32 + index * 32}px`,
            left: `${car.position}px`,
          }}
        />
      ))}

      {/* Road lines */}
      <div className="absolute inset-0 flex flex-col justify-center">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-px bg-border mx-4 my-3" />
        ))}
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">The Urban Traffic Challenge</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rapid urbanization has led to unprecedented traffic congestion, costing cities billions and impacting
            quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Key Problems</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Average commuter spends 100+ hours annually in traffic
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">30% increased carbon emissions due to congestion</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Emergency vehicles delayed by up to 40%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Inefficient traffic light timing wasting millions in fuel
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <CardContent className="p-6">
                <TrafficVisualization />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
