
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Testimonials from './components/Testimonials.tsx';
import DailyInspiration from './components/DailyInspiration.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <DailyInspiration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;