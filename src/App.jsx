import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Index from '@/components/Index';
import Now from '@/components/Now';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-ink">
      <Navbar />
      <main className="relative">
        <Hero />
        <Index />
        <Now />
        <Projects />
        <Stack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
