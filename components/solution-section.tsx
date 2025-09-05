"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Satellite, Zap } from "lucide-react"

interface SolutionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconColor: string
}

function SolutionCard({ icon, title, description, iconColor }: SolutionCardProps) {
  return (
    <Card className="text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
      <CardContent className="p-6">
        <div className={`${iconColor} mb-4 flex justify-center`}>{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function SolutionSection() {
  return (
    <section id="solution" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Intelligent Solution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging AI and IoT to create adaptive, responsive traffic management systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard
            icon={<Brain className="h-12 w-12" />}
            iconColor="text-blue-600"
            title="AI-Powered Analytics"
            description="Machine learning algorithms predict traffic patterns and optimize signal timing in real-time."
          />
          <SolutionCard
            icon={<Satellite className="h-12 w-12" />}
            iconColor="text-green-600"
            title="IoT Integration"
            description="Network of sensors and cameras providing real-time traffic data across the city."
          />
          <SolutionCard
            icon={<Zap className="h-12 w-12" />}
            iconColor="text-yellow-600"
            title="Instant Response"
            description="Adapt immediately to accidents, emergencies, and changing traffic conditions."
          />
        </div>
      </div>
    </section>
  )
}
