"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Database, Code2, Gamepad2, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "Ciencia de datos e IA",
    icon: <BrainCircuit size={22} />,
    usedIn: "IA4Sales",
    skills: ["Python", "R", "SQL", "Machine Learning", "Análisis estadístico", "IA conversacional"]
  },
  {
    title: "Desarrollo fullstack",
    icon: <Code2 size={22} />,
    usedIn: "IA4Sales · este portafolio",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Arquitectura SaaS"]
  },
  {
    title: "Desarrollo de videojuegos",
    icon: <Gamepad2 size={22} />,
    usedIn: "FUSE",
    skills: ["Unity", "C#", "Unreal Engine", "C++", "Blender"]
  },
  {
    title: "Arquitectura de datos",
    icon: <Database size={22} />,
    usedIn: "Backends y analítica",
    skills: ["Bases de datos relacionales", "NoSQL", "Neo4j", "Data pipelines", "Optimización"]
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Stack</span>
          <h2 className="section-title">Un perfil, cuatro disciplinas.</h2>
          <p className={styles.lead}>
            Especialización en ciencia de datos, potenciada por desarrollo fullstack y creación de
            videojuegos.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <span className={styles.usedIn}>{cat.usedIn}</span>
                </div>
              </div>
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
