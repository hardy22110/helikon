import isString from './isString'

/**
 * Truncates a string to the specified maximum length
 * @since v0.0.1
 * @category String
 * @param str The string to truncate.
 * @param maxLength The maximum string length.
 * @returns The truncated string.
 * @example
 * // Truncated to 3 lengths
 * console.log(
 *  truncate('example', 3)
 * )
 * => 'exa'
 */
export default function truncate<T>(str: T, maxLength: number): T | string {
  if (!isString(str) || str.length <= maxLength) {
    return str
  }
  return str.slice(0, maxLength)
}
