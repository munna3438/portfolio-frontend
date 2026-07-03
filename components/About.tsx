"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import RouteEyebrow from "@/components/ui/RouteEyebrow";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <RouteEyebrow path="/about" />

        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            A developer who ships,<br /> not just designs.
          </motion.h2>

          <div className="space-y-5">
            {about.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="text-lg leading-relaxed text-muted"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-2 font-mono text-sm text-pineDark"
            >
              <span className="rounded-sm bg-surface px-3 py-1.5">{about.location}</span>
              <a href={`mailto:${about.email}`} className="rounded-sm bg-surface px-3 py-1.5 hover:text-pine">
                {about.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
