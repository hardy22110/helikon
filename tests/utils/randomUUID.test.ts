import randomUUID from '@/utils/randomUUID'
// create mock crypto
const mockCrypto = {
  getRandomValues: jest.fn().mockImplementation((buffer) => {
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = Math.floor(Math.random() * 256)
    }
    return buffer
  }),
  randomUUID: jest.fn().mockReturnValue('be1180be-e7c2-4624-9f2c-c194cb93005a')
}

describe('randomUUID', () => {
  // global.crypto
  global.crypto = {
    ...mockCrypto,
    ...(global.crypto || {})
  } as Crypto & { randomUUID: jest.Mock<string, [], any> }

  test('returns a string', () => {
    expect(typeof randomUUID()).toBe('string')
  })

  test('returns a string of length 36', () => {
    expect(randomUUID().length).toBe(36)
  })

  test('returns a valid UUID', () => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    expect(uuidRegex.test(randomUUID())).toBe(true)
  })
})
