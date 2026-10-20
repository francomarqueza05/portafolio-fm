"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Mic, MapPin } from "lucide-react";
import styles from "./Projects.module.css";
import LazyVideo from "./LazyVideo";
import StoreBadges from "./StoreBadges";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const ia4salesFlow = [
  "Atiende al instante",
  "Ubica la dirección",
  "Verifica la cobertura",
  "Muestra tus planes",
  "Cierra y pide documentos",
  "Pasa el caso a tu equipo",
];

const ia4salesFeatures = [
  { title: "Bandeja para asesores", text: "Solo llega lo que necesita una persona, con la conversación y los datos del cliente." },
  { title: "Rendimiento del equipo", text: "Quién está conectado, tiempos de respuesta y cómo termina cada caso." },
  { title: "Editor visual", text: "Cada paso del bot se edita en un mapa visual, sin programar." },
  { title: "Conectado a tu CRM", text: "HubSpot, Kommo, Zapier, Make, n8n o una integración propia." },
];

const chat = [
  { from: "user", text: "Hola, ¿tienen fibra en Miraflores? Vivo en Av. Larco 1234" },
  { from: "bot", text: "Te envié un mapa con la ubicación de Av. Larco 1234, Miraflores. ¿Es correcta?", map: true },
  { from: "user", text: "Sí, es una casa" },
  { from: "bot", text: "¡Sí llegamos a tu zona! Aquí tienes nuestros planes, la instalación es gratis." },
  { from: "user", text: "Quiero el de 600", voice: true },
  { from: "bot", text: "¡Excelente elección! Envíame una foto de tu DNI por delante y por detrás…" },
];

function FuseCase() {
  return (
    <motion.article className={`${styles.caseCard} ${styles.fuseCard}`} {...reveal}>
      <div className={styles.fuseMedia}>
        <div className={styles.fuseGlow} />
        <div className={styles.phone}>
          <LazyVideo
            src="/fuse/video/trailer-vertical.mp4"
            poster="/fuse/video/trailer-vertical.jpg"
            className={styles.phoneVideo}
            label="Tráiler de FUSE"
          />
        </div>
      </div>

      <div className={styles.caseInfo}>
        <span className={styles.category}>Juego móvil · iOS y Android</span>
        <Image src="/fuse/logo.webp" alt="FUSE" width={220} height={93} className={styles.fuseLogo} />
        <p className={styles.tagline}>Slide. Fuse. Glow.</p>
        <p className={styles.description}>
          Un puzzle de neón: deslizas cajas hasta que chocan, llevas cada una a la meta de su color
          y encadenas fusiones. Más de 100 niveles con mecánicas nuevas en cada capítulo
          (vidrio, hielo, TNT, teletransportes), 4 power-ups y un Reto Diario para competir con amigos.
        </p>

        <dl className={styles.facts}>
          <div>
            <dt>Rol</dt>
            <dd>Diseño, desarrollo y lanzamiento</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>Unity · C# · Python · Remotion</dd>
          </div>
          <div>
            <dt>Contenido</dt>
            <dd>100+ niveles · 4 power-ups</dd>
          </div>
        </dl>

        <div className={styles.actions}>
          <Link href="/fuse" className="btn-primary">
            Ver caso completo <ArrowRight size={16} />
          </Link>
          <StoreBadges />
        </div>
      </div>
    </motion.article>
  );
}

function ChatMock() {
  return (
    <div className={styles.chatWrap}>
      <div className={styles.chat}>
        <div className={styles.chatHeader}>
          <span className={styles.chatAvatar}>F</span>
          <div>
            <strong>Tu ISP</strong>
            <span><i className={styles.onlineDot} /> en línea</span>
          </div>
        </div>
        <div className={styles.chatBody}>
          {chat.map((msg, i) => (
            <motion.div
              key={i}
              className={`${styles.bubble} ${msg.from === "user" ? styles.bubbleUser : styles.bubbleBot}`}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.35 }}
            >
              {msg.map && (
                <span className={styles.mapPreview}>
                  <MapPin size={14} /> Av. Larco 1234, Miraflores
                </span>
              )}
              {msg.voice && <Mic size={13} className={styles.voiceIcon} />}
              {msg.text}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.span
        className={`${styles.floatTag} ${styles.floatTagTop}`}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <b>Cobertura</b> verificada <Check size={14} />
      </motion.span>
      <motion.span
        className={`${styles.floatTag} ${styles.floatTagBottom}`}
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.6 }}
      >
        <b>Venta</b> cerrada · Hogar 600
      </motion.span>
    </div>
  );
}

function Ia4SalesCase() {
  return (
    <motion.article className={`${styles.caseCard} ${styles.iaCard}`} {...reveal}>
      <div className={styles.iaMedia}>
        <ChatMock />
      </div>

      <div className={styles.caseInfo}>
        <span className={`${styles.category} ${styles.categoryGreen}`}>SaaS · IA conversacional para ISPs</span>
        <h3 className={styles.title}>
          IA<span className={styles.iaFour}>4</span>Sales
        </h3>
        <p className={styles.tagline}>El bot que vende internet por WhatsApp.</p>
        <p className={styles.description}>
          Un agente de ventas para proveedores de internet. Responde en segundos, ubica la dirección en
          un mapa, verifica la cobertura, muestra los planes, cierra la venta y pide los documentos
          (reconoce DNI, recibo y fachada en la foto). Del primer «hola» a la venta sin intervención
          humana, y deriva el caso al equipo cuando hace falta.
        </p>

        <div className={styles.stats}>
          <div><strong>≈2 s</strong><span>por respuesta</span></div>
          <div><strong>24/7</strong><span>sin turnos</span></div>
          <div><strong>Voz y texto</strong><span>entiende audios</span></div>
        </div>

        <ol className={styles.flow}>
          {ia4salesFlow.map((step, i) => (
            <li key={step}><span>{i + 1}</span>{step}</li>
          ))}
        </ol>

        <div className={styles.actions}>
          <a href="https://ia4sales.pe" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visitar ia4sales.pe <ArrowUpRight size={16} />
          </a>
          <a href="https://ia4sales.pe/#demo" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Probar la demo en vivo
          </a>
        </div>
      </div>

      <div className={styles.featureRow}>
        {ia4salesFeatures.map((f) => (
          <div key={f.title} className={styles.feature}>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.header className={styles.header} {...reveal}>
          <span className="eyebrow">Trabajo seleccionado</span>
          <h2 className="section-title">Productos reales, en producción.</h2>
          <p className={styles.lead}>
            Dos proyectos que diseñé y construí de punta a punta: un juego publicado en App Store y
            Google Play, y una plataforma SaaS que vende por WhatsApp con IA.
          </p>
        </motion.header>

        <div className={styles.projectsGrid}>
          <FuseCase />
          <Ia4SalesCase />
        </div>
      </div>
    </section>
  );
}
