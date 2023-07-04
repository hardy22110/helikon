import delay from './delay'
import setNumberValue from '../numberUtils/setNumberValue'
/**
 * Execute the Promise repeatedly if the result is a failure.
 * - Return immediately when successful, or delay execution for a certain number of seconds before executing again until reaching the maximum number of repetitions.
 * - If the maximum number of repetitions is not a number or less than 1, treat it as executing only once.
 * - If the delay time for repeated execution is not a number or less than 0 milliseconds, treat it as 0 milliseconds.
 * - If a synchronous program error occurs, terminate immediately and return a rejection.
 * - If an asynchronous failure occurs, repeat the execution until successful or until reaching the maximum number of repetitions, then terminate and return the Promise itself.
 * @since v0.0.x
 * @category Promise
 * @param promiseFn - The Promise to execute.
 * @param maxAttempts - The maximum number of attempts for repeating the Promise in case of failure.
 * @param delayTimeout - The delay time between repeated executions, in milliseconds.
 * @returns Promise
 *
 * @example
 * const successfulPromise = (): Promise<string> => {
 *     return Promise.resolve('Success')
 * }
 * // success
 * retryPromise(successfulPromise, 1, 0)
 *    .then((res) => console.log('retryPromise then', res))
 *    .catch((error) => console.log('retryPromise catch', error))
 *
 *
 * @example
 * const checkData = (current: number) => {
 *    return new Promise((resolve, reject) => {
 *      if (current > 5) {
 *        resolve('success')
 *      } else {
 *        reject('fail')
 *      }
 *    })
 * }
 * // fail
 * retryPromise(() => checkData(1), 5, 1000)
 *    .then((res) => console.log('checkData then', res))
 *    .catch((error) => console.log('checkData catch', error))
 *
 */
export default function retryPromise<T>(
  promiseFn: () => Promise<T>,
  maxAttempts: number,
  delayTimeout: number
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let attempts = 0
    /**
     * 執行Promise
     */
    const executePromise = () => {
      try {
        attempts++
        promiseFn()
          .then(resolve)
          .catch((error) => {
            if (attempts < setNumberValue(maxAttempts, 1)) {
              delay(delayTimeout).finally(executePromise)
            } else {
              reject(error)
            }
          })
      } catch (error) {
        reject(error)
      }
    }
    executePromise()
  })
}
