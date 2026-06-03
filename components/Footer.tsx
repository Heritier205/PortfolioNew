'use client';

import { useScroll } from './hooks';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { showBackToTop } = useScroll();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer style={{ position: 'relative', marginTop: '2rem' }}>
        {/* Gradient separator */}
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent-2) 70%, transparent 100%)',
          opacity: .5
        }} />

        <div style={{ padding: '2.5rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href="#hero" style={{
              fontFamily: 'var(--ff-m)', fontSize: '1.1rem', fontWeight: 700,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              {'<DEV/>'}
            </a>

            <p style={{ fontSize: '0.82rem', color: 'var(--t3)' }}>
              © 2026 Heritier K. · Fait à Lomé, Togo
            </p>

            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Mentions légales', 'Confidentialité'].map(link => (
                <a key={link} href="#" style={{
                  fontSize: '0.8rem', color: 'var(--t3)',
                  transition: 'color .25s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t3)')}
                >{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        style={{
          position: 'fixed', right: 24, bottom: 24,
          width: 44, height: 44,
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          color: '#fff', borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100, cursor: 'pointer',
          boxShadow: '0 8px 32px var(--accent-glow)',
          transition: 'opacity .35s, transform .35s var(--ease-spring)',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={e => (e.currentTarget.style.transform = showBackToTop ? 'translateY(0)' : 'translateY(12px)')}
      >
        <ArrowUp size={19} />
      </button>
    </>
  );
}
