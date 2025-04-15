"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
      className="min-h-[100dvh] flex flex-col justify-center items-center px-4 py-16 max-w-4xl mx-auto"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h2 className="text-3xl font-semibold mb-8">À propos</h2>

      <div className="max-w-4xl mx-auto px-4">

      <p className="mb-6 text-center text-2xl">
        Étudiante en BUT Informatique passionnée par le développement web et le design UX/UI, je suis actuellement à la recherche d’une alternance dans le développement front-end à partir de septembre 2025.
      </p>

      <p className="mb-15 text-center text-2xl">
        Curieuse, créative et toujours motivée pour apprendre, j’aime concevoir des interfaces modernes, accessibles et centrées sur l’utilisateur.
      </p>

      </div>


      <div className="mt-6 w-full text-2xl">
        <h3 className="text-3xl font-semibold mb-4 text-center">Formation</h3>
        <ul className="space-y-2 text-center">
          <li>
            <strong>BUT Informatique</strong> – IUT d\'Aix-en-Provence, 2025 – 2027
          </li>
          <li>
            <strong>Baccalauréat Technologique</strong> – Lycée Jean Perrin Marseille – Spécialités STI2D option Systèmes d’Information et Numérique
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
