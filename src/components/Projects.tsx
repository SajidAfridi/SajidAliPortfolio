import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowRight, GithubLogo } from "@phosphor-icons/react"
import placeholderImage from "@/assets/images/placeholder-project.svg"

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

type ProjectTrack = "fast" | "productive" | "flexible"

interface TrackConfig {
  value: ProjectTrack
  label: string
  badge: string
  title: string
  description: string
  projectIds: string[]
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Financial Transaction App",
    description: "A secure and user-friendly transaction app with multi-currency flows and real-time payment updates.",
    longDescription:
      "Built a complete financial app with secure payment processing, multi-currency support, transaction history, and real-time alerts. Implemented in Flutter with Firebase and designed for reliability under production traffic.",
    technologies: ["Flutter", "Firebase", "Dart", "Payments"],
    image: placeholderImage,
    featured: true,
  },
  {
    id: "2",
    title: "Health Workers Tracking System",
    description: "Live operational dashboard for healthcare teams using real-time map and attendance tracking.",
    longDescription:
      "Developed a healthcare tracking platform using Google Maps and Firebase for live location updates, route monitoring, attendance management, and emergency routing support for field teams.",
    technologies: ["Flutter", "Google Maps", "Firebase", "Realtime"],
    image: placeholderImage,
    featured: true,
  },
  {
    id: "3",
    title: "Civil Calculator",
    description: "Offline-first engineering app with 250+ formulas optimized for field use.",
    longDescription:
      "Created a specialized toolkit for civil engineers with advanced formulas, calculation modules, and offline usage. Optimized data structures and UX for fast workflow in construction environments.",
    technologies: ["Flutter", "Dart", "Offline", "UX"],
    image: placeholderImage,
  },
  {
    id: "4",
    title: "Edu Quiz Platform",
    description: "Dual-app system for students and admins, including quiz analytics and progress tracking.",
    longDescription:
      "Built two connected apps: one for students and one for educators. Added real-time leaderboards, question management, and analytics dashboards powered by Firebase.",
    technologies: ["Flutter", "Firebase", "Admin Panel"],
    image: placeholderImage,
  },
  {
    id: "5",
    title: "Interactive Kids App",
    description: "Gamified learning app with animation-rich lessons and parental controls.",
    longDescription:
      "Designed an interactive learning experience with motion-driven UI, progress syncing, and age-aware content flows. Tuned performance for low-end devices.",
    technologies: ["Flutter", "Animations", "Firebase"],
    image: placeholderImage,
  },
  {
    id: "6",
    title: "Multiplayer Tic Tac Toe",
    description: "Realtime game with websocket-based multiplayer and match history.",
    longDescription:
      "Implemented websocket gameplay for smooth, low-latency turn sync, plus matchmaking, rematch flows, and player statistics to improve retention.",
    technologies: ["Flutter", "WebSocket", "Realtime"],
    image: placeholderImage,
  },
]

const trackConfigs: TrackConfig[] = [
  {
    value: "fast",
    label: "Fast",
    badge: "Rapid delivery",
    title: "Ship reliable features quickly",
    description:
      "Production-ready apps with optimized architecture, fast iteration loops, and dependable release cadence.",
    projectIds: ["1", "2", "6"],
  },
  {
    value: "productive",
    label: "Productive",
    badge: "Strong workflow",
    title: "Build more with fewer bottlenecks",
    description:
      "Reusable components, clean state handling, and backend integrations that help teams move faster.",
    projectIds: ["4", "3", "5"],
  },
  {
    value: "flexible",
    label: "Flexible",
    badge: "Adaptable systems",
    title: "Scale across different product needs",
    description:
      "From fintech to education and gaming, each solution is tuned for domain requirements and future growth.",
    projectIds: ["2", "1", "3"],
  },
]

const projectMap = sampleProjects.reduce<Record<string, Project>>((acc, project) => {
  acc[project.id] = project
  return acc
}, {})

