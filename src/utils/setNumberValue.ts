import isNumber from './isNumber'

/**
 * Converts a value to a number, if possible, otherwise returns the default value.
 * @since v0.0.1
 * @category Number
 * @param value - The value to be converted to a number.
 * @param defaultValue - The default value to be returned if the value cannot be converted to a number.
 * @returns The converted number or the default value.
 * @example
 * // Set a number value
 * const numberValue = setNumberValue(123)
 * console.log(
 *  numberValue
 * )
 * => 123
 * @example
 * // Set a number value after conversion to a number
 * const stringValue = setNumberValue('1', null)
 * console.log(
 *  numberValue
 * )
 * => 1
 *
 * @example
 * // Set a null value
 * const emptyValue = setNumberValue(null)
 * console.log(
 *  numberValue
 * )
 * => undefined
 */
export default function setNumberValue<V, D>(
  value: V,
  defaultValue: D
): number | D {
  if (isNumber(value)) {
    return Number(value)
  }
  return defaultValue
}
