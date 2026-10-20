import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>&copy; {new Date().getFullYear()} FM Studios · Franco Marquez Acosta</p>
        <nav className={styles.links}>
          <Link href="/fuse">FUSE</Link>
          <a href="https://ia4sales.pe" target="_blank" rel="noopener noreferrer">IA4Sales</a>
          <a href="https://www.linkedin.com/in/franco-marquez-acosta-ab4274289/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:francomarqueza2005@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
