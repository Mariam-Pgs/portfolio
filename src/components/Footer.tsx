import './styles.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a 
          href="https://www.linkedin.com/in/mariam-poghossian-8482b12ba/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-link"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Mariam-Pgs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-link"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:poghossianm@gmail.com"
          aria-label="Email"
          className="footer-link"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© 2025 Mariam POGHOSSIAN - Tous droits réservés</p>
    </footer>
  );
}


