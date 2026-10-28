'use client';

import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Tag } from '@/components/ui/Tag';
import { GithubIcon } from '@/components/ui/SocialIcons';

export function Proyectos() {
  return (
    <section id="proyectos" className="py-24 relative bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Una muestra de las soluciones, aplicaciones y sistemas que he desarrollado"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 0.1}
              className="group p-8 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <FolderGit2 size={24} />
                  </div>

                  <div className="flex items-center gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Código en GitHub"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver Demo en Vivo"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
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
