import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LaunchesCards, LaunchesCardsSkeleton, LaunchesCardsSkeletonGrid } from './LaunchesCards'
import { Launch } from '@/types/spacex'

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: { 
    src: string; 
    alt: string; 
    width: number; 
    height: number; 
    className?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
    />
  ),
}))

vi.mock('@/utils/date-formatter', () => ({
  formatDate: vi.fn(() => 'January 15, 2024')
}))

const mockLaunch: Launch = {
  id: '1',
  mission_name: 'Test Mission',
  launch_date_local: '2024-01-15T10:30:00-05:00',
  launch_date_utc: '2024-01-15T10:30:00Z',
  launch_success: true,
  upcoming: false,
  details: 'Test mission details',
  links: {
    flickr_images: ['https://example.com/image.jpg'],
    mission_patch: 'https://example.com/patch.png',
    video_link: 'https://youtube.com/watch?v=test'
  },
  rocket: {
    rocket_name: 'Falcon 9'
  }
}

describe('LaunchesCardsSkeleton', () => {
  it('should render skeleton card correctly', () => {
    const { container } = render(<LaunchesCardsSkeleton />)
    
    const card = container.querySelector('.w-full.max-w-sm')
    expect(card).toBeInTheDocument()
    
    const skeletons = container.querySelectorAll('.bg-gray-700\\/50, .bg-gray-700')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('should have correct styling classes', () => {
    const { container } = render(<LaunchesCardsSkeleton />)
    
    const card = container.firstChild
    expect(card).toHaveClass('w-full', 'max-w-sm', 'bg-gradient-to-br')
  })
})

describe('LaunchesCardsSkeletonGrid', () => {
  it('should render default number of skeleton cards', () => {
    const { container } = render(<LaunchesCardsSkeletonGrid />)
    
    const skeletonCards = container.querySelectorAll('.w-full.max-w-sm')
    expect(skeletonCards).toHaveLength(6)
  })

  it('should render custom number of skeleton cards', () => {
    const { container } = render(<LaunchesCardsSkeletonGrid count={3} />)
    
    const skeletonCards = container.querySelectorAll('.w-full.max-w-sm')
    expect(skeletonCards).toHaveLength(3)
  })

  it('should have grid layout classes', () => {
    const { container } = render(<LaunchesCardsSkeletonGrid />)
    
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3')
  })
})

describe('LaunchesCards', () => {
  it('should render launch information correctly', () => {
    render(<LaunchesCards launch={mockLaunch} />)
    
    expect(screen.getByText('Test Mission')).toBeInTheDocument()
    
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument()
    
    expect(screen.getByText('LAUNCH DATE')).toBeInTheDocument()
  })

  it('should render image with correct props', () => {
    render(<LaunchesCards launch={mockLaunch} />)
    
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
    expect(image).toHaveAttribute('alt', 'Test Mission')
    expect(image).toHaveAttribute('width', '120')
    expect(image).toHaveAttribute('height', '120')
  })

  it('should use default image when no flickr images available', () => {
    const launchWithoutImage = {
      ...mockLaunch,
      links: {
        ...mockLaunch.links,
        flickr_images: []
      }
    }
    
    render(<LaunchesCards launch={launchWithoutImage} />)
    
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/assets/img-default.png')
  })

  it('should create correct link to launch details', () => {
    render(<LaunchesCards launch={mockLaunch} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/launches/1')
  })

  it('should apply hover effects classes', () => {
    const { container } = render(<LaunchesCards launch={mockLaunch} />)
    
    const card = container.querySelector('.group')
    expect(card).toHaveClass('hover:border-cyan-400/50', 'hover:scale-102')
    expect(card).toHaveClass('transition-all', 'duration-300')
  })

  it('should handle missing mission name', () => {
    const launchWithoutName = {
      ...mockLaunch,
      mission_name: ''
    }
    
    render(<LaunchesCards launch={launchWithoutName} />)
    
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Launch Image')
  })

  it('should handle missing launch date', () => {
    const launchWithoutDate = {
      ...mockLaunch,
      launch_date_utc: ''
    }
    
    render(<LaunchesCards launch={launchWithoutDate} />)
    
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument()
  })
}) 