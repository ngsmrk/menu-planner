import type { NextConfig } from "next";
import path from 'path';

// Load dotenv at config time to make sure it's available during build
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly disable Next.js built-in env loading in favor of dotenv
  env: {},
  
  // We'll still allow env vars to be passed to the client through our utilities
  experimental: {
    // This ensures our server initialization code runs
    clientInstrumentationHook: true,
  }
};

export default nextConfig;
