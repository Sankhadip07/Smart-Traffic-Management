"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  label: string
  color: string
  bgColor: string
}

function StatCard({ value, label, color, bgColor }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isVisible, setIsVisible] = useState(true)
  const cardRef = useRef<HTMLDivElement>(null)

  const animateValue = useCallback(() => {
    const hasPercent = value.includes("%")
    const hasL = value.includes("L")
    const numericValue = Number.parseFloat(value.replace(/[^\d.]/g, ""))

    if (isNaN(numericValue)) return

    let current = 0
    const increment = numericValue / 50
    const suffix = hasPercent ? "%" : hasL ? "L" : ""

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(numericValue + suffix)
        clearInterval(timer)
      } else {
        const rounded = numericValue % 1 === 0 ? Math.round(current) : current.toFixed(1)
        setDisplayValue(rounded + suffix)
      }
    }, 20)
  }, [value])

  useEffect(() => {
    animateValue()
  }, [animateValue])

  return (
    <Card
      ref={cardRef}
      className={`${bgColor} transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg cursor-pointer`}
    >
      <CardContent className="p-6 text-center">
        <div className={`text-3xl font-bold ${color} mb-2`}>{displayValue}</div>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}

export default function StatisticsSection() {
  return (
    <section className="bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            value="40%"
            label="Traffic Reduction"
            color="text-blue-600"
            bgColor="bg-blue-50 dark:bg-blue-950/20"
          />
          <StatCard
            value="25%"
            label="Fuel Savings"
            color="text-green-600"
            bgColor="bg-green-50 dark:bg-green-950/20"
          />
          <StatCard
            value="60%"
            label="Faster Response"
            color="text-purple-600"
            bgColor="bg-purple-50 dark:bg-purple-950/20"
          />
          <StatCard
            value="85%"
            label="Accuracy Rate"
            color="text-orange-600"
            bgColor="bg-orange-50 dark:bg-orange-950/20"
          />
        </div>
      </div>
    </section>
  )
}
