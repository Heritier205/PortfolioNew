'use client';

import { useReveal } from './hooks';
import { Award, CheckCircle2, Zap, Palette, Code2, Smartphone, GitBranch, Quote } from 'lucide-react';

const traits = [
  { icon: CheckCircle2, label: 'Précision',    color: 'var(--accent)'   },
  { icon: Zap,          label: 'Performance',  color: 'var(--accent-2)' },
  { icon: Palette,      label: 'Design-first', color: 'var(--accent-3)' },
  { icon: Code2,        label: 'Clean Code',   color: 'var(--accent)'   },
  { icon: Smartphone,   label: 'Mobile-ready', color: 'var(--accent-2)' },
  { icon: GitBranch,    label: 'Agile',        color: 'var(--accent-3)' },
];

export default function About() {
  const registerReveal = useReveal();

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', right: '-10%', transform: 'translateY(-50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <span className="section-label">À propos</span>

        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '4rem' }}>
          Bâtisseur d&apos;expériences<br />
          <span className="gradient-text">numériques</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          {/* IMAGE */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -2, borderRadius: 'calc(var(--radius-lg) + 2px)',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2), transparent)',
              opacity: .4, zIndex: 0
            }} />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              alt="Profile"
              style={{
                position: 'relative', zIndex: 1,
                width: '100%', borderRadius: 'var(--radius-lg)',
                aspectRatio: '3/4', objectFit: 'cover',
                border: '1px solid var(--border)'
              }}
            />
            <div style={{
              position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', zIndex: 2,
              background: 'rgba(14,14,26,0.9)', border: '1px solid var(--border-a)',
              padding: '1rem 1.5rem', borderRadius: 'var(--radius)',
              backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', gap: 14,
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
            }}>
              <Award size={28} style={{ color: 'var(--accent)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '1.9rem', fontWeight: 800, lineHeight: 1 }}>3</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--t2)' }}>ans de passion</span>
              </div>
            </div>
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem', zIndex: 2,
              background: 'rgba(14,14,26,0.9)', border: '1px solid rgba(232,121,249,0.35)',
              padding: '0.85rem 1.2rem', borderRadius: 'var(--radius-sm)',
              backdropFilter: 'blur(20px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)'
            }}>
              <Quote size={16} style={{ color: 'var(--accent-2)' }} />
              <p style={{ fontSize: '0.75rem', color: 'var(--t2)', marginTop: 4, maxWidth: 150, lineHeight: 1.4 }}>
                Code is poetry, design is art.
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p style={{ fontSize: '1.08rem', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Passionné par le développement depuis mes débuts, j&apos;aime transformer des idées complexes en solutions numériques fluides et élégantes.
            </p>
            <p style={{ fontSize: '1.08rem', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Toujours en veille technologique, je m&apos;efforce d&apos;adopter les meilleures pratiques pour garantir des applications scalables, sécurisées et performantes.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {traits.map(({ icon: Icon, label, color }) => (
                <span key={label} className="trait-chip" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '7px 16px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 999, fontSize: '0.82rem', color: 'var(--t2)',
                  transition: 'all .25s var(--ease)', cursor: 'default'
                }}>
                  <Icon size={13} style={{ color }} /> {label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              {[
                { value: '100%', label: 'Satisfaction client' },
                { value: '<48h', label: 'Délai de réponse'   },
                { value: '3+',   label: 'Langages maîtrisés' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--ff-d)' }} className="gradient-text">{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--t3)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
