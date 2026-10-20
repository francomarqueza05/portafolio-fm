"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LazyVideo from "@/components/LazyVideo";
import StoreBadges, { FUSE_LINKS } from "@/components/StoreBadges";
import styles from "./FusePage.module.css";
import { ArrowLeft, ArrowUpRight, Bomb, Snowflake, ArrowLeftRight, Plus } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const stats = [
  { value: "100+", label: "niveles" },
  { value: "4", label: "power-ups" },
  { value: "Diario", label: "reto con amigos" },
  { value: "Gratis", label: "en iOS y Android" },
];

const howToPlay = [
  { src: "/fuse/shots/P2_1_slide.webp", step: "01", title: "Desliza", text: "Desliza y la caja avanza hasta chocar con algo." },
  { src: "/fuse/shots/P2_2_fuse.webp", step: "02", title: "Fusiona", text: "Lleva cada caja a la meta de su color para encenderla." },
  { src: "/fuse/shots/P2_3_stars.webp", step: "03", title: "Ve por 3 estrellas", text: "Menos movimientos, mejor nota. ¿Puedes hacerlo perfecto?" },
];

const powerUps = [
  { icon: <Plus size={20} />, color: "#3ee07a", title: "+5 movimientos", text: "Suma movimientos extra a la partida." },
  { icon: <Bomb size={20} />, color: "#ff7a45", title: "Bomba", text: "Vuela la caja que estorba y desata reacciones en cadena con TNT." },
  { icon: <Snowflake size={20} />, color: "#4cc3ff", title: "Congelar", text: "Convierte una casilla en hielo y manda las cajas deslizando." },
  { icon: <ArrowLeftRight size={20} />, color: "#ff4fa3", title: "Intercambio", text: "Teletransporta dos cajas para que cambien de lugar." },
];

const clips = [
  { src: "AdChain", label: "Reacción en cadena" },
  { src: "AdPowerUps", label: "Power-ups" },
  { src: "AdChallenge", label: "Desafío" },
  { src: "AdSplit", label: "¿Cuál gana?" },
];

const screenshots = ["01_hero", "02_fuse", "03_bomb", "04_freeze", "05_swap", "06_stars"];

