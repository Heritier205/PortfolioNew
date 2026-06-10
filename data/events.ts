export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Hackathon Web3",
    date: "Mars 2024",
    description: "Participation à un hackathon de 48h centré sur la blockchain et les DApps.",
    image: "/images/events/event1.webp"
  },
  {
    id: "2",
    title: "Conférence React Native",
    date: "Novembre 2023",
    description: "Speaker invité pour parler de l'optimisation des performances sur mobile."
  }
];
