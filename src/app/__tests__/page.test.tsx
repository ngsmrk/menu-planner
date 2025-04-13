import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../page'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

// Test suite for the Home page component
describe('Home Page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the "Get started" text', () => {
    render(<Home />)
    const getStartedText = screen.getByText(/Get started by editing/i)
    expect(getStartedText).toBeInTheDocument()
  })

  it('renders both main action buttons', () => {
    render(<Home />)
    const deployButton = screen.getByText('Deploy now')
    const docsButton = screen.getByText('Read our docs')
    
    expect(deployButton).toBeInTheDocument()
    expect(docsButton).toBeInTheDocument()
  })

  it('renders all footer links', () => {
    render(<Home />)
    const learnLink = screen.getByText('Learn')
    const examplesLink = screen.getByText('Examples')
    const nextjsLink = screen.getByText('Go to nextjs.org →')
    
    expect(learnLink).toBeInTheDocument()
    expect(examplesLink).toBeInTheDocument()
    expect(nextjsLink).toBeInTheDocument()
  })
}) 