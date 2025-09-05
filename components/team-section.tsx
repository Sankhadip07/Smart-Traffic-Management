"use client"

import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <Card className="text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
      <CardContent className="p-6">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} - ${role}`}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-muted"
        />
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm">{role}</p>
      </CardContent>
    </Card>
  )
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sankhadip Singha Roy",
      role: "Electrical Engineering Student",
      image: "/male-engineer1-headshot.png",
    },
    {
      name: "Sayan Debnath",
      role: "Electrical Engineering Student",
      image: "/male-engineer-headshot.png",
    },
    {
      name: "Mitesh Malas",
      role: "Electrical Engineering Student",
      image: "/male-engineer-headshot.png",
    },
    {
      name: "Samarjit Halder",
      role: "Electrical Engineering Student",
      image: "/male-engineer-headshot.png",
    },
    {
      name: "Mahasweta Bhowmik",
      role: "Electrical Engineering Student",
      image: "/professional-headshot-female-engineer.jpg",
    },
    {
      name: "Rahul Kumar Bharati",
      role: "Electrical Engineering Student",
      image: "/male-engineer1-headshot.png",
    },
  ]

  return (
    <section id="team" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate group of innovators driving smart traffic solutions for the future of urban mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>

        {/* Additional team info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                We are dedicated to revolutionizing urban transportation through innovative AI-powered solutions. Our
                interdisciplinary team combines expertise in electrical engineering, machine learning, and urban
                planning to create smarter, more efficient cities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
