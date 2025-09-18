import { describe, expect, it } from 'vitest'
import { truncateString } from './string.js'

describe('truncateString', () => {
  it('returns the original string when length is within the limit', () => {
    expect(truncateString('Sushi', 10, 'end')).toBe('Sushi')
    expect(truncateString('Roll', 4, 'middle')).toBe('Roll')
  })

  it('truncates from the end when type is end', () => {
    expect(truncateString('SushiSwap', 5, 'end')).toBe('Sushi...')
    expect(truncateString('Tempura', 0, 'end')).toBe('...')
  })

  it('truncates from the middle when type is middle', () => {
    expect(truncateString('SushiSwap', 4, 'middle')).toBe('Su...ap')
    expect(truncateString('abcdefghij', 6, 'middle')).toBe('abc...hij')
  })

  it('uses the floor of half the max length for middle truncation', () => {
    expect(truncateString('abcdefghij', 5, 'middle')).toBe('ab...ij')
    expect(truncateString('abcdefghij', 3, 'middle')).toBe('a...j')
  })
})
