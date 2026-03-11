import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <span className="text-sm text-muted tabular-nums">{project.year}</span>
      <h2 className="text-3xl font-medium tracking-tight mt-1 mb-6">
        {project.title}
      </h2>

      {project.images && project.images.length > 0 && (
        <div className="w-full aspect-6/3 flex gap-1  mb-8">
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative flex-1 h-full overflow-hidden rounded-2xl min-w-0"
            >
              <Image
                src={src}
                alt={`${project.title} - imagen ${i + 1}`}
                width={1500}
                height={1500}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}

      <div className="text-sm leading-relaxed text-muted mb-8 space-y-3">
        {project.description
          .split(/\n\s*\n/)
          .map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
          >
            {t}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-muted transition-colors"
        >
          Ver proyecto
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      )}
    </>
  );
}
