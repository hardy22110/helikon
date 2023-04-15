import isString from './isString'
/**
 * Validates if a given string is a valid email address.
 *
 * The email address must:
 * - Contain one "@" symbol, with text before and after it
 * - Have a dot "." after the "@" symbol, followed by valid domain text
 * @since vx.x.x
 * @category String
 * @param {unknown} emailStr - The email address to be validated.
 * @returns {boolean} Returns true if the email address is valid, otherwise returns false.
 *
 * @example
 * // A valid email address
 * const emailA = 'example@example.com.tw'
 * console.log(
 *  isValidEmail(emailA)
 * )
 * => true
 *
 * @example
 * // not found
 * const emailB = 'example'
 * console.log(
 *  isValidEmail(emailB)
 * )
 * => false
 */
export default function isValidEmail(emailStr: unknown): boolean {
  if (!isString(emailStr)) {
    return false
  }
  if (emailStr.length === 0) {
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(emailStr)
}
