import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-paper">
      <Nav />
      <article className="mx-auto max-w-content px-6 pt-40 pb-24">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-pine"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <p className="mb-3 font-mono text-xs text-pineDark">{project.year} · {project.status}</p>
        <h1 className="max-w-2xl font-display text-4xl text-ink sm:text-5xl">{project.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-sm bg-surface px-3 py-1.5 font-mono text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 max-w-2xl space-y-4 border-t border-line pt-10 text-muted leading-relaxed">
          <p>
            Add your case-study write-up here once the admin panel is connected — problem,
            approach, and outcome for {project.title.toLowerCase()}.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
