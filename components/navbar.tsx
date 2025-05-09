"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Users,
  Code2,
  Mail,
  Book,
  Github,
  Instagram,
  Linkedin,
  Globe,
  Menu,
  X
} from "lucide-react"
import { Button } from "./ui/button"

const navItems = [
  { href: "/#home", label: "Home", icon: <Home className="h-5 w-5" /> },
  { href: "/#about", label: "About", icon: <User className="h-5 w-5" /> },
  { href: "/#education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
  { href: "/#experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
  { href: "/#organization", label: "Organization", icon: <Users className="h-5 w-5" /> },
  { href: "/#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  { href: "/blog", label: "Blog", icon: <Book className="h-5 w-5" /> }
]

const socialLinks = [
  { href: "https://github.com/hfzrfa", icon: <Github className="h-5 w-5" />, label: "GitHub" },
  { href: "https://instagram.com/hfzrfa", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
  { href: "https://linkedin.com/in/hfzrfa", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isHidden, setIsHidden] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      setLastScrollY(window.scrollY)

      

      if (pathname === "/") {
        const sections = navItems
          .filter(item => item.href.startsWith("/#"))
          .map(item => item.href.substring(2))
        
        for (const section of sections.reverse()) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, pathname])

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        router.push("/")
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(href.substring(2))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      } else {
        const element = document.getElementById(href.substring(2))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      router.push(href)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map(({ href, label, icon }) => (
            <button
              key={href}
              onClick={() => handleNavigation(href)}
              className={cn(
                "flex items-center gap-3 text-lg font-medium transition-colors",
                href.startsWith("/#") && activeSection === href.substring(2) && "text-primary",
                href === pathname && "text-primary"
              )}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
          
          <div className="flex gap-6 mt-8">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={label}
              >
                {icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <header
        className={cn(
          "fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 hidden md:block",
          isHidden ? "translate-x-[200%]" : "translate-x-0"
        )}
      >
        <nav className="flex flex-col items-center gap-8 bg-background/80 backdrop-blur-xl p-4 rounded-full shadow-lg">
          {navItems.map(({ href, label, icon }) => (
            <button
              key={href}
              onClick={() => handleNavigation(href)}
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 group",
                href.startsWith("/#") && activeSection === href.substring(2) && "text-primary",
                href === pathname && "text-primary"
              )}
            >
              {icon}
              <span className="absolute right-full mr-4 px-2 py-1 rounded-md bg-background shadow-md text-sm opacity-0 -translate-x-2 transition-all duration-300 whitespace-nowrap pointer-events-none group-hover:opacity-100 group-hover:translate-x-0">
                {label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 mt-8 bg-background/80 backdrop-blur-md p-4 rounded-full shadow-lg">
          {socialLinks.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 group"
            >
              {icon}
              <span className="absolute right-full mr-4 px-2 py-1 rounded-md bg-background shadow-md text-sm opacity-0 -translate-x-2 transition-all duration-300 whitespace-nowrap pointer-events-none group-hover:opacity-100 group-hover:translate-x-0">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </header>
    </>
  )
}