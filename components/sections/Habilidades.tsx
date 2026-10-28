'use client';

import React from 'react';
import { SOFT_SKILLS } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Habilidades() {
  return (
    <section id="habilidades" className="py-24 relative bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Habilidades Blandas"
          subtitle="Cualidades y valores que definen mi desempeño profesional y trabajo en equipo"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFT_SKILLS.map((skill, index) => (
            <AnimatedSection
              key={skill.title}
              delay={index * 0.08}
              className="p-6 rounded-2xl bg-[#16161f] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-base font-bold text-white">
                  {skill.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
