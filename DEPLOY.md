# 🚀 Guía de Despliegue en Vercel y Configuración de Porkbun

Este proyecto fue migrado exitosamente a **Next.js (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion**.

---

## 💻 1. Probar en Local

Abre tu terminal en la carpeta del proyecto:

```bash
npm run dev
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🐙 2. Subir tu proyecto a GitHub

Verifica el estado de tus ramas y sube los cambios:

```bash
git add .
git commit -m "feat: migrar portafolio web de HTML estático a React con Next.js, TypeScript, Tailwind CSS, animaciones interactivas, diseño responsive y experiencia laboral actualizada desde CV oficial"
git push origin main
```

---

## ⚡ 3. Desplegar en Vercel

1. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en el botón **"+ Create New"** → **"Project"**.
3. Selecciona tu repositorio **`jampibryan`** y presiona **"Import"**.
4. En **Framework Preset**, Vercel detectará automáticamente **Next.js**.
5. (Opcional) Si quieres activar el envío de formulario por Formspree, despliega la pestaña **Environment Variables** y agrega:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: `https://formspree.io/f/TU_ID`
6. Haz clic en **"Deploy"**.

En menos de 1 minuto tendrás tu web online con un enlace como:
`https://jampibryan.vercel.app`

---

## 🌐 4. Vincular tu Dominio Propio en Porkbun (`jampibryan.com`)

Una vez desplegado tu proyecto en Vercel:

1. Ve a tu proyecto en Vercel → pestaña **"Settings"** → **"Domains"**.
2. Escribe tu dominio: `jampibryan.com` y haz clic en **"Add"**.
3. Selecciona la opción recomendada para redirigir `www.jampibryan.com` a `jampibryan.com`.
4. Ve al panel de **Porkbun**:
   * En tu lista de dominios, ubica `jampibryan.com` y haz clic en el botón **"DNS"**.
   * Elimina cualquier registro existente tipo *parking* o *default* de Porkbun.
   * Agrega los siguientes registros DNS:

| Tipo | Host | Answer / IP | TTL |
|------|------|-------------|-----|
| **A** | `@` (o en blanco) | `76.76.21.21` | 600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 |

5. Espera entre 5 a 15 minutos mientras se propagan las DNS y Vercel genera automáticamente el **certificado SSL HTTPS gratuito**.
6. ¡Listo! Tu portafolio estará activo y protegido con SSL en **https://jampibryan.com**.

---

## 📁 Dónde editar tus datos

Toda la información del portafolio está 100% centralizada en:
`lib/data.ts`

Ahí puedes actualizar en un solo lugar:
- Títulos y descripción
- Experiencia laboral
- Habilidades y competencias
- Proyectos
- Certificaciones
- Redes sociales
