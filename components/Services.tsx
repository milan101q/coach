

import * as React from 'react';
import type { Service } from '../types.ts';
import Card from './ui/Card.tsx';

// Icon for "Clarity Session" - Person balancing on a rope
const BalanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600 transition-transform duration-300 ease-in-out group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.5L3 15.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5L12 6" />
    <circle cx="12" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L12 11.5L14 14" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 9L17 9" />
  </svg>
);

// Icon for "Transformation Program" - A growing plant/seedling
const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M12 21V9M12 9c-2-2.5-5-3-5-3s2.5 3 4 5M12 9c2-2.5 5-3 5-3s-2.5 3-4 5" />
  </svg>
);

// Icon for "Group Coaching" - People collaborating
const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600 transition-transform duration-300 ease-in-out group-hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);


const services: Service[] = [
  {
    icon: <BalanceIcon />,
    title: 'Clarity Session',
    description: 'A focused 90-minute session to untangle your thoughts, gain immediate clarity on a specific challenge, and define your next steps with confidence.',
  },
  {
    icon: <GrowthIcon />,
    title: 'Transformation Program',
    description: 'A comprehensive 3-month one-on-one coaching journey to redefine your goals, build powerful habits, and create lasting, meaningful change in your life.',
  },
  {
    icon: <CommunityIcon />,
    title: 'Group Coaching',
    description: 'Join a small, supportive community of like-minded individuals. A 6-week program to learn, grow, and achieve your goals together.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-teal-800">Coaching Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Tailored programs designed to help you thrive, not just survive.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-8">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold font-serif mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;