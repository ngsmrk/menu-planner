import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../page'

// Mock the environment utilities
jest.mock('../../utils/env', () => ({
  publicEnvVars: {
    APP_NAME: 'Test App',
    API_KEY: 'test-api-key'
  },
  getEnvVar: (key: string, defaultValue = '') => {
    const envVars: Record<string, string> = {
      'GOOGLE_API_KEY': 'test-google-api-key',
      'NEXT_PUBLIC_APP_NAME': 'Test App'
    };
    return envVars[key] || defaultValue;
  }
}));

// Mock the menuSuggestionFlow function
jest.mock('../genkit', () => ({
  menuSuggestionFlow: jest.fn((theme) => Promise.resolve(`Test App suggests for "${theme}" theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)} Delight`))
}))

describe('Home Page', () => {
  it('renders the app name from environment variable', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Test App');
  })

  it('renders the form with input and button', () => {
    render(<Home />)
    
    const label = screen.getByText(/Suggest a menu item for a restaurant with this theme:/i)
    const input = screen.getByLabelText(/Suggest a menu item for a restaurant with this theme:/i)
    const button = screen.getByRole('button', { name: /Generate/i })
    
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('shows empty state initially', () => {
    render(<Home />)
    const preElement = screen.getByText('', { selector: 'pre' })
    expect(preElement).toBeInTheDocument()
    expect(preElement).toHaveTextContent('')
  })

  it('generates menu item when form is submitted', async () => {
    render(<Home />)
    
    const input = screen.getByLabelText(/Suggest a menu item for a restaurant with this theme:/i)
    const button = screen.getByRole('button', { name: /Generate/i })
    
    fireEvent.change(input, { target: { value: 'italian' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      const result = screen.getByText(/Test App suggests for "italian" theme: Italian Delight/i)
      expect(result).toBeInTheDocument()
    })
  })
}) 