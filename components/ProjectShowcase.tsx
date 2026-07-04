"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectScreenshots } from "@/lib/data";
import RouteEyebrow from "@/components/ui/RouteEyebrow";

function StickyCard({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.8]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [32, 16, 16, 24]);

  return (
    <div ref={ref} className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale: cardScale, opacity, borderRadius }}
        className="relative w-[92vw] max-w-5xl h-[75vh] overflow-hidden border border-line/40 bg-surface shadow-lg"
      >
        <motion.div style={{ y: imageParallax }} className="h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="92vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs text-paper/60 mb-1"
          >
            0{index + 1}
          </motion.p>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-xl text-paper md:text-3xl"
          >
            {alt}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="showcase" className="section-gradient border-t border-line">
      <div className="mx-auto max-w-content px-6 pt-24 pb-4">
        <RouteEyebrow path="/projects/screenshots" />
        <h2 className="mb-4 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Captures
        </h2>
        <p className="max-w-lg text-muted leading-relaxed">
          A scroll through the interfaces I&apos;ve built &mdash; each frame
          tells a story.
        </p>
      </div>

      <div className="relative" style={{ height: `${projectScreenshots.length * 100}vh` }}>
        {projectScreenshots.map((ss, i) => (
          <StickyCard key={ss.src} src={ss.src} alt={ss.alt} index={i} />
        ))}
      </div>
    </section>
  );
}
