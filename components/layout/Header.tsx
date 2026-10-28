'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '@/lib/data';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="relative h-12 w-36 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={PERSONAL_INFO.logoPath}
              alt="Logo Jampi Bryan"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-[#111119] border-l border-white/10 p-8 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-bold text-white text-lg">Menú</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 text-zinc-400 hover:text-white"
            aria-label="Cerrar menú"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-blue-400 transition-colors py-2 border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={PERSONAL_INFO.cvPath}
          download="CV-JampiBryan.pdf"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 text-center text-xs uppercase tracking-wider font-semibold px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
        >
          Descargar CV
        </a>
      </div>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
        />
      )}
    </header>
  );
}
