'use client';

import React from 'react';
import { CERTIFICATIONS } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Certificaciones() {
  return (
    <section id="certificaciones" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Certificaciones"
          subtitle="Formación continua, especializaciones y credenciales profesionales"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <AnimatedSection
              key={`${cert.title}-${cert.issuer}-${index}`}
              delay={index * 0.05}
              className="p-6 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 text-center flex flex-col items-center justify-between"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>

              <div className="mb-4">
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cert.issuer}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-zinc-300 border border-white/10">
                {cert.year}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
