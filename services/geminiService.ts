

// FIX: The GoogleGenAI client is now initialized lazily, only when needed.
// This prevents the entire app from crashing on load if the API key is missing,
// which was the likely cause of the blank page. The app will now load, and any
// potential API key errors will only occur when this specific feature is used.
const getAiClient = async () => {
  // Aligned with guidelines to assume API_KEY is available from process.env.
  // Dynamically import GoogleGenAI to ensure the module is only loaded when this function is called.
  const { GoogleGenAI } = await import('@google/genai');
  return new GoogleGenAI({ apiKey: process.env.API_KEY! });
};

const fallbackQuotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "The secret of getting ahead is getting started.",
  "Embrace challenges as opportunities for growth. Every setback is a setup for a comeback.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you."
];

export const getRandomFallback = (): string => {
  return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
};


export const generateInspiration = async (): Promise<string> => {
  try {
    const ai = await getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a short, powerful, and inspiring motivational quote (1-2 sentences) for someone seeking personal growth and life improvement. Do not use quotation marks.",
    });
    
    const text = response.text.trim();
    // Handle empty response from API
    if (!text) {
        return getRandomFallback();
    }
    return text;

  } catch (error) {
    // Silently catch the error to prevent user-facing messages about API quota limits.
    // The function will gracefully return a fallback quote instead.
    return getRandomFallback();
  }
};