"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "PKKMB 2024 Telkom University",
    date: "1 September 2024",
    images: [
      "https://github.com/hfzrfa/myportofolio/blob/main/public/PKKMB1.JPG?raw=true",
      "https://github.com/hfzrfa/myportofolio/blob/main/public/PKKMB2.jpg?raw=true",
    ],
    content: "PKKMB Telkom University 2024 adalah program pengenalan kampus bagi mahasiswa baru.",
    tags: ["Telkom University", "PKKMB"]
  },
  {
    title: "MAKRAB 2024 D3 Teknologi Komputer",
    date: "16 November 2024",
    images: [
      "https://github.com/hfzrfa/myportofolio/blob/main/public/Makrab1.JPG?raw=true",
      "https://github.com/hfzrfa/myportofolio/blob/main/public/Makrab2.JPG?raw=true",
      "https://github.com/hfzrfa/myportofolio/blob/main/public/Makrab3.JPG?raw=true",
    ],
    content: "MAKRAB merupakan acara untuk mempererat hubungan mahasiswa baru. Acara ini diadakan di alam terbuka dengan berbagai kegiatan menarik.",
    tags: ["MAKRAB", "D3 Teknologi Komputer"]
  },
  // {
  //   title: "Gunung Burangrang",
  //   date: "1 Januari 2025",
  //   images: [
  //     "https://github.com/hfzrfa/myportofolio/blob/main/public/gnb1.jpg?raw=true",
  //     "https://github.com/hfzrfa/myportofolio/blob/main/public/gnb2.jpg?raw=true",
  //     "https://github.com/hfzrfa/myportofolio/blob/main/public/gnb3.jpg?raw=true",
  //   ],
  //   content: "Pendakian seru dan menyenangkan di Gunung Burangrang untuk memulai tahun baru.",
  //   tags: ["Gunung Burangrang", "Pendakian"]
  // }

  {
    title: "Road to GDGoC APAC Solution Challenge 2025",
    date: "3 Maret 2025",
    images: [
      "/public/gdg1.jpg",
      "/public/gdg2.jpg",
    ],
    content: "Road to GDGoC APAC Solution Challenge 2025 adalah acara yang diadakan untuk mempersiapkan peserta dalam kompetisi GDGoC.",
    tags: ["GDGoC", "APAC Solution Challenge"]
  },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Jurnal</h1>
              <p className="text-muted-foreground text-lg">
               
              </p>
            </div>

            <div 
              ref={postsRef}
              className="stagger-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
                      <CarouselContent>
                        {post.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <div className="relative h-60 w-full">
                              <Image
                                src={image}
                                alt={`${post.title} - Image ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      {/* <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div> */}
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