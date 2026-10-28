# 🚀 Jampi Bryan — Portfolio Profesional

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Portafolio web oficial de Jeampierre Bryan Amaya Culqui (Jampi Bryan)**  
Desarrollador Full Stack | Bachiller en Ingeniería de Sistemas | Especialista en TI & Data Science

🌐 **Sitio Web en Vivo:** [https://jampibryan.com](https://jampibryan.com)

</div>

---

## 📌 Descripción del Proyecto

Este proyecto representa la **modernización y migración arquitectónica integral** del portafolio personal desde una versión inicial en HTML/CSS estático hacia una aplicación web moderna, escalable y de alto rendimiento construida con el ecosistema de **Next.js 16 (App Router)** y **React 19**.

Está diseñado bajo una estética moderna *Dark Theme* con iluminación sutil (glows), micro-interacciones fluidas y componentes totalmente modulares orientados a la experiencia del usuario y reclutadores técnicos.

---

## ✨ Características Principales

* ⚡ **Arquitectura Next.js 16 + React 19:** Renderizado híbrido con Turbopack para compilación ultra rápida.
* 📱 **Diseño 100% Responsive:** Experiencia optimizada para móviles, tablets y pantallas de escritorio.
* 💼 **Experiencia Laboral Interactiva:**
  * Pestañas de filtrado dinámico por perfil (*Todo*, *Desarrollo de Software*, *Gestión de Datos & TI*).
  * Tarjetas expandibles/colapsables con desglose de logros clave.
  * Resaltado automático de tecnologías (.NET Clean Architecture, SQL Server, microservicios SUNAT, IA PRIME, React Native, Laravel, Power BI, etc.).
* 🛠️ **Competencias & Habilidades:**
  * 6 disciplinas tecnológicas especializadas.
  * Habilidades blandas con diseño centrado y tarjetas informativas.
* 📜 **Certificaciones Profesionales:** Credenciales organizadas con emisores y años.
* 📥 **Descarga de CV Oficial:** Enlace directo con atributo de descarga para obtener la versión curricular más reciente.
* 📬 **Formulario de Contacto:** Integración opcional lista para Formspree / EmailJS con validaciones en tiempo real mediante React Hook Form.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
|------|-------------|
| **Core** | Next.js 16, React 19, TypeScript 5 |
| **Estilos** | Tailwind CSS 4, Google Fonts (Inter, Poppins, Fira Code) |
| **Animaciones** | Framer Motion 12 |
| **Iconos** | Lucide React, SVG Icons personalizados |
| **Formularios** | React Hook Form |
| **Infraestructura** | Vercel Edge Network, Porkbun DNS (Dominio `jampibryan.com`), Turbopack |

---

## 📂 Estructura del Proyecto

```text
jampibryan/
├── app/
│   ├── favicon.ico             # Favicon institucional
│   ├── globals.css             # Configuración de estilos globales y temas
│   ├── layout.tsx              # Layout raíz con metadatos SEO y fuentes
│   └── page.tsx                # Página principal (Single Page Application)
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Barra de navegación flotante con menú móvil
│   │   └── Footer.tsx          # Pie de página y enlaces rápidos
│   ├── sections/
│   │   ├── Hero.tsx            # Presentación con efecto typing y llamada a la acción
│   │   ├── SobreMi.tsx         # Resumen profesional y estadísticas destacadas
│   │   ├── Competencias.tsx    # Áreas de dominio técnico
│   │   ├── Habilidades.tsx     # Habilidades blandas
│   │   ├── Experiencia.tsx     # Timeline interactivo con filtrado y detalles
│   │   ├── Certificaciones.tsx # Credenciales y certificaciones
│   │   └── Contacto.tsx        # Formulario y canales de contacto directo
│   └── ui/
│       ├── AnimatedSection.tsx # Contenedor para animaciones de entrada
│       ├── SectionHeader.tsx   # Encabezado estándar de sección
│       ├── SocialIcons.tsx     # Iconografía de redes sociales
│       └── Tag.tsx             # Badges de tecnologías y habilidades
├── hooks/
│   └── useTypingEffect.ts      # Custom hook para animación de texto en el Hero
├── lib/
│   └── data.ts                 # Fuente única de verdad (Single Source of Truth) para todo el contenido
├── public/
│   ├── CV - JEAMPIERRE BRYAN AMAYA CULQUI.pdf  # CV oficial descargable
│   └── img/
│       ├── JampiBryan.jpg      # Fotografía de perfil profesional
│       └── Logo.png            # Logotipo de marca personal
├── .env.example                # Plantilla de variables de entorno
├── next.config.ts              # Configuración de Next.js
├── package.json                # Dependencias y scripts del proyecto
└── tsconfig.json               # Configuración estricta de TypeScript
```

---

## 🚀 Puesta en Marcha en Local

### Prerrequisitos
* Node.js v18.18.0 o superior
* npm, pnpm o yarn

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jampibryan/jampibryan.git
   cd jampibryan
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno (opcional):**
   ```bash
   cp .env.example .env.local
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🌐 Despliegue en Producción (Vercel + Porkbun)

1. **Vercel:**
   * Importar el repositorio desde GitHub (`jampibryan/jampibryan`).
   * Vercel detecta automáticamente la configuración de Next.js.
   * Clic en **Deploy**.

2. **Dominio Personalizado (`jampibryan.com`):**
   * En Vercel: `Settings` → `Domains` → Agregar `jampibryan.com`.
   * En Porkbun: Configurar registros DNS:
     * **Tipo A:** Host `@` → `76.76.21.21`
     * **Tipo CNAME:** Host `www` → `cname.vercel-dns.com`

---

## 👤 Autor

**Jeampierre Bryan Amaya Culqui (Jampi Bryan)**
* 💼 **LinkedIn:** [linkedin.com/in/jampibryan](https://www.linkedin.com/in/jampibryan)
* 🐙 **GitHub:** [github.com/jampibryan](https://github.com/jampibryan)
* 📧 **Email:** jamayac@unitru.edu.pe
* 📍 **Ubicación:** Pacasmayo, La Libertad, Perú
