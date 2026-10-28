'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SOCIAL_LINKS } from '@/lib/data';
import { LinkedinIcon } from '@/components/ui/SocialIcons';

interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export function Contacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setStatusMessage('');

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Hubo un problema al enviar el formulario.');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus('success');
      setStatusMessage('¡Gracias! Tu mensaje ha sido enviado correctamente.');
      reset();
    } catch {
      setStatus('error');
      setStatusMessage('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo o contáctame por LinkedIn.');
    }
  };

  const linkedinUrl = SOCIAL_LINKS.find((s) => s.name === 'LinkedIn')?.url || '#';

  return (
    <section id="contacto" className="py-24 relative bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente o buscas incorporar talento a tu equipo? Escríbeme y conversemos."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Quick info column */}
          <AnimatedSection className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#16161f] border border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Hablemos
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Estoy disponible para oportunidades laborales, consultorías y proyectos tecnológicos en desarrollo web, TI y análisis de datos.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Ubicación</div>
                    <div className="text-sm font-semibold">Perú (Disponible remoto y presencial)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">LinkedIn</div>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-400 hover:underline"
                    >
                      /in/jampibryan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Respuesta</div>
                    <div className="text-sm font-semibold">En menos de 24 horas</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form column */}
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-2xl bg-[#16161f] border border-white/5 space-y-6"
            >
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  {...register('nombre', { required: 'El nombre es obligatorio' })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                {errors.nombre && (
                  <p className="mt-1 text-xs text-red-400">{errors.nombre.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  {...register('email', {
                    required: 'El correo es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo electrónico no válido',
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Asunto */}
              <div>
                <label
                  htmlFor="asunto"
                  className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
                >
                  Asunto
                </label>
                <input
                  id="asunto"
                  type="text"
                  placeholder="Propuesta de proyecto / Oportunidad"
                  {...register('asunto', { required: 'El asunto es obligatorio' })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                {errors.asunto && (
                  <p className="mt-1 text-xs text-red-400">{errors.asunto.message}</p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto o necesidad..."
                  {...register('mensaje', {
                    required: 'El mensaje es obligatorio',
                    minLength: { value: 10, message: 'Mínimo 10 caracteres' },
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                />
                {errors.mensaje && (
                  <p className="mt-1 text-xs text-red-400">{errors.mensaje.message}</p>
                )}
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <CheckCircle2 size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
              >
                {status === 'loading' ? (
                  <span>Enviando mensaje...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
