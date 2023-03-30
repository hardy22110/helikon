import isString from './isString'

/**
 * Set input if value is string then set in instead of set in default value
 * @since v0.0.1
 * @category String
 * @param value
 * @param defaultValue
 * @returns value or defaultValue
 * @example
 * // Set string value
 * const stringValue = setStringValue('example', '')
 * console.log(
 *  numberValue
 * )
 * => 'example'
 *
 * @example
 * // Set default value
 * const nullValue = setStringValue(null, '')
 * console.log(
 *  numberValue
 * )
 * => ''
 */
export default function setStringValue<V, D>(value: V, defaultValue: D): V | D {
  if (isString(value)) {
    return value
  }
  return defaultValue
}
