"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import './styles.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="about-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h2 className="about-title">À propos</h2>

      <div className="about-content">
      <p className="about-text">
        Étudiante en BUT Informatique passionnée par le développement web et le design UX/UI, je suis actuellement à la recherche d’une alternance dans le développement front-end à partir de septembre 2025.
      </p>

      <p className="about-text">
        Curieuse, créative et toujours motivée pour apprendre, j&apos;aime concevoir des interfaces modernes, accessibles et centrées sur l’utilisateur.
      </p>

      </div>


      <div className="about-formation">
        <h3 className="formation-title">Formation</h3>
        <ul className="formation-list">
          <li>
            <strong>BUT Informatique</strong> – IUT d&apos;Aix-en-Provence, 2025 – 2027
          </li>
          <li>
            <strong>Baccalauréat Technologique</strong> – Lycée Jean Perrin Marseille – Spécialités STI2D option Systèmes d’Information et Numérique
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
