import getBaseURL from '@/utils/urlUtils/getBaseURL'

describe('getBaseURL', () => {
  test('returns the base URL for a URL with query parameters', () => {
    const url =
      'https://www.example.com/path/to/page?param1=value1&param2=value2'
    expect(getBaseURL(url)).toBe('https://www.example.com/path/to/page')
  })

  test('returns the original URL if it does not have query parameters', () => {
    const url = 'https://www.example.com/path/to/page'
    expect(getBaseURL(url)).toBe(url)
  })

  test('returns an empty string for URL is not a string or is an empty string', () => {
    expect(getBaseURL('')).toBe('')
    expect(getBaseURL(undefined as any)).toBe('')
    expect(getBaseURL(null as any)).toBe('')
    expect(getBaseURL([] as any)).toBe('')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(getBaseURL((() => {}) as any)).toBe('')
    expect(getBaseURL(123 as any)).toBe('')
    expect(getBaseURL('example')).toBe('example')
  })

  test('returns the base URL for a URL with a hash fragment', () => {
    const url = 'https://www.example.com/path/to/page#hash'
    expect(getBaseURL(url)).toBe('https://www.example.com/path/to/page')
  })

  test('returns the base URL for a URL with a hash fragment and query parameters', () => {
    const url =
      'https://www.example.com/path/to/page?param1=value1&param2=value2#hash'
    expect(getBaseURL(url)).toBe('https://www.example.com/path/to/page')
  })
})
