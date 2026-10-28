'use client';

import React from 'react';
import { COMPETENCIES } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Tag } from '@/components/ui/Tag';

export function Competencias() {
  return (
    <section id="competencias" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Competencias"
          subtitle="Tecnologías, arquitecturas y disciplinas en las que enfoco mi desarrollo profesional"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {COMPETENCIES.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.08}
              className="p-5 sm:p-7 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Ícono centrado en mobile, alineado a la izquierda desde sm */}
                <div className="flex justify-center sm:justify-start text-3xl sm:text-4xl mb-4">
                  <span>{item.icon}</span>
                </div>

                {/* Título centrado en mobile, alineado a la izquierda desde sm */}
                <h3 className="text-center sm:text-left text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* Descripción centrada en mobile, alineada a la izquierda desde sm */}
                <p className="text-center sm:text-left text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags centradas en mobile, alineadas a la izquierda desde sm */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 pt-4 border-t border-white/5">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
