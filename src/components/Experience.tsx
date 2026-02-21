import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "@phosphor-icons/react"

interface ExperienceItem {
  id: string
  type: "work" | "education"
  title: string
  organization: string
  location: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    type: "work",
    title: "Freelancer - Flutter Developer",
    organization: "Upwork",
    location: "Remote",
    period: "May 2024 - Present",
    description: [
      "Developed 4 complete apps for iOS and Android including backend integrations.",
      "Delivered projects within 2 months while maintaining quality standards.",
      "Collaborated with clients in USA, Mexico, and Qatar.",
    ],
  },
  {
    id: "2",
    type: "work",
    title: "Flutter Developer",
    organization: "Testsolz",
    location: "On-site",
    period: "May 2024 - May 2025",
    description: [
      "Built and maintained mobile apps using Flutter.",
      "Handled testing, debugging, and Google Play Console workflows.",
      "Published one app and two games.",
    ],
  },
  {
    id: "3",
    type: "work",
    title: "Lead Flutter Developer",
    organization: "NoveBee",
    location: "Remote",
    period: "Aug 2023 - May 2024",
    description: [
      "Led app ideation, UX direction, and technical implementation.",
      "Prepared products for publishing and post-release fixes.",
      "Published more than 10 apps on Google Play.",
    ],
  },
  {
    id: "4",
    type: "education",
    title: "BS Software Engineering",
    organization: "CECOS University Peshawar",
    location: "Peshawar, Pakistan",
    period: "Sep 2019 - Jun 2023",
    description: [
      "Graduated with Gold Medal for top academic performance.",
      "Focused on software engineering and mobile systems.",
    ],
  },
]

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      <div className="absolute left-0 top-1 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
        {item.type === "work" ? <Briefcase size={20} weight="bold" /> : <GraduationCap size={20} weight="bold" />}
      </div>

      {index < experiences.length - 1 && <div className="absolute left-5 top-12 w-px h-full bg-border" />}

      <Card className="ml-8 p-6 border border-border/80 bg-white shadow-[0_8px_24px_rgba(53,96,167,0.06)]">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-primary font-semibold mt-1">{item.organization}</p>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1.5 mb-3">
          <span>{item.location}</span>
          <span>•</span>
          <span>{item.period}</span>
        </div>

        <ul className="space-y-2">
          {item.description.map((point) => (
            <li key={point} className="text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="container max-w-5xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-bold text-primary tracking-wide mb-3">TIMELINE</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Experience and education</h2>
          <p className="text-lg text-muted-foreground">A concise view of my professional and academic path in Flutter engineering.</p>
        </motion.div>

        <div>
          {experiences.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
