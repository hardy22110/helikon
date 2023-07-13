/**
 * Checks if the value is a number after conversion to a number.
 * @since v0.0.1
 * @category Number
 * @param value - The value to be checked
 * @returns A boolean indicating whether the value is a number or not
 * @example
 * // Value is a number
 * console.log(
 *  isNumber(123)
 * )
 * => true
 *
 * @example
 * // Value is not a number
 * console.log(
 *  isNumber(false)
 * )
 * => false
 *
 * @example
 * // Value after conversion is a number
 * console.log(
 *  isNumber('123')
 * )
 * => true
 */
export default function isNumber(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value)
}
