import getURLParams from './getURLParams'

/**
 * Get the value of a parameter in the URL by inputting the parameter name.
 * @since v0.0.1
 * @category URL
 * @param url URL
 * @param key Parameter Name
 * @returns Parameter Value
 * @example
 * // Get the name parameter value
 * const url = 'http://example.com?name=value'
 * console.log(
 *  getURLParamValue(url, 'name')
 * )
 * => 'value'
 */
export default function getURLParamValue(url: string, key: string): string {
  const parameter = getURLParams(url)
  if (parameter[key] && parameter[key].length > 0) {
    return parameter[key]
  }
  return ''
}
