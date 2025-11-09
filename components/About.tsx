
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <img 
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&auto=format&fit=crop" 
            alt="A person stands on a snowy mountain peak, looking out at a vast mountain range, symbolizing achievement and looking towards the future." 
            className="rounded-lg shadow-xl object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="text-left">
            <h2 className="text-4xl font-bold font-serif text-teal-800 mb-6">Meet Your Coach, Hibba</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I wasn’t always living the life I wanted — but I refused to let my circumstances define me.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I immigrated from Morocco, full of hope for a better future. After a while, we moved to the U.S., where life took unexpected turns. I went through a difficult divorce and suddenly found myself a single mom, raising two kids in a new country with no roadmap and no safety net.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Every day was a test of strength, resilience, and faith. But giving up was never an option. I fought for my rights, my independence, and a better life for my children — one built on love, courage, and self-belief.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Through that journey, I discovered something powerful: real transformation begins when you stop surviving and start believing in your ability to thrive.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I studied hard, earned multiple certifications — including in Life Coaching — and turned my challenges into a mission. Today, I help others do the same: find clarity, rebuild confidence, and create a life that feels truly their own.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <b> If you’re ready to take your next step toward a life that feels authentic, joyful, and purposeful — I’m here to walk that journey with you.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
