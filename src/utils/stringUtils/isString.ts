/**
 * The input is a string
 * @since v0.0.1
 * @category String
 * @param  value - The string to truncate.
 * @returns value is string
 * @example
 * // Is string
 * console.log(
 *  isString('example')
 * )
 * => true
 */
export default function isString(value: unknown): value is string {
  return typeof value === 'string'
}
