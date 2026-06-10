'use client';

import { useState } from 'react';
import { skillsCategories } from '../data/skills';

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" style={{ position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.02) 50%, transparent 100%)' }}>
      <div className="container">
        <span className="section-label">Compétences</span>

        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Mon <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--t2)', maxWidth: 650, margin: '0 auto', lineHeight: 1.6 }}>
            Une palette technique complète pour concevoir, développer et déployer des applications modernes, robustes et évolutives.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {skillsCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === index;
            
            return (
              <div 
                key={index} 
                className="card" 
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{ 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  background: isHovered ? 'rgba(30, 30, 40, 0.6)' : 'var(--surface)',
                  borderColor: isHovered ? 'rgba(99,102,241,0.3)' : 'var(--border)',
                  transform: isHovered ? 'translateY(-5px)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                {/* Background Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50%', left: '-50%',
                  width: '200%', height: '200%',
                  background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 50%)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none'
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1 }}>
                  <div style={{
                    width: 56, height: 56,
                    background: isHovered ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.05)',
                    borderRadius: 'var(--radius)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${isHovered ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.1)'}`,
                    transition: 'all 0.3s ease'
                  }}>
                    <Icon size={26} style={{ color: isHovered ? 'var(--accent)' : 'var(--t2)', transition: 'color 0.3s ease' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--t1)' }}>{category.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--t3)', margin: '0.25rem 0 0 0' }}>{category.description}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', zIndex: 1 }}>
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-a)',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: 'var(--t2)',
                        transition: 'all 0.2s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                        e.currentTarget.style.color = 'var(--t1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'var(--border-a)';
                        e.currentTarget.style.color = 'var(--t2)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
