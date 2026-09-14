"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
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
            
            <a href="https://instagram.com/francmqz" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.iconWrapper}><InstagramIcon /></div>
              <span>@francmqz</span>
            </a>
            
            <a href="https://wa.me/qr/tu_numero" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.iconWrapper}><MessageCircle size={20} /></div>
              <span>francmqz (WhatsApp)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
