export default function HomePage() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight mb-6">
        Sobre mí
      </h2>
      <p className="text-sm leading-relaxed text-muted mb-4">
        Soy Matias Monzalvo, desarrollador web apasionado por crear
        experiencias digitales limpias y funcionales. Me especializo en
        construir aplicaciones modernas con tecnologías como React, Next.js
        y TypeScript.
      </p>
      <p className="text-sm leading-relaxed text-muted mb-8">
        Me enfoco en la simplicidad, el rendimiento y los detalles que hacen
        la diferencia. Siempre buscando aprender algo nuevo y mejorar mi
        craft.
      </p>
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
