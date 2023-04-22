declare const __VERSION__: string

/**
 * @since 0.0.0
 * get the version
 * @returns {string} version
 * @example
 *
 * console.log(
 *  getVersion()
 * )
 * => 'v0.0.0'
 */
export function getVersion(): string {
  return `v${__VERSION__}`
}

export * as utils from './utils'
