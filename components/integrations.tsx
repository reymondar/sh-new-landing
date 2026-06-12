"use client"

import type { LucideIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Slack,
  Github,
  Figma,
  Chrome,
  MessageSquare,
  Video,
  Calendar,
  Mail,
  Database,
  Cloud,
  Boxes,
  Workflow,
  Webhook,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type Integration = {
  name: string
  Icon: LucideIcon
  color: string
}

const integrations: Integration[] = [
  { name: "Slack", Icon: Slack, color: "text-rose-400" },
  { name: "GitHub", Icon: Github, color: "text-zinc-200" },
  { name: "Figma", Icon: Figma, color: "text-orange-400" },
  { name: "Chrome", Icon: Chrome, color: "text-sky-400" },
  { name: "Notion", Icon: MessageSquare, color: "text-zinc-300" },
  { name: "Zoom", Icon: Video, color: "text-blue-400" },
  { name: "Calendar", Icon: Calendar, color: "text-emerald-400" },
  { name: "Gmail", Icon: Mail, color: "text-red-400" },
  { name: "Supabase", Icon: Database, color: "text-green-400" },
  { name: "Cloud", Icon: Cloud, color: "text-cyan-400" },
  { name: "Linear", Icon: Boxes, color: "text-indigo-400" },
  { name: "Zapier", Icon: Workflow, color: "text-amber-400" },
  { name: "Webhooks", Icon: Webhook, color: "text-violet-400" },
  { name: "Vercel", Icon: Zap, color: "text-zinc-100" },
]

function IconTile({ Icon, color, name }: Integration) {
  return (
    <div className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 sm:h-20 sm:w-20">
      <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${color}`} strokeWidth={1.5} aria-label={name} />
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: Integration[]; reverse?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className={`flex shrink-0 gap-5 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((item, i) => (
          <IconTile key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  )
}

export function Integrations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const firstRow = integrations.slice(0, 7)
  const secondRow = integrations.slice(7)

  return (
    <section id="integrations" ref={ref} className="overflow-hidden py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          Integrates with your entire collaboration stack.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base text-zinc-400 sm:text-lg"
        >
          Connect Nexus to Slack, Zoom, Notion, Google Meet, and dozens of others to keep your work in sync
          seamlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-zinc-800 bg-transparent px-8 text-base font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            Explore Integrations
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-20"
      >
        {/* Fade masks */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent sm:w-40" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent sm:w-40" />

        <div className="flex flex-col gap-5">
          <MarqueeRow items={firstRow} />
          <MarqueeRow items={secondRow} reverse />
        </div>
      </motion.div>
    </section>
  )
}
