'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Tag } from '@/components/ui/Tag';

export function Experiencia() {
  return (
    <section id="experiencia" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Experiencia Laboral"
          subtitle="Mi trayectoria profesional en instituciones públicas y empresas privadas"
        />

        <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 md:pl-10 space-y-8 sm:space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <AnimatedSection
              key={`${exp.company}-${index}`}
              delay={index * 0.1}
              className="relative group"
            >
              {/* Glowing Timeline Marker with responsive offset */}
              <div className="absolute -left-[27px] sm:-left-[39px] md:-left-[47px] top-6 sm:top-7 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300" />

              {/* Experience Card */}
              <div className="p-5 sm:p-8 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {exp.year}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-blue-400/90 mb-4">
                  {exp.company}
                </div>

                <div className="space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} variant="muted">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
