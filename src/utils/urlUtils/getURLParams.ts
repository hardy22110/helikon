import isString from '../stringUtils/isString'
/**
 * Get the parameters and values from the URL and return them as a parameter object.
 * returns empty object if unresolvable path.
 * this parameter is ignored if the parameter cannot be parsed.
 * @since v0.0.1
 * @category URL
 * @param {string} url - URL
 * @returns {Record<string, string> } Parameter - URL Parameter
 * @example
 * // Get param
 * const url = 'http://example.com?name=value&key=asd'
 * console.log(
 *  getURLParams(url)
 * )
 * => { name: 'value', key: 'asd' }
 */
export default function getURLParams(url: string): Record<string, string> {
  let parameter: Record<string, string> = {}
  try {
    if (!isString(url) || url.trim().length === 0) {
      return {}
    }
    const targetURL = new URL(url)
    for (const [key, value] of targetURL.searchParams.entries()) {
      if (isString(key) && key.length > 0) {
        parameter[key] = value
      }
    }
  } catch {
    parameter = {}
  }
  return parameter
}
