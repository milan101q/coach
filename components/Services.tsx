
import React from 'react';
import type { Service } from '../types.ts';
import Card from './ui/Card.tsx';

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.004 10.004 0 0012 10.5a10.004 10.004 0 003-1.649m-3 1.649V21" />
    </svg>
);


const services: Service[] = [
  {
    icon: <CompassIcon />,
    title: 'Clarity Session',
    description: 'A focused 90-minute session to untangle your thoughts, gain immediate clarity on a specific challenge, and define your next steps with confidence.',
  },
  {
    icon: <RocketIcon />,
    title: 'Transformation Program',
    description: 'A comprehensive 3-month one-on-one coaching journey to redefine your goals, build powerful habits, and create lasting, meaningful change in your life.',
  },
  {
    icon: <UsersIcon />,
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