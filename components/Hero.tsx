import * as React from 'react';
import Button from './ui/Button.tsx';

// Icon for the button
const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhance the parallax effect
  // 1. Slow down the background movement slightly to increase the feeling of depth.
  const parallaxSpeed = 0.4;
  
  // 2. Dynamically adjust the overlay darkness to add more visual interest on scroll.
  // The opacity will go from 0.3 (30%) up to a max of 0.6 (60%).
  const overlayOpacity = Math.min(0.6, 0.3 + offsetY / 1500);


  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1920&auto=format&fit=crop')",
          transform: `translateY(${offsetY * parallaxSpeed}px)`,
          willChange: 'transform'
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-black"
        style={{ 
          opacity: overlayOpacity,
          willChange: 'opacity'
        }}
      ></div>
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
          <Button href="#contact" size="lg" variant="secondary" className="group font-serif tracking-wider">
            <span>Begin Your Transformation</span>
            <ArrowRightIcon />
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