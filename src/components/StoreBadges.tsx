import Image from "next/image";
import styles from "./StoreBadges.module.css";

export const FUSE_LINKS = {
  appStore: "https://apps.apple.com/app/id6820258128",
  googlePlay: "https://play.google.com/store/apps/details?id=com.fmstudios.fuse",
  website: "https://fuse-e688b.web.app/",
};

export default function StoreBadges({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={styles.badges} style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
      <a href={FUSE_LINKS.appStore} target="_blank" rel="noopener noreferrer" className={styles.badge}>
        <Image src="/fuse/badge-appstore.webp" alt="Descargar FUSE en el App Store" width={150} height={50} />
      </a>
      <a href={FUSE_LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className={styles.badge}>
        <Image src="/fuse/badge-googleplay.webp" alt="Descargar FUSE en Google Play" width={150} height={50} />
      </a>
    </div>
  );
}
