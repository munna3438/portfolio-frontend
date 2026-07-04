"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-pine/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber/5 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-content px-6"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1 font-mono text-xs text-pineDark"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-pine animate-blink" />
              available for freelance work
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-3xl font-display text-5xl leading-[1.08] text-ink sm:text-6xl md:text-7xl"
            >
              <span className="gradient-text">{about.role}</span>
              <br />
              <span className="italic text-muted text-4xl sm:text-5xl md:text-6xl">Laravel to Next.js.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              {about.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-sm bg-ink px-6 py-3 font-mono text-sm text-paper transition-all hover:bg-pine hover:shadow-lg hover:shadow-pine/20"
              >
                View projects
              </a>
              {about.resumeUrl && (
                <a
                  href={about.resumeUrl}
                  download
                  className="rounded-sm border border-line px-6 py-3 font-mono text-sm text-ink transition-all hover:border-pine hover:text-pine hover:shadow-lg hover:shadow-pine/10"
                >
                  Download resume
                </a>
              )}
            </motion.div>
          </div>

          {about.photo && (
            <motion.div variants={item} className="shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-pine/20 to-amber/10 blur-xl" />
                <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-line sm:h-64 sm:w-64 photo-glow">
                  <Image
                    src={about.photo}
                    alt={about.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 224px, 256px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <div
        aria-hidden
        className="route-rail pointer-events-none absolute left-8 top-0 hidden h-full w-px md:block"
      />
    </section>
  );
}
