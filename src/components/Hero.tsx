// ✅ src/components/Hero.tsx
import "./Hero.css";


export default function Hero() {
 return (
   <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-100 to-white pt-28 px-4">
     <h1 className="text-4xl md:text-5xl font-bold mb-4 relative hero-title">
       Bonjour, je suis <span className="underline-animate">Mariam</span> 🫧
     </h1>
     <br>
    
     </br>
     <p className="text-lg text-gray-700 max-w-xl">
       Étudiante en 1ᵉ année de BUT Informatique à Aix-en-Provence, passionnée par le développement web et le design UX/UI,
     </p>
     <p className="text-lg text-purple-600 font-semibold max-w-xl">
       Je suis actuellement à la recherche d’une alternance en développement front-end pour ma 2ᵉ et 3ᵉ année.
     </p>
   </section>
 );
}
