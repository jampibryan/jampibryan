export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'youtube';
}

export interface StatItem {
  number: string;
  label: string;
}

export interface CompetencyItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface SoftSkillItem {
  title: string;
  icon: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  year: string;
  description: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const PERSONAL_INFO = {
  name: 'Jampi Bryan',
  fullName: 'Jeampierre Bryan Amaya Culqui',
  titles: [
    'Desarrollador Full Stack',
    'Tecnologías de la Información',
    'Data Science & IA',
  ],
  tagline:
    'Transformo ideas en soluciones digitales de alto impacto. Apasionado por la tecnología, la innovación y el aprendizaje continuo.',
  about: [
    'Soy un profesional de Tecnologías de la Información con experiencia en desarrollo Full Stack, soporte técnico y análisis de datos. Me interesa aprender constantemente y aplicar la tecnología para mejorar procesos y resolver problemas reales de manera práctica.',
    'He trabajado en instituciones públicas y privadas, donde he desarrollado sistemas web, automatizado procesos y brindado soporte técnico a nivel corporativo.',
    'Mi enfoque combina la creatividad con el pensamiento analítico para resolver problemas complejos de manera eficiente y escalable.',
  ],
  cvPath: '/CV%20-%20JEAMPIERRE%20BRYAN%20AMAYA%20CULQUI.pdf',
  cvFileName: 'CV - JEAMPIERRE BRYAN AMAYA CULQUI.pdf',
  photoPath: '/img/JampiBryan.jpg',
  logoPath: '/img/Logo.png',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Competencias', href: '#competencias' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/jampibryan',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jampibryan',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jampibryan',
    icon: 'instagram',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@jampibryan',
    icon: 'youtube',
  },
];

export const STATS: StatItem[] = [
  { number: '2+', label: 'Años de experiencia' },
  { number: '5+', label: 'Proyectos completados' },
  { number: '10+', label: 'Certificaciones' },
  { number: '6', label: 'Áreas de especialización' },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    title: 'Full Stack Development',
    description:
      'Desarrollo de aplicaciones web modernas y escalables de extremo a extremo, combinando interfaces reactivas con lógica backend robusta bajo principios Clean Code.',
    icon: '💻',
    tags: ['React', 'TypeScript', 'C# / .NET', 'Spring Boot', 'Laravel', 'Tailwind CSS'],
  },
  {
    title: 'Arquitectura & Microservicios',
    description:
      'Diseño de sistemas desacoplados bajo Clean Architecture, microservicios independientes e integración de APIs críticas de facturación electrónica y entidades regulatorias (SUNAT).',
    icon: '🧩',
    tags: ['Microservicios', 'Clean Architecture', 'REST APIs', 'Integración SUNAT', 'DDD'],
  },
  {
    title: 'DevOps, Cloud & CI/CD',
    description:
      'Automatización del ciclo de vida del software con pipelines CI/CD, contenedorización de aplicaciones con Docker, control de versiones avanzado y despliegues continuos en la nube.',
    icon: '☁️',
    tags: ['Docker', 'CI/CD', 'Git & GitHub', 'Vercel', 'Linux / Bash', 'Cloud Deploy'],
  },
  {
    title: 'Data Science, IA & Analytics',
    description:
      'Análisis exploratorio de datos (EDA), diseño de dashboards estratégicos en Power BI, modelado predictivo con Python e integración de asistentes de Inteligencia Artificial para consultas en lenguaje natural.',
    icon: '📊',
    tags: ['Python', 'Power BI', 'SQL Server', 'Machine Learning', 'IA Generativa', 'EDA'],
  },
  {
    title: 'Desarrollo Móvil Multiplataforma',
    description:
      'Creación y mantenimiento de aplicaciones móviles para Android e iOS con React Native y Expo, digitalizando la gestión interna de boletas, reportes y procesos operativos.',
    icon: '📱',
    tags: ['React Native', 'Expo', 'Mobile UI/UX', 'Cross-Platform', 'Offline First'],
  },
  {
    title: 'Soporte TI & Infraestructura',
    description:
      'Administración de infraestructura corporativa, configuración y mantenimiento de redes LAN, gestión de servidores Windows Server, soporte técnico a usuarios y entornos ERP (SAP MM/FI).',
    icon: '🖥️',
    tags: ['Windows Server', 'Redes LAN', 'SAP MM/FI', 'Active Directory', 'Help Desk L2'],
  },
];

