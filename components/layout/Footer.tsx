'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/lib/data';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@/components/ui/SocialIcons';

export function Footer() {
  const currentYear = 2026;

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon size={18} />;
      case 'linkedin':
        return <LinkedinIcon size={18} />;
      case 'instagram':
        return <InstagramIcon size={18} />;
      case 'youtube':
        return <YoutubeIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0f] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        {/* Social Links */}
        <div className="flex items-center gap-4">
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

        {/* Copyright */}
        <p className="text-zinc-500 text-sm">
          &copy; {currentYear} Jampi Bryan. Todos los derechos reservados.
        </p>
        <p className="text-zinc-600 text-xs">
          Diseñado y desarrollado con Next.js, React, TypeScript y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
