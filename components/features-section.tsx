"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Ambulance, AlertTriangle, Building } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <div className="text-white">{icon}</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive traffic management solutions designed for modern cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Lightbulb className="h-6 w-6" />}
            title="Smart Traffic Signals"
            description="Adaptive signal timing based on real-time traffic flow data, reducing wait times by up to 40%."
          />
          <FeatureCard
            icon={<Ambulance className="h-6 w-6" />}
            title="Emergency Priority"
            description="Automated green corridor creation for emergency vehicles, reducing response times significantly."
          />
          <FeatureCard
            icon={<AlertTriangle className="h-6 w-6" />}
            title="Accident Detection"
            description="AI-powered accident detection and instant alerts to authorities for faster action."
          />
          <FeatureCard
            icon={<Building className="h-6 w-6" />}
            title="Scalable for Smart Cities"
            description="Easily integrates with existing infrastructure and scales as urban needs grow."
          />
        </div>
      </div>
    </section>
  )
}
