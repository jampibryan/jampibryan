'use client';

import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowRight, ChartNoAxesCombined, ImageIcon, Monitor, Pause, Play, RotateCcw, Smartphone, X } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { ELI_BOUTIQUE } from '@/lib/data';
import './EcosistemaEli.css';

const systems = [
  {
    id: 'web', label: 'Web', icon: Monitor, color: '#74aaff', x: 50, y: 21,
    features: ['Registro de ventas y compras', 'Gestión de inventario y caja', 'API para la app móvil y el panel de analítica'],
    connection: 'El sistema Laravel gestiona las operaciones y pone sus datos a disposición de las herramientas conectadas mediante su API.',
    step: { title: 'Registra la venta', description: 'El sistema web registra la venta, actualiza el inventario y deja los datos disponibles en su API.' },
  },
  {
    id: 'mobile', label: 'Móvil', icon: Smartphone, color: '#bd9aff', x: 23, y: 75,
    features: ['Consulta de ventas y compras', 'Revisión de productos y caja desde Android', 'Acceso de lectura mediante una API autenticada'],
    connection: 'La app Flutter consulta la API de Laravel para mostrar los datos de la tienda en Android.',
    step: { title: 'Consulta el stock', description: 'La app de Android consulta la API y muestra el stock actualizado al abrir el producto.' },
  },
  {
    id: 'analytics', label: 'Analytics', icon: ChartNoAxesCombined, color: '#67e8f9', x: 77, y: 75,
    features: ['Análisis del historial de ventas', 'Predicción mensual por producto', 'Comparación de demanda estimada y stock disponible'],
    connection: 'El panel de Streamlit consulta los datos de Laravel y usa el historial de ventas para estimar la demanda.',
    step: { title: 'Pronostica la demanda', description: 'Streamlit estima las ventas del mes con el historial y compara la demanda prevista con el stock disponible.' },
  },
] as const;

const api = { x: 50, y: 52 };
const stepDuration = 3000;
const control = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:opacity-40 disabled:hover:bg-transparent';

type View = { index: number; mode: 'explore' | 'playing' | 'paused' | 'complete' };

