

import * as React from 'react';
import type { FaqItem } from '../types.ts';

const faqData: FaqItem[] = [
  {
    question: "What is life coaching?",
    answer: "Life coaching is a partnership between a coach and a client designed to help the client achieve their personal and professional goals. It's about empowering you to find your own answers, create a plan, and stay accountable.",
  },
  {
    question: "How is coaching different from therapy?",
    answer: "While both are valuable, therapy often focuses on healing past traumas and managing mental health conditions. Coaching is forward-looking, focusing on setting and achieving goals to create a more fulfilling future.",
  },
  {
    question: "Who can benefit from life coaching?",
    answer: "Anyone who feels stuck, is navigating a major life transition, or simply wants to unlock their full potential can benefit. If you're ready to make meaningful changes in your life, coaching is for you.",
  },
  {
    question: "What are your qualifications?",
    answer: "I am a certified professional coach (CPC) through an ICF-accredited institution. I have hundreds of hours of coaching experience and am committed to continuous professional development.",
  },
];

const AccordionItem: React.FC<{ item: FaqItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:text-teal-700"
                onClick={onClick}
            >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                 <p className="pt-4 text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-teal-800">Frequently Asked Questions</h2>
        </div>
        <div>
          {faqData.map((item, index) => (
            <AccordionItem 
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;