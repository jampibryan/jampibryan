import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? 'text-center flex flex-col items-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full my-3 sm:my-4" />
      {subtitle && (
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
