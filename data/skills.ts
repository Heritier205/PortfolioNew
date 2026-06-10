import { 
  Monitor, 
  Server, 
  ShieldCheck, 
  Bot, 
  Database, 
  CreditCard, 
  Rocket, 
  PenTool
} from 'lucide-react';

export const skillsCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    description: "Interfaces modernes, réactives et performantes.",
    skills: [
      "React 19 avec TypeScript",
      "Tailwind CSS (Utility-First)",
      "Framer Motion (animations)",
      "TanStack Query (caching et requêtes)",
      "React Context API + Hooks personnalisés",
      "Lucide-React (icônes)"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    description: "Architectures robustes et temps réel.",
    skills: [
      "Node.js v20+ / NestJS",
      "Prisma ORM",
      "PostgreSQL (pg_trgm, recherche floue)",
      "Redis (cache et temps réel)",
      "Socket.io (WebSockets)",
      "REST API modulaire"
    ]
  },
  {
    title: "Authentification & Sécurité",
    icon: ShieldCheck,
    description: "Protection des données et gestion des accès.",
    skills: [
      "JWT (protection des routes)",
      "Google OAuth2",
      "Hachage bcrypt",
      "Protection CSRF/XSS, rate limiting, AES-256",
      "Transactions atomiques Prisma"
    ]
  },
  {
    title: "Intelligence Artificielle",
    icon: Bot,
    description: "Intégration de l'IA pour des fonctionnalités avancées.",
    skills: [
      "Intégration Gemini (pro + flash)",
      "Génération automatique de BOM",
      "Code Review assistée par IA",
      "Diagnostic de pannes",
      "Génération de défis quotidiens"
    ]
  },
  {
    title: "Stockage & Médias",
    icon: Database,
    description: "Gestion et optimisation des ressources statiques.",
    skills: [
      "Cloudflare R2",
      "Compression WebP (sharp)",
      "Upload multiple (drag & drop)"
    ]
  },
  {
    title: "Paiement & Économie virtuelle",
    icon: CreditCard,
    description: "Monétisation et engagement utilisateur.",
    skills: [
      "Intégration Stripe (marketplace)",
      "Monnaie virtuelle (MakersCoins)",
      "Gamification (XP, niveaux, streaks)"
    ]
  },
  {
    title: "DevOps & Déploiement",
    icon: Rocket,
    description: "Automatisation et monitoring continus.",
    skills: [
      "CI/CD avec GitHub Actions",
      "Vercel (frontend) + Render/Heroku (backend)",
      "Monitoring (Sentry, PostHog)"
    ]
  },
  {
    title: "Conception & Architecture",
    icon: PenTool,
    description: "Modélisation et design de systèmes complexes.",
    skills: [
      "Modélisation BDD (15+ entités)",
      "Architecture full-stack scalable",
      "Design system dark-first (WCAG)",
      "Cahier des charges technique"
    ]
  }
];
