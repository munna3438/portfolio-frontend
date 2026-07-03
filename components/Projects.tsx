"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import RouteEyebrow from "@/components/ui/RouteEyebrow";

const statusColor: Record<string, string> = {
  Live: "text-pineDark bg-pine/10",
  "In progress": "text-amber bg-amber/10",
  Archived: "text-muted bg-surface"
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-surface/50 py-24">
      <div className="mx-auto max-w-content px-6">
        <RouteEyebrow path="/projects" />
        <h2 className="mb-12 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Selected work
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: (i % 2) * 0.1 }}
              className="group flex flex-col justify-between rounded-md border border-line bg-paper p-7 transition-colors hover:border-pine"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className={`rounded-sm px-2 py-1 font-mono text-xs ${statusColor[project.status]}`}>
                    {project.status}
                  </span>
                  <span className="font-mono text-xs text-muted">{project.year}</span>
                </div>

                <h3 className="font-display text-xl text-ink group-hover:text-pineDark">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-sm bg-surface px-2 py-1 font-mono text-xs text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pine"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
