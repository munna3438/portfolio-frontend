"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import RouteEyebrow from "@/components/ui/RouteEyebrow";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/50 py-24">
      <div className="mx-auto max-w-content px-6">
        <RouteEyebrow path="/skills" />
        <h2 className="mb-12 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Tools of the trade
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="rounded-md border border-line bg-paper p-6"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-wide text-pineDark">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
