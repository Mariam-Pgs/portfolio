// ✅ src/components/Projects.tsx
"use client";
import { useEffect, useRef, useState } from "react";
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
      className="p-10 max-w-4xl mx-auto scroll-mt-24"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="text-3xl font-semibold mb-4 text-center">Mes Projets</h3>
      <br>

      </br>
      <br>

      </br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h4 className="text-lg font-bold mb-2">Site vitrine</h4>
          <p className="text-sm text-gray-600">Création de pages web en HTML, CSS, JavaScript</p>
        </div>
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h4 className="text-lg font-bold mb-2">Jeu d’échecs en Java</h4>
          <p className="text-sm text-gray-600">Programmation orientée objet et logique de jeu</p>
        </div>
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h4 className="text-lg font-bold mb-2">Système de vote (C++)</h4>
          <p className="text-sm text-gray-600">Développement complet d’un système de vote</p>
        </div>
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h4 className="text-lg font-bold mb-2">Messagerie locale</h4>
          <p className="text-sm text-gray-600">Création d’une interface utilisateur et communication simulée</p>
        </div>
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h4 className="text-lg font-bold mb-2">Base de données SQL</h4>
          <p className="text-sm text-gray-600">Modélisation (MCD, MLD) et requêtes SQL avancées</p>
        </div>
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h4 className="text-lg font-bold mb-2">Installation de VM</h4>
          <p className="text-sm text-gray-600">Utilisation de VirtualBox, dual boot, partitionnement disque</p>
        </div>
      </div>
    </motion.section>
  );
}