export const SOFT_SKILLS: SoftSkillItem[] = [
  {
    title: 'Comunicación Efectiva',
    icon: '💬',
    description:
      'Capacidad para transmitir ideas y resultados de manera clara y concisa, facilitando la colaboración y el entendimiento mutuo en equipos multidisciplinarios.',
  },
  {
    title: 'Trabajo en Equipo',
    icon: '🤝',
    description:
      'Habilidad para integrarse y colaborar en equipos diversos, contribuyendo al logro de objetivos comunes y fomentando un ambiente de cooperación.',
  },
  {
    title: 'Pensamiento Crítico',
    icon: '🧠',
    description:
      'Capacidad para analizar situaciones complejas, identificar problemas y proponer soluciones efectivas basadas en un razonamiento lógico y fundamentado.',
  },
  {
    title: 'Conciencia de Seguridad',
    icon: '🛡️',
    description:
      'Compromiso con las normativas de seguridad y salud ocupacional, priorizando la prevención de riesgos y promoviendo prácticas laborales seguras.',
  },
  {
    title: 'Adaptabilidad',
    icon: '🔄',
    description:
      'Flexibilidad para ajustarse a cambios y nuevas tecnologías, manteniendo la eficacia y eficiencia en entornos dinámicos.',
  },
  {
    title: 'Resolución de Problemas',
    icon: '🔧',
    description:
      'Proactividad para identificar y abordar desafíos operativos, desarrollando soluciones innovadoras que mejoren los procesos y resultados.',
  },
  {
    title: 'Liderazgo',
    icon: '🚀',
    description:
      'Capacidad para guiar y motivar a equipos de trabajo, orientándolos hacia el logro de metas y el desarrollo profesional continuo.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Desarrollador de Software',
    company: 'Agrícola y Ganadera Chavín de Huántar S.A.',
    location: 'Casma, Perú',
    year: 'Ene 2026 – Oct 2026',
    description: [
      'Diseñé y desarrollé desde cero Chavín Prime, un ERP empresarial orientado a integrar procesos de distintas áreas, incluyendo la gestión operativa y la trazabilidad de la materia prima, desde el levantamiento de requerimientos hasta la implementación de funcionalidades.',
      'Desarrollé funcionalidades backend con C#/.NET bajo los principios de Clean Architecture, utilizando SQL Server para la gestión de datos y React para la construcción de interfaces web.',
      'Desarrollé un microservicio para la gestión y emisión de Guías de Remisión Electrónicas, integrado con Chavín Prime y SUNAT para la transmisión y validación de documentos electrónicos.',
      'Participé en el desarrollo de PRIME, un asistente de inteligencia artificial que permite consultar mediante lenguaje natural información del sistema y datos operativos actualizados de la empresa.',
      'Implementé reportes y visualizaciones de información para facilitar el seguimiento de procesos, el análisis de datos y la toma de decisiones empresariales.',
      'Participé en el desarrollo de una aplicación móvil con React Native y Expo para la gestión de boletas de Recursos Humanos, contribuyendo a la digitalización de procesos internos.',
    ],
    tags: [
      'C#',
      '.NET',
      'Clean Architecture',
      'React',
      'SQL Server',
      'Microservicios',
      'SUNAT',
      'Inteligencia Artificial',
      'React Native',
      'Expo',
    ],
  },
  {
    role: 'Asistente de Gestión de Datos y Sistemas',
    company: 'Programa Nacional de Apoyo a los Más Pobres - JUNTOS',
    location: 'Chiclayo, Perú',
    year: 'Jun 2025 – Dic 2025',
    description: [
      'Desarrollé dashboards en Power BI para el monitoreo de indicadores y la visualización de información del sistema SITC, facilitando el análisis de datos para la toma de decisiones.',
      'Realicé procesos de limpieza, transformación y validación de datos con Excel, mejorando la calidad y confiabilidad de la información.',
      'Automaticé la elaboración y actualización de reportes mediante herramientas de Excel y Power BI, optimizando el procesamiento de información operativa.',
      'Realicé análisis exploratorio de datos (EDA) para identificar tendencias, variaciones e inconsistencias en los registros, generando información útil para la gestión institucional.',
      'Diseñé visualizaciones e informes analíticos para comunicar hallazgos y facilitar la interpretación de datos por parte de los responsables de gestión.',
    ],
    tags: [
      'Power BI',
      'Excel Avanzado',
      'Gestión de Datos',
      'EDA',
      'SITC',
      'SQL',
      'Dashboards',
    ],
  },
  {
    role: 'Técnico en Soporte de Hardware y Redes',
    company: 'CETPRO Computronic',
    location: 'Perú',
    year: 'Ene 2025 – May 2025',
    description: [
      'Consolidé habilidades técnicas en campo: diagnóstico, mantenimiento preventivo y correctivo de equipos de cómputo y periféricos.',
      'Configuración e instalación de redes de área local (LAN) y aseguramiento de la conectividad en entornos operativos.',
      'Atención directa a usuarios y resolución inmediata de incidencias técnicas con enfoque en servicio y calidad.',
    ],
    tags: [
      'Hardware',
      'Redes LAN',
      'Mantenimiento Preventivo',
      'Soporte Técnico',
      'Diagnóstico',
    ],
  },
  {
    role: 'Programador Backend',
    company: 'Municipalidad del Centro Poblado de Talambo',
    location: 'Chiclayo, Perú',
    year: 'Set 2024 – Dic 2024',
    description: [
      'Diseñé e implementé desde cero un sistema para la gestión de pagos y deudas de agua potable, optimizando los procesos administrativos municipales mediante Laravel y MySQL.',
      'Automaticé la conciliación de ingresos, mejorando la transparencia y eficiencia en la administración de recursos.',
      'Aseguré una estructura escalable y eficiente para el manejo de datos financieros.',
      'Identifiqué y resolví problemas técnicos en la lógica del sistema, garantizando su correcto funcionamiento.',
      'Coordiné con personal administrativo para adaptar el sistema a sus necesidades operativas.',
    ],
    tags: [
      'Laravel',
      'PHP',
      'MySQL',
      'Backend',
      'Finanzas',
      'Bases de Datos',
    ],
  },
  {
    role: 'Desarrollador WordPress',
    company: 'Creanding',
    location: 'Remoto',
    year: 'Jun 2024 – Ago 2024',
    description: [
      'Desarrollé sitios web personalizados en WordPress para clientes, asegurando funcionalidades específicas, diseño optimizado, integración de plugins y compatibilidad con SEO.',
      'Diseñé interfaces en Figma, priorizando usabilidad y experiencia de usuario (UI/UX).',
      'Mejoré la velocidad de carga y eficiencia de los sitios aplicando buenas prácticas de desarrollo web.',
      'Implementé estrategias SEO y optimización web para aumentar la visibilidad en buscadores.',
      'Trabajé en equipo gestionando el ciclo completo del desarrollo web, utilizando Git para control de versiones.',
    ],
    tags: [
      'WordPress',
      'Figma',
      'UI/UX',
      'SEO',
      'Git',
      'Web Performance',
    ],
  },
  {
    role: 'Desarrollador FullStack',
    company: 'Freelance',
    location: 'Remoto',
    year: 'Ene 2022 – Mar 2023',
    description: [
      'Creé páginas web dinámicas e interactivas utilizando Laravel, PHP, Bootstrap y MySQL, adaptadas a las necesidades de cada cliente.',
      'Diseñé y desarrollé un sistema para la venta de agua potable, incluyendo módulos de inventario, facturación y seguimiento de pedidos.',
      'Implementé estrategias básicas de SEO y mejoras de rendimiento para asegurar mayor visibilidad.',
      'Diseñé bases de datos relacionales escalables, asegurando un rendimiento óptimo y fácil administración.',
    ],
    tags: [
      'FullStack',
      'Laravel',
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Inglés Profesional',
    issuer: 'CIDUNT — Universidad Nacional de Trujillo',
    year: '2025',
    icon: '🗽',
  },
  {
    title: 'SSOMA en Minería y Construcción',
    issuer: 'Colegio de Ingenieros del Perú',
    year: '2024',
    icon: '🛡️',
  },
  {
    title: 'SAP MM — Logística y Materiales',
    issuer: 'Global Tecnologías Academy',
    year: '2023',
    icon: '📦',
  },
  {
    title: 'SAP FI — Finanzas y Contabilidad',
    issuer: 'Global Tecnologías Academy',
    year: '2023',
    icon: '💰',
  },
  {
    title: 'Excel Avanzado & Empresarial',
    issuer: 'Global Tecnologías Academy',
    year: '2023',
    icon: '📊',
  },
  {
    title: 'Power BI — Business Intelligence',
    issuer: 'Global Tecnologías Academy',
    year: '2023',
    icon: '📈',
  },
  {
    title: 'MS Project — Gestión de Proyectos',
    issuer: 'Global Tecnologías Academy',
    year: '2023',
    icon: '📐',
  },
  {
    title: 'Ofimática Profesional',
    issuer: 'ACIST Perú — Centro de Capacitación Informático',
    year: '2023',
    icon: '💻',
  },
  {
    title: 'Inglés Intermedio',
    issuer: 'ACIST Perú — Centro de Capacitación Informático',
    year: '2023',
    icon: '📚',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Portfolio Personal Next.js',
    description:
      'Sitio web moderno desarrollado con Next.js 16, React 19, TypeScript, Tailwind CSS y Framer Motion con arquitectura modular y optimización para Vercel.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '#',
    repoUrl: 'https://github.com/jampibryan',
    featured: true,
  },
  {
    title: 'Sistema de Gestión y Monitoreo TI',
    description:
      'Plataforma integral para seguimiento de incidencias técnicas, inventario de hardware y administración de infraestructura de red.',
    tags: ['Full Stack', 'C#', '.NET', 'SQL Server', 'React'],
    demoUrl: '#',
    repoUrl: 'https://github.com/jampibryan',
    featured: true,
  },
  {
    title: 'Dashboard de Análisis de Datos & KPI',
    description:
      'Solución analítica desarrollada para visualización de métricas operativas con integración a bases de datos relacionales y reportes interactivos.',
    tags: ['Python', 'Power BI', 'SQL', 'Data Analytics'],
    demoUrl: '#',
    repoUrl: 'https://github.com/jampibryan',
    featured: true,
  },
];
