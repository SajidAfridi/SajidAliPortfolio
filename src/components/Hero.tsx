import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Envelope } from "@phosphor-icons/react"
import businessLocatorImage from "@/assets/images/businesslocator.png"
import fitOneImage from "@/assets/images/fit1.png"
import shoesOneImage from "@/assets/images/shoesstore1.png"
import getWellPlusImage from "@/assets/images/getwellplus1.png"
import ticTacToeImage from "@/assets/images/tictactoe1.png"
import civilCalcImage from "@/assets/images/civilcalculator1.png"
import teslaImage from "@/assets/images/tesla1.png"
import googleAdsImage from "@/assets/images/googleads.png"

const featureChips = ["Fast", "Productive", "Flexible"]

const heroGradient =
  "radial-gradient( ellipse at bottom, #1a68d3 5%, transparent 60% )," +
  "linear-gradient(136deg, transparent 0%, #71c7ee 290%)," +
  "linear-gradient(115deg, #9d9af1 0%, transparent 40%)," +
  "linear-gradient(to bottom, transparent 0%, #1a68d3 70%)," +
  "radial-gradient(ellipse at -70% -180%, transparent 80%, #71c7ee 80%)," +
  "radial-gradient(ellipse at bottom, #1a68d3 40%, transparent 80%)," +
  "radial-gradient(ellipse at 5% 340%, transparent 80%, #bfc2f4 80%)"

interface HeroShotCardProps {
  title: string
  className: string
  delay: number
  image?: string
  onClick: () => void
}

function HeroShotCard({ title, className, delay, image, onClick }: HeroShotCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={`card ${className}`}
      style={{ backgroundImage: `url(${image || businessLocatorImage})` }}
      aria-label={`Open ${title}`}
    >
      <span className="card-label">{title}</span>
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
            className="hero-shot-wall rounded-3xl border border-white/35 bg-white/10 backdrop-blur-md p-4 md:p-5"
          >
            <div className="inner-fixed hidden md:grid">
              <div className="col col-outer col-left">
                <HeroShotCard title="Business Locator" className="card-a" delay={0.14} image={businessLocatorImage} onClick={goToProjects} />
                <HeroShotCard title="Fitness Tracker" className="card-b" delay={0.18} image={fitOneImage} onClick={goToProjects} />
                <HeroShotCard title="Shoe Store App" className="card-c" delay={0.22} image={shoesOneImage} onClick={goToProjects} />
              </div>

              <div className="col col-center">
                <HeroShotCard title="GetWellPlus" className="card-a" delay={0.26} image={getWellPlusImage} onClick={goToProjects} />
              </div>

              <div className="col col-outer col-right">
                <HeroShotCard title="Tic Tac Toe" className="card-a" delay={0.3} image={ticTacToeImage} onClick={goToProjects} />
                <HeroShotCard title="Civil Calculator" className="card-b" delay={0.34} image={civilCalcImage} onClick={goToProjects} />
                <HeroShotCard title="Tesla UI Concept" className="card-c" delay={0.38} image={teslaImage} onClick={goToProjects} />
                <HeroShotCard title="Ads Integration" className="card-d" delay={0.42} image={googleAdsImage} onClick={goToProjects} />
              </div>
            </div>

            <div className="inner-fixed-mobile grid md:hidden">
              <HeroShotCard title="Business Locator" className="card-a" delay={0.14} image={businessLocatorImage} onClick={goToProjects} />
              <HeroShotCard title="GetWellPlus" className="card-b" delay={0.18} image={getWellPlusImage} onClick={goToProjects} />
              <HeroShotCard title="Tic Tac Toe" className="card-c" delay={0.22} image={ticTacToeImage} onClick={goToProjects} />
              <HeroShotCard title="Civil Calculator" className="card-d" delay={0.26} image={civilCalcImage} onClick={goToProjects} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
