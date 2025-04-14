// src/app/page.tsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '@/components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}
