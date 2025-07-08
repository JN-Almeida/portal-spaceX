import { describe, it, expect } from 'vitest'
import { getYouTubeVideoId } from '../utils/getYouTubeVideoId'

describe('getYouTubeVideoId', () => {
  it('should extract video ID from standard watch URL', () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    const result = getYouTubeVideoId(url)
    expect(result).toBe('dQw4w9WgXcQ')
  })

  it('should extract video ID from youtu.be shortened URL', () => {
    const url = 'https://youtu.be/dQw4w9WgXcQ'
    const result = getYouTubeVideoId(url)
    expect(result).toBe('dQw4w9WgXcQ')
  })

  it('should extract video ID from embed URL', () => {
    const url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    const result = getYouTubeVideoId(url)
    expect(result).toBe('dQw4w9WgXcQ')
  })

  it('should extract video ID from URL with additional parameters', () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s&list=PLxyz'
    const result = getYouTubeVideoId(url)
    expect(result).toBe('dQw4w9WgXcQ')
  })

  it('should extract video ID from mobile URL', () => {
    const url = 'https://m.youtube.com/watch?v=dQw4w9WgXcQ'
    const result = getYouTubeVideoId(url)
    expect(result).toBe('dQw4w9WgXcQ')
  })

  it('should return null for invalid YouTube URL', () => {
    const url = 'https://www.example.com/watch?v=dQw4w9WgXcQ'
    const result = getYouTubeVideoId(url)
    expect(result).toBeNull()
  })

  it('should return null for empty string', () => {
    const result = getYouTubeVideoId('')
    expect(result).toBeNull()
  })

  it('should return null for invalid video ID length', () => {
    const url = 'https://www.youtube.com/watch?v=short'
    const result = getYouTubeVideoId(url)
    expect(result).toBeNull()
  })

  it('should return null for non-string input', () => {
    const url = 'not-a-url'
    const result = getYouTubeVideoId(url)
    expect(result).toBeNull()
  })
}) 