import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FM Studios | Portfolio",
  description: "Portafolio profesional de FM Studios. Ciencia de datos, desarrollo fullstack y videojuegos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
