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
  cvPath: '/CV-JampiBryan.pdf',
  photoPath: '/img/JampiBryan.jpg',
  logoPath: '/img/Logo.png',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Competencias', href: '#competencias' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
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
  { number: '2', label: 'Áreas de especialización' },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    title: 'Full Stack Development',
    description:
      'Desarrollo de aplicaciones web completas, desde el frontend con React y JavaScript hasta el backend con C#, Spring Boot y Laravel.',
    icon: '💻',
    tags: ['React', 'C#', 'Spring Boot', 'Laravel', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Soporte TI & Infraestructura',
    description:
      'Soporte técnico a nivel corporativo, administración de redes, mantenimiento de equipos y gestión de infraestructura tecnológica.',
    icon: '🖥️',
    tags: ['Redes', 'SAP', 'Active Directory', 'Help Desk', 'Windows Server'],
  },
  {
    title: 'Data Science & IA',
    description:
      'Análisis de datos, visualización con Power BI, modelado predictivo con Python y aplicación de técnicas de Machine Learning.',
    icon: '📊',
    tags: ['Python', 'Power BI', 'SQL', 'Machine Learning', 'Data Analysis'],
  },
  {
    title: 'Automatización de Procesos',
    description:
      'Automatización de tareas repetitivas, integración de sistemas y optimización de flujos de trabajo para mayor productividad.',
    icon: '⚙️',
    tags: ['APIs', 'Scripts', 'RPA', 'CI/CD', 'Power Automate'],
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
    role: 'Asistente de TI',
    company: 'Agrícola y Ganadera Chavín de Huántar S.A. (AG Chavin)',
    year: '2026',
    description: [
      '💻 Actualmente me desempeño como Asistente de TI, brindando soporte técnico a usuarios finales, realizando mantenimiento preventivo y correctivo de equipos, y apoyando en la operación básica de redes y herramientas digitales corporativas.',
      'Asimismo, participo en la gestión de requerimientos tecnológicos, organización de información, y propuestas de mejora orientadas a optimizar procesos y asegurar la continuidad operativa, aplicando buenas prácticas de TI.',
    ],
    tags: ['Redes', 'Soporte TI', 'Windows Server', 'Help Desk'],
  },
  {
    role: 'Asistente de Gestión de Datos y Sistemas',
    company: 'Programa Nacional de Apoyo Directo a los Más Pobres - JUNTOS (MIDIS)',
    year: '2025',
    description: [
      '📈 Participé activamente en la administración, validación y análisis de datos del sistema SITC.',
      'Esta experiencia me permitió profundizar en la gestión de información a gran escala y contribuir a procesos sociales con impacto real, fortaleciendo mis habilidades en el sector público.',
    ],
    tags: ['Gestión de Datos', 'SQL', 'SITC', 'Soporte de Sistemas'],
  },
  {
    role: 'Técnico en Soporte de Hardware y Redes',
    company: 'CETPRO Computronic',
    year: '2025',
    description: [
      '🚀 Consolidé habilidades técnicas en campo: desde el diagnóstico y reparación de equipos de cómputo hasta la configuración y gestión de redes locales.',
      'Atención directa y resolución inmediata con enfoque en la satisfacción del usuario y mantenimiento preventivo.',
    ],
    tags: ['Hardware', 'Redes', 'Diagnóstico', 'Mantenimiento'],
  },
  {
    role: 'Auxiliar de TI',
    company: 'Municipalidad C.P. Talambo',
    year: '2024',
    description: [
      '🙏 Desarrollo de soluciones tecnológicas desde cero y optimización de procesos administrativos internos.',
      'Administración de equipos, aseguramiento de la información pública y capacitación a colaboradores municipales.',
    ],
    tags: ['Soporte TI', 'Capacitación', 'Gestión Pública', 'Redes'],
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
