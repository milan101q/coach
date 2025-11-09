


import * as React from 'react';
import Button from './ui/Button';

const About: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const [isTitleVisible, setIsTitleVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is in view, update the state
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          // Stop observing once it's visible to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentTitleRef = titleRef.current;
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white overflow-x-hidden">
      {/* Component-specific styles for the fade-in animation */}
      <style>{`
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&auto=format&fit=crop" 
              alt="A person stands on a snowy mountain peak, looking out at a vast mountain range, symbolizing achievement and looking towards the future." 
              className="rounded-lg shadow-xl object-cover w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            />
            <div className="mt-8">
              <Button href="#contact" size="lg">
                Book Your Free Discovery Call
              </Button>
            </div>
          </div>
          <div className="text-left">
            <h2 
              ref={titleRef}
              className={`text-4xl font-bold font-serif text-teal-800 mb-6 fade-in-on-scroll ${isTitleVisible ? 'is-visible' : ''}`}
            >
              Meet Your Coach, Hibba
            </h2>
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