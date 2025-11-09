import { GoogleGenAI } from "@google/genai";

// Fix: Aligned with guidelines to assume API_KEY is available from process.env.
// This simplifies initialization and removes unnecessary checks.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateInspiration = async (): Promise<string> => {
  try {
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
