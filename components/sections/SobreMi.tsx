'use client';

import React from 'react';
import { PERSONAL_INFO, STATS } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-24 relative bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Sobre mí"
          subtitle="Conóceme un poco más y descubre mi visión profesional"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Text content */}
          <AnimatedSection className="lg:col-span-7 space-y-4 sm:space-y-6 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {PERSONAL_INFO.about.map((paragraph, index) => (
              <p key={index} className="text-zinc-300">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          {/* Stats grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="p-4 sm:p-6 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1 font-heading">
                  {stat.number}
                </div>
                <div className="text-[11px] sm:text-xs uppercase font-medium tracking-wider text-zinc-400">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
