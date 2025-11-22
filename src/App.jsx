import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-neon-cyan selection:text-obsidian font-sans relative overflow-hidden">
      {/* Starfield Background */}
      <Starfield />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
