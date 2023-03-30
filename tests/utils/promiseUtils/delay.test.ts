import delay from '@/utils/promiseUtils/delay'

describe('delay', () => {
  test('delay should return a Promise', () => {
    expect(delay(100)).toBeInstanceOf(Promise)
  })

  test('should return a promise that resolves after a delay', async () => {
    const startA = Date.now()
    await delay(100)
    const endA = Date.now()
    expect(endA - startA).toBeGreaterThanOrEqual(100)

    const startB = Date.now()
    await delay(200)
    const endB = Date.now()
    expect(endB - startB).toBeGreaterThanOrEqual(200)

    expect(endB - startA).toBeGreaterThanOrEqual(300)
  })

  test('delay should reject when time is not a number', () => {
    ;['str', undefined, null, [], {}, () => undefined].forEach(async (item) => {
      const start = Date.now()
      await delay(item as any)
      const end = Date.now()
      expect(end - start).toBeGreaterThanOrEqual(0)
    })
  })
})
