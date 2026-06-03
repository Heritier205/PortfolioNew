'use client';

import { Code, Share2, MessageCircle } from 'lucide-react';

export default function SideSocial() {
  return (
    <div className="side-social fixed left-8 bottom-0 flex flex-col items-center gap-4 z-[100]">
      <a href="#" className="side-icon w-8.5 h-8.5 flex items-center justify-center text-[var(--t3)] rounded-lg transition-all hover:text-[var(--accent)] hover:-translate-y-1">
        <Code size={16} />
      </a>
      <a href="#" className="side-icon w-8.5 h-8.5 flex items-center justify-center text-[var(--t3)] rounded-lg transition-all hover:text-[var(--accent)] hover:-translate-y-1">
        <Share2 size={16} />
      </a>
      <a href="#" className="side-icon w-8.5 h-8.5 flex items-center justify-center text-[var(--t3)] rounded-lg transition-all hover:text-[var(--accent)] hover:-translate-y-1">
        <MessageCircle size={16} />
      </a>
      <div className="side-line w-px h-20 bg-[linear-gradient(to_bottom,var(--border),transparent)]" />
    </div>
  );
}
