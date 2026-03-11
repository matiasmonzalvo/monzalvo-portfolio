export interface Project {
  slug: string;
  title: string;
  year: number;
  description: string;
  tech: string[];
  images?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "atiend",
    title: "Atiend",
    year: 2026,
    description: `Atiend es una plataforma de agentes de inteligencia artificial diseñada para automatizar la atención al cliente y las ventas de negocios online. El sistema permite que un asistente virtual atienda o realize llamadas a clientes en tiempo real, las 24 horas del día, resolviendo preguntas sobre productos, precios, stock o envíos, y derivando conversaciones a un equipo humano cuando es necesario.
    
    En este proyecto desarrollé todo el frontend de la plataforma, incluyendo la landing page, el diseño de la experiencia de usuario y la interfaz del software interno, en el cual actualmente sigo trabajando junto a un equipo de desarrollo.

El frontend fue construido utilizando Next.js y Tailwind CSS, priorizando performance, escalabilidad y una experiencia de usuario clara para explicar un producto complejo de IA.

Además, el sitio se encuentra integrado con Meta Pixel para el seguimiento de eventos dentro de la web, permitiendo medir conversiones, optimizar campañas publicitarias y analizar el comportamiento de los usuarios dentro del funnel de adquisición.

El proyecto combina marketing, producto y software, ya que la misma interfaz sirve tanto para captar clientes como para operar la plataforma que gestiona los agentes de IA.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    images: ["/atiend-1.png", "/atiend-2.png"],
    link: "https://example.com",
  },
  {
    slug: "hiderk",
    title: "Hiderk",
    year: 2026,
    description: `Hiderk es una plataforma SaaS que permite a cualquier sitio web integrar fácilmente un widget de chat impulsado por inteligencia artificial para automatizar la atención al cliente y convertir conversaciones en leads. El sistema permite agregar un asistente inteligente que responde preguntas utilizando el conocimiento del negocio, escala conversaciones a un equipo humano cuando es necesario y ofrece un dashboard para gestionar chats, personalizar el widget y analizar interacciones con los usuarios.

En este proyecto desarrollé todo el frontend de la plataforma, incluyendo la landing page, el panel de administración y múltiples rutas dinámicas dentro de la aplicación, utilizando Next.js y Tailwind CSS para construir una experiencia rápida, modular y escalable.

La aplicación cuenta con backend basado en Supabase, que gestiona autenticación, base de datos y lógica del producto, permitiendo administrar proyectos, chats y configuraciones del widget de manera eficiente.

Además, la plataforma está integrada con Polar.sh para el sistema de pagos, lo que permite gestionar suscripciones y monetización del producto directamente desde la aplicación.

El proyecto combina producto SaaS, inteligencia artificial y herramientas para desarrolladores, permitiendo que cualquier empresa agregue capacidades de IA conversacional a su sitio web mediante un simple script embebido.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Polar.sh"],
    images: ["/derk-1.png", "/derk-2.png"],
    link: "https://example.com",
  },
  {
    slug: "centro-cortinas",
    title: "Centro Cortinas",
    year: 2026,
    description: `Centro Cortinas es una landing page desarrollada para un negocio de instalación y reparación de persianas, diseñada para presentar los servicios de la empresa de forma clara, generar confianza en potenciales clientes y facilitar el contacto directo para solicitar presupuestos o asistencia técnica.

El sitio está enfocado en captación de leads, destacando los principales servicios del negocio —instalación, mantenimiento y reparación de persianas— junto con información clave para que los usuarios puedan tomar una decisión rápidamente y contactar al servicio.

En este proyecto desarrollé todo el frontend del sitio, trabajando en la estructura de la landing, la experiencia de usuario y la optimización de la página para conversiones.

La web fue construida utilizando Next.js y Tailwind CSS, lo que permitió crear un sitio rápido, responsive y optimizado para SEO, asegurando una buena performance tanto en dispositivos móviles como en desktop.

El proyecto se enfocó en simplicidad, claridad en la propuesta de valor y generación de contactos, aspectos clave para negocios de servicios locales que dependen de consultas directas desde la web.`,
    images: ["/centrocortinas-1.png"],
    tech: ["Vue.js", "D3.js", "Express", "Redis"],
  },
  {
    slug: "my-outfit",
    title: "My Outfit",
    year: 2025,
    description: `My Outfit es una plataforma web que permite probarse ropa de forma virtual utilizando inteligencia artificial, generando imágenes realistas de cómo se vería una prenda en el usuario antes de comprarla. El sistema utiliza modelos de generación de imágenes —basados en Nano Banana como motor de IA— para crear visualizaciones que ayudan a tomar decisiones de compra de manera más informada.

En este proyecto desarrollé todo el frontend de la plataforma, incluyendo la experiencia de usuario para subir imágenes, seleccionar prendas y visualizar los resultados generados por la IA.

La aplicación fue construida utilizando Next.js y Tailwind CSS, aprovechando las capacidades de API Routes de Next.js para gestionar las solicitudes hacia el motor de generación de imágenes y procesar las interacciones del usuario con el sistema.

El objetivo del proyecto fue crear una experiencia simple e intuitiva para interactuar con modelos de IA generativa, acercando la tecnología de virtual try-on a un formato accesible desde el navegador.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: ["/myoutfit-1.png", "/myoutfit-2.png"],
    link: "https://example.com",
  },
  {
    slug: "weekly",
    title: "Weekly",
    year: 2025,
    description: `Weekly es una red social centrada en la creación de grids visuales, donde cada usuario puede construir composiciones de contenido dentro de una cuadrícula, publicando imágenes y videos que ocupan distintos bloques del grid. La idea del producto es ofrecer una forma diferente de compartir contenido, donde el diseño del perfil y la disposición visual de las publicaciones forman parte central de la experiencia social.

Este fue un proyecto personal, en el que desarrollé la aplicación completa para dispositivos móviles, desde la concepción del producto hasta la implementación de la interfaz y las funcionalidades principales de la red social.

La app fue construida utilizando React Native con Expo, lo que permitió desarrollar una aplicación multiplataforma optimizada para dispositivos móviles. La plataforma incluye funcionalidades típicas de redes sociales como perfiles de usuario, publicación de contenido, visualización de grids y navegación entre perfiles, adaptadas a un formato donde el contenido se organiza dentro de una cuadrícula interactiva.

El objetivo del proyecto fue explorar nuevas dinámicas de publicación social basadas en layouts visuales, combinando diseño, producto y desarrollo mobile para crear una experiencia diferente a las redes sociales tradicionales.`,
    tech: ["React Native", "Expo", "JavaScript"],
    images: ["/weekly-1.png", "/weekly-2.png"],
    link: "https://apps.apple.com/ar/app/weekly/id6757760259",
  },
  {
    slug: "habitat-conecta",
    title: "Habitat Conecta",
    year: 2025,
    description: `Habitat Conecta es una plataforma digital diseñada para conectar emprendimientos, negocios y oportunidades dentro de un mismo ecosistema, permitiendo visibilizar proyectos, gestionar información de cada emprendimiento y facilitar la interacción dentro de la comunidad.

En este proyecto trabajé tanto en frontend como en parte del backend, participando en la construcción de varias funcionalidades clave de la plataforma.

El frontend fue desarrollado con Next.js, donde implementé la interfaz completa a partir de los diseños del cliente. Trabajé directamente con Figma para interpretar los diseños y trasladarlos a código, construyendo toda la experiencia UX/UI de la plataforma y asegurando una navegación clara y consistente.

El backend está desarrollado en NestJS, donde colaboré en la implementación de algunas rutas y en la integración de los endpoints con el frontend para manejar la información de los emprendimientos y las funcionalidades del sistema.

Además, desarrollamos un panel de administración que permite a los administradores de la plataforma gestionar y controlar los emprendimientos o negocios registrados, facilitando la moderación, edición y organización del contenido dentro del sistema.

El proyecto combina desarrollo full-stack, diseño de experiencia de usuario e integración de sistemas, con el objetivo de construir una plataforma escalable para la gestión y visibilidad de iniciativas dentro de la comunidad.`,
    images: ["/habitat-1.png", "/habitat-2.png"],

    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS"],
  },
  {
    slug: "hariaz",
    title: "Hariaz",
    year: 2025,
    description: `Hariaz es una empresa de agentes IA para mensajería para la cual creé una landing page diseñada para presentar los servicios de la empresa y atraer nuevos clientes a través de una presencia digital clara, moderna y optimizada para conversiones.

En este proyecto desarrollé toda la landing page desde cero, encargándome tanto de la implementación del frontend como del diseño visual y la estructura de la página para comunicar de manera efectiva la propuesta de valor de la empresa.

El sitio fue construido utilizando Next.js y Tailwind CSS, lo que permitió crear una página rápida, responsive y optimizada para performance. Además, trabajé en la optimización SEO del sitio, estructurando correctamente el contenido, metadata y jerarquía de información para mejorar su visibilidad en buscadores.

El objetivo principal del proyecto fue crear una presencia digital atractiva y profesional que generara confianza y captara nuevos clientes, combinando diseño visual, buenas prácticas de desarrollo web y optimización para motores de búsqueda.`,
    images: ["/hariaz-1.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "mazzo-developments",
    title: "Mazzo Developments",
    year: 2025,
    description: `Mazzo Developments es una software factory enfocada en el desarrollo de productos digitales, plataformas web y soluciones tecnológicas a medida para empresas y startups. La compañía trabaja en la creación de software escalable, combinando desarrollo moderno, diseño de producto y nuevas tecnologías.

En este proyecto desarrollé toda la página web de la empresa, encargándome de la implementación completa del sitio, la estructura de la landing y la experiencia visual para comunicar de forma clara los servicios y la propuesta de valor de la software factory.

El sitio fue construido utilizando Next.js y Tailwind CSS, priorizando performance, diseño moderno y una arquitectura escalable, lo que permitió crear una web rápida, responsive y optimizada para presentar los proyectos y capacidades de la empresa.

El objetivo principal fue construir una presencia digital profesional para Mazzo Developments, que funcione como punto central para mostrar los servicios de desarrollo, comunicar la identidad de la empresa y generar nuevas oportunidades de negocio.`,
    images: ["/mazzo-1.png", "/mazzo-2.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "gecko",
    title: "Gecko",
    year: 2024,
    description: `Gecko es un software de gestión clínica desarrollado para centros médicos, utilizado para administrar pacientes, turnos, historias clínicas y distintos procesos administrativos dentro de instituciones de salud. La plataforma está orientada a mejorar la organización y digitalización de la información médica, optimizando el trabajo diario de profesionales y personal administrativo.

En este proyecto trabajé en soporte técnico, mantenimiento e implementación de nuevas funcionalidades, colaborando en la mejora continua del sistema y en la resolución de necesidades específicas del producto.

La plataforma está desarrollada con Angular en el frontend y Java en el backend, y mi trabajo se centró en agregar nuevas features, mejorar funcionalidades existentes y asistir en la estabilidad del sistema, asegurando que el software pudiera adaptarse a los requerimientos de los centros médicos que lo utilizan.

El proyecto me permitió trabajar sobre un sistema de software en producción dentro del sector salud, participando en su evolución y mantenimiento para mejorar la eficiencia de la gestión clínica.`,
    images: ["/gecko-1.png"],
    tech: ["Angular", "Java"],
  },
  {
    slug: "atp-solutions",
    title: "ATP Solutions",
    year: 2024,
    description: `ATP Solutions es una empresa especializada en soluciones industriales y comercio internacional, dedicada a proveer materiales y componentes para industrias como oil & gas, minería, energía y petroquímica, además de ofrecer servicios de abastecimiento, logística y comercio exterior para proyectos industriales.

Para esta empresa desarrollamos un software interno de gestión de cotizaciones para operaciones de importación y exportación, diseñado para optimizar el proceso comercial y administrativo asociado a la provisión de insumos industriales.

La aplicación fue construida utilizando Next.js en el frontend y NestJS en el backend, creando una plataforma web que permite centralizar y automatizar la generación de cotizaciones, organizar información de productos y gestionar el flujo de trabajo comercial de la empresa.

Dentro del proyecto me encargué de todo el diseño UX/UI del software, definiendo la estructura de las pantallas, la experiencia de usuario y la interfaz completa de la aplicación para que el equipo pudiera gestionar cotizaciones de manera rápida, clara y eficiente.

El objetivo del sistema fue digitalizar y optimizar el proceso de cotización en operaciones de comercio internacional, mejorando la organización de la información, reduciendo tiempos operativos y facilitando el trabajo del equipo comercial de la empresa.`,
    images: ["/atp-1.webp"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS"],
  },
];
