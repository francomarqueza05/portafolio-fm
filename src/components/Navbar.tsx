"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#projects", label: "Proyectos" },
  { href: "/#about", label: "Sobre mí" },
  { href: "/#skills", label: "Stack" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} aria-label="FM Studios, inicio">
            <Image src="/brand/fm-mark.svg" alt="" width={38} height={38} className={styles.logoMark} />
            <Image src="/brand/fm-wordmark.svg" alt="" width={139} height={18} className={styles.logoWord} />
          </Link>

          <div className={styles.links}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
            <Link href="/#contact" className="btn-primary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.9rem" }}>
              Contacto
            </Link>
          </div>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileHeader}>
              <span className={styles.logo} aria-label="FM Studios">
                <Image src="/brand/fm-mark.svg" alt="" width={38} height={38} className={styles.logoMark} />
                <Image src="/brand/fm-wordmark.svg" alt="" width={139} height={18} className={styles.logoWord} />
              </span>
              <button
                className={styles.mobileMenuBtn}
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              ))}
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary">
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
