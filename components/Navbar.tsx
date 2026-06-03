'use client';

import { useTheme, useScroll, useMobileMenu, useActiveSection } from './hooks';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#hero',       label: 'Accueil'  },
  { href: '#about',      label: 'À propos' },
  { href: '#skills',     label: 'Skills'   },
  { href: '#projects',   label: 'Projets'  },
  { href: '#services',   label: 'Services' },
  { href: '#experience', label: 'Parcours' },
  { href: '#contact',    label: 'Contact'  },
];

export default function Navbar() {
  const { isDark, toggleTheme }    = useTheme();
  const { scrolled }               = useScroll();
  const { isOpen, openMenu, closeMenu } = useMobileMenu();
  const activeSection              = useActiveSection();

  const scrollTo = (href: string) => {
    closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── DESKTOP NAV ─────────────────────────────── */}
      <nav
        id="navbar"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          background: scrolled
            ? 'rgba(7,7,14,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo('#hero'); }}
            style={{
              fontFamily: 'var(--ff-m)', fontSize: '1.2rem', fontWeight: 700,
              letterSpacing: '-0.02em', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 6,
              flexShrink: 0,
            }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              boxShadow: '0 4px 16px var(--accent-glow)',
            }}>
              <Sparkles size={15} color="#fff" />
            </span>
            <span style={{
              background: 'linear-gradient(135deg, var(--t1), var(--t2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              DEV<span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>.io</span>
            </span>
          </a>

          {/* Desktop links — pill container */}
          <div style={{
            display: 'none',
            // shown via media query simulation below — we'll just set it as flex and rely on wrapper
          }}
            className="nav-links-desktop"
          >
            {navLinks.map(link => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    position: 'relative',
                    padding: '7px 16px',
                    borderRadius: 999,
                    fontSize: '0.85rem',
                    fontWeight: active ? 600 : 500,
                    color: active ? 'var(--accent)' : 'var(--t2)',
                    background: active ? 'var(--accent-dim)' : 'transparent',
                    border: `1px solid ${active ? 'var(--border-a)' : 'transparent'}`,
                    transition: 'all 0.25s var(--ease)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--t1)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--t2)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                      width: 4, height: 4, borderRadius: '50%',
                      background: 'var(--accent)',
                      boxShadow: '0 0 8px var(--accent)',
                    }} />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              style={{
                width: 38, height: 38, borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface)', border: '1px solid var(--border)',
                color: 'var(--t2)', cursor: 'pointer',
                transition: 'all 0.25s var(--ease)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-a)';
                (e.currentTarget as HTMLElement).style.color = 'var(--t1)';
                (e.currentTarget as HTMLElement).style.background = 'var(--surface-h)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--t2)';
                (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
              }}
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* CTA — desktop only */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
              className="nav-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 20px', borderRadius: 999,
                fontSize: '0.82rem', fontWeight: 600,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                color: '#fff', textDecoration: 'none',
                boxShadow: '0 4px 20px var(--accent-glow)',
                transition: 'opacity 0.2s, transform 0.2s var(--ease-spring)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.88';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Travailler ensemble
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={openMenu}
              aria-label="Ouvrir le menu"
              className="nav-hamburger"
              style={{
                width: 38, height: 38, borderRadius: 10,
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface)', border: '1px solid var(--border)',
                color: 'var(--t2)', cursor: 'pointer',
                transition: 'all 0.25s var(--ease)',
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ───────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        style={{
          position: 'fixed', inset: 0, zIndex: 1999,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s var(--ease)',
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(320px, 88vw)',
          zIndex: 2000,
          background: 'rgba(10,10,18,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid var(--border)',
          boxShadow: '-24px 0 80px rgba(0,0,0,0.5)',
          display: 'flex', flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Drawer header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <span style={{
            fontFamily: 'var(--ff-m)', fontSize: '1rem', fontWeight: 700,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            DEV.io
          </span>
          <button
            onClick={closeMenu}
            style={{
              width: 34, height: 34, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--t2)', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t1)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-a)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t2)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer links */}
        <nav style={{ flex: 1, padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', overflowY: 'auto' }}>
          {navLinks.map((link, i) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '0.9rem 1.25rem',
                  borderRadius: 12,
                  fontSize: '0.95rem', fontWeight: active ? 600 : 500,
                  color: active ? 'var(--accent)' : 'var(--t2)',
                  background: active ? 'var(--accent-dim)' : 'transparent',
                  border: `1px solid ${active ? 'var(--border-a)' : 'transparent'}`,
                  textDecoration: 'none',
                  transition: 'all 0.2s var(--ease)',
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--t1)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--t2)';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {active && (
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                    background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)',
                  }} />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '12px', borderRadius: 12,
              fontSize: '0.9rem', fontWeight: 600,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 4px 20px var(--accent-glow)',
            }}
          >
            Travailler ensemble
          </a>
          <button
            onClick={toggleTheme}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '10px', borderRadius: 12,
              fontSize: '0.85rem', fontWeight: 500,
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--t2)', cursor: 'pointer',
            }}
          >
            {isDark ? <Moon size={15} /> : <Sun size={15} />}
            {isDark ? 'Mode sombre' : 'Mode clair'}
          </button>
        </div>
      </div>

      {/* ── RESPONSIVE STYLES ───────────────────────── */}
      <style>{`
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; gap: 4px; }
          .nav-hamburger     { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger     { display: flex !important; }
          .nav-cta           { display: none !important; }
        }
      `}</style>
    </>
  );
}
