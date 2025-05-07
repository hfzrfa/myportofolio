"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import RotatingText from "@/components/RotatingText";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (elementsRef.current) {
              elementsRef.current.classList.add("is-visible");
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="relative min-h-screen flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute inset-0 bg-gradient-to-r from-background to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8" ref={elementsRef}>
        <div className="max-w-4xl">
          {/* Available for freelance work */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for freelance work
          </motion.div> */}



          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.7 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Hafiz Rafie
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="block text-primary mt-2"
            >
              Aditya
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
          >
            {/* I am a Computer Technology student at Telkom University,
            specializing in web application development with HTML, CSS,
            JavaScript, and PHP. I am proficient in React.js for interactive web
            apps and have a basic understanding of IoT. I focus on building
            responsive, dynamic web applications and continuously improving my
            technical skills. */}
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">
                I'm Ready For Job
              </h1>
              <RotatingText
                texts={[
                  "Web Design",
                  "Web Development",
                  "Web Programming",
                  "Ai Development",
                  "IoT Development",
                  "Network Development",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-2xl text-2xl font-bold inline-flex transition-all duration-500"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="px-8 rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              Get in touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 rounded-full"
              onClick={() => scrollToSection("projects")}
            >
              View my work
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-10 w-10"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDownIcon className="h-5 w-5" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </motion.section>
  );
}
