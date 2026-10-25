import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PERSON, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Franco Marquez Acosta | FM Studios",
  description:
    "Portafolio de Franco Marquez Acosta (FM Studios), estudiante de Ciencia de Datos en la UPV. Desarrollo fullstack y videojuegos: creador de FUSE, juego de puzzles para iOS y Android, y de IA4Sales, asistente de ventas con IA en desarrollo.",
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Franco Marquez Acosta | FM Studios",
    description: "Ciencia de datos, desarrollo fullstack y videojuegos. Creador de FUSE e IA4Sales.",
    url: SITE_URL,
    siteName: "Franco Marquez Acosta · FM Studios",
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
