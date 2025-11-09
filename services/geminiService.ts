import { GoogleGenAI } from "@google/genai";

// FIX: The GoogleGenAI client is now initialized lazily, only when needed.
// This prevents the entire app from crashing on load if the API key is missing,
// which was the likely cause of the blank page. The app will now load, and any
// potential API key errors will only occur when this specific feature is used.
const getAiClient = () => {
  // Aligned with guidelines to assume API_KEY is available from process.env.
  return new GoogleGenAI({ apiKey: process.env.API_KEY! });
};

export const generateInspiration = async (): Promise<string> => {
  try {
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a short, powerful, and inspiring motivational quote (1-2 sentences) for someone seeking personal growth and life improvement. Do not use quotation marks.",
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating inspiration:", error);
    return "Embrace challenges as opportunities for growth. Every setback is a setup for a comeback.";
  }
};
