import React, { useState, useCallback, useEffect } from 'react';
import { generateInspiration } from '../services/geminiService';
import Button from './ui/Button';
import Card from './ui/Card';

const ShareIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
);

const DailyInspiration: React.FC = () => {
  const [inspiration, setInspiration] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(true); // Used for animation
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  const fetchInspiration = useCallback(async (isInitial = false) => {
    // 1. Fade out the current quote if it's not the first load
    if (!isInitial) {
      setIsFading(true);
      // Wait for fade-out transition before showing loader
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // 2. Show loader and fetch new quote
    setIsLoading(true);
    const quote = await generateInspiration();
    setInspiration(quote);
    setIsLoading(false);
    // 3. Fade-in will be triggered by the useEffect below
  }, []);

  // Effect for the initial load
  useEffect(() => {
    fetchInspiration(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect to trigger fade-in after a new quote is loaded
  useEffect(() => {
    if (!isLoading) {
      // Use a short timeout to ensure the DOM has the new quote
      // before changing opacity, which triggers the CSS transition.
      const timer = setTimeout(() => setIsFading(false), 50);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleShare = async () => {
    if (canShare && inspiration) {
        try {
            await navigator.share({
                title: 'A Moment of Inspiration',
                text: `"${inspiration}"`,
            });
        } catch (error) {
            console.error('Error sharing quote:', error);
        }
    }
  };


  const isButtonDisabled = isFading || isLoading;

  return (
    <section id="inspiration" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold font-serif text-teal-800 mb-4">A Moment of Inspiration</h2>
        <Card className="min-h-[6rem] flex items-center justify-center p-6 my-6">
          {isLoading ? (
            <div className="animate-pulse w-full">
              <div className="h-4 bg-slate-200 rounded w-5/6 mb-3"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>
          ) : (
            <p className={`text-xl italic text-gray-700 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              "{inspiration}"
            </p>
          )}
        </Card>
        <div className="flex justify-center items-center gap-4">
            <Button onClick={() => fetchInspiration()} disabled={isButtonDisabled}>
            {isButtonDisabled ? 'Generating...' : 'Get New Inspiration'}
            </Button>
            {canShare && !isLoading && (
                <Button 
                    onClick={handleShare} 
                    disabled={isButtonDisabled} 
                    variant="secondary"
                    aria-label="Share this quote"
                >
                    <ShareIcon />
                    <span>Share</span>
                </Button>
            )}
        </div>
      </div>
    </section>
  );
};

export default DailyInspiration;