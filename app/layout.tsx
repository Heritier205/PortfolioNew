import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Heritier K. — Développeur Fullstack & UI/UX",
  description: "Portfolio de Heritier K., développeur fullstack passionné par les expériences numériques haute performance. Disponible pour vos projets depuis Lomé, Togo.",
  keywords: ["développeur fullstack", "React", "Next.js", "Node.js", "UI/UX", "Togo", "Lomé"],
  authors: [{ name: "Heritier K." }],
  creator: "Heritier K.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="dark"
    >
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
