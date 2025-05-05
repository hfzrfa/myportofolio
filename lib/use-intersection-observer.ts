"use client"

import { useEffect } from "react"

export function useIntersectionObserver() {
  useEffect(() => {
    const appearElements = document.querySelectorAll(".appear")
    const staggerElements = document.querySelectorAll(".stagger-appear")
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 }
    )
    
    appearElements.forEach((element) => {
      observer.observe(element)
    })
    
    staggerElements.forEach((element) => {
      observer.observe(element)
    })
    
    return () => {
      appearElements.forEach((element) => {
        observer.unobserve(element)
      })
      
      staggerElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])
}