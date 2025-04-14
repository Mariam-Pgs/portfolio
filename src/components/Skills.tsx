"use client";

import { JSX } from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaGitAlt, FaGithub, FaFigma, FaPhp } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiMysql, SiCanva, } from "react-icons/si";
import { FaDatabase, FaStackOverflow } from "react-icons/fa";


export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="p-10 bg-gray-100 text-gray-900 scroll-mt-20"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="text-3xl font-semibold mb-10 text-center">Compétences</h3>

      {/* Langages que j'utilise */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold mb-4 text-center">💻 Langages que j’utilise</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <SkillBox icon={<FaHtml5 />} label="HTML" />
          <SkillBox icon={<FaCss3Alt />} label="CSS" />
          <SkillBox icon={<FaJs />} label="JavaScript" />
          <SkillBox icon={<SiTypescript />} label="TypeScript" />
          <SkillBox icon={<FaReact />} label="React" />
          <SkillBox icon={<FaPython />} label="Python" />
          <SkillBox icon={<FaJava />} label="Java" />
          <SkillBox icon={<SiCplusplus />} label="C++" />
          <SkillBox icon={<FaJava />} label="JavaFX" />
          <SkillBox icon={<FaDatabase />} label="Oracle SQL" />
        </div>
      </div>

      {/* Outils que j’utilise */}
      <div>
        <h4 className="text-xl font-semibold mb-4 text-center">🛠️ Outils que j’utilise</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <SkillBox icon={<FaFigma />} label="Figma" />
          <SkillBox icon={<FaGithub />} label="GitHub" />
          <SkillBox icon={<FaGitAlt />} label="Git" />
          <SkillBox icon={<SiCanva />} label="Canva" />
        </div>
      </div>
    </motion.section>
  );
}

function SkillBox({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <div className="text-3xl mb-2 text-purple-600">{icon}</div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
