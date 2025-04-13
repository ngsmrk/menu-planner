# Menu Planner

A Next.js application for generating menu item suggestions using AI.

## Getting Started

First, set up your environment variables by copying `.env.example` to `.env.local` and adding your API keys.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Generate menu item suggestions based on restaurant themes
- Built with Next.js and React
- Uses Google AI API for suggestions

## Environment Variables

This project uses dotenv for environment variable management. Required variables:

- `GOOGLE_API_KEY`: Your Google API key for AI services
- `NEXT_PUBLIC_APP_NAME`: The application name displayed in the UI

## 

To view the GenKit flows run

```bash
npx genkit start -- npx tsx --watch src/app/genkit.ts
```

NOTE: Make sure you have isntalled the GenKit CLI first by running

```bash
npm i --save-dev genkit-cli tsx
```

## Testing

Run the test suite with:

```bash
npm test
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Google AI Documentation](https://ai.google.dev/docs)
- [dotenv](https://github.com/motdotla/dotenv) for environment variable management
