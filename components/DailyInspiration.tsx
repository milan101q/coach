import * as React from 'react';
import { generateInspiration, getRandomFallback } from '../services/geminiService.ts';
import Button from './ui/Button.tsx';
import Card from './ui/Card.tsx';

const ShareIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
);

const CopyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2V8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const DailyInspiration: React.FC = () => {
  // Initialize with a fallback quote to prevent API calls on load.
  const [inspiration, setInspiration] = React.useState(() => getRandomFallback());
  const [isLoading, setIsLoading] = React.useState(false); // Not loading initially.
  const [isFading, setIsFading] = React.useState(false); // Not fading initially.
  const [canShare, setCanShare] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  const getNewInspiration = React.useCallback(async () => {
    // 1. Fade out the current quote
    setIsFading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 2. Show loader and fetch new quote from the API
    setIsLoading(true);
    const quote = await generateInspiration();
    setInspiration(quote);
    setIsLoading(false);
  }, []);

  // Effect to trigger fade-in after a new quote is loaded
  React.useEffect(() => {
    if (!isLoading) {
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

  const handleCopy = async () => {
    if (inspiration) {
        try {
            await navigator.clipboard.writeText(`"${inspiration}"`);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2500);
        } catch (err) {
            console.error('Failed to copy text: ', err);
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
        <div className="flex justify-center items-center gap-4 flex-wrap">
            <Button onClick={getNewInspiration} disabled={isButtonDisabled}>
            {isLoading ? 'Generating...' : 'Get New Inspiration'}
            </Button>
            {canShare && (
                <Button 
                    onClick={handleShare} 
                    disabled={isButtonDisabled || !inspiration} 
                    variant="secondary"
                    aria-label="Share this quote"
                >
                    <ShareIcon />
                    <span>Share</span>
                </Button>
            )}
            <Button 
                onClick={handleCopy} 
                disabled={isButtonDisabled || !inspiration} 
                variant="secondary"
                aria-label="Copy this quote to clipboard"
            >
                {isCopied ? <CheckIcon /> : <CopyIcon />}
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </Button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
            New inspirations powered by Google Gemini.
        </p>
      </div>
    </section>
  );
};

export default DailyInspiration;