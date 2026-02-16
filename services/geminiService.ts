
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getADURecommendations = async (
  lotSize: string,
  budget: string,
  goals: string
): Promise<RecommendationResponse | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 3 ADU plans for a Los Angeles homeowner. 
                 Lot Size: ${lotSize} sq ft. 
                 Budget: ${budget}. 
                 Goals: ${goals}.
                 Provide specific Los Angeles zoning context (SB 9, local ordinances).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            plans: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  type: { type: Type.STRING },
                  sqft: { type: Type.NUMBER },
                  estimatedCost: { type: Type.STRING },
                  timeline: { type: Type.STRING },
                  description: { type: Type.STRING },
                  pros: { type: Type.ARRAY, items: { type: Type.STRING } }
                },
                required: ["type", "sqft", "estimatedCost", "timeline", "description", "pros"]
              }
            },
            zoningAdvice: { type: Type.STRING },
            nextSteps: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["plans", "zoningAdvice", "nextSteps"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text.trim()) as RecommendationResponse;
  } catch (error) {
    console.error("Gemini Recommendation Error:", error);
    return null;
  }
};
