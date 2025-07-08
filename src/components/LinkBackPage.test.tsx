import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LinkBackPage } from './LinkBackPage'

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: { 
    children: React.ReactNode; 
    href: string; 
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}))

describe('LinkBackPage', () => {
  it('should render link with correct href and text', () => {
    const href = '/launches'
    const text = 'Back to Launches'

    render(<LinkBackPage href={href} text={text} />)

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', href)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should render with arrow icon', () => {
    render(<LinkBackPage href="/test" text="Test Link" />)

    const icon = screen.getByRole('link').querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('should apply correct CSS classes', () => {
    render(<LinkBackPage href="/test" text="Test Link" />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('inline-flex', 'items-center', 'text-gray-600')
    expect(link).toHaveClass('hover:text-gray-900', 'dark:text-gray-400')
    expect(link).toHaveClass('dark:hover:text-gray-100', 'transition-colors', 'group')
  })

  it('should render with different href and text props', () => {
    const href = '/dashboard'
    const text = 'Return to Dashboard'

    render(<LinkBackPage href={href} text={text} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', href)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should have proper container structure', () => {
    const { container } = render(<LinkBackPage href="/test" text="Test" />)

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('mb-6')
  })
}) 