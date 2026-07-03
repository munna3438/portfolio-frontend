"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { about } from "@/lib/data";
import RouteEyebrow from "@/components/ui/RouteEyebrow";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message")
    };

    try {
      // Point this at your Express API once deployed, e.g.
      // process.env.NEXT_PUBLIC_API_URL + "/api/messages"
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <RouteEyebrow path="/contact" />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-sm text-muted leading-relaxed">
              Whether it&apos;s a Laravel platform, a WordPress plugin, or a full SaaS build —
              I&apos;d like to hear about it.
            </p>
            <a
              href={`mailto:${about.email}`}
              className="mt-6 inline-block font-mono text-sm text-pineDark hover:text-pine"
            >
              {about.email}
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm outline-none focus-visible:border-pine"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-xs text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm outline-none focus-visible:border-pine"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-xs text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm outline-none focus-visible:border-pine"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-sm bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-pine disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="font-mono text-xs text-pineDark">Message sent. I&apos;ll reply soon.</p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-600">
                Something went wrong — email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
