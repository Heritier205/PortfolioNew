export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Plateforme E-learning",
    description: "Une plateforme d'apprentissage complète avec des parcours interactifs.",
    image: "/images/projects/project1.webp", // Remplacer par vos images
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "Marketplace B2B",
    description: "Solution e-commerce avec intégration Stripe et système d'enchères.",
    image: "/images/projects/project2.webp",
    tags: ["React", "NestJS", "Stripe", "Redis"]
  }
];
