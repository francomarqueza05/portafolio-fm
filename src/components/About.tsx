"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

const stats = [
  { value: "2", label: "Productos lanzados" },
  { value: "+4", label: "Años construyendo" },
  { value: "16", label: "Edad de mi primer juego" },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>

        <div className={styles.imageColumn}>
          <motion.div
            className={styles.photoWrapper}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/foto.jpeg"
              alt="Franco Marquez Acosta"
              fill
              className={styles.photoImage}
              sizes="(max-width: 768px) 90vw, 380px"
            />
            <div className={styles.photoCaption}>
              <strong>Franco Marquez Acosta</strong>
              <span>Fundador de FM Studios</span>
            </div>
          </motion.div>
        </div>

        {/* Text Details */}
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Sobre mí</span>
          <h2 className={styles.title}>Datos, código y diseño en un mismo producto.</h2>
          <p className={styles.description}>
            Soy Franco Marquez Acosta. Hice mi primer juego en Unreal Engine a los 16 años y desde
            entonces no he dejado de construir: hoy publico juegos móviles y desarrollo plataformas
            SaaS con inteligencia artificial.
          </p>
          <p className={styles.description}>
            Mi base es la ciencia de datos, y la combino con desarrollo fullstack y game development.
            Eso me permite cubrir el ciclo completo: modelar el problema, programar el producto,
            cuidar la experiencia visual y llevarlo a producción. En FUSE eso significó desde el
            solver que valida cada nivel hasta los tráilers de las tiendas; en IA4Sales, desde el
            agente conversacional hasta el panel que usa el equipo de ventas.
          </p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