function getProjectsForTrack(projectIds: string[]) {
  return projectIds
    .map((id) => projectMap[id])
    .filter((project): project is Project => Boolean(project))
    .slice(0, 3)
}

function ProjectPreviewCard({ project, onViewDetails }: { project: Project; onViewDetails: (project: Project) => void }) {
  return (
    <Card className="h-full border border-border/80 bg-white p-5 shadow-[0_8px_24px_rgba(53,96,167,0.07)]">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h4 className="text-lg font-bold leading-tight text-foreground">{project.title}</h4>
        {project.featured && <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Top</Badge>}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="bg-secondary border border-border/70">
            {tech}
          </Badge>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        className="gap-2 rounded-full border-primary/25"
        onClick={() => onViewDetails(project)}
      >
        View details
        <ArrowRight weight="bold" />
      </Button>
    </Card>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTrack, setActiveTrack] = useState<ProjectTrack>("fast")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const activeConfig = trackConfigs.find((track) => track.value === activeTrack) || trackConfigs[0]

  return (
    <>
      <section id="projects" className="py-20 md:py-24">
        <div className="container max-w-7xl px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-sm font-bold text-primary tracking-wide mb-3">INTERACTIVE PROJECTS</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Fast. Productive. Flexible.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-2">
              Inspired by Flutter.dev’s middle section, this area uses tabs to show focused project strengths.
            </p>
            <p className="text-sm font-semibold text-primary">Now viewing: {activeConfig.label}</p>
          </motion.div>

          <Tabs value={activeTrack} onValueChange={(value) => setActiveTrack(value as ProjectTrack)} className="gap-6">
            <TabsList className="h-auto w-full sm:w-fit rounded-full border border-border bg-white p-1">
              {trackConfigs.map((track) => (
                <TabsTrigger
                  key={track.value}
                  value={track.value}
                  className="rounded-full px-5 py-2 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {track.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {trackConfigs.map((track) => {
              const projects = getProjectsForTrack(track.projectIds)
              const spotlight = projects[0]

              return (
                <TabsContent key={track.value} value={track.value} className="space-y-6">
                  <Card className="overflow-hidden border border-border/80 bg-white p-0 shadow-[0_12px_34px_rgba(53,96,167,0.09)]">
                    <div className="grid lg:grid-cols-[1.15fr_1fr]">
                      <div className="p-6 md:p-8 lg:p-10">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4">{track.badge}</Badge>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">{track.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-xl">{track.description}</p>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            className="rounded-full gap-2"
                            onClick={() => spotlight && setSelectedProject(spotlight)}
                          >
                            Explore spotlight
                            <ArrowRight weight="bold" />
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full border-primary/30"
                            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                          >
                            Start a project
                          </Button>
                        </div>
                      </div>

                      <div className="border-t lg:border-t-0 lg:border-l border-border/70 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4 md:p-6">
                        <div className="rounded-xl overflow-hidden border border-border bg-white mb-4">
                          <img
                            src={spotlight?.image || placeholderImage}
                            alt={spotlight?.title || "Project spotlight"}
                            className="w-full h-full aspect-video object-cover"
                          />
                        </div>
                        <p className="text-sm font-bold text-primary mb-1">Spotlight project</p>
                        <h4 className="text-xl font-bold text-foreground mb-2">{spotlight?.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{spotlight?.description}</p>
                      </div>
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                      <motion.div
                        key={`${track.value}-${project.id}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.07 }}
                      >
                        <ProjectPreviewCard project={project} onViewDetails={setSelectedProject} />
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-extrabold">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="sr-only">Project details for {selectedProject?.title}</DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {selectedProject.image && (
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div>
                <h4 className="text-lg font-bold mb-2">About this project</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription || selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary border border-border/70">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                {selectedProject.githubUrl && (
                  <Button asChild className="gap-2 rounded-full">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubLogo weight="bold" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button variant="outline" asChild className="gap-2 rounded-full border-primary/30">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit Project
                      <ArrowRight weight="bold" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
