"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Database, Code2, Gamepad2, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science",
    icon: <BrainCircuit size={32} />,
    skills: ["Python", "R", "SQL", "Machine Learning", "Análisis Estadístico"]
  },
  {
    title: "Fullstack Development",
    icon: <Code2 size={32} />,
    skills: ["React", "Next.js", "Node.js", "TypeScript", "SaaS Architecture"]
  },
  {
    title: "Game Development",
    icon: <Gamepad2 size={32} />,
    skills: ["Unity", "Unreal Engine", "C#", "C++", "Blender"]
  },
  {
    title: "Data Architecture",
    icon: <Database size={32} />,
    skills: ["Bases de Datos Relacionales", "NoSQL", "Neo4j", "Data Pipelines", "Optimización"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Perfil Multiperfil</h2>
          <p className="hero-subtitle">
            Especialización en Ciencia de Datos, potenciada por años de experiencia en desarrollo Fullstack y creación de Videojuegos. Un enfoque integral para resolver problemas complejos.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={cat.title}
              className={`${styles.skillCard} glass-panel`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconContainer}>
                {cat.icon}
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <ul className={styles.skillList}>
                {cat.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
