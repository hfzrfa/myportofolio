"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const blogPosts = [
  {
    title: "Mengembangkan Aplikasi Web Modern",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    content: "Pengalaman saya dalam mengembangkan aplikasi web menggunakan teknologi modern seperti React dan Next.js. Pembelajaran dan tantangan yang dihadapi selama proses development.",
    tags: ["Web Development", "React", "Next.js"]
  },
  {
    title: "Workshop UI/UX Design",
    date: "2024-03-10",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    content: "Menghadiri workshop UI/UX design yang membahas tentang prinsip-prinsip desain modern dan praktik terbaik dalam menciptakan pengalaman pengguna yang optimal.",
    tags: ["UI/UX", "Design", "Workshop"]
  },
  {
    title: "Kolaborasi Project Open Source",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    content: "Pengalaman berpartisipasi dalam project open source, berkontribusi pada komunitas developer, dan pembelajaran berharga dari kolaborasi dengan developer dari berbagai negara.",
    tags: ["Open Source", "Collaboration", "Community"]
  }
]

export default function BlogPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) {
              headerRef.current.classList.add("is-visible")
            }
            if (postsRef.current) {
              postsRef.current.classList.add("is-visible")
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
    <main>
      <Navbar />
      <div className="min-h-screen pt-20">
        <section ref={sectionRef} className="py-20 md:py-32">
          <div className="container px-4 mx-auto">
            <div 
              ref={headerRef}
              className="appear text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Jurnal</h1>
              <p className="text-muted-foreground text-lg">
                Dokumentasi perjalanan, pengalaman, dan pembelajaran dalam dunia pengembangan web.
              </p>
            </div>

            <div 
              ref={postsRef}
              className="stagger-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}