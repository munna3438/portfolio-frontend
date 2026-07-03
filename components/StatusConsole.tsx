"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { id: "top", path: "/", ms: 12 },
  { id: "about", path: "/about", ms: 38 },
  { id: "projects", path: "/projects", ms: 51 },
  { id: "experience", path: "/experience", ms: 29 },
  { id: "skills", path: "/skills", ms: 17 },
  { id: "contact", path: "/contact", ms: 44 }
];

export default function StatusConsole() {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-30 hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2 rounded-sm border border-line bg-paper/90 px-3 py-2 font-mono text-[11px] text-muted shadow-sm backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pine" />
          <span className="text-pineDark">GET</span>
          <span>{active.path}</span>
          <span className="text-muted">→ 200 OK · {active.ms}ms</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
