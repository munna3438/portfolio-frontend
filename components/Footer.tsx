import { about } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {about.name}. Built with Next.js &amp; Express.</p>
        <div className="flex gap-5">
          {about.socials.map((social) => (
            <a key={social.label} href={social.url} className="hover:text-pine">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
