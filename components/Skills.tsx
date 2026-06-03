'use client';

import { useState, useEffect, useRef } from 'react';
import { Atom, Triangle, Brush, Type, Coffee, Server, Database, Webhook, PenTool, GitBranch, Box } from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
  frontend: 'var(--accent)',
  backend:  'var(--accent-2)',
  design:   'var(--accent-3)',
  tools:    '#fb923c',
};

const skills = [
  { name: 'React',        level: 90, category: 'frontend', icon: Atom     },
  { name: 'Next.js',      level: 85, category: 'frontend', icon: Triangle  },
  { name: 'CSS / Tailwind', level: 92, category: 'frontend', icon: Brush  },
  { name: 'TypeScript',   level: 70, category: 'frontend', icon: Type     },
  { name: 'Java',         level: 82, category: 'backend',  icon: Coffee   },
  { name: 'Spring Boot',  level: 78, category: 'backend',  icon: Server   },
  { name: 'PostgreSQL',   level: 72, category: 'backend',  icon: Database },
  { name: 'REST / GraphQL', level: 80, category: 'backend', icon: Webhook },
  { name: 'Figma',        level: 82, category: 'design',   icon: PenTool  },
  { name: 'Git',          level: 91, category: 'tools',    icon: GitBranch },
  { name: 'Docker',       level: 65, category: 'tools',    icon: Box      },
];

const filters = [
  { value: 'all',      label: 'Tout'     },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend',  label: 'Backend'  },
  { value: 'design',   label: 'Design'   },
  { value: 'tools',    label: 'Outils'   },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
  const barRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredSkills = activeFilter === 'all' ? skills : skills.filter(s => s.category === activeFilter);

  /* animate bars when they enter viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const target = el.getAttribute('data-w') ?? '0';
            el.style.width = target + '%';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    barRefs.current.forEach(el => { el.style.width = '0%'; observer.observe(el); });
    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section id="skills" style={{ position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <span className="section-label">Compétences</span>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Mon <span className="gradient-text">Stack Technique</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--t2)', maxWidth: 560 }}>
            Une expertise multi-domaine couvrant tout le cycle de développement
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
          {filters.map(f => {
            const color = CATEGORY_COLORS[f.value] ?? 'var(--accent)';
            const active = activeFilter === f.value;
            return (
              <button key={f.value} onClick={() => setActiveFilter(f.value)} style={{
                padding: '8px 22px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all .25s var(--ease)',
                background: active ? color : 'var(--surface)',
                color: active ? '#fff' : 'var(--t2)',
                border: `1px solid ${active ? color : 'var(--border)'}`,
                boxShadow: active ? `0 4px 20px ${color}44` : 'none',
              }}>
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Skill grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
          {filteredSkills.map(skill => {
            const Icon = skill.icon;
            const color = CATEGORY_COLORS[skill.category] ?? 'var(--accent)';
            return (
              <div key={skill.name} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                {/* bg glow on hover handled by .card */}
                <div style={{
                  width: 52, height: 52, flexShrink: 0,
                  background: `${color}18`,
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${color}33`,
                }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</span>
                    <span style={{ fontSize: '0.8rem', color, fontWeight: 700 }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
                    <div
                      ref={el => { if (el) barRefs.current.set(skill.name, el); }}
                      data-w={skill.level}
                      style={{
                        height: '100%', width: '0%',
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        borderRadius: 999,
                        transition: 'width 1.2s cubic-bezier(0.34,1.1,0.64,1)',
                        boxShadow: `0 0 8px ${color}66`
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
