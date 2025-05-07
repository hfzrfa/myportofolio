"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const experienceData = [
  {
    company: "SMAN 1 Bintan Utara",
    position: "Network Engineer",
    location: "Bintan, Indonesia",
    period: "2023 - Present",
    description: "Working on network infrastructure and security for the school.",
    responsibilities: [
      "Developed and maintained network infrastructure",
    ],
    technologies: ["Mikrotik", "Ruijie", "TP-Link"]
  },
  {
    company: "SMPN 12 Bintan Utara",
    position: "Web Developer",
    location: "Remote",
    period: "2022 - Present",
    description: "Working with various clients to create custom web solutions and applications.",
    responsibilities: [
      "Built custom websites and web applications for clients",
      "Provided technical consultation and solutions",
      "Managed project timelines and client communications"
    ],
    technologies: ["JavaScript", "PHP", "WordPress", "HTML/CSS"]
  },
  
]

export function ExperienceSection() {
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
      id="experience" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/10"
    >
      <div className="container px-4 mx-auto">
        <div 
          ref={headerRef}
          className="appear text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey and work experience in software development.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="stagger-appear max-w-4xl mx-auto"
        >
          {experienceData.map((experience, index) => (
            <Card key={index} className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{experience.company}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-primary">{experience.position}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
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