export function EcosistemaEli() {
  const id = useId();
  const [view, setView] = useState<View>({ index: 0, mode: 'explore' });
  const reduceMotion = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const selected = systems[view.index];
  const project = ELI_BOUTIQUE.projects[selected.id];
  const inTour = view.mode !== 'explore';

  useEffect(() => {
    if (view.mode !== 'playing' || reduceMotion) return;

    const timer = window.setTimeout(() => {
      setView((current) => {
        if (current !== view) return current;
        return view.index === systems.length - 1
          ? { index: view.index, mode: 'complete' }
          : { index: view.index + 1, mode: 'playing' };
      });
    }, stepDuration);

    return () => window.clearTimeout(timer);
  }, [view, reduceMotion]);

  function selectSystem(index: number) {
    setView({ index, mode: inTour ? 'paused' : 'explore' });
  }

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const targets: Record<string, number> = {
      ArrowLeft: (index + systems.length - 1) % systems.length,
      ArrowRight: (index + 1) % systems.length,
      Home: 0,
      End: systems.length - 1,
    };
    if (!Object.hasOwn(targets, event.key)) return;

    event.preventDefault();
    const next = targets[event.key];
    selectSystem(next);
    tabs.current[next]?.focus();
  }

  function startTour() {
    setView({ index: 0, mode: reduceMotion ? 'paused' : 'playing' });
  }

  function openDetails() {
    if (view.mode === 'playing') setView({ index: view.index, mode: 'paused' });
    dialog.current?.showModal();
  }

  return (
    <section aria-labelledby={`${id}-title`} className="eli-ecosystem">
      <header className="mb-5 flex flex-wrap items-end justify-between gap-4 sm:mb-6">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold tracking-widest text-blue-300 uppercase">Proyectos conectados</p>
          <h3 id={`${id}-title`} className="text-xl font-bold text-white sm:text-2xl">{ELI_BOUTIQUE.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{ELI_BOUTIQUE.description}</p>
        </div>
        <button
          type="button"
          className={`${control} border-blue-400/40 bg-blue-500/15 text-blue-100 hover:bg-blue-500/30`}
          aria-expanded={inTour}
          onClick={() => inTour ? setView({ index: 0, mode: 'explore' }) : startTour()}
        >
          {inTour ? <X aria-hidden="true" size={16} /> : <Play aria-hidden="true" size={16} />}
          {inTour ? 'Salir del recorrido' : 'Ver flujo de datos'}
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <div className="eli-map" style={{ '--accent': selected.color } as CSSProperties}>
            <svg className="eli-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <ellipse cx="50" cy="52" rx="42" ry="36" className="eli-orbit" vectorEffect="non-scaling-stroke" />
              <ellipse cx="50" cy="52" rx="35" ry="29" className="eli-orbit" vectorEffect="non-scaling-stroke" />
              {systems.map((system) => (
                <line
                  key={system.id} x1={api.x} y1={api.y} x2={system.x} y2={system.y}
                  className={system.id === selected.id ? 'eli-active-edge' : 'eli-edge'}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              {view.mode === 'playing' && !reduceMotion && (
                <line
                  key={selected.id}
                  x1={selected.id === 'web' ? selected.x : api.x}
                  y1={selected.id === 'web' ? selected.y : api.y}
                  x2={selected.id === 'web' ? api.x : selected.x}
                  y2={selected.id === 'web' ? api.y : selected.y}
                  pathLength="100"
                  className="eli-data-pulse"
                  vectorEffect="non-scaling-stroke"
                />
              )}
            </svg>

            <div className="eli-core" style={{ left: `${api.x}%`, top: `${api.y}%` }}>
              <span className="text-sm font-bold text-blue-100">API</span>
              <span className="text-xs text-slate-300">Eli Boutique</span>
            </div>

            <div role="tablist" aria-label="Aplicaciones del ecosistema" className="eli-nodes">
              {systems.map((system, index) => {
                const Icon = system.icon;
                return (
                  <button
                    key={system.id}
                    ref={(element) => { tabs.current[index] = element; }}
                    type="button"
                    role="tab"
                    id={`${id}-${system.id}`}
                    aria-selected={index === view.index}
                    aria-controls={`${id}-panel`}
                    tabIndex={index === view.index ? 0 : -1}
                    className="eli-node"
                    style={{ '--accent': system.color, left: `${system.x}%`, top: `${system.y}%` } as CSSProperties}
                    onClick={() => selectSystem(index)}
                    onKeyDown={(event) => navigateTabs(event, index)}
                  >
                    <Icon aria-hidden="true" size={22} />
                    {system.label}
                  </button>
                );
              })}
            </div>
          </div>
          {inTour ? (
            <div className="mt-3 rounded-xl border border-blue-400/25 bg-[#0c1526] p-3 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold tracking-wide text-blue-300 uppercase">Flujo de una venta</p>
                {!reduceMotion && (
                  <button
                    type="button"
                    className={control}
                    onClick={() => view.mode === 'complete' ? startTour() : setView({ index: view.index, mode: view.mode === 'playing' ? 'paused' : 'playing' })}
                  >
                    {view.mode === 'playing' && <><Pause aria-hidden="true" size={16} /> Pausar</>}
                    {view.mode === 'paused' && <><Play aria-hidden="true" size={16} /> Continuar</>}
                    {view.mode === 'complete' && <><RotateCcw aria-hidden="true" size={16} /> Repetir</>}
                  </button>
                )}
              </div>

              <ol aria-label="Pasos del flujo" className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                {systems.map((system, index) => (
                  <li key={system.id} className="min-w-0">
                    <button
                      type="button"
                      aria-current={view.index === index ? 'step' : undefined}
                      className="min-h-11 w-full rounded-lg border border-white/10 px-1 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 aria-[current=step]:border-blue-400/50 aria-[current=step]:bg-blue-400/15 aria-[current=step]:text-white"
                      onClick={() => selectSystem(index)}
                    >
                      {index + 1}. {system.label}
                    </button>
                  </li>
                ))}
              </ol>
              <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                {view.mode === 'playing' && !reduceMotion && (
                  <div key={selected.id} className="eli-step-progress" style={{ backgroundColor: selected.color, animationDuration: `${stepDuration}ms` }} />
                )}
              </div>
              <div aria-live="polite" aria-atomic="true" className="mt-3">
                <h4 className="text-sm font-semibold text-white">{selected.step.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{selected.step.description}</p>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-xs text-slate-400">Selecciona una aplicación para explorar su conexión con la API.</p>
          )}
        </div>

        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-${selected.id}`}
          className="rounded-xl border border-white/10 bg-[#111e32] p-4 sm:p-5"
        >
          <p className="text-xs font-semibold" style={{ color: selected.color }}>{project.category}</p>
          <h4 className="mt-1 text-lg font-bold text-white">{project.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {selected.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <ArrowRight size={14} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: selected.color }} />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          <button type="button" aria-haspopup="dialog" className={`${control} mt-4`} onClick={openDetails}>Ver detalles</button>
        </div>
      </div>

      <dialog ref={dialog} aria-labelledby={`${id}-details`} className="m-auto max-h-[85dvh] w-11/12 max-w-xl overflow-y-auto rounded-2xl border border-white/20 bg-[#111e32] p-5 text-slate-200 backdrop:bg-[#050912]/85 sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold" style={{ color: selected.color }}>{project.category}</p>
            <h4 id={`${id}-details`} className="mt-1 text-xl font-bold text-white">{project.title}</h4>
          </div>
          <button type="button" className={control} aria-label="Cerrar detalles" onClick={() => dialog.current?.close()}>
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/25 bg-[#080d1a] text-sm text-slate-300">
          <ImageIcon aria-hidden="true" size={24} /> Espacio para captura
        </div>
        <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
        <h5 className="mt-4 font-semibold text-white">Funcionalidades</h5>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {selected.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <h5 className="mt-4 font-semibold text-white">Cómo se conecta al ecosistema</h5>
        <p className="mt-1 text-sm leading-relaxed text-slate-300">{selected.connection}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </dialog>
    </section>
  );
}
