# 🚀 Guía de Despliegue en Vercel y Configuración de Dominio

Este proyecto fue migrado exitosamente a **Next.js (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion**.

---

## 💻 1. Probar en Local

Abre tu terminal en la carpeta `jampibryan-next`:

```bash
cd c:\xampp\htdocs\jampibryan-next
npm run dev
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🐙 2. Subir tu proyecto a GitHub

1. Ve a [GitHub](https://github.com/new) y crea un nuevo repositorio llamado:
   `portfolio-jampibryan` (o el nombre que prefieras). Deja las opciones de README y .gitignore desmarcadas porque ya las tenemos creadas.

2. En tu terminal (dentro de `c:\xampp\htdocs\jampibryan-next`):

```bash
git remote add origin https://github.com/TU_USUARIO/portfolio-jampibryan.git
git branch -M main
git push -u origin main
```

---

## ⚡ 3. Desplegar en Vercel (Gratis)

1. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en el botón **"Add New..."** → **"Project"**.
3. Verás una lista de tus repositorios de GitHub. Busca `portfolio-jampibryan` y presiona **"Import"**.
4. En **Framework Preset**, Vercel detectará automáticamente **Next.js**.
5. (Opcional) Si quieres activar el envío de formulario por Formspree, despliega la pestaña **Environment Variables** y agrega:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: `https://formspree.io/f/TU_ID`
6. Haz clic en **"Deploy"**.

En menos de 1 minuto tendrás tu web online con un enlace temporal como:
`https://portfolio-jampibryan.vercel.app`

---

## 🌐 4. Vincular tu Dominio Propio (ej. `jampibryan.com`)

Una vez desplegado tu proyecto en Vercel:

1. Ve a tu proyecto en Vercel → pestaña **"Settings"** → **"Domains"**.
2. Escribe tu dominio (ejemplo: `tudominio.com` o `www.tudominio.com`) y haz clic en **"Add"**.
3. Vercel te mostrará los registros DNS que debes agregar en el panel de tu proveedor de dominio (GoDaddy, Namecheap, DonDominio, Hostinger, Cloudflare, etc.):

### Registros DNS típicos para configurar:

| Tipo | Nombre / Host | Valor / Destino |
|------|---------------|-----------------|
| **A** | `@` (o en blanco) | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com.` |

4. Espera entre 5 a 30 minutos mientras se propagan las DNS y se genera automáticamente el **certificado SSL HTTPS gratuito**.
5. ¡Listo! Tu portafolio estará activo y protegido con SSL en tu propio dominio.

---

## 📁 Dónde editar tus datos

Toda la información del portafolio está 100% centralizada en:
`lib/data.ts`

Ahí puedes actualizar en un solo lugar:
- Tus títulos y descripción
- Experiencia laboral
- Habilidades y competencias
- Proyectos
- Certificaciones
- Redes sociales
