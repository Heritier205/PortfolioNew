'use client';

import Image from 'next/image';
import { useTypewriter, useCounter, useReveal } from './hooks';
import { Code2, Zap, Layers, FolderOpen, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const typewriterText = useTypewriter(['Développeur Fullstack', 'Designer UI/UX', 'Architecte Cloud', 'Problem Solver']);
  const yearsCount    = useCounter(3);
  const projectsCount = useCounter(40);
  const techCount     = useCounter(15);
  const registerReveal = useReveal();

  const yearsRef    = (node: HTMLSpanElement | null) => yearsCount.setRef(node);
  const projectsRef = (node: HTMLSpanElement | null) => projectsCount.setRef(node);
  const techRef     = (node: HTMLSpanElement | null) => techCount.setRef(node);

  return (
    <section id="hero" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient blobs behind content */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

          {/* ── LEFT CONTENT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            {/* Availability badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: '0.8rem', color: 'var(--accent)',
              background: 'var(--accent-dim)',
              border: '1px solid var(--border-a)',
              padding: '8px 20px', borderRadius: 999, marginBottom: '2.5rem',
              position: 'relative'
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 0 var(--accent)',
                animation: 'blink 2s ease-in-out infinite'
              }} />
              <span style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', opacity: .5, animation: 'pulse-ring 2s ease-out infinite' }} />
              Disponible pour de nouveaux projets
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Bonjour, je suis<br />
              <span className="gradient-text" style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 60%, #f472b6 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                backgroundSize: '200% 200%', animation: 'gradientShift 5s ease infinite'
              }}>
                Heritier K.
              </span>
            </h1>

            {/* Typewriter */}
            <div style={{ fontFamily: 'var(--ff-m)', fontSize: '1.05rem', color: 'var(--t2)', marginBottom: '2rem', minHeight: '2rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--accent-2)' }}>{'// '}</span>
              {typewriterText}
              <span style={{ color: 'var(--accent)', animation: 'cf 1s step-end infinite' }}>|</span>
            </div>

            {/* Bio */}
            <p style={{ fontSize: '1.05rem', color: 'var(--t2)', maxWidth: 520, marginBottom: '3rem', lineHeight: 1.85 }}>
              Je conçois des expériences numériques innovantes, alliant performance backend et esthétique frontend moderne. Basé à Lomé, Togo 🇹🇬.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                <FolderOpen size={17} /> Voir mes projets
              </a>
              <a href="#" className="btn-ghost" download>
                <Download size={17} /> Télécharger CV
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 0,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', backdropFilter: 'blur(12px)',
              overflow: 'hidden'
            }}>
              {[
                { ref: yearsRef, count: yearsCount.count, label: "Ans d'expérience" },
                { ref: projectsRef, count: projectsCount.count, label: 'Projets terminés' },
                { ref: techRef, count: techCount.count, label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '1.25rem 2rem',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  flex: 1
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--ff-d)', lineHeight: 1 }} ref={stat.ref}>{stat.count}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.2rem' }}>+</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--t3)', marginTop: 4, textAlign: 'center' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT VISUAL ── */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

            {/* Outer decorative ring */}
            <div style={{
              position: 'absolute', inset: -24, borderRadius: '50%',
              border: '1px dashed rgba(99,102,241,0.25)',
              animation: 'spin 30s linear infinite'
            }} />
            <div style={{
              position: 'absolute', inset: -48, borderRadius: '50%',
              border: '1px dashed rgba(232,121,249,0.15)',
              animation: 'spin 45s linear infinite reverse'
            }} />

            {/* Image wrapper */}
            <div style={{ position: 'relative', width: 380, height: 380, zIndex: 1 }}>
              {/* Gradient ring */}
              <div style={{
                position: 'absolute', inset: -4, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent), transparent 55%)',
                animation: 'spin 8s linear infinite',
                filter: 'blur(1px)'
              }} />
              {/* Glow behind image */}
              <div style={{
                position: 'absolute', inset: 8, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
                filter: 'blur(30px)'
              }} />
              <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '6px solid var(--bg)', boxShadow: '0 0 0 1px var(--border-a), 0 32px 64px rgba(0,0,0,0.5)' }}>
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                  alt="Profile"
                  style={{ objectFit: 'cover' }}
                  sizes="380px"
                  priority
                />
              </div>
            </div>

            {/* Floating cards */}
            <div style={{ position: 'absolute', top: '2%', right: '-8%', animation: 'fy 4s ease-in-out infinite', zIndex: 2 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 16px', borderRadius: 12,
                background: 'rgba(14,14,26,0.85)', border: '1px solid var(--border-a)',
                backdropFilter: 'blur(16px)', whiteSpace: 'nowrap',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                fontSize: '0.82rem', fontWeight: 600
              }}>
                <Code2 size={15} style={{ color: 'var(--accent)' }} /> Clean Code
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '28%', right: '-10%', animation: 'fy 4s ease-in-out infinite 1.4s', zIndex: 2 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 16px', borderRadius: 12,
                background: 'rgba(14,14,26,0.85)', border: '1px solid rgba(232,121,249,0.4)',
                backdropFilter: 'blur(16px)', whiteSpace: 'nowrap',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                fontSize: '0.82rem', fontWeight: 600
              }}>
                <Zap size={15} style={{ color: 'var(--accent-2)' }} /> Performance
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '4%', left: '-6%', animation: 'fy 4s ease-in-out infinite 2.8s', zIndex: 2 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 16px', borderRadius: 12,
                background: 'rgba(14,14,26,0.85)', border: '1px solid rgba(52,211,153,0.4)',
                backdropFilter: 'blur(16px)', whiteSpace: 'nowrap',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                fontSize: '0.82rem', fontWeight: 600
              }}>
                <Layers size={15} style={{ color: 'var(--accent-3)' }} /> Fullstack
              </div>
            </div>
            <div style={{ position: 'absolute', top: '38%', left: '-12%', animation: 'fy 4s ease-in-out infinite 0.8s', zIndex: 2 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 16px', borderRadius: 12,
                background: 'rgba(14,14,26,0.85)', border: '1px solid rgba(99,102,241,0.35)',
                backdropFilter: 'blur(16px)', whiteSpace: 'nowrap',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                fontSize: '0.82rem', fontWeight: 600
              }}>
                <Sparkles size={15} style={{ color: 'var(--accent)' }} /> Creative
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
