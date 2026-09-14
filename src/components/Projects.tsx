"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Image from "next/image";

const projects = [
  {
    id: "fuse",
    title: "Fuse",
    category: "Mobile Game / Unity",
    description: "¿Alguna vez te has preguntado cómo se vería Tetris+Candy Crush+Sokoban?\nPues Fuse es la respuesta!",
    image: "/fuse-logo.png",
    link: "/fuse",
    badge: "Próximamente en iOS"
  },
  {
    id: "ia4sales",
    title: "ia4sales",
    category: "SaaS Platform",
    description: "Plataforma Fullstack para el canal de ventas ZaaZ. Centraliza leads y los atiende mediante chatbots IA que validan cobertura y cierran ventas automáticamente, con derivación a atención humana.",
    image: "/ia4sales_real_2.png",
    link: "#"
  },
  {
    id: "rocket-crash",
    title: "Rocket Crash",
    category: "First Game / Unreal Engine",
    description: "Mi primer juego creado a los 16 años.",
    image: "/rocket_crash.jpg",
    link: "https://youtu.be/fXeZrMqKcgc"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Proyectos Destacados
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} glass-panel`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ 
                    objectFit: project.id === 'ia4sales' || project.id === 'fuse' ? 'contain' : 'cover',
                    objectPosition: 'center',
                    padding: project.id === 'ia4sales' || project.id === 'fuse' ? '2rem' : '0'
                  }}
                />
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    Ver Proyecto
                  </a>
                  {project.badge && <span className={styles.badge}>{project.badge}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
