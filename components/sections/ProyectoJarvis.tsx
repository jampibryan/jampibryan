'use client';

import { useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, FileSearch, ImageIcon, MessageSquare, Monitor, Terminal, Timer, X, Zap } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import type { ProjectItem } from '@/lib/data';

const commands = [
  {
    label: 'Busca un documento',
    icon: FileSearch,
    prompt: 'Jarvis, busca el manual de usuario.',
    intent: 'Buscar un archivo',
    action: 'Mostrar coincidencias',
    reply: 'Encontré «Manual de usuario.pdf». ¿Quieres abrirlo?',
  },
  {
    label: 'Abre la calculadora',
    icon: Monitor,
    prompt: 'Jarvis, abre la calculadora.',
    intent: 'Abrir una aplicación',
    action: 'Iniciar Calculadora',
    reply: 'Abrí la calculadora de Windows.',
  },
  {
    label: 'Pon un temporizador',
    icon: Timer,
    prompt: 'Jarvis, pon un temporizador de cinco minutos.',
    intent: 'Crear un temporizador',
    action: 'Iniciar cuenta regresiva',
    reply: 'Temporizador de cinco minutos iniciado.',
  },
];

const control = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-violet-300/30 bg-violet-500/10 px-3 py-2 text-sm font-semibold text-violet-100 hover:bg-violet-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300';

export function ProyectoJarvis({ project }: { project: ProjectItem }) {
  const [selection, setSelection] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const command = commands[selection ?? 0];
  const animateFlow = selection !== null && !reduceMotion;
  const flow = [
    { label: 'Entrada', detail: 'Comando en español', icon: MessageSquare },
    { label: 'Interpretación', detail: command.intent, icon: BrainCircuit },
    { label: 'Acción', detail: command.action, icon: Zap },
  ];

  return (
    <article aria-labelledby={`${id}-title`} className="grid min-w-0 gap-5 rounded-2xl border border-violet-400/30 bg-[radial-gradient(ellipse_at_top_left,#2b1f42_0%,#151122_48%,#0d0b17_100%)] p-4 sm:p-6 md:col-span-full lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center lg:gap-8 lg:p-8">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-violet-300 uppercase">{project.category}</span>
          {project.status && <Tag variant="muted">{project.status}</Tag>}
        </div>
        <h4 id={`${id}-title`} className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => <Tag key={tag} variant="muted">{tag}</Tag>)}
        </div>
        <button type="button" aria-haspopup="dialog" className={`${control} mt-5`} onClick={() => dialog.current?.showModal()}>
          Ver detalles <ArrowUpRight aria-hidden="true" size={16} />
        </button>
      </div>

      <div className="min-w-0 rounded-xl border border-violet-300/20 bg-[#100e1c]">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl border-b border-violet-300/15 bg-violet-500/10 px-3 py-3 sm:px-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-violet-100">
            <Terminal aria-hidden="true" size={16} /> Consola de {project.title}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 px-2 py-1 text-xs text-violet-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-300" /> Simulación interactiva
          </span>
        </div>

        <div className="p-3 sm:p-4">
          <p id={`${id}-commands`} className="mb-2 text-sm font-semibold text-slate-100">Prueba un comando</p>
          <div role="group" aria-labelledby={`${id}-commands`} className="flex flex-wrap gap-2">
            {commands.map(({ label, icon: Icon }, index) => (
              <button
                key={label}
                type="button"
                aria-pressed={index === (selection ?? 0)}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-2.5 py-2 text-left text-xs font-semibold text-slate-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 aria-pressed:border-violet-300/60 aria-pressed:bg-violet-400/15 aria-pressed:text-violet-100"
                onClick={() => setSelection(index)}
              >
                <Icon size={15} aria-hidden="true" className="shrink-0 text-violet-300" /> {label}
              </button>
            ))}
          </div>

          <div aria-live="polite" aria-atomic="true" className="mt-4 grid gap-2 rounded-lg border border-white/10 bg-[#080711] px-3 py-3 text-sm leading-relaxed text-slate-200">
            <p><span className="font-mono font-semibold text-violet-300">Tú</span> <span aria-hidden="true" className="text-slate-500">›</span> {command.prompt}</p>
            <p><span className="font-mono font-semibold text-cyan-300">Jarvis</span> <span aria-hidden="true" className="text-slate-500">›</span> {command.reply}</p>
          </div>

          <ol aria-label="Cómo se procesa el comando" className="mt-4 grid gap-2 sm:grid-cols-3">
            {flow.map(({ label, detail, icon: Icon }, index) => (
              <motion.li
                key={`${selection}-${label}`}
                initial={animateFlow ? { opacity: 0.55, y: 4 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: animateFlow ? index * 0.13 : 0 }}
                className="min-w-0 rounded-lg border border-violet-300/20 bg-violet-400/10 px-2.5 py-2"
              >
                <span className="flex items-center gap-2 text-xs font-semibold text-violet-200">
                  <Icon size={14} aria-hidden="true" className="shrink-0" /> {label}
                </span>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <dialog ref={dialog} aria-labelledby={`${id}-details`} className="m-auto max-h-[85dvh] w-11/12 max-w-xl overflow-y-auto rounded-2xl border border-violet-300/30 bg-[#151122] p-5 text-slate-200 backdrop:bg-[#070510]/85 sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-violet-300">{project.category}</p>
            <h5 id={`${id}-details`} className="mt-1 text-xl font-bold text-white">{project.title}</h5>
          </div>
          <button type="button" className={control} aria-label="Cerrar detalles" onClick={() => dialog.current?.close()}>
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-violet-300/35 bg-[#0d0b17] text-sm text-slate-300">
          <ImageIcon aria-hidden="true" size={24} /> Espacio para captura
        </div>
        <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
        <h6 className="mt-4 font-semibold text-white">Cómo funciona</h6>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Los comandos por voz se transcriben con Whisper o con el reconocedor configurado. Tanto la voz como el texto pasan por el mismo intérprete.</li>
          <li>El asistente identifica la intención y ejecuta la acción correspondiente en Windows.</li>
          <li>La interfaz muestra la respuesta y conserva el contexto de la conversación.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => <Tag key={tag} variant="muted">{tag}</Tag>)}
        </div>
      </dialog>
    </article>
  );
}
