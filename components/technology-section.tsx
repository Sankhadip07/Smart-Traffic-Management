"use client"

import { Badge } from "@/components/ui/badge"

export default function TechnologySection() {
  const technologies = [
    { name: "AI / ML", color: "bg-blue-100 text-blue-800 dark:bg-blue-950/20 dark:text-blue-400" },
    { name: "IoT", color: "bg-green-100 text-green-800 dark:bg-green-950/20 dark:text-green-400" },
    { name: "Cloud", color: "bg-purple-100 text-purple-800 dark:bg-purple-950/20 dark:text-purple-400" },
    { name: "Big Data", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-400" },
    { name: "Real-time Analytics", color: "bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-400" },
    { name: "Computer Vision", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/20 dark:text-indigo-400" },
  ]

  return (
    <section id="tech" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Technology Stack</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Built with cutting-edge tools and platforms for maximum performance and scalability.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`${tech.color} px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
