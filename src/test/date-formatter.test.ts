import { describe, it, expect } from 'vitest'
import { formatDate, formatDateShort } from '../utils/date-formatter'

describe('formatDate', () => {
  it('should format a valid date string correctly', () => {
    const result = formatDate('2024-01-15T10:30:00Z')
    expect(result).toBe('January 15, 2024')
  })

  it('should format another valid date correctly', () => {
    const result = formatDate('2023-12-25T00:00:00Z')
    expect(result).toBe('December 25, 2023')
  })

  it('should handle single digit days correctly', () => {
    const result = formatDate('2024-03-05T12:00:00Z')
    expect(result).toBe('March 05, 2024')
  })

  it('should return original string for invalid date', () => {
    const invalidDate = 'invalid-date-string'
    const result = formatDate(invalidDate)
    expect(result).toBe(invalidDate)
  })

  it('should return original string for empty string', () => {
    const result = formatDate('')
    expect(result).toBe('')
  })

  it('should handle ISO date strings', () => {
    const result = formatDate('2024-06-15')
    expect(result).toBe('June 15, 2024')
  })
})

describe('formatDateShort', () => {
  it('should format a valid date string in short format', () => {
    const result = formatDateShort('2024-01-15T10:30:00Z')
    expect(result).toBe('15/01/2024')
  })

  it('should format another valid date in short format', () => {
    const result = formatDateShort('2023-12-25T00:00:00Z')
    expect(result).toBe('25/12/2023')
  })

  it('should handle single digit days and months correctly', () => {
    const result = formatDateShort('2024-03-05T12:00:00Z')
    expect(result).toBe('05/03/2024')
  })

  it('should return original string for invalid date', () => {
    const invalidDate = 'invalid-date-string'
    const result = formatDateShort(invalidDate)
    expect(result).toBe(invalidDate)
  })

  it('should return original string for empty string', () => {
    const result = formatDateShort('')
    expect(result).toBe('')
  })

  it('should handle ISO date strings', () => {
    const result = formatDateShort('2024-06-15')
    expect(result).toBe('15/06/2024')
  })
}) 