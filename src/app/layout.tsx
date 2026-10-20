import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Franco Marquez Acosta | FM Studios",
  description:
    "Portafolio de Franco Marquez Acosta (FM Studios). Ciencia de datos, desarrollo fullstack y videojuegos: creador de FUSE, puzzle de neón para iOS y Android, y de IA4Sales, el bot que vende internet por WhatsApp.",
  openGraph: {
    title: "Franco Marquez Acosta | FM Studios",
    description: "Ciencia de datos, desarrollo fullstack y videojuegos. Creador de FUSE e IA4Sales.",
    images: ["/fuse/cover.webp"],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
