"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const educationData = [
  {
    institution: "Telkom University",
    degree: "Diploma in Computer Technology",
    period: "2024 - 2027",
    description: "Studying Computer Technology with a focus on web development and Internet of Things.",
    achievements: [
      "IPK: 3.5/4.0",
    ]
  },
  {
    institution: "SMAN 1 Bintan Utara",
    degree: "Science Major",
    period: "2021 - 2024",
    description: "Completed high school education in science major with a grade point average of 88,5.",
    achievements: [
      "Graduated with distinction",
      "Winner of regional design competition",
      "Developed school management system"
    ]
  }
]

export function EducationSection() {
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
      id="education" 
      ref={sectionRef}
      className="py-20 md:py-32 "
    >
      <div className="container px-4 mx-auto">
        <div 
          ref={headerRef}
          className="appear text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
          <p className="text-muted-foreground">
            My academic journey and achievements in the field of technology and software development.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="stagger-appear max-w-4xl mx-auto"
        >
          {educationData.map((education, index) => (
            <Card key={index} className="mb-8 border-0 shadow-lg bg-secondary/50 rounded-xl glow-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{education.institution}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-primary">{education.degree}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{education.description}</p>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
