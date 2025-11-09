// Fix: Use React.JSX.Element to avoid relying on a global JSX namespace and resolve potential type conflicts.
import React from 'react';

export interface Service {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
