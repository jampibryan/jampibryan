import { ImageIcon } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tag } from '@/components/ui/Tag';
import { PROJECT_GROUPS } from '@/lib/data';
import { EcosistemaEli } from './EcosistemaEli';
import { ProyectoJarvis } from './ProyectoJarvis';

export function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-20 bg-[#0d0d14]/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Proyectos"
          subtitle="Sistemas, aplicaciones y herramientas que he desarrollado para resolver necesidades concretas."
        />

        <div className="space-y-8 sm:space-y-10">
          <EcosistemaEli />
          {PROJECT_GROUPS.map((group) => (
            <AnimatedSection key={group.title}>
              <section
                aria-label={group.title}
                className="rounded-2xl border border-white/10 bg-[#111119] p-4 sm:p-6 lg:p-8"
              >
                <header className="mb-5 border-l-2 border-blue-500 pl-4 sm:mb-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{group.title}</h3>
                  {group.description && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                      {group.description}
                    </p>
                  )}
                </header>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.projects.map((project) => project.demo === 'jarvis' ? (
                    <ProyectoJarvis key={project.title} project={project} />
                  ) : (
                    <article
                      key={project.title}
                      className="grid min-w-0 grid-rows-[auto_1fr] gap-4 rounded-xl border border-white/10 bg-[#16161f] p-4 md:only:col-span-full md:only:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:only:grid-rows-1"
                    >
                      <div className="flex aspect-[16/9] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 bg-[#0a0a0f] px-2 text-center text-xs text-zinc-400">
                        <ImageIcon aria-hidden="true" size={22} className="text-zinc-500" />
                        Espacio para captura
                      </div>

                      <div className="flex min-w-0 flex-col">
                        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-xs font-semibold text-blue-300">{project.category}</span>
                          {project.status && <Tag variant="muted">{project.status}</Tag>}
                        </div>
                        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                        <p className="mt-2 mb-4 text-sm leading-relaxed text-zinc-400">
                          {project.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
