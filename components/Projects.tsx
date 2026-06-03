'use client';

import { useState } from 'react';
import { Code, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Plateforme E-commerce',
    description: "Solution complète avec paiement Stripe, gestion d'inventaire en temps réel et tableau de bord analytique intégré.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Stripe'],
    category: 'web',
    featured: true,
  },
  {
    title: 'FitTrack Mobile',
    description: "Suivi d'activités physiques en temps réel pour sportifs.",
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Firebase'],
    category: 'mobile',
    featured: false,
  },
  {
    title: 'Banking API Core',
    description: 'Architecture microservices pour transactions bancaires sécurisées.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop',
    tags: ['Spring Boot', 'PostgreSQL'],
    category: 'api',
    featured: false,
  },
  {
    title: 'Nova Design System',
    description: 'Composants réutilisables et guidelines pour SaaS moderne.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
    tags: ['Figma', 'UI/UX'],
    category: 'design',
    featured: false,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Visualisation de données complexes en temps réel.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Chart.js'],
    category: 'web',
    featured: false,
  },
  {
    title: 'AuthShield Service',
    description: "Service d'authentification centralisé pour écosystèmes web.",
    image: 'https://images.unsplash.com/photo-1518433278988-2b2a197e9381?q=80&w=800&auto=format&fit=crop',
    tags: ['OAuth2', 'JWT'],
    category: 'api',
    featured: false,
  },
];

const filters = [
  { value: 'all',    label: 'Tout'    },
  { value: 'web',    label: 'Web'     },
  { value: 'mobile', label: 'Mobile'  },
  { value: 'design', label: 'Design'  },
  { value: 'api',    label: 'API'     },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="container">
        <span className="section-label">Réalisations</span>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Projets <span className="gradient-text">Récents</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--t2)', maxWidth: 560 }}>
            Des réalisations concrètes qui parlent d&apos;elles-mêmes
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{
                padding: '8px 22px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all .25s var(--ease)',
                background: activeFilter === f.value ? 'var(--accent)' : 'var(--surface)',
                color:      activeFilter === f.value ? '#fff' : 'var(--t2)',
                border:     `1px solid ${activeFilter === f.value ? 'var(--accent)' : 'var(--border)'}`,
                boxShadow:  activeFilter === f.value ? '0 4px 20px var(--accent-glow)' : 'none',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredProjects.map(project => (
            <div
              key={project.title}
              className="card"
              style={{
                overflow: 'hidden', padding: 0,
                gridColumn: project.featured ? 'span 2' : undefined
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: project.featured ? '21/9' : '16/9', overflow: 'hidden' }}
                onMouseEnter={e => {
                  const ov = e.currentTarget.querySelector('.proj-overlay') as HTMLElement;
                  const img = e.currentTarget.querySelector('img') as HTMLElement;
                  if (ov)  ov.style.opacity  = '1';
                  if (img) img.style.transform = 'scale(1.07)';
                }}
                onMouseLeave={e => {
                  const ov = e.currentTarget.querySelector('.proj-overlay') as HTMLElement;
                  const img = e.currentTarget.querySelector('img') as HTMLElement;
                  if (ov)  ov.style.opacity  = '0';
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s var(--ease-out)' }}
                />
                {/* Gradient overlay always present */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
                  background: 'linear-gradient(to top, rgba(7,7,14,0.85), transparent)',
                  pointerEvents: 'none'
                }} />

                {/* Action overlay */}
                <div className="proj-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(7,7,14,0.75)', backdropFilter: 'blur(4px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
                  opacity: 0, transition: 'opacity .3s var(--ease)'
                }}>
                  <a href="#" style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'var(--accent)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px var(--accent-glow)',
                    transition: 'transform .2s var(--ease-spring)'
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.15)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Code size={19} />
                  </a>
                  <a href="#" style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'var(--accent-2)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(232,121,249,0.4)',
                    transition: 'transform .2s var(--ease-spring)'
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.15)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <ExternalLink size={19} />
                  </a>
                </div>

                {project.featured && (
                  <span style={{
                    position: 'absolute', top: 16, left: 16,
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: '0.72rem', fontWeight: 700,
                    padding: '5px 14px', borderRadius: 999,
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    color: '#fff', boxShadow: '0 4px 16px var(--accent-glow)'
                  }}>
                    <Star size={11} fill="currentColor" /> Projet phare
                  </span>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '0.75rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.72rem', fontWeight: 600,
                      padding: '3px 12px', borderRadius: 999,
                      background: 'var(--accent-dim)', color: 'var(--accent)',
                      border: '1px solid var(--border-a)'
                    }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--t2)', lineHeight: 1.7 }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
