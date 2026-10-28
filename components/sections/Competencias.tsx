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
          subtitle="Tecnologías y disciplinas en las que enfoco mi desarrollo profesional"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {COMPETENCIES.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.1}
              className="p-6 sm:p-8 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
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
