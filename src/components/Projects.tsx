// ✅ src/components/Projects.tsx
"use client";
import "./styles.css";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="projects-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="projects-title">Mes Projets</h3>

      <div className="projects-grid">

        <div className="project-card">
          <h4 className="project-title">Site vitrine</h4>
          <p className="project-text">Création de pages web en HTML, CSS, JavaScript</p>
        </div>
        <div className="project-card">
          <h4 className="project-title">Jeu d’échecs en Java</h4>
          <p className="project-text">Programmation orientée objet et logique de jeu</p>
        </div>
        <div className="project-card">
          <h4 className="project-title">Système de vote (C++)</h4>
          <p className="project-text">Développement complet d’un système de vote</p>
        </div>
        <div className="project-card">
          <h4 className="project-title">Messagerie locale</h4>
          <p className="project-text">Création d’une interface utilisateur et communication simulée</p>
        </div>
        <div className="project-card">
          <h4 className="project-title">Base de données SQL</h4>
          <p className="project-text">Modélisation (MCD, MLD) et requêtes SQL avancées</p>
        </div>
        <div className="project-card">
          <h4 className="project-title">Installation de VM</h4>
          <p className="project-text">Utilisation de VirtualBox, dual boot, partitionnement disque</p>
        </div>
      </div>
    </motion.section>
  );
}
