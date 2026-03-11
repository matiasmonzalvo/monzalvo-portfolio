export interface Project {
  slug: string;
  title: string;
  year: number;
  description: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "atiend",
    title: "Atiend",
    year: 2026,
    description:
      "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración. Diseñada con enfoque mobile-first y optimizada para velocidad de carga.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "https://example.com",
  },
  {
    slug: "hiderk",
    title: "Hiderk",
    year: 2026,
    description:
      "Aplicación de gestión de tareas con tableros Kanban, asignación de equipos y seguimiento en tiempo real. Incluye notificaciones push y modo offline.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://example.com",
  },
  {
    slug: "centro-cortinas",
    title: "Centro Cortinas",
    year: 2026,
    description:
      "Dashboard meteorológico interactivo con visualización de datos en tiempo real, pronósticos de 7 días y mapas de radar. Consume múltiples APIs de clima.",
    tech: ["Vue.js", "D3.js", "Express", "Redis"],
  },
  {
    slug: "my-outfit",
    title: "My Outfit",
    year: 2025,
    description:
      "Motor de blog con editor Markdown, sistema de comentarios y RSS. Optimizado para SEO con generación estática y tiempos de carga mínimos.",
    tech: ["Astro", "MDX", "Tailwind CSS"],
    link: "https://example.com",
  },
  {
    slug: "weekly",
    title: "Weekly",
    year: 2025,
    description:
      "Motor de blog con editor Markdown, sistema de comentarios y RSS. Optimizado para SEO con generación estática y tiempos de carga mínimos.",
    tech: ["Astro", "MDX", "Tailwind CSS"],
    link: "https://example.com",
  },
  {
    slug: "habitat-conecta",
    title: "Habitat Conecta",
    year: 2025,
    description:
      "Primera versión de mi portfolio personal. Diseño minimalista con animaciones suaves y modo oscuro automático.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "hariaz",
    title: "Hariaz",
    year: 2025,
    description:
      "Aplicación de chat en tiempo real con salas, mensajes directos, envío de archivos y reacciones con emojis. Arquitectura basada en WebSockets.",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    slug: "gecko",
    title: "Gecko",
    year: 2025,
    description:
      "Aplicación de chat en tiempo real con salas, mensajes directos, envío de archivos y reacciones con emojis. Arquitectura basada en WebSockets.",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    slug: "atp-solutions",
    title: "ATP Solutions",
    year: 2025,
    description:
      "Primera versión de mi portfolio personal. Diseño minimalista con animaciones suaves y modo oscuro automático.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "mazzo-developments",
    title: "Mazzo Developments",
    year: 2025,
    description:
      "Primera versión de mi portfolio personal. Diseño minimalista con animaciones suaves y modo oscuro automático.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
