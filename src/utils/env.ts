import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Environment variable definitions with types and default values
interface EnvVars {
  // Public variables (available in browser through explicit export)
  NEXT_PUBLIC_API_KEY: string;
  NEXT_PUBLIC_APP_NAME: string;
  
  // Server-only variables
  API_SECRET: string;
  API_ENDPOINT: string;
  GOOGLE_API_KEY: string;
}

// Get an environment variable with type safety and default value
export function getEnvVar(key: keyof EnvVars, defaultValue: string = ''): string {
  return process.env[key] || defaultValue;
}

// Export specific public environment variables that need to be accessed on the client
export const publicEnvVars = {
  API_KEY: getEnvVar('NEXT_PUBLIC_API_KEY', ''),
  APP_NAME: getEnvVar('NEXT_PUBLIC_APP_NAME', 'Menu Planner'),
};

// Validate that required environment variables are set
export function validateEnv(): boolean {
  const requiredVars: (keyof EnvVars)[] = ['GOOGLE_API_KEY'];
  const missingVars = requiredVars.filter(key => !process.env[key]);
  
  if (missingVars.length > 0) {
    console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
    return false;
  }
  
  return true;
}

// Call validateEnv to check environment variables at startup
validateEnv(); 