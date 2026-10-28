'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@/components/ui/SocialIcons';

export function Hero() {
  const currentTitle = useTypingEffect(PERSONAL_INFO.titles);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon size={20} />;
      case 'linkedin':
        return <LinkedinIcon size={20} />;
      case 'instagram':
        return <InstagramIcon size={20} />;
      case 'youtube':
        return <YoutubeIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_20%_50%,rgba(37,99,235,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_50%_80%,rgba(6,182,212,0.06)_0%,transparent_50%)]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para nuevos retos
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Typing Title */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-2xl font-medium text-zinc-300 mb-4 font-mono">
            <span>{currentTitle}</span>
            <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse" />
          </div>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV-JampiBryan.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={18} />
              Descargar CV
            </a>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/15 hover:border-blue-400 text-zinc-300 hover:text-white font-semibold text-sm tracking-wider uppercase bg-white/5 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Contactar
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-1"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image with modern glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-blue-600/30">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0f]">
              <Image
                src={PERSONAL_INFO.photoPath}
                alt={`Foto de ${PERSONAL_INFO.name}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase">
        <div className="w-5 h-8 rounded-full border-2 border-zinc-600 flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
