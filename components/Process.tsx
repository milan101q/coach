

import * as React from 'react';

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold text-xl mb-4">{number}</div>
    <h3 className="text-xl font-bold font-serif mb-2">{title}</h3>
    <p className="text-gray-600 px-4">{description}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-teal-800">How It Works</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">A simple, collaborative process to guide you on your journey.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 md:gap-0">
          <ProcessStep 
            number="1"
            title="Discovery Call"
            description="A complimentary 30-minute call to discuss your goals and see if we're a good fit."
          />
          <ProcessStep 
            number="2"
            title="Personalized Plan"
            description="We'll co-create a custom roadmap tailored to your unique aspirations and challenges."
          />
          <ProcessStep 
            number="3"
            title="Weekly Sessions"
            description="Consistent, focused one-on-one sessions to track progress, overcome obstacles, and gain insights."
          />
          <ProcessStep 
            number="4"
            title="Achieve & Sustain"
            description="Celebrate your wins and build the tools to maintain momentum long after our coaching ends."
          />
        </div>
      </div>
    </section>
  );
};

export default Process;