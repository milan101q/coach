
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

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
          backgroundImage: "url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1920&auto=format&fit=crop')",
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 
          className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-4 animate-fade-in-down"
          style={{ animationDelay: '0.2s' }}
        >
          Unlock Your Potential. Design Your Future.
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 text-stone-200 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          I help you break through barriers, gain clarity, and build the life you've always envisioned.
        </p>
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <Button href="#contact" size="lg" variant="secondary">
            Begin Your Transformation
          </Button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in-down {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        /* Base styles for hero animations */
        .animate-fade-in-down,
        .animate-fade-in-up {
            opacity: 0; /* Start hidden */
            animation-duration: 0.8s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards; /* Stay at the final state */
        }
        .animate-fade-in-down {
            animation-name: fade-in-down;
        }
        .animate-fade-in-up {
            animation-name: fade-in-up;
        }
      `}</style>
    </section>
  );
};

export default Hero;