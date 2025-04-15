// ✅ src/components/Navbar.tsx
"use client";
import { MouseEvent } from "react";

export default function Navbar() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur z-50 shadow-sm flex justify-between items-center px-8 py-4">
<h1
  className="text-xl font-bold cursor-pointer hover:text-purple-600 hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.8)] transition duration-300"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Mariam Pgs
</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-purple-600">À propos</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-purple-600">Compétences</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-purple-600">Projets</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-purple-600">Contact</a></li>
      </ul>
    </nav>
  );
}
