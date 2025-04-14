// ✅ src/components/Footer.tsx
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Footer() {
 return (
   <footer className="bg-gray-200 py-6 mt-20">
     <div className="flex justify-center gap-6">
       <a
         href="https://www.linkedin.com/in/ton-profil"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="LinkedIn"
         className="text-gray-700 hover:text-purple-600 text-xl"
       >
         <FaLinkedin />
       </a>
       <a
         href="https://www.instagram.com/tonpseudo"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Instagram"
         className="text-gray-700 hover:text-purple-600 text-xl"
       >
         <FaInstagram />
       </a>
       <a
         href="https://github.com/ton-github"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="GitHub"
         className="text-gray-700 hover:text-purple-600 text-xl"
       >
         <FaGithub />
       </a>
       <a
         href="mailto:poghossianm@gmail.com"
         aria-label="Email"
         className="text-gray-700 hover:text-purple-600 text-xl"
       >
         <FaEnvelope />
       </a>
     </div>
     <p className="text-center text-sm text-gray-500 mt-4">© 2025 Mariam Poghossian</p>
   </footer>
 );
}


