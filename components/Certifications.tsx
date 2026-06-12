'use client';

import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import Image from 'next/image';

export default function Certifications() {
  return (
    <section id="certifications" style={{ position: 'relative', padding: '6rem 0' }}>
      <div className="container">
        <span className="section-label">Parcours & Validations</span>

        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Mes <span className="gradient-text">Certifications</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--t2)', maxWidth: 600, margin: '0 auto' }}>
            Preuves de mon engagement continu vers l&apos;excellence technique et l&apos;apprentissage de nouvelles technologies.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {certificationsData.map((cert) => (
            <div key={cert.id} className="card" style={{
              display: 'flex', flexDirection: 'column',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ height: 160, background: 'rgba(255,255,255,0.02)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-a)' }}>
                {cert.image && !cert.image.includes('webp') ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image fill src={cert.image} alt={cert.title} style={{ objectFit: 'cover' }} sizes="400px" />
                  </div>
                ) : (
                  <Award size={48} style={{ color: 'var(--accent)', opacity: 0.5 }} />
                )}
                {/* Fallback to icon if image is missing/placeholder */}
              </div>
              
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {cert.date}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--t1)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--t3)', marginBottom: '1.5rem', flexGrow: 1 }}>
                  Délivré par <strong>{cert.issuer}</strong>
                </p>
                
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: '0.9rem', color: 'var(--t1)', fontWeight: 500,
                    textDecoration: 'none', marginTop: 'auto',
                    padding: '8px 16px', background: 'rgba(255,255,255,0.05)',
                    borderRadius: '6px', alignSelf: 'flex-start',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    Voir le certificat <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
