import { CheckCircle2, Zap, Palette, Code2, Smartphone, GitBranch } from 'lucide-react';

export const profileData = {
  about: {
    title: "Bâtisseur d'expériences numériques",
    description1: "Passionné par le développement depuis mes débuts, j'aime transformer des idées complexes en solutions numériques fluides et élégantes.",
    description2: "Toujours en veille technologique, je m'efforce d'adopter les meilleures pratiques pour garantir des applications scalables, sécurisées et performantes.",
    experienceYears: "3",
    quote: "Code is poetry, design is art.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  traits: [
    { icon: CheckCircle2, label: 'Précision',    color: 'var(--accent)'   },
    { icon: Zap,          label: 'Performance',  color: 'var(--accent-2)' },
    { icon: Palette,      label: 'Design-first', color: 'var(--accent-3)' },
    { icon: Code2,        label: 'Clean Code',   color: 'var(--accent)'   },
    { icon: Smartphone,   label: 'Mobile-ready', color: 'var(--accent-2)' },
    { icon: GitBranch,    label: 'Agile',        color: 'var(--accent-3)' },
  ],
  stats: [
    { value: '100%', label: 'Satisfaction client' },
    { value: '<48h', label: 'Délai de réponse'   },
    { value: '3+',   label: 'Années d\'expérience' },
  ]
};
