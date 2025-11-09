

import React, { useState, useEffect } from 'react';
import Button from './ui/Button.tsx';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/awakening/1920/1080')",
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-4 animate-fade-in-down">
          Unlock Your Potential. Design Your Future.
        </h1>
        <p className="text-lg md:text-xl mb-8 text-stone-200 animate-fade-in-up">
          I help you break through barriers, gain clarity, and build the life you've always envisioned.
        </p>
        <div className="animate-fade-in-up animation-delay-300">
          <Button href="#contact" size="lg" variant="secondary">
            Begin Your Transformation
          </Button>
        </div>
      </div>
       {/* FIX: Removed the non-standard `jsx` prop from the `<style>` tag to resolve a TypeScript error, as this project does not appear to use the `styled-jsx` library. */}
       <style>{`
        @keyframes fade-in-down {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes fade-in-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out 0.3s forwards;
            opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;