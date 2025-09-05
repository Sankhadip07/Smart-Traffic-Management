"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import StatisticsSection from "@/components/statistics-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import FeaturesSection from "@/components/features-section"
import TechnologySection from "@/components/technology-section"
import DemoSection from "@/components/demo-section"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function SmartTrafficSystem() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TechnologySection />
      <DemoSection />
      <TeamSection />
      <Footer />
    </div>
  )
}
