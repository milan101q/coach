
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/id/1027/400/500" 
              alt="Jane Doe, Life Coach" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold font-serif text-teal-800 mb-4">Meet Your Coach, Jane Doe</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              For years, I felt stuck in a life that wasn't truly mine. I navigated a successful but unfulfilling career, constantly feeling like there was something more waiting for me. It was through my own journey of self-discovery and transformation that I found my true calling: helping others do the same.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              As a certified life coach, I combine empathetic listening with proven strategies to help you uncover your strengths, clarify your goals, and create actionable steps towards a more joyful and purposeful life. My approach is not about giving you the answers, but empowering you to find them within yourself.
            </p>
            <p className="text-lg text-gray-600 font-medium">
              Let's build a bridge from where you are to where you want to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
