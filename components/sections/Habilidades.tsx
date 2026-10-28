'use client';

import React from 'react';
import { SOFT_SKILLS } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Habilidades() {
  return (
    <section id="habilidades" className="py-20 sm:py-24 relative bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Habilidades Blandas"
          subtitle="Cualidades y valores que definen mi desempeño profesional y trabajo en equipo"
          align="center"
        />

        {/* Flex container con justify-center para que la última fila quede centrada en el medio */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {SOFT_SKILLS.map((skill, index) => (
            <AnimatedSection
              key={skill.title}
              delay={index * 0.08}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-5 sm:p-6 rounded-2xl bg-[#16161f] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-start"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-base font-bold text-white">
                  {skill.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {skill.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
