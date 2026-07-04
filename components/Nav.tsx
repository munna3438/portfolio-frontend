"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" }
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const sectionId = href.split("#")[1];

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          scrollToSection(sectionId);
        }
        onClick?.();
      }}
      className="transition-colors hover:text-pine"
    >
      {label}
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleHireClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("contact");
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-tight text-ink">
          munna<span className="text-pine">.</span>dev
        </Link>

        <ul className="hidden gap-8 font-mono text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          onClick={handleHireClick}
          className="hidden rounded-sm bg-ink px-4 py-2 font-mono text-sm text-paper transition-colors hover:bg-pine md:inline-block"
        >
          Hire me
        </Link>

        <button
          className="text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-4 font-mono text-sm md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                onClick={() => setOpen(false)}
              />
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={(e) => {
                setOpen(false);
                handleHireClick(e);
              }}
              className="block py-2 text-muted hover:text-pine"
            >
              Hire me
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
