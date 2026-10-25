import type { Metadata } from "next";
import { Outfit, Exo_2 } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "700", "800"] });
const exo = Exo_2({ subsets: ["latin"], variable: "--font-exo", weight: ["800"], style: ["italic"] });

export const metadata: Metadata = {
  title: "FUSE · Puzzle de neón para iOS y Android | FM Studios",
  description:
    "FUSE: desliza cajas, fusiona colores y supera el Reto Diario. Más de 100 niveles y 4 power-ups. Gratis en App Store y Google Play.",
  alternates: { canonical: "/fuse" },
  openGraph: {
    title: "FUSE · Slide. Fuse. Glow.",
    description: "Puzzle de neón con más de 100 niveles. Gratis en iOS y Android.",
    images: ["/fuse/cover-logo.webp"],
  },
};

export default function FuseLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${outfit.variable} ${exo.variable}`}>{children}</div>;
}
