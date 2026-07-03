"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import RouteEyebrow from "@/components/ui/RouteEyebrow";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <RouteEyebrow path="/experience" />
        <h2 className="mb-12 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-10">
          {experience.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="grid gap-2 border-l-2 border-line pl-6 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <div>
                <p className="font-display text-lg text-ink">{role.company}</p>
                <p className="font-mono text-xs text-muted">{role.period}</p>
              </div>
              <div>
                <p className="mb-3 font-mono text-sm text-pineDark">{role.role}</p>
                <ul className="space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pine" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
