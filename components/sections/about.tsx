"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import PP from "@/public/3.png";
import { motion } from "framer-motion";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0); // State to control text opacity

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add("is-visible");
            }
            if (imageRef.current) {
              imageRef.current.classList.add("is-visible");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handling scroll event for opacity change
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Calculate opacity based on scroll position
        const scrollProgress = 1 - (sectionTop / sectionHeight);
        setOpacity(Math.max(0.2, Math.min(1, scrollProgress))); // limit opacity range
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-40 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div ref={imageRef} className="appear w-full md:w-5/12 lg:w-1/2">
            <div className="relative w-full h-0 pb-[100%] max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src={PP}
                alt="Professional portrait"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 10vw, 50vw"
                className="absolute inset-0"
                priority={false}
                
              />
            </div>
          </div>

          <motion.div
            ref={contentRef}
            className={cn("appear w-full md:w-7/12 lg:w-1/2")}
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              Hi there! 🌟 I'm Hafiz Rafie Aditya, a web and IoT developer based
              in Bandung. I love designing websites that are not only beautiful,
              but also easy for people to use and safe. I'm also into designing
              cool and useful IoT systems.
            </p>
            <p className="text-muted-foreground mb-4">
              Right now, I'm studying for a Diploma in Computer Technology at
              Telkom University, with a focus on web development and IoT. I'm
              good at turning designs into easy-to-use interfaces, and I always
              try to make the user experience better with every project.
            </p>
            <p className="text-muted-foreground mb-6">
              I love finding solutions that look great and work well, paying
              close attention to every detail, and following the latest trends
              in the industry. When I'm not coding, I like exploring technology,
              music, networking, and sports to stay up to date with the digital
              world.
            </p>

            <Button variant="outline" className="rounded-lg">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
