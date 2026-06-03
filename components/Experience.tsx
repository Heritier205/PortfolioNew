'use client';

import { BadgeCheck, Trophy, Mic, Users } from 'lucide-react';

const timeline = [
  { date: '2024 – Présent', title: 'Ingénieur Fullstack',  description: 'Développement de solutions complexes, lead technique sur divers projets innovants.' },
  { date: '2022 – Présent', title: 'Freelance',            description: 'Accompagnement de clients divers dans leur transformation numérique.' },
  { date: '2023 (6 mois)',  title: 'Stage Frontend',       description: "Immersion professionnelle, optimisation d'interfaces utilisateur complexes." },
  { date: '2021 – 2024',   title: 'Licence Ingénierie',   description: 'Formation académique approfondie en informatique et systèmes complexes.' },
];

const certifications = [
  { name: 'Meta Front-End Developer', color: 'var(--accent)'   },
  { name: 'AWS Developer Associate',  color: '#fb923c'         },
  { name: 'Java Oracle Certified',    color: 'var(--accent-2)' },
  { name: 'Google UX Design',         color: 'var(--accent-3)' },
  { name: 'Next.js (Udemy)',          color: 'var(--accent)'   },
  { name: 'Docker (Linux Foundation)',color: '#38bdf8'         },
];

const events = [
  { type: 'hackathon', icon: Trophy, name: 'HackFest 2024',       result: '🥈 2ème Place',  color: 'var(--accent)'   },
  { type: 'hackathon', icon: Trophy, name: 'BuildAfrica 2023',     result: '🥇 1ère Place',  color: '#fb923c'         },
  { type: 'conf',      icon: Mic,    name: 'React Summit',         result: '',               color: 'var(--accent-2)' },
  { type: 'meetup',   icon: Users,  name: 'DevMeet Lomé — Speaker', result: '',             color: 'var(--accent-3)' },
];

const EVENT_LABELS: Record<string, string> = {
  hackathon: 'Hackathon',
  conf:      'Conférence',
  meetup:    'Meetup',
};

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)' }}>
      <div className="container">
        <span className="section-label">Parcours</span>

        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '4rem' }}>
          Mon <span className="gradient-text">Évolution</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Animated gradient line */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)',
              borderRadius: 999
            }} />

            {timeline.map((item, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? '2rem' : 0 }}>
                {/* Marker */}
                <div style={{
                  position: 'absolute', left: '-2.45rem', top: '1.25rem',
                  width: 12, height: 12, borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '2px solid var(--bg)',
                  boxShadow: '0 0 16px var(--accent-glow)'
                }} />

                <div className="card" style={{ padding: '1.5rem 1.75rem' }}>
                  <span style={{ fontFamily: 'var(--ff-m)', fontSize: '0.72rem', color: 'var(--accent)', display: 'block', marginBottom: '0.4rem' }}>{item.date}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--t2)', lineHeight: 1.65 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certs + Events */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--t1)' }}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '3rem' }}>
              {certifications.map(cert => (
                <div key={cert.name} className="card" style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '0.9rem 1.25rem', fontSize: '0.88rem'
                }}>
                  <BadgeCheck size={16} style={{ color: cert.color, flexShrink: 0 }} />
                  <span style={{ color: 'var(--t2)' }}>{cert.name}</span>
                  <div style={{
                    marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%',
                    background: cert.color, boxShadow: `0 0 8px ${cert.color}`
                  }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--t1)' }}>Événements</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {events.map(event => {
                const Icon = event.icon;
                return (
                  <div key={event.name} className="card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0.9rem 1.25rem' }}>
                    <div style={{
                      width: 36, height: 36, flexShrink: 0, borderRadius: 8,
                      background: `${event.color}18`, border: `1px solid ${event.color}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon size={16} style={{ color: event.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 700, padding: '2px 10px', borderRadius: 999,
                        background: `${event.color}18`, color: event.color,
                        display: 'inline-block', marginBottom: 3
                      }}>
                        {EVENT_LABELS[event.type]}
                      </span>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{event.name}</div>
                      {event.result && <div style={{ fontSize: '0.8rem', color: event.color, marginTop: 2 }}>{event.result}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
