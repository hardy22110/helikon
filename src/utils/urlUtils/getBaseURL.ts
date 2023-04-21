import isString from '@/utils/stringUtils/isString'

/**
 * Get the base URL without any query parameters or hash fragments. <br />
 * If the input is not a string or is an empty string, an empty string will be returned.
 * @since vx.x.x
 * @category URL
 * @param url - The URL to get the base URL from.
 * @returns The base URL without any query parameters or hash fragments.
 * @example
 * // Get base URL
 * const url = 'https://www.example.com/path/to/page'
 * console.log(
 *  getBaseURL(url)
 * )
 * => https://www.example.com/path/to/page
 *
 * @example
 * // Get base URL with query parameters
 * const url = 'https://www.example.com/path/to/page?param1=value1&param2=value2'
 * console.log(
 *  getBaseURL(url)
 * )
 * => https://www.example.com/path/to/page
 */
export default function getBaseURL(url: string): string {
  try {
    if (!isString(url) || url.length === 0) {
      return ''
    }
    const parsedUrl = new URL(url)
    return `${parsedUrl.origin}${parsedUrl.pathname}`
  } catch {
    return url
  }
}
