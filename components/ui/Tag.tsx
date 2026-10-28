import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'muted';
}

export function Tag({ children, variant = 'primary' }: TagProps) {
  if (variant === 'muted') {
    return (
      <span className="inline-block px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full tracking-wider">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full tracking-wider hover:border-blue-400/40 transition-colors">
      {children}
    </span>
  );
}
