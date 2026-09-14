"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        
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
              sizes="(max-width: 768px) 100vw, 350px"
            />
          </motion.div>
        </div>

        {/* Text Details */}
        <div className={styles.textColumn}>
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sobre mí
          </motion.p>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Combinando Datos,<br/> Código y Diseño
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soy Franco Marquez Acosta. Desde crear mi primer juego en Unreal Engine a los 16 años hasta desarrollar plataformas SaaS impulsadas por Inteligencia Artificial, siempre me ha apasionado construir experiencias digitales excepcionales. 
            Me especializo en fusionar la lógica de la Ciencia de Datos con un desarrollo Fullstack robusto y un diseño de interfaces premium, buscando siempre el equilibrio perfecto entre funcionalidad e impacto visual.
          </motion.p>

          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statValue}>+4</span>
              <span className={styles.statLabel}>Años Exp.</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Pasión</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
