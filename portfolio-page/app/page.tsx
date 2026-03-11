import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "React Native",
  "Expo",
  "Node.js",
  "NestJS",
  "Supabase",
  "Angular",
  "Vue.js",
  "Git",
  "Figma",
];

const sections = [
  {
    id: "about",
    span: "Sobre mí",
    title: "Matias Monzalvo",
    images: ["/me-1.png", "/me-2.jpg"],
    contentType: "text" as const,
    paragraphs: [
      "Soy Matias Monzalvo, desarrollador web apasionado por crear experiencias digitales limpias y funcionales. Me especializo en construir aplicaciones modernas con tecnologías como React, Next.js y TypeScript.",
      "Me enfoco en la simplicidad, el rendimiento y los detalles que hacen la diferencia. Siempre buscando aprender algo nuevo y mejorar mi craft.",
    ],
  },
  {
    id: "role",
    span: "Rol laboral",
    title: "Frontend Developer",
    images: ["/derk-1.png", "/atiend-2.png"],
    contentType: "text" as const,
    paragraphs: [
      "Trabajo como desarrollador frontend construyendo interfaces modernas, performantes y escalables. Mi enfoque está en transformar ideas y diseños en productos digitales funcionales que generen impacto real.",
      "He trabajado en proyectos que van desde landing pages optimizadas para conversión hasta plataformas SaaS complejas con paneles de administración, integraciones con IA y sistemas de pagos.",
    ],
  },
  {
    id: "university",
    span: "Universidad de Belgrano",
    title: "Ingeniería en Informática",
    images: ["/habitat-1.png", "/habitat-2.png"],
    contentType: "text" as const,
    paragraphs: [
      "Actualmente cursando la carrera de Ingeniería en Informática en la Universidad de Belgrano, donde complemento mi experiencia práctica en desarrollo con una formación sólida en fundamentos de computación, algoritmos, estructuras de datos y arquitectura de software.",
    ],
  },
  {
    id: "skills",
    span: "Conocimientos",
    title: "Habilidades",
    images: ["/mazzo-1.png", "/mazzo-2.png"],
    contentType: "skills" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="mb-16">
          <span className="text-sm text-muted tabular-nums">
            {section.span}
          </span>
          <h2 className="text-3xl font-medium tracking-tight mt-1 mb-6">
            {section.title}
          </h2>

          {section.images && section.images.length > 0 && (
            <div className="w-2/3 aspect-6/3 flex gap-1 mb-8">
              {section.images.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-1 h-full overflow-hidden rounded-2xl min-w-0"
                >
                  <Image
                    src={src}
                    alt={`${section.title} - imagen ${i + 1}`}
                    width={1500}
                    height={1500}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}

          {section.contentType === "text" && section.paragraphs && (
            <div className="text-sm leading-relaxed text-muted space-y-3">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {section.contentType === "skills" && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Links */}
      <div className="flex flex-col gap-3 text-sm">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-foreground hover:text-muted transition-colors w-fit"
        >
          GitHub
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
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-foreground hover:text-muted transition-colors w-fit"
        >
          LinkedIn
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
      </div>
    </>
  );
}
