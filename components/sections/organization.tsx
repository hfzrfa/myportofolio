"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const organizationData = [
  {
    name: "Google Developer Student Clubs",
    role: "Member",
    period: "2024 - Present",
    description: "Leading technical workshops and organizing developer-focused events.",
    achievements: [
      "Organized 10+ technical workshops",
    ],
    skills: ["Leadership", "Public Speaking", "Event Management"]
  },
  {
    name: "HIMATEK",
    role: "Member",
    period: "2024 - 2027",
    description: "A student organization focused on technology and innovation.",
    achievements: [
    ],
    skills: ["Team Management", "Project Planning", "Web Development"]
  },
    {
        name: "IKRAR (Ikatan Anak Riau dan Kepulauan Riau)",
        role: "Member",
        period: "2024 - 2027",
        description: "A Student Organization focused on building community and getting involved in projects.",
        achievements: [
        ],
        skills: ["Team Management", "Project Planning",]
    }
]

export function OrganizationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) {
              headerRef.current.classList.add("is-visible")
            }
            if (cardsRef.current) {
              cardsRef.current.classList.add("is-visible")
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      id="organization" 
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="container px-4 mx-auto">
        <div 
          ref={headerRef}
          className="appear text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Organizations</h2>
          <p className="text-muted-foreground">
            My involvement in various organizations and leadership roles.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="stagger-appear max-w-4xl mx-auto"
        >
          {organizationData.map((org, index) => (
            <Card key={index} className="mb-8 border-0 shadow-lg bg-secondary/50 rounded-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{org.name}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>{org.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-primary">{org.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{org.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {org.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="h-4 w-4 text-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {org.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}