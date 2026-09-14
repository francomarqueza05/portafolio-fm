"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

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
            
            <a href="https://www.linkedin.com/in/franco-marquez-acosta-ab4274289/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.iconWrapper}><LinkedinIcon size={20} /></div>
              <span>Franco Marquez Acosta</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
