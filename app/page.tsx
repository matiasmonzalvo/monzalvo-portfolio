import Image from "next/image";

const skills = [
  "Next.js",
  "TypeScript",
  "React",
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
const certificates = [
  "C1 Cambridge",
  "Prompt Engineering by Open AI",
  "Udemy - Java from beginner to expert",
];

const sections = [
  {
    id: "about",
    span: "Sobre mí",
    title: "Matias Monzalvo",
    images: ["/me-1.png", "/me-2.jpg"],
    contentType: "text" as const,
    paragraphs: [
      "Soy Matias Monzalvo, frontend developer y UX/UI designer de 22 años apasionado por crear experiencias digitales limpias y funcionales. Me especializo en construir aplicaciones modernas con tecnologías como React, Next.js, Tailwind CSS, TypeScript y JavaScript.",
      "Me enfoco en el diseño, la simplicidad, el rendimiento y los detalles que hacen la diferencia en marcas digitales. Siempre buscando shippear rápido, aprender algo nuevo y mejorar mi craft.",
    ],
  },
  {
    id: "role",
    span: "Rol laboral",
    title: "Frontend Developer",
    images: ["/derk-1.png", "/atiend-2.png"],
    contentType: "text" as const,
    paragraphs: [
      "Trabajo como desarrollador frontend construyendo interfaces modernas, performantes y minimalistas. Mi enfoque está en transformar ideas en diseños de productos digitales profesionales que generen impacto real.",
      "Me encuentro trabajando en Mazzo Developments, donde lidero  proyectos en el área de frontend que van desde aplicaciones web con diseño profesional hasta plataformas SaaS complejas con paneles de administración, integraciones con IA y sistemas de pagos.",
    ],
  },
  {
    id: "university",
    span: "Universidad de Belgrano",
    title: "Ingeniería en Informática",
    images: ["/ub-1.jpg"],
    contentType: "text" as const,
    paragraphs: [
      "Actualmente estoy cursando 5to año de la carrera de Ingeniería en Informática en la Universidad de Belgrano, donde complemento mi experiencia práctica en desarrollo con una formación sólida en fundamentos de computación, algoritmos, estructuras de datos y arquitectura de software.",
    ],
  },
  {
    id: "skills",
    span: "Conocimientos",
    title: "Habilidades",
    contentType: "skills" as const,
  },
  {
    id: "certificates",
    span: "Certificados",
    title: "Certificados",
    contentType: "certificates" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="mb-16">
          <span className="block text-sm text-muted leading-none">
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
          {section.contentType === "certificates" && (
            <div className="flex flex-wrap gap-2">
              {certificates.map((certificate) => (
                <span
                  key={certificate}
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
                >
                  {certificate}
                </span>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}
