'use server';

import { gemini20Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

// Get environment variables
const googleApiKey = process.env.GOOGLE_API_KEY;
const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Menu Suggester';

console.log(`Google API Key is ${googleApiKey ? 'configured' : 'not configured'}`);

const ai = genkit({
  plugins: [googleAI({ apiKey: googleApiKey })],
  model: gemini20Flash,
});

export const menuSuggestionFlow = ai.defineFlow(
  {
    name: "menuSuggestionFlow",
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (restaurantTheme) => {
    // Use appName from environment variable
    const { text } = await ai.generate(`${appName}: Invent a menu item for a ${restaurantTheme} themed restaurant.`);
    
    // If genkit integration is not working (likely due to missing API key),
    // fall back to the placeholder implementation
    if (!text) {
      return `${appName} suggests for "${restaurantTheme}" theme: ${restaurantTheme.charAt(0).toUpperCase() + restaurantTheme.slice(1)} Delight`;
    }
    
    return text;
  }
);