

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '@/components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="divider white-to-gray"></div>
      <Skills />
      <div className="divider gray-to-white"></div>
      <Projects />
      <div className="divider white-to-gray"></div>
      <Contact />
      <div className="divider gray-to-white"></div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
