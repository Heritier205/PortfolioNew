'use client';

import { LayoutTemplate, Palette, Server, Smartphone, Lightbulb, Wrench } from 'lucide-react';

const services = [
  { num: '01', icon: LayoutTemplate, title: 'Dev Web Fullstack',  color: 'var(--accent)',   description: 'Création de sites web modernes, réactifs et optimisés pour le SEO et les performances.' },
  { num: '02', icon: Palette,        title: 'UI/UX Design',       color: 'var(--accent-2)', description: "Conception d'interfaces intuitives et d'expériences utilisateur mémorables." },
  { num: '03', icon: Server,         title: 'Backend & API',      color: 'var(--accent-3)', description: "Développement de serveurs robustes et d'APIs évolutives et sécurisées." },
  { num: '04', icon: Smartphone,     title: 'Mobile',             color: '#fb923c',         description: "Développement d'applications cross-platform performantes avec Flutter." },
  { num: '05', icon: Lightbulb,      title: 'Conseil Tech',       color: 'var(--accent)',   description: "Accompagnement dans le choix des technologies et l'architecture de vos projets." },
  { num: '06', icon: Wrench,         title: 'Maintenance',        color: 'var(--accent-2)', description: 'Optimisation, débogage et mise à jour de vos solutions existantes.' },
];

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Tinted bg */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(232,121,249,0.05) 0%, transparent 70%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">Services</span>

        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '4rem' }}>
          Comment je peux<br />
          <span className="gradient-text">vous aider</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map(service => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="card"
                style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => {
                  const card = e.currentTarget;
                  const iconEl = card.querySelector('.svc-icon') as HTMLElement;
                  if (iconEl) {
                    iconEl.style.background = service.color;
                    iconEl.style.color = '#fff';
                    iconEl.style.boxShadow = `0 8px 30px ${service.color}55`;
                  }
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget;
                  const iconEl = card.querySelector('.svc-icon') as HTMLElement;
                  if (iconEl) {
                    iconEl.style.background = `${service.color}18`;
                    iconEl.style.color = service.color;
                    iconEl.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Big decorative number */}
                <span style={{
                  position: 'absolute', top: 12, right: 20,
                  fontSize: '5rem', fontWeight: 900, fontFamily: 'var(--ff-d)',
                  color: 'var(--border)', lineHeight: 1,
                  userSelect: 'none', pointerEvents: 'none',
                  transition: 'color .3s'
                }}>{service.num}</span>

                {/* Icon */}
                <div className="svc-icon" style={{
                  width: 56, height: 56, borderRadius: 'var(--radius-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${service.color}18`, color: service.color,
                  marginBottom: '1.5rem',
                  border: `1px solid ${service.color}33`,
                  transition: 'all .3s var(--ease-spring)'
                }}>
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--t2)', lineHeight: 1.75 }}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
