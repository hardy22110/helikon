import isString from '@/utils/isString'

describe('isString', () => {
  it('should return true if value is a string', () => {
    expect(isString('')).toBe(true)
    expect(isString('hello')).toBe(true)
  })

  it('should return false if value is not a string', () => {
    expect(isString(123)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
  })
})
