import retryPromise from '@/utils/promiseUtils/retryPromise'

describe('retryPromise', () => {
  // Mock successful promise function
  const successfulPromise = (): Promise<string> => {
    return Promise.resolve('Success')
  }

  // Mock failing promise function
  const failingPromise = () => {
    return Promise.reject(new Error('Failed'))
  }

  // Test case for successful promise execution
  test('should resolve with successful promise', async () => {
    const result = await retryPromise(successfulPromise, 3, 1000)
    expect(result).toBe('Success')
  })

  // Test case for failing promise execution
  test('should reject with error after maximum attempts', async () => {
    await expect(retryPromise(failingPromise, 3, 1000)).rejects.toThrow(Error)
  })

  // Test case for retrying promise execution
  test('should retry and resolve with successful promise', async () => {
    let attempts = 0

    const promiseFn = () => {
      attempts++

      if (attempts < 3) {
        return Promise.reject(new Error('Failed'))
      } else {
        return Promise.resolve('Success')
      }
    }

    const result = await retryPromise(promiseFn, 5, 1000)
    expect(result).toBe('Success')
  })
  test('should reject with error after maximum attempts', async () => {
    const notPromise = () => true
    await expect(retryPromise(notPromise as any, 3, 1000)).rejects.toThrow(
      Error
    )
  })
})
