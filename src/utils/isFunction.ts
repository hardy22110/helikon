/**
 * Determines if the given value is a function.
 * @since vx.x.x
 * @category Function
 * @param {unknown} value - The value to check.
 * @returns {boolean} Whether the given value is a function.
 *
 * @example
 * // is a function
 * const exampleFn = () => {}
 * console.log(
 *  isFunction(exampleFn)
 * )
 * => true
 *
 * @example
 * // is not a function
 * const example = 'example'
 * console.log(
 *  isFunction(example)
 * )
 * => false
 */
export default function isFunction(value: unknown): boolean {
  return typeof value === 'function'
}
