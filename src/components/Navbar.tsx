"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>
          FM Studios
        </a>
        <div className={styles.links}>
          <a href="#projects">Proyectos</a>
          <a href="#about">Perfil</a>
          <a href="#contact" className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
            Contacto
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