export default function FusePage() {
  return (
    <main className={styles.fusePage}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image src="/fuse/header.webp" alt="" fill preload className={styles.heroBgImage} sizes="100vw" />
        </div>

        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.kicker}>Ya disponible en iPhone y Android</span>
            <h1 className={styles.srOnly}>FUSE</h1>
            <Image src="/fuse/logo.webp" alt="FUSE" width={420} height={178} className={styles.heroLogo} preload />
            <p className={styles.heroTagline}>
              Slide. <span>Fuse.</span> Glow.
            </p>
            <p className={styles.heroSubtitle}>
              Un puzzle de neón: desliza las cajas, fusiona los colores y supera el Reto Diario con tus amigos.
            </p>
            <StoreBadges />
          </motion.div>

          <motion.div
            className={styles.heroPhone}
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.phone}>
              <video
                className={styles.phoneVideo}
                src="/fuse/video/trailer-vertical.mp4"
                poster="/fuse/video/trailer-vertical.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Tráiler vertical de FUSE"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsStrip}>
        <div className={styles.statsInner}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How to play */}
      <section className={styles.section}>
        <motion.div className={styles.sectionHeader} {...reveal}>
          <span className={styles.kicker}>Cómo se juega</span>
          <h2 className={styles.sectionTitle}>Tres reglas. Cientos de soluciones.</h2>
        </motion.div>

        <div className={styles.howGrid}>
          {howToPlay.map((item, i) => (
            <motion.figure
              key={item.step}
              className={styles.howCard}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.1 }}
            >
              <div className={styles.howImage}>
                <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 90vw, 380px" />
              </div>
              <figcaption>
                <span className={styles.step}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Power-ups */}
      <section className={`${styles.section} ${styles.powerSection}`}>
        <div className={styles.powerLayout}>
          <motion.div className={styles.powerCopy} {...reveal}>
            <span className={styles.kicker}>Power-ups</span>
            <h2 className={styles.sectionTitle}>¿Atascado? Rompe las reglas.</h2>
            <p className={styles.bodyText}>
              Cada capítulo suma una mecánica nueva (vidrio, hielo, TNT, teletransportes) y cuatro
              power-ups te ayudan cuando el tablero se pone difícil.
            </p>
            <ul className={styles.powerList}>
              {powerUps.map((p) => (
                <li key={p.title}>
                  <span className={styles.powerIcon} style={{ color: p.color, borderColor: p.color, boxShadow: `0 0 18px ${p.color}55` }}>
                    {p.icon}
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.powerShots} {...reveal}>
            {["03_bomb", "04_freeze", "05_swap"].map((s) => (
              <div key={s} className={styles.powerShot}>
                <Image src={`/fuse/shots/${s}.webp`} alt={`Captura de FUSE: ${s.slice(3)}`} fill sizes="(max-width: 768px) 30vw, 220px" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trailer */}
      <section className={styles.section}>
        <motion.div className={styles.sectionHeader} {...reveal}>
          <span className={styles.kicker}>Tráiler</span>
          <h2 className={styles.sectionTitle}>Míralo en movimiento.</h2>
        </motion.div>
        <motion.div className={styles.trailer} {...reveal}>
          <video
            src="/fuse/video/trailer-landscape.mp4"
            poster="/fuse/video/trailer-landscape.jpg"
            controls
            muted
            playsInline
            preload="none"
            aria-label="Tráiler de FUSE"
          />
        </motion.div>
      </section>

      {/* Clips */}
      <section className={styles.section}>
        <motion.div className={styles.sectionHeader} {...reveal}>
          <span className={styles.kicker}>Clips</span>
          <h2 className={styles.sectionTitle}>Momentos del juego.</h2>
          <p className={styles.bodyText}>Clips verticales del juego en acción.</p>
        </motion.div>
        <div className={styles.scroller}>
          {clips.map((clip) => (
            <figure key={clip.src} className={styles.clip}>
              <LazyVideo
                src={`/fuse/video/${clip.src}.mp4`}
                poster={`/fuse/video/${clip.src}.jpg`}
                className={styles.clipVideo}
                label={clip.label}
              />
              <figcaption>{clip.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className={styles.section}>
        <motion.div className={styles.sectionHeader} {...reveal}>
          <span className={styles.kicker}>Capturas</span>
          <h2 className={styles.sectionTitle}>Una mirada más de cerca.</h2>
        </motion.div>
        <div className={styles.scroller}>
          {screenshots.map((s) => (
            <div key={s} className={styles.screenshot}>
              <Image src={`/fuse/shots/${s}.webp`} alt={`Captura de FUSE en App Store: ${s.slice(3)}`} fill sizes="260px" />
            </div>
          ))}
        </div>
      </section>

      {/* Behind the game */}
      <section className={styles.section}>
        <motion.div className={styles.sectionHeader} {...reveal}>
          <span className={styles.kicker}>Detrás del juego</span>
          <h2 className={styles.sectionTitle}>De la idea a las tiendas.</h2>
          <p className={styles.bodyText}>
            Diseñé y desarrollé FUSE con Unity y C#, y lo publiqué en App Store y Google Play bajo
            mi sello independiente, FM Studios.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaInner} {...reveal}>
          <Image src="/fuse/logo.webp" alt="FUSE" width={260} height={110} className={styles.ctaLogo} />
          <h2>¿Listo para encender el tablero?</h2>
          <p>Descarga FUSE gratis y empieza la reacción en cadena.</p>
          <StoreBadges align="center" />
          <div className={styles.ctaLinks}>
            <a href={FUSE_LINKS.website} target="_blank" rel="noopener noreferrer">
              Web oficial <ArrowUpRight size={15} />
            </a>
            <Link href="/#projects">
              <ArrowLeft size={15} /> Volver al portafolio
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
