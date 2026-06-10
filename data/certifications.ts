export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Janvier 2024",
    image: "/images/certifications/aws.webp", // Ajouter l'image dans public/images/certifications/
    link: "https://aws.amazon.com/certification/"
  },
  {
    id: "2",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "Octobre 2023",
    image: "/images/certifications/meta.webp"
  }
];
