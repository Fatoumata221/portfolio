import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Projets
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 100} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
