declare namespace NodeJS {
  interface ProcessEnv {
    // Public variables (available in browser)
    NEXT_PUBLIC_API_KEY?: string;
    NEXT_PUBLIC_APP_NAME?: string;
    
    // Server-only variables
    API_SECRET?: string;
    API_ENDPOINT?: string;
  }
} 