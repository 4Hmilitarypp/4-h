import { trimToLength } from '../string'

describe('trimToLength', () => {
  it('should pass happy path', () => {
    expect(trimToLength(1, '01234 6789')).toBe('')
    expect(trimToLength(7, '01234 6789')).toBe('01234')
    expect(trimToLength(15, '01234 6789')).toBe('01234 6789')
  })
})
