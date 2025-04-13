'use client';

import { menuSuggestionFlowWithPrompt } from './genkit';
import { useState } from 'react';
import { publicEnvVars } from '../utils/env';

export default function Home() {
  const [menuItem, setMenuItem] = useState<string>('');
  const appName = publicEnvVars.APP_NAME;

  async function getMenuItem(formData: FormData) {
    const theme = formData.get('theme')?.toString() ?? '';
    const suggestion = await menuSuggestionFlowWithPrompt(theme);
    setMenuItem(suggestion.menu);
  }

  return (
    <main>
      <h1>{appName}</h1>
      <form action={getMenuItem}>
        <label htmlFor="theme">
          Suggest a menu item for a restaurant with this theme:{' '}
        </label>
        <input type="text" name="theme" id="theme" />
        <br />
        <br />
        <button type="submit">Generate</button>
      </form>
      <br />
      <pre>{menuItem}</pre>
    </main>
  );
}