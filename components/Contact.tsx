'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Code2, ExternalLink, MessageCircle, Send, CheckCircle } from 'lucide-react';

const contacts = [
  { icon: Mail,    label: 'Email',        value: 'contact@votre-domaine.com', href: 'mailto:contact@votre-domaine.com', color: 'var(--accent)'   },
  { icon: MapPin,  label: 'Localisation', value: 'Lomé, Togo 🇹🇬',           href: undefined,                          color: 'var(--accent-2)' },
  { icon: Phone,   label: 'Téléphone',    value: '+228 00 00 00 00',          href: 'tel:+22800000000',                 color: 'var(--accent-3)' },
];

const socials = [
  { icon: Code2,         href: '#', label: 'GitHub'    },
  { icon: ExternalLink,  href: '#', label: 'LinkedIn'  },
  { icon: MessageCircle, href: '#', label: 'Twitter'   },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px 18px',
  color: 'var(--t1)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color .25s, box-shadow .25s',
  backdropFilter: 'blur(8px)',
  fontFamily: 'var(--ff-b)',
};

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3500);
    }, 1600);
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--accent)';
    e.target.style.boxShadow   = '0 0 0 3px var(--accent-dim)';
    e.target.style.background  = 'var(--surface-h)';
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--border)';
    e.target.style.boxShadow   = 'none';
    e.target.style.background  = 'var(--surface)';
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '30%', left: '-10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            <span className="section-label">Contact</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
              Démarrons quelque<br />
              chose <span className="gradient-text">ensemble</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--t2)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Une idée, un projet, une collaboration ? Je suis à votre écoute. Réponse garantie sous 24h.
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {contacts.map(c => {
                const Icon = c.icon;
                const inner = (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{
                      width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-sm)',
                      background: `${c.color}15`, border: `1px solid ${c.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon size={20} style={{ color: c.color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--t3)', marginBottom: 2 }}>{c.label}</p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="card" style={{ padding: '1rem 1.25rem', display: 'block' }}>{inner}</a>
                ) : (
                  <div key={c.label} className="card" style={{ padding: '1rem 1.25rem' }}>{inner}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--t2)', transition: 'all .25s var(--ease-spring)'
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background    = 'var(--accent)';
                      el.style.borderColor   = 'var(--accent)';
                      el.style.color         = '#fff';
                      el.style.transform     = 'translateY(-3px)';
                      el.style.boxShadow     = '0 8px 24px var(--accent-glow)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background  = 'var(--surface)';
                      el.style.borderColor = 'var(--border)';
                      el.style.color       = 'var(--t2)';
                      el.style.transform   = 'translateY(0)';
                      el.style.boxShadow   = 'none';
                    }}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.25)'
          }}>
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <CheckCircle size={52} style={{ color: 'var(--accent-3)', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message envoyé !</h3>
                <p style={{ color: 'var(--t2)' }}>Je vous répondrai dans les 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Nom complet</label>
                    <input type="text" name="name" placeholder="Votre nom" required style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Email</label>
                    <input type="email" name="email" placeholder="votre@email.com" required style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Sujet</label>
                  <input type="text" name="subject" placeholder="Objet de votre message" required style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Budget estimé</label>
                  <select name="budget" style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusInput} onBlur={blurInput}>
                    <option value="low">Moins de 1 000€</option>
                    <option value="medium">1 000€ – 5 000€</option>
                    <option value="high">5 000€+</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Message</label>
                  <textarea
                    name="message" rows={5}
                    placeholder="Parlez-moi de votre projet..."
                    required
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                    onFocus={focusInput} onBlur={blurInput}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="btn-primary"
                  style={{ justifyContent: 'center', opacity: formState === 'submitting' ? .7 : 1 }}
                >
                  {formState === 'idle' && <><Send size={17} /> Envoyer le message</>}
                  {formState === 'submitting' && 'Envoi en cours…'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
