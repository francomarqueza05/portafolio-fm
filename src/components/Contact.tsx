"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <motion.div 
          className={`${styles.contactCard} glass-panel`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.textContent}>
            <h2 className="section-title">Hablemos</h2>
            <p className="hero-subtitle" style={{ margin: "0", textAlign: "left" }}>
              ¿Tienes un proyecto en mente o buscas talento especializado? Conectemos.
            </p>
          </div>

          <div className={styles.contactInfo}>
            <h3 className={styles.name}>Franco Marquez Acosta</h3>
            
            <a href="mailto:francomarqueza2005@gmail.com" className={styles.contactLink}>
              <div className={styles.iconWrapper}><Mail size={20} /></div>
              <span>francomarqueza2005@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/franco-marquez-acosta" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.iconWrapper}><Linkedin size={20} /></div>
              <span>Franco Marquez Acosta</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
