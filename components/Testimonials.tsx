

import * as React from 'react';
import type { Testimonial } from '../types.ts';
import Card from './ui/Card.tsx';

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Jane was life-changing. I went from feeling lost and overwhelmed to having a clear vision for my future and the confidence to pursue it. I can't recommend her enough!",
    name: 'Sarah L.',
    title: 'Marketing Director',
    imageUrl: 'https://picsum.photos/id/237/100/100',
  },
  {
    quote: "I was skeptical about life coaching, but Jane's practical and empathetic approach completely won me over. I've achieved more in the last three months than I did in the previous three years.",
    name: 'Michael B.',
    title: 'Software Engineer',
    imageUrl: 'https://picsum.photos/id/238/100/100',
  },
  {
    quote: 'The group coaching program was incredible. It provided a safe and supportive space to grow alongside others. Jane is a masterful facilitator who brings out the best in everyone.',
    name: 'Emily C.',
    title: 'Entrepreneur',
    imageUrl: 'https://picsum.photos/id/239/100/100',
  },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-teal-800 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-serif">What My Clients Say</h2>
                    <p className="text-lg text-teal-200 mt-4 max-w-2xl mx-auto">Real stories from people who transformed their lives.</p>
                </div>
                <div className="relative max-w-3xl mx-auto h-80 md:h-64">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={`absolute w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                           <Card className="bg-white/10 p-8 rounded-lg text-center">
                                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center justify-center">
                                    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-teal-200">{testimonial.title}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;