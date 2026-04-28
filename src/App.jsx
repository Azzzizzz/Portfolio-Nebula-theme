import { Analytics } from '@vercel/analytics/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/routes/Home';
import Case from '@/routes/Case';

function App() {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/case/');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-ink">
      {showNavbar ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:slug" element={<Case />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
