import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { List, X, DownloadSimple } from "@phosphor-icons/react"
import resumePdf from "@/assets/documents/SajidAliResume.pdf"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = resumePdf
    link.download = "Sajid_Ali_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="bg-primary text-primary-foreground text-center text-xs md:text-sm py-2 px-4">
        Building beautiful, fast Flutter experiences across mobile, web, and desktop.
      </div>

      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-border/70 bg-white/92 backdrop-blur-xl"
      >
        <div className="container max-w-7xl px-6 py-3.5">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 text-left"
            >
              <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">Sajid Ali</p>
                <p className="text-[11px] md:text-xs text-muted-foreground leading-tight">Flutter Developer</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-semibold text-foreground/75 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={handleResumeDownload}
                size="sm"
                className="hidden md:inline-flex gap-2 rounded-full px-4"
              >
                <DownloadSimple weight="bold" />
                Resume
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <List size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <div className="lg:hidden border-b border-border bg-white">
          <div className="container px-6 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-base font-semibold text-foreground/80 hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={handleResumeDownload} className="mt-2 rounded-full">Download Resume</Button>
          </div>
        </div>
      )}
    </>
  )
}
