"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "./FusePage.module.css";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/fuse/f1.png", alt: "Fuse Gameplay 1" },
  { src: "/fuse/f2.png", alt: "Fuse Gameplay 2" },
  { src: "/fuse/f3.png", alt: "Fuse Gameplay 3" },
  { src: "/fuse/f4.png", alt: "Fuse Gameplay 4" },
  { src: "/fuse/f5.png", alt: "Fuse Gameplay 5" },
  { src: "/fuse/f6.png", alt: "Fuse Gameplay 6" },
];

const fuseVideos = [
  "/fuse/Movie_014.mp4",
  "/fuse/Movie_021.mp4",
  "/fuse/Movie_024.mp4",
  "/fuse/Movie_025.mp4"
];

export default function FusePage() {
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => setVideoIndex((prev) => (prev + 1) % fuseVideos.length);
  const prevVideo = () => setVideoIndex((prev) => (prev - 1 + fuseVideos.length) % fuseVideos.length);

  return (
    <main className={styles.fusePage}>
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.videoContainer}>
            <AnimatePresence mode="wait">
              <motion.video
                key={videoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.videoBackground}
                autoPlay
                muted
                loop
                playsInline
                src={fuseVideos[videoIndex]}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className={styles.heroTitle}>FUSE</h1>
          </motion.div>
          
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Un rompecabezas de lógica espacial y estética neón.
          </motion.p>

          <motion.div
            className={styles.carouselContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button onClick={prevVideo} className={styles.carouselNav} aria-label="Video anterior">
              <ChevronLeft size={28} />
            </button>
            
            <div className={styles.mainVideoWrapper}>
              <AnimatePresence mode="wait">
                <motion.video
                  key={videoIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={styles.mainVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={fuseVideos[videoIndex]}
                />
              </AnimatePresence>
            </div>

            <button onClick={nextVideo} className={styles.carouselNav} aria-label="Siguiente video">
              <ChevronRight size={28} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContent}>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Despierta tu lógica.</h2>
            <p>
              Sumérgete en FUSE, una experiencia de puzles minimalista pero profundamente estratégica, diseñada para poner a prueba tu razonamiento espacial y tus habilidades de planificación. En un mundo de neón vibrante y geometría elegante, tu objetivo es simple: fusionar los bloques correctos para despejar el tablero. Pero cuidado, cada movimiento cuenta.
            </p>
          </motion.div>

          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2>Jugabilidad estratégica</h2>
            <p>
              Cada nivel presenta una cuadrícula única llena de posibilidades. Desliza y conecta bloques para crear fusiones poderosas. Con un número limitado de movimientos, debes pensar con anticipación. ¿Lograrás despejar el camino con precisión o te quedarás atascado? FUSE es un juego de riesgos calculados y soluciones elegantes y satisfactorias.
            </p>
          </motion.div>

          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Dominio táctico</h2>
            <p>
              A medida que avanzas, los desafíos evolucionan. Utiliza un conjunto de herramientas estratégicas y habilidades únicas para superar diseños complejos y alcanzar tus objetivos. Desde manipular la geometría del tablero hasta navegar por intrincados caminos congelados, cada herramienta a tu disposición está diseñada para mejorar tu profundidad táctica. Adapta tu estrategia para desbloquear el verdadero potencial de cada movimiento.
            </p>
          </motion.div>

          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2>Características principales</h2>
            <p>
              <strong>Gráficos de primera:</strong> Estética neón de alta gama con animaciones fluidas y una respuesta háptica excepcional.<br/><br/>
              <strong>Lógica desafiante:</strong> Cientos de niveles diseñados a mano que van desde relajantes hasta extremadamente desafiantes.<br/><br/>
              <strong>Profundidad estratégica:</strong> Una combinación perfecta de juego casual y planificación táctica profunda y gratificante.<br/><br/>
              <strong>Cuadrículas dinámicas:</strong> Navega por tableros en constante cambio que requieren una perspectiva fresca y una adaptación continua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Una mirada más de cerca
        </motion.h2>
        
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className={styles.galleryImage} 
                sizes="(max-width: 768px) 80vw, 600px"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        >
          <h2>¿Estás listo para resolver el rompecabezas?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px' }}>
            Descarga FUSE hoy y comienza la reacción en cadena.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="https://play.google.com/store/apps/details?id=com.fmstudios.fuse&hl=es" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Descargar en Google Play
            </a>
            <span className={styles.badge}>Próximamente en iOS</span>
          </div>

          <Link href="/#projects" style={{ marginTop: '3rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} /> Volver al Portafolio
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
