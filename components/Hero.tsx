"use client";

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
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-content px-6"
      >
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
          {about.role}
          <span className="text-pine">.</span>
          <br />
          <span className="italic text-muted">Laravel to Next.js.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {about.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-sm bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-pine"
          >
            View projects
          </a>
          <a
            href={about.resumeUrl}
            download
            className="rounded-sm border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-pine hover:text-pine"
          >
            Download resume
          </a>
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="route-rail pointer-events-none absolute left-8 top-0 hidden h-full w-px md:block"
      />
    </section>
  );
}
