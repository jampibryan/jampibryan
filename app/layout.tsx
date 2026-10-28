import type { Metadata } from 'next';
import { Inter, Poppins, Fira_Code } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const firaCode = Fira_Code({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jampibryan.com'),
  title: 'Jampi Bryan — Desarrollador Full Stack | TI | Data Science & IA',
  description:
    'Portfolio profesional de Jampi Bryan (Jeampierre Bryan Amaya Culqui). Desarrollador Full Stack, Especialista en TI y Análisis de Datos.',
  keywords: [
    'Jampi Bryan',
    'Jeampierre Amaya',
    'Desarrollador Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Data Science',
    'TI',
    'Power BI',
    'Python',
  ],
  authors: [{ name: 'Jampi Bryan', url: 'https://github.com/jampibryan' }],
  creator: 'Jampi Bryan',
  icons: {
    icon: '/img/Logo.png',
    apple: '/img/Logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://jampibryan.com',
    title: 'Jampi Bryan — Portfolio Profesional',
    description:
      'Transformo ideas en soluciones digitales de alto impacto. Desarrollador Full Stack, TI y Data Science & IA.',
    siteName: 'Jampi Bryan Portfolio',
    images: [
      {
        url: '/img/JampiBryan.jpg',
        width: 800,
        height: 800,
        alt: 'Jampi Bryan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jampi Bryan — Portfolio Profesional',
    description:
      'Desarrollador Full Stack | TI | Data Science & IA',
    images: ['/img/JampiBryan.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} ${firaCode.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0f] text-[#e4e4e7] antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
