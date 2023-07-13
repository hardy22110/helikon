import setNumberValue from '@/utils/setNumberValue'
/**
 * Delays the execution of the function by the given amount of time.
 * If the given time is less than zero, the function resolves after 0 seconds.
 * If a non-number value is passed in, treat it as 0
 * @since v0.0.1
 * @category Promise
 * @param time - The amount of time to delay the execution, in milliseconds.
 * @returns A promise that resolves after the specified delay.
 *
 * @example
 * delay(1000).then(() => {
 *    console.log('one second later')
 * })
 *
 * @example
 * async () => {
 *    await delay(1000)
 *    console.log('one second later')
 * }
 *
 */
export default function delay(time?: number) {
  return new Promise<void>((resolve) => {
    const ms = setNumberValue(time, 0)
    setTimeout(() => resolve(), ms < 0 ? 0 : ms)
  })
}
