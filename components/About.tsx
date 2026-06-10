'use client';

import { useReveal } from './hooks';
import { Award, Quote } from 'lucide-react';
import { profileData } from '../data/profile';
import Image from 'next/image';

export default function About() {
  const registerReveal = useReveal();
  const { about, traits, stats } = profileData;

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Glow Effects */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%', transform: 'translateY(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,121,249,0.05) 0%, transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label" ref={registerReveal}>À propos</span>

        <h2 ref={registerReveal} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '4rem', lineHeight: 1.2 }}>
          {about.title.split(' ').slice(0, -1).join(' ')}<br />
          <span className="gradient-text">{about.title.split(' ').slice(-1)}</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          {/* IMAGE SECTION */}
          <div ref={registerReveal} style={{ position: 'relative', perspective: '1000px' }}>
            {/* Animated border behind */}
            <div style={{
              position: 'absolute', inset: -4, borderRadius: 'calc(var(--radius-lg) + 4px)',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2), transparent, transparent)',
              opacity: .3, zIndex: 0,
              animation: 'pulseGlow 4s ease-in-out infinite alternate'
            }} />

            <div style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-a)' }}>
              <Image
                src={about.image}
                alt="Profile"
                width={1}
                height={1}
                style={{
                  width: '100%',
                  aspectRatio: '3/4', objectFit: 'cover',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              />
            </div>

            {/* Experience Badge */}
            <div style={{
              position: 'absolute', bottom: '-2rem', right: '-2rem', zIndex: 2,
              background: 'rgba(14,14,26,0.85)', border: '1px solid var(--border-a)',
              padding: '1.25rem 1.75rem', borderRadius: 'var(--radius)',
              backdropFilter: 'blur(24px)',
              display: 'flex', alignItems: 'center', gap: 16,
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              transform: 'translateZ(20px)'
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Award size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, color: 'var(--t1)' }}>
                  {about.experienceYears}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  ans d&apos;expertise
                </span>
              </div>
            </div>

            {/* Quote Badge */}
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem', zIndex: 2,
              background: 'rgba(14,14,26,0.85)', border: '1px solid rgba(232,121,249,0.35)',
              padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)',
              backdropFilter: 'blur(24px)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
              transform: 'translateZ(10px)'
            }}>
              <Quote size={18} style={{ color: 'var(--accent-2)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--t2)', maxWidth: 160, lineHeight: 1.5, fontStyle: 'italic' }}>
                {about.quote}
              </p>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div ref={registerReveal}>
            <p style={{ fontSize: '1.15rem', color: 'var(--t2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {about.description1}
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--t2)', lineHeight: 1.8, marginBottom: '3rem' }}>
              {about.description2}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '3rem' }}>
              {traits.map(({ icon: Icon, label, color }) => (
                <span key={label} className="trait-chip" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '8px 18px',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-a)',
                  borderRadius: 999, fontSize: '0.9rem', color: 'var(--t1)', fontWeight: 500,
                  transition: 'all .3s ease', cursor: 'default'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${color}15`;
                    e.currentTarget.style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'var(--border-a)';
                  }}
                >
                  <Icon size={14} style={{ color }} /> {label}
                </span>
              ))}
            </div>

            <div style={{
              display: 'flex', gap: '2.5rem',
              paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
              flexWrap: 'wrap'
            }}>
              {stats.map(stat => (
                <div key={stat.label} style={{ flex: '1 1 min-content' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--ff-d)', lineHeight: 1.2 }} className="gradient-text">
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--t3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
