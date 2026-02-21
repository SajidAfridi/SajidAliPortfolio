import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Database, DeviceMobile, CloudArrowUp, GitBranch } from "@phosphor-icons/react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Mobile Development",
    icon: <DeviceMobile size={28} weight="duotone" />,
    skills: ["Flutter", "Dart", "Android Studio", "iOS Development"],
  },
  {
    name: "Backend & Database",
    icon: <Database size={28} weight="duotone" />,
    skills: ["Google Firebase", "SQLite", "ASP.NET", "Microsoft Azure"],
  },
  {
    name: "Programming",
    icon: <Code size={28} weight="duotone" />,
    skills: ["Dart", "C/C++", "TypeScript", "JavaScript"],
  },
  {
    name: "Tools & Platforms",
    icon: <CloudArrowUp size={28} weight="duotone" />,
    skills: ["Git", "GitHub", "Jira", "Teams"],
  },
  {
    name: "App Publishing",
    icon: <DeviceMobile size={28} weight="duotone" />,
    skills: ["Google Play Store", "Apple App Store", "Play Console"],
  },
  {
    name: "Integrations & APIs",
    icon: <GitBranch size={28} weight="duotone" />,
    skills: ["Google Maps", "Google Ads", "Stripe", "Single Sign-On", "IoT"],
  },
]

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <Card className="h-full p-6 border border-border/80 bg-white shadow-[0_8px_26px_rgba(53,96,167,0.07)]">
        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
          {category.icon}
        </div>

        <h3 className="text-xl font-bold mb-3">{category.name}</h3>

        <ul className="space-y-2">
          {category.skills.map((skill) => (
            <li key={skill} className="text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-24 bg-white border-y border-border/70">
      <div className="container max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-bold text-primary tracking-wide mb-3">CAPABILITIES</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Technical strengths for production apps</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            End-to-end Flutter expertise from architecture and integrations to release and maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
