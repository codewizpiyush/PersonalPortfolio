// src/App.jsx
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

import { useTheme } from './hooks/useTheme';

import './styles/buttons.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>

      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Testimonials />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
