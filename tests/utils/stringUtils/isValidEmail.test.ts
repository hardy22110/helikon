import isValidEmail from '@/utils/stringUtils/isValidEmail'

describe.only('isValidEmail', () => {
  it('returns true when a valid email is passed in', () => {
    expect(isValidEmail('example@example.com.tw')).toBe(true)
    expect(isValidEmail('example01@example.com')).toBe(true)
  })

  it('returns false when an invalid email is passed in', () => {
    expect(isValidEmail('invalid.email')).toBe(false)
    expect(isValidEmail(null)).toBe(false)
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail(' ')).toBe(false)
    expect(isValidEmail('123')).toBe(false)
    expect(isValidEmail(123)).toBe(false)
  })
})
