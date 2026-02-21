import React from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
