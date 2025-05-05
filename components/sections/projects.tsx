"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring product filtering, cart functionality, and Stripe payment integration.",
    image: "https://images.pexels.com/photos/5076515/pexels-photo-5076515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "A comprehensive analytics dashboard with real-time data visualization, user management, and customizable reporting features.",
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing content, blog posts, and social media captions based on user prompts.",
    image: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "OpenAI API", "Tailwind", "Vercel AI SDK"],
    demoUrl: "#",
    githubUrl: "#"
  }
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) {
              headerRef.current.classList.add("is-visible")
            }
            if (projectsRef.current) {
              projectsRef.current.classList.add("is-visible")
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
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/50"
    >
      <div className="container px-4 mx-auto">
        <div 
          ref={headerRef}
          className="appear text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-muted-foreground">
            Explore a selection of my recent work showcasing my development skills and creative approach to problem-solving.
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className="stagger-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-0 shadow-md">
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link href={project.demoUrl} passHref>
                    <Button size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} passHref>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Github className="h-4 w-4" /> Code
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}