'use client';

import { Code2, Link2, MessageCircle } from 'lucide-react';

const socials = [
  { Icon: Code2,          href: '#', label: 'GitHub'   },
  { Icon: Link2,          href: '#', label: 'LinkedIn'  },
  { Icon: MessageCircle,  href: '#', label: 'Twitter'   },
];

export default function SideSocial() {
  return (
    <div style={{
      position: 'fixed', left: 28, bottom: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 16, zIndex: 100,
    }}>
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          style={{
            width: 34, height: 34,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--t3)',
            borderRadius: 8,
            transition: 'color .25s var(--ease), transform .25s var(--ease)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = 'var(--t3)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          <Icon size={16} />
        </a>
      ))}
      {/* Vertical line */}
      <div style={{
        width: 1, height: 80,
        background: 'linear-gradient(to bottom, var(--border), transparent)',
      }} />
    </div>
  );
}
