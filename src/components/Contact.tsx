import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GithubLogo, LinkedinLogo, Envelope, Phone } from "@phosphor-icons/react"

const contactMethods = [
  {
    icon: <Envelope size={28} weight="duotone" />,
    label: "Email",
    value: "afridisajid659@gmail.com",
    href: "mailto:afridisajid659@gmail.com",
  },
  {
    icon: <GithubLogo size={28} weight="duotone" />,
    label: "GitHub",
    value: "github.com/sajidali",
    href: "https://github.com/sajidali",
  },
  {
    icon: <LinkedinLogo size={28} weight="duotone" />,
    label: "LinkedIn",
    value: "linkedin.com/in/sajid-ali-47a9b417a/",
    href: "https://www.linkedin.com/in/sajid-ali-47a9b417a/",
  },
  {
    icon: <Phone size={28} weight="duotone" />,
    label: "Phone",
    value: "+92-3159353145",
    href: "tel:+923159353145",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 md:py-24 bg-white border-t border-border/70">
      <div className="container max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-bold text-primary tracking-wide mb-3">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Let’s build your next Flutter product</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I’m available for freelance and product-focused collaboration on mobile and cross-platform apps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.35, delay: 0.2 + index * 0.05 }}
            >
              <Card className="h-full p-5 border border-border/80 bg-white hover:border-primary/25 hover:shadow-[0_10px_28px_rgba(53,96,167,0.08)] transition-all">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{method.label}</h3>
                <p className="text-muted-foreground text-sm break-all">{method.value}</p>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <Button size="lg" className="rounded-full px-8" asChild>
          <a href="mailto:afridisajid659@gmail.com">
            <Envelope size={18} weight="bold" />
            Send Email
          </a>
        </Button>
      </div>
    </section>
  )
}
