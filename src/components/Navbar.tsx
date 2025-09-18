"use client";

import { MouseEvent } from "react";
import "./styles.css";

export default function Navbar() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h1
        className="navbar-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Accueil
      </h1>

      {/* Menu pour écrans moyens et grands */}
      <ul className="navbar-menu">
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="navbar-link"
          >
            À propos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="navbar-link"
          >
            Compétences
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="navbar-link"
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="navbar-link"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Menu mobile */}
      <ul className="navbar-menu-mobile">
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="navbar-link"
          >
            À propos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="navbar-link"
          >
            Compétences
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="navbar-link"
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="navbar-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
