'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Code2,
  Layers,
  Smartphone,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Tag } from '@/components/ui/Tag';

// Helper para asignar un ícono temático según el contenido del logro
function getBulletIcon(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes('inteligencia artificial') || lower.includes('ia') || lower.includes('prime')) {
    return <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />;
  }
  if (lower.includes('móvil') || lower.includes('react native') || lower.includes('expo')) {
    return <Smartphone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />;
  }
  if (lower.includes('reportes') || lower.includes('power bi') || lower.includes('dashboard') || lower.includes('análisis')) {
    return <BarChart3 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />;
  }
  if (lower.includes('backend') || lower.includes('c#') || lower.includes('laravel') || lower.includes('microservicio') || lower.includes('clean architecture')) {
    return <Code2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />;
  }
  if (lower.includes('erp') || lower.includes('sistema') || lower.includes('diseñé')) {
    return <Layers className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />;
  }
  return <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />;
}

// Helper para resaltar palabras clave en negrita y color
function renderHighlightedText(text: string) {
  const keywords = [
    'Chavín Prime',
    'ERP empresarial',
    'C#/.NET',
    'Clean Architecture',
    'SQL Server',
    'React',
    'microservicio',
    'SUNAT',
    'PRIME',
    'inteligencia artificial',
    'React Native',
    'Expo',
    'Power BI',
    'Excel',
    'SITC',
    'EDA',
    'Laravel',
    'MySQL',
    'WordPress',
    'Figma',
    'SEO',
    'Git',
    'redes de área local (LAN)',
    'mantenimiento preventivo',
  ];

  // Regex para envolver palabras clave
  const regex = new RegExp(`(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isKeyword = keywords.some((k) => k.toLowerCase() === part.toLowerCase());
        if (isKeyword) {
          return (
            <span
              key={index}
              className="font-semibold text-white bg-blue-500/10 px-1 py-0.5 rounded border border-blue-500/20"
            >
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function Experiencia() {
  // Estado para controlar qué tarjetas están expandidas (por defecto las 2 primeras están expandidas)
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1]);
  const [activeTab, setActiveTab] = useState<'all' | 'dev' | 'ti'>('all');

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    setExpandedIndices(EXPERIENCES.map((_, i) => i));
  };

  const collapseAll = () => {
    setExpandedIndices([]);
  };

  // Filtrado opcional interactivo
  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dev') {
      return (
        exp.role.toLowerCase().includes('desarrollador') ||
        exp.role.toLowerCase().includes('programador') ||
        exp.role.toLowerCase().includes('software')
      );
    }
    if (activeTab === 'ti') {
      return (
        exp.role.toLowerCase().includes('soporte') ||
        exp.role.toLowerCase().includes('datos') ||
        exp.role.toLowerCase().includes('ti')
      );
    }
    return true;
  });

  return (
    <section id="experiencia" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeader
            title="Experiencia Laboral"
            subtitle="Mi trayectoria profesional, roles de desarrollo e impacto tecnológico en proyectos reales"
          />

          {/* Controles interactivos superiores: Filtros y Expandir/Colapsar */}
          <div className="flex flex-wrap items-center gap-3 pb-4">
            {/* Filtros rápidos */}
            <div className="inline-flex rounded-xl bg-[#16161f] p-1 border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Todos ({EXPERIENCES.length})
              </button>
              <button
                onClick={() => setActiveTab('dev')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'dev'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Desarrollo Web & Software
              </button>
              <button
                onClick={() => setActiveTab('ti')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'ti'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Datos & TI
              </button>
            </div>

            {/* Botón rápido expandir/colapsar */}
            <button
              onClick={
                expandedIndices.length === filteredExperiences.length
                  ? collapseAll
                  : expandAll
              }
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 hover:border-blue-400 text-zinc-300 hover:text-white bg-white/5 transition-colors"
            >
              {expandedIndices.length === filteredExperiences.length
                ? 'Colapsar todo'
                : 'Expandir todo'}
            </button>
          </div>
        </div>

        {/* Línea de tiempo interactiva */}
        <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 md:pl-10 space-y-8 sm:space-y-10">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedIndices.includes(index);
            const initialVisibleCount = 3;
            const hasMoreItems = exp.description.length > initialVisibleCount;
            const visibleDescriptions = isExpanded
              ? exp.description
              : exp.description.slice(0, initialVisibleCount);

            return (
              <AnimatedSection
                key={`${exp.company}-${index}`}
                delay={index * 0.08}
                className="relative group"
              >
                {/* Marcador brillante interactivo en el timeline */}
                <div
                  className={`absolute -left-[27px] sm:-left-[39px] md:-left-[47px] top-6 sm:top-7 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-4 border-[#0a0a0f] transition-all duration-300 ${
                    isExpanded
                      ? 'bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)] scale-125'
                      : 'bg-blue-500 shadow-lg shadow-blue-500/50 group-hover:scale-125 group-hover:bg-cyan-400'
                  }`}
                />

                {/* Tarjeta de Experiencia con efectos hover */}
                <div className="p-5 sm:p-7 rounded-2xl bg-[#16161f] border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Encabezado: Cargo y Fecha */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        {exp.role}
                      </h3>

                      {/* Empresa y Ubicación */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-zinc-400 mt-1">
                        <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                          <Briefcase size={15} />
                          {exp.company}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-zinc-400">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Badge de Fecha */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm">
                      <Calendar size={13} />
                      {exp.year}
                    </div>
                  </div>

                  {/* Lista interactiva de logros/responsabilidades (no texto plano) */}
                  <div className="mt-5 space-y-2.5">
                    {visibleDescriptions.map((desc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all duration-200"
                      >
                        {getBulletIcon(desc)}
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed flex-1">
                          {renderHighlightedText(desc)}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Botón interactivo para ver más / ver menos logros */}
                  {hasMoreItems && (
                    <div className="mt-4 flex justify-start">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 transition-all duration-200"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp size={15} />
                            Mostrar menos logros
                          </>
                        ) : (
                          <>
                            <ChevronDown size={15} />
                            Ver {exp.description.length - initialVisibleCount} logros más
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Tags de Tecnologías utilizadas */}
                  <div className="flex flex-wrap items-center gap-2 pt-5 mt-5 border-t border-white/5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mr-1">
                      Stack:
                    </span>
                    {exp.tags.map((tag) => (
                      <Tag key={tag} variant="muted">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
