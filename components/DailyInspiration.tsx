import React, { useState, useCallback, useEffect } from 'react';
import { generateInspiration } from '../services/geminiService';
import Button from './ui/Button';

const DailyInspiration: React.FC = () => {
  const [inspiration, setInspiration] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fix: Removed redundant try-catch as error handling is already managed in geminiService.
  const fetchInspiration = useCallback(async () => {
    setIsLoading(true);
    const quote = await generateInspiration();
    setInspiration(quote);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchInspiration();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold font-serif text-teal-800 mb-4">A Moment of Inspiration</h2>
        <div className="min-h-[6rem] flex items-center justify-center p-6 bg-white rounded-lg shadow-md my-6">
          {isLoading ? (
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-3 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
          ) : (
            <p className="text-xl italic text-gray-700">"{inspiration}"</p>
          )}
        </div>
        <Button onClick={fetchInspiration} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Get New Inspiration'}
        </Button>
      </div>
    </section>
  );
};

export default DailyInspiration;
