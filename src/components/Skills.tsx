"use client";

import './styles.css';

import { JSX } from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiCanva, } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";


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
      className="skills-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="text-3xl font-semibold mb-10 text-center">Compétences</h3>

      {/* Langages que j'utilise */}
      <div className="mb-15">       {/* espacement entre section languages et section outils */}
        <h4 className="skills-subtitle">💻 Langages que j’utilise</h4>
        <div className="skills-grid">
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
        <h4 className="skills-subtitle">🛠️ Outils que j’utilise</h4>
        <div className="skills-grid">
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
    <div className="skill-box">
      <div className="skill-icon">{icon}</div>
      <p className="skill-label">{label}</p>
    </div>
  );
}
