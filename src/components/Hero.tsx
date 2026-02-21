import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Envelope } from "@phosphor-icons/react"
import placeholderImage from "@/assets/images/placeholder-project.svg"

const featureChips = ["Fast", "Productive", "Flexible"]

const heroGradient =
  "radial-gradient( ellipse at bottom, #1a68d3 5%, transparent 60% )," +
  "linear-gradient(136deg, transparent 0%, #71c7ee 290%)," +
  "linear-gradient(115deg, #9d9af1 0%, transparent 40%)," +
  "linear-gradient(to bottom, transparent 0%, #1a68d3 70%)," +
  "radial-gradient(ellipse at -70% -180%, transparent 80%, #71c7ee 80%)," +
  "radial-gradient(ellipse at bottom, #1a68d3 40%, transparent 80%)," +
  "radial-gradient(ellipse at 5% 340%, transparent 80%, #bfc2f4 80%)"

interface AppShotCardProps {
  title: string
  className: string
  delay: number
  onClick: () => void
}

function AppShotCard({ title, className, delay, onClick }: AppShotCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/35 shadow-[0_16px_40px_rgba(1,30,86,0.45)] ${className}`}
      type="button"
    >
      <img
        src={placeholderImage}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f5ecf]/25 via-[#1a68d3]/45 to-[#79d0f5]/25" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#04163a] via-[#04163a]/70 to-transparent p-3 text-left">
        <p className="text-xs font-semibold text-white/95 leading-tight">{title}</p>
      </div>
    </motion.button>
  )
}

export function Hero() {
  const goToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24"
      style={{
        backgroundColor: "#1a68d3",
        backgroundImage: heroGradient,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.1),transparent_20%)]" />
      <div className="container max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-bold tracking-wide text-white mb-5">
              FLUTTER ENGINEER PORTFOLIO
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] text-white mb-5">
              Build beautiful apps,
              <br />
              <span className="text-sky-100">deploy everywhere.</span>
            </h1>

            <p className="text-lg text-white/90 max-w-xl mb-8">
              I craft cross-platform Flutter products from idea to release, combining strong engineering with UI polish.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {featureChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="gap-2 rounded-full px-8 bg-white text-[#0c4eaf] hover:bg-white/90"
                onClick={goToProjects}
              >
                View Projects
                <ArrowRight weight="bold" size={18} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full px-8 border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
                <Envelope weight="bold" size={18} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-3xl border border-white/35 bg-white/10 backdrop-blur-md p-4 md:p-5"
          >
            <div className="hidden md:grid grid-cols-[1fr_1.16fr_1fr] gap-3 lg:gap-4 items-stretch">
              <div className="flex flex-col gap-3 lg:gap-4">
                <AppShotCard title="Financial App" className="h-28 lg:h-32" delay={0.15} onClick={goToProjects} />
                <AppShotCard title="Health Tracker" className="h-36 lg:h-40" delay={0.2} onClick={goToProjects} />
                <AppShotCard title="Kids Learning" className="h-28 lg:h-32" delay={0.25} onClick={goToProjects} />
              </div>

              <div className="flex flex-col">
                <AppShotCard title="T20 Cricket Game" className="h-full min-h-[380px] lg:min-h-[430px]" delay={0.28} onClick={goToProjects} />
              </div>

              <div className="flex flex-col gap-3 lg:gap-4">
                <AppShotCard title="Multiplayer Game" className="h-24 lg:h-28" delay={0.32} onClick={goToProjects} />
                <AppShotCard title="Civil Calculator" className="h-24 lg:h-28" delay={0.36} onClick={goToProjects} />
                <AppShotCard title="Edu Quiz Platform" className="h-24 lg:h-28" delay={0.4} onClick={goToProjects} />
                <AppShotCard title="Fintech Dashboard" className="h-24 lg:h-28" delay={0.44} onClick={goToProjects} />
              </div>
            </div>

            <div className="grid md:hidden grid-cols-2 gap-3">
              <AppShotCard title="Financial App" className="h-28" delay={0.15} onClick={goToProjects} />
              <AppShotCard title="Health Tracker" className="h-28" delay={0.2} onClick={goToProjects} />
              <AppShotCard title="Edu Quiz" className="h-28" delay={0.25} onClick={goToProjects} />
              <AppShotCard title="T20 Cricket Game" className="h-28" delay={0.3} onClick={goToProjects} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
