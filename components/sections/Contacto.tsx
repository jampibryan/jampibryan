'use client';

import dynamic from 'next/dynamic';
import { Mail, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SOCIAL_LINKS } from '@/lib/data';
import { LinkedinIcon } from '@/components/ui/SocialIcons';

// Mount the fields in the browser so autofill extensions cannot modify them before hydration.
const FormularioContacto = dynamic(() => import('./FormularioContacto'), {
  ssr: false,
  loading: () => (
    <div role="status" className="flex min-h-[31rem] items-center justify-center rounded-2xl border border-white/5 bg-[#16161f] text-sm text-zinc-400">
      Cargando formulario…
    </div>
  ),
});

export function Contacto() {
  const linkedinUrl = SOCIAL_LINKS.find((s) => s.name === 'LinkedIn')?.url || '#';

  return (
    <section id="contacto" className="py-20 sm:py-24 relative bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente o buscas incorporar talento a tu equipo? Escríbeme y conversemos."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Quick info column */}
          <AnimatedSection className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16161f] border border-white/5 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Hablemos
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Estoy disponible para oportunidades laborales, consultorías y proyectos tecnológicos en desarrollo web, TI y análisis de datos.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Ubicación</div>
                    <div className="text-xs sm:text-sm font-semibold">Perú (Disponible remoto y presencial)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">LinkedIn</div>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-blue-400 hover:underline break-all"
                    >
                      /in/jampibryan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Respuesta</div>
                    <div className="text-xs sm:text-sm font-semibold">En menos de 24 horas</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form column */}
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <FormularioContacto />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
