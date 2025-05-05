"use client"

import { useEffect, useRef } from "react"
import { Braces, Code2, Figma, Database, Bot, Link as Line, LayoutGrid, GitMerge } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import ScrollVelocity from "@/components/ScrollVelocity"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS"]
  },
  {
    title: "UI Frameworks",
    description: "Creating beautiful interfaces with modern frameworks",
    icon: <LayoutGrid className="h-6 w-6" />,
    skills: ["Tailwind CSS", "Material UI", "shadcn/ui", "Bootstrap", "Styled-components"]
  },
  {
    title: "IoT Development",
    description: "Building smart solutions with IoT technologies",
    icon: <Bot className="h-6 w-6" />,
    skills: ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "IoT Protocols"]
  },
  {
    title: "Design Tools",
    description: "From concept to implementation with modern design tools",
    icon: <Figma className="h-6 w-6" />,
    skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
  },
  {
    title: "Development Tools",
    description: "Ensuring code quality and efficient workflows",
    icon: <GitMerge className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Jest", "Testing Library", "CI/CD", "Webpack"]
  },
  {
    title: "Other Skills",
    description: "Additional technologies and methodologies in my toolkit",
    icon: <Braces className="h-6 w-6" />,
    skills: ["Responsive Design", "Performance Optimization", "SEO", "Accessibility", "Agile/Scrum"]
  }
]

export function SkillsSection() {
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
      id="skills" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container px-4 mx-auto">
        <div 
          ref={headerRef}
          className="appear text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Skills
            {/* <ScrollVelocity texts={["anjay"]}  /> */}
          </h2>
          
          <p className="text-muted-foreground">
            My technical toolkit spans frontend and backend technologies, with a focus on creating exceptional user experiences.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="stagger-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <Card key={index} className="border overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="mb-2 text-primary">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Line className="h-3 w-3 text-primary" />
                      <span className="text-sm">{skill}</span>
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